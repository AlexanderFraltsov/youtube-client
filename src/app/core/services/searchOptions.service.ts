import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchOptionsService {

  public isSearchOptionsOpen: boolean = false;

  constructor() {}

  public onSearchOptionsToggle(): void {
    this.isSearchOptionsOpen = !this.isSearchOptionsOpen;
  }
}
