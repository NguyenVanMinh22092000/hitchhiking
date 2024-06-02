import WinnerAPIs from './WinnerAPIs';

import { apiCommonRequest } from '@utils/ApiUtils';

export const apiWinnerGetRequest = (...args) => apiCommonRequest(WinnerAPIs.getWinners, ...args);