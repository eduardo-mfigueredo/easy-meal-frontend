import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cart, MenuOption} from "../../integration/menu/menu-model";
import {CartService} from "../../services/cart/cart.service";

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

  cartItems: Cart = { items: [] };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cartItems = _cart;
      console.log(this.cartItems.items);
      this.cartService.saveCartToLocalStorage(this.cartItems);
    })
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
    this.cartService.removeFromCart(item);
  }

}
