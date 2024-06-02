import React, { Component } from 'react';
import { compose } from "ramda";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { isArray, isObject } from '@utils/Utils';
import { showImagePreviews } from '@utils/WebUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import NotData from '@components/common/not-data/NotData';

import userImge from '@assets/icons/common/avatar_user.png';
class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidUpdate(prevProps) {
    const { fetching } = this.props;
    if (prevProps.fetching !== fetching) {
      // return;
    }
  };

  handleZoomImge = (idx) => {
    const { contents } = this.props;
    const imageArray = (contents|| []).map(({ image }) => ({
      src: image || userImge
    }));
    showImagePreviews(imageArray, { index: idx + 1 });
  };

  objectToArray = (obj) => {
    if (isObject(obj, true)) {
      return Object.entries(obj).map(([key, value]) => ({ key, value }));
    } else {
      return [];
    }
  };

  _renderContentItem(item, idx) {
    const { classes, contents, i18n } = this.props;
    const isLastItem = idx === contents.length - 1;
    const bodyClass = isLastItem ? classes.lastBody : classes.body;
    const { order,id} = item;
    const itemArray = this.objectToArray(item || {});
    return (
      <div key={id} className={bodyClass}>
        <div className={classNames(classes.details, {})}>
          <div style={{ flexShrink: 1, minWidth: 25, maxWidth: 40 }}>
            {order || idx + 1}
          </div>

          {(itemArray || [])
            .filter(({ key }) => key !== 'id' && key !== 'order')
            .map(({ key, value }, index) => (
              <div key={key || index} style={{ flex: 1 }}>
                {key === 'image' ?
                  <div className={classes.showImage} onClick={() => this.handleZoomImge(idx)}  >
                    {i18n.t('showImage')}
                  </div>
                  : value}
              </div>
            ))}
        </div>
      </div>
    );
  }

  render() {
    const { classes, contents, fetching } = this.props;
    const isNotData = contents.length === 0;
    if (fetching) {
      return <div className={classes.loading}></div>;
    }
    if (!isArray(contents, true) || isNotData) {
      return <NotData flatBg size={72} />;
    }

    return (
      <div className={classes.content}>
        {(contents || []).map((item, idx) => this._renderContentItem(item, idx))}
      </div>
    );
  }
}

TableContent.propTypes = {
  contents: PropTypes.array.isRequired,
  hasDetails: PropTypes.bool,
};

TableContent.defaultProps = {
  contents: [],
  hasDetails: false,
};

export default compose(withI18n(), withStyles(styles))(TableContent);
