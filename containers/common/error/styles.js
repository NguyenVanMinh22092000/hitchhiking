import { cStyles, fontWeights } from "@styles/theme";

export const styles = ({ palette }) => ({
    wrapperLayout: {
        height: '100%',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        height: '100%',
        maxWidth: 1200,
        gap: 16,
        padding: '128px 24px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        ...cStyles.flexColumn,
        '& p': {
            margin: 0,
            fontWeight: fontWeights.bold,
        },
        '& a': {
            color: palette.info.main + '!important',
        },
    },
});