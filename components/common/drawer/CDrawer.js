
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer } from '..';

import { Drawer } from '@mui/material';
import classNames from 'classnames';
import { getClassName } from '@utils/StyleUtils';

const icons = {
    close: require('@assets/icons/common/delete.svg'),
}

const CDrawer = props => {
    const { classes, open, onClose, children, customWidth } = props;
    const dProps = {
        open: open,
        anchor: 'right',
        classes: {
            root: classes.root,
            paper: classNames(classes.paper, getClassName({
                maxWidth: customWidth,
                width: '80% !important',
            }))
        },
        style: { zIndex: 1099 },
        onClose,
    };
    return (
        <Drawer {...dProps}>
            <div className={classes.boxDraw}>
                <div className={classes.boxHeader}>
                    <ImageViewer
                        svg
                        clickable
                        src={icons.close}
                        onClick={dProps.onClose}
                    />
                </div>
                {children}
            </div>
        </Drawer>
    );
}

CDrawer.defaultProps = {
    customWidth: 286,
    onClose: () => null,
};

CDrawer.propTypes = {
    open: PropTypes.bool,
    customWidth: PropTypes.number,
    onClose: PropTypes.func,
};

export default compose(withI18n(), withStyles(styles))(CDrawer);