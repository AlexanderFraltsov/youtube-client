import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isLogin: Subject<boolean> = new Subject();
  public isSearchOptionsOpen: boolean = false;

  constructor() {}

  public onSearchOptionsToggle(): void {
    this.isSearchOptionsOpen = !this.isSearchOptionsOpen;
  }
}
