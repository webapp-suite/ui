import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import omit from '../_utils/omit'
import './index.less'

function fixControlledValue (value) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
    this.state = {
      value: props.value || ''
    }
  }

  static getDerivedStateFromProps (nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  setValue = (value, e, callback) => {
    if (!('value' in this.props)) {
      this.setState({ value }, callback)
    }
    this.props.onChange && this.props.onChange(e)
  }

  handleChange = e => {
    this.setValue(e.target.value, e)
  }

  handleClear = e => {
    if (this.props.onClear) {
      this.props.onClear(e)
      this.focus()
    }
  }

  focus () {
    this.input.current.focus()
  }

  blur () {
    this.input.current.blur()
  }

  select () {
    this.input.current.select()
  }

  render () {
    const {
      className,
      size,
      onChange,
      width,
      prefix,
      suffix,
      readonly,
      onClear,
      ...other
    } = this.props

    const otherProps = omit(other, ['defaultValue'])

    const { value } = this.state

    const classNames = cx(
      `${prefixCls}-input`,
      {
        [`${prefixCls}-input--${size}`]: size,
        [`${prefixCls}-input--prefix`]: prefix,
        [`${prefixCls}-input--suffix`]: suffix || readonly || onClear
      },
      className
    )
    if (width) {
      otherProps.style = Object.assign(otherProps.style || {}, { width })
    }
    if (prefix || suffix) {
      return (
        <div className={`${prefixCls}-input__affix-wrapper`} style={{ width }}>
          {prefix && (
            <span className={`${prefixCls}-input__affix-wrapper--prefix`}>
              {prefix}
            </span>
          )}
          <input
            {...otherProps}
            className={classNames}
            value={fixControlledValue(value)}
            onChange={this.handleChange}
            ref={this.input}
          />
          {suffix && (
            <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
              {suffix}
            </span>
          )}
        </div>
      )
    }
    if (readonly) {
      return (
        <div className={`${prefixCls}-input__affix-wrapper`} style={{ width }}>
          <input
            {...otherProps}
            className={classNames}
            readOnly={readonly}
            value={fixControlledValue(value)}
            onChange={this.handleChange}
            ref={this.input}
          />
          <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
            <Icon type="locked" />
          </span>
        </div>
      )
    }
    if (onClear) {
      return (
        <div className={`${prefixCls}-input__affix-wrapper`} style={{ width }}>
          <input
            {...otherProps}
            className={classNames}
            value={fixControlledValue(value)}
            onChange={this.handleChange}
            ref={this.input}
          />
          {value && !otherProps.disabled && (
            <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
              <Icon type="remove" onClick={this.handleClear} />
            </span>
          )}
        </div>
      )
    }
    return (
      <input
        {...otherProps}
        className={classNames}
        value={fixControlledValue(value)}
        onChange={this.handleChange}
        ref={this.input}
      />
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,

  // binding value
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // riggers when the icon inside Input value change
  onChange: PropTypes.func,

  // type of input, support [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types), default `text`
  type: PropTypes.string,

  // size of Input, default `md`
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  // the length of input, unit as px, default `100%`
  width: PropTypes.number,

  // whether Input is disabled
  disabled: PropTypes.bool,

  // whether Input is readonly
  readonly: PropTypes.bool,

  // same as native input placeholder
  placeholder: PropTypes.string,

  // the prefix icon for the Input
  prefix: PropTypes.element,

  // the suffix icon for the Input
  suffix: PropTypes.element,

  // triggers when the Input is cleared by clicking the clear button
  onClear: PropTypes.func,

  customProp ({ value, onChange }) {
    if (value && !onChange) {
      return new Error(
        'You provided a `value` prop without an `onChange` handler'
      )
    }
  }
}

Input.defaultProps = {
  width: '100%',
  size: 'md',
  type: 'text'
}

export default Input
