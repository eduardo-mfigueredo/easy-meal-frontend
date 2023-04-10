import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {MenuModel} from "../../integration/menu/menu-model";
import {MenuStore} from "../../store/menu/menu.store";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  menuOptions$?: Observable<MenuModel| undefined>;

  constructor(private readonly menuStore: MenuStore
  ) {
    this.menuStore.fetchMenuOptions();
  }

  ngOnInit(): void {
    this.menuOptions$ = this.menuStore.getMenuOptions;
  }
}
