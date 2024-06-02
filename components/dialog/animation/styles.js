import { cStyles } from '@styles/theme';


export const styles = ({ palette, breakpoints }) => ({
    paper: {
        borderRadius: '0px !important',
        padding: 0,
        width: '100%',
        overflowY: 'unset !important',
        margin: 'unset !important',
        background: 'transparent !important',
        maxHeight: 'unset !important',
        maxWidth: '100%',
        [breakpoints.up('lg')]: {
            // width: 670,
            maxWidth: '100vw !important',
        },
    },
    scrollPaper: {
        [breakpoints.down('lg')]: {
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
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        position: 'relative',
    },
    canvas: {
        ...cStyles.overlayAbsolute,
    },
    gift: {
        maxWidth: 400,
        ...cStyles.overlayAbsolute,
        top: '50%',
        left: '50%',
        height: 'fit-content',
        transform: 'translate(-50%, -50%)',
    },
});