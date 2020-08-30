import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Layout';
import './index.less';

class Pager extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentIndex: props.currentPage,
            showPage: props.maxSerialPages || 4,
            goPageNum: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.currentPage !== nextProps.currentPage) {
            this.setState({
                currentIndex: nextProps.currentPage,
            });
        }
    }

    render() {
        const pageNum = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
        const currentIndex = this.state.currentIndex;
        return (
            <Row>
                <div className={`${prefixCls}-pager__layout-middle`}>
                    <ul className={`${prefixCls}-pager__pagination`}>
                        <li>
                            <a
                                onClick={this.handlePrevClick}
                                className={
                                    `${prefixCls}-pager__pagination-li--prev ` +
                                    (currentIndex === 1
                                        ? `${prefixCls}-pager__pagination-li--first`
                                        : '')
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    lineheight="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
                                </svg>
                            </a>
                        </li>
                        {this.getPages(currentIndex, pageNum)}
                        <li>
                            <a
                                onClick={this.handleNextClick}
                                className={
                                    `${prefixCls}-pager__pagination-li--next ` +
                                    (currentIndex === pageNum
                                        ? `${prefixCls}-pager__pagination-li--end`
                                        : '')
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    lineheight="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    {/* {!this.props.hideGo ? ( */}
                    {/* <div className={`${prefixCls}-pager-paging__go`}> */}
                    {/* <Input onChange={this.checkNumber} value={this.state.goPageNum} className={`${prefixCls}-pager__go-number`} /> */}
                    {/* <Button onClick={this.handleGoPage}>GO</Button> */}
                    {/* </div> */}
                    {/* ) : ''} */}
                </div>
            </Row>
        );
    }

    getPages(currentPage, maxPage) {
        const pages = [];
        const showPage = this.state.showPage;

        if (maxPage <= showPage + 2) {
            for (let i = 1; i <= maxPage; i++) {
                const html = this.createPageEl(i);
                pages.push(html);
            }
        } else {
            if (currentPage < showPage) {
                for (let i = 1; i <= showPage + 2 && i <= maxPage; i++) {
                    const html = this.createPageEl(i);
                    if (i < maxPage - 1 && i === showPage + 1) {
                        const dotsHtml = (
                            <li key={'d' + i}>
                                <span>...</span>
                            </li>
                        );
                        pages.push(dotsHtml);
                    } else {
                        if (i === showPage + 2) {
                            pages.push(this.createPageEl(maxPage, +new Date()));
                        } else {
                            pages.push(html);
                        }
                    }
                }
            } else if (currentPage >= showPage && currentPage + showPage <= maxPage + 1) {
                pages[0] = this.createPageEl(1);
                if (currentPage === 3) {
                    pages[1] = this.createPageEl(2);
                } else {
                    pages[1] = (
                        <li key="d1">
                            <span>...</span>
                        </li>
                    );
                }
                let i = currentPage + 1 - parseInt(showPage / 2);
                for (; i < currentPage + parseInt(showPage / 2); i++) {
                    const html = this.createPageEl(i);
                    pages.push(html);
                }
                pages.push(
                    <li key={'d' + i}>
                        <span>...</span>
                    </li>
                );
                pages.push(this.createPageEl(maxPage));
            } else {
                pages[0] = this.createPageEl(1);
                pages[1] = (
                    <li key="d1">
                        <span>...</span>
                    </li>
                );
                let i = currentPage;
                if (maxPage - currentPage < showPage - 1) {
                    i = currentPage - (showPage - 1 - (maxPage - currentPage));
                }
                for (; i <= maxPage; i++) {
                    const html = this.createPageEl(i);
                    pages.push(html);
                }
            }
        }
        return pages;
    }

    createPageEl = (num, key) => {
        key = key || num;
        const active = `${prefixCls}-pager__pagination-li--active`;
        const isActive = this.state.currentIndex === num ? active : '';
        return (
            <li key={key} className={isActive} onClick={this.handleClick.bind(this, num)}>
                <a>{num}</a>
            </li>
        );
    };

    handleClick(i) {
        this.setState({
            currentIndex: i,
        });
        if (this.props.onSelect) {
            this.props.onSelect(i);
        }
    }

    // handleGoPage = () => {
    //   let number = parseInt(this.state.goPageNum) || this.state.currentIndex
    //   const pageNum = Math.ceil(this.props.totalItems / this.props.itemsPerPage)
    //
    //   if (number <= 0) {
    //     number = 1
    //   } else if (number > pageNum) {
    //     number = pageNum
    //   }
    //
    //   this.setState({
    //     currentIndex: number
    //   })
    //
    //   number !== this.state.currentIndex && this.props.onSelect && this.props.onSelect(number)
    // }

    // checkNumber = (e) => {
    //   const value = e.target.value
    //   const numberReg = /^\+?[1-9][0-9]*$/
    //   if (!numberReg.test(value)) {
    //     this.setState({
    //       goPageNum: ''
    //     })
    //   } else {
    //     this.setState({
    //       goPageNum: value
    //     })
    //   }
    // }

    handlePrevClick = () => {
        if (this.state.currentIndex > 1) {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
            });
            if (this.props.onSelect) {
                this.props.onSelect(parseInt(this.state.currentIndex - 1));
            }
        }
    };

    handleNextClick = () => {
        const pageNum = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
        if (this.state.currentIndex < pageNum) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
            });
            if (this.props.onSelect) {
                this.props.onSelect(parseInt(this.state.currentIndex + 1));
            }
        }
    };
}

Pager.defaultProps = {
    currentPage: 1,
    itemsPerPage: 20,
    // hideGo: true
};

Pager.propTypes = {
    /** Total count of items */
    totalItems: PropTypes.number.isRequired,

    /** The count of items per page, default value is `20` */
    itemsPerPage: PropTypes.number,

    /** Current page number, starting with `1`, default value is `1` */
    currentPage: PropTypes.number,

    /** Maximum number of consecutive page Numbers displayed, default value is `4` */
    maxSerialPages: PropTypes.number,

    /** The event of the selected page number, param is the the of selected page */
    onSelect: PropTypes.func,
};

export default Pager;
