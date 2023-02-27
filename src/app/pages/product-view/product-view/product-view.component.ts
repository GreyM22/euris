import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {combineLatest, delay, firstValueFrom, map, Observable} from "rxjs";
import {Product} from "../../../interfaces/product.interface";
import {ProductsService} from "../../../services/state-data/products.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'euris-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ProductViewComponent>
  ) {
  }
  readonly fields: (keyof Product)[] = ['category', 'price', 'employee'];
  readonly product$: Observable<Product> = this.productService.getActiveProduct$();
  readonly loading$: Observable<boolean> = combineLatest([
    this.productService.loading$(this.productService.GET_PRODUCT),
    this.productService.loading$(this.productService.DELETE_PRODUCT)
  ]).pipe(
    map(([getting, deleting]) => getting || deleting)
  );

  ngOnInit(): void {
  }

  async deleteProduct(id: Product['id']) {
    await firstValueFrom(this.productService.deleteProduct$(id));
    this.dialogRef.close();
  }

}
