import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsView} from "../../../core/models/products-view/products-view.class";

@Component({
  selector: 'euris-panel-list-view',
  templateUrl: './panel-list-view.component.html',
  styleUrls: ['./panel-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelListViewComponent extends ProductsView implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
