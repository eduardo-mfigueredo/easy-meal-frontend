import {Cart, MenuOption} from "../../models/menu-model";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {Injectable} from "@angular/core";
import {catchError, EMPTY, map, Observable, switchMap, tap} from "rxjs";
import {CartService} from "../../services/cart/cart.service";
import {HttpErrorResponse} from "@angular/common/http";

export interface CartState {
  cart?: Cart;
  total?: number;
}

export const initialCartState: CartState = {};

@Injectable()
export class CartStore extends ComponentStore<CartState> {

  constructor(private _service: CartService) {
    super(initialCartState);
  }

  readonly fetchCart = this.effect((fetchCart$: Observable<void>) => {
    return fetchCart$.pipe(
      switchMap(() =>
        this._service.cart.pipe(
          tapResponse(
            (response) => {
              this.setCart(response);
              this.setTotal(this._service.getTotal(response.items));
              this._service.saveCartToLocalStorage(response)
              console.log(response)
            },
            (error: HttpErrorResponse) => {
              console.log('error');
            }
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly addToCart = this.effect((menuOption$: Observable<MenuOption>) => {
    return menuOption$.pipe(
      map((menuOption) => this._service.addToCart(menuOption)),
      tap((cart) => {
        this.setCart(cart);
        this._service.saveCartToLocalStorage(cart);
      }),
      catchError(() => EMPTY)
    );
  });

  readonly addQuantityToCart = this.effect((menuOption$: Observable<MenuOption>) => {
    return menuOption$.pipe(
      map((menuOption) => this._service.addQuantityToCart(menuOption)),
      tap((cart) => {
        this.setCart(cart);
        this._service.saveCartToLocalStorage(cart);
      }),
      catchError(() => EMPTY)
    );
  });

  readonly removeQuantity = this.effect((menuOption$: Observable<MenuOption>) => {
    return menuOption$.pipe(
      map((menuOption) => this._service.removeQuantity(menuOption)),
      tap((cart) => {
        this.setCart(cart);
        this._service.saveCartToLocalStorage(cart);
      }),
      catchError(() => EMPTY)
    );
  });

  readonly removeFromCart = this.effect((menuOption$: Observable<MenuOption>) => {
    return menuOption$.pipe(
      map((menuOption) => this._service.removeFromCart(menuOption)),
      tap((cart) => {
        this.setCart({items: cart});
        this._service.saveCartToLocalStorage({items: cart});
      }),
      catchError(() => EMPTY)
    );
  });

  readonly setCart = this.updater((state, cart: Cart) => {
    return {...state, cart};
  })

  readonly setTotal = this.updater((state, total: number) => {
    return {...state, total};
  })

  getCart(): Observable<Cart | undefined> {
    return this.select((state) => state.cart);
  }

}
