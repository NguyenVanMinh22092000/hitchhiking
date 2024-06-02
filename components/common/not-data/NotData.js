import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { i18nText } from '@libs/i18n';

import { getAnimationStyle, getShadowStyle, normalizeComponent } from '@utils/StyleUtils';

import { withStyles } from '@mui/styles';
import { boxShadows } from '@styles/theme';
import { styles } from './styles';

import Spinkit from '../spinkit';
import ImageViewer from '../image-viewer/ImageViewer';

import SpinkitIcon from '@assets/images/logo/lg_omi_primary_circle.svg';

class NotData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this._mounted = true;
    }

    componentDidMount() {
        const { miniMode } = this.props;
        if (!miniMode) {
            import('@assets/images/common/img_no_data.svg').then(imported => {
                if (!this._mounted) return;
                this.emptyImage = imported.default;
                this.setState({ triggerRender: true });
            });
        }
    }

    componentWillUnmount() { this._mounted = false; }

    render() {
        const { classes, miniMode, noBg, flatBg, message, fetching, fullHeight, style, flexible, imgSize, noMessage, Comp, noBorder, containerStyle, noShadow } = this.props;
        const emptyMsg = message || i18nText('noDataYet');
        if (miniMode) {
            return (
                <div className={classes.miniWrapper}>
                    {fetching ? <Spinkit /> : <span className={classes.text} style={{ opacity: 0.5 }}>{emptyMsg}</span>}
                </div>
            )
        }
        const wrapperStyle = {
            height: (fullHeight || flexible) ? '100%' : 320,
            maxHeight: (fullHeight || flexible) ? 'unset' : 320,
            borderRadius: noBorder ? 0 : 12,
            ...(!noShadow && getShadowStyle(flatBg ? { custom: 'none' } : { color: boxShadows.base })),
            ...(noBg && { backgroundColor: 'transparent' }),
            ...style,
        };
        const imgWidth = imgSize || (flexible ? 120 : 240);
        return (
            <div className={classes.wrapper} style={wrapperStyle}>
                <div className={classes.container} style={containerStyle}>
                    {fetching ?
                        <ImageViewer src={SpinkitIcon} size={64} style={getAnimationStyle('spin 1s infinite linear')} />
                        :
                        <Fragment>
                            <div className={classes.image} style={{ backgroundImage: `url(${this.emptyImage})`, width: imgWidth, height: imgWidth }} />
                            {!noMessage &&
                                <div className={classes.text}>
                                    {normalizeComponent(Comp, null, emptyMsg)}
                                </div>
                            }
                        </Fragment>
                    }
                </div>
            </div>
        );
    }

}

NotData.propTypes = {
    flatBg: PropTypes.bool,
    noBg: PropTypes.bool,
    fetching: PropTypes.bool,
    message: PropTypes.string,
    fullHeight: PropTypes.bool,
    style: PropTypes.any,
    flexible: PropTypes.bool,
    imgSize: PropTypes.number,
    miniMode: PropTypes.bool,
    containerStyle: PropTypes.any,
    noShadow: PropTypes.bool,
};

export default withStyles(styles)(NotData);