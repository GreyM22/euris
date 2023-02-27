import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, filter, finalize, map, mergeMap, Observable, of, tap} from "rxjs";
import {ProductsApiService} from "../data-providers/products-api.service";
import { Map } from 'immutable';
import {Product} from "../../interfaces/product.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoadingClass} from "../../models/loader/loading.class";
import {SNACKBAR_OPTIONS} from "../../consts/snackbar/snackbar.options";
@Injectable({
  providedIn: 'root'
})
export class ProductsService extends LoadingClass {
  constructor(
    private productApi: ProductsApiService,
    private snackBar: MatSnackBar
  ) {
    super();
  }
  /* loading key for spinner or progress bar */
  readonly GET_PRODUCT = 'get-product';
  readonly GET_PRODUCTS = 'get-products';
  readonly DELETE_PRODUCT = 'delete-product';
  readonly ADD_PRODUCT = 'add-product';
  private pageNumber = 1;

  private pageSize$$ = new BehaviorSubject<number>(20);
  readonly pageSize$: Observable<number> = this.pageSize$$;

  /* used to get the id of the product that is viewed by the user */
  private readonly activeProductId$$ = new BehaviorSubject<Product['id'] | null>(null);
  readonly activeProductId$: Observable<Product['id']> = this.activeProductId$$.pipe(
    filter((productId): productId is Product['id'] => !!productId)
  );

  private readonly products$$ = new BehaviorSubject<Map<string, Product>>(Map<string, Product>());
  public readonly products$: Observable<Product[]> = this.products$$.pipe(
    map(productsMap => Array.from(productsMap.values()))
  );
  public readonly nrOfProducts$: Observable<number> = this.products$$.pipe(
    map(products => products.count())
  )
  private readonly totalNrOfProducts$$ = new BehaviorSubject<number>(0);
  public readonly totalNrOfProducts$: Observable<number> = this.totalNrOfProducts$$;

  setPageSize$(value: number): Observable<Product[]> {
    this.pageSize$$.next(value);
    this.clear();
    return this.getFirstProductPage$();
  }
  setActiveProduct(id: Product['id']) {
    this.activeProductId$$.next(id);
  }

  getActiveProduct$(): Observable<Product> {
    return this.activeProductId$.pipe(
      mergeMap(productId => this.getProduct$(productId))
    );
  }

  getFirstProductPage$(): Observable<Product[]> {
    this.pageNumber = 1;
    if (this.products$$.value.count()) {
      return of(Array.from(this.products$$.value.values()))
    }
    return this.getProducts$();
  }

  getNextProductPage$(): Observable<Product[]> {
    ++this.pageNumber;
    return this.getProducts$();
  }

  getProducts$(): Observable<Product[]> {
    this.startLoading(this.GET_PRODUCTS);
    return this.productApi.getProducts(this.pageNumber, this.pageSize$$.value).pipe(
      tap(res => {
        const newProducts = res.list;
        this.totalNrOfProducts$$.next(res.length);
        const currentProducts = this.products$$.value;
        const productsAsObj = newProducts.reduce<Record<string, Product>>((acc, product) => {
          acc[product.id] = {id: product.id, ...product.data};
          return acc;
        }, {});
        this.products$$.next(currentProducts.merge(productsAsObj))
      }),
      map(() => Array.from(this.products$$.value.values())),
      finalize(() => this.endLoading(this.GET_PRODUCTS)),
      catchError(err => {
        this.snackBar.open('Error getting the products!', '', SNACKBAR_OPTIONS);
        throw err;
      })
    );
  }

  addProduct$(payload: Omit<Product, 'id'>): Observable<Product> {
    this.startLoading(this.ADD_PRODUCT);
    return this.productApi.addNewProduct(payload).pipe(
      tap(product => this.products$$.next(
        this.products$$.value.set(product.id, product)
      )),
      tap(() => this.snackBar.open('Product was created successfully!', '', SNACKBAR_OPTIONS)),
      finalize(() => this.endLoading(this.ADD_PRODUCT)),
      catchError((err, caught) => {
        this.snackBar.open('Error adding the product!');
        throw err;
      })
    );
  }

  getProduct$(id: string): Observable<Product> {
    this.startLoading(this.GET_PRODUCT);
    return this.productApi.getProduct(id).pipe(
      tap(product =>this.products$$.next(
        this.products$$.value.set(id, product)
      )),
      finalize(() => this.endLoading(this.GET_PRODUCT)),
      catchError(err => {
        this.snackBar.open('Error getting the product!', '', SNACKBAR_OPTIONS);
        throw err;
      })
    );
  }

  deleteProduct$(id: string): Observable<void> {
    this.startLoading(this.DELETE_PRODUCT);
    return this.productApi.deleteProduct(id).pipe(
      tap(() => this.products$$.next(
        this.products$$.value.delete(id)
      )),
      tap(() => this.totalNrOfProducts$$.next(this.totalNrOfProducts$$.value - 1)),
      tap(() => this.snackBar.open(
        'Product deleted!',
        '',
        SNACKBAR_OPTIONS
      )),
      finalize(() => this.endLoading(this.DELETE_PRODUCT)),
      catchError(err => {
        this.snackBar.open(
          'Error deleting the product!',
          '',
          SNACKBAR_OPTIONS
        );
        console.error('Error deleting a product, err =>', err);
        throw err;
      })
    );
  }

  clear() {
    this.products$$.next(Map<string, Product>());
  }


}
