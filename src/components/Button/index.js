import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../_utils/omit'
import Icon from '../Icon'
import './index.less'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.button = React.createRef()
  }

  componentDidMount () {
    this.props.autoFocus && this.focus()
  }

  componentDidUpdate () {
    this.props.autoFocus && this.focus()
  }

  focus = () => {
    window.setTimeout(() => {
      this.button.current.focus()
    }, 0)
  }

  handleClick = e => {
    this.props.loading ? e.preventDefault() : this.props.onClick(e)
  }

  render () {
    const {
      children,
      className,
      type,
      loading,
      micro,
      block,
      icon,
      autoFocus,
      focus,
      ...other
    } = this.props
    const otherProps = omit(other, ['onClick'])
    const classNames = cx(
      `${prefixCls}-button`,
      {
        [`${prefixCls}-button_${type}`]: type,
        [`${prefixCls}-button--loading`]: loading,
        [`${prefixCls}-button_micro`]: micro,
        [`${prefixCls}-button_block`]: block,
        [`${prefixCls}-button_nofocus`]: !focus && !autoFocus,
        [`${prefixCls}-button__icon-only`]: icon && !children
      },
      className
    )
    return (
      <button
        type="button"
        className={classNames}
        ref={this.button}
        onClick={this.handleClick}
        {...otherProps}
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
  onClick: PropTypes.func,

  // 按钮类型
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'accept',
    'warning',
    'danger'
  ]),

  // 是否为微型按钮
  micro: PropTypes.bool,

  // 是否为block按钮
  block: PropTypes.bool,

  // initialize a spinner
  loading: PropTypes.bool,

  // 按钮图标
  icon: PropTypes.string,

  // 按钮是否带 focus 的效果，默认 `false`
  focus: PropTypes.bool,

  // 按钮是否自动为 focus 状态，默认 `false`
  autoFocus: PropTypes.bool
}

Button.defaultProps = {
  focus: false,
  autoFocus: false
}

export default Button
