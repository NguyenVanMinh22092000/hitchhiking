import React, { Component } from "react";
import { compose } from "ramda";
import PropTypes from "prop-types";

import withI18n from "@hocs/I18nHocs";

import { isArray } from "@utils/Utils";

import { withStyles } from "@mui/styles";
import { styles } from "./styles";

class TableHeader extends Component {
  render() {
    const { classes, columns, i18n } = this.props;
    if (!isArray(columns, true)) {
      return null;
    }

    return (
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          {(columns|| []).map(({ code, name, type }) => {
            const isOrder = type === "order";
            const label = i18n.t(isOrder ? "serialNumber" : name);
            return (
              <div
                key={code}
                style={
                  !isOrder
                    ? { flex: 1 }
                    : { flexShrink: 1, minWidth: 25, maxWidth: 40 }
                }
              >
                <div>{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

TableHeader.defaultProps = {
  columns: null,
};

export default compose(withI18n("winner"), withStyles(styles))(TableHeader);
