import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

function Button (props) {
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
    ...other
  } = props
  const classNames = cx(
      `${prefixCls}-button`,
      {
        [`${prefixCls}-button--${type}`]: type,
        [`${prefixCls}-button--${size}`]: size,
        [`${prefixCls}-button--ghost`]: ghost,
        [`${prefixCls}-button--loading`]: loading,
        [`${prefixCls}-button--block`]: block,
        [`${prefixCls}-button__icon-only`]: icon && !children
      },
      className
  )
  if (icon && children) {
    return (
      <button
        type="button"
        className={classNames}
        disabled={disabled || loading}
        {...other}
      >
        <div>
          <Icon type={icon} />
          <span>{children}</span>
        </div>
      </button>
    )
  }
  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled || loading}
      {...other}
    >
      {icon && <Icon type={icon} />}
      {children && <span>{children}</span>}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  // 按钮类型
  type: PropTypes.oneOf(['primary', 'secondary', 'accept', 'warning', 'danger', 'link', 'text']),

  // 是否为微型按钮
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  // 是否为ghost按钮
  ghost: PropTypes.bool,

  // 是否为block按钮
  block: PropTypes.bool,

  // Initialize a spinner
  loading: PropTypes.bool,

  // Disabled button
  disabled: PropTypes.bool,

  // 按钮图标
  icon: PropTypes.string
}

Button.defaultProps = {
  type: 'secondary',
  size: 'md'
}

export default Button
