import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalParasiteTreatmentComponent } from './animal-parasite-treatment.component';

describe('AnimalParasiteTreatmentComponent', () => {
  let component: AnimalParasiteTreatmentComponent;
  let fixture: ComponentFixture<AnimalParasiteTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalParasiteTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalParasiteTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
