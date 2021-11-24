import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemixCardComponent } from './gemix-card.component';

describe('GemixCardComponent', () => {
  let component: GemixCardComponent;
  let fixture: ComponentFixture<GemixCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemixCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
