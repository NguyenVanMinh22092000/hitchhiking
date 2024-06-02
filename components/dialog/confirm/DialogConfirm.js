import React, { Fragment } from 'react';
import classNames from 'classnames';
import { compose } from 'ramda';
import PropTypes from 'prop-types';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { BackgroundSection, CButton, ImageViewer, WebLogo } from '@components/common';

import Dialog from '@mui/material/Dialog';
import withBreakPoints from '@hocs/BreakPointHocs';
import { Hidden } from '@mui/material';

const icons = {
    close: require('@assets/icons/common/ic_close_filled.svg'),
};

const images = {
    backdrop: require('@assets/images/common/bg_green.png'),
    specialPrizeSm: require('@assets/images/common/bg_special_prize_sm.png'),
    specialPrize: require('@assets/images/common/bg_special_prize.png'),

    honda: require('@assets/images/common/bg_prize_honda.png'),
    card: require('@assets/images/common/bg_prize_card.png'),
    voucher: require('@assets/images/common/bg_prize_voucher.png'),
    iphone: require('@assets/images/common/bg_prize_iphone.png'),
};

const prizeDatas = [
    {
        name: '01 Honda SH',
        image: 'honda',
        type: 'big',
        prize: 'Honda SH 160i',
    },
    {
        name: '01 Điện thoại iPhone 14',
        image: 'iphone',
        type: 'big',
        prize: 'iPhone 14 128GB',
    },
    {
        name: '01 Voucher Gotit trị giá 100.000đ',
        image: 'voucher',
        type: 'voucher',
        prize: 'Voucher Gotit 100.000Đ ',
    },
    {
        name: 'Thẻ nạp điện thoại 50.000vnđ',
        image: 'card',
        type: 'card',
        prize: 'Thẻ nạp điện thoại 50.000vnđ',
    },
];

const defaultBannerMsg = 'Theo dõi livestream quay thưởng giải đặc biệt diễn ra tại tiktok.com/@castrol_vn để có cơ hội trúng 1 xe hơi BMW vào 02/02/2024. Liên hệ 1900068665 (1000đ/p) để được tư vấn và hỗ trợ.';

class DialogConfirm extends React.Component {

    constructor(props) {
        super(props);
        this._mounted = true;
    }

    componentDidMount() {
        window.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount() {
        this._mounted = false;
        window.removeEventListener('keypress', this.handleKeyPress);
    }

    handleKeyPress = e => {
        if (this._mounted) {
            let code = e.key || e.keyCode;
            if (['Enter', 13].includes(code)) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onAccept(e);
            }
        }
    }

    _renderWinning = () => {
        const { classes, i18n, } = this.props;
        const { image, name, type, prize } = prizeDatas[Math.floor(Math.random() * prizeDatas.length)];
        return (
            <Fragment>
                <div className={classes.backdrop}>
                    <BackgroundSection className={classes.backdrop} src={images.backdrop} />
                    <ImageViewer className={'prize'} src={images[image]} />
                </div>
                <div className={classes.content}>
                    <div className={classes.congratMsg}>
                        <span>{i18n.t('congratWinningPrizeMsg.first')}</span>
                        <p>{name || '-'}</p>
                    </div>
                    <div className={classes.generator}>
                        <div className={classes.generatorItem}>
                            <span className={'label'}>{i18n.t('luckyCode')}</span>
                            <div className={classes.codeItem}>
                                AS123RHA
                            </div>
                        </div>
                        <div className={classes.generatorItem}>
                            <span className={'label'}>{i18n.t('phoneNumber')}</span>
                            <div className={classes.codeItem}>
                                0909 XXX XXX
                            </div>
                        </div>
                        <div className={classes.generatorItem}>
                            <span className={'label'}>{i18n.t('prize')}</span>
                            <div className={classes.codeItem}>
                                <span>
                                    {prize || '-'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className={classes.noteMsg}>
                        {i18n.t(`congratMsgPrize.${type}`, { name })}
                    </span>
                </div>
            </Fragment>
        );
    }


    _renderConfirm = () => {
        const { i18n, classes, msg } = this.props;
        return (
            <Fragment>
                <div className={classes.failureWrapper}>
                    <WebLogo size={34} />
                    <span dangerouslySetInnerHTML={{ __html: i18n.t(msg) }} />
                </div>
            </Fragment>
        );
    }

    render() {
        const { classes, i18n, confirm, background, backgroundSm, bannerMsg, noCloseClickOver, acceptLbl } = this.props;
        return (
            <Dialog
                open
                {...{
                    maxWidth: 'sm',
                    fullWidth: false,
                    classes: {
                        paper: classes.paper,
                        scrollPaper: classes.scrollPaper,
                    },
                    // onClose: () => !noCloseClickOver && this.props.onClose()
                }}
            >
                <div className={classNames(classes.wrapper, 'scrollable-y')}>
                    <div className={classes.container}>
                        <div className={classes.closeBtn}>
                            <ImageViewer
                                className={'close'}
                                svg={{ color: confirm ? 'priamry' : 'white' }}
                                src={icons.close}
                                onClick={this.props.onClose}
                            />
                        </div>
                        {confirm ? this._renderConfirm() : this._renderWinning()}
                        <div className={classNames(classes.specialPrize, { ['custom']: !!background || !!backgroundSm })}>
                            <div className={'imageWrapper'}>
                                <Hidden smDown>
                                    <BackgroundSection className={'image'} src={background || images.specialPrize} />
                                </Hidden>
                                <Hidden smUp>
                                    <BackgroundSection className={'image'} src={backgroundSm || images.specialPrizeSm} />
                                </Hidden>
                            </div>
                            <div className={'content'}>
                                <span>{bannerMsg || defaultBannerMsg}</span>
                            </div>
                        </div>
                        <div className={classes.footer}>
                            <CButton
                                text={acceptLbl || i18n.t('OK')}
                                onClick={this.props.onClose}
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }
}

DialogConfirm.propTypes = {
    msg: PropTypes.string,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
};

DialogConfirm.defaultProps = {
    msg: '',
};

export default compose(withI18n('winner'), withStyles(styles), withBreakPoints())(DialogConfirm);