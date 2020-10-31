/* tslint:disable:variable-name no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { combineLatest, Observable, Observer, of, Subject, zip } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  flatMap,
  map,
  pluck,
  shareReplay,
  startWith,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';
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
      switchMap(createdAnimal => this.fileList.length ? this.ordersService.savePhoto(createdAnimal.id, this.fileList[0], this.fileList[0].name) : of(createdAnimal),
        (createdAnimal, _) => {
          return createdAnimal;
        }),
      tap(createdAnimal => this.router.navigate(['../', createdAnimal.id], {relativeTo: this.route}))
    ).subscribe();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [null, []],
      identificationLabel: [null, [Validators.required]],
      name: [null, []],
      category: [null, []],
      district: [null, []],
      street: [null, []],
      breed: [null, []],
      sex: [null, []],
      color: [null, []],
      birthDate: [null, []],
      wool: [null, []],
      ears: [null, []],
      aviary: [null, []],
      tail: [null, []],
      size: [null, []],
      weight: [null, []],
      specialSigns: [null, []],
      shelter: [null, []],
      doctorName: [null, []],
      dischargeDate: [null, []],
      euthanasiaReason: [null, []],
      leavingReason: [null, []],
      causeDeath: [null, []],
      imgSrc: [null, []],
      vaccination: [null, []],
      parasiteTreatment: [null, []],
      captureInfo: [null, []],
      sterilization: [null, []],
    });
  }

  beforeUpload = (file: File, _fileList: NzUploadFile[]) => {
    this.fileList = this.fileList.concat(file);
    this.getBase64(file!, (img: string) => {
      this.loading = false;
      this.avatarUrl = img;
    });
    return false;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
}
