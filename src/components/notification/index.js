import React from 'react'
import ReactDOM from 'react-dom'
import * as type from '../_utils/type'
import Notification from './Notification'

let render = props => {
  let isOpen = false
  const messageQueue = []
  const handleClose = () => {
    isOpen = false
    const head = messageQueue[0] && messageQueue.shift()
    head && render(head)
  }
  render = nextProps => {
    props = Object.assign({}, props, nextProps, { onClose: handleClose })
    if (isOpen) {
      return messageQueue.push(props)
    }
    isOpen = true
    const container = document.createElement('div')
    ReactDOM.render(<Notification {...props} />, container)
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
