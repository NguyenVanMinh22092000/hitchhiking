import { navbarSizes } from '@constants/Configs';

export const styles = ({ palette, breakpoints }) => ({
    root: {
        '&>div:first-child': {
            backgroundColor: `rgba(0, 0, 0, 0.2)!important`,
        },
    },
    paper: {
        backgroundColor: palette.white.main,
        color: palette.primary.main,
        overflow: 'hidden!important',
        height: '100vh !important',
    },
    boxDraw: {
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    boxHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        padding: '0 24px',
        minHeight: navbarSizes.mobile,
        maxHeight: navbarSizes.mobile,
        boxSizing: 'border-box',
        [breakpoints.up('lg')]: {
            minHeight: navbarSizes.desktop,
            maxHeight: navbarSizes.desktop,
        },
    },
});