export const styles = ({ palette }) => ({
    wrapper: {
        width: '100%',
        margin: '0 auto',
    },
    miniWrapper: {
        width: 'calc(100% - 48px)',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
    text: {
        color: palette.primary.main,
        textAlign: 'center',
    },
});