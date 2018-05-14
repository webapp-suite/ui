import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import classlist from 'classlist'

class ModalContent extends Component {
  constructor (props) {
    super(props)
    this.relativeValue = 0
  }

  getChildContext () {
    return {
      modalContent: this
    }
  }

  backUp () {
    this.relativeValue += 20
    this.transform()
    const {modalContent} = this.props.modal.context
    if (modalContent) {
      modalContent.backUp()
    }
  }

  goForward () {
    this.relativeValue -= 20
    this.transform()
    const {modalContent} = this.props.modal.context
    if (modalContent) {
      modalContent.goForward()
    }
  }

  transform () {
    this.modalNode.style.transform = `translateY(-${this.relativeValue}px)`
  }

  handleModalClick (e) {
    if (e.target.className === 'cmui-modal__modal') {
      if (!this.props.lock) {
        this.props.close()
      } else {
        const LOCK_CLASSNAME = 'cmui-modal__modal-dialog--lock'
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
    const {children, className, lock, size, zIndex, close, modal, ...other} = this.props
    return (
      <div className={cx('cmui-modal', {
        [`cmui-modal--${size}`]: size
      }, className)} {...other}>
        <div className="cmui-modal__backdrop" style={{zIndex: zIndex || 3000}} />
        <div
          className="cmui-modal__modal"
          style={{zIndex: zIndex || 3000}}
          onClick={::this.handleModalClick}
        >
          <div className="cmui-modal__modal-dialog" ref={node => (this.modalNode = node)}>
            <div className="cmui-modal__modal-content">
              {children}
            </div>
            <div
              className="cmui-modal__modal-close"
              onClick={() => close()}
            />
          </div>
        </div>
      </div>
    )
  }
}

ModalContent.childContextTypes = {
  modalContent: PropTypes.instanceOf(ModalContent)
}

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lock: PropTypes.bool,
  size: PropTypes.number,
  zIndex: PropTypes.number,
  close: PropTypes.func,
  modal: PropTypes.object
}

export default ModalContent
