import classlist from 'classlist'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import EventPool from '../_utils/EventPool'
import ToggleNode from '../_utils/ToggleNode'
import DialogContainer from './DialogContainer'
import Backdrop from './Backdrop'
import './index.less'

// const scrollbarWidth = (() => {
//   const scrollDiv = document.createElement('div')
//   const body = document.body
//
//   scrollDiv.className = `${prefixCls}-dialog__scrollbar-measure`
//   body.appendChild(scrollDiv)
//   const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
//   body.removeChild(scrollDiv)
//
//   return scrollbarWidth
// })()

class Dialog extends React.Component {
  constructor (props) {
    super(props)
    this.closeCallbacks = new EventPool()
    this.state = {
      shouldHideBackdrop: false,
      hasExistedBackdrop: !!document.getElementsByClassName(
        `${prefixCls}-dialog__backdrop`
      )[0]
    }
    this.containerNode = document.createElement('div')
    document.body.appendChild(this.containerNode)
  }

  // createBackdropInstance () {
  //   // let backdropNode = document.getElementsByClassName(
  //   //   `${prefixCls}-dialog__backdrop`
  //   // )[0]
  //   if (!backdropNode) {
  //     // backdropNode = document.createElement('div')
  //     // backdropNode.classList.add(`${prefixCls}-dialog__backdrop`)
  //     // document.body.appendChild(backdropNode)
  //   }
  //   if (!this.backdropInstance) {
  //     return new ToggleNode(
  //       backdropNode,
  //       `${prefixCls}-dialog__backdrop_open`
  //     )
  //   }
  // }

  // componentWillReceiveProps (nextProps) {
  //   'open' in nextProps && this.setState({ open: nextProps.open })
  // }
  //
  // shouldComponentUpdate (nextProps, nextState) {
  //   return !(this.state.open === nextState.open && nextState.open === false)
  // }

  componentDidMount () {
    // this.updateBodyState(this.state.open, false)
    // if (this.state.open) {
    //   this.renderIntoDocument()
    // }
    // debugger
    if (!this.dialog) {
      return
    }
    if (!this.dialogInstance) {
      const dialogNode = ReactDOM.findDOMNode(this.dialog)
      this.dialogInstance = new ToggleNode(
        dialogNode,
        `${prefixCls}-dialog__dialog_open`
      )
      // this.dialogInstance.onClose = () => this.closeCallbacks.free()
    }
    this.dialogInstance.open()
    const { dialogContainer } = this.context
    if (dialogContainer) {
      dialogContainer.backUp()
    }
    this.props.autoClose &&
      window.setTimeout(() => {
        this.close()
      }, this.props.duration)
  }

  componentDidUpdate (prevProps, prevState) {
    // this.updateBodyState(this.state.open, prevState.open)
    // if (this.state.open) {
    //   this.props.backdrop && this.backdropInstance && this.backdropInstance.open()
    //   // this.renderIntoDocument()
    // } else {
    //   prevState.open && this.dialogInstance.close()
    //   const { dialogContainer } = this.context
    //   if (dialogContainer) {
    //     dialogContainer.goForward()
    //   }
    // }
  }

  // updateBodyState (open, prevOpen) {
  //   if (this.context.dialogContainer) {
  //     return
  //   }
  //   const body = document.body
  //   // const bodyPaddingRight = parseInt(body.style.paddingRight, 10) || 0
  //   // const _scrollbarWidth = body.scrollHeight > window.innerHeight ? scrollbarWidth : 0
  //   if (open && !prevOpen) {
  //     classlist(body).add(`${prefixCls}-dialog_open`)
  //     // body.style.paddingRight = bodyPaddingRight + _scrollbarWidth + 'px'
  //   } else if (!open && prevOpen) {
  //     this.closeCallbacks.add(() => {
  //       classlist(body).remove(`${prefixCls}-dialog_open`)
  //       // if (bodyPaddingRight) {
  //       //   body.style.paddingRight = bodyPaddingRight - _scrollbarWidth + 'px'
  //       // } else {
  //       //   body.style.paddingRight = ''
  //       // }
  //     })
  //   }
  // }

  // open () {
  //   // this.setState({ open: true })
  //   this.props.onToggle && this.props.onToggle(true)
  // }

  // renderIntoDocument () {
  // if (this.props.backdrop) {
  //   let backdropInstance = document.getElementsByClassName(
  //     `${prefixCls}-dialog__backdrop`
  //   )[0]
  //   if (!backdropInstance) {
  //     backdropInstance = document.createElement('div')
  //     backdropInstance.classList.add(`${prefixCls}-dialog__backdrop`)
  //     // backdropInstance.addEventListener('click', this.handleBackdropClick)
  //     document.body.appendChild(backdropInstance)
  //   }
  //   if (!this.backdropInstance) {
  //     this.backdropInstance = new ToggleNode(
  //       backdropInstance,
  //       `${prefixCls}-dialog__backdrop_open`
  //     )
  //   }
  //   this.backdropInstance.open()
  // }
  // if (!this.containerNode) {
  //   this.containerNode = document.createElement('div')
  //   document.body.appendChild(this.containerNode)
  // }
  // this.renderIntoDocument = () => {
  //   const {
  //     open,
  //     onToggle,
  //     onClose,
  //     backdrop,
  //     lock,
  //     autoClose,
  //     duration,
  //     type,
  //     ...other
  //   } = this.props
  //   ReactDOM.render(
  //     <DialogContainer
  //       ref={dialog => (this.dialog = dialog)}
  //       close={this.close}
  //       // modal={this}
  //       backdrop={backdrop}
  //       lock={lock}
  //       type={type}
  //       {...other}
  //     />,
  //     this.containerNode,
  //     onRendered
  //   )
  // }
  // this.renderIntoDocument()
  // }

