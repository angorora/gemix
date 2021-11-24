import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GemixCardComponent } from './gemix-card/gemix-card.component';



@NgModule({
  declarations: [GemixCardComponent],
  imports: [
    CommonModule
  ],
  exports:[GemixCardComponent]
})
export class SharedModule { }
