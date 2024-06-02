import { getShadowStyle } from "utils/StyleUtils";

import { borderRadiuses, boxShadows, cStyles } from "styles/theme";

export const styles = ({ palette }) => ({
    wrapper: {
        justifyContent: 'space-between',
        ...cStyles.flexRowCenter,
    },
    row16: {
        gap: 8,
        ...cStyles.flexRowCenter,
    },
    buttonBase: {
        padding: '0 !important',
        minWidth: '42px !important',
        maxHeight: '36px !important',
        minHeight: '36px !important',
        maxWidth: '42px !important',
        margin: '4px !important',
        borderRadius: '12px !important',
        '&>span': {
            fontSize: 18,
            fontWeight: 500
        }
    },
    menu: {
        padding: 8,
        borderRadius: borderRadiuses.layout,
        ...cStyles.flexColumn,
        ...getShadowStyle({ color: boxShadows.base }),
        '& span': {
            padding: 8,
            borderRadius: borderRadiuses.primary,
            cursor: 'pointer',
            '&:hover': {
                background: palette.primary[100],
                color: palette.primary.main,
            },
        }
    },
});