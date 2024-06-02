import React, { Fragment } from 'react';
import { ToastContainer, Slide as ToastifySlideTransition } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { OverlaySpinkit } from '@components/root';
import { DialogFeature } from '@components/root/features';

const BasicFeatures = () => {
    return (
        <Fragment>

            <OverlaySpinkit />

            <ToastContainer
                draggable
                autoClose={3000}
                theme={'colored'}
                position={'bottom-right'}
                closeOnClick={false}
                pauseOnFocusLoss={false}
                transition={ToastifySlideTransition}
            />

            <DialogFeature />

        </Fragment>
    );
};

export default BasicFeatures;