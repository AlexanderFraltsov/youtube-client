import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCardById } from '../../../redux/selectors';
import { IState } from '../../../redux/state.model';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { MAIN_ROUTE } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public card$: Observable<ISearchItem>;

  constructor(private router: Router, private store: Store<IState>) {
    this.card$ = this.store.select(selectCardById);
    this.card$.subscribe(card => {
      if (!card) {
        this.router.navigate([MAIN_ROUTE]);
      }
    });
  }
}
