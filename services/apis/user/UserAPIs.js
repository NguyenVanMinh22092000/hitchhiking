import { doRequest } from '@utils/CoreUtils';

import { domains } from '@constants/index';

export default {
    exampleGet: (params) => {
        const { a } = params;
        let url = `${domains.api}example?a=${a}`;
        return doRequest('get', url);
    },
    examplePost: (body) => {
        let url = `${domains.api}example`;
        return doRequest('post', url, { body });
    },
}