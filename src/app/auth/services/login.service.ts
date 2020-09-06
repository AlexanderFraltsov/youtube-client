import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/user.model';
import { USERNAME_PLACEHOLDER, MAIN_ROUTE } from 'src/app/constants/common-constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public router: Router) { }

  public login(user: IUser): void {
    this.isLogin.next(true);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate([MAIN_ROUTE]);
  }

  public logout(): void {
    this.isLogin.next(false);
    localStorage.clear();
    this.router.navigate(['']);
  }

  public getLogin(): string {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.isLogin.next(true);
      return user.login;
    }
    this.isLogin.next(false);
    return USERNAME_PLACEHOLDER;
  }
}
