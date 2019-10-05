import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

function Input (props) {
  const [value, setValue] = useState('')
  const handleClick = () => {
    setValue('')
  }

  const valueChange = e => {
    setValue(e.target.value)
  }
  const {
    className,
    size,
    width,
    prefix,
    suffix,
    readonly,
    clearable,
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
        <input className={classNames} {...other} />
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
        <input className={classNames} readOnly={readonly} {...other} />
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
          value={value}
          onChange={valueChange}
          {...other}
        />
        {value && (
          <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
            <Icon type="remove" onClick={() => handleClick('')} />
          </span>
        )}
      </div>
    )
  }
  return <input className={classNames} {...other} />
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
