import { ISortOptions } from './../../models/sort-options.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent {
  @Output() private filterChange: EventEmitter<string> = new EventEmitter();
  @Output() private sortChange: EventEmitter<ISortOptions> = new EventEmitter();

  public sortOptions: ISortOptions = null;

  public onChange(e: Event): void {
    const filter: string = (<HTMLInputElement>e.target).value;
    this.filterChange.emit(filter);
  }

  public sort(sortType: 'date' | 'views'): void {
    if (this.sortOptions === null || this.sortOptions.sort !== sortType) {
      this.sortOptions = {
        sort: sortType,
        sortDirection: 'up'
      };
    } else {
      switch (this.sortOptions.sortDirection) {
        case 'up': {
          this.sortOptions = {
            ...this.sortOptions,
            sortDirection: 'down'
          };
          break;
        }
        case 'down': {
          this.sortOptions = null;
          break;
        }
        default: break;
      }
    }
    this.sortChange.emit(this.sortOptions);
  }
}
