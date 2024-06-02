import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "ramda";

import withI18n from "@hocs/I18nHocs";

import { withStyles } from "@mui/styles";
import { styles } from "./styles";

import ImageViewer from "../image-viewer/ImageViewer";
import { genUuid } from "@utils/Utils";

const icons = {
  arrow_right: require("@assets/icons/common/vector.svg"),
  arrow_left: require("@assets/icons/common/reverse_vector.svg"),
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageRange: props.currentPage,
    };
  }

  handlePageChange = (newPageRange) => {
    const { onChangePage } = this.props;
    this.setState({ currentPageRange: newPageRange }, () => {
      onChangePage(newPageRange);
    });
  };

  handleButtonClick = (onClick) => {
    const { currentPageRange } = this.state;
    const { totalPages } = this.props;

    if (onClick === "first") {
      this.handlePageChange(1);
    } else if (onClick === "prev" && currentPageRange > 1) {
      this.handlePageChange(currentPageRange - 1);
    } else if (onClick === "next" && currentPageRange < totalPages) {
      this.handlePageChange(currentPageRange + 1);
    } else if (onClick === "last") {
      this.handlePageChange(totalPages);
    }
  };

  _renderPageNumbers = () => {
    const { currentPageRange } = this.state;
    const { currentPage, totalPages, onChangePage, classes } = this.props;
    const pageNumbers = [];
    const numDisplayPages = 5;

    if (totalPages <= numDisplayPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push([
          genUuid(),
          i
        ]);
      }
    } else {
      if (currentPageRange + 4 < totalPages) {
        for (let i = currentPageRange; i <= currentPageRange + 4; i++) {
          pageNumbers.push([
            genUuid(),
            i
          ]);
        }
        pageNumbers.push([
          genUuid(),
          "..."
        ]);
      } else {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push([
            genUuid(),
            i
          ]);
        }
      }
    }

    return pageNumbers.map(([key, label]) => (
      <span
        key={label}
        onClick={() => this.handlePageChange(label)}
        className={
          currentPageRange === label ? classes.active : classes.number
        }
      >
        {label}
      </span>
    ));
  };



  render() {
    const { classes, totalPages, currentPage, isNotRenderPaging } = this.props;
    if (isNotRenderPaging) {
      return;
    }
    const { currentPageRange } = this.state;
    const isFirstPage = currentPageRange === 1;
    const isLastPage = currentPageRange === totalPages;
    return (
      <div className={classes.pagination}>
        {!isFirstPage && (
          <Fragment>
            <div
              className={classes.button}
              onClick={() => this.handleButtonClick("first")}
            >
              <ImageViewer width={6} height={12} src={icons.arrow_left} />
              <ImageViewer width={6} height={12} src={icons.arrow_left} />
            </div>
            <div
              className={classes.button}
              onClick={() => this.handleButtonClick("prev")}
            >
              <ImageViewer width={6} height={12} src={icons.arrow_left} />
            </div>
          </Fragment>
        )}
        {this._renderPageNumbers()}
        {!isLastPage && (
          <Fragment>
            <div
              className={classes.button}
              onClick={() => this.handleButtonClick("next")}
            >
              <ImageViewer width={6} height={12} src={icons.arrow_right} />
            </div>
            <div
              className={classes.button}
              onClick={() => this.handleButtonClick("last")}
            >
              <ImageViewer width={6} height={12} src={icons.arrow_right} />
              <ImageViewer width={6} height={12} src={icons.arrow_right} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.any,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default compose(withI18n(), withStyles(styles))(Pagination);
