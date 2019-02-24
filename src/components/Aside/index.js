import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from 'earth-ui/lib/Button'
import Dialog from '../dialog/Dialog'
import DialogBody from '../dialog/DialogBody'
import './index.less'

class AsideCloseButton extends Component {
  static contextTypes = {
    dialog: PropTypes.object
  }
  handleClose = () => {
    this.context?.dialog?.close?.()
  }
  render () {
    return (
      <Button
        className={`${prefixCls}-aside__header-close`}
        icon="close"
        onClick={this.handleClose}
      />
    )
  }
}

class Aside extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { className, children, isOpen, title, onClose, ...other } = this.props
    return (
      <div className={cx(`${prefixCls}-aside`, className)}>
        {!!isOpen && (
          <Dialog onClose={onClose} type="aside" backdrop {...other}>
            <div className={`${prefixCls}-aside__header`}>
              <div className={`${prefixCls}-aside__header-title`}>{title}</div>
              <AsideCloseButton />
            </div>
            <DialogBody>{children}</DialogBody>
          </Dialog>
        )}
      </div>
    )
  }
}

Aside.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  onOpen: PropTypes.func,
  onOpened: PropTypes.func,
  title: PropTypes.string
}

export default Aside
