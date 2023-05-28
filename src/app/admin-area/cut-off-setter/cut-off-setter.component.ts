import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-cut-off-setter',
  templateUrl: './cut-off-setter.component.html',
  styleUrls: ['./cut-off-setter.component.scss']
})
export class CutOffSetterComponent {

  minDate: Date;
  maxDate: Date;
  selectedDate: String | undefined;

  form = this.fb.group({
    date: new FormControl<Date>(new Date())
  });
  constructor(private fb: FormBuilder) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  onInputChange(value: String): void {
    console.log('input changed ->', value)
    this.selectedDate = value;
    console.log('selectedDate ->', this.selectedDate)
  }

}
