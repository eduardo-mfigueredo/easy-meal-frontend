import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {MenuOption} from "../../models/menu-model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _API: string = `assets/api/menu-options.json`
  constructor(private httpClient: HttpClient) {
  }

  // getMenuOptions(): Observable<MenuModel> {
  //   return this.httpClient.get<MenuModel>(this._API);
  // }

  getMenuOptions(category?: string | null): Observable<MenuOption[]> {
    return this.httpClient.get<MenuOption[]>(this._API).pipe(
      map((response: MenuOption[]) => {
        if (category) {
          return response.filter((menuOption: MenuOption) => {
            return menuOption.category == category;
          });
        } else {
          return response;
        }
      }
    ));
  }

}
