import createTheme from 'spectacle/lib/themes/default';
import { colors } from './colors'
import { typography } from './typography';

require('normalize.css');

export * from './palette'
export * from './colors'
export * from './spacing'
export * from './typography'

export const theme = createTheme(
  {
    primary: colors.background,
    secondary: colors.text,
    tertiary: colors.lightBlue,
    quartenary: "#AE30FF"
  },
  {
    primary: typography.primary,
    secondary: typography.secondary,
  }
);