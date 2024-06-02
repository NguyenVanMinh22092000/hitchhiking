import { i18nText } from '@libs/i18n';

import { textTransform, toCaseStyle, trimStr } from './StringUtils';
import { isArray, isBoolean, isString, miniTimer } from './Utils';
import { toggleOverlaySpinkit, showToast } from './WebUtils';
import { getTimestamp, getDelayTime } from './DateUtils';

import { RespCode } from '@constants/index';

export const mapApiResp = (payload, data) => ({ status_code: RespCode.SUCCESS, payload, ...data });
export const validateApiResp = (resp, skipPayload) => resp && [RespCode.SUCCESS, 200].includes(resp.code) && (skipPayload ? true : resp.payLoad);

export const apiCommonRequest = (api, params, { loading, delay, debug, skipValidate, skipPayload, error } = {}) => new Promise(async (resolve) => {
    let result, reqAt = getTimestamp();
    if (loading) toggleOverlaySpinkit(true);
    try {
        let data = await api(...(isArray(params) ? params : [params]));
        if (skipValidate) {
            result = { ...data, cancelId: params?.cancelId };
        } else {
            if (validateApiResp(data, skipPayload)) {
                result = { ...data, data: data.payLoad, cancelId: params?.cancelId };
            } else throw data;
        }
    } catch (_error) {
        if (debug) console.log(`🚀 : apiCommonRequest -> error`, _error);
        result = { error: _error };
    }
    if (delay) await miniTimer(getDelayTime(reqAt, 'ms', isBoolean(delay) ? 500 : delay));
    if (loading) toggleOverlaySpinkit();
    if (result.error) {
        result.errorMsg = getApiErrorMsg(result.error, isString(error)) || error;
        if (error) showToast(result.errorMsg, { t: 'error' });
    }
    resolve(result);
});

export const getApiErrorMsg = (error, strict) => {
    const { errorMessage, errorCode } = (error || {}).err || {};
    let defaultCode = 'errorOccurred', errCode = defaultCode, errMsg = trimStr(errorCode);
    if (errMsg) {
        switch (errMsg) {
            case 'No value present':
                errCode = 'noValuePresent';
                break;
            case 'Unauthorized':
                errCode = 'unauthorized';
                break;
            case 'Forbidden':
                errCode = 'forbidden';
                break;
            case 'Network Error':
            case 'timeout exceeded':
                errCode = 'network';
                break;
            case 'ERROR': break;
            default:
                if (errMsg.indexOf(' ') > -1) {
                    return errMsg;
                } else {
                    errCode = toCaseStyle('c', textTransform('l', errMsg));
                }
                break;
        }
    } else if (strict) return;
    return i18nText(`err.${errCode}`, { s: true }) || errorMessage || i18nText(`err.${defaultCode}`);
}