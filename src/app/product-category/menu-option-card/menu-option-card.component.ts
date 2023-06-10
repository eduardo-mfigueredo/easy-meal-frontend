import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuOption} from "../../models/menu-model";

@Component({
  selector: 'app-menu-option-card',
  templateUrl: './menu-option-card.component.html',
  styleUrls: ['./menu-option-card.component.scss']
})
export class MenuOptionCardComponent {

  @Input() menuOption!: MenuOption;

  @Output() addToCart = new EventEmitter<MenuOption>();

  ngOnInit(): void {
    this.menuOption.quantity = 0;
  }

  decrementQuantity(): void {
    if (this.menuOption.quantity > 0) {
      this.menuOption.quantity -= 1;
    }
  }

  incrementQuantity(): void {
    this.menuOption.quantity += 1;
  }


  onAddToCart(): void {
    this.addToCart.emit(this.menuOption)
  }
}
