import { Injectable } from '@angular/core';
import { ISortOptions, SORT_DIRECTIONS, SORT_TYPES } from './../models/sort-options.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public sortOptions: ISortOptions = null;
  public filterString: string = '';
  public searchString: string = '';

  constructor() { }

  public sort(sortType: SORT_TYPES): void {
    if (this.sortOptions === null
      || this.sortOptions.sort !== sortType) {
      this.sortOptions = {
        sort: sortType,
        sortDirection: SORT_DIRECTIONS.UP
      };
    } else {
      switch (this.sortOptions.sortDirection) {
        case SORT_DIRECTIONS.UP: {
          this.sortOptions = {
            ...this.sortOptions,
            sortDirection: SORT_DIRECTIONS.DOWN
          };
          break;
        }
        case SORT_DIRECTIONS.DOWN: {
          this.sortOptions = {
            ...this.sortOptions,
            sortDirection: SORT_DIRECTIONS.UP
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
