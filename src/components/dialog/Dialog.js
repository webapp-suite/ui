import cx from 'classnames'
import classlist from 'classlist'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import omit from '../_utils/omit'
import ToggleNode from '../_utils/ToggleNode'
import Backdrop from './Backdrop'
import './index.less'

class Dialog extends React.Component {
  static childContextTypes = {
    dialog: PropTypes.instanceOf(Dialog)
  }

  static propTypes = {
    backdrop: PropTypes.bool,
    lock: PropTypes.bool,
    autoClose: PropTypes.bool,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['aside', 'dialog', 'notification', 'modal'])
  }

  constructor (props) {
    super(props)
    this.state = {
      shouldHideBackdrop: false,
      hasExistedBackdrop: !!document.getElementsByClassName(
        `${prefixCls}-dialog__backdrop`
      )[0]
    }
    this.containerNode = document.createElement('div')
    document.body.appendChild(this.containerNode)
  }

  getChildContext () {
    return {
      dialog: this
    }
  }

  componentDidMount () {
    if (!this.dialog) {
      return
    }
    if (!this.dialogInstance) {
      const dialogNode = ReactDOM.findDOMNode(this.dialog)
      this.dialogInstance = new ToggleNode(
        dialogNode,
        `${prefixCls}-dialog__main_open`
      )
    }
    this.dialogInstance.open()
    this.props.autoClose &&
      window.setTimeout(() => {
        this.close()
      }, this.props.duration)
  }

  backUp () {
    const dialogStacks = document.getElementsByClassName(
      `${prefixCls}-dialog__main`
    )
    const dialogStacksCount = dialogStacks.length
    dialogStacksCount > 1 &&
      classlist(dialogStacks[dialogStacksCount - 2]).add(
        `${prefixCls}-dialog__main_open`
      )
  }

  goForward () {
    const dialogStacks = document.getElementsByClassName(
      `${prefixCls}-dialog__main`
    )
    const dialogStacksCount = dialogStacks.length
    dialogStacksCount > 0 &&
      classlist(dialogStacks[dialogStacksCount - 1]).remove(
        `${prefixCls}-dialog__main_open`
      )
  }

  close = () => {
    this.setState({ shouldHideBackdrop: true })
    const openedDialog = document.getElementsByClassName(
      `${prefixCls}-dialog__main_open`
    )[0]
    this.backUp()
    if (openedDialog && !this.props.autoClose) {
      classlist(openedDialog).remove(`${prefixCls}-dialog__main_open`)
      const onTransitionEnd = () => {
        openedDialog.style.display = 'none'
        openedDialog.removeEventListener(ToggleNode.END_EVENT, onTransitionEnd)
        this.props.onClose()
      }
      openedDialog.addEventListener(ToggleNode.END_EVENT, onTransitionEnd)
    } else {
      this.props.onClose()
    }
  }

  closeBackdropAndAllDialogs = () => {
    if (this.props.lock) {
      return
    }
    this.setState({ shouldHideBackdrop: true })
    const openedDialog = document.getElementsByClassName(
      `${prefixCls}-dialog__main_open`
    )[0]
    if (openedDialog) {
      classlist(openedDialog).remove(`${prefixCls}-dialog__main_open`)
      const onTransitionEnd = () => {
        openedDialog.style.display = 'none'
        openedDialog.removeEventListener(ToggleNode.END_EVENT, onTransitionEnd)
        this.props.onClose()
      }
      openedDialog.addEventListener(ToggleNode.END_EVENT, onTransitionEnd)
    } else {
      this.props.onClose()
    }
  }

  componentWillMount () {
    this.goForward()
  }

  componentWillUnmount () {
    this.containerNode && document.body.removeChild(this.containerNode)
    this.state.shouldHideBackdrop || this.props.onClose()
  }

  render () {
    const { shouldHideBackdrop, hasExistedBackdrop } = this.state
    const { backdrop, lock, type, children, ...other } = this.props
    const divProps = omit(other, ['lock', 'autoClose'])
    return createPortal(
      <div
        ref={dialog => (this.dialog = dialog)}
        className={cx(`${prefixCls}-dialog__main`, {
          [`${prefixCls}-dialog__main_${type}`]: type
        })}
        {...divProps}
      >
        {!shouldHideBackdrop && !!backdrop && !hasExistedBackdrop && (
          <Backdrop onClick={this.closeBackdropAndAllDialogs} />
        )}
        <div className={`${prefixCls}-dialog__main-content`}>{children}</div>
      </div>,
      this.containerNode
    )
  }
}

export default Dialog
