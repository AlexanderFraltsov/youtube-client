import { IState } from 'src/app/redux/state.model';
import { selectAllCards } from './select-all-cards.selector';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

export const selectCardById: (id: string) => MemoizedSelector<
  IState,
  ISearchItem
> = (id: string) => createSelector(
  selectAllCards,
  (cards) => {
    try {
      return cards.find(card => card.id === id);
    } catch {
      return undefined;
    }
  }
);
