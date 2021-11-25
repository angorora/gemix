import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';

import { BonusClaimSuccessComponent } from './bonus-claim-success.component';

describe('BonusClaimSuccessComponent', () => {
  let component: BonusClaimSuccessComponent;
  let fixture: ComponentFixture<BonusClaimSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusClaimSuccessComponent ],
   
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({params:{params:{amount:2,price:"Free",game:"Gemix",countdown: 25}}})
          }
        }
      ]
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
