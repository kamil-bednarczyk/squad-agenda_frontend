import {Component, OnInit} from '@angular/core';
import {AppService} from '../service/app.servcie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData = {username: '', password: ''};

  constructor(private service: AppService) {
  }

  ngOnInit() {
  }

  login() {
    this.service.logIn(this.loginData.username, this.loginData.password);
  }

}
