import '../../styles/iconfont.less'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Icon = props => {
  const { className, type, ...other } = props
  return (
    <i className={classnames('earthui-icon icon', 'icon-' + type, className)} {...other} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  // 图标类型，https://fontawesome.com/v4.7.0/icons/
  type: PropTypes.string.isRequired
}

export default Icon
