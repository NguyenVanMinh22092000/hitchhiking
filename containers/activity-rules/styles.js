import { colors, commonClasses, fontWeights } from '@styles/theme';

export const styles = ({ breakpoints, palette }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        margin: '40px 0',
        [breakpoints.up('lg')]: {
            margin: '72px 0',
        },
    },
    content: {
        marginTop: 36,
        flexShrink: 0,
    },
    title: {
        fontWeight: fontWeights.strong,
        fontSize: 20,
    },
    subTitle:{
        marginTop: '10px',
    },
    table: {
        margin:'20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{ 
        maxWidth: 700,
    },
    link: {
        color: colors.blue,
    },


    highlight: {
        color: palette.error.main,
    },


    bold:{
        fontWeight: fontWeights.strong,
    },
    symbol: {
        marginLeft: 10,
    },
    note: {
        fontWeight: fontWeights.strong,
        textDecoration: 'underline'
    },
    italic: {
        margin:'10px 0',
        fontStyle: 'italic'
    },
    subContent:{
        marginTop: 10,
    }
});
