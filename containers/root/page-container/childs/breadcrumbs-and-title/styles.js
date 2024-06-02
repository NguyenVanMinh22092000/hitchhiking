
export const styles = ({ palette }) => ({
    wrapper: {
        minWidth: 1366,
        maxWidth: 1366,
        margin: '0 auto -8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        padding: '24px 24px 0',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        '&>img': {
            margin: '0 8px',
        },
        '&>span': {
            fontSize: 15,
            fontWeight: 500,
            '&:first-child': {
                fontSize: 18,
            },
        },
    },
});