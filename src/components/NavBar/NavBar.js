import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const defaultLogo = (
  <svg id="navigation-menu" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1,15.3 L17,15.3 C17.5522847,15.3 18,15.7477153 18,16.3 L18,17 C18,17.5522847 17.5522847,18 17,18 L1,18 C0.44771525,18 6.76353751e-17,17.5522847 0,17 L0,16.3 C-6.76353751e-17,15.7477153 0.44771525,15.3 1,15.3 Z M1,7.65 L17,7.65 C17.5522847,7.65 18,8.09771525 18,8.65 L18,9.35 C18,9.90228475 17.5522847,10.35 17,10.35 L1,10.35 C0.44771525,10.35 6.76353751e-17,9.90228475 0,9.35 L0,8.65 C-6.76353751e-17,8.09771525 0.44771525,7.65 1,7.65 Z M1,0 L17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,1.7 C18,2.25228475 17.5522847,2.7 17,2.7 L1,2.7 C0.44771525,2.7 6.76353751e-17,2.25228475 0,1.7 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
  </svg>
)

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedId: props.selectedId
    }
  }

  getChildContext () {
    return {
      nav: this
    }
  }

  handleSubNavClick (props) {
    this.setState({ selectedId: props.id })
  }

  handleItemClick (props, e) {
    this.setState({ selectedId: props.id })
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  render () {
    const { children, className, width, logoUrl, ...other } = this.props

    delete other.selectedId
    delete other.onItemClick

    if (width) {
      other.style = Object.assign(other.style || {}, { width })
    }

    return (
      <div className={cx(`${prefixCls}-nav-bar`, className)} {...other}>
        <ul className={cx(`${prefixCls}-nav-bar__left`)}>
          <li className={`${prefixCls}-nav-bar__left-top`}>
            <div className={`${prefixCls}-nav-bar__left-top-wrapper`}>
              <img className={`${prefixCls}-nav-bar__left-top-logo`} src={logoUrl} alt="Logo" />
            </div>
          </li>
          {children}
        </ul>
        <div id={`${prefixCls}-nav-bar__sub-nav-container`} />
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

  logoUrl: PropTypes.node,

  // 当前选中的导航项的 id
  selectedId: PropTypes.string.isRequired,

  // 导航宽度
  width: PropTypes.number,

  // 叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象
  onItemClick: PropTypes.func
}

NavBar.defaultProps = {
  selectedId: ''
}

export default NavBar
