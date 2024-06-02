import _uniq from 'lodash/uniq';
import _uniqBy from 'lodash/uniqBy';
import _isEmpty from 'lodash/isEmpty';
import _cloneDeep from 'lodash/cloneDeep';
import fastCompare from 'react-fast-compare'; // This is a fork of the brilliant fast-deep-equal with some extra handling for React.
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import { getI18nLng } from '@libs/i18n';
import { textTransform } from './StringUtils';

export const isUndefined = value => ['undefined', 'NaN', undefined, '', null, 'null', false, 'false', 'Invalid date'].includes(value);

export const isEmail = value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(value).toLowerCase());

export const isCharacter = value => /[a-zA-Z]/.test(value);

export const isString = value => typeof value === 'string';

export const isNumber = value => typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)));

export const isNumeric = value => /^[\d]+$/.test(value);

export const isBoolean = value => typeof value === 'boolean';

export const isObject = (value, isNotEmpty) => {
    let isObj = !!value && typeof value === 'object' && !isUndefined(value) && !isArray(value);
    return isObj && isNotEmpty ? !isEmpty(value) : isObj;
}

export const isEmpty = obj => _isEmpty(obj);

export const isFile = file => `${file}` === '[object File]';

export const isArray = (value, minLength) => Array.isArray(value) && (minLength ? (value.length >= (typeof minLength === 'number' ? minLength : 1)) : true);

export const toArray = value => Array.isArray(value) ? value : [];

export const toJSON = (data) => {
    try {
        if (isObject(data) || isArray(data)) return data;
        let json = null;
        if (isString(data)) {
            json = JSON.parse(data);
            if (isString(json)) {
                json = JSON.parse(json);
            }
        } else {
            json = JSON.parse(JSON.stringify(data));
        }
        return json;
    } catch { return null; }
}

export const isJson = data => {
    try {
        if (!data) return false;
        if (isString(data)) {
            JSON.parse(data);
        } else {
            JSON.parse(JSON.stringify(data));
        }
    } catch (e) { return false; }
    return true;
}


export const isHaveValue = (data, value, isArr) => {
    if (!data || (isArr && !isArray(data))) { return false; }
    if (isArr) { return data.findIndex(i => isEqual(i, value)) > -1; }
    for (const key in data) { if (isEqual(data[key], value)) { return true; } }
    return false;
}

export const isHaveString = (arr, str) => {
    str = String(str || '');
    return isArray(arr) && arr.some(i => str.includes(String(i)));
}

export const isHaveProp = (obj, prop) => obj.hasOwnProperty(prop);

export const isHaveProps = (obj, propTxts) => String(propTxts).split(' ').every(i => obj.hasOwnProperty(i));

export const isUrl = (str, type) => {
    let regex;
    switch (type) {
        case 'facebook':
            regex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/;
            break;
        case '': default:
            // regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; // OLD regex
            regex = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            break;
    }
    return !!regex.test(str);
}

export const isFileUrl = url => {
    url = url.split('/');
    if (url.length > 3) {
        let fileName = url.pop();
        return !['?', '#'].includes(fileName[0]) && fileName.includes('.');
    }
    return false;
}

export const isLocalhostUrl = url => url.split(/[/:]/)?.[3]?.split('.')?.pop() === 'localhost';

export const isFunction = value => typeof value === 'function';

export const isEqual = (...args) => fastCompare(...args);

export const isEmoji = str => /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/.test(str);

export const isObjectIncludes = (object, keyword, props) => props.some(i => (object[i] || '').includes(keyword));

export const removeViChar = (str, noLowerCase) => {
    if (!str) return '';
    str = String(str);
    if (noLowerCase) {
        str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, 'A')
            .replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, 'E')
            .replace(/[ÌÍỊỈĨ]/g, 'I')
            .replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, 'O')
            .replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, 'U')
            .replace(/[ỲÝỴỶỸ]/g, 'Y')
            .replace(/Đ/g, 'D');
    }
    else str = str.toLowerCase();
    return str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
        .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
        .replace(/[ìíịỉĩ]/g, 'i')
        .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
        .replace(/[ùúụủũưừứựửữ]/g, 'u')
        .replace(/[ỳýỵỷỹ]/g, 'y')
        .replace(/đ/g, 'd');
}

export const removeUnicode = (str, { type, middle } = {}) => {
    if (!str || !isString(str)) { return ''; }
    str = removeViChar(str);
    if (type === 'email') {
        str = str.replace(/[^_@.a-z0-9]/g, '-');
    } else {
        str = str.replace(/[^a-z0-9]/g, '-')
            .replace(/-/g, middle || ' ')  // replace - to \s
            .replace(/^\-+|\-+$/g, '');
    }
    return str.replace(/-+-/g, '-');
}

export const removeSpecialChar = (str) => str.replace(/[^a-zA-Z0-9\sÀÁẠÃẢÂẦẤẬẪẨĂẰẮẶẴẲĐÈÉẸẼẺÊỀẾỆỄỂÌÍỊĨỈÒÓỌÕỎÔỒỐỘỖỔƠỜỚỢỠỞÙÚỤŨỦƯỪỨỰỮỬàáạãảâầấậẫẩăằắặẵẳđèéẹẽẻêềếệễểìíịĩỉòóọõỏôồốộỗổơờớợỡởùúụũủưừứựữử]/g, '');

