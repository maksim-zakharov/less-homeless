import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCardModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzCardModule,
    NzButtonModule
  ]
})
export class LoginModule { }
