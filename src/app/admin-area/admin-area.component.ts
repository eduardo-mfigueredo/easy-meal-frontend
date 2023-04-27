import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CutOffSetterComponent} from "./cut-off-setter/cut-off-setter.component";

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CutOffSetterComponent);
  }

}
