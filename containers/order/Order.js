import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';
import { withRouter } from 'next/router';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';
import {  CTitle, CuDrawer, ImageViewer, SearchBar } from '@components/common';
import { random10Str } from '@utils/StringUtils';
import { Hidden, TextField } from '@mui/material';

const icon = {
    square: require('@assets/icons/common/square.png'),
}

const addresses = [
    { id: random10Str(), text: 'pickupAddress', value: 'searchPickupAddress' },
    { id: random10Str(), text: 'dropOffAddress', value: 'searchDropOffAddress' }
]

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
        };
    }

    handleOnClick = () => {
        this.setState({open: true})
    }

    
    componentDidMount() {
        // setWebCallback('pageScroll_navbar', (e) => {

        // });
    }

    componentWillUnmount() {
        // setWebCallback('pageScroll_navbar');
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
            title:addresses[0].text
        };
        return (
            <CuDrawer {...dProps} >
                <div className={classes.body}>
                    <div>
                        <input />
                    </div>
                </div>
            </CuDrawer>
        );
    }

    _renderAddresses = () => {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.address}>
                {addresses.map((item) => {
                    const { id, text, value } = item || {};
                    return (
                        <div key={id} className={classes.subAddress}>
                            <div className={classes.addressImage}  >
                                <Hidden lgUp>
                                    <ImageViewer src={icon.square} width={'auto'} height={20} />
                                </Hidden>
                                <Hidden lgDown>
                                    <ImageViewer src={icon.square} width={'auto'} height={30} />
                                </Hidden>
                            </div>
                            <div className={classes.addressBox} onClick={ ()=> this.handleOnClick()}>
                                <div>
                                    {i18n.t(text)}
                                </div>
                                <div className={classes.addressValue}>
                                    {i18n.t(value)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classNames(classes.cLayout, classes.content)}>
                    <div className={classes.header}>
                        <CTitle label={i18n.t('book')} />
                    </div>
                    <div className={classes.body}>
                        {this._renderAddresses()}
                    </div>
                </div>
                {this._renderDrawer()}  
            </div>
        );
    }
}

export default compose(withI18n(), withStyles(styles))(withRouter(Order));
