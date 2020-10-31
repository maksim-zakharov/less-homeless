import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ParasiteTreatment } from '../models/parasite-treatment.entity';

@Component({
  selector: 'app-animal-parasite-treatment',
  templateUrl: './animal-parasite-treatment.component.html',
  styleUrls: ['./animal-parasite-treatment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimalParasiteTreatmentComponent),
      multi: true,
    },
  ],
})
export class AnimalParasiteTreatmentComponent implements OnInit, ControlValueAccessor {

  form: FormGroup;
  value: ParasiteTreatment;

  @Input() readonly: boolean;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      medicineName: ['', [Validators.required]],
      date: ['', [Validators.required]],
      animalWeight: ['', [Validators.required]],
      dose: ['', [Validators.required]],
      veterinarianName: ['', [Validators.required]]
    });
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.form.patchValue(obj || {});
    this.value = obj || [];
  }

  submit(): void {
    // tslint:disable-next-line:forin
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.onChange(this.form.value);
  }
}
