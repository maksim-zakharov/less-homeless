import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-sterilization',
  templateUrl: './animal-sterilization.component.html',
  styleUrls: ['./animal-sterilization.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimalSterilizationComponent),
      multi: true,
    },
  ],
})
export class AnimalSterilizationComponent implements OnInit, ControlValueAccessor {

  form: FormGroup;

  _value;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      status: ['', [Validators.required]],
      date: ['', [Validators.required]],
      planDate: ['', [Validators.required]],
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
