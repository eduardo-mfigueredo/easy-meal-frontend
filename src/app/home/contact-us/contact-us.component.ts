import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FirestoreService} from "../../services/firestore/firestore.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ContactSentDialogComponent} from "../contact-sent-dialog/contact-sent-dialog.component";

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
    private firestore: FirestoreService,
    private datePipe: DatePipe,
    private dialog: MatDialog
  ) {
  }

  onSubmit() {
    if (this.form.valid) {
      this.firestore.addContactForm({
        name: this.form.value.name,
        email: this.form.value.email,
        message: this.form.value.message,
        date: this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm')
      }).then(() => {
        console.log(this.form.value);
        this.form.reset();
        this.dialog.open(ContactSentDialogComponent);
      })
    }
  }

}
