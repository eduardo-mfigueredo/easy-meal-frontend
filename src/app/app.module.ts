import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {HomeComponent} from './home/home.component';
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import { ProductCategoryComponent } from './product-category/product-category.component';
import {ProductCategoryModule} from "./product-category/product-category.module";
import {HttpClientModule} from "@angular/common/http";
import {MenuStore} from "./store/menu/menu.store";
import { CartComponent } from './cart/cart.component';
import { CartCardComponent } from './cart/cart-card/cart-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CartStore} from "./store/cart/cart.store";
import { LoginComponent } from './login/login.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import {AdminAreaModule} from "./admin-area/admin-area.module";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent,
    CartComponent,
    CartCardComponent,
    LoginComponent,
    AdminAreaComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    AdminAreaModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAApB8w2LOnria5uvoMxtNUfBlJP-pJjuY",
      authDomain: "easy-meal-65a53.firebaseapp.com",
      projectId: "easy-meal-65a53",
      storageBucket: "easy-meal-65a53.appspot.com",
      messagingSenderId: "912145964513",
      appId: "1:912145964513:web:0c6be120f52f0010ea86a0",
      measurementId: "G-23CSB5KKXV"
    }),
    AngularFireAuthModule
  ],
  providers: [MenuStore, CartStore, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
