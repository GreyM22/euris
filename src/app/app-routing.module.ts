import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../app/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../app/pages/categories-dashboard/categories-dashboard.module')
      .then(m => m.CategoriesDashboardModule)
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
