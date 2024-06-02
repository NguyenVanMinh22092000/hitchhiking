import React, { Component } from 'react';

import { CLayout } from '@components/common';
import ErrorPage from '@containers/common/error';

class Error404 extends Component {

    render() {
        return (
            <CLayout>
                <ErrorPage type={'developing'} />
            </CLayout>
        )
    }

}

export default Error404;