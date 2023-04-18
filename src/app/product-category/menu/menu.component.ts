import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuStore} from "../../store/menu/menu.store";
import {Subscription} from "rxjs";
import {MenuService} from "../../integration/menu/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  foods: string[] = [
    'Breakfast', 'Meal', 'Treat'
  ];

  constructor(private menuStore: MenuStore) {
  }


  onShowCategory(food: string) {
    this.menuStore.fetchMenuOptions(food);
  }

}
