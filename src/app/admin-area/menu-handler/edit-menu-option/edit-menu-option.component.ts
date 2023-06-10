import {Component, Inject, OnInit} from '@angular/core';
import {MenuOption} from "../../../models/menu-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreService} from "../../../services/firestore/firestore.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-edit-menu-option',
  templateUrl: './edit-menu-option.component.html',
  styleUrls: ['./edit-menu-option.component.scss']
})
export class EditMenuOptionComponent implements OnInit {

  imageUrl?: string;

  form: FormGroup = this.fb.group({
    'title': new FormControl<string>('', Validators.required),
    'description': new FormControl<string>('', Validators.required),
    'price': new FormControl<number>(0, Validators.required),
    'category': new FormControl<string>('', Validators.required),
    'calories': new FormControl<number>(0, Validators.required),
    'protein': new FormControl<number>(0, Validators.required),
    'carbs': new FormControl<number>(0, Validators.required),
    'fat': new FormControl<number>(0, Validators.required),
  });


  constructor(
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private storage: AngularFireStorage,
    private dialogRef: MatDialogRef<EditMenuOptionComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public menuOption: MenuOption,
  ) {
  }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues(): void {
    this.form.patchValue({
      title: this.menuOption.title,
      description: this.menuOption.description,
      price: this.menuOption.price,
      category: this.menuOption.category,
      calories: this.menuOption.nutritionalInfo.calories,
      protein: this.menuOption.nutritionalInfo.protein,
      carbs: this.menuOption.nutritionalInfo.carbs,
      fat: this.menuOption.nutritionalInfo.fat,
    });
    this.imageUrl = this.menuOption.image;
  }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `${file.name}`;
      const uploadTask = await this.storage.upload(path, file);
      this.imageUrl = await uploadTask.ref.getDownloadURL();
      console.log('this.imageUrl', this.imageUrl);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const newData = {
        id: this.menuOption.id,
        title: this.form.value.title,
        description: this.form.value.description,
        price: this.form.value.price,
        category: this.form.value.category,
        image: this.imageUrl,
        nutritionalInfo: {
          calories: this.form.value.calories,
          protein: this.form.value.protein,
          carbs: this.form.value.carbs,
          fat: this.form.value.fat,
        }
      };
      this.firestoreService.updateDocumentById(newData, this.menuOption.id);
      this.dialogRef.close();
    }
  }


}
