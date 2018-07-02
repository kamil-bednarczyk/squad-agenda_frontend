import {Component, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {TeamModel} from '../model/team.model';
import {SessionService} from '../service/session.service';

@Component({
  selector: 'app-team',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: TeamModel[] = [];
  userTeams: TeamModel[] = [];
  searchText = '';

  constructor(private teamService: TeamService, private sessionService: SessionService) {
  }

  ngOnInit() {
    this.getTeams();
  }


  private getTeams() {

    this.teamService.getAllTeams().subscribe(response => {
      this.teams = <TeamModel[]>response;
      this.teams.filter(team => team.members.find(member => member.name === this.sessionService.getUsername()))
        .forEach(team => this.userTeams.push(Object.assign({}, team)));
    });
  }
}
