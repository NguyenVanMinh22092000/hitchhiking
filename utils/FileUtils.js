
import { isString } from './Utils';

import { domains } from '@constants/index';

const validUrlProtocols = ['http', 'blob', 'data:', 'content:', '/_next', 'file:'];

export const getImageSize = (url) => {
    return new Promise(resolve => {
        let img = new Image(), onFinish = (size = { width: 0, height: 0 }) => { img.remove(); resolve(size); };
        img.onerror = () => onFinish();
        img.onload = () => onFinish({ width: img.width, height: img.height });
        img.src = url;
    })
}

export const getUploadFileUrl = (url, fallbackUrl = '') => {
    url = String(url?.default || url || '');
    if (!url) return fallbackUrl;
    if (!validUrlProtocols.some(i => url.startsWith(i))) {
        url = domains.uploadFile + url;
    }
    if (url.startsWith(domains.oldUploadFile)) {
        url = url.replace(domains.oldUploadFile, domains.uploadFile);
    }
    return url;
}

export const cleanUploadFileUrl = (url) => {
    return url && isString(url) ? url.replace(domains.uploadFile, '') : url;
}

export const getAudioDuration = (url) => {
    return new Promise((resolve) => {
        if (!url) { resolve(0); }
        let audio = new Audio(), onFinish = (duration = 0) => { audio.remove(); resolve(duration); }
        audio.onerror = () => onFinish();
        audio.onloadedmetadata = () => onFinish(audio.duration);
        audio.src = url;
    });
}

