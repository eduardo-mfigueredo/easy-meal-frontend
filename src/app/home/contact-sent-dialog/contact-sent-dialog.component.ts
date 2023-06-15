import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-contact-sent-dialog',
  templateUrl: './contact-sent-dialog.component.html',
  styleUrls: ['./contact-sent-dialog.component.scss']
})
export class ContactSentDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ContactSentDialogComponent>
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }

}
