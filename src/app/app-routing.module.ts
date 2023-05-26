// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {TeamsComponent} from "./teams/teams.component";
import {AnketlerComponent} from "./anketler/anketler.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'anketler',
    component: AnketlerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
