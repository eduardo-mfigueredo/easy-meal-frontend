import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {Observable} from "rxjs";
import {MenuOption} from "../../models/menu-model";

@Component({
  selector: 'app-menu-handler',
  templateUrl: './menu-handler.component.html',
  styleUrls: ['./menu-handler.component.scss']
})
export class MenuHandlerComponent implements OnInit {

  menuOptions$?: Observable<MenuOption[]>;

  constructor(
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit(): void {
    this.menuOptions$ = this.firestoreService.getItems('');
  }

  submit(): void {
    this.firestoreService.addItem(
      {
        title: 'Teste',
        description: 'Teste',
        price: 10,
      }
    )
  }

}
