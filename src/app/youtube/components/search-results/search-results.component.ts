import { selectYoutubeCards } from './../../../redux/selectors/select-youtube.cards.selector';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CommonService } from '../../../core/services/common.service';
import { YoutubeResponseService } from '../../services/youtube-response.service';
import { YoutubeService } from '../../services/youtube.service';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { IState } from '../../../redux/state.model';
import { UpdateCards } from '../../../redux/actions/youtube.actions';
import { QUERY_MIN_LENGTH } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public cards$: Observable<ISearchItem[]>;

  constructor(
    public youtubeResponseService: YoutubeResponseService,
    public youtubeService: YoutubeService,
    public commonService: CommonService,
    private store: Store<IState> ) { }

  public ngOnInit(): void {
    this.youtubeResponseService.searchString.subscribe({
        next: (query) => {
          if (query.length >= QUERY_MIN_LENGTH) {
            return this.getSearchItems(query);
          }
        }
    });
    this.cards$ = this.store.select( selectYoutubeCards );
  }

  public getSearchItems(query: string): void {
    this.youtubeResponseService
      .getSearchItems(query)
      .pipe(delay(500))
      .subscribe(data => {
        this.store.dispatch(new UpdateCards((data)));
      });
  }
}
