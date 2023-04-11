import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BreakpointObserverService} from "./services/breakpoint-observer/breakpoint-observer.service";
import {Subscription} from "rxjs";
import {breakpoint} from "./services/breakpoint-observer/breakpoints";
import {CartService} from "./services/cart/cart.service";
import {Cart} from "./integration/menu/menu-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
