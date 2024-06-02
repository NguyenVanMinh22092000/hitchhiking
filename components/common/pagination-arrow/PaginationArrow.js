import React, { Component } from 'react';
import classNames from 'classnames';

import { genUuid, isEqual } from '@utils/Utils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CButton } from '..';

const genRow = ({ pageNumber, isCurrent = false, isMore = false, uuid, arrow = '' } = {}) => {
    return { pageNumber, isCurrent, isMore, arrow, uuid: uuid || genUuid() }
};

const icons = {
    // prev: require('@assets/icons/common/ic_less_than_filled.svg'),
    // next: require('assets/icons/common/ic_more_than_filled.svg'),
};

const paginationData = {
    hasNext: true,
    hasPrevious: false,
    nextPage: 2,
    previousPage: 1,
    pageSize: 15,
    pageNumber: 1,
    totalItems: 45,
    totalPages: 3,
};


class PaginationArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderReady: false,
            pages: [],
            openMenu: false,
        };
        this._mounted = true;
        this.menuRef = null;
    }

    componentDidMount() {
        this.initState();
    }

    componentDidUpdate(prevProps) {
        const { pagination } = this.props;
        if (!isEqual(prevProps.pagination, pagination)) {
            this.initState();
        }

    }

    componentWillUnmount() {
        this._mounted = false;
    }

    initState = () => {
        const { pagination } = this.props;
        const { pageNumber, totalPages, hasNext, hasPrevious } = pagination || paginationData || {};
        let pages = [];
        if (totalPages <= 6) {
            pages = [...Array(totalPages)].map((_, idx) => genRow({ pageNumber: idx + 1, isCurrent: idx + 1 === pageNumber }));
            if (hasNext) pages.push(genRow({ arrow: 'next' }));
            if (hasPrevious) pages.unshift(genRow({ arrow: 'prev' }));
        } else {
            const morePage = genRow({ pageNumber: '...', isMore: true });
            const firstPage = genRow({ pageNumber: 1 });
            const lastPage = genRow({ pageNumber: totalPages });
            if (pageNumber <= 2 || pageNumber >= totalPages - 2) {
                const firstRange = [1, 2, 3].map(i => genRow({ pageNumber: i, isCurrent: i === pageNumber }));
                const secondRange = [2, 1, 0].map(i => genRow({ pageNumber: totalPages - i, isCurrent: (totalPages - i) === pageNumber }));
                pages = [...firstRange, { ...morePage }, ...secondRange];
            } else if (pageNumber <= 3 || pageNumber >= totalPages - 3) {
                const isMiniRange = pageNumber <= 3;
                const range = isMiniRange ? [1, 2, 3, 4] : [3, 2, 1, 0];
                pages = range.map(i => genRow({ pageNumber: (isMiniRange ? i : totalPages - i), isCurrent: (isMiniRange ? i : totalPages - i) === pageNumber }))
                if (!isMiniRange) pages.unshift(firstPage, { ...morePage });
                else pages.push({ ...morePage }, lastPage);
            } else {
                const rangePage = [-1, 0, 1].map(i => genRow({ pageNumber: pageNumber + i, isCurrent: pageNumber + i === pageNumber }));
                pages = [firstPage, { ...morePage, uuid: genUuid() }, ...rangePage, { ...morePage }, lastPage];
            }
            if (hasPrevious) pages.unshift(genRow({ arrow: 'prev' }))
            if (hasNext) pages.push(genRow({ arrow: 'next' }))
        }
        if (this._mounted) this.setState({ pages, renderReady: true });
    }

    handleClick = (page, size) => this.props.onPageChange({ size, page });

    render() {
        const { pages, renderReady } = this.state;
        const { classes, pagination } = this.props;
        if (!renderReady) return null;
        const { hasNext, hasPrevious, nextPage, previousPage, pageSize, pageNumber: _pageNumber, totalItems } = pagination || paginationData || {};
        const baseBtnProps = {
            style: { borderRadius: 6 },
            className: classNames(classes.buttonBase),
        }
        return (
            <div className={classes.wrapper}>
                <div>
                    {pages.map(page => {
                        const { pageNumber, isCurrent, arrow, uuid } = page;
                        const next = hasNext && arrow === 'next' ? nextPage : null;
                        const prev = hasPrevious && arrow === 'prev' ? previousPage : null;
                        const itemPage = arrow ? next || prev : pageNumber;
                        const bProps = {
                            key: uuid,
                            ...baseBtnProps,
                            ...(arrow ? { icon: { svg: true, src: icons[arrow], size: 11 } } : { text: pageNumber }),
                            ...(isCurrent && { color: 'info' }),
                            onClick: () => this.handleClick(itemPage, pageSize),
                        };
                        return <CButton {...bProps} />
                    })}
                </div>
            </div>
        );
    }
}

PaginationArrow.defaultProps = {
    onPageChange: () => null
}

export default withStyles(styles)(PaginationArrow);