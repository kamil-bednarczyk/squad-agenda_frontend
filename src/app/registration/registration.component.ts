import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
@Injectable()
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  private newUser: User = new User();
  roles: string[];

  constructor(private fb: FormBuilder) {
    this.registrationForm = fb.group({
      'username': [],
      'password': [],
      'email': [],
      'role': []
    });
  }

  ngOnInit() {
    this.roles = ['USER', 'DEVELOPER'];
    this.registrationForm.valueChanges.subscribe( form => console.log(form));
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
   // console.log(form)
    //this.newUser.username = form.controls['username'].value;
   // console.log(this.newUser.username);
  }
}
