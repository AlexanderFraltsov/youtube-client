import { QUERY_MIN_LENGTH } from 'src/app/constants/common-constants';
import { CommonService } from './../../../core/services/common.service';
import { ISearchItem } from './../../models/search-item.model';
import { Component, OnInit } from '@angular/core';
import { YoutubeResponseService } from '../../services/youtube-response.service';
import { YoutubeService } from '../../services/youtube.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public cards: ISearchItem[] = null;
  constructor(
    public youtubeResponseService: YoutubeResponseService,
    public youtubeService: YoutubeService,
    public commonService: CommonService ) { }

  public ngOnInit(): void {
    this.youtubeResponseService.searchString.subscribe({
        next: (query) => {
          if (query.length >= QUERY_MIN_LENGTH) {
            return this.getSearchItems(query);
          }
        }
    });
  }

  public getSearchItems(query: string): void {
    this.youtubeResponseService
      .getSearchItems(query)
      .pipe(delay(500))
      .subscribe(data => this.cards = data);
  }
}
