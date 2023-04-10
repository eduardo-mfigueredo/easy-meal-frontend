import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {ProductCategoryRoutingModule} from "./product-category-routing.module";
import {MenuComponent} from './menu/menu.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import { MenuOptionCardComponent } from './menu-option-card/menu-option-card.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MenuComponent,
    MenuItemsComponent,
    MenuOptionCardComponent
  ],
  exports: [
    MenuOptionCardComponent,
    MenuComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        ProductCategoryRoutingModule,
        FormsModule
    ]
})
export class ProductCategoryModule { }
