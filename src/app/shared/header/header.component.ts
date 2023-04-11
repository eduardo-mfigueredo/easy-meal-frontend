import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cart} from "../../integration/menu/menu-model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSideNav!: boolean;
  itemsQuantity: number = 0;
  private _cart: Cart = { items: [] };
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;
    this.itemsQuantity =
      cart.items
        .map((item) => item.quantity)
        .reduce((prev, current) => prev + current, 0);
  }

}
