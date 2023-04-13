import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Cart, MenuOption} from "../../integration/menu/menu-model";

const KEY = 'cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: []});

  constructor(private _snackBar: MatSnackBar) {
    const data = localStorage.getItem(KEY);
    if (data) {
      this.cart = new BehaviorSubject<Cart>(JSON.parse(data));
    }
  }

  saveCartToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  loadCartFromLocalStorage(): Cart {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      return { items: [] };
    }
  }

  addToCart(menuOption: MenuOption): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === menuOption.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(menuOption)
    }
    this.cart.next({ items });
    localStorage.setItem(KEY, JSON.stringify(this.cart.value));
    this._snackBar.open('Item added', 'Ok', { duration: 3000 });
    console.log(this.cart.value);
  }

  removeQuantity(menuOption: MenuOption): void {
    let itemForRemoval: MenuOption | undefined;

    let filteredItems = this.cart.value.items.map(
      (_item) => {
        if(_item.id === menuOption.id) {
          _item.quantity--;
          if(_item.quantity === 0) {
            itemForRemoval = _item;
          }
        }
        return _item;
      }
    );
    if(itemForRemoval){
      filteredItems = this.removeFromCart(itemForRemoval, false)
    }
    this.cart.next({ items: filteredItems });
    localStorage.setItem(KEY, JSON.stringify(this.cart.value));
    this._snackBar.open('1 item removed', 'ok', {duration: 3000});
  }

  getTotal(items: Array<MenuOption>): number{
    return items.
    map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  clearCart(): void {
    localStorage.removeItem(KEY);
    this.cart.next({ items: [] })
    this._snackBar.open('Empty cart.', 'Ok', { duration: 3000 })
  }

  removeFromCart(item: MenuOption, update = true): Array<MenuOption> {
    const filteredItems =
      this.cart.value.items.filter(
        (_item) => _item.id !== item.id
      );
    if(update) {
      this.cart.next({items: filteredItems});
      this._snackBar.open('1 item removed', 'ok', {duration: 3000});
    }
    return filteredItems;
  }

}
