import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import classlist from 'classlist'
import CoordinateFactory from './CoordinateFactory'

class PopoverContent extends Component {
  getChildContext () {
    return {
      popoverContent: this
    }
  }

  componentDidMount () {
    this.setPosition()
  }

  componentDidUpdate () {
    this.setPosition()
  }

  setPosition () {
    const { triggerNode, direction, align } = this.props
    const rootNode = ReactDOM.findDOMNode(this)
    rootNode.style.display = 'block'

    // Prevent accumulation
    if (this.positionClassNames) {
      classlist(rootNode).remove(...this.positionClassNames.split(' '))
    }
    const [computedDirection, computedAlign] = CoordinateFactory(
      triggerNode, rootNode, direction, align
    )
    this.positionClassNames = cx({
      [`cmui-popover--${computedDirection}`]: true,
      [`cmui-popover--align-${computedAlign}`]: !!computedAlign
    })
    classlist(rootNode).add(this.positionClassNames)
  }

  render () {
    const {
      children, className, triggerNode, triggerMode, direction, align, ...other
    } = this.props
    return (
      <div className={cx('cmui-popover', {
        'cmui-popover--animation': triggerMode === 'hover'
      }, className)} {...other}>
        <div className="cmui-popover__content">
          {children}
        </div>
      </div>
    )
  }
}

PopoverContent.propTypes = {
  children: PropTypes.element,
  triggerNode: PropTypes.node,
  className: PropTypes.string,
  triggerMode: PropTypes.oneOf(['click', 'hover']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  align: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'middle'])
}

PopoverContent.childContextTypes = {
  popoverContent: PropTypes.instanceOf(PopoverContent)
}

export default PopoverContent
