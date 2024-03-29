import {MenuOption} from "../../models/menu-model";
import {Injectable} from "@angular/core";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {catchError, EMPTY, Observable, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FirestoreService} from "../../services/firestore/firestore.service";

export interface MenuState {
  menuOptions?: MenuOption[];
}

export const initialMenuState: MenuState = {};

@Injectable()
export class MenuStore extends ComponentStore<MenuState> {

  constructor(private _service: FirestoreService) {
    super(initialMenuState);
  }

  readonly fetchMenuOptions = this.effect((category$: Observable<string>) => {
    return category$.pipe(
      switchMap((category) =>
        this._service.getItems(category).pipe(
          tapResponse(
            (response) => {
              this.setMenuOptions(response);
            },
            (error: HttpErrorResponse) => {
              console.log('error.');
            }
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setMenuOptions =
    this.updater((state, menuOptions: MenuOption[] | undefined) => {
      return {...state, menuOptions};
    })

  readonly getMenuOptions = this.select((state) => state.menuOptions);

}
