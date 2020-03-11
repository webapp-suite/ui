import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class NavItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  setActiveState (props) {
    const active = this.context.nav.state.selectedId === props.id
    this.setState({ active })
  }

  componentWillMount () {
    this.setActiveState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.setActiveState(nextProps)
  }

  handleClick = e => {
    this.props.onClick && this.props.onClick(e)
    this.context.nav.handleItemClick(this.props, e)
  }

  render () {
    const { active } = this.state
    const { children, className, icon, title, ...other } = this.props

    const NavItemIcon = /\//.test(icon) ? (
      <Icon className={`${prefixCls}-nav__item-icon`} src={icon} />
    ) : (
      <Icon type={icon} className={`${prefixCls}-nav__item-icon`} />
    )

    return (
      <li
        onClick={this.handleClick}
        className={cx(
          `${prefixCls}-nav__item`,
          {
            [`${prefixCls}-nav__item--active`]: active
          },
          className
        )}
        {...other}
      >
        <div className={`${prefixCls}-nav__item-title`}>
          {NavItemIcon}
          <span>
            {title}
            {children}
          </span>
        </div>
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

  /** The id of navigation item */
  id: PropTypes.string.isRequired,

  /** Navigation item title which can be a text string or a React element */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Click the navigation item will call this function */
  onClick: PropTypes.func,

  /** Navigation item icon, support `Icon` component or svg url. It's not recommended. */
  icon: PropTypes.string
}

export default NavItem
