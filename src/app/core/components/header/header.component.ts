import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isAuth: boolean;
  constructor(public loginService: LoginService) {
    this.loginService.isLogin.subscribe({
      next: (res) => this.isAuth = res
    });
  }
}
