import { Actions } from './../actions/actions.model';
import { StateYoutube } from '../state.model';

const youtubeInitialState: StateYoutube = {
  cards: null
};

export const youtubeReducer: (
  state: StateYoutube,
  action: Actions
) => StateYoutube = (
  state: StateYoutube = youtubeInitialState,
  action: Actions) => {
  switch (action.type) {
    case '[Youtube Module] Update cards': {
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
