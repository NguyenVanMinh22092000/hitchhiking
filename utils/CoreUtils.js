import { useEffect, useCallback, useRef } from 'react';

import ApiMgr from '@cores/ApiMgr';

const apiInstance = ApiMgr.getInstance();

export const doRequest = (...args) => apiInstance.doRequest(...args);
export const simpleRequest = (...args) => apiInstance.simpleRequest(...args);
export const fetchRequest = (...args) => apiInstance.fetchRequest(...args);
export const cancelRequest = (...args) => apiInstance.cancelRequest(...args);

export const asyncSetState = (_this, state) => new Promise((resolve) => _this.setState(state, () => resolve()));

export const toggleShowState = (_this, showId = 'shows') => (showState, otherState, cb) => _this.setState(state => ({ [showId]: { ...state[showId], ...showState }, ...otherState }), cb);

export const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);
    return useCallback(() => isMounted.current, []);
}