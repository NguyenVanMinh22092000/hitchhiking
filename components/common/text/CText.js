import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const CText = (props) => {
    const { text, type, classes, color, size, className, ..._props } = props;

    return createElement(type, {
        ..._props,
        className: classNames(classes.text, className, { [color]: true, [size]: true, }),
    }, text);
};

CText.defaultProps = {
    type: 'p',
    size: 'text',
    color: 'primary',
};

CText.propTypes = {
    text: PropTypes.any,
    color: PropTypes.string, // primary | success | error | info | warning 
    size: PropTypes.string, // text | textBold | medium
    type: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div']),
    className: PropTypes.any,
    style: PropTypes.any,
};

export default withStyles(styles)(CText);