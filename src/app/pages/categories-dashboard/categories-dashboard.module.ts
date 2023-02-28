import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {EntryProductViewComponent} from "../product-view/entry-product-view/entry-product-view.component";
import {SharedModule} from "../../shared/shared.module";
import { NgChartsModule } from 'ng2-charts';


const childRoutes: Routes = [
  {
    path: '',
    component: CategoriesDashboardComponent
  }
];

@NgModule({
  declarations: [
    CategoriesDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    SharedModule,
    NgChartsModule
  ]
})
export class CategoriesDashboardModule { }
