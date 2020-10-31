/* tslint:disable:variable-name no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Observable, Observer, of } from 'rxjs';
import { filter, flatMap, map, pluck, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzUploadFile } from 'ng-zorro-antd';
import { AnimalModel } from '../animal.model';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['./animals-edit.component.scss']
})
export class AnimalsEditComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private fb: FormBuilder,
              private ordersService: AnimalsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  validateForm!: FormGroup;

  file: File;
  fileList: File[] = [];
  //   nzAction="/api/animals/{{animalId$ | async}}/photo"

  animalId$ = this.route.params.pipe(
    pluck('id'),
    filter(id => !!id),
    flatMap(id => this.ordersService.getAnimalById(id),
      (id, animal) => {
        this.validateForm.patchValue(animal);
        this.avatarUrl = animal.imgSrc;
        return id;
      }),
    shareReplay(1)
  );

  titleText$ = this.animalId$.pipe(
    map(id => `Редактирование карточки учета животного №${id}`),
    startWith('Создание карточки учета животного'),
    shareReplay(1)
  );

  submitText$ = this.animalId$.pipe(
    map(id => `Сохранить`),
    startWith('Создать'),
    shareReplay(1)
  );

  loading = false;
  avatarUrl?: string;

  breeds$ = this.ordersService.getCatBreeds();

  tailTypes$ = this.ordersService.getTailTypes();
  petTypes$ = this.ordersService.getPetTypes();
  shelters$ = this.ordersService.getShelters();
  petSizes$ = this.ordersService.getPetSizes();
  earTypes$ = this.ordersService.getEarTypes();
  dogFurs$ = this.ordersService.getDogFurs();
  catFurs$ = this.ordersService.getCatFurs();
  dogColors$ = this.ordersService.getDogColors();
  catColors$ = this.ordersService.getCatColors();
  petGenders$ = this.ordersService.getPetGenders();
  dogBreeds$ = this.ordersService.getDogBreeds();
  catBreeds$ = this.ordersService.getCatBreeds();
  euth$ = this.ordersService.getEuthanasiaReasons();
  death$ = this.ordersService.getCauseDeath();
  leave$ = this.ordersService.getLeavingReason();

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.titleText$.pipe(
      switchMap(title => title.startsWith('Создание')
        ? this.ordersService.saveAnimalDetails(this.validateForm.value)
        : this.ordersService.updateAnimalDetails(this.validateForm.value.id, this.validateForm.value)),
      switchMap(createdAnimal => this.ordersService.savePhoto(createdAnimal.id, this.fileList[0], this.fileList[0].name),
        (createdAnimal, _) => {
          return createdAnimal;
        }),
      tap(createdAnimal => this.router.navigate(['../', createdAnimal.id], {relativeTo: this.route}))
    ).subscribe();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [null, []],
      category: ['Кошка', [Validators.required]],
      catchingAct: [null, [Validators.required]],
      district: [null, [Validators.required]],
      street: [null, [Validators.required]],
      breed: [null, [Validators.required]],
      sex: ['0', [Validators.required]],
      color: [null, [Validators.required]],
      birthDate: [new Date(), [Validators.required]],
      wool: [null, [Validators.required]],
      ears: [null, [Validators.required]],
      tail: [null, [Validators.required]],
      size: ['Маленький', [Validators.required]],
      weight: [null, [Validators.required]],
      specialSigns: [null, [Validators.required]],
      identificationLabel: [null, [Validators.required]],
      shelterName: [null, [Validators.required]],
      shelterArrivalDate: [new Date(), [Validators.required]],
      name: [null, [Validators.required]],
      sterilizationStationName: [null, [Validators.required]],
      sterilizationStationAddress: [null, [Validators.required]],
      sterilizationStationArrivalDate: [new Date(), [Validators.required]],
      sterilizationDate: [new Date(), [Validators.required]],
      doctorFullname: [null, [Validators.required]],
      dischargeDate: [new Date(), [Validators.required]],
      headOfSterilizationFullname: [null, [Validators.required]],
    });
  }

  beforeUpload = (file: File, _fileList: NzUploadFile[]) => {
    this.fileList = this.fileList.concat(file);
    this.getBase64(file!, (img: string) => {
      this.loading = false;
      this.avatarUrl = img;
    });
    return false;
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
}
