import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterShelterComponent } from './register-shelter.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule, NzButtonModule, NzCardModule, NzDividerModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '', component: RegisterShelterComponent
  }
];
@NgModule({
  declarations: [RegisterShelterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzCardModule,
    NzButtonModule,
    NzDividerModule,
    NzAutocompleteModule
  ]
})
export class RegisterShelterModule { }
