import React from 'react'
import marked from 'marked'
import Dialog from '../dialog/Dialog'
import DialogBody from '../dialog/DialogBody'
import DialogButtons from '../dialog/DialogButtons'
import DialogHeader from '../dialog/DialogHeader'

class Notification extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: true
    }
  }
  handleDialogClose = () => {
    this.setState({ isOpen: false })
    this.props?.onClose?.()
  }
  render () {
    const {
      backdrop,
      lock,
      type,
      options,
      acceptLabel,
      message,
      autoClose,
      duration
    } = this.props
    return (
      <div>
        {!!this.state.isOpen && (
          <Dialog
            type="notification"
            onClose={this.handleDialogClose}
            backdrop={backdrop}
            lock={lock}
            autoClose={autoClose}
            duration={duration}
          >
            <DialogHeader type={type} icon={options?.icon} />
            <DialogBody>
              <div
                className={`${prefixCls}-dialog__body-markdown`}
                dangerouslySetInnerHTML={{ __html: marked(message) }}
              />
            </DialogBody>
            {!!acceptLabel && (
              <DialogButtons
                type={type}
                focused={options?.focused}
                acceptLabel={acceptLabel}
                {...options}
              />
            )}
          </Dialog>
        )}
      </div>
    )
  }
}

export default Notification
