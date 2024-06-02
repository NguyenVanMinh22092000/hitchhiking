import { getShadowStyle } from '@utils/StyleUtils';

import { borderRadiuses, cStyles } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    wrapper: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontSize: 15,
        position: 'relative',
        padding: '8px 2px 0 8px',
        color: palette.text.primary,
    },
    container: {
        flex: 1,
        maxWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        position: 'relative',
        borderRadius: `${borderRadiuses.layout}px ${borderRadiuses.layout}px 0 0`,
        flexDirection: 'column',
        '&.noScroll': {
            overflow: 'hidden !important',
        },
    },
    sessionBtns: {
        position: 'fixed !important',
        bottom: 20, // 16
        display: 'flex',
        gap: 16,
        alignItems: 'flex-end',
        zIndex: 998,
        right: 50, // 16
        width: 54,
        padding: '10px 0',
        borderRadius: 100,
        cursor: 'pointer',
        background: palette.error.main,
        color: palette.white.main,
        fontSize: 13,
        fontWeight: 700,
        ...cStyles.flexColCenter,
        ...getShadowStyle({ size: '0px 4px 4px', color: palette.black[250] }),
        '&.hide': {
            display: 'none !important',
        },
        // [breakpoints.down('lg')]: {
        //     display: 'none !important',
        // },
    },
    scroll2TopBtn: {
        background: palette.background.primary + '!important',
        ...getShadowStyle({ color: palette.primary[160] + '!important' }),
        '&:hover': {
            ...getShadowStyle({ color: palette.primary[320] + '!important' }),
        },
    },
    loading: {
        height: '100vh',
        width: '100vw',
        ...cStyles.flexCenter,
    },
    loadingRootContainer: {
        background: palette.white.main,
        height: 'calc(100vh - 16px)',
        borderRadius: 8,
        marginTop: 6,
        width: 'calc(100vw - 16px)',
        overflow: 'hidden',
        ...cStyles.flexCenter,
    },
});