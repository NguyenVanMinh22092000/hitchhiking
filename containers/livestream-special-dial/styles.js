import { cStyles, commonClasses } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => {
    const cClasses = commonClasses({ breakpoints });
    return {
        ...cClasses,
        wrapper: {
            margin: '40px 0',
            ...cStyles.flexColumn,
            [breakpoints.up('lg')]: {
                margin: '72px 0',
            },
        },
        content: {
            marginTop: 56,
            textAlign: 'center',
            gap: 4,
            ...cStyles.flexColCenter,
            '& .error': {
                color: palette.error.main,
                fontWeight: 700,
            },
        },
        backdrop: {
            ...cClasses.cLayout,
            margin: '36px auto 0',
            [breakpoints.down('lg')]: {
                minWidth: '100%',
                maxWidth: '100%',
                padding: 0,
                margin: `56px auto 0`,
            },
        },
    }
};