import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../Icon'
import { iconMap } from './config'

const DialogHeader = (props, context) => {
  const { className, icon, type, ...other } = props
  const iconType = icon || iconMap[type]
  return (
    <div className={cx(`${prefixCls}-dialog__header`, className)} {...other}>
      <Icon type={iconType} className={cx(`${prefixCls}-dialog__header-icon`, `${prefixCls}-dialog__header-icon_${type}`)} />
    </div>
  )
}

DialogHeader.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['confirm', 'warning', 'danger', 'success', 'info', 'error'])
}

DialogHeader.defaultProps = {
  type: 'confirm'
}

export default DialogHeader
