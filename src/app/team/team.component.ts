import {Component, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {TeamModel} from '../model/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: TeamModel[] = [];
  teamForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.teamForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
    });
  }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(response => {
      this.teams = <TeamModel[]>response;
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
