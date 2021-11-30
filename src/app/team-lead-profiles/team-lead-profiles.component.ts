import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-lead-profiles',
  templateUrl: './team-lead-profiles.component.html',
  styleUrls: ['./team-lead-profiles.component.css'],
})
export class TeamLeadProfilesComponent implements OnInit {
  constructor() {}

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  ngOnInit(): void {
    this.Designation = 'TeamLead';
    this.Username = 'Jagadeshwar';
    this.NoOfTeamMembers = 234;
    this.TotalCostOfAllProjects = 2300000;
    this.PendingTasks = 34;
    this.UpComingProjects = 2;
    this.ProjectCost = 900000;
    this.CurrentExpenditure = 400000;
    this.AvailableFunds = 500000;
  }
}
