import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-euthanasia',
  templateUrl: './animal-euthanasia.component.html',
  styleUrls: ['./animal-euthanasia.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimalEuthanasiaComponent),
      multi: true,
    },
  ],
})
export class AnimalEuthanasiaComponent implements OnInit, ControlValueAccessor {

  form: FormGroup;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', [Validators.required]],
      act: ['', [Validators.required]],
      reason: ['', [Validators.required]],
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
