import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

function fixControlledValue (value) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

function Input (props) {
  const input = React.createRef()
  const [value, setValueHook] = useState(
    typeof props.value === 'undefined' ? props.defaultValue : props.value
  )
  const setValue = (value, e, callback) => {
    if (!('value' in props)) {
      setValueHook(value)
      typeof callback === 'function' && callback()
    }
    const { onChange } = props
    if (onChange) {
      let event = e
      if (e.type === 'click') {
        // click clear icon
        event = Object.create(e)
        event.target = input.current
        event.currentTarget = input.current
        const originalInputValue = input.current.value
        // change input value cause e.target.value should be '' when clear input
        input.current.value = ''
        onChange(event)
        // reset input value
        input.current.value = originalInputValue
        return
      }
      onChange(event)
    }
  }
  const handleChange = e => {
    setValue(e.target.value, e)
  }
  const handleClear = e => {
    setValue('', e, () => {
      input.current.focus()
    })
  }

  const {
    className,
    size,
    onChange,
    width,
    prefix,
    suffix,
    readonly,
    clearable,
    defaultValue,
    ...other
  } = props

  const classNames = cx(
    `${prefixCls}-input`,
    {
      [`${prefixCls}-input--${size}`]: size,
      [`${prefixCls}-input--prefix`]: prefix,
      [`${prefixCls}-input--suffix`]: suffix || readonly || clearable
    },
    className
  )
  if (width) {
    other.style = Object.assign(other.style || {}, { width })
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
          className={classNames}
          value={fixControlledValue(value)}
          onChange={handleChange}
          ref={input}
          {...other}
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
          className={classNames}
          readOnly={readonly}
          {...other}
          value={fixControlledValue(value)}
          onChange={handleChange}
          ref={input}
        />
        <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
          <Icon type="locked" />
        </span>
      </div>
    )
  }
  if (clearable) {
    return (
      <div className={`${prefixCls}-input__affix-wrapper`} style={{ width }}>
        <input
          className={classNames}
          value={fixControlledValue(value)}
          onChange={handleChange}
          ref={input}
          {...other}
        />
        {value && !other.disabled && (
          <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
            <Icon type="remove" onClick={handleClear} />
          </span>
        )}
      </div>
    )
  }
  return (
    <input
      className={classNames}
      value={fixControlledValue(value)}
      onChange={handleChange}
      ref={input}
      {...other}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,

  // binding value
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // default input value
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

  // make the input clearable
  clearable: PropTypes.bool,

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
