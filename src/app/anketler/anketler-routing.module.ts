// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import { AnketlerComponent } from './anketler.component';
const routes: Routes = [{ path: '', component: AnketlerComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnketlerRoutingModule { }
