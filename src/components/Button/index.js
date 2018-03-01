import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../Icon'
import './index.less'

const Button = props => {
  const { children, className, type, size, icon, circle, transparent, ghost, ...other } = props
  const classNames = classnames(
    'cmui-btn',
    {
      [`cmui-btn--${type}`]: type,
      [`cmui-btn--${size}`]: size,
      'cmui-btn--circle': circle,
      'cmui-btn--icon': icon && !children,
      'cmui-btn--transparent': transparent,
      'cmui-btn--ghost': ghost
    },
    className
  )
  return (
    <button type="button" className={classNames} {...other}>
      {icon && <Icon type={icon} />}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  // 按钮类型，除默认外可选值: minor / inverse
  type: PropTypes.string,

  // 按钮尺寸，除默认外可选值：sm、lg
  size: PropTypes.string,

  // 按钮图标，支持 fontawaresome 图标
  icon: PropTypes.string,

  // 是否为圆形
  circle: PropTypes.bool,

  // 文字颜色是否继承，背景是否透明
  transparent: PropTypes.bool,

  // 是否幽灵按钮
  ghost: PropTypes.bool
}

export default Button
