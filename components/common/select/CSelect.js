import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { i18nText } from '@libs/i18n';

import { initRefs } from '@utils/WebUtils';
import { getColor } from '@utils/StyleUtils';
import { isArray, removeViChar } from '@utils/Utils';

import { withStyles } from '@mui/styles';
import { styles, customClasses } from './styles';

import { ImageViewer, CMenus } from '..';

const icons = {
    dropdown: require('@assets/icons/common/sort_down.svg'),
};

const getI18nLabel = (label) => isArray(label?.[0]) ? label.map(i => i18nText(i)).join(' ') : i18nText(label);

class CSelect extends React.Component {

    constructor(props) {
        super(props);
        this._refs = initRefs('wrapper', 'select', 'input', 'cmenu');
        this.state = {
            toggleCMenu: false,
            keyword: '',
        };
    }

    componentDidMount() {
        this.props.onRef(this._refs);
    }

    customFilter = ({ data }, searchText) => {
        let result = false, _searchText = removeViChar(searchText)?.toLowerCase();
        ['label', 'email'].forEach(field => {
            let curData = data?.[field] || '';
            if (field === 'label') curData = removeViChar(i18nText(curData));
            if (curData?.toLowerCase().includes(_searchText)) result = true;
        })
        return result;
    }

    _renderSelectedItem = () => {
        const { keyword } = this.state;
        const { classes, value, plh } = this.props;
        const { label, } = value || {};
        const curColor = getColor('primary');
        const _label = getI18nLabel(label);
        const _text = i18nText(_label) || <span >{i18nText(plh || 'selectOption')}</span>;
        return (
            <div className={classNames(customClasses.singleValue, { [classes.opacity]: !!keyword, })}>
                <span style={{ color: curColor, width: 'max-content' }}> {_text} </span>
            </div>
        );
    }

    _renderItem = (item) => {
        const { label, disabled, isActive } = item;
        const curColor = getColor((isActive ? 'success' : 'primary'));
        const _label = getI18nLabel(label);
        const _text = _label;
        let comp = (
            <div
                className={classNames(customClasses.option, { disabled: disabled, 'is-disabled': disabled })}
                style={{
                    height: 20,
                    color: `${getColor(isActive ? 'success' : 'primary')}!important`,
                    background: 'transparent',
                    ...(disabled && { cursor: 'not-allowed' }),
                }}
            >
                <div className={'wrapper'}>
                    <div className={'container'}>
                        <span className={'label'} style={{ color: curColor }}> {_text} </span>
                    </div>
                </div>
            </div>
        )
        return comp;
    }

    render() {
        const { keyword, toggleCMenu } = this.state;
        const {
            classes, customStyles, className, isError, disabled, value,
            options, onChange, isSearchable, menuPlacement, noneAutoScroll, autoComplete, onSearch,
        } = this.props;
        let wrapperProps = {
            ref: this._refs.wrapper,
            style: customStyles.wrapper,
            className: classNames(classes.wrapper, className, { 'error': isError, 'disable': disabled, 'active': toggleCMenu }),
            ...(!disabled && {
                onClick: () => {
                    if (toggleCMenu) this._refs.input.current.blur()
                    else this._refs.input.current.focus()
                    this.setState({ toggleCMenu: !toggleCMenu });
                },
            }),
        };
        return (
            <Fragment>
                <div {...wrapperProps}>
                    <div className={classes.boxSelected} ref={this._refs.select}>
                        <div className={classes.boxInput}>
                            <input
                                disabled={disabled}
                                value={keyword}
                                ref={this._refs.input}
                                className={classNames(classes.input, { [classes.hide]: !isSearchable })}
                                onChange={(e) => {
                                    this.setState({ keyword: e.target.value });
                                    onSearch(e.target.value);
                                }}
                                onKeyDown={(e) => this._refs.cmenu.current?.handleKeyDown(e)}
                                autoComplete={autoComplete}
                            />
                            {this._renderSelectedItem()}
                        </div>
                        <div className={classNames(classes.boxIcons, { 'rotate': toggleCMenu })}>
                            <ImageViewer src={icons.dropdown} svg={{ color: 'primary' }} size={12} />
                        </div>
                    </div>
                </div>
                <CMenus
                    {...{ noneAutoScroll }}
                    widthSameParrent
                    searchable
                    customSelect
                    ref={this._refs.cmenu}
                    anchorEl={this._refs.wrapper.current}
                    show={toggleCMenu}
                    menus={options}
                    selectedItem={value}
                    searchKeyword={keyword}
                    onClose={() => this.setState({ toggleCMenu: false }, () => this._refs.input.current.blur())}
                    onSelect={(_value) => this.setState({ value: _value, keyword: '' }, () => onChange(_value))}
                    customItem={this._renderItem}
                    placement={menuPlacement}
                />
            </Fragment>
        );
    }

}

CSelect.propTypes = {
    value: PropTypes.any,
    disabled: PropTypes.bool,
    isSearchable: PropTypes.bool,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    customStyles: PropTypes.object, // { wrapper, ...ReactSelectStyle }
    className: PropTypes.any,
    plh: PropTypes.string,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    autoPlacement: PropTypes.bool,
    subLabel: PropTypes.any,
    notI18: PropTypes.bool,
    noneAutoScroll: PropTypes.bool,
    autoComplete: PropTypes.string,
};

CSelect.defaultProps = {
    menuPlacement: 'bottom-start',
    customStyles: {},
    options: [],
    value: null,
    isSearchable: true,
    onRef: () => null,
    onSearch: () => null,
    onChange: () => null,
};

export default withStyles(styles)(CSelect);