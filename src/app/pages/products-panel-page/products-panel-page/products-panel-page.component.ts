import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsBasePage} from "../../../models/products-page/products-base-page.class";

@Component({
  selector: 'euris-products-panel-page',
  templateUrl: './products-panel-page.component.html',
  styleUrls: ['./products-panel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsPanelPageComponent extends ProductsBasePage  {

}
