import { Component } from '@angular/core';
import {MenuService} from "../../integration/menu/menu.service";
import {MenuStore} from "../../store/menu/menu.store";
import {Observable} from "rxjs";
import {MenuModel} from "../../integration/menu/menu-model";
import {Menu} from "@angular/cdk/menu";

@Component({
  selector: 'app-menu-option-card',
  templateUrl: './menu-option-card.component.html',
  styleUrls: ['./menu-option-card.component.scss']
})
export class MenuOptionCardComponent {

  menuOptions$?: Observable<MenuModel| undefined>;

  constructor(private readonly menuStore: MenuStore
  ) {
    this.menuStore.fetchMenuOptions();
  }

  ngOnInit(): void {
    this.menuOptions$ = this.menuStore.getMenuOptions;
  }
}
