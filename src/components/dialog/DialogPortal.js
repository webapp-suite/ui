import marked from 'marked'
import React from 'react'
import { createPortal } from 'react-dom'
import Dialog from './Dialog'
import DialogBody from './DialogBody'
import DialogButtons from './DialogButtons'
import DialogHeader from './DialogHeader'

class DialogPortal extends React.Component {
  constructor () {
    super(...arguments)
    const doc = window.document
    this.node = document.createElement('div')
    doc.body.appendChild(this.node)
  }

  componentWillUnmount () {
    window.document.body.removeChild(this.node)
  }

  render () {
    const {
      open,
      backdrop,
      lock,
      type,
      message,
      options,
      acceptLabel,
      cancelLabel,
      handleClose
    } = this.props
    return createPortal(
      <Dialog open={open} backdrop={backdrop} lock={lock}>
        <DialogHeader type={type} icon={options?.icon} />
        <DialogBody>
          <div
            className={`${prefixCls}-dialog__body-markdown`}
            dangerouslySetInnerHTML={{ __html: marked(message) }}
          />
        </DialogBody>
        <DialogButtons
          type={type}
          focused={options?.focused}
          onClose={handleClose}
          acceptLabel={acceptLabel}
          cancelLabel={cancelLabel}
          {...options}
        />
      </Dialog>,
      this.node
    )
  }
}

export default DialogPortal
