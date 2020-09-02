import { Injectable } from '@angular/core';

import { ISortOptions } from './../models/sort-options.model';
import { ISearchItem } from './../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import { mockResponse } from './mock.response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public response: ISearchResponse = mockResponse;
  public sortOptions: ISortOptions = null;
  public filterString: string = '';

  constructor() { }
  public getSearchItems(): ISearchItem[] {
    return this.response.items;
  }

  public getItemById(id: string): ISearchItem {
    return this.response.items.find(item => item.id === id);
  }

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
          this.sortOptions = null;
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
