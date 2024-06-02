import React, { Component } from 'react';
import { compose } from 'ramda';

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { BackgroundSection, CTitle, RatioView } from '@components/common';

const images = {
    backdrop: require('@assets/images/common/bg_green.png'),
    specialPrize: require('@assets/images/common/bg_livestream_prize.png'),
};

class LivestreamSpecialDialPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            renderReady: false,
        };
        this._mounted = true;
    }

    render() {
        const { i18n, classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.cLayout}>
                    <CTitle label={i18n.t('livestreamSpecialPrize')} />
                    <div className={classes.content}>
                        {[1, 2, 3, 4].map(key => {
                            return (
                                <span
                                    key={key}
                                    className={key === 4 ? 'error' : ''}
                                    dangerouslySetInnerHTML={{ __html: i18n.t(`livestreamInfoMsg.${key}`) }}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className={classes.backdrop}>
                    <RatioView ratio={9 / 16}>
                        <BackgroundSection src={images.specialPrize} />
                    </RatioView>
                </div>
            </div>
        );
    }
}


export default compose(withI18n('winner'), withStyles(styles))(LivestreamSpecialDialPage);