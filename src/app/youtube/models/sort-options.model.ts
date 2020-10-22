export enum SORT_DIRECTIONS {
  UP = 'up',
  DOWN = 'down'
}

export enum SORT_TYPES {
  DATE = 'date',
  VIEWS = 'views'
}

export interface ISortOptions {
  sort: SORT_TYPES | null;
  sortDirection: SORT_DIRECTIONS;
}
