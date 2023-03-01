import {ProductsModel} from "./products.model";
import {Action, State, StateContext} from "@ngxs/store";
import {Product} from "../../../interfaces/product.interface";
import {Injectable} from "@angular/core";
import {ProductsApiService} from "../../../services/data-providers/products-api.service";
import {ProductsActions} from "./products.actions";
import {catchError, finalize, tap} from "rxjs";
import {SNACKBAR_OPTIONS} from "../../../consts/snackbar/snackbar.options";
import {MatSnackBar} from "@angular/material/snack-bar";
import produce from "immer";
import {ProductsSelector} from "./products.selector";

@State<ProductsModel.State>({
  name: 'products',
  defaults: {
    loadings: {},
    totalNrOfProducts: 0,
    pageSize: 10,
    pageNumber: 1,
    activeProductId: '',
    products: {}
  }
})
@Injectable()
export class ProductsState extends ProductsSelector {
  constructor(
    private productApi: ProductsApiService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  @Action(ProductsActions.SetPageSize)
  setPageSize(ctx: StateContext<ProductsModel.State>, {pageSize}: ProductsActions.SetPageSize) {
    ctx.patchState({pageSize});
  }
  @Action(ProductsActions.SetActiveProduct)
  setActiveProduct(ctx: StateContext<ProductsModel.State>, {id}: ProductsActions.SetActiveProduct) {
    ctx.patchState({activeProductId: id});
  }

  @Action(ProductsActions.LoadProductsPage)
  loadProductPage(ctx: StateContext<ProductsModel.State>) {
    ctx.patchState({loadings: {
      [ProductsActions.LoadProductsPage.type]: true
    }})
    const {pageNumber, pageSize, products} = ctx.getState();
    return this.productApi.getProducts(pageNumber, pageSize).pipe(
      tap(res => {
        const newProducts = res.list.reduce<Record<string, Product>>((acc, product) => {
          acc[product.id] = {id: product.id, ...product.data};
          return acc;
        }, {})
        ctx.patchState({
          totalNrOfProducts: res.length,
          products: {
            ...products,
            ...newProducts
          }
        })
      }),
      finalize(() => ctx.patchState({loadings: {
        [ProductsActions.LoadProductsPage.type]: false
        }})
      ),
      catchError(err => {
        this.snackBar.open('Error getting the products!', '', SNACKBAR_OPTIONS);
        throw err;
      })
    )
  }

  @Action(ProductsActions.GetFirstProductsPage)
  getFirstProductPage(ctx: StateContext<ProductsModel.State>) {
    ctx.patchState({pageNumber: 1});
    return ctx.dispatch(new ProductsActions.LoadProductsPage())
  }

  @Action(ProductsActions.GetNextProductsPage)
  getNextProductsPage(ctx: StateContext<ProductsModel.State>) {
    ctx.patchState({pageNumber: ++ctx.getState().pageNumber});
    return ctx.dispatch(new ProductsActions.LoadProductsPage())
  }

  @Action(ProductsActions.AddProduct)
  addProduct(ctx: StateContext<ProductsModel.State>, {payload}: ProductsActions.AddProduct) {
    ctx.patchState({loadings:{
      [ProductsActions.AddProduct.type]: true
    }});
    return this.productApi.addNewProduct(payload).pipe(
      tap(product => ctx.setState(produce(ctx.getState(), draft => {
        draft.products[product.id] = product;
      }))),
      tap(() => this.snackBar.open('Product was created successfully!', '', SNACKBAR_OPTIONS)),
      finalize(() => ctx.patchState({loadings: {
        [ProductsActions.AddProduct.type]: false
      }})),
      catchError((err, caught) => {
        this.snackBar.open('Error adding the product!', '', SNACKBAR_OPTIONS);
        throw err;
      })
    );
  }

  @Action(ProductsActions.DeleteProduct)
  deleteProduct(ctx: StateContext<ProductsModel.State>, {id}: ProductsActions.DeleteProduct) {
    ctx.patchState({loadings: {
      [ProductsActions.DeleteProduct.type]: true
      }});
    return this.productApi.deleteProduct(id).pipe(
      tap(() => ctx.setState(produce(ctx.getState(), draft => {
        delete draft.products[id];
      }))),
      tap(() => this.snackBar.open(
        'Product deleted!',
        '',
        SNACKBAR_OPTIONS
      )),
      finalize(() => ctx.patchState({loadings: {
        [ProductsActions.DeleteProduct.type]: false
      }})),
      catchError(err => {
        this.snackBar.open(
          'Error deleting the product!',
          '',
          SNACKBAR_OPTIONS
        );
        console.error('Error deleting a product, err =>', err);
        throw err;
      })
    )
  }

  @Action(ProductsActions.MakeRefresh)
  makeRefresh(ctx: StateContext<ProductsModel.State>) {
    ctx.patchState({pageNumber: 1, products: {}});
    return ctx.dispatch(new ProductsActions.LoadProductsPage())
  }

  @Action(ProductsActions.GetProduct)
  getProduct(ctx: StateContext<ProductsModel.State>, {id}: ProductsActions.GetProduct) {
    ctx.patchState({loadings: {
      [ProductsActions.GetProduct.type]: true
    }})
    return this.productApi.getProduct(id).pipe(
      tap(product => ctx.setState(produce(ctx.getState(), draft => {
        draft.products[id] = product;
      }))),
      finalize(() => ctx.patchState({loadings: {
        [ProductsActions.GetProduct.type]: false
      }})),
      catchError(err => {
        this.snackBar.open('Error getting the product!', '', SNACKBAR_OPTIONS);
        throw err;
      })
    )
  }

}
