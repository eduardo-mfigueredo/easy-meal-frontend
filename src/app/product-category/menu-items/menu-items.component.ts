import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MenuModel, MenuOption} from "../../integration/menu/menu-model";
import {MenuStore} from "../../store/menu/menu.store";
import {CartService} from "../../services/cart/cart.service";
import {breakpoint} from "../../services/breakpoint-observer/breakpoints";
import {BreakpointObserverService} from "../../services/breakpoint-observer/breakpoint-observer.service";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit, OnDestroy {

  menuOptions$?: Observable<MenuModel | undefined>;

  subscriptions: Subscription[] = [];
  deviceType!: breakpoint | undefined;

  constructor(private readonly menuStore: MenuStore,
              private readonly cartService: CartService,
              private readonly _breakpointObserverService: BreakpointObserverService
  ) {
    this.menuStore.fetchMenuOptions();
    this._breakpointObserverService.init();

  }

  ngOnInit(): void {
    this.menuOptions$ = this.menuStore.getMenuOptions;
    this.subscriptions.push(
      this._breakpointObserverService.breakpointSize$.subscribe(device => {
        this.deviceType = device;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onAddToCart(menuOption: MenuOption): void {
    this.cartService.addToCart({
      id: menuOption.id,
      title: menuOption.title,
      description: menuOption.description,
      price: menuOption.price,
      quantity: menuOption.quantity,
      image: menuOption.image,
      category: menuOption.category,
      nutritionalInfo: {
        calories: menuOption.nutritionalInfo.calories,
        fat: menuOption.nutritionalInfo.fat,
        carbs: menuOption.nutritionalInfo.carbs,
        protein: menuOption.nutritionalInfo.protein
      }
    });
  }

}
