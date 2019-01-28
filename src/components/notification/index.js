import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import * as type from '../_utils/type'
import Dialog from '../dialog/Dialog'
import DialogBody from '../dialog/DialogBody'
import DialogButtons from '../dialog/DialogButtons'
import DialogHeader from '../dialog/DialogHeader'

let render = props => {
  const container = document.createElement('p')

  let isOpen = false
  const messageQueue = []
  const handleClose = () => {
    // check messageQueue has other notification need rendering when user click top notification.
    isOpen = false
    const head = messageQueue[0] && messageQueue.shift()
    head && render(head)
  }

  render = nextProps => {
    props = Object.assign({}, props, nextProps)
    const { open, backdrop, lock, type, acceptLabel, options, message, autoClose, duration } = props
    if (isOpen && open) {
      // messageQueue will be [] if there is only one notification.
      return messageQueue.push(props)
    }
    isOpen = open
    ReactDOM.render((
      <Dialog
        open={isOpen}
        backdrop={backdrop}
        lock={lock}
        autoClose={autoClose}
        duration={duration}
        onClose={handleClose}
      >
        <DialogHeader type={type} icon={options?.icon} />
        <DialogBody>
          <div
            className={`${prefixCls}-dialog__body-markdown`}
            dangerouslySetInnerHTML={{ __html: marked(message) }}
          />
        </DialogBody>
        {!!acceptLabel && <DialogButtons type={type} focused={options?.focused} acceptLabel={acceptLabel} {...options} />}
      </Dialog>
    ), container)
  }
  render()
}

const getNotificationParams = args => {
  const stringArray = []
  let options = { focused: 'accept' }
  let duration = 1500
  Array.from(args).forEach(v => {
    type.isNumber(v) && (duration = v)
    type.isString(v) && stringArray.push(v)
    type.isObject(v) && Object.assign(options, v)
  })
  return {
    message: stringArray[0] || 'Notification message must be provided.',
    acceptLabel: stringArray[1] || 'OK',
    duration,
    options
  }
}

const notification = {
  success () {
    const { message, duration, options } = getNotificationParams(arguments)
    render({
      message,
      acceptLabel: null,
      options,
      type: 'success',
      backdrop: false,
      lock: false,
      autoClose: true,
      duration,
      open: true
    })
  },
  info () {
    const { message, acceptLabel, options } = getNotificationParams(arguments)
    render({
      message,
      acceptLabel,
      options,
      type: 'info',
      backdrop: true,
      lock: true,
      autoClose: false,
      open: true
    })
  },
  warning () {
    const { message, acceptLabel, options } = getNotificationParams(arguments)
    render({
      message,
      acceptLabel,
      options,
      type: 'warning',
      backdrop: true,
      lock: true,
      autoClose: false,
      open: true
    })
  },
  error () {
    const { message, acceptLabel, options } = getNotificationParams(arguments)
    render({
      message,
      acceptLabel,
      options,
      type: 'error',
      backdrop: true,
      lock: true,
      autoClose: false,
      open: true
    })
  },
  close () {
    render({ open: false })
  }
}

export default notification
