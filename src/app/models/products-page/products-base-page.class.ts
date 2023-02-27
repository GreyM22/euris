import { Directive } from '@angular/core';
import {ProductsService} from "../../services/state-data/products.service";
import {firstValueFrom, Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Directive()
export class ProductsBasePage {

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) {
  }
  readonly products$: Observable<Product[]> = this.productsService.products$;

  viewProduct(id: string) {
    this.router.navigate([this.router.url, id]);
  }

  async deleteProduct(id: string) {
    await firstValueFrom(this.productsService.deleteProduct$(id));
  }

}
