import { actionYoutubeUpdateCards } from './actions';
import { ISearchItem } from '../../shared/models/search-item.model';
import { Action } from '@ngrx/store';

export class UpdateCards implements Action {
  public readonly type: string = actionYoutubeUpdateCards;
  constructor(public payload: ISearchItem[]) {}
}
