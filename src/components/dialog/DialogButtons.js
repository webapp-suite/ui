import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import { typeMap } from './config'

class DialogButtons extends React.Component {
  static contextTypes = {
    dialog: PropTypes.object
  }

  static propTypes = {
    className: PropTypes.string,
    acceptLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    type: PropTypes.oneOf([
      'confirm',
      'accept',
      'warning',
      'danger',
      'success',
      'info',
      'error'
    ]),
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onCancel: PropTypes.func
  }

  constructor (props) {
    super()
    this.state = {
      open: true
    }
  }

  componentWillReceiveProps (nextProps) {
    this.state.open === false && this.setState({ open: true })
  }

  handleClose = () => {
    this.context?.dialog?.close?.()
    this.props?.onClose?.()
    this.setState({ open: false })
  }

  handleAcceptClick = () => {
    this.handleClose()
    setTimeout(() => this.props?.onAccept?.(), 400)
  }

  handleCancelClick = () => {
    this.handleClose()
    setTimeout(() => this.props?.onCancel?.(), 400)
  }

  renderButtons = props => {
    const { className, acceptLabel, cancelLabel, type } = props
    return (
      <div className={cx(`${prefixCls}-dialog__main-buttons`, className)}>
        {!!acceptLabel && (
          <Button
            type={typeMap[type]?.btnType || 'secondary'}
            onClick={this.handleAcceptClick}
            block
          >
            {acceptLabel}
          </Button>
        )}
        {!!cancelLabel && (
          <Button
            type="secondary"
            onClick={this.handleCancelClick}
            block
          >
            {cancelLabel}
          </Button>
        )}
      </div>
    )
  }

  render () {
    return this.state.open ? (
      <div>{this.renderButtons(this.props)}</div>
    ) : (
      this.renderButtons(this.props)
    )
  }
}

export default DialogButtons
