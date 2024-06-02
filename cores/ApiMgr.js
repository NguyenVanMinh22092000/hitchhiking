import axios from 'axios';

import { isJson } from '@utils/Utils';

import { requestApiTimeout } from '@constants/Configs';

export default class ApiMgr {

    static instance = null;
    static getInstance() {
        if (!ApiMgr.instance) ApiMgr.instance = new ApiMgr();
        return ApiMgr.instance;
    }

    static reqSources = {};
    static isRedirectToLoginPage = false;

    async doRequest(method, url, { cancelId, body, header, timeout, noTimeout, isUpload } = {}) {
        try {
            // let reqHeader = { 'Content-Type': isUpload ? 'multipart/form-data' : 'application/json', ...header };
            let reqHeader = {...header};
            let reqUrl = String(url || '');
            if(!['POST', 'PUT', 'post', 'put'].includes(method)){
                delete reqHeader['Content-Type']
            };
            const reqConfig = {
                method,
                url: reqUrl,
                headers: reqHeader,
                timeout: isUpload || noTimeout ? 0 : (timeout ?? requestApiTimeout),
                data: !isUpload && isJson(body) ? JSON.stringify(body) : (body || '{}'),
                maxContentLength: 100000000,
            }
            if (cancelId) {
                const reqSrc = axios.CancelToken.source();
                ApiMgr.reqSources[cancelId] = reqSrc;
                reqConfig.cancelToken = reqSrc.token;
            }
            const apiResp = await axios.request(reqConfig);
            this.clearCancelSource(cancelId);
            return apiResp.data;
        } catch (error) {
            this.clearCancelSource(cancelId);
            if (error?.response?.data === 'Unauthorized') {
                if (!ApiMgr.isRedirectToLoginPage) {
                    ApiMgr.isRedirectToLoginPage = true;
                    console.log(`[DEBUG] forceLogout ~ Unauthorized!`);
                    // forceLogout();
                }
            } else {
                if (error?.code === 'ECONNABORTED') {
                    error.message = 'timeout_exceeded';
                }
                throw error;
            }
        }
    }

    async simpleRequest(method, url, options) {
        const { body } = options || {};
        return new Promise(resolve => {
            try {
                const reqConfigs = {
                    url, method, timeout: 0,
                    headers: this.getRequestHeader(options),
                    data: body || {},
                };
                axios.request(reqConfigs)
                    .then((res) => {
                        const { status, data } = res;
                        resolve({ status, data });
                    })
                    .catch((error) => {
                        if (error.response) {
                            const { status, data } = error.response;
                            resolve({ status, error: data });
                        } else {
                            resolve({ error: error.message });
                        }
                    });
            } catch (error) {
                resolve({ error });
            }
        });
    }

    async fetchRequest(method, url, options) {
        const { respType = 'json', body, headers, token, isAuth, ...opts } = options || {};
        return new Promise(resolve => {
            try {
                let requestOptions = {
                    method, redirect: 'follow',
                    ...((headers || method === 'post') && { headers: this.getRequestHeader(options) }),
                    ...(body && { body: JSON.stringify(body) }),
                    ...opts,
                };
                fetch(url, requestOptions)
                    .then(resp => resp[respType]().then(data => resolve({ status: resp.status, data })))
                    .catch(error => resolve({ error }));
            } catch (error) {
                resolve({ error });
            }
        });
    }

    cancelRequest(cancelId) {
        if (cancelId) ApiMgr.reqSources[cancelId]?.cancel();
    }

    // START: api handler

    clearCancelSource(cancelId) {
        if (cancelId) { delete ApiMgr.reqSources[cancelId]; }
    }

    getRequestHeader({ headers } = {}) {
        return {
            'Content-Type': 'application/json',
            ...headers,
        }
    }

    // END: api handler

}