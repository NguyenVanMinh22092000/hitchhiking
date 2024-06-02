
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

import { BackgroundSection, CButton, CTitle, ImageViewer } from '@components/common';
import JoinProcess from '@components/join-process';

const images = {
    background: require('@assets/images/common/bg_home.png'),
    backgroundSm: require('@assets/images/common/bg_home_sm.png'),
    prize: require('@assets/images/common/bg_prize_01.jpeg'),
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

const remainPrizeDatas = [
    {
        id: random10Str(),
        image: 'car',
        total: 1,
        scale: 1.1,
    },
    {
        id: random10Str(),
        image: 'honda',
        total: 8,
        scale: 1.2,
    },
    {
        id: random10Str(),
        image: 'iphone',
        total: 92,
        scale: 0.8,
    },
    {
        id: random10Str(),
        image: 'voucher',
        total: 10000,
        scale: 0.9,
    },
    {
        id: random10Str(),
        image: 'card',
        total: 200000,
        scale: 0.9,
    },
];

const prizeDatas = [
    {
        id: random10Str(),
        prize: 'pr01',
        turnIn: 2,
        text: 'Activ & Activ Vistra',
    },
    {
        id: random10Str(),
        prize: 'pr02',
        turnIn: 4,
        text: 'POWER1 & POWER1 ULTIMATE',
    }
];

const prizeStructureDatas = [
    {
        id: random10Str(),
        image: 'prs_car',
    },
    {
        id: random10Str(),
        image: 'prs_honda',
    },
    {
        id: random10Str(),
        image: 'prs_iphone',
    },
    {
        id: random10Str(),
        image: 'prs_voucher',
    },
    {
        id: random10Str(),
        image: 'prs_card',
    },
];

const notStartGameConfirmProps = {
    msg: 'winnerCommonConfirmMsg.gameNotStart',
    background: images.background,
    backgroundSm: images.backgroundSm,
}

class HomePage extends Component {

    handleClick = (cType, cValue) => {
        const { router } = this.props;
        switch (cType) {
            case 'joinNow': {
                // if (Math.random() < 0.5) {
                //     router.push('/tham-gia-du-thuong');
                // } else getWebCallback('sdc')('confirm', { ...notStartGameConfirmProps, })

                router.push('/tham-gia-du-thuong');
            } break;
            case '': default: break;
        }
    };


    _renderRemainPrize = () => {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.remainPrize}>
                <Hidden lgUp>
                    <BackgroundSection className={classes.backdrop} src={images.backdrop} />
                </Hidden>
                <div className={classes.cLayout}>
                    <div className={classes.remainPrize}>
                        <Hidden lgDown>
                            <BackgroundSection className={classes.backdrop} src={images.backdrop} />
                        </Hidden>
                        <div className={'content'}>
                            <CTitle color={'white'} label={i18n.t('remainPrize')} />
                            <div className={classes.rpContent}>
                                {remainPrizeDatas.map((item, index) => {
                                    const { id, total, image, scale } = item || {};
                                    return (
                                        <div
                                            key={id}
                                            className={classNames(classes.rpItem, { ['large']: !index })}
                                        >
                                            <div className={classes.rpCountWrapper}>
                                                <div className={classes.rpCount}>
                                                    <div className={classes.rpCountCtn}>
                                                        <b>{(String(formatNumber(total || 0, '0,0')).padStart(2, '0'))}</b>
                                                        <span>{i18n.t('prizeShort')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={'image'}
                                                {...(isNumber(scale) && { style: { transform: `scale(${scale})` } })}
                                            >
                                                <ImageViewer className={'prize'} src={images[image]} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _renderPrizeStructure = () => {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.prStructure}>
                <CTitle label={i18n.t('prizeStructure')} />
                <div className={classes.prsAll}>
                    {prizeStructureDatas.map((item, index) => {
                        const { id, image } = item || {};
                        return (
                            <div key={id} className={classNames(classes.prsItem, { ['large']: !index })}>
                                <ImageViewer
                                    className={'prize-image'}
                                    src={images[image]}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.subPrize}>
                    {prizeDatas.map(item => {
                        const { id, prize, turnIn, text } = item || {};
                        return (
                            <div key={id} className={classes.subPrizeItem}>
                                <div className={'container'}>
                                    <div className={'prize'}>
                                        <ImageViewer
                                            className={'prize-image'}
                                            src={images[prize]}
                                        />
                                    </div>
                                    <div className={classes.subPrizeTurn}>
                                        <span className={'text'}>{text}</span>
                                        <div className={'background'} >
                                            <div />
                                        </div>
                                        <div className={'content'}>
                                            <span className={'title'}>{String(turnIn).padStart(2, '0')}</span>
                                            <span>{i18n.t('participations')}</span>
                                        </div>
                                        <ImageViewer
                                            className={'image'}
                                            src={images.backdropSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
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
                    <div className={classes.joinNow}>
                        <CButton
                            text={i18n.t('joinNow')}
                            onClick={() => this.handleClick('joinNow')}
                        />
                    </div>
                    {this._renderPrizeStructure()}
                    <div className={classes.joinProcess}>
                        <JoinProcess />
                    </div>
                </div>
                {this._renderRemainPrize()}
            </div>
        );
    }
}


export default compose(withI18n(), withStyles(styles))(withRouter(HomePage));