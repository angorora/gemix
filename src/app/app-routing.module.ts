import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"bonuses",
    pathMatch:"full"
  },
  {
    path:"bonuses",
    loadChildren: () => import('./features/bonuses/bonuses.module').then((m)=>m.BonusesModule)
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
