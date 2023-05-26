import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Teams} from "./teams";
@Injectable({
  providedIn: 'root'
})
export class TeamsServices {
  private baseURL = 'http://localhost:8080/futbolligleri/teams';
  constructor(private httpClient: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    // @ts-ignore
    return this.httpClient.get(`${this.baseURL}`);
  }
  getFirstHalf(): Observable<Teams[]> {
    // @ts-ignore
    return this.httpClient.get(`${this.baseURL}`);
  }
  getSecondHalf(): Observable<Teams[]> {
    // @ts-ignore
    return this.httpClient.get(`${this.baseURL}`);
  }
}
