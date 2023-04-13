import {MenuOption} from "../../integration/menu/menu-model";
import {Injectable} from "@angular/core";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {catchError, EMPTY, Observable, switchMap} from "rxjs";
import {MenuService} from "../../integration/menu/menu.service";
import {HttpErrorResponse} from "@angular/common/http";

export interface MenuState {
  menuOptions?: MenuOption[];
}

export const initialMenuState: MenuState = {};


@Injectable()
export class MenuStore extends ComponentStore<MenuState> {

  constructor(private _service: MenuService) {
    super(initialMenuState);
  }

  readonly fetchMenuOptions = this.effect((category$: Observable<string> ) => {
    return category$.pipe(
      switchMap((category) =>
        this._service.getMenuOptions(category).pipe(
          tapResponse(
            (response) => {
              this.setMenuOptions(response);
              console.log(response)
            },
            (error: HttpErrorResponse) => {
              console.log('deu error --');
            }
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setMenuOptions = this.updater((state, menuOptions: MenuOption[] | undefined) => {
    return {...state, menuOptions};
  })

  readonly getMenuOptions = this.select((state) => state.menuOptions);



}


