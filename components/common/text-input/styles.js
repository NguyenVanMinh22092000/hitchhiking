
import { getTransitionStyle } from '@utils/StyleUtils';

export const styles = ({ palette, transitions }) => ({
    wrapper: {
        width: '-webkit-fill-available',
        padding: '18px 20px',
        borderRadius: 5,
        boxSizing: 'border-box',
        background: palette.background.primary,
        ...getTransitionStyle('border .15s'),
        '&:hover, &:focus-within, &.force-focus': {
        },
        '&:focus-within $label': {
            color: palette.info.main,
        },
        '&.error': {
            background: palette.error[100],
            '&:hover, &:focus-within': {
                border: `1px solid ${palette.error.main}`,
            },
            '&:hover $label, &:focus-within $label': {
                color: palette.error.main,
            },
            '& $btnRemoveValue>div': {
                background: palette.error[100],
            },
        },
        '&.disabled': {
            cursor: 'not-allowed',
            '& input': {
                pointerEvents: 'none',
            },
        },
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    },
    label: {
        display: 'flex',
        marginBottom: 8,
        fontSize: 12,
        height: 'fit-content',
        color: palette.text.primary,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        position: 'relative',
        '& .cntLabel': {
            width: 'fit-content',
            display: 'flex',
        },
        '& span': {
            ...getTransitionStyle(transitions.create('color', { duration: 150 })),
        },
        '&.error': {
            color: palette.error.main,
        },
        '&:not(.error)': {
            fontWeight: 500,
        },
        '& .required': {
            marginLeft: 4,
            color: palette.error.main,
        },
        '& .desc': {
            opacity: 0.5,
            fontWeight: 400,
            '&.opacity1': {
                opacity: 1,
            },
        },
    },
    container: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        '&.highlight': {
            height: 72,
            position: 'absolute',
            width: 'calc(100% - 32px)',
        },
    },
    input: {
        flex: 1,
        height: 20,
        padding: 0,
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        backgroundClip: 'content-box',
        color: palette.text.primary,
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 500,
        '&:not($textarea)': {
            overflow: 'hidden',
        },
        '&::placeholder': {
            fontSize: 16,
            fontWeight: 500,
            color: palette.primary.main,
        },
        '&:-webkit-autofill': {
            ...getTransitionStyle('background-color 2147483647s'),
            WebkitTextFillColor: palette.primary.main + '!important',
        },
        '&.readOnly': {
            pointerEvents: 'none',
        },
        '&.password': {
            WebkitTextSecurity: 'disc',
            MozTextSecurity: 'disc',
            OTextSecurity: 'disc',
            MsTextSecurity: 'disc',
        },
    },
    textarea: {
        height: 72,
        resize: 'none',
        '&.highlight': {
            position: 'relative',
            background: 'none transparent',
            color: 'transparent',
            width: '-webkit-fill-available',
            caretColor: palette.text.primary,
        },
        '&::placeholder': {
            fontSize: 16,
            fontWeight: 500,
            color: palette.primary.main,
        },
        '&+$btnRemoveValue': {
            top: 0,
        },
    },
});