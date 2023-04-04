import {MenuModel, MenuOption} from "../../integration/menu/menu-model";
import {Injectable} from "@angular/core";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {map, Observable, pipe, switchMap, tap} from "rxjs";
import {MenuService} from "../../integration/menu/menu.service";
import {HttpErrorResponse} from "@angular/common/http";

export interface MenuState {
  menuOptions?: MenuModel;
}

export const initialMenuState: MenuState = {};

@Injectable()
export class MenuStore extends ComponentStore<MenuState> {

  constructor(private _service: MenuService) {
    super(initialMenuState);
  }

  fetchMenuOptions = this.effect(() => {
    return this._service.getMenuOptions().pipe(
      tapResponse(
        (response: MenuModel) => {
          this.setMenuOptions(response);
          console.log("vim da store: ", response)
        },
        (error: HttpErrorResponse) => console.error(error)
      )
    )
  })


  readonly setMenuOptions = this.updater((state, menuOptions: MenuModel | undefined) => {
    return {...state, menuOptions};
  })

  readonly getMenuOptions = this.select((state) => state.menuOptions);
}


