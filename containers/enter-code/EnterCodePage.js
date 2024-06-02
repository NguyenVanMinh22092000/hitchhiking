import React, { Component, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';
import withBreakPoints from '@hocs/BreakPointHocs';

import { apiDrawVerify, apiLuckyDraw } from '@services/apis/draw/DrawAPIsUtils';

import { getTelProviderId, padStartNumber, textTransform, trimStr } from '@utils/StringUtils';
import { getWebCallback, toggleOverlaySpinkit } from '@utils/WebUtils';
import { isNumber, removeViChar } from '@utils/Utils';
import { getApiErrorMsg } from '@utils/ApiUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { BackgroundSection, CButton, CSelect, CTitle, ImageViewer, RatioView, TextInput, VideoViewer } from '@components/common';
import { Hidden } from '@mui/material';

import { provinceOptions } from '@constants/Configs';

const icons = {
    checked: require('@assets/icons/common/checked.svg'),
};

const images = {
    background: require('@assets/images/common/bg_enter_code.png'),
    backdrop: require('@assets/images/common/bg_green.png'),
    smallPath: require('@assets/images/common/bg_small_path.png').default,
};

const videos = {
    roll: require('public/static/videos/Castrol_16x9.mp4').default,
    rollSm: require('public/static/videos/Castrol_4x5.mp4').default,
};

const defaultStepState = {
    code: '',
    phoneNumber: '',
    agreeRule: true,
    agreeSendNoti: true,

    otp: '',
    canResendOtp: false,

    fullName: '',
    address: null,
}

const TimeNotify = ({ duration, onEnd = () => null } = {}) => {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let timer = duration, minutes, seconds;
        const triggerTimer = () => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            if (--timer < 0) {
                clearInterval(intervalId);
                onEnd();
            }
            setDisplay(minutes + ':' + seconds);
        };
        triggerTimer();
        const intervalId = setInterval(() => triggerTimer(), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span style={{ fontWeight: 700 }} >
            {display}
        </span>
    )
}

class EnterCodePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            renderReady: false,
            errors: {},
            step: 1,
            ...defaultStepState,
        };
        this._refs = {};
        this._mounted = true;
    }

    initRef = id => ref => this._refs[id] = ref;

    handleCommonChange = id => (value, oState) => {
        const { errors } = this.state;
        delete errors[id];
        this.setState({ [id]: value, errors, ...oState });
    }

    handleChangTab = async (newTab) => {
        const { code, phoneNumber, agreeRule, agreeSendNoti, token, otp, fullName, address } = this.state;
        const { i18n, breakpoints } = this.props;
        const errors = {};
        switch (newTab) {
            case 2: {
                if (!trimStr(code) || !trimStr(phoneNumber)) {
                    getWebCallback('sdc')('confirm', { msg: i18n.t('missingData') });
                    return;
                }
                // if (!agreeRule || !agreeSendNoti) {
                //     getWebCallback('sdc')('confirm', { msg: i18n.t('plsAgreeConditionToPlay') });
                //     return;
                // }

                // if (trimStr(code).length < 9) {
                //     getWebCallback('sdc')('confirm', { msg: i18n.t('fieldInvalid', { name: i18n.t('prizeCode') }) });
                //     return;
                // }

                if (!getTelProviderId(phoneNumber)) {
                    getWebCallback('sdc')('confirm', { msg: i18n.t('invalidPhone') });
                    return;
                }

                const { payLoad, error } = await apiDrawVerify(['send', { phone: phoneNumber, code }], { delay: 500, loading: true });

                if (payLoad) {
                    this.handleCommonChange('step')(newTab, { otp: '', canResendOtp: false, token: null });
                    if (breakpoints.down('md')) window.scrollTo({ top: 0, behavior: 'instant' });
                } else {
                    getWebCallback('sdc')('confirm', { msg: getApiErrorMsg(error), });
                }
            } break;
            case 3: {
                if (!trimStr(otp)) {
                    getWebCallback('sdc')('confirm', { msg: i18n.t('missingData') });
                    return;
                }

                const { payLoad, error } = await apiDrawVerify(['verify', { phone: phoneNumber, code, otp }], { delay: 500, loading: true });

                if (payLoad) {
                    this.handleCommonChange('step')(newTab, { token: payLoad, fullName: '', address: null, });
                    if (breakpoints.down('md')) window.scrollTo({ top: 0, behavior: 'instant' });
                } else {
                    getWebCallback('sdc')('confirm', { msg: getApiErrorMsg(error), });
                }
            } break;
            case 4: {
                if (!trimStr(fullName) || !address) {
                    getWebCallback('sdc')('confirm', { msg: i18n.t('missingData') });
                    return;
                }
                const { payLoad, error } = await apiDrawVerify(['create', { fullname: trimStr(fullName), address: (address || {}).label, token }], { delay: 500, loading: true });

                if (payLoad) {
                    const { totalSpins, totalUsed } = payLoad;
                    this.handleCommonChange('step')(newTab, { fullName: '', address: null, availableSpins: Number(totalSpins || 0) - Number(totalUsed || 0) });
                    if (breakpoints.down('md')) window.scrollTo({ top: 0, behavior: 'instant' });
                } else {
                    getWebCallback('sdc')('confirm', { msg: getApiErrorMsg(error), });
                }
            } break;
            default: break;
        }
    }

    handleActionRace = (cType) => async (cValue) => {
        const { step, token } = this.state;
        const { i18n, breakpoints } = this.props;
        const timeReset = breakpoints.down('md') ? 1.7 : 1.8;
        switch (cType) {
            case 'begin': {
                if (this.racing || !token) return;
                toggleOverlaySpinkit(true);
                const { payLoad, error } = await apiLuckyDraw({ token }, { delay: 500, loading: true });
                if (payLoad) {
                    this.racingTime = 0;
                    this.racing = true;
                    this._refs.video.currentTime = 2;
                    this.showPrize = false;
                    if (breakpoints.down('md')) window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    getWebCallback('sdc')('confirm', { msg: getApiErrorMsg(error), });
                }
            } break;
            case 'end': {
                if (!this.racing) return;
                this.racing = false;
                const closeDialog = onClose => {
                    onClose();
                    this.showPrize = false;
                }
                getWebCallback('sdc')('animation', {
                    onClose: () => {
                        getWebCallback('sdc')('winner', {
                            noCloseClickOver: true,
                            onAccept: closeDialog,
                        });
                    }
                });
                this.showPrize = true;
            } break;
            case 'update': {
                if (this._refs.video) {
                    if (this._refs.video.currentTime >= timeReset && ((!this.showPrize && !this.racing) || step !== 4)) {
                        this._refs.video.currentTime = 0;
                        return;
                    }
                    this.racingTime = this._refs.video.currentTime;
                    if (this.racingTime >= 8.8) {
                        this.handleActionRace('end')();
                    }
                }
            } break;
            case 'init': {
                if (cValue) {
                    this.initRef('video')(cValue);
                    if (isNumber(this.racingTime) && !!this.racingTime && this._refs.video) {
                        this._refs.video.currentTime = this.racingTime;
                    }
                }
            } break;
            default: {
                if (this._refs.video) {
                    if (!this._refs.video.playing) this._refs.video.play();
                    if (this._refs.video.currentTime >= timeReset && !this.racing) {
                        this._refs.video.currentTime = 0;
                        return;
                    }
                }
            } break;
        }
    }

    _renderTickMsg = (label, targetId) => {
        const { [targetId]: data } = this.state;
        const { i18n, classes } = this.props;
        return (
            <div
                className={classes.acceptPolicy}
                onClick={() => this.handleCommonChange(targetId)(!data)}
            >
                {!!data ? (
                    <ImageViewer
                        svg
                        src={icons.checked}
                        size={27}
                    />
                ) : <div className={classes.uncheckIcon} />}
                <span>{i18n.t(label)}</span>
            </div>
        );
    }

    _renderStep = () => {
        const { step, code, fullName, otp, address, errors, canResendOtp, phoneNumber, availableSpins } = this.state;
        const { i18n, classes } = this.props;
        let Comp;
        switch (step) {
            case 1: {
                Comp = (
                    <div id={'enter_code_content'} className={classes.content}>
                        <CTitle className={classes.title} label={i18n.t('enterPrizeCode')} />
                        <div className={classes.inputFields}>
                            <TextInput
                                autoFocus
                                regex={'[A-Za-z0-9]'}
                                maxLength={9}
                                inputRef={this.initRef('code')}
                                isError={!!errors.code}
                                label={errors.code || i18n.t('prizeCode')}
                                plh={errors.code || i18n.t('prizeCode')}
                                value={code}
                                onChangeText={(text) => this.handleCommonChange('code')(textTransform('u', removeViChar(text)))}
                            />
                            <TextInput
                                inputRef={this.initRef('phoneNumber')}
                                typeInput={'phone'}
                                isError={!!errors.phoneNumber}
                                label={errors.phoneNumber || i18n.t('phoneNumber')}
                                plh={errors.phoneNumber || i18n.t('phoneNumber')}
                                value={phoneNumber}
                                onChangeText={this.handleCommonChange('phoneNumber')}
                            />

                        </div>
                        <div className={classes.agreeMsg}>
                            {this._renderTickMsg('agreeJoinEnterCodeMsg.1', 'agreeRule')}
                            {this._renderTickMsg('agreeJoinEnterCodeMsg.2', 'agreeSendNoti')}
                        </div>
                        <CButton
                            className={classes.joinNow}
                            text={i18n.t('joinNow')}
                            onClick={() => this.handleChangTab(2)}
                        />
                    </div>
                );
            } break;
            case 2: {
                Comp = (
                    <div id={'enter_code_content'} className={classes.content}>
                        <CTitle className={classes.title} label={i18n.t('verifyOTP')} />
                        <span className={classes.otpMsg}>{i18n.t('otpWillBeSent2YourPhone')}</span>
                        <div className={classes.verify}>
                            <TextInput
                                autoFocus
                                maxLength={6}
                                typeInput={'phone'}
                                inputRef={this.initRef('otp')}
                                isError={!!errors.otp}
                                label={errors.otp || i18n.t('otpCode')}
                                plh={errors.otp || i18n.t('otpCode')}
                                value={otp}
                                onChangeText={this.handleCommonChange('otp')}
                            />
                        </div>
                        <div className={classes.countDown}>
                            {!canResendOtp && (
                                <div>
                                    <span>{`${i18n.t('time2ResendOtp')}: `}</span>
                                    <TimeNotify
                                        duration={60 * 5}
                                        onEnd={() => this.handleCommonChange('canResendOtp')(true)}
                                    />
                                </div>
                            )}
                            <span className={classNames(classes.resendOTP, { 'canResend': canResendOtp })} >
                                {`${i18n.t('notReceivedOtpCode')} `}
                                <b onClick={() => canResendOtp && this.handleCommonChange('canResendOtp')()}> {i18n.t('resendOTP')}</b>
                            </span>
                        </div>
                        <CButton
                            className={classes.joinNow}
                            text={i18n.t('confirm')}
                            onClick={() => this.handleChangTab(3)}
                        />
                    </div>
                )
            } break;
            case 3: {
                Comp = (
                    <div id={'enter_code_content'} className={classes.content}>
                        <CTitle className={classes.title} label={i18n.t('completeInformation')} />
                        <div className={classes.info}>
                            <TextInput
                                autoFocus
                                inputRef={this.initRef('fullName')}
                                isError={!!errors.fullName}
                                label={errors.fullName || i18n.t('fullName')}
                                plh={errors.fullName || i18n.t('fullName')}
                                value={fullName}
                                onChangeText={this.handleCommonChange('fullName')}
                            />
                            <CSelect
                                isError={!!errors.address}
                                label={errors.address || i18n.t('province')}
                                plh={errors.address || i18n.t('province')}
                                options={provinceOptions}
                                value={address}
                                onChange={this.handleCommonChange('address')}
                            />
                        </div>
                        <CButton
                            className={classes.joinNow}
                            text={i18n.t('confirm')}
                            onClick={() => this.handleChangTab(4)}
                        />
                    </div>
                )
            } break;
            case 4: {
                Comp = (
                    <div className={'container'}>
                        <div className={classes.remainRoll}>
                            <span>{i18n.t('remainingSpins')}</span>
                            <span className={'number'}>{padStartNumber(availableSpins)}</span>
                        </div>
                        <CButton
                            text={i18n.t('raceNow')}
                            onClick={() => this.handleActionRace('begin')()}
                        />
                    </div>
                );
                Comp = (
                    <Fragment>
                        <Hidden lgDown>
                            {Comp}
                        </Hidden>
                        <Hidden lgUp>
                            <div className={classes.cLayout}>
                                {Comp}
                            </div>
                        </Hidden>
                    </Fragment>
                );
                Comp = (
                    <Fragment>
                        <div className={classes.remainWrapper}>
                            {Comp}
                        </div>
                        <div
                            className={classes.raceList}
                            style={{
                                backgroundImage: 'url(' + images.smallPath + ')',
                                backgroundRepeat: 'repeat',
                            }}
                        />
                    </Fragment>
                )
            } break;
            default: break;
        }
        if ([1, 2, 3].includes(step)) {
            Comp = (
                <Fragment>
                    <Hidden lgDown>
                        {Comp}
                    </Hidden>
                    <Hidden lgUp>
                        <div className={classes.cLayout}>
                            <div className={classes.mobileCtn}>
                                {Comp}
                            </div>
                        </div>
                    </Hidden>
                </Fragment>
            );
        }
        return Comp;
    }

    _renderBanner = () => {
        const { step } = this.state;
        const videoProps = {
            autoPlay: true,
            playsInline: true,
            width: '100%',
            onRef: this.handleActionRace('init'),
            onTimeUpdate: this.handleActionRace('update'),
        }
        const isRaceStep = step === 4;
        const Comp = (
            <RatioView ratio={9 / 16}>
                <VideoViewer
                    {...videoProps}
                    src={videos.roll}
                />
            </RatioView>
        );
        return (
            <Fragment>
                <Hidden mdDown>
                    {Comp}
                </Hidden>
                <Hidden mdUp>
                    {isRaceStep ? (
                        <Fragment>
                            <RatioView ratio={5 / 4}>
                                <VideoViewer
                                    {...videoProps}
                                    src={videos.rollSm}
                                />
                            </RatioView>
                        </Fragment>
                    ) : Comp}
                </Hidden>

            </Fragment >
        )
    }

    render() {
        const { step } = this.state;
        const { classes } = this.props;
        const Comp = (
            <div className={classes.container}>
                {step === 4 && <BackgroundSection className={classes.backdrop} src={images.backdrop} />}
                {this._renderBanner()}
                {this._renderStep()}
            </div>
        );
        return (
            <div
                className={classes.wrapper}
                onClick={this.handleActionRace()}
            >
                <Hidden lgDown>
                    <div className={classes.cLayout} >
                        {Comp}
                    </div>
                </Hidden>
                <Hidden lgUp>
                    {Comp}
                </Hidden>
            </div >
        );
    }
}


export default compose(withBreakPoints(), withI18n('winner'), withStyles(styles),)(EnterCodePage);