import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isSearchOptionsOpen: boolean = false;

  constructor() {}

  public onSearchOptionsToggle(): void {
    this.isSearchOptionsOpen = !this.isSearchOptionsOpen;
  }
}
