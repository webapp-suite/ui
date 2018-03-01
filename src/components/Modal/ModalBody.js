import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ModalBody = props => {
  const { children, className, ...other } = props
  return (
    <div
      className={classnames('cmui-modal__modal-body', className)}
      {...other}
    >
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ModalBody
