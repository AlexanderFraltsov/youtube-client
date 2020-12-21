import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { QUERY_MIN_LENGTH, SEARCH_DELAY_MS } from '../../../constants/common-constants';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubeResponseService } from '../../services/youtube-response.service';
import { IState } from '../../../redux/state.model';
import { UpdateCards } from '../../../redux/actions/youtube.actions';
import { selectAllCards } from '../../../redux/selectors/select-all-cards.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public cards$: Observable<ISearchItem[]>;
  public subscriptions: Subscription[] = [];

  constructor(
    public youtubeResponseService: YoutubeResponseService,
    public youtubeService: YoutubeService,
    private store: Store<IState> ) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.youtubeResponseService.searchString.subscribe({
        next: (query) => {
          if (query.length >= QUERY_MIN_LENGTH) {
            return this.getSearchItems(query);
          }
        }
    }));

    this.cards$ = this.store.select( selectAllCards );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public getSearchItems(query: string): void {
    this.subscriptions.push(
      this.youtubeResponseService
        .getList(query)
        .pipe(delay(SEARCH_DELAY_MS))
        .subscribe(data => this.store.dispatch(new UpdateCards((data))))
    );
  }
}
