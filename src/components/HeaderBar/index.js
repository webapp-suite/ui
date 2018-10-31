import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

class HeaderBar extends React.Component {
  render () {
    const { className, children, icon, title, ...other } = this.props
    return (
      <header className={cx(`${prefixCls}-headerbar`, className)} {...other}>
        <ul className={`${prefixCls}-headerbar__bars`}>
          <li className={`${prefixCls}-headerbar__bars-tool`}>
            <menu className={`${prefixCls}-headerbar__bars-tool-item`}>
              <li className={`${prefixCls}-headerbar__bars-tool-item-icon`}>
                <img src={icon} alt="icon" width={40} height={40} />
              </li>
              <li className={`${prefixCls}-headerbar__bars-tool-item-title`}>
                <label>{title}</label>
              </li>
            </menu>
          </li>
          <li>{children}</li>
        </ul>
      </header>
    )
  }
}

HeaderBar.propTypes = {
  className: PropTypes.string,

  children: PropTypes.element,

  // HeaderBar 左侧的 icon
  icon: PropTypes.string,

  // HeaderBar 标题
  title: PropTypes.string
}

export default HeaderBar
