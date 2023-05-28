import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {MenuOption} from "../../integration/menu/menu-model";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private collectionName = 'menu-options';
  private collection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collection = firestore.collection(this.collectionName);
  }

  getItems(category: string | null): Observable<MenuOption[]> {
    return this.collection.valueChanges().pipe(
      map((response: MenuOption[]) => {
          if (category) {
            return response.filter((menuOption: MenuOption) => {
              return menuOption.category == category;
            });
          } else {
            return response;
          }
        }
      )
    );
  }

  addItem(item: any): Promise<any> {
    return this.collection.add(item);
  }

}
