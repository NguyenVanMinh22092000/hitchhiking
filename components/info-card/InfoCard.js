import React, { Component } from "react";
import { compose } from "ramda";
import PropTypes from "prop-types";

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CTitle } from '@components/common';

class InfoCard extends Component {

    render() {
        const { classes, i18n, title, content } = this.props;
        return (
            <div className={classes.cLayout}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <CTitle label={i18n.t(title)} />
                    </div>
                    <div className={classes.content}>
                        {content?.map(({ id, descriptions, title }) => (
                            <div key={id} className={classes.item}>
                                <div className={classes.title}>{title}</div>
                                {descriptions?.map(item => {
                                    const { id, subTitle, inlineSymboy, blockSymbol, desc, hightlightDesc, } = item || {};
                                    return (
                                        <div key={id}>
                                            {subTitle && <div className={classes.subTitle}>{subTitle}</div>}
                                            {blockSymbol && <div className={classes.blockSymbol}>{blockSymbol}</div>}
                                            {inlineSymboy && (
                                                <span className={classes.inlineSymboy}>
                                                    {inlineSymboy}
                                                </span>
                                            )}
                                            <span className={classes.desc}>{desc}</span>
                                            <div className={classes.hightlight}>
                                                {hightlightDesc?.map(({ id, desc, highlight }) => (
                                                    <span key={id}>
                                                        <span>{desc}</span>
                                                        <span className={classes.redText}>{highlight}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

InfoCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

InfoCard.defaultProps = {
    title: '',
    content: '',
};
export default compose(withI18n(), withStyles(styles))(InfoCard);
