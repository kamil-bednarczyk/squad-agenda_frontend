import {Component, Input, OnInit} from '@angular/core';
import {TeamModel} from '../../model/team.model';

@Component({
  selector: 'app-team-element',
  templateUrl: './team-element.component.html',
  styleUrls: ['./team-element.component.css']
})
export class TeamElementComponent implements OnInit {

  @Input() team: TeamModel;

  constructor() { }

  ngOnInit() {
  }

}
