import React from 'react'
import { PropTypes } from 'prop-types'
import classnames from 'classnames'
import controlledPropValidator from '../../_shared/propValidator/controlled'

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
  open: controlledPropValidator(PropTypes.bool, 'onToggle')
}

export default DropdownToggle
