import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { TreatsComponent } from './treats/treats.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {ProductCategoryRoutingModule} from "./product-category-routing.module";
import { MenuComponent } from './menu/menu.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';



@NgModule({
  declarations: [
    BreakfastComponent,
    LunchComponent,
    TreatsComponent,
    MenuComponent,
    MenuItemsComponent
  ],
  exports: [
    BreakfastComponent,
    LunchComponent,
    TreatsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProductCategoryRoutingModule
  ]
})
export class ProductCategoryModule { }
