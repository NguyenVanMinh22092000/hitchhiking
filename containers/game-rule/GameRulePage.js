import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import JoinProcess from '@components/join-process';

import { prizeClaimProcessesDatas } from '@variables/WebData';

class GameRulePage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classNames(classes.cLayout, classes.content)}>
                    <JoinProcess />
                    <JoinProcess isReceivePrize datas={prizeClaimProcessesDatas} title={'prizeClaimProcess'} />
                </div>
            </div>
        );
    }
}

export default compose(withI18n(), withStyles(styles))(GameRulePage);
