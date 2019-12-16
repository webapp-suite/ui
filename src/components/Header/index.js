import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './index.less'

class Header extends React.Component {
  render () {
    const { className, children, icon, title, color, ...other } = this.props
    return (
      <header
        className={cx(
          `${prefixCls}-header`,
          `${prefixCls}-header--${color}`,
          className
        )}
        {...other}
      >
        <ul className={`${prefixCls}-header__bars`}>
          <li className={`${prefixCls}-header__bars-tool`}>
            <menu className={`${prefixCls}-header__bars-tool-item`}>
              <li className={`${prefixCls}-header__bars-tool-item-icon`}>
                <img src={icon} alt="icon" width={40} height={40} />
              </li>
              <li className={`${prefixCls}-header__bars-tool-item-title`}>
                <label>{title}</label>
              </li>
            </menu>
          </li>
          {children && <li>{children}</li>}
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,

  children: PropTypes.node,

  // The left icon of Header
  icon: PropTypes.string,

  // The title of Header
  title: PropTypes.string,

  // The background color of Header, default value is `white`
  color: PropTypes.oneOf(['blue', 'red', 'orange', 'yellow', 'green', 'purple', 'pink', 'gray', 'slate', 'black', 'white'])
}

Header.defaultProps = {
  color: 'white'
}

export default Header
