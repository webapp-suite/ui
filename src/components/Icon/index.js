import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../styles/ui-icons.less'

const Icon = props => {
  const { className, type, ...other } = props
  return (
    <i className={cx(`${prefixCls}-icon`, `${prefixCls}-icon__${type}`, className)} {...other} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  // 图标类型
  type: PropTypes.string.isRequired
}

export default Icon
