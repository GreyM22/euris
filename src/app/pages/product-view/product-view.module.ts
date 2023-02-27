import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryProductViewComponent } from './entry-product-view/entry-product-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RouterModule, Routes} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


const childRoutes: Routes = [
  {
    path: '',
    component: EntryProductViewComponent
  }
];
@NgModule({
  declarations: [
    EntryProductViewComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ProductViewModule { }
