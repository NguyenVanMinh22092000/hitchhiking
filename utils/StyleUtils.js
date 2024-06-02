import { css } from 'glamor';
import invert from 'invert-color';

import { alpha as muAlpha } from '@mui/system';

import { colors, templateColors } from '@styles/theme';

import { isArray, isFunction, isString } from './Utils';
import { getLastName } from './StringUtils';
import { getWebTheme } from './ThemeUtils';

import { layoutSizes } from '@constants/Configs';

export const getClassName = (style) => style ? `${css(style)}` : '';

export const getTextLineStyle = (number, lineHeight, textOverflow) => {
    return {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: number || 1,
        WebkitBoxOrient: 'vertical',
        textOverflow: textOverflow || 'ellipsis',
        ...(lineHeight && { lineHeight }),
    }
}

export const getTransitionStyle = (...args) => {
    // ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
    // linear - specifies a transition effect with the same speed from start to end
    // ease-in - specifies a transition effect with a slow start
    // ease-out - specifies a transition effect with a slow end
    // ease-in-out - specifies a transition effect with a slow start and end
    // cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
    let transition = args[0];
    if (isString(transition)) {
        return {
            MozTransition: transition,
            WebkitTransition: transition,
            OTransition: transition,
            transition: transition,
        };
    }
    let [transitions, props, options] = args;
    // props (string | string[]): Defaults to ['all']. Provides a CSS property, or a list of CSS properties that should be transitioned.
    // options (object [optional]):
    // options.duration (string | number [optional]): Defaults to theme.transitions.duration.standard. Provides the duration of the transition.
    // options.easing (string [optional]): Defaults to theme.transitions.easing.easeInOut. Provides the easing for the transition.
    // options.delay (string | number [optional]): Defaults to 0. Provides the delay for the transition.
    return getTransitionStyle(transitions.create(props, { duration: 150, ...options }));
}

export const getAnimationStyle = (animation) => {
    return {
        WebkitAnimation: animation,
        MozAnimation: animation,
        OAnimation: animation,
        MsAnimation: animation,
        animation: animation,
    };
}

export const getSvgStyle = (option, callback) => {
    const isFunc = isFunction(option);
    const { color, style, customKey, selector } = option && !isFunc ? option : {};
    const _selector = selector || (!customKey ? '& path:not([fill*="url"])[fill*="#"]' : `& path[fill="${colors.primary}"]`);
    const cb = isFunc ? option : callback, fill = getColor(color);
    return cb ? cb(_selector) : { [_selector]: { fill, ...style } };
}

export const getColor = (...args) => {
    let id = args[0], opacity = args[1] || 'main';
    if (isArray(args[0])) {
        id = args[0][0];
        opacity = args[0][1] || 'main';
    }
    return getWebTheme().palette[id]?.[opacity] || colors[id] || id;
}

export const getShadowStyle = ({ color, bgColor, gradient, disable, size, custom } = {}, isImportant = false) => {
    if (!color && !custom) return; // shadow ladding pageOMI  BÌNH THƯỜNG :' 0px 15px 45px 0px' '
    let boxShadow = custom || `${size || '0px 15px 45px 0px' /* '0px 4px 16px 0px' */} ${color}`;
    if (isImportant) boxShadow += ' !important';
    let style = { boxShadow: boxShadow, WebkitBoxShadow: boxShadow, MozBoxShadow: boxShadow };
    if (bgColor) {
        if (gradient) {
            let gradientDirection = gradient.direction || 'to bottom';
            style.backgroundImage = `linear-gradient(${gradientDirection}, ${bgColor})`;
        } else {
            style.backgroundColor = bgColor; p
        }
    }
    if (disable) { style.opacity = 0.6; }
    return style;
}


export const scrollToDirection = (ref, options = {}, direction = 'top') => ref && ref.scrollTo({ top: direction === 'top' ? 0 : ref.scrollHeight, left: 0, behavior: 'smooth', ...options });

export const getWrapperStyles = (breakpoints) => ({
    flex: 1,
    padding: '0 24px',
    minWidth: layoutSizes - 24,
    maxWidth: layoutSizes - 24,
    width: '100%',
    height: 'fit-content',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    margin: `0 auto`,
    [breakpoints.down('lg')]: {
        minWidth: '100%',
        maxWidth: '100%',
    },
    [breakpoints.down('sm')]: {
        padding: '0 16px',
    },
});

export const normalizeComponent = (input, props, fallback = null) => {
    if (!input) return fallback;
    const [Comp, options] = isArray(input) ? input : [input];
    const { asFunc } = options || {};
    if (asFunc) return Comp(props);
    return isReactComponent(Comp) ? <Comp {...props} /> : Comp;
}

export const isReactComponent = (component) => component && (isClassComponent(component) || typeof component === 'function' || isExoticComponent(component));
const isClassComponent = (component) => typeof component === 'function' && (() => { const proto = Object.getPrototypeOf(component); return proto.prototype && proto.prototype.isReactComponent })();
const isExoticComponent = (component) =>
    typeof component === 'object'
    && typeof component.$$typeof === 'symbol'
    && (
        ['object', 'function'].includes(typeof component.type)
        ||
        ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description)
    );

export const getTransformStyle = (transform) => {
    return {
        WebkitTransform: transform,
        MsTransform: transform,
        transform: transform,
    };
}

export const invertColor = (color, { contentColor, opacity } = {}) => {
    let _color = getColor(color);
    if (isLinear(_color)) {
        _color = linear2Hex(_color);
    }
    _color = invert(_color, { black: getColor('primary'), white: getColor('white'), threshold: 0.5 });

    if (contentColor) return _color === getColor('primary') ? 'primary' : 'white';
    return opacity ? toRgbA(_color, opacity) : _color;
}

export const linear2Hex = (color) => {
    let _color = color;
    if (isLinear(_color)) {
        _color = _color.split(/#/).map(i => i.replace(/[^\w\s]/gi, '').trim());
        _color = `#${_color[1]}`;
    }
    return _color;
}

export const isLinear = (color) => String(color || '').startsWith('linear');

export const toRgbA = (color, opacity, isImportant) => {
    let _color = getColor(color) || color || '';
    if (isLinear(_color)) _color = linear2Hex(_color);
    _color = getCustomColor(_color);
    let rgba = _color ? muAlpha(_color, opacity) : _color;
    if (isImportant) rgba += ' !important';
    return rgba;
}

export const getCustomColor = color => color && (color.match(/#+\w{3,6}/g) || [])[0] || '';

export const getAnimationColorSvg = (duration = 250) => ({ '& path:not([fill*="url"])[fill*="#"]': { ...getTransitionStyle(getWebTheme().transitions.create('fill', { duration })), } });

