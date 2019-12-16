import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import invariant from 'invariant'
import Button from '../Button'

class Tab extends React.Component {
  handleClick (index, e) {
    e.preventDefault()
    const tabs = this.context.tabs
    if (!('activeKey' in this.props)) {
      tabs.setState({ activeIndex: index })
    }
    tabs.props.onChange && tabs.props.onChange(index, this.props.activeKey)
  }

  onClose (index, e) {
    e.preventDefault()
    e.stopPropagation()
    const _onClose = this.context.tabs.props.onClose || this.context.tablist.onClose
    _onClose && _onClose(index, this.props.activeKey)
  }

  render () {
    const {
      children, className, activeKey, closeable, ...other
    } = this.props
    const { tabs } = this.context
    const index = tabs.tabCount++

    'activeKey' in tabs.props && invariant(
      'activeKey' in this.props,
      'You set `activeKey` for Tabs but no `activeKey` for Tab'
    )

    let isActive
    if ('activeKey' in this.props) {
      isActive = activeKey === tabs.props.activeKey
    } else {
      isActive = index === tabs.state.activeIndex
    }
    return (
      <li
        className={cx(`${prefixCls}-tabs__tab`, {
          [`${prefixCls}-tabs__tab_active`]: isActive
        }, className)} {...other}
      >
        <a href="" onClick={this.handleClick.bind(this, index)} draggable="false">
          <span className={`${prefixCls}-tabs__tab-content`}>{children}</span>
          {
            closeable && (
              <Button
                icon="close"
                size="sm"
                className={`${prefixCls}-tabs__tab-close`}
                onClick={this.onClose.bind(this, index)}
              />
            )
          }
        </a>
      </li>
    )
  }
}

Tab.contextTypes = {
  tabs: PropTypes.object,
  tablist: PropTypes.object
}

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // Corresponds to the Tabs `activeKey`
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // Whether to display the close button, default value is `false`
  closeable: PropTypes.bool
}

export default Tab
