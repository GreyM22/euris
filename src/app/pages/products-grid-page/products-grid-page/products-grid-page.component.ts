import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/state-data/products.service";
import {Observable} from "rxjs";
import {Product} from "../../../interfaces/product.interface";
import {ProductsBasePage} from "../../../models/products-page/products-base-page.class";

@Component({
  selector: 'euris-products-grid-page',
  templateUrl: './products-grid-page.component.html',
  styleUrls: ['./products-grid-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsGridPageComponent extends ProductsBasePage {

}
