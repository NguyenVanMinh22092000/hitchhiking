
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer } from '..';

const BackgroundSection = (props) => {
    const { src, classes, className, style, imgProps, imageClassName } = props;

    return (
        <div
            className={classNames(classes.wrapper, className)}
            style={style}
        >
            <ImageViewer
                className={classNames(classes.image, imageClassName)}
                src={src}
                {...imgProps}
            />
        </div>
    );
}

BackgroundSection.defaultProps = {
    bgPos: 'top',
};

BackgroundSection.propTypes = {
    bgPos: PropTypes.string,
    className: PropTypes.any,
    background: PropTypes.any,
    style: PropTypes.any,
    src: PropTypes.any,
};

export default withStyles(styles)(BackgroundSection);