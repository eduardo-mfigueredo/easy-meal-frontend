import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MenuOption} from "../../models/menu-model";
import {MenuStore} from "../../store/menu/menu.store";
import {breakpoint} from "../../services/breakpoint-observer/breakpoints";
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
    private readonly mealOptionService: MealOptionsService,
  ) {
    this.mealOptionService.categorySelected.subscribe(category => {
      this.category = category;
    });

    this.menuStore.fetchMenuOptions(this.category);
  }

  ngOnInit(): void {
    this.menuOptions$ = this.menuStore.getMenuOptions;
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
