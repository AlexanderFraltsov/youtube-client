import { Injectable } from '@angular/core';
import {
  Router,
  CanLoad,
  UrlSegment,
  Route
} from '@angular/router';

import { AUTH_ROUTE } from 'src/app/constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router
  ) {}

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate([AUTH_ROUTE]);
      return false;
    }
  }
}
