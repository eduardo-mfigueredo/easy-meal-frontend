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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      console.log(this.cart.items);
    })
  }

  onAddQuantity(menuOption: MenuOption): void {
    this.cartService.addToCart(menuOption);
  }

  onRemoveQuantity(menuOption: MenuOption): void {
    this.cartService.removeQuantity(menuOption);
  }

}
