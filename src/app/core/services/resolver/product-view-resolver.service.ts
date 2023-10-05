import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Store} from "@ngxs/store";
import {ProductsActions} from "../../state/products/products.actions";

@Injectable({
  providedIn: 'root'
})
export class ProductViewResolver implements Resolve<boolean> {
  constructor(private store: Store) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (route.paramMap.has('productId')) {
      this.store.dispatch(new ProductsActions.SetActiveProduct(route.paramMap.get('productId') as string));
      return of(true);
    }
    return of(false);
  }
}
