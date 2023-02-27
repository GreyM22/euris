import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPanelPageComponent } from './products-panel-page/products-panel-page.component';
import {RouterModule, Routes} from "@angular/router";
import {PanelListViewModule} from "../../features/panel-list-view/panel-list-view.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ProductViewResolver} from "../../services/resolver/product-view-resolver.service";


const childRoutes: Routes = [
  {
    path: '',
    component: ProductsPanelPageComponent,
    children: [
      {
        path: 'create-new',
        loadChildren: () => import('../create-product/create-product.module')
          .then(m => m.CreateProductModule)
      },
      {
        path: ':productId',
        loadChildren: () => import('../product-view/product-view.module')
          .then(m => m.ProductViewModule),
        resolve: {
          productId: ProductViewResolver
        }
      },
    ]
  },
];

@NgModule({
  declarations: [
    ProductsPanelPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    PanelListViewModule
  ],
})
export class ProductsPanelPageModule { }
