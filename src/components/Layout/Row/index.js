import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.less'

const Row = props => {
  const { children, className, gutter, fluid, ...other } = props
  const classNames = classnames(
    'cmui-row',
    {
      'cmui-row--gutter': gutter,
      'cmui-row--fluid': fluid
    },
    className
  )
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  )
}

Row.propTypes = {

  children: PropTypes.node,

  className: PropTypes.string,

  // 是否带间隔
  gutter: PropTypes.bool,

  // 是否流式布局，按内容自适应自左向右布局
  fluid: PropTypes.bool
}

export default Row
