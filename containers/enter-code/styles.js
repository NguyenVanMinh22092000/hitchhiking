import { cStyles, commonClasses } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        position: 'relative',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        [breakpoints.down('md')]: {
            background: palette.primary.main,
            '&>img': {
                display: 'none',
            },
        },
    },
    container: {
        zIndex: 1,
        position: 'relative',
        padding: 0,
        ...cStyles.flexColCenter,
        [breakpoints.up('lg')]: {
            padding: '72px 0',
        },
    },
    content: {
        width: '100%',
        ...cStyles.flexColCenter,
    },
    mobileCtn: {
        marginBottom: 24,
        ...cStyles.flexColCenter,
    },
    title: {
        marginTop: 24,
        [breakpoints.up('lg')]: {
            marginTop: 48,
        },
    },
    inputFields: {
        marginTop: 44,
        width: '100%',
        gap: 16,
        ...cStyles.flexColumn,
        [breakpoints.up('lg')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            '&>div': {
                maxWidth: 360,
            },
        },
    },
    acceptPolicy: {
        display: 'flex',
        gap: 8,
        cursor: 'pointer',
        '&>span': {
            display: 'inline-block',
            marginTop: 2,
            ...cStyles.noneUserSelect,
        },
    },
    joinNow: {
        marginTop: 32,
        [breakpoints.up('lg')]: {
            marginTop: 52,
        },
    },
    otpMsg: {
        marginTop: 44,
        display: 'inline-block',
        textAlign: 'center',
    },
    verify: {
        marginTop: 16,
        width: '100%',
        [breakpoints.up('lg')]: {
            maxWidth: 400,
        },
    },
    countDown: {
        marginTop: 16,
        gap: 8,
        color: palette.error.main,
        ...cStyles.flexColCenter,
    },
    resendOTP: {
        color: palette.primary.main,
        opacity: 0.5,
        ...cStyles.noneUserSelect,
        '&.canResend': {
            opacity: 1,
            '&>b': {
                color: palette.error.main,
                cursor: 'pointer',
            },
        },
    },
    info: {
        marginTop: 44,
        gap: 16,
        width: '100%',
        ...cStyles.flexColumn,
        [breakpoints.up('lg')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            '&>div': {
                minWidth: 360,
                maxWidth: 360,
            },
        },
    },
    remainWrapper: {
        zIndex: 1,
        position: 'relative',
        width: '100%',
        background: palette.white.main,
        padding: '32px 0',
        '& .container': {
            gap: 16,
            ...cStyles.flexColCenter,
            [breakpoints.up('lg')]: {
                flexDirection: 'row',
            },
        },
        [breakpoints.up('lg')]: {
            padding: '36px 64px',
        },
    },
    remainRoll: {
        gap: 36,
        width: '100%',
        lineHeight: 'normal',
        justifyContent: 'space-between',
        ...cStyles.flexRowCenter,
        [breakpoints.up('lg')]: {
            justifyContent: 'flex-start',
        },
        '&>span': {
            fontSize: 18,
            fontWeight: 800,
            color: palette.primary.main,
            fontStyle: 'italic',
        },
        '& .number': {
            fontSize: 48,
            textAlign: 'right',
            color: palette.error.main,
        },
    },
    raceList: {
        height: 40,
        width: '100%',
        zIndex: 1,
        position: 'relative',
    },
    uncheckIcon: {
        minHeight: 27,
        maxHeight: 27,
        minWidth: 27,
        maxWidth: 27,
        background: palette.background.primary,
        borderRadius: 6,
    },
    agreeMsg: {
        marginTop: 40,
        gap: 24,
        maxWidth: 532,
        ...cStyles.flexColumn,
        [breakpoints.down('lg')]: {
            marginTop: 16,
            gap: 16,
        },
    },
});