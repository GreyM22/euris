import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product, ProductApi} from "../../interfaces/product.interface";
import {ApiHandler} from "../../models/api/api-handler.abstract";
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ApiHandler {
  protected namespace = `products`;

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(page: number, pageSize: number): Observable<{ list: ProductApi[], length: number }> {
    return this.http.get<{ list: ProductApi[], length: number }>(
      this.endpoint,
      {params: this.buildGETParams({page, elements: pageSize})}
    );
  }

  addNewProduct(payload: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post(this.endpoint, payload, {responseType: 'text'}).pipe(
      map((res) => ({id: res, ...payload}))
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Omit<Product, 'id'>>(this.resourceEndpoint(id)).pipe(
      map(product => ({id, ...product}))
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(this.resourceEndpoint(id));
  }
}
