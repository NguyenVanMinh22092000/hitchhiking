import { borderRadiuses, cStyles, colors, fontFamilys, fontWeights, colorBases, baseHeights, borderLines, boxSinzings, positions, widths, commonClasses, } from '@styles/theme';

export const styles = ({ breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    outer: {
        padding: '40px 0',
        ...cStyles.flexColumn,
        [breakpoints.up('lg')]: {
            padding: '72px 0',
        },
    },
    title: {
        [breakpoints.up('md')]: {
        },
    },
    actions: {
        margin: '32px 0 16px',
        gap: 16,
        [breakpoints.up('500')]: {
            gap: 24,
            margin: '56px 0 32px',
            ...cStyles.flexCenter,
            justifyContent: cStyles.startJustify,
        },
    },
    button: {
        width: widths.oneHundred,
        marginTop: 24,
        background: colors.red,
        borderRadius: borderRadiuses.main,
        height: baseHeights.box,
        fontSize: 20,
        fontWeight: fontWeights.strong,
        color: colors.white,
        cursor: 'pointer',
        ...cStyles.flexCenter,
        [breakpoints.down('xs')]: {
            width: widths.oneHundred,
        },
        [breakpoints.up('500')]: {
            width: widths.box,
            marginTop: 0,
            marginBottom: 0,
        },
        [breakpoints.up('lg')]: {
            width: widths.box,
        },
    },
    wrapper: {
        width: widths.oneHundred,
        font: fontFamilys.primary,
        background: colors.tbColor,
        borderRadius: borderRadiuses.main,
        position: positions.relative,
        ...boxSinzings,
        ...cStyles.flexColumn,
        [breakpoints.down('xs')]: {
            width: widths.oneHundred,
        },
    },
    header: {
        gap: 30,
        width: widths.oneHundred,
        height: baseHeights.box,
        borderBottom: borderLines.main,
        background: colors.green,
        color: colors.white,
        fontWeight: fontWeights.strong,
        ...boxSinzings,
        ...cStyles.flexCenter,
        justifyContent: cStyles.startJustify,
    },
    content: {
        ...cStyles.flexColumn,
    },
    details: {
        gap: 30,
        width: widths.oneHundred,
        minHeight: baseHeights.box,
        ...boxSinzings,
        position: positions.relative,
        fontWeight: fontWeights.bold,
        ...cStyles.flexCenter,
        justifyContent: cStyles.startJustify,
    },
    moreDetail: {
        ...cStyles.flexCenter,
        '& > div:nth-child(2)': {
            fontWeight: fontWeights.strong,
            color: colorBases.primary,
        },
    },
    footer: {
        marginTop: 24,
    },
    mobileActive: {
        '&:active': {
            boxShadow: `0px 0px 2px ${colors.red}`,
        },
    },
    loading: {
        position: positions.absolute,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
});
