import {Component, Input, OnInit} from '@angular/core';
import {TeamModel} from '../../model/team.model';
import {TeamService} from '../../service/team.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {

  @Input() teams: TeamModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
