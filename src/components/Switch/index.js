import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

class Switch extends React.Component {
  constructor (props) {
    super()
    this.state = {
      on: props.on || props.defaultOn || false
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if ('on' in nextProps) {
      return { on: nextProps.on }
    }
    return prevState
  }

  handleChange = e => {
    e.stopPropagation()
    this.setState({ on: e.target.checked })
    this.props.onChange && this.props.onChange(e.target.checked)
  }

  render () {
    const {
      className,
      defaultOn,
      onChange,
      labelOn,
      labelOff,
      ...other
    } = this.props
    const { on } = this.state

    delete other.on

    return (
      <label className={cx(`${prefixCls}-switch`, className)} {...other}>
        <input type="checkbox" checked={on} onChange={this.handleChange} />
        <span className={`${prefixCls}-switch__text`}>
          {on ? labelOn : labelOff}
        </span>
      </label>
    )
  }
}

Switch.propTypes = {
  className: PropTypes.string,

  /** Whether to be on */
  on: PropTypes.bool,

  /** Whether to be on by default (uncontrolled) */
  defaultOn: PropTypes.bool,

  /** The callback after switching, param: (whether to be on) */
  onChange: PropTypes.func,

  /** The text of Switch which is on */
  labelOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** The text of Switch which is off */
  labelOff: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  customProp ({ on, onChange }) {
    if (on && !onChange) {
      return new Error('You provided a `on` prop without an `onChange` handler')
    }
  }
}

export default Switch
