import {Injectable} from '@angular/core';
import {from, map, Observable, of, switchMap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/user";

type SignIn = {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$?: Observable<User | undefined>;

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.getUser(user.uid);
        } else
          return of(undefined);
      })
    )
  }

  signIn(signIn: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(signIn.email, signIn.password));
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  isLoggedIn(): Observable<boolean> {
    return this.user$!.pipe(map((user) => user !== undefined));
  }

  getUser(uid: string): Observable<User | undefined> {
    return this.firestore.doc<User>(`users/${uid}`).valueChanges();
  }

}



