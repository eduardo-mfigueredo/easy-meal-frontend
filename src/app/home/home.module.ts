import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountdownComponent} from "./countdown/countdown.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";
import {MealOptionsComponent} from "./meal-options/meal-options.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    CountdownComponent,
    HeroSectionComponent,
    MealOptionsComponent
  ],
  exports: [
    CountdownComponent,
    HeroSectionComponent,
    MealOptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule {
}
