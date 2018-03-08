import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const DropdownToggle = props => {
  const { className, children, open, ...other } = props
  return (
    <div className={classnames('cmui-dropdown-toggle', {
      'cmui-dropdown-toggle--open': open
    }, className)} {...other}>
      {children}
    </div>
  )
}

DropdownToggle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool
}

export default DropdownToggle
