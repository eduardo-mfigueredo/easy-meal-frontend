import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.component.html',
  styleUrls: ['./meal-options.component.scss']
})
export class MealOptionsComponent {

  breakfast: string = 'assets/pics/breakfast.jpg';
  lunch: string = 'assets/pics/lunch.jpg'
  treats: string = 'assets/pics/treats.jpeg'
}
