import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/state-data/products.service";
import {Observable} from "rxjs";
import {Product} from "../../../interfaces/product.interface";
import {ProductsBasePage} from "../../../models/products-page/products-base-page.class";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'euris-products-grid-page',
  templateUrl: './products-grid-page.component.html',
  styleUrls: ['./products-grid-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      transition(':enter', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(100%)' }),
          stagger(100, [
            animate('0.3s', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ProductsGridPageComponent extends ProductsBasePage {

}
