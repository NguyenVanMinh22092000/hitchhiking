
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
        background: palette.primary[600],
        '&.static': {
            background: palette.white.main,
        },
    },
    circleLogo: {

        position: 'absolute',
        top: '50%',
        left: '50%',
        color: 'red',
        transform: 'translate(-50%, -50%)',
    },
    circle: {
        position: 'absolute',
        top: '-32px',
        right: '-32px'
    },
});