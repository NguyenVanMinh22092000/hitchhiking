import React, { Component } from 'react';
import classNames from 'classnames';

import { withRouter } from 'next/router';

import { i18nText } from '@libs/i18n';

import { getColor } from '@utils/StyleUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer } from '@components/common';

const images = {
    notFound: require('@assets/images/auth/img_auth_force_login.svg'),
};

class ErrorPage extends Component {

    constructor(props) {
        super(props);
    }

    handleReloadPage = () => {
        const { router } = this.props;
        if (this.route === '/404') {
            router.back();
        } else {
            const { pathname, search } = window.location;
            router.replace(pathname + search);
        }
    }

    render() {
        const { classes, type = '404', isLayout = false } = this.props;
        return (
            <div className={classNames(classes.wrapperLayout, { 'layout': isLayout })} style={{ background: getColor('white') }}>
                <div className={classes.wrapper}>
                    <div className={classes.content}>
                        <ImageViewer src={images.notFound} style={{ backgroundPosition: 'left' }} width='330px' height='240px' resizeMode='contain' />
                        <div>
                            <p>Hmmm...</p>
                            <p>{i18nText('err.404')}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(withRouter(ErrorPage));