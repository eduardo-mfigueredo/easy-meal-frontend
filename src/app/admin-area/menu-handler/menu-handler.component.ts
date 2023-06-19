import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {Observable} from "rxjs";
import {MenuOption} from "../../models/menu-model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddMenuOptionComponent} from "./add-menu-option/add-menu-option.component";
import {EditMenuOptionComponent} from "./edit-menu-option/edit-menu-option.component";
import {DeleteMenuOptionComponent} from "./delete-menu-option/delete-menu-option.component";
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-menu-handler',
  templateUrl: './menu-handler.component.html',
  styleUrls: ['./menu-handler.component.scss']
})
export class MenuHandlerComponent implements OnInit {

  menuOptions$?: Observable<MenuOption[]>;
  user$!: Observable<User | undefined>;

  constructor(
    private firestoreService: FirestoreService,
    private dialog: MatDialog,
    private matRef: MatDialogRef<MenuHandlerComponent>,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.menuOptions$ = this.firestoreService.getItems('');
    this.user$ = this.authService.user$!;
  }

  newMenuOption(): void {
    this.dialog.open(AddMenuOptionComponent);
  }

  onEditMenuOption(option: MenuOption): void {
    this.dialog.open(EditMenuOptionComponent, { data: option });
  }

  onClose(): void {
    this.matRef.close();
  }

  onDeleteMenuOption(option: MenuOption) {
    this.dialog.open(DeleteMenuOptionComponent, { data: option })
  }
}
