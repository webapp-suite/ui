import marked from 'marked'
import React from 'react'
import ReactDOM from 'react-dom'
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
            <div
              className={`${prefixCls}-dialog__body-markdown`}
              dangerouslySetInnerHTML={{ __html: marked(props.message) }}
            />
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
   * @description confirm 对话框
   * @param  {string} message 对话框内容，支持简单的 `Markdown`
   * @param  {string} accpetLabel 接受按钮文本
   * @param  {string} cancelLabel 取消按钮文本
   * @param  {Object} options 对话框配置，支持 `icon`, `primary`, `focused` 属性
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

  /**
   * @public
   * @name dialog.warning
   * @description warning 对话框
   * @param  {string} message 对话框内容，支持简单的 `Markdown`
   * @param  {string} accpetLabel 接受按钮文本
   * @param  {string} cancelLabel 取消按钮文本
   * @param  {Object} options 对话框配置，支持 `icon`, `primary`, `focused` 属性
   */
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

  /**
   * @public
   * @name dialog.danger
   * @description danger 对话框
   * @param  {string} message 对话框内容，支持简单的 `Markdown`
   * @param  {string} accpetLabel 接受按钮文本
   * @param  {string} cancelLabel 取消按钮文本
   * @param  {Object} options 对话框配置，支持 `icon`, `primary`, `focused` 属性
   */
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
   * @description 关闭当前 dialog
   */
  close () {
    render({ open: false })
  }
}

export default dialog
