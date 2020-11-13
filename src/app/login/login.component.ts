import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { YandexMapsApiService } from '../core/yandex-maps-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private yandexMapsApiService: YandexMapsApiService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.authService.login(this.form.value.login, this.form.value.password).subscribe();

    this.yandexMapsApiService.searchCity('Тула').subscribe();
  }
}
