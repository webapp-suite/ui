import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BoardBody = props => {
  const { children, className, ...other } = props
  return (
    <div className={cx(`${prefixCls}-board__body`, className)} {...other}>
      {children}
    </div>
  )
}

BoardBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default BoardBody
