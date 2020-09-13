import { ISearchItem } from '../../shared/models/search-item.model';
import { Action } from '@ngrx/store';

export class UpdateCards implements Action {
  public readonly type: string = '[Youtube Module] Update cards';
  constructor(public payload: ISearchItem[]) {}
}
