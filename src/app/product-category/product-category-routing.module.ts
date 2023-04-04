import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductCategoryComponent} from "./product-category.component";
import {MenuItemsComponent} from "./menu-items/menu-items.component";

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryComponent,
    children: [
      {
        path: '',
        component: MenuItemsComponent,
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryRoutingModule { }
