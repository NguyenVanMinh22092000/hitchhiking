import React from 'react';

import { i18nText } from '@libs/i18n';

import WebMgr from '@cores/WebMgr';
import NotifyMgr from '@cores/NotifyMgr';

import { timerFunc, isArray, isJson, toJSON, isString } from './Utils';
import { dateDiff, diffDateTime, getTimestamp } from './DateUtils';
import { getClassName } from './StyleUtils';

const WebInstance = WebMgr.getInstance();
const NotifyInstance = NotifyMgr.getInstance();

export const showToast = (...args) => NotifyInstance.showToast(...args); // content, options
export const closeToast = (...args) => NotifyInstance.closeToast(...args); // content, options

export const subscribeKeyboardEvent = (...args) => WebInstance.subscribeKeyboardEvent(...args);

export const setListenTriggerViewedIds = (...args) => WebInstance.setListenTriggerViewedIds(...args);
export const getListenTriggerViewedIds = (...args) => WebInstance.getListenTriggerViewedIds(...args);

export const setWebCallback = (id, cb) => WebInstance.setWebCallback(id, cb);
export const getWebCallback = (id) => WebInstance.getWebCallback(id);
export const getAllWebCallBack = (...args) => WebInstance.getAllWebCallBack(...args);

export const setScrollPageCallback = (...args) => WebInstance.setScrollPageCallback(...args);
export const triggerScrollAnimateAppear = (...args) => WebInstance.triggerScrollAnimateAppear(...args);

export const setWebData = (id, data) => WebInstance.setWebData(id, data);
export const getWebData = (id) => WebInstance.getWebData(id);

export const setNetworkStatus = (status) => WebInstance.setNetworkStatus(status);
export const getNetworkStatus = () => WebInstance.getNetworkStatus();

export const addWebEventListener = (...args) => WebInstance.addWebEventListener(...args);
export const removeWebEventListener = (name) => WebInstance.removeWebEventListener(name);
export const getWebEventListener = (name) => WebInstance.getWebEventListener(name);
export const sessionLogout = (name) => WebInstance.sessionLogout(name);

export const copy2Clipboard = (content, { msg } = {}) => {
    if (!content) return;
    window.navigator.clipboard.writeText(content);
    showToast(i18nText(msg || 'copySuccess'), { t: 'success' });
}

export const toggleOverlaySpinkit = (visible, options) => {
    let spinkit = document.getElementById(options?.id || 'overlay-spinkit');
    triggerEnableScrollWeb(!visible);
    if (spinkit) timerFunc(options?.delay || 0, () => { spinkit.style.display = visible ? 'flex' : 'none'; });
    const body = (document.getElementsByTagName('body') || [])[0];
    body?.classList[visible ? 'add' : 'remove']('no_scroll_body');
}

export const popupWindowCenter = (url, { w, h } = {}) => {
    const { width, availWidth, height, availHeight, availTop } = screen;
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const systemZoom = width / window.screen.availWidth;
    let top = ((availHeight - h) / 2 / systemZoom + dualScreenTop) - (height - availHeight !== availTop ? availTop : height - availHeight);
    let left = ((availWidth - w) / 2 / systemZoom + dualScreenLeft);
    const newWindow = window.open(url, '', `width=${w / systemZoom},height=${h / systemZoom},top=${top},left=${left}`);
    if (window.focus) newWindow && newWindow.focus();
    return newWindow;
}

export function autoCloseCSelect(cb = () => null) {
    return {
        scroller: '1',
        onScroll: e => {
            cb(e);
            if (e.target.hasAttribute('scroller')) {
                let openingSelectRef = getWebData('openingSelectRef');
                if (openingSelectRef) {
                    openingSelectRef.blur();
                }
            }
        }
    }
}

export const isNotFocusingInput = () => !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
export const isCtrlA = (e) => e.ctrlKey && ['A', 'a', 65, 97].includes(e.key);
export const isPressA = (e) => ['A', 'a'].includes(e.key) && !isCtrlA(e);
export const canUseQuickKey = (e, { key, inModal, isCtrl, noActionHasId } = {}) => isNotFocusingInput() && (inModal || (!inModal && !document.querySelector('.MuiModal-root'))) && (!key || (key && key.toLowerCase() === e.key.toLowerCase())) && ((!isCtrl && !e.ctrlKey) || (isCtrl && e.ctrlKey)) && (!noActionHasId || noActionHasId && !document.getElementById(noActionHasId));
export const isPressEnter = (e) => ['Enter', 13].includes(e.key);


