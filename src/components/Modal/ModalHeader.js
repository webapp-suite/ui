import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ModalHeader = (props, context) => {
  const { children, className, ...other } = props
  return (
    <div className={classnames('cmui-modal__modal-header', className)} {...other}>
      {children}
      <div
        className="cmui-modal__modal-header-close"
        onClick={() => context.modalContent.props.close()}
      />
    </div>
  )
}

ModalHeader.contextTypes = {
  modalContent: PropTypes.object
}
ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ModalHeader
