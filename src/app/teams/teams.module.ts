// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
// @ts-ignore
import {FormsModule} from "@angular/forms";
@NgModule({
    declarations: [
        TeamsComponent
    ],
    exports: [
        TeamsComponent
    ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        FormsModule
    ]
})
export class TeamsModule { }
