import marked from 'marked'
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'widgets/Markdown'
import * as type from '../../utils/type'
import Dialog from './Dialog'
import DialogBody from './DialogBody'
import DialogButtons from './DialogButtons'
import DialogHeader from './DialogHeader'
import './index.less'

let render = props => {
  const container = document.createElement('div')
  document.body.appendChild(container)

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
      <div>
        <Dialog open={isOpen}>
          <DialogHeader type={props.type} icon={props.options?.icon} />
          <DialogBody>
            <Markdown html={marked(props.message)} />
          </DialogBody>
          <DialogButtons onClose={handleClose} accpetLabel={props.accpetLabel} cancelLabel={props.cancelLabel} {...props.options} />
        </Dialog>
      </div>
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

  /**
   * @public
   * @name dialog.confirm
   * @param  {string | element} message message 内容，支持 React 元素
   * @param  {number} [duration] 持续时间，单位ms，为0时手动关闭
   * @description 成功信息，默认 `1500ms` 后自动关闭
   */
  confirm () {
    const { message, accpetLabel, cancelLabel, options } = getDialogParams(arguments)
    render({
      message,
      accpetLabel,
      cancelLabel,
      options,
      type: 'confirm',
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
      open: true
    })
  },

  /**
   * @public
   * @name dialog.close
   * @description 关闭当前 message
   */
  close () {
    render({ open: false })
  }
}

export default dialog
