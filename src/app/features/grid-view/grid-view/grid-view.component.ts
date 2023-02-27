import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product.interface";
import {ProductsView} from "../../../models/products-view/products-view.class";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'euris-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        animate('250ms ease', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]),

  ]

})
export class GridViewComponent extends ProductsView implements OnInit {

  ngOnInit(): void {
  }

}
