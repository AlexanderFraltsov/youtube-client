import { ActionReducerMap } from '@ngrx/store';
import { Actions } from '../actions/actions.model';
import { customReducer } from './custom.reducer';
import { youtubeReducer } from './youtube.reducer';
import { IState } from '../state.model';

export const appReducer: ActionReducerMap<IState, Actions> = {
  custom: customReducer,
  youtube: youtubeReducer,
};
