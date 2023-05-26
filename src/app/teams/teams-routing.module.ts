// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
const routes: Routes = [{ path: 'teams', component: TeamsComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
