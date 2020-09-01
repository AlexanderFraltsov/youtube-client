import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERNAME_PLACEHOLDER } from 'src/app/constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogined: boolean = false;
  public userName: string = USERNAME_PLACEHOLDER;

  constructor(public router: Router) { }

  public onLogin(): void {
    this.isLogined = true;
    this.userName = 'Mike';
    this.router.navigate(['main']);
  }

  public logout(): void {
    this.userName = USERNAME_PLACEHOLDER;
    this.isLogined = false;
    this.router.navigate(['']);
  }
}
