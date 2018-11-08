import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import Tab from './Tab'

class TabList extends React.Component {
  constructor (props) {
    super()
    this.state = {
      children: props.children
    }
  }
  getChildContext () {
    return {
      tablist: this
    }
  }
  addNewTab = e => {
    e.preventDefault()
    const id = Math.random().toString(16).slice(2, 6)
    const { newTab } = this.props
    const { children } = this.state
    const newTabElement = <Tab key={id} closeable={newTab.closeable || false}>{newTab.name}</Tab>
    this.context.tabs.setState({activeIndex: this.context.tabs.tabCount})
    this.context.tabs.tabCount = this.context.tabs.panelCount = 0
    this.setState({children: children.concat(newTabElement)})
  }
  onClose = (index, activeKey) => {
    const { children } = this.state
    this.setState({children: children.filter(c => children.indexOf(c) !== index)})
    this.context.tabs.changeActiveIndex(children.length - 2)
  }
  render () {
    const { className, newTab, ...other } = this.props
    return <ul className={cx(`${prefixCls}-tabs__list`, className)} {...other}>
      {this.state.children}
      {!!newTab && <Button micro icon="add" onClick={this.addNewTab} />}
    </ul>
  }
}

TabList.childContextTypes = {
  tablist: PropTypes.instanceOf(TabList)
}

TabList.contextTypes = {
  tabs: PropTypes.object
}

TabList.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  // 新增 tab 的属性定义
  newTab: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string
  })
}

export default TabList
