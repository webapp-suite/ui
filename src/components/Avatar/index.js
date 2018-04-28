import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

class Avatar extends Component {
  _handleClick (e) {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render () {
    let {shape, size, src, className, ...others} = this.props
    return <img src={src}
      onClick={::this._handleClick}
      className={cx(
        'cmui-avatar',
        {[`cmui-avatar__${shape}`]: shape, [`cmui-avatar__${size}`]: size},
        className
      )}
      {...others}
    />
  }
}

Avatar.propTypes = {
  className: PropTypes.string,

  // 头像的形状，默认`circle`，可选`square`
  shape: PropTypes.oneOf(['square', 'circle']),

  // 输入框大小，除默认外可选值：`sm`、`lg`、`xlg`
  size: PropTypes.oneOf(['sm', 'lg', 'xlg']),

  // 头像图片的地址
  src: PropTypes.string,

  // 点击头像事件
  onClick: PropTypes.func,

  others: PropTypes.any
}

Avatar.defaultProps = {
  shape: 'circle',
  src: ''
}

export default Avatar
