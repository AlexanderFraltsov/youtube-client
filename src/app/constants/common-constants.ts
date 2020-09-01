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
// tslint:disable-next-line: no-inferrable-types
const USERNAME_PLACEHOLDER: string = 'Who are you?';

export {
  MS_IN_DAY,
  TIME_PERIODS,
  USERNAME_PLACEHOLDER
};
