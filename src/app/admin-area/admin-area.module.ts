import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CutOffSetterComponent} from './cut-off-setter/cut-off-setter.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {AdminAreaComponent} from "./admin-area.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CutOffSetterComponent
  ],
  exports: [
    CutOffSetterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminAreaModule { }
