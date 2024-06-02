import { getSvgStyle } from '@utils/StyleUtils';
import { cStyles } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    wrapper: {
        width: '100%',
        ...cStyles.flexRowCenter,
        gap: 8,
        '& .search-bar': {
            position: 'relative',
            gap: 8,
            width: '100%',
            ...cStyles.flexRowCenter,
            '& $inputWrap': {
                maxWidth: 'unset',
            },
        },
        '&.customize': {
            height: 48,
            width: 360,
        },
        '&.fit-content': {
            height: 'unset',
            '& .search-bar': {
                width: '100%',
                padding: 0,
            },
            '& $inputWrap': {
                width: '100% !important',
                background: palette.background.primary,
            },
        },
        '&.customize .search-bar': {
            flex: 1,
            padding: 0,
            marginRight: 0,
        },
        '&.fit-content>div': {
            marginRight: '0!important',
        },
        '&>div:last-child': {
            gap: 8,
            display: 'flex',
            alignItems: 'center',
            [breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'flex-end',
            },
        },
        '&:hover $btnDelete': {
            opacity: 1,
            visibility: 'visible',
        },
        [breakpoints.down('md')]: {
            height: 'unset',
            alignItems: 'unset',
            flexDirection: 'column',
        },
    },
    inputWrap: {
        position: 'relative',
        height: '44px !important',
        padding: '12px 16px !important',
        display: 'flex',
        borderRadius: '12px !important',
        outline: 'none !important',
        border: 'none !important',
        minWidth: 124,
        background: palette.background.primary + '!important',
        '&:hover, &:focus-within': {
            background: palette.background.primary + '!important',
        },
        '&:not(.customize).focusing': {
            boxShadow: `inset 0px 0px 0px 1px ${palette.info.main}`,
            background: palette.info[100] + '!important',
        },
        '&:not(.customize).notResize': {
            boxShadow: `inset 0px 0px 0px 1px ${palette.info.main}`,
            background: palette.info[100] + '!important',
        },
        '&>div': {
            flex: 1,
        },
        '&.customize': {
            width: '100% !important',
            height: '48px !important',
            borderRadius: '12px !important',
            background: palette.primary[50] + '!important',
        },
        '& input': {
            fontSize: 15,
        },
        [breakpoints.down('md')]: {
            width: '100%',
        },
    },

    searchWidthCalculator: {
        width: 'fit-content',
        padding: '0 16px',
        position: 'absolute',
        left: 0,
        display: 'flex',
        visibility: 'hidden',
        '&>div': {
            marginRight: 8,
        },
        '&>span': {
            whiteSpace: 'nowrap',
        },
    },

    btnDelete: {
        opacity: 0,
        visibility: 'hidden',
        ...getSvgStyle({ color: palette.primary[500] }),
    },

});