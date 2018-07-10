import {Component, OnInit} from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from '../service/session.service';
import {TeamService} from '../service/team.service';
import {TeamModel} from '../model/team.model';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: UserModel = new UserModel();
  userTeams: TeamModel[] = [];
  placeholderImagePath: string;

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private sessionService: SessionService,
              private userService: UserService,
              private teamService: TeamService) {

  }

  ngOnInit() {
    this.placeholderImagePath = '/assets/placeholder.png';
    this.getUserData();
    this.getTeamForMember();
  }

  private getUserData() {
    this.httpClient.get<UserModel>('http://localhost:8092/users/username/' + this.sessionService.getUsername())
      .subscribe(response => {
        this.user = response;
      });
  }

  getTeamForMember() {
    this.teamService.getTeamsForUser().subscribe(req => this.userTeams = <TeamModel[]> req);
  }

  selectFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.currentFileUpload = event.target.files[0];
    }
  }

  upload() {
    const formdata: FormData = new FormData();
    formdata.append('file', this.currentFileUpload);

    this.userService.sendAvatar(formdata).subscribe(req =>
      this.getUserData());
    this.selectedFiles = null;
    this.currentFileUpload = null;
  }
}
