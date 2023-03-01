import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StoreData} from "../../../interfaces/store.interface";

@Component({
  selector: 'euris-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public store: StoreData) { }

  ngOnInit(): void {
  }

}
