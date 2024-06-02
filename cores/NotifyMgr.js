import { toast } from 'react-toastify';

import { i18nText } from '@libs/i18n';

import { isArray, isBoolean } from '@utils/Utils';

const positionMapping = {
    tl: 'TOP_LEFT',
    tc: 'TOP_CENTER',
    tr: 'TOP_RIGHT',
    bl: 'BOTTOM_LEFT',
    bc: 'BOTTOM_CENTER',
    br: 'BOTTOM_RIGHT',
};

export default class NotifyMgr {

    static instance = null;
    static getInstance() {
        if (!NotifyMgr.instance) NotifyMgr.instance = new NotifyMgr();
        return NotifyMgr.instance;
    }

    static socket = null;
    static connParams = null;
    static isResetSocket = false;
    static resetCb = {};
    static queueCb = {};

    showToast = (content, options) => {

        // content example:
        // const toastId = showToast("Hello", options);
        // showToast(MyComponent, options); 
        // showToast(<MyComponent foo={bar}/>, options); 
        // showToast(({ closeToast }) => <div>Render props like</div>, options);

        // t: success, info, warning, error

        if (content) {
            let { t, toastId, duration, autoClose, position = 'br', join, ...otherOpts } = options || {};
            if (isArray(content, true)) content = content.map(i => i18nText(...(isArray(i) ? i : [i]))).join(join || '');
            switch (String(t)) { case '0': case 'failure': t = 'error'; break; case '1': t = 'success'; break; default: break; }
            return (t ? toast[t] : toast)(content, {
                toastId,
                position: toast.POSITION[positionMapping[position]],
                autoClose: isBoolean(autoClose) ? autoClose : (duration && duration * 1000 || 3000),
                ...otherOpts
            });
        }
    }

    closeToast = (toastId) => toast.dismiss(toastId);

}