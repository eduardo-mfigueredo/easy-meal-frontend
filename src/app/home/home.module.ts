import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountdownComponent} from "./countdown/countdown.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";
import {MealOptionsComponent} from "./meal-options/meal-options.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {MaterialModule} from "../material/material.module";
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContactSentDialogComponent } from './contact-sent-dialog/contact-sent-dialog.component';


@NgModule({
  declarations: [
    CountdownComponent,
    HeroSectionComponent,
    MealOptionsComponent,
    HowItWorksComponent,
    FaqComponent,
    ContactUsComponent,
    ContactSentDialogComponent
  ],
  exports: [
    CountdownComponent,
    HeroSectionComponent,
    MealOptionsComponent,
    HowItWorksComponent,
    FaqComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule {
}
