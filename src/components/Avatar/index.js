import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

class Avatar extends Component {
  handleClick = e => {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render () {
    const { shape, size, src, className, ...others } = this.props
    return (
      <img
        src={src}
        onClick={this.handleClick}
        className={cx(
        `${prefixCls}-avatar`,
        {
          [`${prefixCls}-avatar__img_${shape}`]: shape,
          [`${prefixCls}-avatar__img_${size}`]: size
        },
        className
        )}
        {...others}
      />
    )
  }
}

Avatar.propTypes = {
  className: PropTypes.string,

  // The shape of avatar, default value is `circle`
  shape: PropTypes.oneOf(['square', 'circle']),

  // The size of avatar
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),

  // The url of image
  src: PropTypes.string,

  // The callback of clicking avatar
  onClick: PropTypes.func,

  others: PropTypes.any
}

Avatar.defaultProps = {
  shape: 'circle',
  src: ''
}

export default Avatar
