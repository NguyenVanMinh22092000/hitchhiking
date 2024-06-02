import React from 'react';
import PropTypes from 'prop-types';
import * as BRSpinkit from 'better-react-spinkit';

import { styles } from './styles';
import { withStyles, } from '@mui/styles';

import { getColor } from '@utils/StyleUtils';

import { CircularProgress } from '@mui/material';
import { ImageViewer } from '@components/common';


import SpinkitIcon from '@assets/images/logo/lg_castrol_circle.svg';

class Spinkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initComp();
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;
    if (name !== prevProps.name) {
      this.initComp();
    }
  }

  initComp = () => {
    const { name } = this.props;
    this.Comp = BRSpinkit[name];
    this.setState({ rerender: true });
  };

  render() {
    const { color, row, col, size, className, name, classes } = this.props;
    if (name === 'custom') {
      return <div className={classes.wrapper}>
        <div className={classes.circleLogo}>
          <ImageViewer size={44} src={SpinkitIcon} svg />
        </div>
        <div className={classes.circle}>
          <CircularProgress color={'white'} size={64} thickness={4.6} />
        </div>
      </div>;
    }
    return this.Comp ? (
      <this.Comp {...{ color: getColor(color), row, col, size, className }} />
    ) : null;
  }
}

Spinkit.propTypes = {
  name: PropTypes.oneOf([
    'custom',
    'ChasingDots',
    'Circle',
    'CubeGrid',
    'DoubleBounce',
    'FadingCircle',
    'FoldingCube',
    'Pulse',
    'RotatingPlane',
    'ThreeBounce',
    'WanderingCubes',
    'Wave',
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
};

Spinkit.defaultProps = {
  name: 'ThreeBounce',
  color: 'success',
  size: 12,
};

export default withStyles(styles)(Spinkit);;
