import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../interfaces/product.interface";
import {ProductsView} from "../../../models/products-view/products-view.class";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'euris-panel-list-view',
  templateUrl: './panel-list-view.component.html',
  styleUrls: ['./panel-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        animate('250ms ease', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]),

  ]
})
export class PanelListViewComponent extends ProductsView implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
