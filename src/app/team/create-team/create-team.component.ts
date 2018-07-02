import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../service/team.service';
import {TeamModel} from '../../model/team.model';
import {SessionService} from '../../service/session.service';
import {AlertService} from '../../service/alert.service';
import {MemberModel} from '../../model/member.model';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  teamForm: FormGroup;
  team: TeamModel;
  username: string;

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
    this.team = new TeamModel();
    this.username = this.sessionService.getUsername();
  }

  onSubmit(form) {
    console.log(form);
    this.team.name = form.name;
    this.team.description = form.description;
    this.team.ownerName = this.username;

    this.team.members.push(new MemberModel('', this.username));
    console.log(this.team);
    this.teamService.createTeam(this.team).subscribe(req => {
        this.alertService.success('New Team Created:' + this.team.name);
        this.teamForm.reset();
      }
    );
  }
}
