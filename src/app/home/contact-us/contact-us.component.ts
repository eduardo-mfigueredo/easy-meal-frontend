import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  form = this.fb.group({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    message: new FormControl<string>('', [Validators.required])
  })

  constructor(
    private fb: FormBuilder,
  ) {
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
