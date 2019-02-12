import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import classlist from 'classlist'
import omit from '../_utils/omit'

class DialogContainer extends React.Component {
  constructor (props) {
    super(props)
    this.relativeValue = 0
  }

  getChildContext () {
    return {
      dialogContainer: this
    }
  }

  backUp () {
    // this.relativeValue += 20
    // this.transform()
    // const { dialogContainer } = this.props.modal.context
    // if (dialogContainer) {
    //   dialogContainer.backUp()
    // }
  }

  goForward () {
    // this.relativeValue -= 20
    // this.transform()
    // const { dialogContainer } = this.props.modal.context
    // if (dialogContainer) {
    //   dialogContainer.goForward()
    // }
  }

  // transform () {
  //   this.modalNode.style.transform = `translateY(-${this.relativeValue}px)`
  // }

  handleBackdropClick = e => {
    if (e.target.className === `${prefixCls}-dialog__dialog`) {
      if (!this.props.lock && this.props.backdrop) {
        this.props.close()
      } else if (this.props.backdrop) {
        const LOCK_CLASSNAME = `${prefixCls}-dialog__dialog-dialog_lock`
        const END_EVENT = 'animationend'
        classlist(this.modalNode).add(LOCK_CLASSNAME)
        const onAnimationEnd = () => {
          this.modalNode.removeEventListener(END_EVENT, onAnimationEnd)
          classlist(this.modalNode).remove(LOCK_CLASSNAME)
        }
        this.modalNode.addEventListener(END_EVENT, onAnimationEnd)
      }
    }
  }

  render () {
    const {
      children,
      className,
      lock,
      modal,
      backdrop,
      type,
      ...other
    } = this.props
    const divProps = omit(other, ['close'])
    return (
      <div className={cx(`${prefixCls}-dialog`, className)} {...divProps}>
        {!!backdrop && (
          <div
            className={`${prefixCls}-dialog__backdrop`}
            style={{ zIndex: 3000 }}
          />
        )}
        <div
          className={`${prefixCls}-dialog__dialog`}
          style={{ zIndex: 3000 }}
          onClick={this.handleBackdropClick}
        >
          <div
            className={cx(`${prefixCls}-dialog__dialog-dialog`, {
              [`${prefixCls}-dialog__dialog-dialog-${type}`]: type
            })}
            ref={node => (this.modalNode = node)}
          >
            <div className={`${prefixCls}-dialog__dialog-content`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DialogContainer.childContextTypes = {
  dialogContainer: PropTypes.instanceOf(DialogContainer)
}

DialogContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backdrop: PropTypes.bool,
  lock: PropTypes.bool,
  modal: PropTypes.object,
  type: PropTypes.oneOf(['aside', 'dialog', 'notification', 'modal'])
}

export default DialogContainer
