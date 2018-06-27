import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {ActivatedRoute} from '@angular/router';
import {TeamModel} from '../model/team.model';
import {EventService} from '../service/event.service';

@Component({
  selector: 'app-team-board',
  templateUrl: './team-board.component.html',
  styleUrls: ['./team-board.component.css']
})
export class TeamBoardComponent implements OnInit, OnDestroy {

  team: TeamModel = new TeamModel();
  id: string;
  width: string;
  height: string;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.teamService.getTeam(this.id).subscribe(response => {
      this.team = <TeamModel>response;
    });
    this.calculateWidthPerUser();
  }

  ngOnDestroy(): void {
  }

  calculateWidthPerUser() {
    this.width =  (100 / 7) + 'vw';
    this.height =  (100 / (this.team.members.length + 1)) + 'vh';
  }
}
