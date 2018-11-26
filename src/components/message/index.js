import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import ToggleNode from '../../utils/ToggleNode'
import Button from '../Button'
import './index.less'

class Message extends React.Component {
  constructor (props) {
    super()
    this.state = {
      open: props.open
    }
    this.prepareClose(props)
  }

  componentDidMount () {
    this.toggleNode = new ToggleNode(ReactDOM.findDOMNode(this), `${prefixCls}-message_open`)
    this.toggleNode.onClose = () => {
      this.props.onClose && this.props.onClose()
    }
    this.toggleNode.open()
  }

  componentWillReceiveProps (nextProps) {
    'open' in nextProps && this.setState({ open: nextProps.open })
    this.prepareClose(nextProps)
  }

  componentDidUpdate () {
    this.toggleNode[this.state.open ? 'open' : 'close']()
  }

  prepareClose (props) {
    const { duration } = props
    duration && setTimeout(this.handleClose, duration)
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    const { type, message, btnLabel, duration } = this.props
    return (
      <div className={cx(`${prefixCls}-message`, { [`${prefixCls}-message_${type}`]: type })}>
        {/* <Icon */}
        {/* className={`${prefixCls}-message__symbol`} */}
        {/* type={type === 'success' ? 'check' : 'warning'} */}
        {/* /> */}
        {message}
        {btnLabel && duration === 0 && (
          <Button className={`${prefixCls}-message__button`} onClick={this.handleClose}>
            {btnLabel}
          </Button>
        )}
      </div>
    )
  }
}

Message.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
  message: PropTypes.node.isRequired,
  btnLabel: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  open: PropTypes.bool
}

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
    ReactDOM.render(<Message {...props} onClose={handleClose} />, container)
    props.open || handleClose()
  }
  render()
}

const message = {

  /**
   * @public
   * @name message.success
   * @param  {string | element} message message 内容，支持 React 元素
   * @param  {number} [duration] 持续时间，单位ms，为0时手动关闭
   * @description 成功信息，默认 `1500ms` 后自动关闭
   */
  success (message, btnLabel = '', duration = 1500) {
    render({
      message,
      btnLabel,
      duration,
      type: 'success',
      open: true
    })
  },

  info (message, btnLabel = 'OK', duration = 0) {
    render({
      message,
      btnLabel,
      duration,
      type: 'info',
      open: true
    })
  },

  warning (message, btnLabel = 'OK', duration = 0) {
    render({
      message,
      btnLabel,
      duration,
      type: 'warning',
      open: true
    })
  },

  error (message, btnLabel = 'OK', duration = 0) {
    render({
      message,
      btnLabel,
      duration,
      type: 'error',
      open: true
    })
  },

  /**
   * @public
   * @name message.close
   * @description 关闭当前 message
   */
  close () {
    render({ open: false })
  }
}

export default message
