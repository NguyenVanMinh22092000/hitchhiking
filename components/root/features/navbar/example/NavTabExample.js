
import React, { Component } from 'react';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

class NavTabExample extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                NavTabExample
            </div>
        );
    }
}


export default compose(withI18n(), withStyles(styles))(NavTabExample);