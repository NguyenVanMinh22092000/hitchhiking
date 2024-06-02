import DrawAPIs from './DrawAPIs';

import { apiCommonRequest } from '@utils/ApiUtils';

export const apiDrawVerify = (...args) => apiCommonRequest(DrawAPIs.drawVerify, ...args);
export const apiLuckyDraw = (...args) => apiCommonRequest(DrawAPIs.luckyDraw, ...args);