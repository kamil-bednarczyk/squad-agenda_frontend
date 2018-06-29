import {Component, OnInit} from '@angular/core';
import {TeamService} from '../service/team.service';
import {TeamModel} from '../model/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: TeamModel[] = [];
  teamForm: FormGroup;
  searchText = '';

  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.teamForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
    });
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
