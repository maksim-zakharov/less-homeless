import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { debounceTime, filter, map, startWith, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { YandexMapsApiService } from '../core/yandex-maps-api.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  searchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  options$ = this.searchQuery$.pipe(
    filter(q => !!q),
    debounceTime(500),
    switchMap(q => this.yandexMapsApiService.searchCity(q, 100)),
    // Список как в Озоне
    startWith([
      {address: 'Москва', longitude: 37.622504, latitude: 55.753215, city: 'Москва'},
      {address: 'Санкт-Петербург', longitude: 30.315635, latitude: 59.938951, city: 'Санкт-Петербург'},
      {address: 'Екатеринбург, Свердловская область', longitude: 60.597465, latitude: 56.838011, city: 'Екатеринбург'},
      {address: 'Нижний Новгород', longitude: 44.006516, latitude: 56.326797, city: 'Нижний Новгород'},
      {address: 'Пермь', longitude: 56.229434, latitude: 58.01045, city: 'Пермь'},
      {address: 'Новосибирск', longitude: 82.92043, latitude: 55.030199, city: 'Новосибирск'},
      {address: 'Казань, Республика Татарстан', longitude: 49.106405, latitude: 55.796127, city: 'Казань'},
      {address: 'Челябинск', longitude: 61.402554, latitude: 55.159897, city: 'Челябинск'},
      {address: 'Краснодар', longitude: 38.975313, latitude: 45.03547, city: 'Краснодар'},
      {address: 'Самара', longitude: 50.100193, latitude: 53.195873, city: 'Самара'}
    ]),
    map(results => results.slice(0, 10))
  );
  address: any;

  constructor(private modal: NzModalService, private yandexMapsApiService: YandexMapsApiService, public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.authService.logout({withoutRedirect: true});
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.searchQuery$.next(value);
  }

  createTplModal(tplContent: TemplateRef<any>): void {
    this.modal.create({
      nzTitle: 'Выберите город',
      nzContent: tplContent,
      nzFooter: undefined,
      nzMaskClosable: false,
      nzClosable: false
    });
  }

  onSelectCity($event: MouseEvent, value): void {
    $event.stopPropagation();
    $event.preventDefault();

    localStorage.setItem('city', JSON.stringify(value));

    this.modal.closeAll();
  }
}
