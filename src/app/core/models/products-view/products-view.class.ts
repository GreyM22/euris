import {Component, Directive, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "../../interfaces/product.interface";
import {animate, style, transition, trigger} from "@angular/animations";

@Directive()
export class ProductsView {
  @Input() products!: Product[];
  @Input() displayedColumns!: (keyof Product)[];
  @Output() viewProduct = new EventEmitter<string>();
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() {
  }

}
