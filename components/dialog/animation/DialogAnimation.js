import React from 'react';
const confetti = require('canvas-confetti');
import { compose } from 'ramda';
import PropTypes from 'prop-types';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { RatioView } from '@components/common';

import Dialog from '@mui/material/Dialog';

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['#e0334c', '#F00023', '#009343', '#06b255', '#07ee71'],
};

const videos = {
    gift: require('public/static/videos/gift.webm').default,
    box: require('public/static/videos/gift.gif').default,
};

class DialogAnimation extends React.Component {

    constructor(props) {
        super(props);
        this._mounted = true;
        this.videoRef = null;
        this.state = {
        };
        this.isShow = false;
    }

    componentWillUnmount() {
        this._mounted = false;
        this.imgGif = null;
    }

    toggleAnimation = () => {
        const myCanvas = document.getElementById('anmation_canvas');
        if (myCanvas) {
            myCanvas.width = window.innerWidth;
            myCanvas.height = window.innerHeight;
            let myConfetti = confetti.create(myCanvas);
            myConfetti({
                ...defaults,
                particleCount: 100,
                scalar: 1.2,
                shapes: ['star']
            });
            myConfetti({
                ...defaults,
                particleCount: 40,
                scalar: 0.75,
                shapes: ['circle']
            });
        }
    }

    handleLoad = () => {
        // this.videoRef.currentTime 
        if (!this.isShow) {
            // setTimeout(() => {
            //     this.toggleAnimation();
            // }, 1000);
            this.isShow = true;
            setTimeout(() => {
                if (this._mounted) this.props.onClose();
            }, 2000);
        }
    };

    render() {
        const { classes, } = this.props;
        const Comp = (
            <div className={classes.gift}>
                <RatioView ratio={1}>
                    <img
                        style={{ objectFit: 'cover' }}
                        ref={ref => { if (ref) this.imageRef = ref; }}
                        src={videos.box}
                        onLoad={this.handleLoad}
                    />
                </RatioView>
            </div>
        );
        return (
            <Dialog
                open
                {...{
                    maxWidth: 'sm',
                    fullWidth: false,
                    classes: {
                        paper: classes.paper,
                        scrollPaper: classes.scrollPaper,
                    },
                    // onClose: this.props.onClose
                }}
            >
                <div className={classes.wrapper}>
                    <div className={classes.canvas}>
                        {/* <canvas id={'anmation_canvas'} /> */}
                        {Comp}
                    </div>
                </div>

            </Dialog>
        );
    }
}

DialogAnimation.propTypes = {
    msg: PropTypes.string,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
};

DialogAnimation.defaultProps = {
    msg: '',
};

export default compose(withI18n('winner'), withStyles(styles))(DialogAnimation);