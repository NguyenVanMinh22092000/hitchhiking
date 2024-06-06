
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CText, ImageViewer } from '..';

import { Drawer } from '@mui/material';
import classNames from 'classnames';
import { getClassName } from '@utils/StyleUtils';

const icons = {
    close: require('@assets/icons/common/delete.svg'),
}

const CuDrawer = props => {
    const { classes, open, onClose, children, title, i18n } = props;
    const dProps = {
        open: open,
        anchor: 'right',
        classes: {
            root: classes.root,
            paper: classNames(classes.paper, getClassName({
                width: '100%',
            }))
        },
        style: { zIndex: 1099 },
        onClose,
    };
    return (
        <Drawer {...dProps}>
            <div className={classes.boxDraw}>
                <div className={classes.boxHeader}>
                    <div>{i18n.t(title) }</div>

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

CuDrawer.defaultProps = {
    customWidth: 286,
    onClose: () => null,
};

CuDrawer.propTypes = {
    open: PropTypes.bool,
    customWidth: PropTypes.number,
    onClose: PropTypes.func,
};

export default compose(withI18n(), withStyles(styles))(CuDrawer);