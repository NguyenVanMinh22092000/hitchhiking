
import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import { withRouter } from 'next/router';
import withI18n from '@hocs/I18nHocs';

import { formatNumber, random10Str } from '@utils/StringUtils';
import { getWebCallback, showImagePreviews } from '@utils/WebUtils';
import { isNumber } from '@utils/Utils';

import { withStyles, } from '@mui/styles';
import { styles } from './styles';

import { Hidden } from '@mui/material';

import { BackgroundSection, ImageViewer } from '@components/common';

const images = {
    background: require('@assets/images/common/home_bg.png'),
    moto: require('@assets/icons/common/moto.png'),
    pickup: require('@assets/icons/common/pickup.png'),
    backdrop: require('@assets/images/common/bg_green.png'),
    backdropSquare: require('@assets/images/common/bg_green_square.png'),

    pr01: require('@assets/images/common/pr_01.png'),
    pr02: require('@assets/images/common/pr_02.png'),

    car: require('@assets/images/common/bg_prize_car.png'),
    honda: require('@assets/images/common/bg_prize_honda.png'),
    card: require('@assets/images/common/bg_prize_card.png'),
    voucher: require('@assets/images/common/bg_prize_voucher.png'),
    iphone: require('@assets/images/common/bg_prize_iphone.png'),

    prs_car: require('@assets/images/common/prs_car.jpeg'),
    prs_honda: require('@assets/images/common/prs_honda.png'),
    prs_iphone: require('@assets/images/common/prs_iphone.png'),
    prs_voucher: require('@assets/images/common/prs_voucher.png'),
    prs_card: require('@assets/images/common/prs_card.png'),
};



const options = [
    { id: random10Str(), text: 'book', src: images.moto },
    { id: random10Str(), text: 'pickup', src: images.pickup },
];

class HomePage extends Component {

    handleClick = (cType, cValue) => {
        const { router } = this.props;
        switch (cType) {
            case 'joinNow': {
                router.push('/order');
            } break;
            case '': default: break;
        }
    };



    _renderOptions = () => {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.option}>
                {options.map((item) => {
                    const { id, text, src } = item || {};
                    return (
                        <div key={id} className={classes.subOption}>
                            <div  className={classes.optionImage} onClick={ () => this.handleClick('joinNow', 'sb')} >
                                <ImageViewer src={src} size={50} />
                            </div>
                            <div>
                                {i18n.t(text)}
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
                <Hidden lgUp>
                    <BackgroundSection src={images.background} />
                </Hidden>
                <div className={classNames(classes.cLayout, classes.content)}>
                    <Hidden lgDown>
                        <BackgroundSection src={images.background} />
                    </Hidden>
                    {this._renderOptions()}
                </div>
            </div>
        );
    }
}


export default compose(withI18n(), withStyles(styles))(withRouter(HomePage));