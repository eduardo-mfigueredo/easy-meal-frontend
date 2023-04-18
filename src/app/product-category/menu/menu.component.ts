import {Component} from '@angular/core';
import {MenuStore} from "../../store/menu/menu.store";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  foods: string[] = [
   'All', 'Breakfast', 'Meal', 'Treat'
  ];

  constructor(private menuStore: MenuStore) {
  }


  onShowCategory(food: string) {
    if(food === 'All') {
      food = '';
    }
    this.menuStore.fetchMenuOptions(food);
  }

}
