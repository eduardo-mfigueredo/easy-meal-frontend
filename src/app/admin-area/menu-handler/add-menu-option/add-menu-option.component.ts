import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreService} from "../../../services/firestore/firestore.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-menu-option',
  templateUrl: './add-menu-option.component.html',
  styleUrls: ['./add-menu-option.component.scss']
})
export class AddMenuOptionComponent {

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
    private dialogRef: MatDialogRef<AddMenuOptionComponent>,
    private router: Router
  ) {
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

  submit(): void {
    if (this.form.valid) {
      this.firestoreService.addItem(
        {
          title: this.form.value.title,
          description: this.form.value.description,
          price: this.form.value.price,
          category: this.form.value.category,
          nutritionalInfo: {
            calories: this.form.value.calories,
            protein: this.form.value.protein,
            carbs: this.form.value.carbs,
            fat: this.form.value.fat,
          },
          image: this.imageUrl,
        }
      )
      this.router.navigate(['/admin']);
    }
  }
}
