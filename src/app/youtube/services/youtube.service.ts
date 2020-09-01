import { ICardRender } from './../models/card-render.model';
import { ISortOptions } from './../models/sort-options.model';
import { ISearchItem } from './../models/search-item.model';
import { Injectable } from '@angular/core';
import { mockResponse } from './mock.response';
import { ISearchResponse } from '../models/search-response.model';
import { MS_IN_DAY, TIME_PERIODS } from 'src/app/constants/common-constants';

interface ICardBigRender {

}
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

  public itemToCard(item: ISearchItem): ICardRender {
    const { id } = item;
    const { publishedAt, description, title, thumbnails } = item.snippet;
    const { commentCount, dislikeCount, likeCount, viewCount } = item.statistics;
    const image: string = thumbnails.medium.url;
    const imageBig: string = thumbnails.maxres.url;
    let borderColor: string | null = null;
    const daysDiff: number = (Date.now() - Date.parse(publishedAt)) / MS_IN_DAY;

    const { SHORT, MEDIUM, LONG } = TIME_PERIODS;
    if (daysDiff < MEDIUM.DAYS) { borderColor = MEDIUM.COLOR; }
    if (daysDiff < SHORT.DAYS) { borderColor = SHORT.COLOR; }
    if (daysDiff > LONG.DAYS) { borderColor = LONG.COLOR; }

    return {
      publishedAt,
      description,
      title,
      image,
      imageBig,
      commentCount,
      dislikeCount,
      likeCount,
      viewCount,
      borderColor,
      id
    };
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
