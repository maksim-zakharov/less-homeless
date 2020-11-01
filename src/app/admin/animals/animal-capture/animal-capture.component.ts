import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-capture',
  templateUrl: './animal-capture.component.html',
  styleUrls: ['./animal-capture.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimalCaptureComponent),
      multi: true,
    },
  ],
})
export class AnimalCaptureComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: false;

  form: FormGroup;

  districts$ = this.animalService.getDistricts();

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private animalService: AnimalsService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      documentNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      // captureDocUrl: ['', [Validators.required]],
      orderId: ['', [Validators.required]],
      orderDate: ['', [Validators.required]],
      // orderDocUrl: ['', [Validators.required]],
      district: ['', [Validators.required]],
      address: ['', [Validators.required]],
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
