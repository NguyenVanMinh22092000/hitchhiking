import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const CLine = (props, ref) => {
    const { classes, width, height, vertical, noMargin, style, color = 'info' } = props;
    return (
        <div
            ref={ref}
            style={{
                margin: noMargin ? 0 : (vertical ? '0 24px' : '24px 0'),
                width: width || (vertical ? 1 : '100%'),
                height: height || (vertical ? '100%' : 1),
                ...style,
            }}
            className={classNames(classes.line, { [color]: true })}
        />
    );
};

export default withStyles(styles)(forwardRef(CLine));