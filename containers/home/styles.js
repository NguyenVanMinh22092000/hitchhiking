import { cStyles, commonClasses } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        ...cStyles.flexColumn,
    },
    content: {
        position: 'relative',
        ...cStyles.flexColumn,
    },
    joinNow: {
        marginTop: 40,
        ...cStyles.flexColCenter,
        [breakpoints.up('lg')]: {
            marginTop: 64,
        },
    },
    cTitle: {
        marginTop: 24,
        [breakpoints.up('lg')]: {
            marginTop: 64,
        },
    },
    cBackground: {
        marginTop: 24,
        [breakpoints.up('lg')]: {
            marginTop: 80,
        },
    },
    subPrize: {
        display: 'flex',
        gap: 72,
        width: 'fit-content',
        justifyContent: 'center',
        flexWrap: ' wrap',
        margin: '36px auto 12px',
        [breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [breakpoints.up('lg')]: {
            gap: 56,
            margin: '88px auto 36px',
        },
    },
    subPrizeItem: {
        position: 'relative',
        width: 'fit-content',
        '& .container': {
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 16,
            [breakpoints.up('lg')]: {
                gap: 8,
            },
        },
        '& .prize-image': {
            height: 108,
            position: 'relative',
            zIndex: 1,
            width: 'auto',
            [breakpoints.up('lg')]: {
                height: 232,
            },
        },
    },
    subPrizeTurn: {
        position: 'relative',
        height: 50,
        minWidth: 96,
        [breakpoints.up('lg')]: {
            minWidth: 188,
            height: 84,
        },
        '& .text': {
            position: 'absolute',
            zIndex: 1,
            top: -32,
            left: '60%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            fontWeight: 700,
            fontSize: 16,
            top: -24,
            [breakpoints.down('sm')]: {
                fontSize: 15,
            },
            [breakpoints.up('lg')]: {
                minWidth: 172,
                fontSize: 18,
                top: -32,
            },
        },
        '& .background': {
            position: 'absolute',
            zIndex: 1,
            top: -2,
            left: 0,
            padding: 2,
            borderRadius: 4,
            width: 'calc(100% + 8px)',
            height: '100%',
            display: 'inline-block',
            cursor: 'pointer',
            background: `linear-gradient(to bottom, #BEBEBE, #F7F7F7, #D5D5D5, #F0F0F0, #BEBEBE)`,
            transform: 'skewX(-16deg)',
            '&>div': {
                width: '100%',
                height: '100%',
                borderRadius: 2,
                background: 'linear-gradient(180deg, #F00023 0%, #FF6176 48.96%, #E40725 100%)',
                [breakpoints.up('lg')]: {
                    borderRadius: 4,
                },
            },
            [breakpoints.up('lg')]: {
                padding: 4,
                borderRadius: 6,
            },
        },
        '& .content': {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            borderRadius: 4,
            color: palette.white.main,
            fontSize: 10,
            fontWeight: 700,
            lineHeight: 'normal',
            fontStyle: 'italic',
            textAlign: 'center',
            textTransform: 'uppercase',
            ...cStyles.flexColCenter,
            [breakpoints.up('lg')]: {
                fontSize: 20,
            },
        },
        '& .title': {
            fontSize: 25,
            [breakpoints.up('lg')]: {
                fontSize: 40,
            },
        },
        '& .image': {
            width: 96,
            height: 96,
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '-75%',
            [breakpoints.up('lg')]: {
                width: 204,
                height: 204,
                top: '80%',
                left: '-75%',
            },
        },
    },
    remainPrize: {
        position: 'relative',
        '& .content': {
            position: 'relative',
            zIndex: 1,
            padding: '40px 0',
            [breakpoints.up('lg')]: {
                padding: '64px',
            },
        },
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    rpContent: {
        marginTop: 40,
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        rowGap: 32,
        columnGap: 32,
        [breakpoints.up('lg')]: {
            marginTop: 128,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
        },
    },
    rpCountWrapper: {
        width: 'fit-content',
        height: 'fit-content',
        gap: 16,
        ...cStyles.flexColumn,
        [breakpoints.up('lg')]: {
            position: 'absolute',
            left: '50%',
            top: '-50%',
            transform: 'translateX(-50%)',
        },
    },
    rpCount: {
        borderRadius: 6,
        width: 'fit-content',
        height: 'fit-content',
        padding: 4,
        background: `linear-gradient(to bottom, #BEBEBE, #F7F7F7, #D5D5D5, #F0F0F0, #BEBEBE)`,
        transform: 'skewX(-20deg)',
    },
    rpCountCtn: {
        color: palette.white.main,
        width: 'fit-content',
        background: 'linear-gradient(180deg, #F00023 0%, #FF6176 48.96%, #E40725 100%)',
        borderRadius: 4,
        padding: 8,
        minWidth: 108,
        ...cStyles.flexColCenter,
        '& b': {
            fontSize: 27,
            fontWeight: 700,
            [breakpoints.up('lg')]: {
                fontSize: 32,
            },
        },
        '& span': {
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            [breakpoints.up('lg')]: {
                fontSize: 20,
            },
        },
        [breakpoints.up('lg')]: {
            minWidth: 156,
        },
    },
    rpItem: {
        width: '100%',
        gap: 4,
        position: 'relative',
        ...cStyles.flexColCenter,
        [breakpoints.up('lg')]: {
            width: 'calc(18% - 26px)',
        },
        '&.large': {
            gridArea: '1 / 1 / 2 / 3',
            [breakpoints.up('lg')]: {
                width: '25%',
            },
        },
        '& .image': {
            height: 258,
            position: 'relative',
            maxHeight: 152,
            ...cStyles.flexColCenter,
            justifyContent: 'flex-start',
            '& .prize': {
                height: 'auto',
                width: 'auto',
                maxHeight: '100%',
                maxWidth: '100%',
                backgroundSize: 'cover',
            },
            [breakpoints.up('lg')]: {
                justifyContent: 'center',
                maxHeight: 184,
            },
        },
    },
    joinProcess: {
        margin: '40px 0',
        [breakpoints.up('lg')]: {
            margin: '64px 0',
        },
    },
    prStructure: {
        marginTop: 40,
        [breakpoints.up('lg')]: {
            marginTop: 64,
        },
    },
    prsAll: {
        marginTop: 36,
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        rowGap: 16,
        [breakpoints.up('lg')]: {
            marginTop: 56,
            gridTemplateColumns: '3fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            columnGap: 32,
            rowGap: 24,
        },
    },
    prsItem: {
        '&.large': {
            gridArea: '1 / 1 / 2 / 3',
            [breakpoints.up('lg')]: {
                gridArea: '1 / 1 / 3 / 2',
            },
        },
        '& img': {
            width: '100%',
            height: 'auto',
        },
    },
});
