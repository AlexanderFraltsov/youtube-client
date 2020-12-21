import { IState, StateYoutube } from '../state.model';

export const selectYoutube: (state: IState) => StateYoutube =
  (state: IState): StateYoutube => state.youtube;
