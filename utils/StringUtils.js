import anchorme from 'anchorme';
import { Base64 } from 'js-base64';
import numeral from 'numeral';

import { cloneDeep, isArray, isCharacter, isEmail, isLocalhostUrl, isNumeric, isObject, isString, isUndefined, isUrl, randomString, removeSpecialChar, removeUnicode, removeViChar } from './Utils';
import { getFormatDate } from './DateUtils';

import { unicodeWordRegx } from '@variables/Regexs';
import { telephoneProviders } from '@variables/ProviderData';

export const isLowerCase = (str) => {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

export const randomId = (length) => Math.random().toString(36).substring(length || 10);

export const textTransform = (type, str = '') => {
    str = String(str || '');
    switch (type) {
        case 'lf': return str[0].toLowerCase() + str.substring(1);
        case 'l': return str.toLowerCase();
        case 'u': return str.toUpperCase();
        case 'c': return capitalizeStr(str);
        case 'ca': return capitalizeStr(str, true);
        default: return str;
    }
}

export const toCaseStyle = (toCase, variable) => {
    // camel, pascal, snake, kebab;
    if (!variable) return '';
    let strs = [], splitSingleStr = (input) => {
        let strTemp = '';
        [...input.split(''), ''].forEach((char, idx) => {
            let isLowerChar = isLowerCase(char), isNumber = isNumeric(char);
            if (idx !== 0 && !isLowerChar && !isNumber) {
                strs.push(strTemp);
                strTemp = '';
            }
            strTemp += char;
        });
    };
    switch (true) {
        case variable.indexOf('_') > -1:
            variable.split('_').forEach(splitSingleStr);
            break;
        case variable.indexOf('-') > -1:
            variable.split('-').forEach(splitSingleStr);
            break;
        default:
            splitSingleStr(variable);
            break;
    }
    switch (toCase) {
        case 'c': // camel
            return strs.map((str, idx) => textTransform(idx === 0 ? 'l' : 'c', str)).join('');
        case 'p': // pascal
            return strs.map(str => textTransform('c', str)).join('');
        case 's': case 'su': // snake
            return strs.map(str => textTransform(toCase === 's' ? 'l' : 'u', str)).join('_');
        case 'k': // kebab
            return strs.map(str => textTransform('l', str)).join('-');
        default: return '';
    }
}

export const capitalizeStr = (str, all) => {
    str = String(str || '').trim();
    if (!str) return '';
    let capitalize = text => text[0].toUpperCase() + text.slice(1);
    return all ? str.split(' ').map(capitalize).join(' ') : capitalize(str);
}


export const getHTMLAttributes = attrs => Object.entries(attrs).map(([key, value]) => `${key}="${value}"`).join(' ');

export const random10Str = () => randomString('mix', 10);

export const getValidString = (str, regex) => {
    switch (regex) {
        case '[0-9]': return str.replace(/\D/gi, '');
        case '[a-z]': return str.toLowerCase().split('').reduce((arr, word) => {
            if (!(/[\d`~!@#$%^&*()_+-=\\\[\]\{}|;':",.\/<>?]/.test(word)) || unicodeWordRegx.test(word)) {
                arr.push(word);
            }
            return arr;
        }, []).join('');
        case '[A-Z]': return str.toUpperCase().split('').reduce((arr, word) => {
            if (!(/[\d`~!@#$%^&*()_+-=\\\[\]\{}|;':",.\/<>?]/.test(word)) || unicodeWordRegx.test(word)) {
                arr.push(word);
            }
            return arr;
        }, []).join('');
        case '[A-Za-z]': return str.split('').reduce((arr, word) => {
            if (!(/[\d`~!@#$%^&*()_+-=\\\[\]\{}|;':",.\/<>?]/.test(word)) || unicodeWordRegx.test(word)) {
                arr.push(word);
            }
            return arr;
        }, []).join('');
        case '[A-Za-z0-9]': return removeSpecialChar(str);
        case 'normal': return str.split('').reduce((arr, word) => {
            if (/[\d`\s~!@#$%^&*()_+-=\\\[\]\{}|;':",.·\/<>?]/.test(word) || unicodeWordRegx.test(word)) {
                arr.push(word);
            }
            return arr;
        }, []).join('');
        case 'decimal': return str.split('').reduce((arr, word) => {
            if (/[\d\.]/.test(word)) {
                if (word === '.') {
                    if (!arr.includes('.')) {
                        if (!arr.length) arr.push('0');
                        arr.push(word);
                    }
                } else arr.push(word);
            }
            return arr;
        }, []).join('');
        case 'email': return removeViChar(str).replace(/[^\w\d@\-_.]/gi, '');
        case 'password': return str.replace(/[\s]/gi, '');
        case '+number': return str.replace(/[^\d+]/gi, '');
        case '*number': return str.replace(/[^\d*]/gi, '');
        case 'unicode': return getValidString(str || '', 'normal').split('').reduce((arr, word) => {
            arr.push(removeViChar(word, !isLowerCase(word)));
            return arr;
        }, []).join('');
        default: return str;
    }
}

export const escapeHtml = str => str ? String(str || '').replace(/[&<>"'`=\/]/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;' })[s]) : '';

export const unescapeHtml = htmlText => {
    if (!htmlText) return '';
    htmlText = String(htmlText)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x2F;/g, '/')
        .replace(/&apos;/g, "'")
        .replace(/&#x3D;/g, '=')
        .replace(/<!DOCTYPE/g, '&lt;!DOCTYPE')
        .replace(/<html/g, '&lt;html')
        .replace(/\/html/g, '&#x2F;html')
        .replace(/<head/g, '&lt;head')
        .replace(/\/head/g, '&#x2F;head')
        .replace(/<body/g, '&lt;body')
        .replace(/\/body/g, '&#x2F;body')
        .replace(/<footer/g, '&lt;footer')
        .replace(/\/footer/g, '&#x2F;footer')
        .replace(/<link/g, '&lt;link')
        .replace(/\/link/g, '&#x2F;link')
        .replace(/<title/g, '&lt;title')
        .replace(/\/title/g, '&#x2F;title')
        .replace(/<meta/g, '&lt;meta')
        .replace(/\/meta/g, '&#x2F;meta')
        .replace(/<script/g, '&lt;script')
        .replace(/\/script/g, '&#x2F;script');
    let div = document.createElement('div');
    div.innerHTML = htmlText;
    div.querySelectorAll('*').forEach(node => {
        for (let attribute of node.attributes) {
            let { specified, name, value } = attribute;
            if (specified) {
                if (name.startsWith('on')) attribute.value = "";
                if (name === 'href' && !isUrl(value)) attribute.value = encodeURI(value);
            }
        }
    });
    let result = div.innerHTML;
    div.remove();
    return result;
};

export const detectLink = (input, { decode, getLink, escape, formater } = {}) => {
    input = String(input || '');
    if (decode) input = decodeURIComponent(input);
    let result = [],
        links = anchorme.list(input),
        getEscapeStr = (str) => escape ? escapeHtml(str) : str,
        getNoneLinkStr = (str) => {
            if (formater) str = formater(str);
            let _links = str.match(/<a (.*?)>(.*?)<\/a>/g) || [];
            if (_links.length) {
                let _str = [];
                _links.forEach((link, i) => {
                    let start = str.indexOf(link), end = start + link.length;
                    _str.push(
                        getEscapeStr(str.substring(0, start)),
                        link.substring(0, 3) + 'target="_blank"' + link.substring(2),
                    );
                    str = str.substring(end);
                    if (_links.length - 1 === i && str) _str.push(str);
                });
                return _str.join('');
            } else {
                return getEscapeStr(str);
            }
        };
    if (links.length) {
        links.forEach((item, index) => {
            const { end } = item;
            let anchor = { ...item };
            if (['?', '='].includes(input[end])) {
                let nextSpaceIdx = input.indexOf(' ', end),
                    nextLineDownIdx = input.indexOf('\n', end),
                    nextBreakIdx = nextSpaceIdx > nextLineDownIdx ? nextLineDownIdx : nextSpaceIdx,
                    haveBreak = nextBreakIdx > 0;
                if (nextSpaceIdx > end + 1) {
                    anchor.end = haveBreak ? nextBreakIdx : input.length;
                    anchor.string += input.slice(end, anchor.end);
                    // anchor.query = anchor.string.split('?')[1];
                    links[index].end = anchor.end;
                }
            }
            const { isURL, isEmail: _isEmail, protocol, string, start, end: newEnd } = anchor;
            let isLocalhost = isLocalhostUrl(string);
            if (isLocalhost) links[index].isLocalhost = true;
            result.push(getNoneLinkStr(input.slice(index ? links[index - 1].end : 0, start)));
            result.push(getLinkHTML(protocol && string || `${_isEmail ? 'mailto:' : 'http://'}${string}`, string, isURL));
            if (index === links.length - 1) result.push(getNoneLinkStr(input.slice(newEnd)));
        });
        if (getLink) links = links.filter(i => i.isURL && !i.isLocalhost);
    }
    if (input && !result.length) {
        result = [getNoneLinkStr(input)];
    }
    result = result.join('');
    return getLink ? { result, links } : result;
}

export const trimStr = (str, { type, full, validate } = {}) => {
    if (!str) return '';
    str = String(str).trim(); // trim text; 
    str = str.replace(full ? / /g : /  +/g, full ? '' : ' '); // full ? replace all space to none : replace 2 space to 1 space;
    str = textTransform(type, str);
    return validate ? !!str : str;
}


export const parseObjToCamel = (objs, { t = 'c', ignoreId = true, isDeep } = {}) => {
    if (!isObject(objs, true)) return objs || {};
    const parseObj = (obj) => Object.entries(cloneDeep(obj)).reduce((result, [id, value]) => {
        const key = (id === '_id' && ignoreId) ? id : toCaseStyle(t, id);
        let datas = value;
        if (isDeep) {
            if (isArray(datas)) {
                datas = datas.map(i => parseObj(i));
            } else if (isObject(value, true)) {
                datas = parseObj(value);
            }
        }
        return {
            ...result,
            [key]: datas,
        };
    }, {});
    return parseObj(objs);
}

export const encodeBase64URI = (str, skipsPadding) => str ? Base64.encodeURI(isString(str) ? str : (isJson(str) ? JSON.stringify(str) : String(str)), skipsPadding) : '';

export const decodeBase64 = (base64) => {
    try { return Base64.decode(base64); } catch (error) { return ''; }
}
export const getLinkHTML = (href, text, { isURL = true, ...attrs } = {}) => `<a ${getHTMLAttributes({ href, onclick: 'event.stopPropagation()', ...(isURL && { target: '_blank', rel: 'noopener noreferrer' }), ...attrs })}>${text}</a>`;

export const splitRefreshToken = url => url ? String(url).split('&refresh_token=')[1] : '';

export const toBase64 = (data) => Base64.toBase64(data);

export const getLogDate = (date) => getFormatDate('yyyy-MM-dd HH:mm:ss:ms', date).substring(0, 22);

export const parseHtml = (str) => str ? new DOMParser().parseFromString(convertHtmlToText(str), "text/html")?.body?.firstChild?.textContent : '';

export const convertHtmlToText = (text) => {
    if (isUndefined(text)) return '';
    return text.replace(/<\/?.+?>/ig, ' ').replace(/&nbsp;/gi, ' ');
}


export const isDomain = (text) => /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(text);

export const currencyConverterByCountry = (value, options = {}) => {
    const { currency_unit = '', excess, noUnit, noSpaceUnit } = options;
    let currencyUnit = textTransform('u', currency_unit);
    if (!value) return 0 + (noUnit ? '' : ' ' + currencyUnit);
    let checkExcess = false, unit = '', format = '0,0', length = 0;
    if (String(value).includes('.')) {
        unit = String(value).split('.')[1];
        length = unit.length > 4 ? 4 : unit.length;
        checkExcess = unit > 0;
    }
    if (excess || currencyUnit && currencyUnit !== 'VND' && checkExcess) {
        const tails = ['0', '0', '00', '000', '0000'];
        format = `0,0.${tails[length]}`;
        value = parseFloat(value).toFixed(length);
    };

    return formatNumber(value, format) + (noUnit ? '' : (noSpaceUnit ? '' : ' ') + currencyUnit);
}

export const getLastName = (fullName, firstChar, noNumberChar = '') => {
    fullName = String(fullName);
    if (!fullName) return noNumberChar;
    fullName = isEmail(fullName) ? fullName.split('@')[0] : removeUnicode(fullName);
    let lastName = '';
    if (fullName) {
        let nameParts = fullName.split(' ').reverse();
        lastName = nameParts.find(i => isCharacter(i)) || nameParts[0];
    }
    if (firstChar && lastName) {
        firstChar = (lastName.split('').find(i => isCharacter(i)) || lastName[0]).toUpperCase();
        return noNumberChar && !isCharacter(firstChar) ? noNumberChar : firstChar;
    }
    return lastName || noNumberChar;
}

export const webLog = (content, { type, color, tColor, data } = {}) => {
    if (content) {
        let args = [], sub_content = `%c${`[${getLogDate()}]`}${type ? `[${String(type).toUpperCase()}] ` : ''}`;
        if (color) {
            args.push(`${sub_content}%c${content}`, `color: ${tColor || 'unset'}`, `color: ${color}`);
        } else {
            args.push(`${sub_content}${content}`, `color: ${tColor || 'unset'}`);
        }
        if (data) { args.push(data); }
        console.log(...args);
    }
}


export const formatNumber = (number, format) => {
    // Numbers
    // 10000            '0,0.0000'          10,000.0000
    // 10000.23         '0,0'               10,000
    // 10000.23         '+0,0'              +10,000
    // -10000           '0,0.0'             -10,000.0
    // 10000.1234       '0.000'             10000.123
    // 100.1234         '00000'             00100
    // 1000.1234        '000000,0'          001,000
    // 10               '000.00'            010.00
    // 10000.1234       '0[.]00000'         10000.12340
    // -10000           '(0,0.0000)'        (10,000.0000)
    // -0.23            '.00'               -.23
    // -0.23            '(.00)'             (.23)
    // 0.23             '0.00000'           0.23000
    // 0.23             '0.0[0000]'         0.23
    // 1230974          '0.0a'              1.2m
    // 1460             '0 a'               1 k
    // -104000          '0a'                -104k
    // 1                '0o'                1st
    // 100              '0o'                100th

    // Currency
    // 1000.234         '$0,0.00'           $1,000.23
    // 1000.2           '0,0[.]00 $'        1,000.20 $
    // 1001             '$ 0,0[.]00'        $ 1,001
    // -1000.234        '($0,0)'            ($1,000)
    // -1000.234        '$0.00'             -$1000.23
    // 1230974          '($ 0.00 a)'        $ 1.23 m

    // Bytes
    // 100              '0b'                100B
    // 1024             '0b'                1KB
    // 2048             '0 ib'              2 KiB
    // 3072             '0.0 b'             3.1 KB
    // 7884486213       '0.00b'             7.88GB
    // 3467479682787    '0.000 ib'          3.154 TiB

    // Percentages
    // 1                '0%'                100%
    // 0.974878234      '0.000%'            97.488%
    // -0.43            '0 %'               -43 %
    // 0.43             '(0.000 %)'         43.000 %

    // Time
    // 25               '00:00:00'          0:00:25
    // 238              '00:00:00'          0:03:58
    // 63846            '00:00:00'          17:44:06

    // Exponential
    // 1123456789       '0,0e+0'            1e+9
    // 12398734.202     '0.00e+0'           1.24e+7
    // 0.000123987      '0.000e+0'          1.240e-4

    try {
        let formated = '',
            isNegative = number < 0,
            _number = String(number),
            _format = format && format !== '0.0' ? format : '0,0';
        if (_format === '0,0' && _number.includes('e+')) {
            _number = String(BigInt(number)).replace('-', '');
            let index = _number.length % 3;
            if (index > 0) formated += _number.substring(0, index) + ',';
            formated += (_number.substring(index).match(/\d{1,3}/g) || []).join(',');
            if (isNegative && formated[0] !== '-') formated = '-' + formated;
        } else {
            formated = numeral(number).format(_format);
        }
        if (isNegative && formated[0] !== '-') formated = '-' + formated;
        if (format === '0.0') return replaceAllStr(formated, ',', '.');
        return formated;
    } catch (error) {
        return number;
    }
}

export const getTelProviderId = (phone) => {
    if (phone) {
        let provider = telephoneProviders.find(i => i[1].some(j => j.test(phone)));
        if (provider) return provider[0];
    }
    return '';
}


export const padStartNumber = (number, length = 2) => String(number || 0).padStart(length, '0');