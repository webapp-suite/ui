import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Nav extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedId: props.selectedId || ''
    }
  }

  getChildContext () {
    return {
      nav: this
    }
  }

  handleItemClick (props, e) {
    this.setState({selectedId: props.id})
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  render () {
    const { children, className, width, ...other } = this.props

    delete other.selectedId
    delete other.onItemClick

    if (width) {
      other.style = Object.assign(other.style || {}, { width })
    }

    return (
      <div className={cx(`${prefixCls}-nav`, className)} {...other}>
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

  // 当前选中的菜单项的 id
  selectedId: PropTypes.string.isRequired,

  // 宽度，默认`100%`
  width: PropTypes.number,

  // 叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象
  onItemClick: PropTypes.func
}

export default Nav
