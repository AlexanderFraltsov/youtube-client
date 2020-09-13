import { Actions } from '../actions/actions.model';
import { customReducer } from './custom.reducer';
import { youtubeReducer } from './youtube.reducer';
import { IState } from '../state.model';

export const appReducer: (state: IState, action: Actions) => IState =
  (state: IState | undefined, action: Actions) => {
    return {
      custom: customReducer(state.custom, action),
      youtube: youtubeReducer(state.youtube, action)
    };
  };
