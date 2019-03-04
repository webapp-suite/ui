import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
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
    this.state = {
      hasTabsChildren: false
    }
  }

  componentWillMount () {
    React.Children.forEach(this.props.children, child => {
      child?.type?.name === 'Tabs' && this.setState({ hasTabsChildren: true })
    })
  }

  render () {
    const { className, children, isOpen, title, onClose, ...other } = this.props
    return (
      <div className={cx(`${prefixCls}-aside`, className)}>
        {!!isOpen && (
          <Dialog onClose={onClose} type="aside" backdrop {...other}>
            <div
              className={cx(`${prefixCls}-aside__header`, {
                [`${prefixCls}-aside__header_with-tabs`]: this.state
                  .hasTabsChildren
              })}
            >
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
  // 是否打开侧边栏
  isOpen: PropTypes.bool.isRequired,
  // 侧边栏关闭时回调函数
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  // 侧边栏标题
  title: PropTypes.string
}

export default Aside
