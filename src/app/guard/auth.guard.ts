import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authService: AuthenticationService,
    private router: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      tap(isLoggedIn => {
        if(!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }

}
