import { MAIN_ROUTE } from 'src/app/constants/common-constants';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, of } from 'rxjs';

import { selectCardById } from '../../../redux/selectors';
import { IState } from '../../../redux/state.model';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public card$: Observable<ISearchItem>;
  public id: string;
  public idSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IState>) {}

  public ngOnInit(): void {
    this.idSubscription = this.route.params.subscribe( params => {
      this.id = params.id;
    });
    this.card$ = this.store.select(selectCardById(this.id)).pipe(map((card) => {
      if (!card) {
        this.router.navigate([MAIN_ROUTE]);
      }
      return card;
    }));
  }

  public ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }
}
