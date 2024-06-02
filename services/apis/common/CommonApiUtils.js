
export const apiGetSessionData = async (step, { allCookies } = {}) => {
    let resp = {};
    try {
        switch (step) {
            case 1:
                const userInfos = [];
                resp.userInfos = userInfos;
                break;
            case 2:
                break;
            default: break;
        }
    } catch (error) {
        console.log(`[DEBUG] apiGetSessionData -> step ${step} error:`, error);
        resp.error = error;
    }
    return resp;
}