import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsService } from './animals.service';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalsAviariesComponent } from './animals-aviaries/animals-aviaries.component';
import { AnimalSterilizationComponent } from './animal-sterilization/animal-sterilization.component';
import { AnimalParasiteTreatmentComponent } from './animal-parasite-treatment/animal-parasite-treatment.component';
import { AnimalVaccinationComponent } from './animal-vaccination/animal-vaccination.component';
import { AnimalEuthanasiaComponent } from './animal-euthanasia/animal-euthanasia.component';
import { AnimalCaptureComponent } from './animal-capture/animal-capture.component';
import { AnimalArrivalComponent } from './animal-arrival/animal-arrival.component';
import { CoreModule } from '../../core/core.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    AnimalArrivalComponent,
    AnimalsListComponent,
    AnimalsDetailsComponent,
    AnimalsAviariesComponent,
    AnimalsEditComponent,
    AnimalVaccinationComponent,
    AnimalEuthanasiaComponent,
    AnimalCaptureComponent,
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
    NzUploadModule, NzRadioModule, NzTabsModule, FormsModule, NzPageHeaderModule, CoreModule, NzGridModule, NzCardModule, NzTabsModule, NzDividerModule, NzDescriptionsModule, NzBreadCrumbModule, NzUploadModule
  ]
})
export class AnimalsModule {
}
