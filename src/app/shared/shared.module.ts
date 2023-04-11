import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {MaterialModule} from "../material/material.module";
import { FooterComponent } from './footer/footer.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterLink
    ]
})
export class SharedModule { }
