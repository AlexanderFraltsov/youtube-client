import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  constructor(public loginService: LoginService) { }

  public ngOnInit(): void {
    this.authForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(LOGIN_MIN_LENGTH)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(PASSWORD_MIN_LENGTH)
      ])
    });
  }

  public submit(): void {
    this.loginService.login(this.authForm.value);
  }
}
