import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.less';

class ToolBar extends React.Component {
    render() {
        const { className, children, icon, title, ...other } = this.props;
        return (
            <div className={cx(`${prefixCls}-toolbar`, className)} {...other}>
                <ul className={`${prefixCls}-toolbar__bars`}>{children && <li>{children}</li>}</ul>
            </div>
        );
    }
}

ToolBar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default ToolBar;
