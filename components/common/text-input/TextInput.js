import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { i18nText } from '@libs/i18n';

import { getValidString, random10Str } from '@utils/StringUtils';
import { isNumber } from '@utils/Utils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const defaultMaxLength = 256;

const inputTypes = {
    default: [defaultMaxLength, '', 'normal', false],
    textConfig: [48, '', '', false],
    email: [defaultMaxLength, 'email@example.com', 'email', true],
    number: [defaultMaxLength, '[0-9]', '[0-9]', false],
    minNumber: [3, '[0-9]', '[0-9]', false],
    phone: [24, '[0-9]', '[0-9]', false],
    phonePlus: [24, '[+], [0-9]', '+number', false],
    phoneStar: [24, '[*], [0-9]', '*number', false],
    search: [64, 'search', 'normal', true],
    percentage: [3, '[0-9]', '[0-9]', false],
    currency: [defaultMaxLength, '[0-9]', '[0-9]', false],
    decimal: [defaultMaxLength, '[.][0-9]', 'decimal', false],
    password: [defaultMaxLength, 'passValid', 'password', true],
}

const defaultRegexPlhs = {
    decimal: '[.][0-9]'
};

const typeNumber = num => isNumber(num);

const customDisplay = ['phone', 'phonePlus', 'phoneStar', 'minNumber'];

const TextInput = (props) => {
    const {
        classes, style, className, id, inputId,
        inputRef, label, desc, plh, value = '', wrapperRef,
        isNumber, isRequired, isError, typeInput = 'default', currencyUnit,
        unlimitedLength, defaultInput, disabled, multiline, regex, maxLength,
        onEnter = () => null,
        onKeyDown = () => null,
        onChange = () => null,
        onChangeText = () => null,
        onClick,
        ...inputProps
    } = props;

    const [_inputId] = useState(inputId || random10Str());

    const inputEl = useRef();

    useEffect(() => {
        inputEl.current = document.querySelector(`[input-id="${_inputId}"] ${multiline ? 'textarea' : 'input'}`);
        if (multiline && inputProps.autoFocus && inputEl.current) {
            let lengthValue = (value || '').length;
            inputEl.current.setSelectionRange(lengthValue, lengthValue);
        }
    }, []);

    let initChange = true;

    const curMaxLength = !!maxLength && maxLength > defaultMaxLength ? defaultMaxLength : maxLength || inputTypes[typeInput][0];
    const strEnd = `${customDisplay.includes(typeInput) ? inputTypes[typeInput][1] + ' ' : ''}${i18nText(inputTypes[typeInput][3] ? inputTypes[typeInput][1] : 'plhLength', { length: curMaxLength })}`;
    const _plh = multiline ? i18nText('enterValue') : `${!!regex ? (defaultRegexPlhs[regex] || regex) + ', ' : ''}${strEnd}`;

    const handleKeyDown = (event) => {
        onKeyDown(event);
        if (event.key === 'Enter') onEnter();
    };

    const handleChangeValue = (event) => {
        let { target: { value: nextValue } } = event;
        initChange = false;
        if (nextValue.length > value?.length && nextValue.slice(-1) === ' ' && nextValue.slice(-2)[0] === nextValue.slice(-1)) return;
        nextValue = isNumber ? nextValue.replace(/\D/g, '') : getValidString(nextValue, (regex || inputTypes[typeInput][2]));
        if (nextValue.length > curMaxLength && !multiline && !unlimitedLength) {
            nextValue = nextValue.substring(0, curMaxLength);
            event.target.value = nextValue;
        }
        if (typeInput === 'percentage' && parseInt(nextValue) > 100) nextValue = 100;
        onChange(event, nextValue);
        onChangeText(nextValue);
    };

    const wrapperProps = {
        id,
        ref: wrapperRef,
        style: {
            ...(onClick && { cursor: 'pointer' }),
            ...style,
        },
        ['input-id']: _inputId,
        className: classNames(classes.wrapper, className, {
            'label': !!label,
            'error': isError,
            'disabled': disabled,
        }),
        onClick: () => {
            onClick?.();
            !disabled && inputEl.current.focus();
        },
    };

    const textInputProps = {
        ...inputProps,
        value: typeNumber(value) ? String(value) : (value || ''),
        ref: inputRef,
        placeholder: plh || _plh,
        ...(typeInput === 'password' && { type: 'password' }),
        className: classNames(classes.input, {
            [classes.textarea]: multiline,
            'scrollable-y': multiline,
        }),
        onKeyDown: handleKeyDown,
        onChange: handleChangeValue,
    };

    if (initChange && (value?.length > curMaxLength && !multiline) && !unlimitedLength) {
        handleChangeValue({ target: { value } });
    }

    let nodeInput = multiline ? <textarea {...textInputProps} /> : <input {...textInputProps} />;

    return (
        <div {...wrapperProps}>
            <div className={classes.container}>
                {nodeInput}
            </div>
        </div>
    );;
};

TextInput.propTypes = {
    style: PropTypes.any,
    className: PropTypes.any,
    label: PropTypes.string,
    desc: PropTypes.any,
    plh: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isNumber: PropTypes.bool,
    multiline: PropTypes.bool,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    unlimitedLength: PropTypes.bool,
};

export default withStyles(styles)(TextInput);