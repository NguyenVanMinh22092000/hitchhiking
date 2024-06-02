
import React, { Component } from 'react';
import classNames from 'classnames';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { getWebCallback } from '@utils/WebUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { BackgroundSection, CText, ImageViewer } from '@components/common';

const images = {
    // background: require('@assets/images/photo/computer_02.png'),
};

class HomeMain extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classNames(classes.cLayout, classes.container)}>
                    <div className={classes.content} >
                        <CText
                            size={'header'}
                            type={'h1'}
                            color={'white'}
                            style={{ textAlign: 'center' }}
                            text={i18n.t('homeTitle.main')}
                        />
                        <div className={classes.desc}>
                            <CText
                                size={'mediumRegular'}
                                color={'white'}
                                style={{ textAlign: 'center' }}
                                text={i18n.t('homeDescription.main')}
                            />
                        </div>
                        <div className={classes.btnFee} onClick={() => getWebCallback('authFea')('register')} >
                            <span>{i18n.t('tryFree')}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default compose(withI18n('home'), withStyles(styles))(HomeMain);