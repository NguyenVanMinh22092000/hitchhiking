import { cStyles } from '@styles/theme';

import { navbarSizes } from '@constants/Configs';

export const styles = ({ palette, breakpoints }) => ({
    wrapper: {
        width: '100%',
        flex: 1,
        position: 'relative',
        ...cStyles.flexColumn,
        ...['primary', 'white'].reduce((rs, color) => {
            rs[`&.${color}`] = {
                background: palette[color].main,
            };
            return rs;
        }, {}),
    },
    container: {
        flex: 1,
        minWidth: '100%',
        maxWidth: '100%',
        width: '100%',
        height: 'fit-content',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        marginTop: 0,
        [breakpoints.down('md')]: {
            '&.noBg': {
                marginTop: -navbarSizes.mobile,
            },
        },
        '&.noBg': {
            marginTop: -navbarSizes.desktop,
        },
    },
    mainSection: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.primary.main,
    },
    backgroundWrapper: {
        position: 'absolute',
        top: 0,
        width: 10000,
        height: 10000,
        overflow: 'hidden',
        ...cStyles.flexColCenter,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        [breakpoints.down('1440')]: {
            display: 'none',
        },
        '& .rotate': {
            position: 'absolute',
            top: 0,
            left: 0,
            rotate: '-57.7deg',
            height: 4000,
            width: 4000,
            '&.secondary': {
                top: '-2000px',
                rotate: '58deg',
                width: 7000,
                height: 8000,

            },
        },
        '& .line': {
            position: 'absolute',
            top: 0,
            left: 0,
            height: 1,
            width: '100%',
            background: palette.info.main,
            opacity: 0.3,
            '&.green': {
                background: palette.success.main,
            },
        },
    },
    lineGreen: {
        position: 'absolute',
        top: 0,
        left: -1000,
        right: 0,
        bottom: 0,
    },
    contentFooter: {
        gap: 8,
        display: 'flex',
        flexDirection: 'column',
        '& .slider-post': {
            marginTop: 8
        }
    }
});