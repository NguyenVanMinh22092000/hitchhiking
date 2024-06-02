import { commonClasses, fontWeights, lineHeights } from '@styles/theme';

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
        margin: '20px 0',
        fontWeight: fontWeights.strong,
        fontSize: 20,
    },
    subTitle: {
        fontWeight: fontWeights.strong,
        fontSize: 18,
        lineHeight: lineHeights.big,
        margin: '20px 0',
    },
    desc: {

    },
    blockSymbol: {
        fontWeight: fontWeights.strong,
    },
    inlineSymboy: {
        fontWeight: fontWeights.strong,
    },
    redText: {
        color: palette.error.main,
    }
});
