import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import './index.less'

class Button extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.button = React.createRef()
  // }

  // componentDidMount () {
  //   this.props.autoFocus && this.focus()
  // }
  //
  // componentDidUpdate () {
  //   this.props.autoFocus && this.focus()
  // }

  // focus = () => {
  //   window.setTimeout(() => {
  //     this.button.current.focus()
  //   }, 0)
  // }

  render () {
    const {
      children,
      className,
      type,
      loading,
      size,
      block,
      ghost,
      icon,
      autoFocus,
      focus,
      disabled,
      ...other
    } = this.props
    const classNames = cx(
      `${prefixCls}-button`,
      {
        [`${prefixCls}-button_${type}`]: type,
        [`${prefixCls}-button--${size}`]: size,
        [`${prefixCls}-button--ghost`]: ghost,
        [`${prefixCls}-button--loading`]: loading,
        [`${prefixCls}-button_block`]: block,
        // [`${prefixCls}-button_nofocus`]: !focus && !autoFocus,
        [`${prefixCls}-button__icon-only`]: icon && !children
      },
      className
    )
    if (icon && children) {
      return (
        <button
          type="button"
          className={classNames}
          ref={this.button}
          disabled={disabled || loading}
          {...other}
        >
          <div>
            <Icon type={icon} />
            <span>{children}</span>
          </div>
        </button>
      )
    }
    return (
      <button
        type="button"
        className={classNames}
        ref={this.button}
        disabled={disabled || loading}
        {...other}
      >
        {icon && <Icon type={icon} />}
        {children && <span>{children}</span>}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  // 按钮类型
  type: PropTypes.oneOf(['primary', 'secondary', 'accept', 'warning', 'danger', 'link', 'text']),

  // 是否为微型按钮
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  // 是否为ghost按钮
  ghost: PropTypes.bool,

  // 是否为block按钮
  block: PropTypes.bool,

  // Initialize a spinner
  loading: PropTypes.bool,

  // Disabled button
  disabled: PropTypes.bool,

  // 按钮图标
  icon: PropTypes.string,

  // 按钮是否带 focus 的效果，默认 `false`
  focus: PropTypes.bool,

  // 按钮是否自动为 focus 状态，默认 `false`
  autoFocus: PropTypes.bool
}

Button.defaultProps = {
  type: 'secondary',
  // focus: true,
  autoFocus: false
}

export default Button
