import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealOptionsService {

  public categorySelected = new BehaviorSubject<string>('');

}
