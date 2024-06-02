import { cStyles } from '@styles/theme';
import { getTransitionStyle, getTransformStyle, getClassName, getTextLineStyle } from '@utils/StyleUtils';

export const styles = ({ palette }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: 6,
        background: palette.background.primary,
        ...getTransitionStyle('all .25s'),
        '&:not(.slim)': {
            '&.error': {
                background: palette.error[100],
                '&:hover, &.open': {
                },
                '& $label': {
                    color: palette.error.main,
                    fontWeight: 400,
                },
            },
        },
        '&.open': {
            '&:not(.error) $label': {
                color: palette.success.main,
            },
            '& .dropdown': {
                ...getTransformStyle('rotate(180deg)'),
            },
        },
        '&:hover, &.open': {
        },
        '& [class*=placeholder]': {
            color: palette.text.primary,
        },
        '& [class*=singleValue]': {
            color: palette.text.primary,
        },
        '&.disable': {
            opacity: 0.5,
            pointerEvents: 'none',
            cursor: 'not-allowed',
        },
        '&.active': {
            '&.error': {
                background: palette.error[100],
            },
        },
    },
    label: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        fontWeight: 500,
        padding: '12px 16px 0',
        height: 'fit-content',
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: palette.text.primary,
        ...getTextLineStyle(3),
        '&.disabled': {
            cursor: 'not-allowed',
        },
        '&.active': {
            color: palette.success.success,
        },
    },
    labelRequired: {
        color: palette.error.main,
    },
    boxSelected: {
        gap: 8,
        height: 56,
        display: 'flex',
        padding: '18px 20px',
        '&.is-slim': {
            height: 30,
            padding: '0 8px',
            alignItems: 'center',
        },
        '&.show-label': {
            height: 40,
        },
        cursor: 'pointer',
    },
    boxInput: {
        flex: 1,
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        '&>:first-child': {
            position: 'absolute',
        },
        '&>:last-child': {
            left: 1,
            position: 'absolute',
            '&.is-slim': {
                position: 'relative',
            },
        },
        cursor: 'pointer',
        overflow: 'hidden',
    },
    input: {
        width: '100%',
        marginTop: 'auto',
        minHeight: 'unset',
        cursor: 'pointer',
        borderWidth: 0,
        border: 'none',
        outline: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '1px 0',
    },
    boxIcons: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: 0,
        marginLeft: 8,
        ...getTransitionStyle('all .25s'),
        '&.rotate': {
            ...getTransformStyle('rotate(180deg)'),
        },
    },
    hide: {
        display: 'none',
    },
    opacity: {
        opacity: 0,
    },
});

export const customClasses = {
    option: getClassName({
        height: 'unset',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 6,
        background: 'transparent',
        ...getTransitionStyle('all .25s'),
        '&.is-disabled': {
            '&:hover': {
                background: 'transparent',
            },
        },
        width: '100%',
        '& .avatar': {
            marginRight: 16,
        },
        '& .wrapper': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            '&.cnt .label, &.email .label': {
                fontWeight: 500,
            },
            '&>span': {
                opacity: 0.5,
            },
            '&.cnt .content': {
                ...getTextLineStyle(3),
            },
        },
        '& .container': {
            display: 'flex',
            position: 'relative',
            '&>span': {
                ...cStyles.textEllipsis,
            },
            '& .desc': {
                marginLeft: 8,
                opacity: 0.5,
            },
            '& .helping': {
                marginLeft: 4,
            },
        },
        '&.disabled': {
            opacity: 0.5,
            pointerEvents: 'none',
            cursor: 'not-allowed !important',
        },
    }),
    singleValue: getClassName({
        height: 20,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        '& .avatar': {
            marginRight: 8,
        },
        '& .email, & .desc': {
            marginLeft: 8,
            opacity: 0.5,
        },
        '& .boldContent': {
            fontWeight: 500,
            marginRight: 4,
        },
    }),
};