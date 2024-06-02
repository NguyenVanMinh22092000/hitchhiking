import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { Popper, ClickAwayListener } from '@mui/material';

class CPopper extends Component {

    render() {
        const { classes, open, noShadow, noMaxWidth, noAlign, anchorEl, placement, Comp, cClasses, style, baseStyle, className, isClickAway } = this.props;
        if (!open) return null;
        const baseClasses = classNames(classes.wrapper, cClasses, {
            [classes.baseAlign]: !noAlign,
            [classes.maxWith]: !noMaxWidth,
            [classes.shadow]: !noShadow,
        });
        const popperProps = {
            className,
            anchorEl, placement,
            style: { zIndex: 9999, ...style },
        };
        const contentNode = (
            <div className={baseClasses} style={baseStyle}>
                {Comp || this.props.children}
            </div>
        );
        return (
            <Popper {...popperProps} open>
                {isClickAway
                    ?
                    <ClickAwayListener onClickAway={this.props.onClose}>
                        {contentNode}
                    </ClickAwayListener>
                    :
                    contentNode
                }
            </Popper>
        );
    }
}

CPopper.propTypes = {
    Comp: PropTypes.any,
    open: PropTypes.bool,
    placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    anchorEl: PropTypes.any,
    cClasses: PropTypes.any,
    className: PropTypes.any,
    style: PropTypes.any,
    noShadow: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    onClose: PropTypes.func,
    offset: PropTypes.any,
    flip: PropTypes.bool,
    modifiers: PropTypes.any,
};

CPopper.defaultProps = {
    anchorEl: null,
    isClickAway: true,
    placement: 'bottom-start',
    onClose: () => null,
};

export default withStyles(styles)(CPopper);