import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class SubNav extends React.Component {
  constructor (props) {
    super()
    this.state = {
      open: props.defaultOpen || false
    }
  }

  handleToggle = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }

  handleClick = e => {
    if (this.context.nav.state.collapsed) {
      this.context.nav.setState({ collapsed: false })
    }
    this.props.onClick && this.props.onClick(e)
  }

  render () {
    const { open } = this.state
    const {
      children,
      className,
      defaultOpen,
      icon,
      title,
      ...other
    } = this.props

    const NavIcon = /\//.test(icon) ? (
      <Icon className={`${prefixCls}-nav__sub-nav-icon`} src={icon} />
    ) : (
      <Icon type={icon} className={`${prefixCls}-nav__sub-nav-icon`} />
    )
    const ToggleIcon = (
      <Icon
        type="triangleright"
        className={`${prefixCls}-nav__sub-nav-toggle`}
      />
    )

    // Child nodes are no longer rendered when the nav item is closed.
    return (
      <li
        onClick={this.handleClick}
        className={cx(
          `${prefixCls}-nav__sub-nav`,
          {
            [`${prefixCls}-nav__sub-nav_open`]: open
          },
          className
        )}
        {...other}
      >
        <div
          className={`${prefixCls}-nav_sub-nav-entity`}
          onClick={this.handleToggle}
        >
          {NavIcon}
          <span className={`${prefixCls}-nav_sub-nav-entity-text`}>
            {title}
            {ToggleIcon}
          </span>
        </div>
        {open && children && <ul>{children}</ul>}
      </li>
    )
  }
}

SubNav.contextTypes = {
  nav: PropTypes.object
}

SubNav.propTypes = {
  className: PropTypes.string,

  // 二级导航的导航项
  children: PropTypes.node.isRequired,

  // 二级导航标题，可以是文本字符串，也可以是 React 元素
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  // 点击二级导航项调用此函数
  onClick: PropTypes.func,

  // 二级导航项图标，参考 Icon 组件 type 属性
  icon: PropTypes.string,

  // 初始化是否展开（不可控）
  defaultOpen: PropTypes.bool
}

export default SubNav
