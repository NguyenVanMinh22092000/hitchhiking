import React, { useEffect, Children, isValidElement, cloneElement, useRef, useState } from 'react';

import { getAllWebCallBack, setWebCallback, } from '@utils/WebUtils';

import { ImageViewer } from '@components/common';
import BreadcrumbsAndTitle from './childs/breadcrumbs-and-title';

import { layoutSizes, navbarSizes } from '@constants/Configs';

const icons = {
    up: require('@assets/icons/common/arrow_up.svg'),
};


let isRendered = false, bottomPos = 20;

const PageContainer = (props) => {
    const { classes, children } = props;

    const [reRender, setReRender] = useState(true);
    const containerRef = useRef();

    useEffect(() => {
        history.scrollRestoration = 'manual'; // Prevent automatic browser scroll on refresh 
        setWebCallback('rrr', () => {
            setReRender(false);
            setTimeout(() => setReRender(true), 100);
        });
        setWebCallback('scrollPageToViewId', handleScrollToView);
        handleScroll2Top();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll2Top);
        return () => {
            setWebCallback('scrollPageToViewId');
            window.removeEventListener('scroll');
            window.removeEventListener('resize');
        }
    }, []);

    useEffect(() => {
        isRendered = true;
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [window.location.pathname]);

    const handleScrollToView = (id) => {
        if (!id) return;
        const node = document.getElementById(id);
        if (node) {
            const top = node.offsetTop;
            const height = node.offsetHeight;
            const winHeight = window.screen.height;
            let scrollTop = top - 0;
            if (winHeight / 2 >= height) {
                scrollTop = top - (height / 2);
            } else if (winHeight <= height) {
                scrollTop = top - navbarSizes.desktop + 40;
            } else scrollTop = top - ((winHeight - height) / 2);
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
    }

    const handleScroll2Top = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scroll2TopBtn = document.getElementById('session-btn-right'),
            layoutNode = document.getElementById('layout-container');
        if (scroll2TopBtn && layoutNode) {
            scroll2TopBtn.classList[scrollTop >= window.screen.height / 4 ? 'remove' : 'add']('hide');
            if (layoutNode.offsetWidth > 1440) {
                const right = (layoutNode.offsetWidth - layoutSizes) / 2;
                const footerNode = document.getElementById('layout-footer');
                scroll2TopBtn.style.right = `${right - 54}px`;
                scroll2TopBtn.style.bottom = `${bottomPos}px`;
                if (footerNode) {
                    new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            const { intersectionRect, isIntersecting } = entry || {};
                            if (isIntersecting) {
                                const { height } = intersectionRect || {};
                                bottomPos = height + 20;
                                scroll2TopBtn.style.bottom = `${bottomPos}px`;
                            } else {
                                bottomPos = 20;
                            }
                            observer.unobserve(entry.target);
                        })
                    }).observe(footerNode);
                }
            } else {
                scroll2TopBtn.style.right = `16px`;
                scroll2TopBtn.style.bottom = `16px`;

            }
        }
    }

    const handleScroll = (e) => {
        getAllWebCallBack('pageScroll').map(cb => cb(e));
        handleScroll2Top();
    }

    return (
        <div
            id={'page-container'}
            ref={containerRef}
            className={classes.container}
        >
            <BreadcrumbsAndTitle />
            {reRender && Children.map(children, child => isValidElement(child) ? cloneElement(child) : child)}
            <div
                id={'session-btn-right'}
                className={classes.sessionBtns}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ImageViewer svg clickable src={icons.up} />
                <span>TOP</span>
            </div>
        </div>
    );
};


export default PageContainer; 