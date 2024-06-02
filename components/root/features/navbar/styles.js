import { getShadowStyle, getTransitionStyle } from '@utils/StyleUtils';

import { borderRadiuses, cStyles, commonClasses, flexRowCommon } from '@styles/theme';

import { layoutSizes, navbarSizes } from '@constants/Configs';

export const styles = ({ palette, breakpoints }) => ({
    ...flexRowCommon,
    ...commonClasses({ breakpoints }),
    wrapper: {
        position: 'sticky',
        zIndex: 999,
        boxSizing: 'border-box',
        top: 0,
        background: palette.white.main,
        minHeight: navbarSizes.mobile,
        maxHeight: navbarSizes.mobile,
        ...cStyles.flexColumn,
        ...getTransitionStyle('0.2s linear'),
        ...getShadowStyle({ color: palette.primary[100] }),
        [breakpoints.up('lg')]: {
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: navbarSizes.desktop,
            maxHeight: navbarSizes.desktop,
        },
    },
    container: {
        height: '100%',
        minHeight: navbarSizes.mobile,
        maxHeight: navbarSizes.mobile,
        ...cStyles.flexRowCenter,
        [breakpoints.up('lg')]: {
            minHeight: navbarSizes.desktop,
            maxHeight: navbarSizes.desktop,
        },
    },
    mobileMenu: {
        width: '100%',
        justifyContent: 'space-between',
        ...cStyles.flexRowCenter,
    },
    drawer: {
        ...cStyles.flexColumn,
    },
    menuItem: {
        fontSize: 16,
        fontWeight: 600,
        padding: 16,
        justifyContent: 'flex-end',
        ...cStyles.flexRowCenter,
        '&>span': {
            textAlign: 'right',
            cursor: 'pointer',
            '&:hover': {
                color: palette.success.main,
            },
        },
    },
    menuBtn: {
        minHeight: 48,
        maxHeight: 48,
        minWidth: 48,
        maxWidth: 48,
        borderRadiuses: 12,
        cursor: 'pointer',
        ...cStyles.flexCenter,
    },
});