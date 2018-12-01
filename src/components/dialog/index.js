import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import * as type from '../../utils/type'
import Dialog from './Dialog'
import DialogBody from './DialogBody'
import DialogButtons from './DialogButtons'
import DialogHeader from './DialogHeader'

let render = props => {
  const container = document.createElement('div')

  let isOpen = false
  const messageQueue = []
  const handleClose = () => {
    isOpen = false
    const head = messageQueue[0] && messageQueue.shift()
    head && render(head)
  }

  render = nextProps => {
    props = Object.assign({}, props, nextProps)
    if (isOpen && props.open) {
      return messageQueue.push(props)
    }
    isOpen = props.open
    ReactDOM.render((
      <Dialog open={isOpen} backdrop={props.backdrop} lock={props.lock}>
        <DialogHeader type={props.type} icon={props.options?.icon} />
        <DialogBody>
          <div
            className={`${prefixCls}-dialog__body-markdown`}
            dangerouslySetInnerHTML={{ __html: marked(props.message) }}
          />
        </DialogBody>
        <DialogButtons onClose={handleClose} accpetLabel={props.accpetLabel} cancelLabel={props.cancelLabel} {...props.options} />
      </Dialog>
    ), container)
    props.open || handleClose()
  }
  render()
}

const getDialogParams = args => {
  const stringArray = []
  let options = {}
  Array.from(args).forEach(v => {
    type.isObject(v) && (options = v)
    type.isString(v) && stringArray.push(v)
  })
  return {
    message: stringArray[0] || 'Dialog message must be provided.',
    accpetLabel: stringArray[1] || 'OK',
    cancelLabel: stringArray[2] || 'CANCEL',
    options
  }
}

const dialog = {
  confirm () {
    const { message, accpetLabel, cancelLabel, options } = getDialogParams(arguments)
    render({
      message,
      accpetLabel,
      cancelLabel,
      options,
      type: 'confirm',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  warning () {
    const { message, accpetLabel, cancelLabel, options } = getDialogParams(arguments)
    render({
      message,
      accpetLabel,
      cancelLabel,
      options,
      type: 'warning',
      backdrop: true,
      lock: true,
      open: true
    })
  },
  danger () {
    const { message, accpetLabel, cancelLabel, options } = getDialogParams(arguments)
    render({
      message,
      accpetLabel,
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
