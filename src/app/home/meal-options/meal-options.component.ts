import {Component} from '@angular/core';
import {breakpoint} from "../../services/breakpoint-observer/breakpoints";
import {Subscription} from "rxjs";
import {BreakpointObserverService} from "../../services/breakpoint-observer/breakpoint-observer.service";
import {Router} from "@angular/router";
import {MealOptionsService} from "../../services/meal-options/meal-options.service";

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.component.html',
  styleUrls: ['./meal-options.component.scss']
})
export class MealOptionsComponent {

  breakfast: string = 'assets/pics/breakfast.jpg';
  lunch: string = 'assets/pics/lunch.jpg'
  treats: string = 'assets/pics/treats.jpeg'

  subscriptions: Subscription[] = [];
  deviceType!: breakpoint | undefined;

  constructor(
    private readonly _breakpointObserverService: BreakpointObserverService,
    private readonly mealOptionService: MealOptionsService,
    private router: Router
  ) {
    this._breakpointObserverService.init();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this._breakpointObserverService.breakpointSize$.subscribe(device => {
        this.deviceType = device;
      })
    );
  }

  onShowCategory(category: string): void {
    this.mealOptionService.categorySelected.next(category);
    this.router.navigate(['product-category']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
