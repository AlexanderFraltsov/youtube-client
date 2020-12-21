import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  public isAuth: boolean;
  public subscribe: Subscription;

  constructor(public loginService: LoginService) {
    this.subscribe = this.loginService.isLogin$.subscribe({
      next: (res) => this.isAuth = res
    });
  }

  public ngOnDestroy (): void {
    this.subscribe.unsubscribe();
  }
}
