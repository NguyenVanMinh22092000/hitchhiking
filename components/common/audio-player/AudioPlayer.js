import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { i18nText } from '@libs/i18n';

import { getWebCallback, showToast } from '@utils/WebUtils';

class AudioPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.player = null;
        this._mounted = true;
    }

    componentDidMount() {
        this.initAudio(this.props.url);
    }

    componentWillUnmount() {
        this._mounted = false;
        this.clearPlayer();
    }

    componentDidUpdate(prevProp) {
        const { id, url, status, otherId } = this.props;

        if (id !== prevProp.id || (id === prevProp.id && otherId !== prevProp.otherId)) {
            this.clearPlayer();
            this.initAudio(url);
        }

        if (status !== prevProp.status) {
            this.togglePlayer(status);
        }
    }

    clearPlayer = () => {
        this.player?.pause();
        this.player = null;
    }

    initAudio = (url) => {
        const { showErr, positionPlay } = this.props;
        const { start, end } = positionPlay || {};
        try {
            this.player = new Audio(url);
            this.player.onloadeddata = () => {
                if (start) this.player.currentTime = start;
                if (this._mounted) this.props.onLoaded(this.player);
            };
            this.player.ontimeupdate = (e) => {
                if (this._mounted) {
                    getWebCallback('highlightNodeByAudio')(this.player.currentTime);
                    if (end && this.player.currentTime >= end) {
                        this.player.currentTime = start || 0;
                        this.props.onEnded(e);
                    } else this.props.onPlaying(e);
                }
            };
            this.player.onended = (e) => {
                if (this._mounted) this.props.onEnded(e);
            };
            this.player.onerror = (e) => {
                if (!this._mounted) return;
                if (showErr) showToast(i18nText('err.corruptedRecordingFile'), { t: 'error' });
                this.props.onError(e);
            };
        } catch (e) {
            if (this._mounted) this.props.onError(e);
        }
    }

    togglePlayer = (status) => {
        if (!status || !this.player || !this._mounted) return;
        const { positionPlay } = this.props;
        switch (status) {
            case 'pause':
                this.player.pause();
                break;
            case 'play':
                if (this.player.currentTime >= this.player.duration && positionPlay?.start) this.player.currentTime = positionPlay.start;
                this.player.play();
                break;
            default: break;
        }
    }

    render() { return null }
}

AudioPlayer.propTypes = {
    status: PropTypes.string, // play | pause
    id: PropTypes.string,
    showErr: PropTypes.bool,
    onLoaded: PropTypes.func,
    onPlaying: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
};

AudioPlayer.defaultProps = {
    onLoaded: () => null,
    onPlaying: () => null,
    onEnded: () => null,
    onError: () => null,
};

export default AudioPlayer;