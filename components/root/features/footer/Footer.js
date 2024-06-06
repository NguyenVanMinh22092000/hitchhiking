
import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CLink, CText, ImageViewer, WebLogo } from '@components/common';
import { Hidden } from '@mui/material';

const icons = {
    address: require('@assets/icons/common/address.svg'),
    phone: require('@assets/icons/common/phone.svg'),
    facebook: require('@assets/icons/common/facebook.svg'),
    tiktok: require('@assets/icons/common/tiktok.svg'),
};

const images = {
    certifications: require('@assets/images/logo/lg_certifications.png'),
};

const social = [
    { id: 'facebook', link: 'https://www.facebook.com/vanminhok12/' },
    { id: 'tiktok', link: 'https://www.facebook.com/vanminhok12/' },
];

const defaultDatas = {
    shortDesc: 'Công ty TNHH CIVILTECH',
    phone: 'aaaaaaaaa',
    address: '',
};

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    _renderPhoneText = (text) => {
        return <b style={{ cursor: 'pointer' }} onClick={() => window.open(`tel:${text}`)}>{text}</b>
    }

    render() {
        const { i18n, classes, className } = this.props;
        const wrapperProps = {
            className: classNames(classes.wrapper, className),
        };
        return (
            <div id={'layout-footer'} {...wrapperProps}>
                <div className={classes.cLayout} >
                    <div className={classes.container}>
                        <div className={classes.left}>
                            <Hidden lgDown>
                                <WebLogo type={'white'} size={44} />
                            </Hidden>
                            <Hidden lgUp>
                                <WebLogo type={'white'} size={26} />
                            </Hidden>
                            <div className={classes.detailInfo}>
                                <span className={'description'}>{defaultDatas.shortDesc}</span>
                                <div className={classes.info}>
                                    <div className={classes.infoItem}>
                                        <ImageViewer src={icons.address} width={17} height={23} />
                                        <span>Địa chỉ: 51 Đường số 2, Hiệp Bình Phước, TP.Thủ Đức.</span>
                                    </div>
                                    <div className={classes.infoItem}>
                                        <ImageViewer src={icons.phone} />
                                        <span>
                                            {`Số điện thoại: `}
                                            {this._renderPhoneText('0987848374')}
                                            {' hoặc '}
                                            {this._renderPhoneText('+63 9535530920')}
                                            {' để được giải đáp'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.contactUs}>
                                <CText
                                    size={'medium'}
                                    color={'white'}
                                    text={'Connect with us'}
                                />
                                <div className={classes.contactUsSocial}  >
                                    {social.map(item => {
                                        const { id, link } = item || {};
                                        return (
                                            <CLink href={link}>
                                            <ImageViewer
                                                key={id}
                                                clickable
                                                src={icons[id]}
                                                width={32}
                                                height={33}
                                            />
                                            </CLink>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default compose(withI18n(), withStyles(styles))(Footer);