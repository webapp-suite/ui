import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

class Tabs extends React.Component {
  constructor (props) {
    super()
    this.state = {
      activeIndex: props.activeIndex || 0
    }
  }

  getChildContext () {
    return {
      tabs: this
    }
  }

  changeActiveIndex = (activeIndex) => {
    this.setState({ activeIndex })
  }

  componentWillReceiveProps (nextProps) {
    'activeIndex' in nextProps && this.setState({ activeIndex: nextProps.activeIndex || 0 })
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
      children, className, activeIndex, activeKey, onChange, onClose, ...other
    } = this.props
    return (
      <div className={cx(`${prefixCls}-tabs`, className)} {...other}>
        {children}
      </div>
    )
  }
}

Tabs.childContextTypes = {
  tabs: PropTypes.instanceOf(Tabs)
}

Tabs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,

  // Specifies which Tab is active
  activeIndex: PropTypes.number,

  // Tabs manage active state by default by index, but you can also bind `id` to each Tab and TabPanel
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // The callback of switching Tab, param: (index, key)
  onChange: PropTypes.func,

  // The event of closing tab, param: (index, key)
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
