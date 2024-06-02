import { cStyles, fontWeights, colors, positions, widths, borderRadiuses } from '@styles/theme';

export const styles = (theme) => ({
  content: {
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 880,
    overflow: 'auto',
    border: `solid 1px ${colors.tbColor}`,
    ...cStyles.flexColumn,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 23,
    },
  },
  body: {
    position: positions.relative,
    '&::after': {
      content: '""',
      position: positions.absolute,
      bottom: 1,
      left: 0,
      height: 1,
      width: widths.oneHundred,
      background: colors.lineColor,
    },
  },
  lastBody: {},
  details: {
    width: widths.oneHundred,
    minHeight: '50px',
    gap: 30,
    textAlign: 'center',
    ...cStyles.flexCenter,
    justifyContent: 'flex-start',
    position: positions.relative,
    fontWeight: fontWeights.bold,
  },
  loading: {
    height: 501.6,
  },
  showImage: {
    cursor: 'pointer',
    fontWeight: fontWeights.strong,
    fontSize: 14,
    color: colors.green,
    userSelect: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '$:active': {
      textDecoration: 'underline',
    }
  }

});
