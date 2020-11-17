import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterShelterComponent } from './register-shelter.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

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
