import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlertService} from '../service/alert.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {SessionService} from '../service/session.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
@Injectable()
export class RegistrationComponent implements OnInit {

  registration_link = 'http://localhost:8092/users/registration';
  registrationForm: FormGroup;
  private newUser: User = new User();
  roles: string[];
  defaultRole: string;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private alertService: AlertService,
              private authService: AuthService,
              private sessionService: SessionService,
              private router: Router
  ) {
    this.registrationForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'email': [null, Validators.required],
      'role': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.roles = ['DEVELOPER'];
    this.defaultRole = this.roles[0];
    this.registrationForm.controls['role'].setValue(this.defaultRole);
  }

  onSubmit(form) {
    this.newUser = <User>form;

    this.http.post(this.registration_link, JSON.stringify(this.newUser),
      {headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})}).subscribe(req => {
      this.alertService.success('Account has been created');
    });

    this.authService.logIn(this.newUser.username, this.newUser.password).subscribe(JWT => {
      console.log(this.newUser);
      this.sessionService.setJWT(JWT);
      this.sessionService.setUsername(this.newUser.username);
      this.router.navigate(['/home']);
    });
  }
}
