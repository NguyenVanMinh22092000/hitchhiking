import { getShadowStyle, getSvgStyle, getTransitionStyle } from '@utils/StyleUtils';
import { isArray } from '@utils/Utils';

import { cStyles, colorBases, fontFamilys } from '@styles/theme';

export const styles = ({ palette, transitions, breakpoints }) => {
    const genBackground = (color = 'error') => {
        const isWhite = color === 'white';
        return {
            background: palette[color].main,
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: -20,
                width: 16,
                height: '100%',
                background: palette[color].main,
                [breakpoints.down('md')]: {
                    left: -18,
                    width: 14,
                },
            },
            '&.shadow': {
                top: 6,
                left: -8,
                background: isWhite ? palette.primary.main : palette.background.primary,
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: -20,
                    width: 16,
                    height: '100%',
                    background: isWhite ? palette.primary.main : palette.background.primary,
                    [breakpoints.down('md')]: {
                        left: -18,
                        width: 14,
                    },
                },
            },
        }
    };
    return {
        wrapper: {
            position: 'relative',
            minWidth: 318,
            maxWidth: 318,
            height: 58,
            cursor: 'pointer',
            color: palette.white.main,
            '&.white': {
                color: palette.primary.main,
            },
            [breakpoints.down('md')]: {
                minWidth: 245,
                maxWidth: 245,
                height: 44,
            },
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'inline-block',
            background: palette.error.main,
            transform: 'skewX(-20deg)',
            cursor: 'pointer',
            ...['error', 'white'].reduce((rs, color) => {
                rs[`&.${color}`] = genBackground(color);
                return rs;
            }, {}),
        },
        container: {
            position: 'relative',
            width: '100%',
            height: '100%',
            ...cStyles.flexCenter,
        },
        text: {
            fontSize: 20,
            fontWeight: 700,
            textTransform: 'uppercase',
            margin: 0,
            ...cStyles.noneUserSelect,
            [breakpoints.down('md')]: {
                fontSize: 18,
            },
        },
    };
};