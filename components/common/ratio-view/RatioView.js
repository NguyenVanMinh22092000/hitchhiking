import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getClassName } from '@utils/StyleUtils';


const RatioView = ({ children, childClassName, ratio = 1, width = '100%', minWidth, maxWidth, noMaxWidth, noChildMaxWidth, tooltip, ...rest }) => {
    if (!ratio) return children || null;
    const wrapperProps = { style: { ...(!noMaxWidth && { width, minWidth: minWidth || width, maxWidth }) }, ...rest };
    const containerClass = classNames(childClassName, getClassName({
        top: 0, right: 0, bottom: 0, left: 0, position: 'absolute',
        ...(!noChildMaxWidth && { '&>*': { width: '100%', height: '100%' } }),
    }));
    return (
        <div {...wrapperProps}>
            <div style={{ width: '100%', paddingTop: `${(ratio) * 100}%`, position: 'relative' }}>
                <div className={containerClass}>
                    {children}
                </div>
            </div>
        </div>
    )
};

RatioView.propTypes = {
    ratio: PropTypes.number, // 16/9 | 9/16 | 3/4 | 4/3
};

export default RatioView;