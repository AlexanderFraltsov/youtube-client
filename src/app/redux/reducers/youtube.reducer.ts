import { actionYoutubeUpdateCards } from '../actions/actions';
import { Actions } from '../actions/actions.model';
import { StateYoutube } from '../state.model';

const youtubeInitialState: StateYoutube = {
  cards: []
};

export const youtubeReducer: (
  state: StateYoutube,
  action: Actions
) => StateYoutube = (
  state: StateYoutube = youtubeInitialState,
  action: Actions) => {
  switch (action.type) {
    case actionYoutubeUpdateCards: {
      return {
        ...state,
        cards: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
