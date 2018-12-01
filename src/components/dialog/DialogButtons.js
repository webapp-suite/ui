import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'

class DialogButtons extends React.Component {
  handleClose = () => {
    this.context?.dialogContainer?.props?.close?.()
    this.props?.onClose?.()
  }
  handleAcceptClick = () => {
    this.handleClose()
    setTimeout(() => this.props?.onAccept?.(), 400)
  }
  handleCancelClick = () => {
    this.handleClose()
    setTimeout(() => this.props?.onCancel?.(), 400)
  }
  render () {
    const { className, accpetLabel, cancelLabel, primary } = this.props
    const btnType = {
      [primary]: 'primary'
    }
    return (
      <div className={cx(`${prefixCls}-dialog__buttons`, className)}>
        {!!accpetLabel && <Button type={btnType['accept'] || 'tertiary'} block onClick={this.handleAcceptClick}>{accpetLabel}</Button>}
        {!!cancelLabel && <Button type={btnType['cancel'] || 'tertiary'} block onClick={this.handleCancelClick}>{cancelLabel}</Button>}
      </div>
    )
  }
}

DialogButtons.contextTypes = {
  dialogContainer: PropTypes.object
}

DialogButtons.propTypes = {
  className: PropTypes.string,
  accpetLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  primary: PropTypes.oneOf(['accept', 'cancel']),
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default DialogButtons
