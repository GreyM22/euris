import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ProductsService} from "../state-data/products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductViewResolver implements Resolve<boolean> {
  constructor(private productService: ProductsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (route.paramMap.has('productId')) {
      this.productService.setActiveProduct(route.paramMap.get('productId') as string)
      return of(true);
    }
    return of(false);
  }
}
