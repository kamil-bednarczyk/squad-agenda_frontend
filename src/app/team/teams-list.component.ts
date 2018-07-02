import {Component, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {TeamModel} from '../model/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: TeamModel[] = [];
  searchText = '';

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.getTeams();
  }

  onSubmit(form) {
    console.log(form);
  }

  private getTeams() {

    this.teamService.getAllTeams().subscribe(response => {
      this.teams = <TeamModel[]>response;
    });
  }
}
