import { ICustomCard } from '../../shared/models/custom-card.model';
import { Action } from '@ngrx/store';
import { actionCustomAddCard } from './actions';

export class AddCard implements Action {
  public readonly type: string = actionCustomAddCard;
  constructor(public payload: ICustomCard) {}
}
