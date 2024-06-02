import commonLngs from './lngs/common';
import errorLngs from './lngs/error';

const availableLngs = [], lngMappings = {}, webLngs = { list: [], map: {} };

const lngs = [
    ['vi', 'vn', 'Tiếng việt'],
    // ['en', 'en', 'English'],
    // ['km', 'kh', 'កម្ពុជា'],
];
webLngs.list = lngs;
lngs.forEach((lng, idx) => {
    availableLngs.push(lng[0]);
    lngMappings[lng[0]] = idx;
    webLngs.map[lng[0]] = lng.slice(1);
});

const isArray = data => Array.isArray(data);
const isString = data => typeof data === 'string';

class I18nMgr {

    static instance = null;
    static getInstance() {
        if (!I18nMgr.instance) I18nMgr.instance = new I18nMgr();
        return I18nMgr.instance;
    }

    static lng = 'vi';
    static cbs = {};
    static leadedLngs = { ...commonLngs, ...errorLngs };

    setLng(lng) {
        if (availableLngs.includes(lng)) {
            I18nMgr.lng = lng;
            Object.values(I18nMgr.cbs).forEach(cb => cb(lng));
        }
    }
    getLng() { return I18nMgr.lng; }
    getLngIdx() { return lngMappings[I18nMgr.lng]; }

    onChangeLng(id, cb) {
        if (id && typeof cb === 'function') {
            I18nMgr.cbs[id] = cb;
        }
    }
    rmChangeLng(id) {
        delete I18nMgr.cbs[id];
    }

    getLeadedLng = id => id ? I18nMgr.leadedLngs[id] : I18nMgr.leadedLngs;
    setLeadedLng = (id, data) => I18nMgr.leadedLngs[id] = data;

    getText = (...args) => {
        let _args = [...args];
        if (isArray(args[0])) {
            _args[0] = args[0][0];
            _args[1] = args[0][1];
        }
        return textHandler(..._args, I18nMgr.leadedLngs);
    };

}

const i18nInstance = I18nMgr.getInstance();

const textTransform = (type, str = '') => { str = String(str); switch (type) { case 'lf': return str[0].toLowerCase() + str.substring(1); case 'l': return str.toLowerCase(); case 'u': return str.toUpperCase(); case 'c': return str.capitalize(); case 'ca': return str.capitalize(true); default: return str; } };

const textHandler = function (id, opts, datas) {
    let { t, n, f, s, i, as = '', ae = '', m, ...keys } = opts || {};
    // t: type, pass to util textTransform
    // n: giá trị number của đa ngôn ngữ cần dùng dạng số nhiều trong tiếng anh
    // f: formater, function
    // s: strict, không return id của keyword nếu ko có text tồn tại
    // as: addition start, string + thêm phía trước của text
    // ae: addition end, string + thêm phía sau của text
    // i: ignore
    // m: module
    if (i) return id;
    let text;
    if (id) {
        if (id.includes(' ')) return id;
        let _id = String(id).split('.');
        _id.forEach((_i, _idx) => {
            if (typeof text === 'undefined') {
                if (m) text = (getI18nLeadedLng(m) || {})[_i];
                if (!m || (m && !text)) text = (datas || getI18nLeadedLng())[_i];
            } else {
                if (typeof text === 'object') {
                    text = text[_i];
                }
            }
            if (text && _idx === _id.length - 1) {
                text = isString(text) ? text : text[i18nInstance.getLngIdx()];
            }
        });
        if (isArray(text)) text = text[+(!!(typeof n === 'number' && n > 0 ? n : 0))];
        if (isString(text)) {
            if (text && keys) {
                Object.entries(keys).forEach(([key, value]) => {
                    let keyValue = value;
                    if (isArray(value)) {
                        let keyParams = [value[0], value[1], datas];
                        keyValue = this ? this.t(...keyParams) : textHandler(...keyParams);
                    }
                    text = text.replace(new RegExp(`{\\{${key}}}`, 'g'), keyValue);
                });
            }
        } else text = '';
        if (t) text = textTransform(t, text);
        if (f) text = f(text);
    }
    return as + (text || ((s || !id) ? '' : id)) + ae;
};

export const i18nText = (id, opts) => i18nInstance.getText(id, opts);
export const getI18n = (datas) => ({ t: (...args) => textHandler(args[0], args[1], datas) });

export const setI18nLng = (lng) => i18nInstance.setLng(lng);
export const getI18nLng = () => i18nInstance.getLng();
export const onI18nChangeLng = (id, cb) => i18nInstance.onChangeLng(id, cb);
export const rmI18nChangeLng = (id) => i18nInstance.rmChangeLng(id);
export const getI18nLeadedLng = (id) => i18nInstance.getLeadedLng(id);
export const setI18nLeadedLng = (id, data) => i18nInstance.setLeadedLng(id, data);

export { availableLngs, lngMappings, webLngs };