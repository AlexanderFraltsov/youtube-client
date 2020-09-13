import { selectAllCards } from './select-all-cards.selector';
import { getRouterState } from './get-router-state.selector';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

export const selectCardById: MemoizedSelector<
  unknown,
  ISearchItem,
  unknown> = createSelector(
  selectAllCards,
  getRouterState,
  (cards, router) => {
    try {
      const { id } = router.state.root.firstChild.firstChild.params;
      return cards.find(card => card.id === id);
    } catch {
      return undefined;
    }
  }
);
