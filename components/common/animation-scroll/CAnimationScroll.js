import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getListenTriggerViewedIds, getWebCallback, setListenTriggerViewedIds, setWebCallback } from '@utils/WebUtils';
import { random10Str } from '@utils/StringUtils';
import { isArray } from '@utils/Utils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const opacityTypes = ['fadeIn', 'bounceIn', 'fadeInUp'];

const CAnimationScroll = (props) => {
    const { id, type, children, delay, infinite, triggerViewedId, style } = props;
    const [sectionId] = useState(id || random10Str());
    const [nodeId] = useState(`animation_${sectionId}`);

    useEffect(() => {
        handleTriggerAnimation();
        setWebCallback(`pageScroll_${sectionId}`, () => handleTriggerAnimation());
        setWebCallback(`triggerAnimationViewd_${sectionId}`, () => handleTriggerAnimation(true));
        if (triggerViewedId && triggerViewedId !== sectionId) setListenTriggerViewedIds('add', triggerViewedId, sectionId);
        if (opacityTypes.includes(type)) {
            const node = document.getElementById(nodeId);
            if (node) {
                node.style.opacity = 0;
            }
        }
        return () => {
            setWebCallback(`pageScroll_${sectionId}`);
            setWebCallback(`triggerAnimationViewd_${sectionId}`);
            setListenTriggerViewedIds('remove', triggerViewedId);
        }
    }, []);

    const handleTriggerAnimation = (skipInView) => {
        const classNames = ['animated'];
        if (infinite) classNames.push('infinite');
        const node = document.getElementById(nodeId);
        if (node) {
            const onTrigger = () => {
                setTimeout(() => node.classList.add(...[...classNames, type]), delay);
                setWebCallback(`pageScroll_${sectionId}`);
                setWebCallback(`triggerAnimationViewd_${sectionId}`);
                const listenIds = getListenTriggerViewedIds(triggerViewedId);
                if (isArray(listenIds, true)) {
                    listenIds.forEach(i => {
                        if (i !== sectionId) {
                            getWebCallback(`triggerAnimationViewd_${i}`)();
                            setListenTriggerViewedIds('remove', triggerViewedId);
                        }
                    });
                }
            }
            if (skipInView) {
                onTrigger();
            } else {
                new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            onTrigger()
                        }
                        observer.unobserve(entry.target);
                    })
                }).observe(node);
            }
        }
    }

    return (
        <div id={nodeId} {...{ style }}>
            {children}
        </div>
    )
}

CAnimationScroll.defaultProps = {
    type: 'bounceIn',
    infinite: false,
    delay: 0,
    // hinge | bounceIn | bounceOut | flipOutX | flipOutY | bounce | flash | pulse | rubberBand | shake | headShake | swing | tada | wobble | jello 
    // bounceInDown | bounceInLeft | bounceInRight | bounceInUp | bounceOutLeft | bounceOutDown | bounceOutRight | bounceOutUp 
    // fadeIn | fadeInDown | fadeInDownBig | fadeInLeft | fadeInLeftBig | fadeInRight | fadeInRightBig | fadeInUp | fadeInUpBig
    // fadeOut | fadeOutDown | fadeOutDownBig | fadeOutLeft | fadeOutLeftBig | fadeOutRight | fadeOutRightBig | fadeOutUp | fadeOutUpBig 
    // flip | flipInX | flipInY | flipOutX | flipOutY | lightSpeedIn | lightSpeedOut | rotateIn | rotateInDownLeft | rotateInDownRight | rotateInUpLeft | rotateInUpRight
    // rotateOut | rotateOutDownLeft | rotateOutDownRight | rotateOutUpLeft | rotateOutUpRight | rollIn | rollOut
    // zoomIn | zoomInDown | zoomInLeft | zoomInRight | zoomInUp | zoomOut | zoomOutDown | zoomOutLeft | zoomOutRight | zoomOutUp
    // slideInDown | slideInLeft | slideInRight | slideInUp | slideOutDown | slideOutLeft | slideOutRight
};

CAnimationScroll.propTypes = {
    type: PropTypes.string,
    delay: PropTypes.number,
    infinite: PropTypes.bool,
};

export default withStyles(styles)(CAnimationScroll);