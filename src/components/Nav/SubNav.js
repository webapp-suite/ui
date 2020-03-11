import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class SubNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      active: false
    }
  }

  handleToggle = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }

  handleClick = e => {
    if (this.context.nav.state.collapsed) {
      this.context.nav.setState({
        collapsed: false,
        collapsedTrigger: 'sub-nav-icon'
      })
      this.setState({ open: true })
    }
    this.props.onClick && this.props.onClick(e)
  }

  componentDidUpdate (nextProps, nextState) {
    // Close all sub navs when click close-icon button on the right top
    if (this.context.nav.state.collapsed && this.state.open) {
      this.setState({ open: false })
    }
  }

  activateOrOpenSubNav = ({
    nav: {
      state: { selectedId, collapsedTrigger }
    }
  }) => {
    if (!Array.isArray(this.props.children)) {
      return
    }
    for (const child of this.props.children) {
      if (child.type.name === 'NavItem') {
        if (child.props.id === selectedId) {
          // Make the current SubNav active if one of children is active
          this.setState({ active: true })
          // Make the active NavItem's corresponding SubNav open if click menu icon
          !this.state.open &&
            collapsedTrigger === 'menu-icon' &&
            this.setState({ open: true })
          return
        }
      }
      if (child.type.name === 'NavItemGroup') {
        for (const item of child.props.children) {
          if (item.props.id === selectedId) {
            // Make the current SubNav active if one of children is active
            this.setState({ active: true })
            // Make the active NavItem's corresponding SubNav open if click menu icon
            !this.state.open &&
              collapsedTrigger === 'menu-icon' &&
              this.setState({ open: true })
            return
          }
        }
      }
    }
    this.setState({ active: false })
  }

  /**
   * Called by props and context changes such as `this.context.nav`
   */
  componentWillReceiveProps (nextProps, nextContext) {
    this.activateOrOpenSubNav(nextContext)
  }

  /**
   * Called after the component mounted
   */
  componentDidMount () {
    this.activateOrOpenSubNav(this.context)
  }

  render () {
    const { open, active } = this.state
    const { className, icon, title, children, ...other } = this.props

    const SubNavIcon = /\//.test(icon) ? (
      <Icon className={`${prefixCls}-nav__sub-nav-title-icon`} src={icon} />
    ) : (
      <Icon type={icon} className={`${prefixCls}-nav__sub-nav-title-icon`} />
    )

    // Child nodes are no longer rendered when the nav item is closed.
    return (
      <li
        onClick={this.handleClick}
        className={cx(
          `${prefixCls}-nav__sub-nav`,
          {
            [`${prefixCls}-nav__sub-nav--open`]: open,
            [`${prefixCls}-nav__sub-nav--active`]: active
          },
          className
        )}
        {...other}
      >
        <div
          className={`${prefixCls}-nav__sub-nav-title`}
          onClick={this.handleToggle}
        >
          {SubNavIcon}
          <span>
            {title}
            <Icon
              type="triangleright"
              className={`${prefixCls}-nav__sub-nav-title-toggle`}
            />
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

  /* The children of SubNav which can be NavItem or NavItemGroup */
  children: PropTypes.node,

  /* The title of SubNav which can be a text string or a React element */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /* The click event of each SubNav */
  onClick: PropTypes.func,

  /* SubNav icon, support `Icon` component or svg url */
  icon: PropTypes.string
}

export default SubNav
