
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { textTransform } from '@utils/StringUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer } from '..';
import { Hidden } from '@mui/material';

const icons = {
    line: require('@assets/images/common/bg_line.svg'),
    line: require('@assets/images/common/bg_line_lg.svg'),
};

const CTitle = (props) => {
    const { classes, label, className, color } = props;
    return (
        <div className={classNames(classes.wrapper, className)}>
            <div className={classNames(classes.label, color)}>
                <span> {textTransform('u', label)} </span>
            </div>
            {/* <Hidden lgUp> */}
                {/* <ImageViewer src={icons.line} width={'auto'} height={4} /> */}
            {/* </Hidden> */}
            {/* <Hidden lgDown> */}
                {/* <ImageViewer src={icons.line} width={'auto'} height={6} /> */}
            {/* </Hidden> */}
        </div>
    );
}

CTitle.defaultProps = {
    label: '',
    color: 'success',
};

CTitle.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.any,
};

export default compose(withI18n(), withStyles(styles))(CTitle);