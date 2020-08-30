import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isSearchSubmit: boolean = false;
  public isSearchOptionsOpen: boolean = false;

  public onSubmit(data: string): void {
    this.isSearchSubmit = true;
    console.log('submit: ', data);
  }

  public onSearchOptionsToggle(): void {
    this.isSearchOptionsOpen = !this.isSearchOptionsOpen;
  }
}
