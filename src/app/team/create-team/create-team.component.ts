import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../service/team.service';
import {TeamModel} from '../../model/team.model';
import {SessionService} from '../../service/session.service';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  teamForm: FormGroup;
  team: TeamModel;

  constructor(private fb: FormBuilder,
              private teamService: TeamService,
              private sessionService: SessionService,
              private alertService: AlertService
  ) {
    this.teamForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.team = form;
    this.team.ownerName = this.sessionService.getUsername();
    this.teamService.createTeam(this.team).subscribe(req =>
      this.alertService.success('New Team Created:' + this.team.name));
  }
}
