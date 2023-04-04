import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule),
      }
    ]
  },
  {
    path: 'product-category',
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/product-category/product-category.module').then(m => m.ProductCategoryModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
