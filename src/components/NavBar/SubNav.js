import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class SubNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: props.defaultOpen || false
    }
  }

  handleClickIcon = e => {
    e.preventDefault()
    for (const child of React.Children.toArray(this.props.children)) {
      if (child.type.name === 'NavItemGroup') {
        this.context.nav.handleSubNavClick(child.props.children[0].props)
        break
      }
      if (child.type.name === 'NavItem') {
        this.context.nav.handleSubNavClick(child.props)
        break
      }
    }
    this.setState({ open: true })
  }

  handleClick = e => {
    this.props.onClick && this.props.onClick(e)
  }

  render () {
    const { open } = this.state
    const { children, className, defaultOpen, icon, title, indent, ...other } = this.props

    const NavIcon = icon && <Icon className={`${prefixCls}-nav-bar__sub-nav-icon`} src={icon} />
    const ToggleIcon = <Icon type="triangleright" className={`${prefixCls}-nav-bar__sub-nav-toggle`} />

    let indentStyle

    if (indent) {
      indentStyle = { paddingLeft: `${indent}px` }
    }
    const selectedId = this.context.nav.state.selectedId
    let active = false
    const childrenWithNewProps = React.Children.map(children, child => {
      if (child.type.name === 'NavItemGroup') {
        if (React.Children.toArray(child.props.children).some(v => selectedId === v?.props?.id)) {
          active = true
        }
        return React.cloneElement(child, {
          indent: indent + 8
        })
      }
      if (child.type.name === 'NavItem') {
        // debugger
        if (selectedId === child?.props?.id) {
          active = true
        }
        return React.cloneElement(child, {
          indent: indent * 2
        })
      }
    })

    // Child nodes are no longer rendered when the nav item is closed.
    return (
      <li
        onClick={this.handleClick}
        className={cx(
          `${prefixCls}-nav-bar__sub-nav`,
          {
            [`${prefixCls}-nav-bar__sub-nav_open`]: open
          },
          {
            [`${prefixCls}-nav-bar__sub-nav--active`]: active
          },
          className
        )}
        {...other}
      >
        <div className={`${prefixCls}-nav-bar__sub-nav-entity`} onClick={this.handleClickIcon} style={indentStyle}>{NavIcon}</div>
        {open && active && childrenWithNewProps && (
          <div className={`${prefixCls}-nav-bar__sub-nav-right`}>
            <div className={`${prefixCls}-nav-bar__sub-nav-right-title`}>{title}{ToggleIcon}</div>
            <ul>{childrenWithNewProps}</ul>
          </div>
        )}
      </li>
    )
  }
}

SubNav.contextTypes = {
  nav: PropTypes.object
}

SubNav.propTypes = {
  className: PropTypes.string,

  indent: PropTypes.number,

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
