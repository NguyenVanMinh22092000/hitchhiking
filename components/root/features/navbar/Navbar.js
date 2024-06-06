import React, { Component, Fragment } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import { withRouter } from 'next/router';
import withI18n from '@hocs/I18nHocs';

import { setWebCallback } from '@utils/WebUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CDrawer, ImageViewer, WebLogo } from '@components/common';
import { Hidden } from '@mui/material';

import { webMenus } from '@constants/Routes';

const icons = {
    menu: require('@assets/icons/common/menu.svg'),
};

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setWebCallback('pageScroll_navbar', (e) => {

        });
    }

    componentWillUnmount() {
        setWebCallback('pageScroll_navbar');
    }

    handleClick = (cType, cValue) => {
        const { router } = this.props;
        switch (cType) {
            case 'changeRoute': {
                this.setState({ open: false }, () => {
                    router.push(cValue);
                });
            } break;
            case '': default: break;
        }
    }

    _renderDrawer = () => {
        const { open } = this.state;
        const { i18n, classes } = this.props;
        const dProps = {
            open: open,
            onClose: () => this.setState({ open: false }),
        };
        return (
            <CDrawer {...dProps}>
                <div className={classes.drawer}>
                    {webMenus.map(item => {
                        const { id, name, route } = item;
                        return (
                            <div key={id} className={classes.menuItem}>
                                <span onClick={() => this.handleClick('changeRoute', route)}>
                                    {i18n.t(name)}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </CDrawer>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Fragment>
                    <div id={'navbar'} className={classes.wrapper} >
                        <div className={classNames(classes.cLayout, classes.container)}>
                            <div className={classes.mobileMenu}>
                                <Hidden lgDown>
                                    <WebLogo size={75} homePageURL={'/'} />
                                </Hidden>
                                <Hidden lgUp>
                                    <WebLogo size={75} homePageURL={'/'} />
                                </Hidden>
                                <div
                                    className={classes.menuBtn}
                                    onClick={() => this.setState({ open: true })}
                                >
                                    <ImageViewer src={icons.menu} />
                                </div>
                                {this._renderDrawer()}
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Fragment>
        )
    }

}

export default compose(withI18n(), withStyles(styles))(withRouter(Navbar)); 