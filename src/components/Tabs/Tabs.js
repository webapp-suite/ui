import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Tabs extends React.Component {
  constructor (props) {
    super()
    this.state = {
      children: props.children,
      activeIndex: props.activeIndex || 0
    }
  }

  getChildContext () {
    return {
      tabs: this
    }
  }

  changeActiveIndex = (activeIndex) => {
    this.setState({activeIndex})
  }

  componentWillReceiveProps (nextProps) {
    'activeIndex' in nextProps && this.setState({activeIndex: nextProps.activeIndex || 0})
  }

  componentWillUpdate () {
    this.isInit = false
    this.tabCount = this.panelCount = 0
  }

  componentWillMount () {
    this.isInit = true
    this.tabCount = this.panelCount = 0
  }

  render () {
    const {
      className, activeIndex, activeKey, onChange, onClose, ...other
    } = this.props
    return (
      <div className={cx(`${prefixCls}-tabs`, className)} {...other}>
        {this.state.children}
      </div>
    )
  }
}

Tabs.childContextTypes = {
  tabs: PropTypes.instanceOf(Tabs)
}

Tabs.propTypes = {

  // 指定（索引值）某个 Tab 处于 active 状态
  activeIndex: PropTypes.number,

  // Tabs 默认以索引来管理 active 的状态，但是你也可以给每个 Tab 以及 TabPanel 绑定 "id"，这里用 activeKey 表示，然后管理 Tabs 的 activeKey 状态来控制选项卡的 active 状态
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // Tab 切换后的回调，参数(index, key)
  onChange: PropTypes.func,

  // Tab 关闭事件处理，参数(index, key)
  onClose: PropTypes.func,

  customProp (props) {
    if (('activeIndex' in props || 'activeKey' in props) && !props.onChange) {
      return new Error('You provided `activeIndex` or `activeKey` prop without an `onChange` handler')
    }
    if ('activeIndex' in props && 'activeKey' in props) {
      return new Error('`activeIndex` and `activeKey` can\'t exist at the same time')
    }
  }
}

export default Tabs
