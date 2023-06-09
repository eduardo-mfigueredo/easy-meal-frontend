import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MenuOption} from "../../integration/menu/menu-model";
import {MenuStore} from "../../store/menu/menu.store";
import {breakpoint} from "../../services/breakpoint-observer/breakpoints";
import {BreakpointObserverService} from "../../services/breakpoint-observer/breakpoint-observer.service";
import {CartStore} from "../../store/cart/cart.store";
import {MealOptionsService} from "../../services/meal-options/meal-options.service";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit, OnDestroy {

  menuOptions$?: Observable<MenuOption[] | undefined>;

  subscriptions: Subscription[] = [];
  deviceType!: breakpoint | undefined;

  category: string = '';

  constructor(
    private readonly menuStore: MenuStore,
    private readonly cartStore: CartStore,
    private readonly _breakpointObserverService: BreakpointObserverService,
    private readonly mealOptionService: MealOptionsService,
  ) {
    this._breakpointObserverService.init();

    this.mealOptionService.categorySelected.subscribe(category => {
      this.category = category;
    });

    this.menuStore.fetchMenuOptions(this.category);
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
    this.cartStore.addToCart({
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
    console.log(menuOption)
  }

}
