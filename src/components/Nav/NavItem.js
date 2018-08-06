import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class NavItem extends Component {
  constructor (props) {
    super()
    this.state = {
      open: props.defaultOpen || false
    }
  }

  componentWillMount () {
    const active = this.isActive(this.props)
    const state = { active }
    if (this.props.children && active) {
      state.open = true
    }
    this.setState(state)
  }

  componentWillReceiveProps (nextProps) {
    const active = this.isActive(nextProps)
    this.setState({ active })
  }

  isActive (props) {
    return this.context.nav.state.selectedId === props.id
  }

  toggle (e) {
    e.preventDefault()
    this.setState({open: !this.state.open})
  }

  handleClick (e) {
    this.props.onClick && this.props.onClick(e)
    !this.props.children && this.context.nav.handleItemClick(this.props, e)
  }

  render () {
    const { open, active } = this.state
    const {
      children, className, defaultOpen, icon, title, ...other
    } = this.props

    delete other.selectedId

    const NavIcon = icon && <Icon type={icon} className={`${prefixCls}-nav__item-icon`} />
    const Toggle = children && <Icon type="caret-right" className={`${prefixCls}-nav__item-toggle`} />

    let Item
    if (children) {
      Item = <div className={`${prefixCls}-nav_item-entity`} onClick={::this.toggle}>{NavIcon}{title}{Toggle}</div>
    } else {
      Item = <div className={`${prefixCls}-nav_item-entity`}>{NavIcon}{title}{Toggle}</div>
    }

    // 收起状态时不再渲染子节点
    return (
      <li
        onClick={::this.handleClick}
        className={cx(
          `${prefixCls}-nav__item`,
          {
            [`${prefixCls}-nav__item_open`]: open,
            [`${prefixCls}-nav__item_active`]: active
          },
          className
        )}
        {...other}
      >
        {Item}
        {open && children && <ul>{children}</ul>}
      </li>
    )
  }
}

NavItem.contextTypes = {
  nav: PropTypes.object
}

NavItem.propTypes = {

  children: PropTypes.node,

  className: PropTypes.string,

  selectedId: PropTypes.string,

  // 菜单 id
  id: PropTypes.string.isRequired,

  // 菜单标题，可以是文本字符串，也可以是 React 元素
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  // 点击 NavItem 调用此函数
  onClick: PropTypes.func,

  // 菜单图标，参考 Icon 组件 type 属性
  icon: PropTypes.string,

  // 初始化是否展开（不可控），用于非叶子节点
  defaultOpen: PropTypes.bool
}

export default NavItem
