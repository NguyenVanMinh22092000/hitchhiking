import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const CButton = props => {
    const { classes, className, color, size, text, onClick, } = props;

    const wrapperProps = {
        className: classNames(classes.wrapper, size, color, className),
        onClick,
    };

    return (
        <div {...wrapperProps}>
            <div className={classNames(classes.background, color, 'shadow')} />
            <div className={classNames(classes.background, color)} />
            <div className={classes.container}>
                {!!text && <p className={classes.text}>{text}</p>}
            </div>
        </div>
    )

}

CButton.defaultProps = {
    size: 'medium',
    color: 'error',
    target: '',
    onClick: () => null,
};

CButton.propTypes = {
    text: PropTypes.any,
    color: PropTypes.string, // error | white
    size: PropTypes.any, // 'small' | 'medium' | 'large' | 'extra' | Number | String
    onClick: PropTypes.func,
    
};

export default withStyles(styles)(CButton);