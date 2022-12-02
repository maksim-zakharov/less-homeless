import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketDetailsComponent } from './market-details.component';

describe('MarketDetailsComponent', () => {
  let component: MarketDetailsComponent;
  let fixture: ComponentFixture<MarketDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
