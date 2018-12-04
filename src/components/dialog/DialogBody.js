import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const DialogBody = props => {
  const { children, className, ...other } = props
  return (
    <div
      className={cx(`${prefixCls}-dialog__body`, className)}
      {...other}
    >
      {children}
    </div>
  )
}

DialogBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default DialogBody
