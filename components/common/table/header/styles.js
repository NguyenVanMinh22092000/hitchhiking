import { borderRadiuses, colors, fontWeights, cStyles, borderLines, widths } from "@styles/theme";

export const styles = ({ palette, breakpoints }) => ({
  headerContainer: {
    minWidth: 880,
    overflow: 'auto',
  },
  header: {
    width: widths.oneHundred,
    height: 60,
    gap: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottom: borderLines.main,
    background: colors.green,
    textAlign: 'center',
    color: colors.white,
    fontWeight: fontWeights.strong,
    borderRadius: `${borderRadiuses.main}px ${borderRadiuses.main}px  0 0`,
    ...cStyles.flexRowCenter, 
    justifyContent: "flex-start",
    [breakpoints.up("md")]: {
      paddingLeft: 23,
      paddingRight: 23,
    },
  },
});
