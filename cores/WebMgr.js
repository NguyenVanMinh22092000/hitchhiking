import md5 from 'md5';

import { isNumber, isArray, isFunction, isEmpty, isString } from '@utils/Utils';

export default class WebMgr {

    static instance = null;
    static getInstance() {
        if (!WebMgr.instance) WebMgr.instance = new WebMgr();
        return WebMgr.instance;
    }

    // START: variables

    static isOwner = false;
    static accessToken = '';
    static accessTokenObj = null;

    static datas = {};
    static debounceTimer = {};
    static webVisibility = true;
    static scrollPositions = {};
    static keyboardEventListeners = {};
    static webEventListeners = {};

    static callbacks = {};
    static configs = {}; // ticket
    static allEmployee = {};

    static scrollCallbacks = {}; // { home: [target, cb] }

    static userInfo = null;
    static allAffiliate = [];

    static listenAnimationViewdIds = {};

    static networkStatus = true;

    static topics = [];
    static postAdvertisement = [];
    static postDetail = {};

    // END: variables

    setWebVisibility = status => WebMgr.webVisibility = status;
    getWebVisibility = () => WebMgr.webVisibility;

    subscribeKeyboardEvent = (isSubscribe, key, func, isDialog) => {
        let id = `${key}-${md5(func)}${isDialog ? 'dialog' : ''}`, listeners = WebMgr.keyboardEventListeners;
        if (isSubscribe) {
            if (isEmpty(listeners[key])) listeners[key] = {};
            listeners[key][id] = func;
        } else {
            if (listeners[key]) delete listeners[key][id];
        }
    }
    handleKeyboardEvent = e => {
        let listeners = WebMgr.keyboardEventListeners;
        let eventCode = e.key || e.keyCode;
        let activeEl = document.activeElement;
        let listClass = activeEl?.classList;
        let valid = !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !['INPUT', 'TEXTAREA'].includes(activeEl.tagName) && listeners[eventCode];
        if (valid && listClass?.value?.indexOf('MuiDialog') === -1) {
            Object.values(listeners[eventCode]).forEach(func => func?.());
        } else if (valid && listClass?.value?.indexOf('MuiDialog') !== -1) {
            Object.entries(listeners[eventCode]).forEach(([key, func]) => key?.indexOf('dialog') !== -1 && func?.());
        }
    }

    setWebCallback = (id, cb) => {
        if (!cb) {
            delete WebMgr.callbacks[id];
        } else WebMgr.callbacks[id] = cb;
    }
    getWebCallback = (id) => WebMgr.callbacks[id] || (() => null);

    getAllWebCallBack = (id) => {
        let callbacks = [];
        Object.keys(WebMgr.callbacks).forEach(key => {
            if (key.includes(id)) callbacks.push(WebMgr.callbacks[key] || (() => null));
        })
        return callbacks;
    }

    setScrollPageCallback = (id, cb) => {
        if (isFunction(cb)) {
            WebMgr.scrollCallbacks[id] = cb;
        } else delete WebMgr.scrollCallbacks[id];
    }

    triggerScrollAnimateAppear = ({ ids, isTriggerAnimation, classNames, targetKey, e, delay = 0 } = {}) => {
        const triggerScroll = (key) => {
            const cb = WebMgr.scrollCallbacks[key] || (() => null);
            if (key) {
                const node = targetKey ? document.querySelector(`[${targetKey}="${key}"]`) : document.getElementById(key);
                if (node) {
                    new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            cb(entry.isIntersecting, node, e);
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    if (node) {
                                        if (isArray(classNames, true)) {
                                            node.classList.add(...classNames);
                                        } else node.classList.add(`scrollAppear${isTriggerAnimation ? 'Animation' : ''}`);
                                    }
                                }, delay);
                            }
                            observer.unobserve(entry.target);
                        })
                    }).observe(node);
                }
            }
        };
        if (isArray(ids)) ids.forEach((key) => triggerScroll(key));
        if (isString(ids)) triggerScroll(ids);
    };

    setWebData = (id, data) => { Object.assign(WebMgr.datas, { [id]: data }); };
    getWebData = id => { return WebMgr.datas[id]; };

    getBrowserInfo = type => type ? WebMgr.browserInfo?.[type] : WebMgr.browserInfo;
    isBrowser = list => [...(isArray(list) ? list : [list])].includes(WebMgr.browserInfo.name);

    addWebEventListener = (name, isSubscribe, ...args) => {
        let isCustomId = isString(args[0]);
        let cbFunc = isCustomId ? args[1] : args[0];
        if (isSubscribe && !cbFunc) return;
        let cbId = isCustomId ? args[0] : md5(cbFunc || '');
        let listeners = WebMgr.webEventListeners;
        if (isSubscribe) {
            if (!listeners[name]) listeners[name] = {};
            listeners[name][cbId] = cbFunc;
        } else {
            if (listeners[name]) delete listeners[name][cbId];
        }
    }
    removeWebEventListener = (name) => {
        delete WebMgr.webEventListeners[name];
    }
    getWebEventListener = (name) => WebMgr.webEventListeners[name];




    setScrollPosition = (id, ref) => WebMgr.scrollPositions[id] = ref ? ref.scrollTop : 0;
    getScrollPosition = id => WebMgr.scrollPositions[id];

    getWebEnv = () => WebMgr.WEB_ENV;
    isWebEnv = target => WebMgr.WEB_ENV === target;

    debounce = (timeout, func, skipFirstDebounce) => {
        if (isNumber(timeout) && isFunction(func)) {
            let id = md5(func), finalFunc = (notTrigger) => {
                !notTrigger && func();
                WebMgr.debounceTimer[id] = null;
            };
            if (skipFirstDebounce && !WebMgr.debounceTimer[id]) {
                WebMgr.debounceTimer[id] = setTimeout(() => finalFunc(true), timeout);
                return func();
            }
            clearTimeout(WebMgr.debounceTimer[id]);
            WebMgr.debounceTimer[id] = setTimeout(finalFunc, timeout);
        }
    }

    toggleWebDialog = (...args) => WebMgr.callbacks.toggleWebDialog?.(...args);
    showBrowserNotification = (...args) => WebMgr.callbacks.showBrowserNotification?.(...args);

    setListenTriggerViewedIds = (type = 'add', listenId, sectionId) => {
        switch (type) {
            case 'add': {
                WebMgr.listenAnimationViewdIds[listenId] = WebMgr.listenAnimationViewdIds[listenId] || [];
                WebMgr.listenAnimationViewdIds[listenId].push(sectionId);
            } break;
            case 'remove': {
                delete WebMgr.listenAnimationViewdIds[listenId];
            } break;
            default: break;
        }
    }

    getListenTriggerViewedIds = (listenId) => WebMgr.listenAnimationViewdIds[listenId] || [];

    showImagePreviews = async (images, configs) => {
        let isFirstShow = typeof Spotlight === 'undefined';
        if (isFirstShow) await import('@libs/spotlight/spotlight.bundle.js');
        Spotlight.show(images, { infinite: images.length > 1, download: true, ...configs });
        if (isFirstShow) document.querySelector('#spotlight .spl-scene').addEventListener('click', ({ toElement, srcElement }) => (toElement || srcElement).tagName === 'DIV' && Spotlight.close());
    };
}