import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {AdminAreaComponent} from "./admin-area/admin-area.component";

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
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
