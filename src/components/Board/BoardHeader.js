import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PanelHeader = props => {
  const { children, className, type, ...other } = props
  return (
    <div className={cx(`${prefixCls}-panel__header`, className)} {...other}>
      {children}
    </div>
  )
}

PanelHeader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf('grey', 'white')
}

export default PanelHeader
