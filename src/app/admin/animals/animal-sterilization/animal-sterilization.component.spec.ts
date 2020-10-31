import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSterilizationComponent } from './animal-sterilization.component';

describe('AnimalSterilizationComponent', () => {
  let component: AnimalSterilizationComponent;
  let fixture: ComponentFixture<AnimalSterilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSterilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSterilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
