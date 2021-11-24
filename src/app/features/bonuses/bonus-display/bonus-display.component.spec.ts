import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusDisplayComponent } from './bonus-display.component';

describe('BonusDisplayComponent', () => {
  let component: BonusDisplayComponent;
  let fixture: ComponentFixture<BonusDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
