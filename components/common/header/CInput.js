import React, { Component } from 'react';
import { compose } from 'ramda';
import PropTypes from 'prop-types'; // Fix import for PropTypes

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { InputBase } from '@mui/material';

class CInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isDeleting !== this.props.isDeleting) {
      this.setState({ value: '' });
    }
  };

  isFunction = (variable) => {
    return typeof variable === 'function';
  };

  handleChange = (e) => {
    const { onChange, phoneNumberOnly } = this.props;
    const newValue = e.target.value;
    const validPhoneNumberRegex = /^[0-9]*$/;
    if (newValue.length > 10 || !validPhoneNumberRegex.test(newValue)) {
      return;
    }
    this.setState({ value: newValue });
    if (this.isFunction(onChange)) {
      onChange(newValue);
    }
  };


  render() {
    const { value } = this.state;
    const { classes, i18n, placeholder } = this.props;
    return (
      <div>
        <InputBase
          classes={{ root: classes.root, input: classes.input }}
          placeholder={i18n.t(placeholder)}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

CInput.propTypes = {
  phoneNumberOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
};

CInput.defaultProps = {
  phoneNumberOnly: false,
  placeholder: '',
  width: null,
  onChange: () => { },
  onEnter: () => { },
};

export default compose(withI18n(), withStyles(styles))(CInput);
