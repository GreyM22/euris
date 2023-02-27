import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelListViewComponent } from './panel-list-view/panel-list-view.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    PanelListViewComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule
  ],
  exports: [PanelListViewComponent]
})
export class PanelListViewModule { }
