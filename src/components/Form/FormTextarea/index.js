import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.less'

const FormTextarea = (props, context) => {
  const { children, className, onChange, minWidth, minHeight, ...other } = props
  const { form, formItem } = context
  let value = form.getItemValue(formItem)
  if (!value && value !== 0) {
    value = ''
  }
  other.value = value
  other.onChange = e => {
    form.setItemValue(formItem, e.target.value)
    onChange && onChange(e)
  }
  if (minWidth) {
    other.style = Object.assign(other.style || {}, { minWidth })
  }
  if (minHeight) {
    other.style = Object.assign(other.style || {}, { minHeight })
  }
  return <textarea className={classnames('cmui-form-textarea', className)} {...other} />
}

FormTextarea.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number
}

FormTextarea.contextTypes = {
  form: PropTypes.object.isRequired,
  formItem: PropTypes.object.isRequired
}

export default FormTextarea
