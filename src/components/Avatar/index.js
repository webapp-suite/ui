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
    return <img src={`/img/${src}`}
      onClick={::this._handleClick}
      className={cx(`cmui-avatar__${shape}__${size}`, className)}
      {...others}
    />
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  others: PropTypes.any
}

Avatar.defaultProps = {
  shape: 'circle',
  size: 'default',
  src: ''
}

export default Avatar
