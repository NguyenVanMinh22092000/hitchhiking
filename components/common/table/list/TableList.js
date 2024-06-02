import React, { Component, Fragment } from "react";
import { compose } from "ramda";
import PropTypes from "prop-types";

import withI18n from '@hocs/I18nHocs';

import { isArray } from "@utils/Utils";

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import TableHeader from '../header/TableHeader';
import TableContent from '../content/TableContent';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.restructureData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contents !== this.props.contents) {
      this.restructureData();
    }
  }

  restructureData = () => {
    const { contents, tableColumns } = this.props;

    if (!isArray(contents, true)) {
      this.setState({
        contents: [],
      });
      return;
    };

    const { newData } = contents.reduce(
      (accumulator, item) => {
        const newDataObj = {};
        tableColumns.forEach((column) => {
          if (item.hasOwnProperty(column.code)) {
            newDataObj.id = item.id;
            newDataObj[column.code] = item[column.code];
          }
        });

        if (Object.keys(newDataObj).length > 0) {
          accumulator.newData.push(newDataObj);
        }

        return accumulator;
      },
      { newData: [] }
    );

    this.setState({
      contents: newData,
    });
  };

  render() {
    const { contents,  } = this.state;
    const { tableColumns, classes, fetching } = this.props;

    return (
      <div className={classes.container}>
        <TableHeader columns={tableColumns} />
        <TableContent {...{ contents, fetching }} />
      </div>
    );
  }
}

TableList.propTypes = {
  contents: PropTypes.array.isRequired,
  hasDetails: PropTypes.bool,
  tableColumns: PropTypes.array.isRequired,
};

TableList.defaultProps = {
  contents: [],
  hasDetails: false,
  tableColumns: [],
};

export default compose(withI18n(), withStyles(styles))(TableList);
