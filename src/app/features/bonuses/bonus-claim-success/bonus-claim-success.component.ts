import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bonus } from 'src/app/core/interfaces/bonus/bonus-interfaces';

@Component({
  selector: 'app-bonus-claim-success',
  templateUrl: './bonus-claim-success.component.html',
  styleUrls: ['./bonus-claim-success.component.scss']
})
export class BonusClaimSuccessComponent implements OnInit {
  bonus: Bonus;
  unsubscribe = new Subject();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((params: ParamMap) => {
      this.bonus = params["params"];
    })
  }
  
   ngOnDestroy(){
     this.unsubscribe.next();
     this.unsubscribe.complete();
   }
}
