import { IState } from './../state.model';
import { selectYoutube } from './select-youtube.selector';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateYoutube } from '../state.model';
import { ISearchItem } from '../../shared/models/search-item.model';

export const selectYoutubeCards: MemoizedSelector<IState, ISearchItem[]> =
  createSelector(
    selectYoutube,
    (state: StateYoutube) => state.cards
  );
