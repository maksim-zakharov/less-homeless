import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-vaccination',
  templateUrl: './animal-vaccination.component.html',
  styleUrls: ['./animal-vaccination.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimalVaccinationComponent),
      multi: true,
    },
  ],
})
export class AnimalVaccinationComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: false;

  form: FormGroup;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      medicineName: ['', [Validators.required]],
      date: ['', [Validators.required]],
      medicineSeries: ['', [Validators.required]],
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
    this.form.patchValue([...obj] || {});

    this.onChange([this.form.value]);
  }

  submit(): void {
    // tslint:disable-next-line:forin
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.onChange([this.form.value]);
    this.onSubmit.next();
  }
}
