// import 'font-awesome/css/font-awesome.css'
import '../../styles/index.less'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Icon = props => {
  const { className, type, ...other } = props
  return (
    <i className={classnames('cmui-icon icon', 'icon-' + type, className)} {...other} />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  // 图标类型
  type: PropTypes.string.isRequired
}

export default Icon
