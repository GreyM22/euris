import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsBasePage} from "../../../models/products-page/products-base-page.class";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'euris-products-panel-page',
  templateUrl: './products-panel-page.component.html',
  styleUrls: ['./products-panel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      transition(':enter', [ // each time the binding value changes
        style({opacity: 0, transform: 'translateY(100%)'}),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProductsPanelPageComponent extends ProductsBasePage  {

}
