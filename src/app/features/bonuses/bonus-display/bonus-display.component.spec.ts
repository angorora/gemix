import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GemixApiService } from 'src/app/core/services/gemix-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BonusDisplayComponent } from './bonus-display.component';
import { of } from 'rxjs';

export class GemixApiServiceStub{
  getBonusData(){
    return of({amount:2,price:"Free",game:"Gemix",countdown: 25})
  }
}

describe('BonusDisplayComponent', () => {
  let component: BonusDisplayComponent;
  let fixture: ComponentFixture<BonusDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusDisplayComponent ],
       imports:[RouterTestingModule.withRoutes([])],
      providers:[{
        provide: GemixApiService,
        useClass: GemixApiServiceStub
     }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component.gemixService,'getBonusData').and.callThrough()
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
