import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import { isNumber, isString } from '@utils/Utils';
import { getSvgStyle, getClassName, getColor } from '@utils/StyleUtils';
import { getHTMLAttributes, randomId } from '@utils/StringUtils';
import { getImageSize } from '@utils/FileUtils';

import { cStyles } from '@styles/theme';

import ImgDefaultError from '@assets/images/common/img_error.png';

const getSRC = src => src ? (src.default || String(src)) : '';

class ImageViewer extends Component {

    constructor(props) {
        super(props);
        const { src, useRatio } = props;
        this.state = {
            src,
            renderId: randomId(),
            renderReady: !src || (src && !useRatio),
        };
        this._mounted = true;
    }

    componentDidMount() {
        this.handleGetExpectSize();
    }

    componentDidUpdate(prevProps) {
        const { src, useRatio } = this.props;
        if (src !== prevProps.src) {
            this.injectFailed = false;
            this.setState({
                src,
                isError: false,
                isReRender: true,
                renderReady: !src || (src && !useRatio),
            }, () => {
                this.handleGetExpectSize();
                this.setState({ isReRender: false });
            });
        }
    }

    componentWillUnmount() { this._mounted = false; }

    handleError = () => {
        const { isError } = this.state;
        const { fallbackSrc } = this.props;
        if (!isError) {
            this.props.onError?.();
            this._mounted && this.setState({ src: fallbackSrc || ImgDefaultError, isError: true });
        }
    }

    handleGetExpectSize = () => {
        const { useRatio, src: _src } = this.props;
        let src = getSRC(_src);
        if (src && useRatio) {
            getImageSize(src).then(sizes => {
                if (!this._mounted) return;
                const { width: actualWidth, height: actualHeight } = sizes;
                const { size, width, height, style } = this.props;
                let expectWidth = size ?? width ?? style?.width;
                let expectHeight = size ?? height ?? style?.height;
                switch (useRatio) {
                    case 'width':
                        expectWidth = actualWidth * Number(expectHeight) / actualHeight;
                        break;
                    case 'height':
                        expectHeight = actualHeight * Number(expectWidth) / actualWidth;
                        break;
                    default: break;
                }
                if (isNaN(expectWidth)) expectWidth = null;
                if (isNaN(expectHeight)) expectHeight = null;
                this.setState({
                    renderReady: true,
                    expectWidth,
                    expectHeight,
                });
            })
        }
    }

