import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import './index.less';

function Button(props) {
    const {
        children,
        className,
        type,
        loading,
        size,
        block,
        ghost,
        icon,
        disabled,
        htmlType,
        ...other
    } = props;
    const classNames = cx(
        `${prefixCls}-button`,
        {
            [`${prefixCls}-button--${type}`]: type,
            [`${prefixCls}-button--${size}`]: size,
            [`${prefixCls}-button--ghost`]: ghost,
            [`${prefixCls}-button--loading`]: loading,
            [`${prefixCls}-button--block`]: block,
            [`${prefixCls}-button__icon-only`]: icon && !children,
        },
        className
    );
    if (icon && children) {
        return (
            <button
                type={htmlType}
                className={classNames}
                disabled={disabled || loading}
                {...other}
            >
                <div>
                    <Icon type={icon} />
                    <span>{children}</span>
                </div>
            </button>
        );
    }
    return (
        <button type={htmlType} className={classNames} disabled={disabled || loading} {...other}>
            {icon && <Icon type={icon} />}
            {children && <span>{children}</span>}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    /** button type which is not original html `type` of `button` */
    type: PropTypes.oneOf(['primary', 'accept', 'warning', 'danger', 'link', 'text']),

    /** button size */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),

    /** determine whether it's a ghost button */
    ghost: PropTypes.bool,

    /** determine whether it's a block button */
    block: PropTypes.bool,

    /** determine whether it's loading */
    loading: PropTypes.bool,

    /** disable the button */
    disabled: PropTypes.bool,

    /** icon type name */
    icon: PropTypes.string,

    /** set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) */
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
    size: 'md',
    htmlType: 'button',
};

export default Button;
