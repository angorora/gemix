import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BonusDisplayComponent } from './bonus-display/bonus-display.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BonusClaimSuccessComponent } from './bonus-claim-success/bonus-claim-success.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:BonusDisplayComponent
  },
  {
    path:"claim-success/:bonus",
    component:BonusClaimSuccessComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [BonusDisplayComponent,BonusClaimSuccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BonusesModule { }
