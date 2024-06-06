import React, { Fragment } from 'react';
import classNames from 'classnames';

import { withRouter } from 'next/router';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer, Tooltip, CLink } from '@components/common';
import { routes } from '@constants/Routes';

const logos = {
    main: require('@assets/images/logo/hitchhiking-logo.png'),
    white: require('@assets/images/logo/lg_castrol_white.svg'),
}


const WebLogo = ({ classes, router, size, type = 'main', style, className, tooltip, homePageURL, forceReRender }) => {
    let containerNode;

    let contentNode = (
        <Fragment>
            <ImageViewer
                useRatio={'width'}
                src={logos[type]}
                style={{ height: size, }}
            />
        </Fragment>
    );

    let wrapperProps = {
        id: `web-logo-${type}`,
        style: { ...style, gap: 0.25 * size },
        className: classNames(classes.wrapper, className),
    };

    if (homePageURL) {
        containerNode = (
            <CLink
                href={homePageURL} {...wrapperProps}
                onClick={e => {
                    e.preventDefault();
                    router.push(homePageURL);
                }}
            >
                {contentNode}
            </CLink>
        )
    } else {
        containerNode = (
            <div {...wrapperProps}>
                {contentNode}
            </div>
        )
    }

    return (
        <Tooltip {...(tooltip && { title: tooltip })}>
            {containerNode}
        </Tooltip>
    )

};

export default withStyles(styles)(withRouter(WebLogo));