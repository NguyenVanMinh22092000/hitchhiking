import React, { Fragment } from 'react';

import { styles } from './styles';
import { withStyles } from '@mui/styles';

import { ImageViewer } from '@components/common';

const SpinkitIcon = require('public/static/videos/spinkit.gif').default;

const OverlaySpinkit = ({ classes, isStatic }) => {
    let spinkitNode = <ImageViewer size={160} src={SpinkitIcon} />;
    if (isStatic) return spinkitNode;
    return (
        <Fragment>
            <div id={'overlay-spinkit'} className={classes.wrapper}>
                <div className={classes.circleLogo}>
                    {spinkitNode}
                </div>
            </div>
        </Fragment>
    );
};

export default withStyles(styles)(OverlaySpinkit);