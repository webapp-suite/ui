import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import invariant from 'invariant'
import classlist from 'classlist'

class TabPanel extends React.Component {
  static activeClassName = `${prefixCls}-tabs__panel_active`

  componentWillMount () {
    this.prepareIsActive(this.props)
  }

  componentDidMount () {
    this.rootNode = ReactDOM.findDOMNode(this)
    if (this.active) {
      this.rootNode.style.display = 'block'
      if (!this.context.tabs.isInit) {
        // this.rootNode.offsetWidth
      }
      classlist(this.rootNode).add(TabPanel.activeClassName)
    }
  }

  shouldComponentUpdate (nextProps) {
    this.prevActive = this.active
    this.prepareIsActive(nextProps)
    return this.active || this.prevActive !== this.active
  }

  componentDidUpdate () {
    if (this.active) {
      this.rootNode.style.display = 'block'
      // this.rootNode.offsetWidth
      classlist(this.rootNode).add(TabPanel.activeClassName)
    } else {
      this.rootNode.style.display = 'none'
      classlist(this.rootNode).remove(TabPanel.activeClassName)
    }
  }

  prepareIsActive (props) {
    const { tabs } = this.context
    if ('activeKey' in props) {
      this.active = props.activeKey === tabs.props.activeKey
    } else {
      const index = tabs.panelCount++
      this.active = index === tabs.state.activeIndex
    }
  }

  render () {
    const { children, className, activeKey, ...other } = this.props
    const { tabs } = this.context

    'activeKey' in tabs.props &&
      invariant(
        'activeKey' in this.props,
        'You set `activeKey` for `Tabs` but no `activeKey` for `TabPanel`'
      )

    // Should not render and unmount when not acitve
    if (this.active) {
      this.children = children
    }

    return (
      <div className={cx(`${prefixCls}-tabs__panel`, className)} {...other}>
        {this.active ? children : this.children}
      </div>
    )
  }
}

TabPanel.contextTypes = {
  tabs: PropTypes.object
}

TabPanel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  /** Corresponds to the Tabs `activeKey` */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TabPanel
