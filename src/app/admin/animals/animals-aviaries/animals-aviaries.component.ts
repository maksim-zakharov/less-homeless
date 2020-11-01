import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-animals-aviaries',
  templateUrl: './animals-aviaries.component.html',
  styleUrls: ['./animals-aviaries.component.scss']
})
export class AnimalsAviariesComponent implements OnInit {

  orders$: Observable<any[]>;
  editAnimalForm: FormGroup;

  constructor(private modal: NzModalService,
              private ordersService: AnimalsService,
              private fb: FormBuilder,
              private titleService: Title
  ) {
    this.titleService.setTitle('Список животных по вольерам / Госуслуги Москвы');
  }

  ngOnInit(): void {
    this.orders$ = this.ordersService.getAviariesAnimals().pipe(share());

    this.editAnimalForm = this.fb.group({
      aviaryId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      animalId: [null, [Validators.required]],
      chipId: [null, [Validators.required]]
    });
  }

  createModal(contentTemplateRef: TemplateRef<any>): void {
    this.modal.create({
      nzTitle: 'Добавить данные о животное в вальер',
      nzContent: contentTemplateRef,
      nzClosable: true,
      nzOkText: 'Добавить',
      nzCancelText: 'Отменить',
      nzOnOk: () => {

      }
    }).afterClose.subscribe(() => this.editAnimalForm.reset());
  }

  editModal(contentTemplateRef: TemplateRef<any>, animal: any): void {
    this.editAnimalForm.patchValue(animal);

    this.modal.create({
      nzTitle: 'Обновить данные о животном в вальере',
      nzContent: contentTemplateRef,
      nzClosable: false,
      nzOnOk: () => {
        animal.updateDate = new Date();
        Object.assign(animal, this.editAnimalForm.value);
      }
    }).afterClose.subscribe(() => this.editAnimalForm.reset());
  }
}
