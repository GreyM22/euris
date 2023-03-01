import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/state-data/products.service";
import {firstValueFrom, Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'euris-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDashboardComponent implements OnInit, OnDestroy {

  constructor(private productsService: ProductsService, private router: Router) { }

  readonly loading$: Observable<boolean> = this.productsService.loading$(this.productsService.GET_PRODUCTS);
  readonly pageSizeOptions: number[] = [5, 10, 20, 50];
  readonly nrOfProducts$ = this.productsService.nrOfProducts$;
  readonly totalNrOfProducts$ = this.productsService.totalNrOfProducts$;
  readonly pageSize$ = this.productsService.pageSize$;

  ngOnInit(): void {
    this.getFirstPage();
  }

  async getFirstPage() {
    await firstValueFrom(this.productsService.getFirstProductPage$());
  }

  createProduct() {
    this.router.navigate([this.router.url, 'create-new']);
  }

  async onTableScroll(e: any): Promise<void> {
    await firstValueFrom(this.productsService.getNextProductPage$());
  }

  async makeRefresh(): Promise<void> {
    this.productsService.clear();
    await this.getFirstPage();
  }

  async setPageSize(e: MatSelectChange) {
    await firstValueFrom(this.productsService.setPageSize$(e.value));
  }

  ngOnDestroy() {
    this.productsService.clear();
  }
}
