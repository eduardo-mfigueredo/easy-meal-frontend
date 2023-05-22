import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

type SignIn = {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) {
  }

  signIn(signIn: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(signIn.email, signIn.password));
  }
}



