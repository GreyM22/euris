import { Directive } from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {ProductsActions} from "../../state/products/products.actions";
import {ProductsState} from "../../state/products/products.state";

@Directive()
export class ProductsBasePage {

  constructor(
    private store: Store,
    private router: Router
    ) {
  }
  readonly products$: Observable<Product[]> = this.store.select(ProductsState.GetProducts());

  viewProduct(id: string) {
    this.router.navigate([this.router.url, id]);
  }

  deleteProduct(id: string) {
    this.store.dispatch(new ProductsActions.DeleteProduct(id));
  }

}
