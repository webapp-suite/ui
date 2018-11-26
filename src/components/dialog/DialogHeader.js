import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../Icon'

const iconMap = {
  'confirm': 'question',
  'warning': 'warning',
  'danger': 'warning'
}

const DialogHeader = (props, context) => {
  const { className, type, ...other } = props
  return (
    <div className={cx(`${prefixCls}-dialog__header`, className)} {...other}>
      <Icon type={iconMap[type]} className={cx(`${prefixCls}-dialog__header-icon`, `${prefixCls}-dialog__header-icon_${type}`)} />
    </div>
  )
}

DialogHeader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['confirm', 'warning', 'danger'])
}

DialogHeader.defaultProps = {
  type: 'confirm'
}

export default DialogHeader
