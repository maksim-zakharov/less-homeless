import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YandexMapsApiService } from '../core/yandex-maps-api.service';
import { AuthService } from '../login/auth.service';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './register-shelter.component.html',
  styleUrls: ['./register-shelter.component.scss']
})
export class RegisterShelterComponent implements OnInit {

  form: FormGroup;

  searchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  options$ = this.searchQuery$.pipe(
    filter(q => !!q),
    debounceTime(500),
    switchMap(q => this.yandexMapsApiService.searchAddress(q, 100)),
  );

  constructor(private fb: FormBuilder, private yandexMapsApiService: YandexMapsApiService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      shelterName: ['', [Validators.required]],
      shelterAddress: ['', [Validators.required]]
    });
  }

  submit() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.authService.registerShelter(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.email,
      this.form.value.password,
      this.form.value.shelterName,
      this.form.value.shelterAddress
    ).subscribe();
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.searchQuery$.next(value);
  }
}
