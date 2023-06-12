import {Component, EventEmitter, Output} from '@angular/core';
import {Cart, MenuOption} from "../../models/menu-model";
import {Observable} from "rxjs";
import {CartStore} from "../../store/cart/cart.store";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSideNav!: boolean;
  itemsQuantity!: number;
  cart$?: Observable<Cart | undefined>;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private cartStore: CartStore,
    private viewportScroller: ViewportScroller
  ) {
    this
      .cartStore
      .fetchCart();
  }

  ngOnInit()
    :
    void {
    this.cart$ = this.cartStore.getCart();
  }

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  totalItemsOnCart(cart: Cart): number {
    return this.itemsQuantity =
      cart.items
        .map((item) => item.quantity)
        .reduce((prev, current) => prev + current, 0);
  }

  onRemoveItem(item: MenuOption): void {
    this.cartStore.removeFromCart(item);
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
