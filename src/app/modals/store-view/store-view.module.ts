import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreViewComponent } from './store-view/store-view.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    StoreViewComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [StoreViewComponent]
})
export class StoreViewModule { }
