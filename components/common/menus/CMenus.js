import React, { Fragment, useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { i18nText } from '@libs/i18n';

import { removeViChar, isObjectIncludes, isArray, isNumber, cloneDeep, isNumeric } from '@utils/Utils';
import { getColor } from '@utils/StyleUtils';
import { useIsMounted } from '@utils/CoreUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { Popper, ClickAwayListener } from '@mui/material';

import { ImageViewer, CButton, Spinkit, } from '..';

const defaultFunc = () => null;

const icons = {
    // add: require('@assets/icons/common/ic_add_filled.svg'),
    // selected: require('@assets/icons/common/ic_square_tick_box_filled.svg'),
    // unselect: require('@assets/icons/common/ic_square_uncheck.svg'),
    // arrowRight: require('@assets/icons/common/ic_sort_right_filled.svg'),
    arrowDown: require('@assets/icons/common/sort_down.svg'),
    // arrow: require('@assets/icons/common/ic_more_than.svg'),
};

const mapSearchableMenus = (menus) => {
    if (!menus) menus = [];
    return (menus || []).map(i => {
        if (!i) return {};
        let label = isArray(i.label) && isArray(i.label[0]) ? i.label.map(j => i18nText(j)).join(' ') : i18nText(i.label);
        return {
            ...i,
            labelUnsigned: removeViChar(label),
        };
    });
};

const handleSortSelecteds = (arr, { selecteds }) => {
    const { selectOpts, unselectOpts } = cloneDeep(arr || []).reduce((result, cur) => {
        const isSelected = (selecteds || []).includes(cur.value || cur.id);
        result[isSelected ? 'selectOpts' : 'unselectOpts'].push(cur);
        return result;
    }, { selectOpts: [], unselectOpts: [] });
    return [...selectOpts, ...unselectOpts];
};

const CSelectItem = ({ className, menu, onClick, selectedItem, customItem, isFocusing } = {}) => {
    const { label, value } = menu || {};
    return (
        <div className={classNames(className, { 'active': selectedItem?.value === value, 'focusing': isFocusing })} onClick={onClick}>
            {customItem || <span>{i18nText(label)}</span>}
        </div>
    );
};

const classNameKeys = {
    select: 'cSelectItem',
    sip: 'sipItem',
    menu: 'menu',
};

const CMenus = forwardRef((props, ref) => {

    const {
        classes, className, style, title, containerStyle, menuStyle, show, menus, activeMenu, widthSameParrent, fetching, searchable, labelKey, valueKey,
        closeOnSelect, showItemHasOptions, isMultiline, isShowTotal, isMultiSelect, showFocusing, isCSelect,
        opener, placement = 'bottom-start', popperStyle, popperProps, anchorEl, minWidth, disableOnSelected, hideOnSelected, selecteds = [], selectedItem, renderWithItem,
        renderItem, extraPadding, maxHeight, tabs, customItem, showArrow, showActiveBg, autoScroll,
        searchKeyword, customSelect, noneAutoScroll, checkAll, subMenuLeft, isLoadMore,
        onRef = defaultFunc,
        onClose = defaultFunc,
        onSelect = defaultFunc,
        onCustomSearch = defaultFunc,
        renderLabel = defaultFunc,
        onHoverItem = defaultFunc,
        onMouseEnter = defaultFunc,
        onMouseLeave = defaultFunc,
        onReachedEnd = defaultFunc,
    } = props;

    const isMounted = useIsMounted();

    const [originMenus, setOriginMenus] = useState(mapSearchableMenus(tabs ? tabs[0].menus : menus));
    const [isSubMenu,] = useState(originMenus.some(i => isArray(i.subMenu, true)));
    const [displayMenus, setDisplayMenus] = useState(() => handleSortSelecteds(originMenus, props));
    const [keyword, setKeyword] = useState(searchKeyword || '');
    const [focusIdx, setFocusIdx] = useState(0);
    const [focusActive, setFocusActive] = useState(null);
    const [activeTabIdx] = useState(0);
    const [curHeight, setCurHeight] = useState(null);
    const [positionBoxSub, setPositionBoxSub] = useState({});
    const [positionBoxMenu, setPositionBoxMenu] = useState({});
    const [enableMenu] = useState(false);

    const wrapperRef = useRef(), containerRef = useRef(), openerRef = useRef(), contentRef = useRef();

    useImperativeHandle(ref, () => ({
        nodes: { wrapper: wrapperRef.current },
        handleKeyDown,
        handleSearchMenu,
        handleClose,
        getFocusIdx: () => focusIdx,
        getFocusMenu: () => displayMenus[focusIdx],
        changeFocusIdx: (isDown) => {
            if (!displayMenus.length || !isMounted()) return;
            let nextFocusIdx = focusIdx + (isDown ? 1 : -1);
            if (isDown) {
                if (nextFocusIdx === displayMenus.length) nextFocusIdx = 0;
            } else {
                if (nextFocusIdx < 0) nextFocusIdx = displayMenus.length - 1;
            }
            setFocusIdx(nextFocusIdx);
            containerRef.current.querySelector(` .${classes.menu}:nth-child(${nextFocusIdx + 1})`).scrollIntoView({ behavior: 'smooth' });
        },
    }));

    useEffect(() => {
        handleSearchMenu(searchKeyword);
    }, [searchKeyword]);

    useEffect(() => {
        const isSelect = isCSelect || customSelect || autoScroll;
        setTimeout(() => {
            if (!isMounted()) return;
            onRef(wrapperRef.current);
            if (show && isSelect && !noneAutoScroll) {
                setFocusActive(selectedItem?.value || null);
                handleAutoFocusActiveMenu(selectedItem?.value);
            }
        }, 10);
        if (!isMounted()) return;
        if (show && !isSelect) handleAutoFocusActiveMenu();
    }, [show]);

    useEffect(() => {
        let mapMenus = mapSearchableMenus(tabs ? tabs[activeTabIdx].menus : menus);
        if (!isMounted()) return;
        setOriginMenus(mapMenus);
        setDisplayMenus(handleSortSelecteds(mapMenus, props));
    }, [menus, tabs]);

    const handleAutoFocusActiveMenu = (focusMenu) => {
        let _activeMenu = (focusMenu || focusMenu === '') ? focusMenu : activeMenu, _displayMenus = displayMenus || [];
        if (hideOnSelected) _displayMenus = _displayMenus.filter(item => !selecteds.some(x => x.value === item.value));
        if ((_activeMenu || _activeMenu === '') && containerRef.current) {
            let activeMenuIdx = _displayMenus.findIndex(i => i.value === _activeMenu);
            if (activeMenuIdx) {
                let keyClassName = 'menu';
                if (isCSelect || customSelect) keyClassName = 'select';
                let activeItemEl = containerRef.current.querySelector(` .${classes[classNameKeys[keyClassName]]}:nth-child(${activeMenuIdx + 1})`);
                if (activeItemEl) containerRef.current.scrollTo({ top: activeItemEl.offsetTop - 16 });
            }
        }
    }

    const handleSearchMenu = (value) => {
        if (isLoadMore) {
            onCustomSearch(value);
        } else {
            let keywordUnsigned = removeViChar(value);
            const _displayMenus = originMenus.filter(i => onCustomSearch(i, keywordUnsigned) || (
                (!hideOnSelected || hideOnSelected && !selecteds.some(j => j.value === i.value))
                && isObjectIncludes(i, keywordUnsigned, ['labelUnsigned', 'email']))
            );
            setDisplayMenus(handleSortSelecteds(_displayMenus, props));
        }
        setKeyword(value);
        if (!curHeight) setCurHeight(containerRef.current?.offsetHeight || null);
    };

    const handleKeyDown = (e) => {
        let _displayMenus = displayMenus || [];
        if (hideOnSelected) _displayMenus = _displayMenus.filter(item => !selecteds.some(x => x.value === item.value));
        if (['ArrowUp', 'ArrowDown'].includes(e.code)) {
            const isUp = e.code == 'ArrowUp';
            let nextFocusIdx = 0;
            if (!focusActive && focusActive !== '') {
                nextFocusIdx = isUp ? _displayMenus.length - 1 : 0;
            } else {
                const findIdx = _displayMenus.findIndex(item => item.value === focusActive);
                nextFocusIdx = findIdx + (1 * (isUp ? -1 : 1));
                if (nextFocusIdx >= _displayMenus.length) {
                    nextFocusIdx = 0;
                }
                else if (nextFocusIdx < 0) {
                    nextFocusIdx = _displayMenus.length - 1;
                }
            }
            if (isNumber(nextFocusIdx)) {
                const selectValue = (_displayMenus[nextFocusIdx] || {}).value;
                setFocusActive(selectValue);
                handleAutoFocusActiveMenu(selectValue);
                e.preventDefault();
            }
        } else if (e.code === 'Enter' && (focusActive || focusActive === '')) {
            const findIdx = _displayMenus.findIndex(item => item.value === focusActive);
            if (findIdx > -1) {
                const selectMenu = _displayMenus[findIdx] || {};
                const isDisabeled = selectMenu.disabled || (disableOnSelected || hideOnSelected) && selecteds.some(i => i.value === focusActive);
                if (!isDisabeled) {
                    onSelect(selectMenu, findIdx, [...originMenus || []].findIndex(i => i.value === focusActive), tabs && tabs[activeTabIdx].id);
                    if (closeOnSelect) handleClose();
                    else setFocusActive(null);
                }
                e.preventDefault();
            }
        }
    }
    const handleClose = () => {
        onClose();
        if (!isMounted()) return;
        setFocusActive(null);
        handleSearchMenu('');
        onHoverItem(null);
    };


    let _anchorEl = anchorEl || openerRef.current;

    let wrapperProps = {
        ref: wrapperRef,
        className: classNames(classes.wrapper, className, { 'quantity': isShowTotal, 'sub-menu': isSubMenu }),
        style: {
            margin: '8px 0',
            ...(widthSameParrent && { width: _anchorEl?.clientWidth }),
            ...(minWidth && { minWidth: 200 }),
            ...style,
        },
        onMouseEnter,
        onMouseLeave,
    };

    let isEmptyMenu = !enableMenu && !keyword && hideOnSelected && selecteds.length === displayMenus.length || !displayMenus.length;

    let padding = extraPadding ? 16 : 8;
    let _containerStyle = {
        padding: `${checkAll ? 0 : padding}px ${padding}px ${padding}px`,
        maxHeight: maxHeight || (!isShowTotal ? 288 : 228),
        ...containerStyle,
        ...(curHeight && !customSelect && { minHeight: curHeight }),
    };

    let allTitle = selecteds.length === displayMenus.length ? 'uncheckAll' : 'checkAll';

    let contentNode = _anchorEl && (
        <div {...wrapperProps}>

            {!!title && <span>{title}</span>}

            {!keyword && checkAll &&
                <div className={classNames(classes.sipTotal, 'keyword')}>
                    <span className={classes.subText} onClick={() => { onSelect({ value: allTitle }); closeOnSelect && handleClose(); }}>{i18nText(allTitle)}</span>
                    <span className={classes.subText}>{i18nText('selected')}: {selecteds.length}/{displayMenus.length}</span>
                </div>
            }
            <div ref={containerRef} className={classNames({ 'scrollable-y': !isSubMenu })} style={_containerStyle}
                {...{
                    ...(isLoadMore && {
                        onScroll: (e) => {
                            let { target: { clientHeight: wrapperHeight, scrollTop } } = e;
                            let { clientHeight: containerHeight } = contentRef.current;
                            let isReachedEnd = scrollTop + wrapperHeight >= containerHeight - 150;
                            if (isReachedEnd) onReachedEnd();
                        }
                    })
                }}
            >
                <div ref={contentRef} className={classNames(classes.content, { 'sub-item': subMenuLeft, 'fetching': fetching })}>
                    {isEmptyMenu ?
                        (fetching ? <Spinkit size={8} /> : <span>{i18nText('noData')}</span>)
                        :
                        displayMenus.map((menu, idx) => {
                            let { id, avatar, email, disabled, value: _value, options, subMenu, customMenu, order, noI18, rightIcon } = menu || {};
                            const isSubItem = isArray(subMenu, true);
                            let label = menu[labelKey];
                            label = renderLabel(menu) || (noI18 ? label : ((isArray(label) && isArray(label[0]) ? label.map(i => i18nText(i)).join(' ') : i18nText(label))));
                            if (id === 'group') {
                                return (
                                    <div key={`group-${idx}`} className={classes.group}>
                                        <span>
                                            {label}
                                        </span>
                                    </div>
                                )
                            }
                            let value = menu[valueKey];
                            let isActive = activeMenu !== undefined && value === activeMenu;
                            const selected = selecteds.find(i => i.value === value);
                            if (isMultiSelect) isActive = !!selected || selecteds.includes(value);
                            let isDisabeled = disabled || (disableOnSelected || hideOnSelected) && !!selected;
                            let itemKey = id || value || idx, isFocusing = focusIdx === idx, isActiveFocusing = focusActive && focusActive === value;
                            let itemProps = {
                                className: classNames(classes.menu, {
                                    'active': isActive,
                                    'disabled': isDisabeled,
                                    'focusing': (showActiveBg && isActive) || (showFocusing && isFocusing) || isActiveFocusing,
                                    'sub-menu': isSubItem,
                                    'no-gap': subMenuLeft,
                                }),
                                onClick: (e) => {
                                    if (!isDisabeled && (!isSubItem || subMenuLeft)) {
                                        onSelect(menu, idx, [...originMenus || []].findIndex(i => i.value === _value), tabs && tabs[activeTabIdx].id);
                                        !closeOnSelect && e.stopPropagation();
                                        closeOnSelect && handleClose();
                                    }
                                },
                                onMouseOver: () => {
                                    showFocusing && !isFocusing && setFocusIdx(idx);
                                    onHoverItem(value);
                                },
                            };
                            let _renderItem;
                            if (isCSelect || customSelect) {
                                return (
                                    <CSelectItem
                                        key={itemKey}
                                        {...{ isActive, itemKey, menu, selectedItem }}
                                        isFocusing={isActiveFocusing}
                                        className={classes.cSelectItem}
                                        customItem={customItem({ ...menu, isActive: selectedItem?.value === menu?.value })}
                                        onClick={itemProps.onClick}
                                    />
                                );
                            }
                            if ((hideOnSelected && isDisabeled)) return;
                            if (renderItem) {
                                _renderItem = (
                                    <div key={itemKey} {...itemProps} style={{ height: 36, ...menuStyle }}>
                                        {renderItem(menu, idx, selected)}
                                    </div>
                                );
                            }
                            if (!renderWithItem && _renderItem) return _renderItem;
                            const itemNode =
                                customMenu ? customMenu()
                                    :
                                    <div key={itemKey} {...itemProps} style={{ height: (avatar || email || isMultiline) ? 'fit-content' : 36 }}>
                                        {isMultiSelect &&
                                            <ImageViewer
                                                style={{ marginRight: 8 }}
                                                src={icons[isActive ? 'selected' : 'unselect']}
                                                svg={{ color: isActive ? 'success' : 'primary' }}
                                            />
                                        }
                                        <div className={'wrapper'}  >
                                            <div className={'container'}> {/* default 5 item: 228 */}
                                                <span className={'label'} style={{ color: getColor('success') }}>
                                                    {label}
                                                </span>
                                            </div>
                                        </div>
                                        {showItemHasOptions && isArray(options, true) && (
                                            <div className={classes.row8}>
                                                <span className={classNames({ 'info': isActive })}>{`(${((selected || {}).children || []).length})`}</span>
                                                <ImageViewer size={12} src={icons.arrowRight} svg={{ color: 'primary' }} />
                                            </div>
                                        )}
                                        {_renderItem}
                                        {isSubItem && <ImageViewer src={icons.arrow} size={12} {...rightIcon || {}} />}
                                    </div>
                                ;
                            if (isSubItem) {
                                return (
                                    <div
                                        key={itemKey}
                                        className={classes.boxMenus}
                                        {...(subMenuLeft && {
                                            onMouseEnter: (e) => {
                                                setPositionBoxMenu({ top: e.currentTarget.getBoundingClientRect().top, width: e.currentTarget.children?.[1]?.children?.[0]?.offsetWidth || 0 });
                                            }
                                        })}
                                    >
                                        {itemNode}
                                        <div
                                            className={classNames(classes.boxSubMenus, { 'sub-menu': subMenuLeft })}
                                            style={{
                                                top: `-${((isNumeric(order) ? order : idx) * 44) + 8}px`,
                                                ...(subMenuLeft && { left: -positionBoxMenu.width - 9, top: (positionBoxMenu.top || 0) - 44 }),
                                            }}
                                        >
                                            {subMenu?.map((elm, _idx) => {
                                                const { label: _label, value: _value, subMenu: _subMenu, customSub } = elm;
                                                return (
                                                    <div
                                                        {...(!customSub && itemProps)}
                                                        key={_value + '_' + _idx}
                                                        onClick={(e) => {
                                                            if (!isDisabeled) {
                                                                onSelect({ ...menu, subItem: elm });
                                                                !closeOnSelect && e.stopPropagation();
                                                                closeOnSelect && handleClose();
                                                            }
                                                        }}
                                                    >
                                                        {_subMenu ?
                                                            <div className={classes.boxChild}
                                                                onMouseEnter={(e) => {
                                                                    const { left, right, top, width } = e.currentTarget.getBoundingClientRect();
                                                                    setPositionBoxSub({ left, right, top, width });
                                                                }}
                                                            >
                                                                {customSub ? customSub(_subMenu) :
                                                                    <div className={classes.childItem}>
                                                                        <span>{i18nText(_label)}</span>
                                                                        <ImageViewer src={icons.arrow} size={12} />
                                                                    </div>
                                                                }
                                                                {isArray(_subMenu, true) && <div className={classes.boxChildMenus} style={{ left: (positionBoxSub.left || 0) + (positionBoxSub.width || 0), top: positionBoxSub.top || 0 }}>
                                                                    {_subMenu.map((_elm, __idx) => {
                                                                        const { label: __label, value: __value, customChild } = _elm;
                                                                        return customChild ? customChild() :
                                                                            <div
                                                                                key={__value + '_' + __idx}
                                                                                className={itemProps.className}
                                                                                onClick={(e) => {
                                                                                    if (!isDisabeled) {
                                                                                        onSelect({ ...elm, subItem: _elm });
                                                                                        !closeOnSelect && e.stopPropagation();
                                                                                        closeOnSelect && handleClose();
                                                                                    }
                                                                                }}
                                                                            >
                                                                                {i18nText(__label)}
                                                                            </div>
                                                                    })}
                                                                </div>}
                                                                <div className={classNames(classes.boxEmpty, 'child')} />
                                                            </div>
                                                            : i18nText(_label)}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={classes.boxEmpty} />
                                    </div>
                                );
                            }
                            return itemNode;
                        })
                    }
                    {!isEmptyMenu && fetching && <Spinkit size={8} />}
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            {opener &&
                <CButton
                    {...opener}
                    {...(showArrow && {
                        endIcon: {
                            size: 12,
                            src: icons.arrowDown,
                            svg: { color: 'primary' },
                            className: classNames('anim-menu-arrow', { 'active': show }),
                        },
                    })}
                    {...(!anchorEl && { onRef: openerRef })}
                />
            }
            {show && _anchorEl &&
                <Popper open anchorEl={_anchorEl} style={{ zIndex: 9999, ...popperStyle }} {...{ placement, ...popperProps }}>
                    <ClickAwayListener onClickAway={handleClose}>
                        {contentNode}
                    </ClickAwayListener>
                </Popper>
            }
        </Fragment>
    )

});

CMenus.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    anchorEl: PropTypes.any,
    menus: PropTypes.array.isRequired,
    activeMenu: PropTypes.any, // value of active menu
    widthSameParrent: PropTypes.bool,
    fetching: PropTypes.any, // show loading menu options 
    minWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]), // add minWidth = 200px to wrapper
    plh: PropTypes.string,
    placement: PropTypes.string,
    popperStyle: PropTypes.any,
    popperProps: PropTypes.any,
    disableOnSelected: PropTypes.bool,
    hideOnSelected: PropTypes.bool,
    selecteds: PropTypes.any,
    isMultiSelect: PropTypes.bool, // show UI like filter multi base
    isShowTotal: PropTypes.bool,
    isShowCounter: PropTypes.bool, // show UI for SIP number
    addable: PropTypes.bool,
    labelHtml: PropTypes.bool,
    noIcon: PropTypes.bool, // don't show menu icon, use for table header
    style: PropTypes.any,
    containerStyle: PropTypes.any,
    menuStyle: PropTypes.any,
    opener: PropTypes.any, // will pass to CButton props
    showFocusing: PropTypes.any,
    onClose: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
    onHoverItem: PropTypes.func,
    selectedItem: PropTypes.any,
    isCSelect: PropTypes.bool,
    customSelect: PropTypes.bool,
    customItem: PropTypes.any,
    noneAutoScroll: PropTypes.bool,
    autoFocus: PropTypes.bool,
    showArrow: PropTypes.bool,
    showActiveBg: PropTypes.bool,
    autoScroll: PropTypes.bool,
    pagination: PropTypes.object,
    isLoadMore: PropTypes.bool,
};

CMenus.defaultProps = {
    menus: [],
    closeOnSelect: true,
    labelKey: 'label',
    valueKey: 'value',
    onRef: () => true,
    onClose: () => null,
    onAdd: () => null,
    onSelect: () => null,
    onFocusSearch: () => null,
    onBlurSearch: () => null,
    onChangeTab: () => null,
    onHoverItem: () => null,
    customItem: () => null,
};

CMenus.displayName = 'CMenus';

export default withStyles(styles)(CMenus);