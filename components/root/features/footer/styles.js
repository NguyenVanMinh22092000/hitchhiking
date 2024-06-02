import { borderRadiuses, cStyles, commonClasses, flexColumnCommon, flexRowCommon } from '@styles/theme';

import { layoutSizes } from '@constants/Configs';

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        width: '100%',
        boxSizing: 'border-box',
        color: palette.background.primary,
        background: palette.primary.main,
        ...cStyles.flexColumn,
    },
    container: {
        padding: '36px 0 40px',
        gap: 24,
        ...cStyles.flexColumn,
        [breakpoints.up('lg')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '60px 0',
        },
    },
    left: {
        gap: 20,
        fontSize: 14 + '!important',
        ...cStyles.flexColumn,
        '& .description': {
            fontWeight: 700,
        },
        [breakpoints.up('lg')]: {
            gap: 35,
            '& .description': {
                fontWeight: 400,
            },
        },
    },
    info: {
        gap: 20,
        ...cStyles.flexColumn,
    },
    detailInfo: {
        gap: 20,
        ...cStyles.flexColumn,
    },
    infoItem: {
        gap: 10,
        ...cStyles.flexRowCenter,
        '& b': {
            fontWeight: 700,
            color: '#32FA6E',
        },
    },
    right: {
        justifyContent: 'space-between',
        gap: 10,
        ...cStyles.flexRowCenter,
        [breakpoints.up('lg')]: {
            flexDirection: 'column-reverse',
        },
    },
    contactUs: {
        gap: 20,
        ...cStyles.flexColumn,
    },
    contactUsSocial: {
        gap: 24,
        ...cStyles.flexRowCenter,
    },
    certifications: {
        width: '170px !important',
        height: '52px !important',
        [breakpoints.down('lg')]: {
            width: '137px !important',
            height: '42px !important',
        },
    },
});