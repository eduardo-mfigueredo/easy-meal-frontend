import {Component, Input} from '@angular/core';
import {MenuOption} from "../../integration/menu/menu-model";

@Component({
  selector: 'app-menu-option-card',
  templateUrl: './menu-option-card.component.html',
  styleUrls: ['./menu-option-card.component.scss']
})
export class MenuOptionCardComponent {

  @Input() menuOption: MenuOption | undefined;

}
