import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class NavItemGroup extends React.Component {
  render () {
    const { children, className, title, ...other } = this.props
    return (
      <li className={cx(`${prefixCls}-nav__item-group`, className)} {...other}>
        <div className={`${prefixCls}-nav__item-group-title`}>{title}</div>
        {children && <ul>{children}</ul>}
      </li>
    )
  }
}

NavItemGroup.propTypes = {
  className: PropTypes.string,

  // NavItem list
  children: PropTypes.node,

  // The title of NavItemGroup which can be a text string or a React element
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default NavItemGroup
