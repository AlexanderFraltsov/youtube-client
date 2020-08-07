import { ISearchItem } from './../models/search-item.model';
import { Injectable } from '@angular/core';
import { mockResponse } from './mock.response';
import { ISearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public response: ISearchResponse = mockResponse;

  constructor() { }
  public getSearchItems(): ISearchItem[] {
    return this.response.items;
  }
}
