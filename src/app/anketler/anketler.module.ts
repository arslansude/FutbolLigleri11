// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { AnketlerRoutingModule } from './anketler-routing.module';
import { AnketlerComponent } from './anketler.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
@NgModule({
  declarations: [
    AnketlerComponent
  ],
  imports: [
    CommonModule,
    AnketlerRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatRadioModule
  ]
})
export class AnketlerModule { }
