// @ts-ignore
import {Component, OnInit} from '@angular/core';
import { Teams } from '../teams';
import {TeamsServices} from "../teams.service";
// @ts-ignore
import {team} from "../teams";
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  // @ts-ignore
  team: Teams[];
  // @ts-ignore
  firstHalf: any[];
  // @ts-ignore
  secondHalf: any[];
  dates: string[] = [];
  constructor(private teamsService: TeamsServices) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.getTeams();
    // @ts-ignore
    this.getFirstHalf();
    // @ts-ignore
    this.getSecondHalf();
    this.getRandomDates();
    // @ts-ignore
    const length: number = teams.size();
    const middle: number = Math.floor(length / 2);
    // @ts-ignore
    const firstHalf: Teams[] = teams.slice(0, middle);
    // @ts-ignore
    const secondHalf: Teams[] = teams.slice(middle, length)
    const formatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const currentDate = new Date();
    const randomDates: string[] = [];
    const uniqueDates: Set<string> = new Set();
    // @ts-ignore
    const formattedDate = formatter.format(randomDate);
    uniqueDates.add(formattedDate);
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + Math.floor(Math.random() * 30)
  }
  private getTeams() {
    // @ts-ignore
    this.teamsService.getTeams().subscribe(data => {
      // @ts-ignore
      this.team = data;
    });
  };
  private getFirstHalf() {
    // @ts-ignore
    this.teamsService.getFirstHalf().subscribe(data => {
      // @ts-ignore
      this.firstHalf = data;
    });
  };
  private getSecondHalf() {
    // @ts-ignore
    this.teamsService.getSecondHalf().subscribe(data => {
      // @ts-ignore
      this.secondHalf = data;
    });
  };
  private getRandomDates() {
    // @ts-ignore
    this.teamsService.getRandomDates().subscribe(data => {
      // @ts-ignore
      this.dates = data;
      },
    );
  }
}
