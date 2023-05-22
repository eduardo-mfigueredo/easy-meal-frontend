import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CutOffSetterComponent} from "./cut-off-setter/cut-off-setter.component";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent {

  user$!: Observable<User | undefined>;

  constructor(
    private dialog: MatDialog,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.user$ = this.authService.user$!;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CutOffSetterComponent);
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

}
