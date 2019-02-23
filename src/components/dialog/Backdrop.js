import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Backdrop extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  }
  handleClick = () => {
    this.props.onClick && this.props.onClick()
  }
  render () {
    return createPortal(
      <div
        className={`${prefixCls}-dialog__backdrop ${prefixCls}-dialog__backdrop_open`}
        onClick={this.handleClick}
      />,
      document.body
    )
  }
}

export default Backdrop
