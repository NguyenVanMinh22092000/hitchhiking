import React, { forwardRef, useEffect, useState } from 'react';

import { useTheme, } from '@mui/styles';

import { getDisplayName } from '@mui/utils';

const withBreakPoints = () => WrappedComponent => {
    const WrappedComponentName = getDisplayName(WrappedComponent);

    const BreakPointHocs = forwardRef(function (props, ref) {
        const breakpointsValues = useTheme().breakpoints.values || {};
        const [breakpoints, setBreakpoints] = useState();

        useEffect(() => {
            const getBpValue = (key) => breakpointsValues[key] || 0;
            setBreakpoints({
                up: (key) => window.innerWidth >= getBpValue(key),
                down: (key) => window.innerWidth < getBpValue(key),
                between: (start, end) => getBpValue(start) <= window.innerWidth && window.innerWidth < getBpValue(end),
            });
        }, []);

        if (!breakpoints) return null;

        return (
            <WrappedComponent
                {...{ ...props, ref, breakpoints }}
            />
        );

    });
    BreakPointHocs.displayName = `withBreakPoints(${WrappedComponentName})`;

    return BreakPointHocs;
}


export default withBreakPoints;