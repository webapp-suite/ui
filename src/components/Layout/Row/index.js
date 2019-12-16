import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

const Row = props => {
  const { children, className, gutter, fluid, ...other } = props
  const classNames = cx(
    `${prefixCls}-layout__row`,
    {
      [`${prefixCls}-layout__row_gutter`]: gutter,
      [`${prefixCls}-layout__row_fluid`]: fluid
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

  // Whether to have gutter
  gutter: PropTypes.bool,

  // Whether is fluid
  fluid: PropTypes.bool
}

export default Row
