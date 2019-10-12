import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

function Button (props) {
  const btnRef = React.createRef()
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
    autoFocus,
    ...other
  } = props
  useEffect(() => {
    autoFocus && btnRef.current.focus()
  })
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
        ref={btnRef}
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
      ref={btnRef}
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

  // button type
  type: PropTypes.oneOf([
    'primary',
    'accept',
    'warning',
    'danger',
    'link',
    'text'
  ]),

  // button size, default `md`
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  // determine whether it's a ghost button
  ghost: PropTypes.bool,

  // determine whether it's a block button
  block: PropTypes.bool,

  // determine whether it's loading
  loading: PropTypes.bool,

  // disable the button
  disabled: PropTypes.bool,

  // icon type name
  icon: PropTypes.string,

  // same as native button's `autofocus`
  autoFocus: PropTypes.bool
}

Button.defaultProps = {
  size: 'md'
}

export default Button
