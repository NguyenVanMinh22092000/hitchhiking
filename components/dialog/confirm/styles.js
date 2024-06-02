import BrowserDetect from '@libs/browser-detect';
import { cStyles } from '@styles/theme';


export const styles = ({ palette, breakpoints }) => {
    const { isSafari } = BrowserDetect.parse() || {};
    const beforeBg = {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: 404,
        height: '100%',
        background: `linear-gradient(to right, rgba(4, 62, 35, 0.00), ${palette.darkGreen.main}, ${palette.darkGreen.main}, ${palette.darkGreen.main})`,
        [breakpoints.down('sm')]: {
            width: '100%',
            background: 'unset',
            // background: `linear-gradient(to top, rgba(4, 62, 35, 0.00), rgba(4, 62, 35, 0.00), rgba(4, 62, 35, 0.00), ${palette.darkGreen[10]},${palette.darkGreen[30]}, ${palette.darkGreen[50]}, ${palette.darkGreen.main},${palette.darkGreen.main}, ${palette.darkGreen.main},${palette.darkGreen.main}, ${palette.darkGreen.main})`,
        },
    }
    return {
        paper: {
            borderRadius: '0px !important',
            padding: 0,
            width: '100%',
            overflowY: 'unset !important',
            margin: 'unset !important',
            maxHeight: 'unset !important',
            minHeight: '100svh !important',
            maxWidth: '100%',
            [breakpoints.up('sm')]: {
                width: 670,
                maxWidth: '670px !important',
                minHeight: 'unset !important',
            },
        },
        scrollPaper: {
            [breakpoints.down('sm')]: {
                alignItems: 'flex-start !important',
            },

        },
        rootTitle: {
            padding: '0px !important',
        },
        rootContent: {
            padding: '0px !important',
            marginTop: 0
        },
        dialogActionRoot: {
            display: 'flex',
            justifyContent: 'flex-start !important',
            padding: '0px !important',
            '& div:first-child, p:first-child, span:first-child': {
                marginLeft: '0px !important',
            },
            '& div, p, span': {
                // marginLeft: '16px !important',
                // fontSize: 15,
            },
        },
        wrapper: {
            [breakpoints.down('sm')]: {
                // minHeight: '100%',
                minHeight: '100dvh',
                // height: 'calc(100vh - calc(100vh - 100%))',
                height: '-webkit-fill-available',
                height: '100dvh',
                overflowY: 'auto',
                ...(isSafari && {
                    minHeight: '100%',
                    height: '-webkit-fill-available',
                }),
            },
        },
        container: {
            position: 'relative',
        },
        closeBtn: {
            position: 'absolute',
            zIndex: 2,
            top: 16,
            right: 16,
            cursor: 'pointer',
            height: 36,
            width: 36,
            borderRadius: '50%',
            overflow: 'hidden',
            ...cStyles.flexCenter,
            '& .close': {
                height: 35,
                width: 35,
            },
        },
        backdrop: {
            height: 258,
            position: 'relative',
            '& .prize': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                minHeight: 184,
                maxHeight: 184,
                width: 'auto',
                maxWidth: '100%',
                transform: 'translate(-50%,-50%)',
                backgroundSize: 'cover',
                [breakpoints.up('sm')]: {
                },
            },
        },
        content: {
            gap: 24,
            padding: 24,
            ...cStyles.flexColumn,
        },
        congratMsg: {
            fontSize: 25,
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            ...cStyles.flexColumn,
            '&>p': {
                margin: 0,
                color: palette.error.main,
            },
        },
        generator: {
            display: 'grid',
            gridTemplateColumns: '140px 160px 290px',
            gap: 16,
            [breakpoints.down('sm')]: {
                ...cStyles.flexColumn,
            },
        },
        generatorItem: {
            width: '100%',
            gap: 4,
            ...cStyles.flexColumn,
            '& .label': {
                fontSize: 16,
                fontWeight: 700,
            },
        },
        codeItem: {
            padding: '18px 20px',
            background: palette.background.primary,
            borderRadius: 5,
            ...cStyles.textEllipsis,
        },
        noteMsg: {
            display: 'inline-block',
            padding: '0 24px',
            color: palette.error.main,
            textAlign: 'center',
        },
        specialPrize: {
            width: '100%',
            position: 'relative',
            height: 'fit-content',
            [breakpoints.down('sm')]: {
                height: 'unset',
                ...cStyles.flexColumn,
                flexDirection: 'column-reverse',
                background: palette.darkGreen.main,
            },
            '&.custom': {
                '& .content': {
                    width: 200,
                },
                '&:before': {
                    ...beforeBg,
                    width: 322,
                    background: `linear-gradient(to right, rgba(4, 62, 35, 0.00), ${palette.darkGreen.main}, ${palette.darkGreen.main}, ${palette.darkGreen.main})`,
                },
                [breakpoints.down('sm')]: {
                    marginTop: 24,
                    '& .content': {
                        // background: beforeBg.background, 
                        width: '100%',
                        top: -24,
                        background: `linear-gradient(to top, rgba(4, 62, 35, 0.00), rgba(4, 62, 35, 0.00), rgba(4, 62, 35, 0.00),rgba(4, 62, 35, 0.00), ${palette.darkGreen[10]}, ${palette.darkGreen[10]}, ${palette.darkGreen[10]},${palette.darkGreen[30]}, ${palette.darkGreen[50]}, ${palette.darkGreen.main},${palette.darkGreen.main}, ${palette.darkGreen.main},${palette.darkGreen.main}, ${palette.darkGreen.main})`,
                    },
                },
            },
            '&:before': {
                ...beforeBg,
            },
            '& .imageWrapper': {
            },
            '& .image': {
                width: 454,
                height: '100%',
                '&>img': {
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                },
                [breakpoints.down('sm')]: {
                    width: '100%',
                    height: '100%',
                    '&>img': {
                        width: '100%',
                    },
                },
            },
            '& .content': {
                position: 'absolute',
                right: 24,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 300,
                textAlign: 'right',
                color: palette.white.main,
                fontSize: 16,
                fontWeight: 700,
                [breakpoints.down('sm')]: {
                    // right: 'unset',
                    // top: 0,
                    top: 0,
                    left: 0,
                    transform: 'unset',
                    width: '100%',
                    padding: 16,
                    textAlign: 'center',
                },
            },
        },
        footer: {
            padding: 24,
            width: '100%',
            ...cStyles.flexColCenter,
        },
        failureWrapper: {
            padding: 44,
            gap: 32,
            ...cStyles.flexColCenter,
            '&>span': {
                fontSize: 25,
                textAlign: 'center',
                [breakpoints.down('sm')]: {
                    fontSize: 20,
                },
            },
            [breakpoints.down('sm')]: {
                padding: '44px 16px 24px',
            },
        },
    }
};