import React, { Fragment } from 'react';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { toCaseStyle } from '@utils/StringUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import PageTitle from '@containers/root/page-title';

const BreadcrumbsAndTitle = ({ i18n }) => {
    // let { dynamicTitle, titlePrefix, titles = [], query = {} } = getRouterDetail() || {};
    // let pageTitles = titles.map(i => i18n.t(i[0] === ':' ? toCaseStyle('c', getRouterQuery()[i.substring(1)]) : i)) || [];
    // if (dynamicTitle) {
    //     let pageTitle = [...titles || []].find(i => i[0] === query.pageId)[1];
    //     if (pageTitle) pageTitles = i18n.t((titlePrefix ? 'routeTitle.' : '') + pageTitle);
    // }
    // let [routeDetail] = curRouteDetail || [];
    // let { module, titles = [], } = routeDetail || {};
    // let pageTitles = titles.map(i => i18n.t(i[0] === ':' ? toCaseStyle('c', getRouterQuery()[i.substring(1)]) : i)) || []; 
    return (
        <Fragment>

            <PageTitle />

        </Fragment>
    );
};

export default compose(withStyles(styles), withI18n())(BreadcrumbsAndTitle);