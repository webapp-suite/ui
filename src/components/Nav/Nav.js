import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Nav extends Component {
  getChildContext () {
    return {
      nav: this
    }
  }

  handleItemClick (props, e) {
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  render () {
    const { children, className, href, onItemClick, ...other } = this.props
    return (
      <div className={classnames('cmui-nav', className)} {...other}>
        <ul>{children}</ul>
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

  // 所有 NavItem 的基础 href
  href: PropTypes.string,

  // 叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象
  onItemClick: PropTypes.func
}

export default Nav
