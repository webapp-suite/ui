import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import omit from '../_utils/omit'
import './index.less'

function fixControlledValue (value) {
  return value || ''
}

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
    this.state = {
      focus: false,
      mouseEnter: false
    }
  }

  handleChange = e => {
    this.props.onChange && this.props.onChange(e)
  }

  handleClear = e => {
    if (this.props.onClear) {
      this.props.onClear(e)
      this.focus()
    }
  }

  handleFocus = v => {
    this.setState({ focus: v })
  }

  handleMouseEnter = v => {
    this.setState({ mouseEnter: v })
  }

  /**
   * @public
   * @name ref.current.focus
   * @description Same as HTMLInputElement.focus()
   */
  focus () {
    this.input.current.focus()
  }

  /**
   * @public
   * @name ref.current.blur
   * @description Same as HTMLInputElement.blur()
   */
  blur () {
    this.input.current.blur()
  }

  /**
   * @public
   * @name ref.current.select
   * @description Same as HTMLInputElement.select()
   */
  select () {
    this.input.current.select()
  }

  render () {
    const {
      value,
      className,
      size,
      width,
      prefix,
      suffix,
      readonly,
      onClear,
      ...other
    } = this.props

    const otherProps = omit(other, ['defaultValue', 'onChange'])

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
      const { focus, mouseEnter } = this.state
      return (
        <div
          className={`${prefixCls}-input__affix-wrapper`}
          style={{ width }}
          onMouseEnter={() => this.handleMouseEnter(true)}
          onMouseLeave={() => this.handleMouseEnter(false)}
        >
          <input
            {...otherProps}
            className={classNames}
            value={fixControlledValue(value)}
            onChange={this.handleChange}
            onBlur={() => this.handleFocus(false)}
            onFocus={() => this.handleFocus(true)}
            ref={this.input}
          />
          {value && (focus || mouseEnter) && !otherProps.disabled && (
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

  /** binding value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** riggers when the icon inside Input value change */
  onChange: PropTypes.func,

  /** type of input, support [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) */
  type: PropTypes.string,

  /** size of Input */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** the length of input, unit as px */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** whether Input is disabled */
  disabled: PropTypes.bool,

  /** whether Input is readonly */
  readonly: PropTypes.bool,

  /** same as native input placeholder */
  placeholder: PropTypes.string,

  /** the prefix icon for the Input */
  prefix: PropTypes.element,

  /** the suffix icon for the Input */
  suffix: PropTypes.element,

  /** triggers when the Input is cleared by clicking the clear button */
  onClear: PropTypes.func
}

Input.defaultProps = {
  width: '100%',
  size: 'md',
  type: 'text'
}

export default Input
