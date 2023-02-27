import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SharedModule} from "../../shared/shared.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatSelectModule} from "@angular/material/select";


const childRoutes: Routes = [
  {
    path: '',
    component: ProductsDashboardComponent,
    children: [
      {
        path: 'panel-view',
        loadChildren: () => import('../products-panel-page/products-panel-page.module')
          .then(m => m.ProductsPanelPageModule),
      },
      {
        path: 'grid-view',
        loadChildren: () => import('../products-grid-page/products-grid-page.module')
          .then(m => m.ProductsGridPageModule),
      },
      { path: '**', redirectTo: 'panel-view', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [
    ProductsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule,
    InfiniteScrollModule,
    MatSelectModule
  ]
})
export class ProductsModule { }
