import React, { forwardRef } from 'react';

import { getColor } from '@utils/StyleUtils';

import { Tooltip } from '..';

const CLink = (props, ref) => {
    const { children, style, className, target, newTab, color, tooltip, onClick = () => null, href, ...rest } = props;
    const aProps = {
        alt: '',
        rel: 'noopener noreferrer',
        ref, href, className, onClick,
        style: { color: 'unset', ...(color && { color: getColor(color) }), ...style },
        ...(!!(target || newTab) && { target: newTab ? '_blank' : target }),
        ...rest,
    };
    return (
        <Tooltip {...tooltip}>
            <a {...aProps}>
                {children}
            </a>
        </Tooltip>
    );
};

export default forwardRef(CLink);