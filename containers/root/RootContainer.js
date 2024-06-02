import React, { Component, Fragment } from 'react';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CLayout } from '@components/common';

import { BasicFeatures } from './features';
import PageContainer from './page-container';


class RootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderReady: false,
        };
    }

    componentDidMount() {
        this.setState({ renderReady: true });
    }

    render() {
        const { renderReady } = this.state;
        if (!renderReady) return null;
        return (
            <Fragment>
                <BasicFeatures />
                <CLayout>
                    <PageContainer {...this.props} />
                </ CLayout>
            </Fragment>
        );
    }

}

export default withStyles(styles)(RootContainer); 