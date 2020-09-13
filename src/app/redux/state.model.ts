import { ICustomCard } from '../shared/models/custom-card.model';
import { ISearchItem } from '../shared/models/search-item.model';

export interface StateCustom {
  cards: ICustomCard[];
}

export interface StateYoutube {
  cards: ISearchItem[];
}

export interface IState {
  custom: StateCustom;
  youtube: StateYoutube;
}
