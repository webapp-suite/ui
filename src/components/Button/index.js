import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

const Button = props => {
  const { children, className, type, circle, micro, block, icon, ...other } = props
  const classNames = cx(
    `${prefixCls}-button`,
    {
      [`${prefixCls}-button_${type}`]: type,
      [`${prefixCls}-button_circle`]: circle,
      [`${prefixCls}-button_micro`]: micro,
      [`${prefixCls}-button_block`]: block,
      [`${prefixCls}-button__icon-only`]: icon && !children
    },
    className
  )
  return (
    <button type="button" className={classNames} {...other}>
      {icon && <Icon type={icon} />}
      {children && <span>{children}</span>}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  // 按钮类型
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),

  // 是否为微缩
  micro: PropTypes.bool,

  // 是否为block
  block: PropTypes.bool,

  // 按钮图标，支持 fontawaresome 图标
  icon: PropTypes.string
}

export default Button
