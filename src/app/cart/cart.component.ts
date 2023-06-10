import {Component} from '@angular/core';
import {Cart, MenuOption} from "../models/menu-model";
import {CartStore} from "../store/cart/cart.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Cart = {items: []};
  cart$?: Observable<Cart | undefined>;

  total: number | undefined;

  constructor(
    private cartStore: CartStore
  ) {
     this.cartStore.fetchCart();
  }

  ngOnInit(): void {
    this.cart$ = this.cartStore.getCart();
    this.cartStore.select(state => state.total).subscribe((total) => {
      this.total = total;
    });
  }

  onAddQuantity(menuOption: MenuOption): void {
    this.cartStore.addQuantityToCart(menuOption);
  }

  onRemoveQuantity(menuOption: MenuOption): void {
    this.cartStore.removeQuantity(menuOption);
  }

  onRemoveItem(menuOption: MenuOption): void {
    this.cartStore.removeFromCart(menuOption);
  }

}
