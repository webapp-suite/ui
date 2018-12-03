import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
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
    const { className, accpetLabel, cancelLabel, focused, primary } = this.props
    const btnType = {
      [primary]: 'primary'
    }
    return (
      <div className={cx(`${prefixCls}-dialog__buttons`, className)}>
        {!!accpetLabel && <Button type={btnType['accept'] || 'tertiary'} onClick={this.handleAcceptClick} focus={focused === 'accept'} block>{accpetLabel}</Button>}
        {!!cancelLabel && <Button type={btnType['cancel'] || 'tertiary'} onClick={this.handleCancelClick} focus={focused === 'cancel'} block>{cancelLabel}</Button>}
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
  focused: PropTypes.oneOf(['accept', 'cancel']),
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default DialogButtons
