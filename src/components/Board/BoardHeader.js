import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BoardHeader = props => {
  const { children = '', className, title, theme, ...other } = props
  return (
    <div className={cx(`${prefixCls}-board__header`, `${prefixCls}-board__header`, className)} {...other}>
      {title && <div className={`${prefixCls}-board__header-title`}>{title}</div>}
      {children}
    </div>
  )
}

BoardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,

  // 面板名称
  title: PropTypes.string
}

export default BoardHeader
