import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

class InputLine extends Component {
  static propTypes = {
    styleType: PropTypes.string,
    type: PropTypes.string,
    validationState: PropTypes.bool,
    help: PropTypes.string
  }

  static defaultProps = {
    styleType: 'default',
    type: 'text'
  }

  render () {
    let {styleType, type, validationState, help, ...others} = this.props
    return (
      <div>
        <input className="earthui-input-line" type={type} name={name} {...others} />
        {!validationState && <div className="earthui-input-line__help">{help}</div>}
      </div>
    )
  }
}

export default InputLine
