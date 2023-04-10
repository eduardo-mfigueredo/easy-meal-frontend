import { Component } from '@angular/core';
import {Cart, MenuOption} from "../integration/menu/menu-model";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Cart = { items: [] };
  dataSource: Array<MenuOption> = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
      console.log(this.dataSource);
      console.log(this.cart);
    })
  }

  // getTotal(items: Array<CartItem>): number{
  //   return this.cartService.getTotal(items)
  // };

  // onClearCart(): void {
  //   this.cartService.clearCart();
  // }

  // onRemoveFromCart(item: CartItem): void {
  //   this.cartService.removeFromCart(item);
  // }

  onAddQuantity(item: MenuOption): void {
    this.cartService.addToCart(item);
  }

  // onRemoveQuantity(item: CartItem): void {
  //   this.cartService.removeQuantity(item);
  // }


}
