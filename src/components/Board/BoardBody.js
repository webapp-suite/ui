import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PanelBody = props => {
  const { children, className, ...other } = props
  return (
    <div className={cx(`${prefixCls}-panel__body`, className)} {...other}>
      {children}
    </div>
  )
}

PanelBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default PanelBody
