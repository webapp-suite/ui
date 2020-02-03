import React from 'react'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import './index.less'

const Scrollbar = props => {
  const { children, className, ...other } = props
  return (
    <div className={cx(`${prefixCls}-scrollbar`, className)}>
      <Scrollbars
        {...other}
        autoHideTimeout={500}
        autoHideDuration={200}
        autoHide
        renderThumbVertical={({ style }) => {
          const thumbStyle = {
            backgroundColor: 'rgba(90, 90, 90, .8)',
            borderRadius: 'inherit'
          }
          return (
            <div
              style={{ ...style, ...thumbStyle }}
              className="thumb-vertical"
            />
          )
        }}
      >
        {children}
      </Scrollbars>
    </div>
  )
}

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Scrollbar
