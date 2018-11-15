import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './index.less'

const Spinner = props => {
  const { className, style, height, isLoading, children, ...other } = props

  if (typeof height !== 'undefined') {
    other.style = Object.assign(style || {}, {
      fontSize: height + 'px'
    })
  }

  return (
    <div className={cx(`${prefixCls}-spinner`, {[`${prefixCls}-spinner_loading`]: isLoading}, className)} {...other}>
      {isLoading && (
        <div className={`${prefixCls}-spinner__container`}>
          <div className={`${prefixCls}-spinner__container-spinner`} />
        </div>
      )}
      {children}
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,

  // 高度，默认 30px，宽度与高度相同
  height: PropTypes.number,
  tip: PropTypes.string,
  isLoading: PropTypes.bool,
  cover: PropTypes.oneOf(['white', 'black'])
}

Spinner.defaultProps = {
  cover: 'white'
}

export default Spinner
