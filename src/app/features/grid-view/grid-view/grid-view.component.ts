import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsView} from "../../../core/models/products-view/products-view.class";

@Component({
  selector: 'euris-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridViewComponent extends ProductsView implements OnInit {

  ngOnInit(): void {
  }

}
