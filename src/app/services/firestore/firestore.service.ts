import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {MenuOption} from "../../models/menu-model";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private collectionMenuOptions: AngularFirestoreCollection<any>;
  private collectionCutoff: AngularFirestoreCollection<any>;
  private collectionContactForm: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collectionMenuOptions = firestore.collection('menu-options');
    this.collectionCutoff = firestore.collection('cut-off-time');
    this.collectionContactForm = firestore.collection('contact-form');
  }


  getItems(category: string | null): Observable<MenuOption[]> {
    return this.collectionMenuOptions.snapshotChanges().pipe(
      map((snapshot) => {
        return snapshot.map((doc) => {
          const id = doc.payload.doc.id;
          const data = doc.payload.doc.data();
          return {id, ...data} as MenuOption;
        });
      }),
      map((response: MenuOption[]) => {
        if (category) {
          return response.filter((menuOption: MenuOption) => {
            return menuOption.category == category;
          });
        } else {
          return response;
        }
      })
    );
  }


  addItem(item: any): Promise<any> {
    return this.collectionMenuOptions.add(item);
  }

  updateDocumentById(newData: {
    image: string | undefined;
    nutritionalInfo: { carbs: any; protein: any; fat: any; calories: any };
    price: any;
    description: any;
    id: string;
    title: any;
    category: any
  }, id: string): Promise<void> {
    const docRef = this.collectionMenuOptions.doc<MenuOption>(id);
    return docRef.update(newData);
  }

  deleteDocumentById(id: string): Promise<void> {
    const docRef = this.collectionMenuOptions.doc<MenuOption>(id);
    return docRef.delete();
  }

  getCutoff(): Observable<any> {
    return this.collectionCutoff.valueChanges();
  }

  setCutOff(cutoff: string): void {
    this.firestore.collection('cut-off-time').doc('yES9VeXntFVPAjsUj2pd').set({cutoff: cutoff});
  }

  addContactForm(form: any): Promise<any> {
    return this.collectionContactForm.add(form);
  }

}