// TODO: validating 

export const logErrorEvent = (name, content) => WebInstance.logErrorEvent(name, content);
export const showImagePreviews = (...args) => WebInstance.showImagePreviews(...args);

export const setWebVisibility = (status) => WebInstance.setWebVisibility(status);
export const getWebVisibility = () => WebInstance.getWebVisibility();
export const setScrollPosition = (id, ref) => WebInstance.setScrollPosition(id, ref);
export const getScrollPosition = (id) => WebInstance.getScrollPosition(id);
export const getWebEnv = () => WebInstance.getWebEnv();
export const isWebEnv = () => WebInstance.isWebEnv();

export const getBrowserInfo = (info) => WebInstance.getBrowserInfo(info);
export const isBrowser = (list) => WebInstance.isBrowser(list);
export const getMenuRoute = (menuId, subMenuId) => WebInstance.getMenuRoute(menuId, subMenuId);

export const debounce = (...args) => WebInstance.debounce(...args);

export const toggleWebDialog = (...args) => WebInstance.toggleWebDialog(...args);
export const showBrowserNotification = (...args) => WebInstance.showBrowserNotification(...args);

export const initRefs = (...refs) => {
    return Object.fromEntries(refs.map(i => [i, React.createRef()]));
}

export const getLocalStorage = (id) => {
    let value = localStorage.getItem(id), json = toJSON(value);
    return json || value;
}

export const setLocalStorage = (id, value) => {
    if (isJson(value)) {
        localStorage.setItem(id, JSON.stringify(isArray(value) ? value : { ...getLocalStorage(id), ...value }));
    } else {
        localStorage.setItem(id, value);
    }
}

export const setPlayerStream = (id, stream) => {
    if (stream) {
        let player = document.getElementById(id);
        if (player) {
            if ('srcObject' in player) {
                player.srcObject = stream;
            } else {
                player.src = window.URL.createObjectURL(stream);
            }
            player.play();
        }
    }
};

export const pageContainerScrollTo = (position) => {
    let delay_time = 0, delay_timeout = diffDateTime('ms', 100, getTimestamp()), now_time = getTimestamp();
    if (delay_timeout > now_time) { delay_time = dateDiff('ms', now_time, delay_timeout); }
    timerFunc(delay_time, () => {
        document.getElementById('page-container')?.scrollTo(0, isString(position) ? WebInstance.getScrollPosition(position) : position);
    });
}

export const togglePwdInputType = ref => {
    let _el = ref.current || ref;
    _el.type = _el.type === 'text' ? 'password' : 'text';
};

export const getSizePagination = (size) => {
    const sizes = [10, 15, 30, 50];
    return Number((size && sizes.includes(Number(size)) && size) || 10);
}

export const detectPageContent = (id, content) => {
    if (!id || !content) return;
    if (content.includes('class="Mso')) {
        let msoImages = document.querySelectorAll(`#${id} p>span>img`);
        msoImages.forEach(imgNode => {
            let spanNode = imgNode.parentNode;
            let pNode = spanNode.parentNode;
            spanNode.classList.add(getClassName({
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: 'fit-content',
                '&.left': {
                    marginRight: 'auto',
                },
                '&.center': {
                    margin: 'auto',
                },
                '&.right': {
                    marginLeft: 'auto',
                },
            }));
            const align = pNode.getAttribute('align') || 'center';
            const addingStyle = {
                maxWidth: '100%',
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
            }
            switch (align) {
                case 'left': addingStyle.marginRight = 'auto'; break;
                case 'center': addingStyle.margin = 'auto'; break;
                case 'right': addingStyle.marginLeft = 'auto'; break;
                default: break;
            }
            Object.assign(spanNode.style, addingStyle);
        })
    }
}


export const triggerEnableScrollWeb = (status) => {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    const supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch (e) { }

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    const body = document.getElementsByTagName('body')[0];
    if (status) {
        // call this to enable
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    } else {
        // call this to disable
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
        // body.classList.add('no_scroll_body');
    }
}

export const isDevEnv = () => process.env.NODE_ENV === 'development';



