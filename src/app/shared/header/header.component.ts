import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cart, MenuOption} from "../../integration/menu/menu-model";
import {Observable} from "rxjs";
import {CartStore} from "../../store/cart/cart.store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSideNav!: boolean;
  itemsQuantity: number = 0;
  _cart: Cart = { items: [] };
  cart$?: Observable<Cart | undefined>;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();

  constructor(private cartStore: CartStore) {
    this.cartStore.fetchCart(this._cart);
  }

  ngOnInit(): void {
    this.cart$ = this.cartStore.getCart();
  }
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

  onRemoveItem(item: MenuOption): void {
    this.cartStore.removeFromCart(item);
  }

}
