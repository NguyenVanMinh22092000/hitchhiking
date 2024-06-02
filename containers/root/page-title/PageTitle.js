import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { isArray } from '@utils/Utils';

import { routes } from '@constants/Routes';
import { compose } from 'ramda';
import withI18n from '@hocs/I18nHocs';

const PageTitle = ({ i18n, router } = {}) => {
    const { titles } = routes.find(i => i.route === router.route) || {};
    return (
        <Head>
            <title>
                {['Castrol', ...(isArray(titles) ? titles : [titles]).map(i => i18n.t(i))].join(' | ')}
            </title>
        </Head>
    )
}

PageTitle.propTypes = {
    title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isCustom: PropTypes.bool,
};

export default compose(withI18n())(withRouter(PageTitle))