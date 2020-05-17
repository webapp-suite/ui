import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from '../Button'
import Scrollbar from '../Scrollbar'
import { MenuIcon } from './MenuIcon'
import NavBottom from './NavBottom'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedId: props.selectedId || '',
      collapsed: this.props.collapsed,
      collapsedTrigger: ''
    }
  }

  getChildContext () {
    return {
      nav: this
    }
  }

  handleItemClick (props, e) {
    this.setState({ selectedId: props.id })
    this.props.collapsed && this.handleCollapseToggle(true)
    this.props.onItemClick && this.props.onItemClick(props, e)
  }

  handleCollapseToggle (collapsed) {
    this.setState({
      collapsed,
      collapsedTrigger: collapsed ? 'close-icon' : 'menu-icon'
    })
  }

  render () {
    const { collapsed } = this.state
    const {
      children,
      className,
      width,
      logoUrl,
      user,
      onSettingClick,
      onLogoutClick,
      hideSetting,
      ...other
    } = this.props

    delete other.selectedId
    delete other.onItemClick
    delete other.user
    delete other.collapsed

    if (width) {
      if (collapsed) {
        delete other?.style?.width
      } else {
        other.style = Object.assign(other.style || {}, { width })
      }
    }

    return (
      <div
        className={cx(
          `${prefixCls}-nav`,
          { [`${prefixCls}-nav--collapsed`]: collapsed },
          className
        )}
        {...other}
      >
        <div className={`${prefixCls}-nav__top`}>
          <div
            className={`${prefixCls}-nav__top-left-container`}
            onClick={() => this.handleCollapseToggle(false)}
          >
            <MenuIcon
              className={`${prefixCls}-nav__top-left-container-menu-icon`}
            />
          </div>
          <div className={`${prefixCls}-nav__top-center-container`}>
            <img
              className={`${prefixCls}-nav__top-center-container-logo`}
              src={logoUrl}
              alt="Logo"
            />
          </div>
          <div className={`${prefixCls}-nav__top-right-container`}>
            <Button
              className={cx(
                `${prefixCls}-nav__btn-icon`,
                `${prefixCls}-nav__top-right-container-close-icon`
              )}
              onClick={() => this.handleCollapseToggle(true)}
              icon="close"
            />
          </div>
        </div>
        <Scrollbar className={`${prefixCls}-nav__scrollbar`}>
          <ul>{children}</ul>
        </Scrollbar>
        <NavBottom
          user={user}
          onSettingClick={onSettingClick}
          onLogoutClick={onLogoutClick}
          hideSetting={hideSetting}
        />
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

  /** The id of active nav item */
  selectedId: PropTypes.string.isRequired,

  /** The url of logo image such as svg, png */
  logoUrl: PropTypes.string,

  /** Whether the navigation is collapsed */
  collapsed: PropTypes.bool,

  /** The width of expanded navigation, default value is `330px` */
  width: PropTypes.number,

  /** User information */
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string
  }),

  /** The click event of each NavItem, the parameters are the current NavItem props and event object */
  onItemClick: PropTypes.func,

  /** The click event of logout button */
  onLogoutClick: PropTypes.func,

  /** The click event of setting button */
  onSettingClick: PropTypes.func,

  /** Determine whether setting button should be hidden */
  hideSetting: PropTypes.bool
}

Nav.defaultProps = {
  collapsed: true,
  hideSetting: false
}

export default Nav
