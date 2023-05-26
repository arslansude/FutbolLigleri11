// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// @ts-ignore
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @ts-ignore
import {MatToolbarModule} from '@angular/material/toolbar';
// @ts-ignore
import {MatIconModule} from '@angular/material/icon';
// @ts-ignore
import {MatButtonModule} from '@angular/material/button';
// @ts-ignore
import {MatMenuModule} from "@angular/material/menu";
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";
// @ts-ignore
import Swiper from 'swiper';
import {TeamsModule} from "./teams/teams.module";
import {FormsModule} from "@angular/forms";
import { SlickCarouselModule } from 'ngx-slick-carousel';
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        HttpClientModule,
        FormsModule,
        TeamsModule,
        SlickCarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
