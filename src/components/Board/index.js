import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import './index.less'

function renderButtons (buttons) {
  return (
    <div className={`${prefixCls}-board__header-buttons`}>
      {buttons.map(btn => {
        const { label, ...other } = btn
        return (
          <Button {...other} micro>{btn.label}</Button>
        )
      })}
    </div>
  )
}

const Board = props => {
  const { children, className, theme, title, buttons, tabs, ...other } = props
  return (
    <div className={cx(`${prefixCls}-board`, `${prefixCls}-board_${theme}`, className)} {...other}>
      {(title || buttons) && <div className={`${prefixCls}-board__header_${theme}`}>
        {title && <div className={`${prefixCls}-board__header-title`}>{title}</div>}
        {buttons && renderButtons(buttons)}
      </div>}
      <div className={`${prefixCls}-board__body`}>
        {children}
      </div>
    </div>
  )
}

Board.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // 面板样式风格，默认 classic
  theme: PropTypes.oneOf(['classic', 'simple']),
  // 面板名称
  title: PropTypes.string,
  // 面板右侧按钮
  buttons: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }),
  // 面板左侧标签
  tabs: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    onclick: PropTypes.func
  })
}

Board.defaultProps = {
  theme: 'classic'
}

export default Board
