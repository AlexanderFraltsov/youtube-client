import { Injectable } from '@angular/core';

import { IVideoResponse } from './../models/video-response.model';
import { ISearchItem } from './../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SEARCH_RESULTS, YOUTUBE_SEARCH_PATH, YOUTUBE_VIDEOS_PATH } from '../../constants/common-constants';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { mergeMap, catchError, map  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class YoutubeResponseService {
  public items: ISearchItem[] = [];
  public searchString: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public getSearchItems(query: string): Observable<ISearchItem[]> {
    return this.getList(query);
  }

  public getList(searchText: string): Observable<ISearchItem[]> {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', `${SEARCH_RESULTS}`)
      .set('q', searchText || 'grumpy+cat');
    return this.http
      .get<IVideoResponse>(`${YOUTUBE_SEARCH_PATH}`, { params })
      .pipe(
        mergeMap((res: IVideoResponse) => {
          const listIds: string = res.items.map(item => item.id.videoId).join(',');
          const videoParams: HttpParams = new HttpParams()
            .set('id', listIds)
            .set('part', 'snippet,statistics');
          return this.http
            .get<ISearchResponse>(`${YOUTUBE_VIDEOS_PATH}`, {params: videoParams});
        }),
        map((res: ISearchResponse) => {
          this.items = res.items;
          return res.items;
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err.status, err.message);
          return of(this.items);
        })
      );
  }

  public getItemById(id: string): ISearchItem {
    return this.items.find(item => item.id === id);
  }
}
