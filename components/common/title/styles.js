import { cStyles } from "@styles/theme";

export const styles = ({ palette, breakpoints }) => ({
    wrapper: {
        gap: 16,
        ...cStyles.flexColCenter,
        [breakpoints.up('lg')]: {
            gap: 24,
        },
    },
    label: {
        margin: 0,
        fontWeight: 800,
        fontSize: 20,
        color: palette.success.main,
        fontStyle: 'italic',
        textAlign: 'center',
        ...cStyles.flexCenter,
        ...['success', 'white'].reduce((rs, color) => {
            rs[`&.${color}`] = {
                color: palette[color].main,
            }
            return rs;
        }, {}),
        [breakpoints.up('lg')]: {
            fontSize: 35,
        },
    },
});