import { getShadowStyle } from '@utils/StyleUtils';

export const styles = ({ palette }) => ({
    shadow: {
        ...getShadowStyle({ color: palette.primary[100] }),
    },
    wrapper: {
        zIndex: 1000,
        border: 0,
        textAlign: 'left',
        listStyle: 'none',
        borderRadius: 12,
        backgroundColor: palette.white.main,
        backgroundClip: 'padding-box',
    },
    maxWith: {
        width: 320,
    },
    baseAlign: {
        margin: '8px 0',
    },
});