const MS_IN_DAY: number = 1000 * 3600 * 24;
const COLORS: {[key: string]: string} = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue'
};

const TIME_PERIODS: {
  [key: string]: { DAYS: number, COLOR: string }
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
const ERROR_ROUTE: string = '404';

export {
  MS_IN_DAY,
  TIME_PERIODS,
  USERNAME_PLACEHOLDER,
  LOGIN_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  MAIN_ROUTE,
  AUTH_ROUTE,
  ERROR_ROUTE
};
