import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTE } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  constructor(public router: Router) {}

  public goToMain(): void {
    this.router.navigate([MAIN_ROUTE]);
  }
}
