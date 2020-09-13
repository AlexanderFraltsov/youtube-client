import { Actions } from '../actions/actions.model';
import { youtubeReducer } from './youtube.reducer';
import { IState } from '../state.model';

export const appReducer: (state: IState, action: Actions) => IState =
  (state: IState | undefined, action: Actions) => {
    return {
      custom: null,
      youtube: youtubeReducer(state.youtube, action)
    };
  };
