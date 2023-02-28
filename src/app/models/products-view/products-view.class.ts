import {Component, Directive, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "../../interfaces/product.interface";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  template: '',
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        animate('0.3s', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]),
  ]
})
export class ProductsView {
  @Input() products!: Product[];
  @Input() displayedColumns!: (keyof Product)[];
  @Input() animation = true;
  @Output() viewProduct = new EventEmitter<string>();
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() {
  }

}