  close = () => {
    this.setState({ shouldHideBackdrop: true })
    // this.props.onClose()
    // this.dialogInstance.close(this.props.onClose)
    const openedDialog = document.getElementsByClassName(
      `${prefixCls}-dialog__dialog_open`
    )[0]
    const dialogStacks = document.getElementsByClassName(
      `${prefixCls}-dialog__dialog`
    )
    const dialogStacksCount = dialogStacks.length
    dialogStacksCount > 1 &&
      classlist(dialogStacks[dialogStacksCount - 2]).add(
        `${prefixCls}-dialog__dialog_open`
      )
    if (openedDialog) {
      classlist(openedDialog).remove(`${prefixCls}-dialog__dialog_open`)
      const onTransitionEnd = () => {
        openedDialog.style.display = 'none'
        openedDialog.removeEventListener(ToggleNode.END_EVENT, onTransitionEnd)
        this.props.onClose()
      }
      openedDialog.addEventListener(ToggleNode.END_EVENT, onTransitionEnd)
    } else {
      this.props.onClose()
    }
    // debugger
    // this.setState({ open: false })
    // this.props.onToggle && this.props.onToggle(false)
    // this.backdropInstance.close()
    // this.closeCallbacks.add(callback)
    // this.closeCallbacks.free()
  }

  closeBackdropAndAllDialogs = () => {
    this.setState({ shouldHideBackdrop: true })
    // this.props.onClose()
    // this.dialogInstance.close(this.props.onClose)
    const openedDialog = document.getElementsByClassName(
      `${prefixCls}-dialog__dialog_open`
    )[0]
    if (openedDialog) {
      classlist(openedDialog).remove(`${prefixCls}-dialog__dialog_open`)
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
    const dialogStacks = document.getElementsByClassName(
      `${prefixCls}-dialog__dialog`
    )
    const dialogStacksCount = dialogStacks.length
    dialogStacksCount > 0 &&
      classlist(dialogStacks[dialogStacksCount - 1]).remove(
        `${prefixCls}-dialog__dialog_open`
      )
  }

  componentWillUnmount () {
    if (this.containerNode) {
      // ReactDOM.unmountComponentAtNode(this.containerNode)
      document.body.removeChild(this.containerNode)
      // 代码和updateBodyState重复，后期优化，有状态组件产生了副作用
      // const body = document.body
      // const bodyPaddingRight = parseInt(body.style.paddingRight, 10) || 0
      // const _scrollbarWidth = body.scrollHeight > window.innerHeight ? scrollbarWidth : 0
      // classlist(body).remove(`${prefixCls}-dialog__dialog_open`)
      // if (bodyPaddingRight) {
      //   body.style.paddingRight = bodyPaddingRight - _scrollbarWidth + 'px'
      // } else {
      //   body.style.paddingRight = ''
      // }
    }
    // debugger
    if (this.state.shouldHideBackdrop === false) {
      // this.dialog.style.display = 'none'
      this.props.onClose()
      // this.props.onClose()
    }
  }

  render () {
    const { shouldHideBackdrop, hasExistedBackdrop } = this.state
    const { backdrop, lock, type, ...other } = this.props
    return createPortal(
      <DialogContainer
        ref={dialog => (this.dialog = dialog)}
        close={this.close}
        backdrop={backdrop}
        lock={lock}
        type={type}
        {...other}
      >
        {!shouldHideBackdrop && !!backdrop && !hasExistedBackdrop && (
          <Backdrop onClick={this.closeBackdropAndAllDialogs} />
        )}
        {this.props.children}
      </DialogContainer>,
      this.containerNode
    )
  }
}

Dialog.contextTypes = {
  dialogContainer: PropTypes.object
}

Dialog.propTypes = {
  // 是否有遮罩
  backdrop: PropTypes.bool,

  // 是否锁定
  lock: PropTypes.bool,

  // 是否自动关闭
  autoClose: PropTypes.bool,

  // 自动关闭型的持续时间
  duration: PropTypes.number,

  // 切换 open 状态后的回调，参数为切换后的 open 状态，立刻执行，不会等到动画结束后
  onToggle: PropTypes.func,

  // 关闭后的回调，动画结束后执行。如果 close 方法传入回调，则此属性不会触发
  onClose: PropTypes.func,

  type: PropTypes.oneOf(['aside', 'dialog', 'notification', 'modal'])
}

export default Dialog
