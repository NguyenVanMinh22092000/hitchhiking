import { doRequest } from '@utils/CoreUtils';

import { domains } from '@constants/index';

export default {
    drawVerify: (step, params) => {
        const { phone, code, otp, fullname, token, address } = params || {};
        let body;
        let url = `${domains.common}`;
        switch (step) {
            case 'send': {
                url += 'sendOTP';
                body = { gameCode: 'MAIN_GAME', phone, code };
            } break;
            case 'verify': {
                url += 'verifyOTP';
                body = { gameCode: 'MAIN_GAME', phone, code, otp };
            } break;
            case 'create': {
                url += 'create-user';
                body = { fullname, token, address };
            } break;
            default: break;
        }
        url = 'https://yhtakyrsll.execute-api.us-east-1.amazonaws.com/Prod/get-winners?code=&phoneNumber=&page=0&pageSize=20';
        // return doRequest('post', url, { body });
        return doRequest('get', url);
    },
    luckyDraw: (params) => {
        const { token } = params || {};
        let url = `${domains.common}lucky-draw`;
        return doRequest('post', url, { body: { token, gameCode: 'MAIN_GAME', } });
    }
}