import { borderRadiuses, cStyles, colors, fontWeights, widths } from "@styles/theme";

export const styles = (theme) => ({
    pagination : {
        width: widths.oneHundred,
        height: 25,
        gap: 10,
        color: colors.black,
        ...cStyles.flexCenter,
    },
    button: {
        width: 25,
        height: 25,
        cursor: 'pointer',
        color: colors.white,
        background: colors.green,
        borderRadius: borderRadiuses.main,
        flexWrap: 'nowrap',
        textAlign: 'center',
    },
    number: {
        cursor: 'pointer',
    },
    active:{
        color: colors.green,
        fontWeight: fontWeights.strong,
    }
});