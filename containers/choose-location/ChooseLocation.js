import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';
import { CTitle, ImageViewer } from '@components/common';
import { random10Str } from '@utils/StringUtils';
import { Hidden, TextField } from '@mui/material';

const icon = {
    square: require('@assets/icons/common/square.png'),
}

const addresses = [
    { id: random10Str(), text: 'pickupAddress', value: 'searchPickupAddress' },
    { id: random10Str(), text: 'dropOffAddress', value: 'searchDropOffAddress' }
]

class ChooseLocation extends Component {


    render() {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classNames(classes.cLayout, classes.content)}>
                    <div className={classes.header}>
                        <TextField    />
                    </div>
                    <div className={classes.body}>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(withI18n(), withStyles(styles))(ChooseLocation);
