import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const getRouterState: MemoizedSelector<unknown, RouterReducerState> =
  createFeatureSelector('router');
