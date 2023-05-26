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
export class TeamsComponent implements OnInit{
  // @ts-ignore
  team: Teams[];
  // @ts-ignore
  firstHalf: any[];
  // @ts-ignore
  secondHalf: any[];
  constructor(private teamsService: TeamsServices) {}
  // @ts-ignore
  ngOnInit():void {
    // @ts-ignore
    this.getTeams();
    // @ts-ignore
    this.getFirstHalf();
    // @ts-ignore
    this.getSecondHalf();
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
}
