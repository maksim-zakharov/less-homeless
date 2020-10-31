import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsService } from './animals.service';
import {
  NzBreadCrumbModule,
  NzButtonModule, NzCardModule, NzCheckboxModule, NzDatePickerModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzFormModule, NzIconModule,
  NzInputModule, NzMessageModule, NzModalModule, NzRadioModule, NzSelectModule,
  NzTableModule, NzTabsModule, NzToolTipModule, NzUploadModule
} from 'ng-zorro-antd';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalsAviariesComponent } from './animals-aviaries/animals-aviaries.component';
import { AnimalSterilizationComponent } from './animal-sterilization/animal-sterilization.component';
import { AnimalParasiteTreatmentComponent } from './animal-parasite-treatment/animal-parasite-treatment.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalsDetailsComponent,
    AnimalsAviariesComponent,
    AnimalsEditComponent,
    AnimalSterilizationComponent,
    AnimalParasiteTreatmentComponent
  ],
  providers: [AnimalsService],
  imports: [
    NzModalModule, NzMessageModule,
    CommonModule,
    AnimalsRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzIconModule,
    NzDatePickerModule,
    NzCardModule,
    NzUploadModule, NzRadioModule, NzTabsModule, FormsModule
  ]
})
export class AnimalsModule {
}
