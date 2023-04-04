import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {MenuModel, MenuOption} from "./menu-model";
import {ThisReceiver} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _API: string = `assets/api/menu-options.json`
  constructor(private httpClient: HttpClient) {
  }

  getMenuOptions(): Observable<MenuModel> {
    return this.httpClient.get<MenuModel>(this._API);
  }
}
