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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgOptimizedImage,
    SharedModule,
    HomeModule,
    ProductCategoryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
