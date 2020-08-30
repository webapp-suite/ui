import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Popover from '../Popover';
import './index.less';

const Tooltip = (props) => {
    const { children, className, title, ...other } = props;
    return (
        <Popover
            className={cx(`${prefixCls}-tooltip__popover`, className)}
            content={title}
            {...other}
        >
            {children}
        </Popover>
    );
};

Tooltip.defaultProps = {
    triggerMode: 'hover',
    direction: 'up',
    align: 'middle',
};

Tooltip.propTypes = {
    className: PropTypes.string,

    children: PropTypes.element.isRequired,

    /** The title of tooltips */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    /** The mode of triggering tooltips */
    triggerMode: PropTypes.oneOf(['hover', 'click']),

    /** The direction of tooltips */
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

    /** The alignment of tooltips */
    align: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'middle']),
};

export default Tooltip;
