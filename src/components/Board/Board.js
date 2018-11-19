import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Board = props => {
  const { children, className, theme, ...other } = props
  return (
    <div className={cx(`${prefixCls}-board`, `${prefixCls}-board_${theme}`, className)} {...other}>
      {children}
    </div>
  )
}

Board.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,

  // 面板样式风格，默认 `classic`
  theme: PropTypes.oneOf(['classic', 'simple'])
}

Board.defaultProps = {
  theme: 'classic'
}

export default Board
