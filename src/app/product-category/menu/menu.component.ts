import {Component, EventEmitter, Output} from '@angular/core';
import {MenuStore} from "../../store/menu/menu.store";
import {Subscription} from "rxjs";
import {MenuService} from "../../integration/menu/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() showCategory = new EventEmitter<string>();

  subscription!: Subscription;

  foods: string[] = [
    'Treat', 'Meal'
  ];

  constructor(private menuStore: MenuStore) {
  }


  onShowCategory(food: string) {
    this.menuStore.fetchMenuOptions(food);
  }

}
