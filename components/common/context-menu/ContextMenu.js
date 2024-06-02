import React, { PureComponent, Fragment, createRef, cloneElement, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';

import Tooltip from '../tooltip';
import ImageViewer from '../image-viewer';

const Menus = forwardRef((props, ref) => {

    const { id, animation = false, menus, onClick } = props;

    const { show } = useContextMenu({ id });

    useImperativeHandle(ref, () => ({ show: (e, options) => { e.preventDefault(); show(e, options); } }));

    const renderMenuItem = (menu, key) => {
        let { label: _label, disabled: _disabled, hidden, separator } = menu;
        if (separator) return <Separator {...{ key }} />;
        return (
            <Item {...{ key, hidden }} disabled={_disabled} onClick={() => onClick(menu)}>
                {_label}
            </Item>
        )
    };

    return (
        <Menu {...{ id, animation }}>
            {menus.map((menu, index) => {
                const { id: _id, label, disabled: _disabled, hidden, subs, icons } = menu;
                let baseProps = { key: index, hidden, disabled: _disabled };
                if (subs) {
                    return (
                        <Submenu {...baseProps} label={label}>
                            {subs.map((child, idx) => renderMenuItem(child, `${_id}-${idx}`))}
                        </Submenu>
                    )
                }
                if (icons) {
                    return (
                        <Item {...baseProps} className={'react-contexify__iconmenu'}>
                            {icons.map((icon) => {
                                const { id: iconMenuId, tooltip, ...iconProps } = icon;
                                return (
                                    <Tooltip key={`${index}-${iconMenuId}`} placement={'top'} style={{ marginBottom: '0 !important' }} {...tooltip}>
                                        <div className={'react-contexify__iconmenu_item'} onClick={() => onClick(icon)}>
                                            <ImageViewer {...iconProps} size={20} />
                                        </div>
                                    </Tooltip>
                                )
                            })}
                        </Item>
                    )
                }
                return renderMenuItem(menu, index);
            })}
        </Menu>
    )
});

Menus.displayName = 'CtxMenus';

class ContextMenu extends PureComponent {

    constructor(props) {
        super(props);
        this.menuRef = createRef({});
    }

    show = (...args) => this.menuRef.current.show(...args);

    render() {
        const { children, disabled, openMethod, ...menuProps } = this.props;
        return (
            <Fragment>
                {children && cloneElement(children, { [openMethod || 'onContextMenu']: this.show })}
                {!disabled && <Menus {...menuProps} ref={this.menuRef} />}
            </Fragment>
        )
    }

}

ContextMenu.propTypes = {
    id: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
};

ContextMenu.defaultProps = {
    menus: [],
};

export default ContextMenu;