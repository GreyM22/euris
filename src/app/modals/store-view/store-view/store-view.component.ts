import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {StoreService} from "../../../services/state-data/store.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Store} from "../../../interfaces/store.interface";

@Component({
  selector: 'euris-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public store: Store) { }

  ngOnInit(): void {
  }

}
