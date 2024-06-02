import { doRequest } from '@utils/CoreUtils';

import { domains } from '@constants/index';

export default {
  getWinners: (params) => {
    const { page = 1, size = 10, body } = params;
    const { inputValue, searching } = body || {};
    let url = `${domains.common}get-winners?page=${page}&pageSize=${size}`;
    if (searching) url += `&code=&phoneNumber=${inputValue}`;
    return doRequest('get', url, { noAuth: true });
  },
}