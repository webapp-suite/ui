import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.less'

const Col = props => {
  const { children, className, col, right, ...other } = props
  const classNames = classnames(
    'cmui-col',
    col && col.split(' ').map(v => 'cmui-col--' + v),
    {
      'cmui-col--right': right
    },
    className
  )
  return <div className={classNames} {...other}>{children}</div>
}

Col.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,

  // 布局规则，col="md-6 sm-5"，参考 bootstrap 布局用法
  col: PropTypes.string,

  // 是否右浮动
  right: PropTypes.bool
}

export default Col
