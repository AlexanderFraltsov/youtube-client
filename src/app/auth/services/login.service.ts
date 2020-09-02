import { IUser } from './../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERNAME_PLACEHOLDER, MAIN_ROUTE } from 'src/app/constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router: Router) { }

  public login(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate([MAIN_ROUTE]);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

  public getLogin(): string {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user.login;
    }
    return USERNAME_PLACEHOLDER;
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
}
