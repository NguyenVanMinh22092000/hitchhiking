import React, { useState, useEffect, useRef, Fragment, forwardRef, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { compose } from 'ramda';

import { i18nText } from '@libs/i18n';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer, TextInput } from '..';

const icons = {
    // search: require('@assets/icons/common/ic_search_filled.svg'),
    // delete: require('@assets/icons/common/ic_cancel_filled.svg'),
};

const SearchBar = (props, ref) => {
    const {
        classes, className, cWidth, isNotResize, changeNoResize,
        value, fetching, internal, fitContent, displayPlh, plh = '',
        endAdornment, endAdornmentInput, extraEndAdornmentInput,
        style = {},
        onChangeText = () => null,
        onChange = () => null,
        onFocus = () => null,
        onEnter = () => null,
        onSearch = () => null,
        onDelete = () => null,
        ...propInput
    } = props;
    const [keyword, setKeyWord] = useState(value || '');
    const [inputWidth, setInputWidth] = useState(240);
    const [isFocusInput, setIsFocusInput] = useState(false);
    const [isTransitionReady, setIsTransitionReady] = useState(false);

    const inputRef = useRef({}), wrapperRef = useRef(), searchWidthCalculatorRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            setTimeout(() => {
                setIsFocusInput(true);
                inputRef?.current?.focus();
            }, 10);
        },
        resetData: () => {
            setKeyWord('');
        }
    }));

    useEffect(() => {
        handleUpdateInputWidth();
        setIsTransitionReady(true);
    }, []);

    useEffect(() => {
        handleUpdateInputWidth();
    }, [keyword, plh]);

    const handleUpdateInputWidth = () => {
        if (!changeNoResize) setInputWidth(searchWidthCalculatorRef.current?.clientWidth + (keyword ? 58 : 32));
    }

    const nodeDelKeyWord = (!!keyword &&
        <ImageViewer
            svg
            src={icons.delete}
            className={classNames(classes.btnDelete, 'anim-fh')}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setKeyWord('');
                onChangeText('');
                // onChange('');
                if (isFocusInput) {
                    inputRef.current.focus();
                }
                onSearch('');
                onDelete();
            }}
        />
    )

    const nodeSearch = (<ImageViewer
        src={icons.search}
        svg={{ color: 'primary', selector: '& svg' }}
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onEnter();
            onSearch();
        }} />)

    let _displayPlh = keyword || displayPlh || !!plh.trim().slice(1).trim() ? i18nText('search') + (!!+plh.trim()[0] ? ` | ${plh}` : '') : '';
    let isEndAdorment = endAdornmentInput || nodeDelKeyWord || extraEndAdornmentInput;
    return (
        <div className={classNames(classes.wrapper, { 'fit-content': fitContent })} style={style}>
            <div className='search-bar' ref={wrapperRef}>
                <div ref={searchWidthCalculatorRef} className={classes.searchWidthCalculator}>
                    <span>{_displayPlh}</span>
                </div>
                <TextInput
                    {...propInput}
                    softDisabled={fetching}
                    value={keyword}
                    typeInput={'search'}
                    inputRef={inputRef}
                    plh={_displayPlh}
                    style={{
                        ...(!fitContent && { maxWidth: `${cWidth || 360} !important` }),
                        width: (isFocusInput && !isNotResize) ? (cWidth || '100%') : inputWidth,
                        ...(isTransitionReady && {
                            transitionProperty: 'width, boxShadow',
                            transitionDuration: '.25s',
                        }),
                    }}
                    className={classNames(classes.inputWrap, 'inputWarp', {
                        'focusing': isFocusInput && !isNotResize,
                        'notResize': isFocusInput && isNotResize,
                        'fit-content': fitContent,
                    }, className)}
                    startAdornment={nodeSearch}
                    endAdornment={!isEndAdorment ? null :
                        <Fragment>
                            {endAdornmentInput || nodeDelKeyWord}
                            {extraEndAdornmentInput}
                        </Fragment>
                    }
                    onChange={onChange}
                    onEnter={onEnter}
                    onChangeText={text => {
                        setKeyWord(text);
                        onChangeText(text);
                    }}
                    onClickAway={(e) => {
                        if (e.target.isSameNode(wrapperRef.current)) inputRef.current.focus();
                        else setIsFocusInput(false);
                    }}
                    onFocus={(e) => {
                        onFocus(e);
                        setIsFocusInput(true);
                    }}
                    onKeyDown={e => e.stopPropagation()}
                />
                {endAdornment && <div> {endAdornment} </div>}
            </div>
        </div>
    )
};

export default compose(withStyles(styles), forwardRef)(SearchBar);