import React, { forwardRef, useState, useEffect } from 'react';

import { getI18nLng, onI18nChangeLng, rmI18nChangeLng, getI18nLeadedLng, setI18nLeadedLng, i18nText } from '@libs/i18n';

import { useIsMounted } from '@utils/CoreUtils';

import { getDisplayName } from '@mui/utils';

const withI18n = (...inputLngs) => WrappedComponent => {

    const WrappedComponentName = getDisplayName(WrappedComponent);

    const I18nHocs = forwardRef(function (props, ref) {

        const isMounted = useIsMounted();

        const mainInputLng = useState(inputLngs[0] ? 'c_' + inputLngs[0] : '')[0];
        const [componentId] = useState(WrappedComponentName + '_' + String(Math.random()).substring(2));
        const [isReady, setReady] = useState(inputLngs.length ? inputLngs.every(i => !!getI18nLeadedLng('c_' + i)) : true);
        const [lng, setLng] = useState(getI18nLng());

        const initLngs = async () => {
            for (let inputLng of inputLngs) {
                if (isMounted()) {
                    let imported = await import(`@libs/i18n/lngs/${inputLng}/index`);
                    if (!isMounted()) return;
                    setI18nLeadedLng('c_' + inputLng, imported.default);
                }
            }
            setReady(true);
        }

        useEffect(() => {
            if (!isReady) initLngs();
            onI18nChangeLng(componentId, _lng => setLng(_lng));
            return () => {
                rmI18nChangeLng(componentId);
            }
        }, []);

        if (!isReady) return null;

        return (
            <WrappedComponent
                {...{ ...props, ref }}
                i18n={{ lng, t: (...args) => i18nText(args[0], { ...args[1], m: mainInputLng }), lngId: mainInputLng }}
            />
        );

    });

    I18nHocs.displayName = `WithI18n(${WrappedComponentName})`;

    return I18nHocs;

};

export default withI18n;