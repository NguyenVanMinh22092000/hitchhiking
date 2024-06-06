import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getWebCallback, getWebData, setWebData } from '@utils/WebUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { Navbar, Footer } from '@components/root/features';

const CLayout = (props) => {
    const { classes, children, footerProps, bgColor } = props;

    const [isReRender, setReRender] = useState();

    useEffect(() => {
        isReRender && setReRender(false);
    }, [isReRender]);

    useEffect(() => {
        setTimeout(() => {
            getWebCallback('scrollPageToViewId')(getWebData('scrollPageToId'));
            setWebData('scrollPageToId');
        }, 500);

    }, []);

    let wrapperProps = {
        id: 'layout-wrapper',
        className: classNames(classes.wrapper, bgColor || ''),
    };
    let containerProps = {
        id: 'layout-container',
        className: classes.container,
    };

    return (
        <div {...wrapperProps}>
            <Navbar />
            <div {...containerProps}>
                {children}
            </div>
            {/* <Footer {...footerProps} /> */}
        </div>
    );

};

CLayout.defaultProps = {
};

CLayout.propTypes = {
    bgColor: PropTypes.any,
};

export default withStyles(styles)(CLayout);