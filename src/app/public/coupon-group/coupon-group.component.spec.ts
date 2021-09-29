import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponGroupComponent } from './coupon-group.component';

describe('CouponGroupComponent', () => {
  let component: CouponGroupComponent;
  let fixture: ComponentFixture<CouponGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
