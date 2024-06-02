import { isArray } from '@utils/Utils';

import { textSizes } from '@styles/theme';

export const styles = ({ palette, breakpoints }) => ({
    text: {
        margin: 0,
        ...Object.fromEntries(Object.keys(palette).map(color => {
            return [`&.${color}`, {
                color: palette[color].main,
            }];
        })),
        ...Object.keys(textSizes).reduce((result, key) => {
            const [fontSize, fontWeight, _breakpoints] = textSizes[key] || [];
            let data = { fontSize, fontWeight };
            if (isArray(_breakpoints, true)) {
                _breakpoints.forEach(([point, [size, weight]]) => {
                    Object.assign(data, {
                        [breakpoints.down(point)]: { fontSize: size, fontWeight: weight, },
                    });
                });
            }
            Object.assign(result, { [`&.${key}`]: data });
            return result;
        }, {}),
    },
});