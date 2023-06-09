import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CutOffSetterComponent} from './cut-off-setter/cut-off-setter.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MenuHandlerComponent} from './menu-handler/menu-handler.component';
import { AddMenuOptionComponent } from './menu-handler/add-menu-option/add-menu-option.component';
import { EditMenuOptionComponent } from './menu-handler/edit-menu-option/edit-menu-option.component';


@NgModule({
  declarations: [
    CutOffSetterComponent,
    MenuHandlerComponent,
    AddMenuOptionComponent,
    EditMenuOptionComponent
  ],
  exports: [
    CutOffSetterComponent,
    MenuHandlerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminAreaModule { }
