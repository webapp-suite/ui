import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedId: props.selectedId,
      collapsed: props.collapsed || false
    }
  }

  getChildContext () {
    return {
      nav: this
    }
  }

  handleSubNavClick (props) {
    this.setState({ selectedId: props.id })
    this.setState({ collapsed: false })
  }

  handleItemClick (props, e) {
    this.setState({ selectedId: props.id })
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  handleMenuClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    const { children, className, width, indent, ...other } = this.props

    delete other.selectedId
    delete other.onItemClick

    if (width) {
      other.style = Object.assign(other.style || {}, { width })
    }

    const childrenWithNewProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        collapsed: this.state.collapsed
      })
    })

    const menuStatus = this.state.collapsed ? 'on' : 'off'

    return (
      <div className={cx(`${prefixCls}-nav-bar`, className)} {...other}>
        <ul className={cx(`${prefixCls}-nav-bar__left-icon`)}>
          <li className={`${prefixCls}-nav-bar__left-icon-menu-${menuStatus}`} onClick={this.handleMenuClick}>
            <div className={`${prefixCls}-nav-bar__sub-nav-entity`}>
              <Icon className={`${prefixCls}-nav-bar__sub-nav-icon`} src={`/svg/icons.svg#navigation-menu-${menuStatus}`} />
            </div>
          </li>
          {childrenWithNewProps}
        </ul>
      </div>
    )
  }
}

NavBar.childContextTypes = {
  nav: PropTypes.instanceOf(NavBar)
}

NavBar.propTypes = {

  children: PropTypes.node,

  className: PropTypes.string,

  // 当前选中的导航项的 id
  selectedId: PropTypes.string.isRequired,

  // Whether to open sub navigation
  collapsed: PropTypes.bool,

  // 导航缩进宽度
  indent: PropTypes.number,

  // 导航宽度
  width: PropTypes.number,

  // 叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象
  onItemClick: PropTypes.func
}

NavBar.defaultProps = {
  selectedId: ''
}

export default NavBar
