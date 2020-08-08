import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title: string = 'youtube-client';

  public isSearchSubmit: boolean;
  public searchSettingsOpened: boolean;

  public onToggleSettings(opened: boolean): void {
    this.searchSettingsOpened = opened;
  }
  public onSubmit(isSubmit: boolean): void {
    this.isSearchSubmit = isSubmit;
  }
}
