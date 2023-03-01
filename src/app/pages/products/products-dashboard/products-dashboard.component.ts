import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {firstValueFrom, Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {MatSelectChange} from "@angular/material/select";
import {Store} from "@ngxs/store";
import {ProductsState} from "../../../core/state/products/products.state";
import {ProductsActions} from "../../../core/state/products/products.actions";

@Component({
  selector: 'euris-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDashboardComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  readonly loading$: Observable<boolean> = this.store.select(ProductsState.Loading(ProductsActions.LoadProductsPage.type));
  readonly pageSizeOptions: number[] = [5, 10, 20, 50];
  readonly nrOfProducts$ = this.store.select(ProductsState.GetNrOfProducts());
  readonly totalNrOfProducts$ = this.store.select(ProductsState.GetTotalNrOfProducts());
  readonly pageSize$ = this.store.select(ProductsState.PageSize());

  ngOnInit(): void {
    const products = this.store.selectSnapshot(ProductsState.GetProducts());
    if (!products.length) {
      this.store.dispatch(new ProductsActions.GetFirstProductsPage());
    }
  }

  createProduct() {
    this.router.navigate([this.router.url, 'create-new']);
  }

  onTableScroll(e: any) {
    this.store.dispatch(new ProductsActions.GetNextProductsPage());
  }

  makeRefresh() {
    this.store.dispatch(new ProductsActions.MakeRefresh());
  }

  setPageSize(e: MatSelectChange) {
    this.store.dispatch(new ProductsActions.SetPageSize(e.value));
  }
}
