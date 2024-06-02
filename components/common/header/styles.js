import {
  borderRadiuses,
  colors,
  fontFamilys,
  fontWeights,
  widths,
} from '@styles/theme';

export const styles = (theme) => ({
  root: {
    height: 54,
    padding: '17px 20px',
    background: colors.tbColor,
    borderRadius: borderRadiuses.main,
    width: widths.oneHundred,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('500')]: {
      width: 310,
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  input: {
    fontFamily: fontFamilys.primary,
    fontSize: 16,
    fontWeight: fontWeights.bold,
  },
});