export const randomString = (input, strLength) => {
    let str = ({
        num: '0123456789',
        char: 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
        mix: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
        charLow: 'abcdefghiklmnopqrstuvwxyz',
        charUp: 'ABCDEFGHIJKLMNOPQRSTUVWXTZ',
        numLow: '0123456789abcdefghiklmnopqrstuvwxyz',
        numUp: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ',
    })[input] || input || '';
    let length = strLength || str.length;
    return Array.from({ length }).map(() => {
        let rnum = Math.floor(Math.random() * str.length);
        return str.substring(rnum, rnum + 1);
    }).join('');
}

export const removeProps = (obj, propTxt) => {
    if (!obj) return null;
    if (!propTxt || !isString(propTxt)) { return obj; }
    let props = propTxt.split(' ');
    if (props.length === 0) { return obj; }
    let newObj = cloneDeep(obj);
    props.forEach(prop => delete newObj[prop]);
    return newObj;
}

export const timerFunc = (timeout, cb = () => null) => {
    let _timeout = String(timeout).trim();
    if (_timeout) {
        let sortType = [['s', 1], ['m', 60], ['h', 3600], ['d', 86400]].find(i => i[0] === _timeout.slice(-1));
        _timeout = parseInt(parseFloat(_timeout) * (sortType ? (sortType[1] * 1000) : 1));
    }
    _timeout ? setTimeout(cb, _timeout) : cb();
}

export const miniTimer = time => new Promise(resolve => isNumber(time) ? setTimeout(resolve, time) : resolve());

export const genUuid = (version = '1', options = {}) => {
    let custom_namespace;
    version = String(version);
    if (version === '3' || version === '5') {
        if (!isArray(options, true)) { return; }
        switch (options[1]) {
            case 'DNS': custom_namespace = uuidv5.DNS; break;
            case 'URL': custom_namespace = uuidv5.URL; break;
            default: custom_namespace = options[1]; break;
        }
    }
    switch (version) {
        case '0': return `${randomString('char', 11)}${+new Date()}`.shuffle();
        case '1': // timestamp => '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d';
            return uuidv1();
        case '3': // namespace
            // using predefined DNS namespace (for domain names) => '9125a8dc-52ee-365b-a5aa-81b0b3681cf6';
            // using predefined URL namespace (for, well, URLs) => 'c6235813-3ba4-3801-ae84-e0a6ebb7d138';
            // using a custom namespace;
            // => Note: Custom namespaces should be a UUID string specific to your application!
            // => E.g. the one here was generated using this modules `uuid` CLI.
            // => const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
            // => 'e8b5a51d-11c8-3310-a6ab-367563f20686';
            return uuidv3(options[0], custom_namespace);
        case '4': return uuidv4(); // random => '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
        case '5': return uuidv5(options[0], custom_namespace); // namespace, same input type as v3;
        default: return;
    }
}

export const cloneDeep = obj => obj ? _cloneDeep(obj) : obj;

export const uniqBy = (...args) => _uniqBy(...args);

export const parseCookies = () => Object.fromEntries(document.cookie.split('; ').map(i => {
    let index = i.indexOf('='), key = i.substring(0, index), value = decodeURIComponent(i.substring(index + 1)), _value = value;
    try {
        _value = JSON.parse(value);
    } catch {
        _value = value;
    }
    return [key, _value]
}));

export const getDateTxt = (date, isFormat = true) => `${isFormat && date < 10 ? '0' : ''}${date}`;

export const fakeArray = (length = 0) => Array.from({ length }).map(i => randomString('mix', 3));

export const genTextLng = (datas, { t } = {}) => {
    const _datas = datas || {};
    let text = _datas[getI18nLng()] || '';
    if (t) text = textTransform(t, text);
    return text;
}

export const reorderArray = (list, oldIdx, newIdx) => {
    const result = Array.from(list);
    const [removed] = result.splice(oldIdx, 1);
    result.splice(newIdx, 0, removed);
    return result;
}

export const getMediaTimer = (t, { middle = ':', hUnit, minUnit, secUnit, minStr, hDefault } = {}) => {
    t = parseInt(isUndefined(t) ? 0 : t);
    if (!t) return `00${middle}00`;
    let isH = t > 3600,
        h = isH ? Math.trunc(t / 3600) : 0,
        min = Math.trunc((isH ? t % 3600 : t) / 60),
        sec = Math.trunc((isH ? t % 3600 : t) % 60),
        hTxt = h ? `${getDateTxt(h, !minStr)}${hUnit || ''}${middle}` : (hDefault ? `00${middle}` : ''),
        minTxt = `${getDateTxt(min, !minStr)}${minUnit || ''}${middle}`,
        secTxt = `${getDateTxt(sec, !minStr)}${secUnit || ''}`;
    return `${hTxt}${(minStr && min > 0) || !minStr ? minTxt : ''}${secTxt}`;
}

export const slugify = text => text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');

export const getUUidDevice = () => {
    let navigator_info = window.navigator;
    let screen_info = window.screen;
    let uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    return uid;
}

export const shuffleArray = (arr = []) => arr.sort(() => Math.random() - 0.5);



