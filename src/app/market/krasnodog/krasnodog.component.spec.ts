import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KrasnodogComponent } from './krasnodog.component';

describe('KrasnodogComponent', () => {
  let component: KrasnodogComponent;
  let fixture: ComponentFixture<KrasnodogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KrasnodogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrasnodogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
