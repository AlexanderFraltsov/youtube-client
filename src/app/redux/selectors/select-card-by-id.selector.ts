import { getRouterState } from './get-router-state.selector';
import { selectYoutubeCards } from './select-youtube.cards.selector';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ISearchItem } from 'src/app/shared/models/search-item.model';


export const selectCardById: MemoizedSelector<
  unknown,
  ISearchItem,
  unknown> = createSelector(
  selectYoutubeCards,
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
