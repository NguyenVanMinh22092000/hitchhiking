import { cStyles, colors, commonClasses, positions, fontFamilys, fontWeights } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    stepWrapper: {
        gap: 32,
        position: positions.relative,
        ...cStyles.flexColumn,
        ...cStyles.textBiggerPrimary,
        [breakpoints.up('md')]: {
            gap: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        [breakpoints.up('lg')]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
    },
    header: {
        marginBottom: 36,
        [breakpoints.up('lg')]: {
            marginBottom: 56,
        },
    },
    stepIcon: {
        borderRadius: 12,
        '&.isReceivePrize': {
            minHeight: 220,
            maxHeight: 220,
            maxWidth: 368,
            ...cStyles.flexCenter,
        },
    },
    stepItem: {
        gap: 30,
        width: '100%',
        ...cStyles.flexColCenter,
        [breakpoints.up('md')]: {
            minWidth: `calc(50% - 25px)`,
            maxWidth: `calc(50% - 25px)`,
        },
        [breakpoints.up('lg')]: {
            minWidth: `100%`,
            maxWidth: `100%`,
        },

    },
    stepContent: {
        gap: 10,
        ...cStyles.flexColumn,
        '&>span': {
            textAlign: 'center',
        },
    },
    stepDescList: {
        gap: 24,
        ...cStyles.flexColumn,
    },
    stepDescItem: {
        ...cStyles.flexColumn,
    },
    stepMoreDesc: {
        textAlign: 'center',
        fontWeight: fontWeights.bold,
        '& >span:nth-child(2)': {
            color: palette.error.main,
        }
    },
});