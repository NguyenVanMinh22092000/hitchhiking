import React, { Component, Fragment } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { isArray, isNumber } from '@utils/Utils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CText, CTitle, ImageViewer } from '@components/common';

import { joinInstructionDatas } from '@variables/WebData';

const images = {
    // JOIN INSTRUCTIONS
    step01: require('@assets/images/common/step_01.svg'),
    step02: require('@assets/images/common/step_02.svg'),
    step03: require('@assets/images/common/step_03.svg'),
    // PRIZE CLAIM PROCESS
    specialPrize: require('@assets/images/common/bg_prize_01.jpeg'),
    phoneCard: require('@assets/images/common/bg_prize_card.png'),
    voucher: require('@assets/images/common/bg_prize_voucher.png'),
};

class JoinProcess extends Component {

    constructor(props) {
        super(props);
        const { datas } = props;
        this.datas = datas || joinInstructionDatas;
    }

    _renderStep = () => {
        const { classes, isReceivePrize } = this.props;

        return (
            <div className={classes.stepWrapper}>
                {this.datas.map((item) => {
                    const {
                        id, title, name, descList, description, icon, note,
                        description2, hightlight, description3, scale
                    } = item || {};
                    return (
                        <div key={id} className={classes.stepItem}>
                            <div
                                className={classNames(classes.stepIcon, { ['isReceivePrize']: isReceivePrize })}
                                {...(isNumber(scale) && { style: { transform: `scale(${scale})` } })}
                            >
                                <ImageViewer
                                    src={images[icon]}
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className={classes.stepContent}>
                                <span>
                                    <CText
                                        type={'span'}
                                        size={'medium'}
                                        color={'error'}
                                        text={`${title} `}
                                    />
                                    <CText type={'span'} size={'medium'} text={name} />
                                </span>
                                {!!description && <CText type={'span'} text={description} />}
                                {!!description2 && (
                                    <div className={classes.stepMoreDesc}>
                                        <span>{description2} </span>
                                        <span>{hightlight} </span>
                                        <span>{description3}</span>
                                    </div>
                                )}

                                <div className={classes.stepDescList}>
                                    {isArray(descList, true) &&
                                        descList.map((i) => {
                                            const {
                                                id: iId,
                                                name: iName,
                                                description: iDesc,
                                            } = i || {};
                                            return (
                                                <div key={iId} className={classes.stepDescItem}>
                                                    <CText
                                                        type={'span'}
                                                        size={'textBold'}
                                                        color={'error'}
                                                        text={iName}
                                                    />
                                                    <CText type={'span'} text={iDesc} />
                                                </div>
                                            );
                                        })}
                                    {!!note && (
                                        <CText
                                            type={'span'}
                                            size={'textBold'}
                                            color={'error'}
                                            text={note}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    render() {
        const { i18n, classes, title } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <CTitle label={i18n.t(title || 'participateIn')} />
                </div>
                {this._renderStep()}
            </div>
        );
    }
}

export default compose(withI18n(), withStyles(styles))(JoinProcess);
