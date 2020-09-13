import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { selectCardById } from '../../../redux/selectors';
import { IState } from '../../../redux/state.model';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { MAIN_ROUTE } from '../../../constants/common-constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy {
  public card$: Observable<ISearchItem>;
  public subscription: Subscription;

  constructor(private router: Router, private store: Store<IState>) {
    this.card$ = this.store.select(selectCardById);
    this.subscription = this.card$.subscribe(card => {
      if (!card) {
        this.router.navigate([MAIN_ROUTE]);
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
