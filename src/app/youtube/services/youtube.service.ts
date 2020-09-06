import { Injectable } from '@angular/core';
import { ISortOptions } from './../models/sort-options.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public sortOptions: ISortOptions = null;
  public filterString: string = '';
  public searchString: string = '';

  constructor() { }

  public sort(sortType: 'date' | 'views'): void {
    if (this.sortOptions === null
      || this.sortOptions.sort !== sortType) {
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
          this.sortOptions = {
            ...this.sortOptions,
            sortDirection: 'up'
          };
          break;
        }
        default: break;
      }
    }
  }

  public onChangeFilter(e: Event): void {
    this.filterString = (<HTMLInputElement>e.target).value;
  }
}
