import { ICustomCard } from './../../shared/models/custom-card.model';
import { actionCustomAddCard } from './../actions/actions';
import { Actions } from '../actions/actions.model';
import { StateCustom } from '../state.model';

const customInitialState: StateCustom = {
  cards: []
};

export const customReducer: (
  state: StateCustom,
  action: Actions
) => StateCustom = (
  state: StateCustom = customInitialState,
  action: Actions) => {
  switch (action.type) {
    case actionCustomAddCard: {
      const newCard: ICustomCard = action.payload;
      const newCards: ICustomCard[] = [ ...state.cards ];
      newCards.push(newCard);
      if (newCards.length > 5) {
        newCards.shift();
      }
      return {
        ...state,
        cards: newCards,
      };
    }
    default: {
      return state;
    }
  }
};
