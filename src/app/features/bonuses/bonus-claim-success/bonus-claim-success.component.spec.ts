import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusClaimSuccessComponent } from './bonus-claim-success.component';

describe('BonusClaimSuccessComponent', () => {
  let component: BonusClaimSuccessComponent;
  let fixture: ComponentFixture<BonusClaimSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusClaimSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusClaimSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
