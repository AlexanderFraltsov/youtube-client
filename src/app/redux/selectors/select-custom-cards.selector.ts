import { selectCustom } from './select-custom.selector';
import { MemoizedSelector, createSelector } from '@ngrx/store';
import { StateCustom } from '../state.model';
import { IState } from '../state.model';
import { ICustomCard } from '../../shared/models/custom-card.model';

export const selectCustomCards: MemoizedSelector<IState, ICustomCard[]> =
createSelector(
  selectCustom,
  (state: StateCustom) => state.cards
);
