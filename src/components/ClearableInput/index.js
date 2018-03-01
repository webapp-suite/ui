import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import controlledPropValidator from '../../utils/propValidator/controlled'
import Input from '../Input'
import Button from '../Button'
import './index.less'

class ClearableInput extends Component {
  constructor (props) {
    super()
    let value
    let originValue
    let hasChanged = false
    'value' in props && (originValue = value = props.value)
    'defaultValue' in props && (value = props.defaultValue)
    this.state = { value, originValue, hasChanged }
  }

  componentWillReceiveProps (nextProps) {
    'value' in nextProps && this.setState({value: nextProps.value})
  }

  handleClear (e) {
    e.stopPropagation()
    this.props.onClear && this.props.onClear()
    this.handleChange('')
  }

  handleInput (e) {
    e.stopPropagation()
    this.handleChange(e.target.value)
  }

  handleChange (value) {
    let hasChanged = value !== this.state.originValue
    this.setState({ value, hasChanged })
    this.props.onChange && this.props.onChange(value)
  }

  /**
   * @public
   * @name this.refs.clearableInput.focus
   * @description 同 HTMLInputElement.focus()
   */
  focus () {
    this.refs.input.focus()
  }

  /**
   * @public
   * @name this.refs.clearableInput.select
   * @description 同 HTMLInputElement.select()
   */
  select () {
    this.refs.input.select()
  }

  render () {
    const {
      className, type, defaultValue, onChange, onClear, disabled, size, placeholder, readOnly,
      maxLength, forbidClearable, width, ...other
    } = this.props
    const { value, hasChanged } = this.state
    delete other.value

    const inputProps = { value, disabled, size, placeholder, readOnly, type, maxLength, width }

    return (
      <div className={classnames('cmui-clearable-input', className)} {...other}>
        {/* {autocomplete === 'off' && <input type="text" className="autocomplete-off" />} */}
        {/* {autocomplete === 'off' && <input type="password" className="autocomplete-off" />} */}
        <Input
          ref="input"
          onChange={::this.handleInput}
          {...inputProps}
        />
        {(!forbidClearable && hasChanged && (value || value === 0 || Number.isNaN(value))) && (
          <Button
            tabIndex="-1"
            icon="remove"
            size="sm"
            transparent
            className="cmui-clearable-input__clear"
            disabled={inputProps.disabled}
            onClick={::this.handleClear}
          />
        )}
      </div>
    )
  }
}

ClearableInput.propTypes = {

  className: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,

  forbidClearable: PropTypes.bool,
  // autocomplete: PropTypes.string,

  // 输入框的值
  value: controlledPropValidator(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  // 初始化输入框的值
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 输入改变、清空后的回调，参数为当前输入框的值
  onChange: PropTypes.func,

  // 清空后的回调
  onClear: PropTypes.func,

  // 输入框尺寸
  size: PropTypes.oneOf(['sm', 'lg']),

  // 是否禁用
  disabled: PropTypes.bool,

  // 同 input placeholder
  placeholder: PropTypes.string,

  width: PropTypes.string
}

export default ClearableInput
