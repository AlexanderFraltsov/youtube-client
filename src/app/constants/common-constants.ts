const MS_IN_DAY: number = 1000 * 3600 * 24;
enum COLORS {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue'
}

const TIME_PERIODS: {
  [key: string]: { DAYS: number, COLOR: COLORS }
} = {
  SHORT: { DAYS: 7, COLOR: COLORS.BLUE},
  MEDIUM: { DAYS: 30, COLOR: COLORS.GREEN},
  LONG: { DAYS: 6 * 30, COLOR: COLORS.RED},
};
// tslint:disable: no-inferrable-types
const USERNAME_PLACEHOLDER: string = 'Who are you?';
const LOGIN_MIN_LENGTH: number = 3;
const PASSWORD_MIN_LENGTH: number = 6;

const MAIN_ROUTE: string = 'main';
const AUTH_ROUTE: string = 'login';
const ADMIN_ROUTE: string = 'admin';
const ERROR_ROUTE: string = '404';

const QUERY_MIN_LENGTH: number = 3;
const SEARCH_STRING_FORM_CONTROL: string = 'searchString';
const SEARCH_RESULTS: number = 15;
const SEARCH_DELAY_MS: number = 500;
const SEARCH_DEBOUNCE_TIME_MS: number = 1000;
const YOUTUBE_SEARCH_PATH: string = 'search';
const YOUTUBE_VIDEOS_PATH: string = 'videos';

export {
  MS_IN_DAY,
  SEARCH_DELAY_MS,
  SEARCH_DEBOUNCE_TIME_MS,
  SEARCH_STRING_FORM_CONTROL,
  TIME_PERIODS,
  USERNAME_PLACEHOLDER,
  LOGIN_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  MAIN_ROUTE,
  AUTH_ROUTE,
  ERROR_ROUTE,
  ADMIN_ROUTE,
  YOUTUBE_SEARCH_PATH,
  YOUTUBE_VIDEOS_PATH,
  SEARCH_RESULTS,
  QUERY_MIN_LENGTH
};
