import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bonus } from 'src/app/core/interfaces/bonus/bonus-interfaces';
import { GemixApiService } from 'src/app/core/services/gemix-api.service';

@Component({
  selector: 'app-bonus-display',
  templateUrl: './bonus-display.component.html',
  styleUrls: ['./bonus-display.component.scss'],
})
export class BonusDisplayComponent implements OnInit {
  sub = new Subscription();
  bonus:Bonus =null
  interval;
  time: number;
  countdown:string
  constructor(public gemixService: GemixApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.gemixService
    .getBonusData()
    .subscribe({
      next:(bonus: Bonus)=>{
        this.bonus = bonus
        this.time = bonus.countdown;
        this.countdown = `00:${this.time}`
        this.interval = setInterval(()=>{
          if(this.time >= 10){
            this.time = this.time -1
            this.countdown = `00:${this.time}`
          }
          else if(this.time > 0 ){
            this.time = this.time -1
            this.countdown = `00:0${this.time}`
          }
          else{
            this.countdown = `00:00`
          }
        },1000)
      },
      error:(e)=>{
        console.error(e);
      }
    })
  }

 gotoSuccess(){
  this.router.navigate(['/bonuses/claim-success/:bonus',this.bonus])
 }
  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }
}
