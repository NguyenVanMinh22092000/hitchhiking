
import { getAnimationStyle } from '@utils/StyleUtils';

import { cStyles } from '@styles/theme';

export const styles = ({ palette }) => ({
    wrapper: {
        position: 'fixed',
        zIndex: 999999,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        ...cStyles.flexCenter,
        display: 'none',
        background: palette.primary[600],
        '&.static': {
            background: palette.white.main,
        },
    },
    spinkit: {
        width: 64,
        height: 64,
        ...getAnimationStyle('spin 1s infinite linear'),
        '&:not(.static) svg>g': {
            fill: 'white',
        },
    },
    circleLogo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}); 