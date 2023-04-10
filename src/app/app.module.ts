import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from './home/home.component';
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import { ProductCategoryComponent } from './product-category/product-category.component';
import {ProductCategoryModule} from "./product-category/product-category.module";
import {HttpClientModule} from "@angular/common/http";
import {MenuStore} from "./store/menu/menu.store";
import { CartComponent } from './cart/cart.component';
import { CartCardComponent } from './cart/cart-card/cart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent,
    CartComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgOptimizedImage,
    SharedModule,
    HomeModule,
    ProductCategoryModule,
    HttpClientModule

  ],
  providers: [MenuStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
