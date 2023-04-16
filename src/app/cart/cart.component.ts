import {Component} from '@angular/core';
import {Cart, MenuOption} from "../integration/menu/menu-model";
import {CartService} from "../services/cart/cart.service";
import {CartStore} from "../store/cart/cart.store";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Cart = {items: []};
  cart$?: Observable<Cart | undefined>;

  constructor(
    private cartStore: CartStore
  ) {
     this.cartStore.fetchCart(this.cart);
  }

  ngOnInit(): void {
    this.cart$ = this.cartStore.getCart();
  }

  onAddQuantity(menuOption: MenuOption): void {
    this.cartStore.addToCart(menuOption);
  }

  onRemoveQuantity(menuOption: MenuOption): void {
    this.cartStore.removeQuantity(menuOption);
  }

  onRemoveItem(menuOption: MenuOption): void {
    this.cartStore.removeFromCart(menuOption);
  }

}
