import { ICardRender } from '../../shared/models/card-render.model';
import { createAction, props, ActionCreator } from '@ngrx/store';

export const updateCards: ActionCreator = createAction(
  '[Youtube Module] Update cards',
  props<{cards: ICardRender[]}>()
);
