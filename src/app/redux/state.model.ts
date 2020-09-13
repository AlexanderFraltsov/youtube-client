import { ISearchItem } from '../shared/models/search-item.model';

export interface StateCustom {
  cards: null;
}

export interface StateYoutube {
  cards: ISearchItem[];
}

export interface IState {
  custom: StateCustom;
  youtube: StateYoutube;
}
