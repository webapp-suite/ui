import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

class Input extends Component {
  /**
   * @public
   * @name this.refs.input.focus
   * @description Same as `HTMLInputElement.focus()`
   */
  focus () {
    this.refs.input.focus()
  }

  /**
   * @public
   * @name this.refs.input.select
   * @description Same as `HTMLInputElement.select()`
   */
  select () {
    this.refs.input.select()
  }

  render () {
    const {
      className,
      size,
      width,
      prefix,
      suffix,
      readonly,
      ...other
    } = this.props
    const classNames = cx(
      `${prefixCls}-input`,
      {
        [`${prefixCls}-input--${size}`]: size,
        [`${prefixCls}-input--prefix`]: prefix,
        [`${prefixCls}-input--suffix`]: suffix || readonly
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
          <input ref="input" className={classNames} {...other} />
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
            ref="input"
            className={classNames}
            readOnly={readonly}
            {...other}
          />
          <span className={`${prefixCls}-input__affix-wrapper--suffix`}>
            <Icon type="locked" />
          </span>
        </div>
      )
    }
    return <input ref="input" className={classNames} {...other} />
  }
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

  // whether Input is disabled
  readonly: PropTypes.bool,

  // same as native input placeholder
  placeholder: PropTypes.string,

  prefix: PropTypes.element,

  suffix: PropTypes.element,

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
