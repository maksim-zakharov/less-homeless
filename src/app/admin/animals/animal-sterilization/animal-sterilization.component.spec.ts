import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimalSterilizationComponent } from './animal-sterilization.component';

describe('AnimalSterilizationComponent', () => {
  let component: AnimalSterilizationComponent;
  let fixture: ComponentFixture<AnimalSterilizationComponent>;

  beforeEach(waitForAsync(() => {
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
