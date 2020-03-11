import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

const Col = props => {
  const { children, className, col, right, ...other } = props
  const classNames = cx(
    `${prefixCls}-layout__col`,
    col && col.split(' ').map(v => `${prefixCls}-layout__col_${v}`),
    {
      [`${prefixCls}-layout__col_right`]: right
    },
    className
  )
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  )
}

Col.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,

  /** Total 24 cols, such as `col="md-6 sm-24"` */
  col: PropTypes.string,

  /** Whether to align right */
  right: PropTypes.bool
}

export default Col
