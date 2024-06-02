import React, { Component } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';

import withI18n from '@hocs/I18nHocs';

import { isArray } from '@utils/Utils';
import { genCommonFieldsTblData } from '@utils/TableUtils';
import { apiWinnerGetRequest } from '@services/apis/winner/WinnerAPIsUtils';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { CTitle, Spinkit } from '@components/common';
import CInput from '@components/common/header/CInput';
import Pagination from '@components/common/pagination/Pagination';
import TableList from '@components/common/table/list/TableList';

import PaginationEnum from '@variables/PaginationEnum';


class WinnerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth < 768,
            inputValue: '',
            fetching: false,
            content: [],
            totalPages: 49,
            currentPage: 5,
            tableColumns: this.initTableColumn(),
        };
        this.curPage = PaginationEnum.START;
        this.curSize = PaginationEnum.SIZE;
        this.isSearching = false;
        this.isClickInput = false;
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateIsMobile);
        this.handleGetList(1);

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }

    updateIsMobile = () => {
        this.setState({ isMobile: window.innerWidth < 768 });
    };

    handleGetList = async (page = this.curPage, searching) => {
        this.setState({ fetching: true });
        const { inputValue } = this.state;
        const params = {
            page,
            size: this.curSize,
            body: {
                inputValue,
                searching,
            },
        };
        const resp = await apiWinnerGetRequest(params);
        const { payLoad } = resp;
        if (payLoad) {
            const { totalPage, data } = payLoad;
            if (!isArray(data, true)) {
                this.setState({ fetching: false, content: [], totalPages: totalPage });
            } else  {
                const newData = genCommonFieldsTblData(data, { page: this.curPage });
                this.setState({ content: newData, fetching: false, totalPages: totalPage });
                this.isSearching = false;
            }
        } else {
            this.setState({ fetching: false });
        }

    };

    handleSearch = () => {
        const { inputValue } = this.state;
        if (this.isSearching || !inputValue) {
            return;
        }
        this.isClickInput = true;
        this.isSearching = true;
        this.handleGetList(1, true);
    };

    handleChangePage = (page) => {
        this.curPage = page;
        this.handleGetList(page);
    };


    initTableColumn = () => [
        { code: 'order', name: '#', type: 'order' },
        { code: 'phoneNumber', name: 'phoneNumber' },
        { code: 'code', name: 'prizeCode' },
        { code: 'winningDate', name: 'wonDate' },
        { code: 'prizeName', name: 'prize' },
        { code: 'image', name: 'image' },
    ];

    handleInputChange = (value) => {
        this.setState({ inputValue: value }, () => {
            if (this.isClickInput && !value) {
                this.isClickInput = false;
                this.handleGetList(1);
            }
        });
    };

    render() {
        const { totalPages, tableColumns, isMobile, fetching, content } = this.state;
        const { classes, i18n } = this.props;
        const TableProps = {
            tableColumns,
            contents: content,
            fetching
        };
        const InputProps = {
            phoneNumberOnly: true,
            placeholder: 'enterPhoneNumber',
            onChange: this.handleInputChange,
        };
        const renderPaging = Array.isArray(content) && content.length !== 0 && !fetching;

        return (
            <div className={classes.cLayout}>
                <div className={classes.outer}>
                    <div className={classes.title}>
                        <CTitle label={i18n.t('winnerList')} />
                    </div>
                    <div className={classes.actions}>
                        <CInput {...InputProps} />
                        <div
                            className={classNames(classes.button, {
                                [classes.mobileActive]: isMobile,
                            })}
                            onClick={this.handleSearch}
                        >
                            {i18n.t('search')}
                        </div>
                    </div>
                    <div className={classes.wrapper}>
                        <TableList {...TableProps} />
                        {fetching && (
                            <div className={classes.loading}>
                                <Spinkit name={'custom'} />
                            </div>
                        )}
                    </div>
                    <div className={classes.footer}>
                        {renderPaging && (
                            <Pagination
                                currentPage={this.curPage}
                                totalPages={totalPages}
                                onChangePage={this.handleChangePage}
                            />
                        )}
                        {fetching && <div style={{ height: 25 }} ></div>}
                    </div>
                </div>

            </div>
        );
    }
}

export default compose(withI18n('winner'), withStyles(styles))(WinnerPage);

