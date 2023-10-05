import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {combineLatest, delay, firstValueFrom, map, Observable} from "rxjs";
import {Product} from "../../../core/interfaces/product.interface";
import {ActivatedRoute} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngxs/store";
import {ProductsState} from "../../../core/state/products/products.state";
import {ProductsActions} from "../../../core/state/products/products.actions";

@Component({
  selector: 'euris-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ProductViewComponent>
  ) {
  }
  readonly fields: (keyof Product)[] = ['category', 'price', 'employee'];
  readonly product$: Observable<Product> = this.store.select(ProductsState.GetActiveProduct());
  readonly loading$: Observable<boolean> = combineLatest([
    this.store.select(ProductsState.Loading(ProductsActions.GetProduct.type)),
    this.store.select(ProductsState.Loading(ProductsActions.DeleteProduct.type)),
  ]).pipe(
    map(([getting, deleting]) => getting || deleting)
  );

  ngOnInit(): void {
  }

  async deleteProduct(id: Product['id']) {
    await firstValueFrom(this.store.dispatch(new ProductsActions.DeleteProduct(id)));
    this.dialogRef.close();
  }

}
