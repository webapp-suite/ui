import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Scrollbar from '../Scrollbar'
import Button from '../Button'

const MenuIcon = ({ className }) => (
  <svg width="22" height="22" className={className}>
    <g fill="#FFF" fillRule="evenodd">
      <path d="M0 1.01A1 1 0 0 1 1.002 0h19.996A1 1 0 0 1 22 1.01v1.98A1 1 0 0 1 20.998 4H1.002A1 1 0 0 1 0 2.99V1.01z" />
      <rect y="9" width="22" height="4" rx="1" />
      <rect y="18" width="22" height="4" rx="1" />
    </g>
  </svg>
)

MenuIcon.propTypes = {
  className: PropTypes.string
}

function renderNavBottom ({ user, onSettingClick, onLogoutClick }) {
  return (
    <div className={`${prefixCls}-nav__bottom`}>
      <div className={`${prefixCls}-nav__bottom-image`}>
        <img
          className={`${prefixCls}-nav__bottom-image-icon`}
          src={user.avatar}
          alt="Avatar"
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-user`}>
        <span className={`${prefixCls}-nav__bottom-user-name`}>
          {user.name}
        </span>
        <span className={`${prefixCls}-nav__bottom-user-company`}>
          {user.company}
        </span>
      </div>
      <div className={`${prefixCls}-nav__bottom-logout`}>
        <Button
          icon="logout"
          onClick={e => onLogoutClick(e)}
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-logout-icon`
          )}
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-settings`}>
        <Button
          icon="settings"
          onClick={e => onSettingClick(e)}
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-settings-icon`
          )}
        />
      </div>
    </div>
  )
}

renderNavBottom.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string
  }),

  onSettingClick: PropTypes.func,
  onLogoutClick: PropTypes.func
}

class Nav extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedId: props.selectedId || '',
      collapsed: true,
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
    const { children, className, width, logoUrl, ...other } = this.props

    delete other.selectedId
    delete other.onItemClick
    delete other.user
    delete other.onSettingClick
    delete other.onLogoutClick

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
        {renderNavBottom(this.props)}
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

  // The id of active nav item
  selectedId: PropTypes.string.isRequired,

  // The url of logo image such as svg, png
  logoUrl: PropTypes.string,

  // Whether the navigation is collapsed
  collapsed: PropTypes.bool,

  // The width of expanded navigation, default value is `330px`
  width: PropTypes.number,

  // The click event of each NavItem, the parameters are the current NavItem props and event object
  onItemClick: PropTypes.func
}

export default Nav
