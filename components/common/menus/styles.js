import { getShadowStyle, getTextLineStyle, getTransitionStyle } from '@utils/StyleUtils';

import { cStyles } from '@styles/theme';

export const styles = ({ palette }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        background: palette.white.main,
        '&:not(.sub-menu)': {
            overflow: 'hidden',
        },
        '&:not(.w-flat)': {
            ...getShadowStyle({ color: palette.primary[160] }),
        },
        '&>span': {
            padding: '8px 8px 0',
            opacity: 0.5,
            fontSize: 12,
        },
    },
    content: {
        gap: 4,
        ...cStyles.flexColumn,
        position: 'relative',
        '&>span': {
            minHeight: 36,
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
        },
        '&:not(.fetching)>span': {
            opacity: 0.5,
        },
        '&.sub-item': {
            overflowY: 'auto',
            overflowX: 'hidden',
        },
    },
    searchWrap: {
        gap: 8,
        padding: '8px ',
        width: '100%',
        ...cStyles.flexColumn,
        '&.hl $search': {
            height: 34,
            margin: '0px!important',
            padding: '0 16px!important',
            borderRadius: 9999,
            background: `${palette.background.primary} !important`,
            borderBottom: 'unset!important',
        },
    },
    search: {
        height: 44,
        borderRadius: 0,
        margin: '0 8px!important',
        padding: '0px!important',
        background: `${palette.white.main}!important`,
        borderBottom: `1px solid ${palette.info[100]}!important`,
    },
    menu: {
        minWidth: 100,
        padding: 8,
        cursor: 'pointer',
        borderRadius: 6,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        color: palette.primary.main,
        ...getTransitionStyle('all .25s'),
        '&>span': {
            ...cStyles.noneUserSelect,
        },
        '&:not(.disabled):hover': {
            background: palette.primary[100],
        },
        '&.focusing': {
            background: palette.success[100],
        },
        '&.active .container>div>span': {
            color: palette.success.main,
        },
        '&.active': {
            color: palette.success.main,
            background: palette.success[100],
        },
        '&.disabled': {
            opacity: 0.5,
            cursor: 'default',
        },
        '& .avatar': {
            marginRight: 16,
        },
        '& .wrapper': {
            width: '100%',
            display: 'flex',
            gap: 8,
            flexDirection: 'column',
            overflow: 'hidden',
            '&.email .label': {
                fontWeight: 500,
            },
            '&.email,&.multiline': {
                gap: 4,
            },
            '&>span': {
                opacity: 0.5,
            },
            '&.multiline > span.desc': {
                ...getTextLineStyle(3),
            },
            // '&.multiline .container': {
            //     marginBottom: 8,
            // },
            '&:not(.multiline) .container>span': {
                ...cStyles.textEllipsis,
            },
        },
        '& .container': {
            display: 'flex',
            justifyContent: 'space-between',
            '&>div': {
                display: 'flex',
                gap: 8,
                // alignItems: 'center'
            },
            '& .startItem': {
                gap: 8,
                display: 'flex',
                alignItems: 'center',
            },

            '&.label-desc': {
                flexDirection: 'row',
                justifyContent: 'space-between',
                '&>span:nth-child(2)': {
                    opacity: 0.5,
                    marginLeft: 8,
                },
            },
            '& .desc': {
                //marginLeft: 8,
                opacity: 0.5,
            },
        },
        '& .icon': {
            marginRight: 8,
        },
        '&.sub-menu': {
            minHeight: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            ...cStyles.textEllipsis,
        },
        '&.no-gap': {
            gap: '0 !important',
        },
    },
    price: {
        background: palette.primary.main,
        padding: '2px 4px',
        color: `${palette.white.main} `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        fontSize: 12,

    },
    quantity: {
        opacity: 0.5,
        fontSize: 12,
        marginLeft: 4,
    },
    group: {
        opacity: 0.5,
        margin: '4px 0',
        display: 'flex',
        '&>span': {
            ...cStyles.textEllipsis,
        },
    },
    cSelectItem: {
        gap: 8,
        padding: '8px 12px',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '& div': {
            overflow: 'hidden',
            '&>span': {
                ...cStyles.textEllipsis,
            },
        },
        '&:hover': {
            background: palette.primary[100],
            cursor: 'pointer',
        },
        '&.active': {
            color: palette.success.main,
            '&:hover': {
                background: palette.success[100],
            },
        },
        '&.focusing': {
            background: palette.success[100],
        },
    },
    subText: {
        opacity: 0.5,
    },
    row8: {
        gap: 8,
        ...cStyles.flexRowCenter,
        '& .info': {
            color: palette.info.main,
        },
    },
    checkAll: {
        padding: '8px 16px',
    },
    boxMenus: {
        position: 'relative',
        '&:hover $boxSubMenus': {
            display: 'flex !important',
            flexDirection: 'column',
            gap: 8,
        },
        '&>:first-child': {
            display: 'flex',
            gap: 8,
            justifyContent: 'between',
        },
    },
    boxSubMenus: {
        width: 'fit-content',
        position: 'absolute',
        display: 'none',
        padding: 8,
        borderRadius: 12,
        left: 'calc(100% + 16px)',
        '&.together': {
            left: '100%',
        },
        top: 0,
        backgroundColor: palette.white.main,
        ...getShadowStyle({ color: palette.primary[160] }),
        maxHeight: 240,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&.sub-menu': {
            position: 'fixed',
            left: 0,
        },
        '&.custom-left': {
            maxWidth: 240,
        },
    },
    boxChild: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&:hover $boxChildMenus': {
            display: 'block !important',
        },
        '&>:first-child': {
            display: 'flex',
            gap: 8,
            justifyContent: 'between',
        },
    },
    boxChildMenus: {
        position: 'fixed',
        display: 'none',
        padding: 8,
        borderRadius: 12,
        maxHeight: 240,
        overflow: 'auto',
        backgroundColor: palette.white.main,
        ...getShadowStyle({ color: palette.primary[160] }),
    },
    boxEmpty: {
        position: 'absolute',
        width: 18,
        right: -18,
        top: 0,
        visible: 'hidden',
        height: '-webkit-fill-available',
        '&.child': {
            right: -26,
        },
    },
    hide: {
        // display: 'none !important',
    },
    childItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    boxClassify: {
        cursor: 'pointer',
        ...cStyles.noneUserSelect,
        '&>:first-child': {
            marginRight: 8,
            '&.hide': {
                display: 'none',
            },
        },
        '&>:last-child.active': {
            color: palette.success.main,
        },
    },
    boxCPoper: {
        margin: '0 8px 0',
    },
});