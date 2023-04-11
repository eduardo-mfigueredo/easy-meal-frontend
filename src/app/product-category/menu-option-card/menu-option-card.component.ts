import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuOption} from "../../integration/menu/menu-model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-menu-option-card',
  templateUrl: './menu-option-card.component.html',
  styleUrls: ['./menu-option-card.component.scss']
})
export class MenuOptionCardComponent {

  @Input() menuOption!: MenuOption;

  @Output() addToCart = new EventEmitter<MenuOption>();

  // form = this.fb.group({
  //   quantity: new FormControl<number>({value: 1, disabled: false}, Validators.min(1))
  // })
  // constructor(private fb: FormBuilder) { }
  onAddToCart(): void {
    this.addToCart.emit(this.menuOption)
  }

}
