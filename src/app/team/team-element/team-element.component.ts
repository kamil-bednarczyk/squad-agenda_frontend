import {Component, Input, OnInit} from '@angular/core';
import {TeamModel} from '../../model/team.model';
import {ModalService} from '../../service/modal.service';
import {TeamService} from '../../service/team.service';
import {SessionService} from '../../service/session.service';
import {Router} from '@angular/router';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-team-element',
  templateUrl: './team-element.component.html',
  styleUrls: ['./team-element.component.css']
})
export class TeamElementComponent implements OnInit {

  @Input() team: TeamModel;

  constructor(private modalService: ModalService,
              private teamService: TeamService,
              private sessionService: SessionService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  updateMembersStatus(id: string, action: string) {
    this.modalService.close(id);
    this.teamService.updateTeamStatus(this.sessionService.getUsername(), this.team.id, action)
      .subscribe(req => {
        if (action === 'ADD') {
          this.alertService.success('You have joined ' + this.team.name + ' team');
        } else {
          this.alertService.success('You have leaved ' + this.team.name + ' team');
        }
        this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() =>
          this.router.navigate(['/teams']));
      });
  }

  isUserInTeam() {
    return this.team.members.filter(x => x.name === this.sessionService.getUsername())[0];
  }
}
