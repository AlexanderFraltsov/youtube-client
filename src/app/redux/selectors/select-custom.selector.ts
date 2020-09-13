import { IState, StateCustom } from '../state.model';

export const selectCustom: (state: IState) => StateCustom =
  (state: IState): StateCustom => state.custom;
