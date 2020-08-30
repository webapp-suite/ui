import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './index.less';

const Icon = (props) => {
    const { className, type, src, ...other } = props;
    return (
        <i
            className={cx(`${prefixCls}-icon`, { [`${prefixCls}-icon__${type}`]: type }, className)}
            {...other}
        >
            {src && (
                <svg>
                    <use xlinkHref={src} />
                </svg>
            )}
        </i>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    /** icon type */
    type: PropTypes.string,
    /** icon src, such as svg `xlinkHref` */
    src: PropTypes.string,
};

export default Icon;
