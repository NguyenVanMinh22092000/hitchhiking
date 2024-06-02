import React, { Component, lazy, Suspense } from 'react';

import { setWebCallback } from '@utils/WebUtils';
import { toggleShowState } from '@utils/CoreUtils';
import { isFunction } from '@utils/Utils';

const Dialogs = {
    confirm: lazy(() => import('@components/dialog/confirm')),
    winner: lazy(() => import('@components/dialog/confirm')),
    animation: lazy(() => import('@components/dialog/animation')),
};

class DialogFeature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: {},
        };
        this._mounted = true;
    }

    componentDidMount() {
        // sdc: show dialog common
        setWebCallback('sdc', this.handleCallback);
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    handleClose = () => toggleShowState(this, 'dialog')({ id: null, dProps: {} });

    handleCallback = (id, dProps = {}) => {
        if (id === 'close') return this.handleClose();
        if (this._mounted) {
            toggleShowState(this, 'dialog')({ id: id, dProps });
        }
    }

    render() {
        const { id, dProps } = this.state.dialog || {};
        if (!id || !Dialogs[id]) return null;
        let Comp = Dialogs[id];
        const { onClose, onAccept } = dProps || {};
        const cProps = {
            acceptable: true,
            cancelable: true,
            confirm: id === 'confirm',
            ...dProps,
            onClose: () => isFunction(onClose) ? onClose(this.handleClose) : this.handleClose(),
            onAccept: () => isFunction(onAccept) && onAccept(this.handleClose),
        }
        return (
            <Suspense fallback={null}>
                <Comp {...cProps} />
            </Suspense>
        )
    }
}

export default DialogFeature;