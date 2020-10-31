import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AnimalModel } from './animal.model';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AnimalsService {

  private cacheDocs: BehaviorSubject<{ id: number, docs: any[] }[]> = new BehaviorSubject<{ id: number, docs: any[] }[]>([]);

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: object) {
  }

  getAviariesAnimals(): Observable<AnimalModel[]> {
    return this.http.get<any[]>(`/api/animals`);
  }

  getAnimalById(id: number): Observable<AnimalModel> {
    return this.http.get<any>(`/api/animals/${id}`);
  }

  getTailTypes(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/tail-types`);
  }

  getPetTypes(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/pet-types`);
  }

  getPetSizes(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/pet-sizes`);
  }

  getEarTypes(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/ear-types`);
  }

  getDogFurs(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/dog-furs`);
  }

  getShelters(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/shelters`);
  }

  getLeavingReason(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/leaving-reason`);
  }

  getEuthanasiaReasons(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/euthanasia-reason`);
  }

  getCauseDeath(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/cause-death`);
  }

  getCatFurs(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/cat-furs`);
  }

  getDogColors(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/dog-colors`);
  }

  getCatColors(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/cat-colors`);
  }

  getPetGenders(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/pet-genders`);
  }

  getDogBreeds(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/dog-breeds`);
  }

  getCatBreeds(): Observable<{ id: number, name: string }[]> {
    return this.http.get<any>(`/api/animals/cat-breeds`);
  }

  saveAnimalDetails(details: any): Observable<AnimalModel> {
    return this.http.post<any>(`/api/animals`, details);
  }

  savePhoto(id: number, photo: Blob, name: string): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<any>(`/api/animals/${id}/photo`, formData);
  }

  updateAnimalDetails(id: any, details: any): Observable<AnimalModel> {
    return this.http.put<any>(`/api/animals/${id}`, details);
  }

  addDocsToCache(id: number, doc: any): void {
    let cachetDocs = this.cacheDocs.value.find(i => i.id === id);
    if (!cachetDocs) {
      cachetDocs = {id, docs: []};
    }
    cachetDocs.docs.push(doc);

    const temp = this.cacheDocs.value;
    temp.push(cachetDocs);

    this.cacheDocs.next(temp);
  }

  getAnimalDocsById(id: number): Observable<any> {
    if (!!id && this.cacheDocs.value.some(c => c.id === id)) {
      return of(this.cacheDocs.value.find(i => i.id === id).docs);
    }
    return this.http.get<any>(`/api/animals/${id}/docs`).pipe(
      tap(docs => {
        const cachetDocs = this.cacheDocs.value;
        cachetDocs.push({id, docs});
        this.cacheDocs.next(cachetDocs);
      }),
      switchMap(() => this.cacheDocs.pipe(map(d => d.find(i => i.id === id)?.docs)))
    );
  }
}
