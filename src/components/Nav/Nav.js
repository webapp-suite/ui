import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Scrollbar from '../Scrollbar'
import Button from '../Button'

function renderNavBottom () {
  return (
    <div className={`${prefixCls}-nav__bottom`}>
      <div className={`${prefixCls}-nav__bottom-image`}>
        <img
          className={`${prefixCls}-nav__bottom-image-icon`}
          src="/svg/avatarPlaceholder.svg"
          alt="Avatar"
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-user`}>
        <span className={`${prefixCls}-nav__bottom-user-name`}>KIMI GAO</span>
        <span className={`${prefixCls}-nav__bottom-user-company`}>
          Earthui Corp.
        </span>
      </div>
      <div className={`${prefixCls}-nav__bottom-logout`}>
        <Button
          icon="logout"
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-logout-icon`
          )}
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-settings`}>
        <Button
          icon="settings"
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-settings-icon`
          )}
        />
      </div>
    </div>
  )
}

class Nav extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedId: props.selectedId || '',
      open: true
    }
  }

  getChildContext () {
    return {
      nav: this
    }
  }

  handleItemClick (props, e) {
    this.setState({ selectedId: props.id })
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    const { open } = this.state
    const { children, className, width, indent, ...other } = this.props

    delete other.selectedId
    delete other.onItemClick

    if (width) {
      other.style = Object.assign(other.style || {}, { width })
    }

    const childrenWithNewProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        indent
      })
    })

    return (
      <div
        className={cx(
          `${prefixCls}-nav`,
          { [`${prefixCls}-nav--open`]: open },
          className
        )}
        {...other}
      >
        <div className={`${prefixCls}-nav__top`}>
          <div className={`${prefixCls}-nav__top-logo`}>
            <span>EARTHUi</span>
          </div>
          <Button
            className={cx(
              `${prefixCls}-nav__btn-icon`,
              `${prefixCls}-nav__top-close-btn`
            )}
            onClick={this.handleClose}
            icon="close"
          />
        </div>
        <Scrollbar className={`${prefixCls}-nav__scrollbar`}>
          <ul>{childrenWithNewProps}</ul>
        </Scrollbar>
        {renderNavBottom()}
      </div>
    )
  }
}

Nav.childContextTypes = {
  nav: PropTypes.instanceOf(Nav)
}

Nav.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,

  // 当前选中的导航项的 id
  selectedId: PropTypes.string.isRequired,

  // 导航是否收起状态
  collapsed: PropTypes.bool,

  // 导航缩进宽度
  indent: PropTypes.number,

  // 导航宽度
  width: PropTypes.number,

  // 叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象
  onItemClick: PropTypes.func
}

Nav.defaultProps = {
  indent: 24
}

export default Nav
