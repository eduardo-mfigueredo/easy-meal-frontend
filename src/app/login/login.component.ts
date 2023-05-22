import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required)
  });

  constructor(
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) {
  }

  login() {
    const email = this.form.controls.email?.value;
    const password = this.form.controls.password?.value;
    if (email && password) {
      this.authenticationService.signIn({
        email: email,
        password: password
      }).subscribe(() => {
        this.router.navigate(['/admin']);
      }, error => {
        this.snackBar.open("Usuário ou senha inválidos.", "Ok", {duration: 3000})
      });
    }
  }

}
