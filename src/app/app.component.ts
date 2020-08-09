import { ISortOptions } from './models/sort-options.model';
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
  public filter: string = '';
  public sortOptions: ISortOptions = null;

  public onToggleSettings(opened: boolean): void {
    this.searchSettingsOpened = opened;
  }

  public onSubmit(isSubmit: boolean): void {
    this.isSearchSubmit = isSubmit;
  }

  public onFilterChange(filter: string): void {
    this.filter = filter;
  }
  public onSortChange(sortOptions: ISortOptions): void {
    this.sortOptions = sortOptions;
  }
}
