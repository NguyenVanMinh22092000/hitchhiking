import { borderRadiuses, cStyles, commonClasses } from '@styles/theme';

import { navbarSizes } from '@constants/Configs';
import { getShadowStyle, getTransitionStyle } from '@utils/StyleUtils';

const bgUrl = `url(${require('@assets/images/photo/computer_02.png').default})`;

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        background: palette.white[100],
        // padding: `${navbarSizes.desktop + 148}px 0 112px`,
        padding: `${navbarSizes.desktop + 92}px 0 0`,
        height: 668,
        overflow: 'hidden',
        position: 'relative',
    },
    container: {
        position: 'relative',
        zIndex: 2,
        ...cStyles.flexColCenter,
    },
    backgroundWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        backgroundPosition: 'center !important',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        right: 0,
        ...cStyles.flexColCenter,
        [breakpoints.down('400')]: {
            display: 'none',
        },
    },
    background: {
        width: '50%',
        width: 1024,
        position: 'relative',
        top: 250,
        height: '50%',
        opacity: '0.2',
        [breakpoints.down('1440')]: {
            top: '300px',
        },
        [breakpoints.down('lg')]: {
            width: '80%',
            height: '80%',
        },
        [breakpoints.down('960')]: {
            width: '90%',
            height: '90%',
            top: 400,
        },
        [breakpoints.down('640')]: {
            position: 'relative',
        },
        [breakpoints.down('500')]: {
            position: 'relative',
        },
    },
    content: {
        maxWidth: '80%',
        minWidth: '80%',
        ...cStyles.flexColCenter,
        [breakpoints.down('md')]: {
            maxWidth: '80%',
            minWidth: '80%',
        },
    },
    desc: {
        marginTop: 32,
        maxWidth: '80%',
        minWidth: '80%',
        [breakpoints.down('md')]: {
            maxWidth: '90%',
            minWidth: '90%',
        },
    },
    button: {
        marginTop: `52px !important`,
    },
    btnFee: {
        cursor: 'pointer',
        borderRadius: 12,
        marginTop: 64,
        background: palette.success.main,
        padding: '16px 24px',
        ...getTransitionStyle('all .3s'),
        '&>span': {
            fontSize: 24,
            fontWeight: 500,
            color: palette.white.main,
        },
        '&:hover': {
            ...getShadowStyle({ color: palette.success[640] })
        },

    }
});