    handleBeforeInjection = svgNode => {
        const { renderId } = this.state;
        const { id, gradient, color } = this.props.svg;
        let _gradient = gradient;
        if ((color || '').includes('gradient')) {
            let gradientAngles = {
                'to bottom': { x2: '0', y2: '1' },
                'to bottom right': { x1: '.5', x2: '.5', y2: '1' },
            };
            _gradient = {
                ...gradientAngles[color.split(/[(,]/)[1]],
                colors: color.match(/#+\w{3,6}/g)
            };
        }
        if (_gradient) {
            let pathNode = svgNode.querySelector('path[fill*="#"]');
            if (pathNode) {
                let { colors = [], x1 = '0', y1 = '0', x2 = '1', y2 = '1' } = _gradient;
                let gradientId = `svg${id || renderId}`;
                let stopColorsHtml = colors.map((color, index) => {
                    if (isString(color)) { color = [color]; }
                    let [stopColor, attributes] = color;
                    return `<stop ${getHTMLAttributes({ offset: index, 'stop-color': stopColor, ...attributes })} />`;
                }).join('');
                let gradientHtml = `<defs><linearGradient ${getHTMLAttributes({ id: gradientId, x1, y1, x2, y2 })}>${stopColorsHtml}</linearGradient></defs>`;
                svgNode.insertAdjacentHTML('afterbegin', gradientHtml);
                pathNode.setAttribute('fill', `url(#${gradientId})`);
            }
        }
        return svgNode.setAttribute('style', 'height:100%');
    }

    handleAfterInjection = err => {
        if (err && this._mounted && !this.injectFailed) {
            this.injectFailed = true;
            this.setState({ reRender: true });
        }
    }

    render() {
        const {
            isError, isReRender,
            src: _src,
            renderReady, expectWidth, expectHeight,
        } = this.state;
        let src = getSRC(_src);
        const {
            id, svg, size, width, height, bgImg, color, style, circle, minimum, disable, softDisabled, overflow, lazyload, fallbackSrc,
            draggable, clickable, className, selectable, resizeMode, attributes, rotate, crossOrigin, customKey, isCircle, alt,
            onClick, onError, onMouseOver, onMouseLeave, onMouseDown, objectPosition,
        } = this.props;

        if (!renderReady) return null;

        const _style = style || {};
        const isFunc = typeof onClick === 'function';
        const isHandleError = !!(lazyload || fallbackSrc || onError);
        const imgSize = size ? (isNumber(size) ? size + 'px' : size) : 20;
        const imgCursor = (disable || softDisabled) ? 'not-allowed' : ((clickable || isFunc) ? 'pointer' : (draggable ? 'grab' : 'default'));
        const imgConstraint = {
            width: expectWidth ?? width ?? imgSize,
            height: expectHeight ?? height ?? imgSize,
        };
        const baseClass = getClassName({
            objectFit: resizeMode,
            '&>div': { display: 'flex', height: '100%' },
            ...imgConstraint,
            ...(circle && { borderRadius: '50%' }),
            ...(!selectable && cStyles.noneUserSelect),
            ...(imgCursor !== 'default' && { cursor: imgCursor }),
            ...(disable && { opacity: 0.5 }),
            ...(minimum && {
                minWidth: expectWidth ?? width ?? imgSize,
            }),
            ...(overflow && { position: 'absolute' }),
            ...(isNumber(rotate) && { transform: `rotate(${rotate}deg)` }),
            ...(objectPosition && { objectPosition }),
        });
        const imgProps = {
            draggable, crossOrigin,
            onMouseOver, onMouseLeave, onMouseDown,
            className: classNames(baseClass, className),
            onClick: (e) => !(disable || softDisabled) && isFunc && onClick(e),
            ref: this.props.onRef,
            ...(isError && isHandleError && { 'origin-src': src }),
            ...(id && { id }),
            ...imgConstraint,
        };
        if (isReRender) return null;
        if (bgImg) {
            imgProps.style = {
                backgroundImage: 'url(' + src + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: resizeMode,
                ..._style,
            };
            return <div {...imgProps}>{this.props.children}</div>;
        }
        if (svg) {
            if (color || svg.color) imgProps.className = classNames(baseClass, className, getClassName(getSvgStyle({ ...svg, customKey, color: getColor(color || svg.color) })));
            imgProps.beforeInjection = this.handleBeforeInjection;
            imgProps.afterInjection = this.handleAfterInjection;
            return <ReactSVG {...{ ...imgProps, ...svg, src, style: _style }} />;
        }
        if (isHandleError) imgProps.onError = this.handleError;
        if (isCircle) _style.borderRadius = '50%';
        return <img alt={alt || ''} {...{ ...imgProps, src, style: _style, ...attributes }} />;
    }

}

ImageViewer.propTypes = {
    id: PropTypes.any,
    src: PropTypes.any,
    fallbackSrc: PropTypes.any,
    className: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    size: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any,
    clickable: PropTypes.bool,
    draggable: PropTypes.bool,
    disable: PropTypes.bool,
    softDisabled: PropTypes.bool,
    circle: PropTypes.bool,
    lazyload: PropTypes.bool,
    bgImg: PropTypes.bool,
    minimum: PropTypes.bool,
    selectable: PropTypes.bool, // not disbale userSelect css;
    svg: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), // https://github.com/tanem/react-svg/tree/master/examples/external-stylesheet
    attributes: PropTypes.any,
    rotate: PropTypes.number,
    isCircle: PropTypes.bool,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    objectPosition: PropTypes.string,
};

ImageViewer.defaultProps = {
    src: '',
    draggable: false,
    resizeMode: 'cover',
    onRef: () => null,
};

export default memo(ImageViewer);