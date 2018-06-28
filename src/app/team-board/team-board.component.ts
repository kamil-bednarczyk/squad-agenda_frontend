import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {ActivatedRoute} from '@angular/router';
import {TeamModel} from '../model/team.model';

@Component({
  selector: 'app-team-board',
  templateUrl: './team-board.component.html',
  styleUrls: ['./team-board.component.css']
})
export class TeamBoardComponent implements OnInit, OnDestroy {

  public static NUMBER_OF_DAYS = 5;
  team: TeamModel = new TeamModel();
  id: string;
  width: string;
  height: string;
  days: Date[] = [];

  constructor(private teamService: TeamService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.width = (100 / TeamBoardComponent.NUMBER_OF_DAYS) + '%';
    const start: Date = new Date();
    const end = new Date();
    end.setDate(start.getDate() + TeamBoardComponent.NUMBER_OF_DAYS);
    this.setDaysForBoard(start, end);

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.teamService.getTeam(this.id).subscribe(response => {
      this.team = <TeamModel>response;
    });
  }

  setDaysForBoard(start: Date, end: Date) {
    const now = new Date();
    now.setDate(start.getDate());
    while (now < end) {
      this.days.push(new Date(now.getTime()));
      now.setDate(now.getDate() + 1);
    }
  }

  ngOnDestroy(): void {
  }

  calculateWidthPerUser() {

    this.height = (100 / (this.team.members.length + 1)) + 'vh';
  }
}
