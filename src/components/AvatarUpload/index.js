import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Avatar from '../Avatar'
import './index.less'

class AvatarUpload extends Component {
  _handleClick (e) {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render () {
    let {shape, size, src, className, text} = this.props
    return (
      <div className="cmui-avatarupload">
        {src
          ? <div className="cmui-avatarupload__update">
            <Avatar src={src} shape={shape} size={size} onClick={::this._handleClick} />
            <div onClick={::this._handleClick}
              className={cx(
                'cmui-avatarupload__cover',
                {[`cmui-avatarupload__cover__${shape}`]: shape,
                  [`cmui-avatarupload__cover__${size}`]: size},
                className
              )}>{text}</div>
          </div>
          : <div onClick={::this._handleClick}
            className={cx(
              'cmui-avatarupload__first',
              {[`cmui-avatarupload__${shape}`]: shape,
                [`cmui-avatarupload__${size}`]: size},
              className
            )}>{text}</div>
        }
      </div>
    )
  }
}

AvatarUpload.propTypes = {
  className: PropTypes.string,

  // 头像的形状，默认`circle`，可选`square`
  shape: PropTypes.oneOf(['square', 'circle']),

  // 输入框大小，除默认外可选值：`lg`、`xlg`
  size: PropTypes.oneOf(['lg', 'xlg']),

  // 头像图片的地址
  src: PropTypes.string,

  // 头像中间说明文字/hover状态下的说明文字
  text: PropTypes.string,

  // 点击头像事件
  onClick: PropTypes.func
}

AvatarUpload.defaultProps = {
  shape: 'circle',
  src: ''
}

export default AvatarUpload
