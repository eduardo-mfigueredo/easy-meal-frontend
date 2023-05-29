import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {MenuOption} from "../../integration/menu/menu-model";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private collectionMenuOptions: AngularFirestoreCollection<any>;
  private collectionCutoff: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collectionMenuOptions = firestore.collection('menu-options');
    this.collectionCutoff = firestore.collection('cut-off-time');
  }


  getItems(category: string | null): Observable<MenuOption[]> {
    return this.collectionMenuOptions.valueChanges().pipe(
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
    return this.collectionMenuOptions.add(item);
  }

  getCutoff(): Observable<any> {
    return this.collectionCutoff.valueChanges();
  }

  setCutOff(cutoff: string): void {
    this.firestore.collection('cut-off-time').doc('yES9VeXntFVPAjsUj2pd').set({cutoff: cutoff});
  }

}
