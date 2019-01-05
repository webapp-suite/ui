import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import FocusTrap from '../_utils/FocusTrap'

class DialogButtons extends React.Component {
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
    this.context?.dialogContainer?.props?.close?.()
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
    const { className, accpetLabel, cancelLabel, focused, primary } = props
    const btnType = {
      [primary]: 'primary'
    }
    return (
      <div className={cx(`${prefixCls}-dialog__buttons`, className)}>
        {!!accpetLabel &&
          <Button
            type={btnType['accept'] || 'tertiary'}
            onClick={this.handleAcceptClick}
            autoFocus={focused === 'accept'}
            focus
            block
          >
            {accpetLabel}
          </Button>
        }
        {!!cancelLabel &&
          <Button
            type={btnType['cancel'] || 'tertiary'}
            onClick={this.handleCancelClick}
            autoFocus={focused === 'cancel'}
            focus
            block
          >
            {cancelLabel}
          </Button>
        }
      </div>
    )
  }
  render () {
    return this.state.open
      ? <FocusTrap>{this.renderButtons(this.props)}</FocusTrap>
      : this.renderButtons({ ...this.props, focused: null })
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
  focused: PropTypes.oneOf(['accept', 'cancel', null]),
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default DialogButtons
