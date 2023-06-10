import {Component, Inject} from '@angular/core';
import {MenuOption} from "../../../models/menu-model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirestoreService} from "../../../services/firestore/firestore.service";

@Component({
  selector: 'app-delete-menu-option',
  templateUrl: './delete-menu-option.component.html',
  styleUrls: ['./delete-menu-option.component.scss']
})
export class DeleteMenuOptionComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteMenuOptionComponent>,
    private fireStoreService: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public option: MenuOption,
  ) {
  }

  onConfirm(): void {
    this.fireStoreService.deleteDocumentById(this.option.id)
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
