import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridPageComponent } from './products-grid-page/products-grid-page.component';
import {RouterModule, Routes} from "@angular/router";
import {GridViewModule} from "../../features/grid-view/grid-view.module";
import {ProductViewResolver} from "../../services/resolver/product-view-resolver.service";


const childRoutes: Routes = [
  {
    path: '',
    component: ProductsGridPageComponent,
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
  }
];

@NgModule({
  declarations: [
    ProductsGridPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    GridViewModule
  ],
})
export class ProductsGridPageModule { }
