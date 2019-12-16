import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Avatar from '../Avatar'
import './index.less'

class AvatarUpload extends Component {
  handleClick = e => {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render () {
    const { shape, size, src, className, text } = this.props
    return (
      <div className={`${prefixCls}-avatar-upload`}>
        {src
          ? (
            <div className={`${prefixCls}-avatar-upload__update`}>
              <Avatar src={src} shape={shape} size={size} onClick={this.handleClick} />
              <div
                onClick={this.handleClick}
                className={cx(
                `${prefixCls}-avatar-upload__cover`,
                {
                  [`${prefixCls}-avatar-upload__cover_${shape}`]: shape,
                  [`${prefixCls}-avatar-upload__cover_${size}`]: size
                },
                className
                )}
              >{text}
              </div>
            </div>
          )
          : (
            <div
              onClick={this.handleClick}
              className={cx(
              `${prefixCls}-avatar-upload__first`,
              {
                [`${prefixCls}-avatar-upload__shallow-cover_${shape}`]: shape,
                [`${prefixCls}-avatar-upload__shallow-cover_${size}`]: size
              },
              className
              )}
            >{text}
            </div>
          )}
      </div>
    )
  }
}

AvatarUpload.propTypes = {
  className: PropTypes.string,

  // The shape of avatar, default value is `circle`
  shape: PropTypes.oneOf(['square', 'circle']),

  // The size of avatar
  size: PropTypes.oneOf(['lg', 'xl']),

  // The url of image
  src: PropTypes.string,

  // The caption of avatar when hovering the avatar
  text: PropTypes.string,

  // The callback of clicking avatar
  onClick: PropTypes.func
}

AvatarUpload.defaultProps = {
  shape: 'circle',
  src: ''
}

export default AvatarUpload
