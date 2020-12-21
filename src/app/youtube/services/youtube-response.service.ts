import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { mergeMap, catchError, map  } from 'rxjs/operators';

import { ISearchResponse } from '../../shared/models/search-response.model';
import { IVideoResponse } from '../../shared/models/video-response.model';
import { ISearchItem } from '../../shared/models/search-item.model';
import {
  SEARCH_RESULTS,
  YOUTUBE_SEARCH_PATH,
  YOUTUBE_VIDEOS_PATH
} from '../../constants/common-constants';

@Injectable({providedIn: 'root'})
export class YoutubeResponseService {
  public items: ISearchItem[] = [];
  public searchString: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

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
