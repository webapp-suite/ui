import React from 'react'
// import ReactDOM, { createPortal } from 'react-dom'
// import marked from 'marked'
import * as type from '../_utils/type'
// import Dialog from './Dialog'
// import DialogBody from './DialogBody'
// import DialogButtons from './DialogButtons'
// import DialogHeader from './DialogHeader'
import DialogPortal from './DialogPortal'

let render = props => {
  // const container = document.createElement('div')

  let isOpen = false
  const messageQueue = []
  const handleClose = () => {
    isOpen = false
    const head = messageQueue[0] && messageQueue.shift()
    head && render(head)
  }

  render = nextProps => {
    props = Object.assign({}, props, nextProps, { handleClose })
    if (isOpen && open) {
      return messageQueue.push(props)
    }
    React.createElement(DialogPortal, props)
    props.open || handleClose()
  }
  render()
}

const getDialogParams = args => {
  const stringArray = []
  let options = { focused: 'cancel' }
  Array.from(args).forEach(v => {
    type.isString(v) && stringArray.push(v)
    type.isObject(v) && Object.assign(options, v)
  })
  return {
    message: stringArray[0] || 'Dialog message must be provided.',
    acceptLabel: stringArray[1] || 'OK',
    cancelLabel: stringArray[2] || 'CANCEL',
    options
  }
}

const dialog = {
  confirm () {
    const { message, acceptLabel, cancelLabel, options } = getDialogParams(
      arguments
    )
    render({
      message,
      acceptLabel,
      cancelLabel,
      options,
      type: 'confirm',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  accept () {
    const { message, acceptLabel, cancelLabel, options } = getDialogParams(
      arguments
    )
    render({
      message,
      acceptLabel,
      cancelLabel,
      options,
      type: 'accept',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  warning () {
    const { message, acceptLabel, cancelLabel, options } = getDialogParams(
      arguments
    )
    render({
      message,
      acceptLabel,
      cancelLabel,
      options,
      type: 'warning',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  danger () {
    const { message, acceptLabel, cancelLabel, options } = getDialogParams(
      arguments
    )
    render({
      message,
      acceptLabel,
      cancelLabel,
      options,
      type: 'danger',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  close () {
    render({ open: false })
  }
}

export default dialog
