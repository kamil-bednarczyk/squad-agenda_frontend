import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {SessionService} from '../service/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData = {username: '', password: ''};

  constructor(private authService: AuthService,
              private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.logIn(this.loginData.username, this.loginData.password).subscribe(
      JWT => {
        this.sessionService.setJWT(JWT);
        this.sessionService.setUsername(this.loginData.username);
        this.router.navigate(['/home']);
      }
    );
  }

  logout() {
    this.authService.logout();
  }


}
