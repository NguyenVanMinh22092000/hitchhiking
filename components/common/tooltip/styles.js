import { cStyles } from '@styles/theme';

export const styles = ({ palette }) => ({
    popper: {
        zIndex: '99999 !important',
        '&.hidden': {
            display: 'none',
        },
    },
    center: {
        textAlign: 'center',
    },
    tooltip: {
        fontWeight: 'inherit !important',
        fontSize: 'inherit !important',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        backgroundColor: palette.primary[900] + '!important',
        ...cStyles.noneUserSelect,
    },
    noMaxWidth: {
        wordBreak: 'unset',
        maxWidth: 'none',
    },
});