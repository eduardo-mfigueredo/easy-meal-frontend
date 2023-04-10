import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {MenuModel, MenuOption} from "../../integration/menu/menu-model";
import {MenuStore} from "../../store/menu/menu.store";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  menuOptions$?: Observable<MenuModel| undefined>;

  constructor(private readonly menuStore: MenuStore,
              private readonly cartService: CartService
  ) {
    this.menuStore.fetchMenuOptions();
  }

  ngOnInit(): void {
    this.menuOptions$ = this.menuStore.getMenuOptions;
  }

  onAddToCart(menuOption: MenuOption): void {
    this.cartService.addToCart(menuOption);
  }

}
