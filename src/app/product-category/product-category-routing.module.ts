import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BreakfastComponent} from "./breakfast/breakfast.component";
import {LunchComponent} from "./lunch/lunch.component";
import {TreatsComponent} from "./treats/treats.component";
import {MenuComponent} from "./menu/menu.component";
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
      {
        path: 'breakfast',
        component: BreakfastComponent,
      },
      {
        path: 'lunch',
        component: LunchComponent,
      },
      {
        path: 'treats',
        component: TreatsComponent,
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryRoutingModule { }
