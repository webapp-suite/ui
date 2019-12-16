import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const rerangeChildren = children => {
  if (!Array.isArray(children)) {
    return children
  }
  const buttonList = []
  const tabList = []
  children.forEach(elem => {
    React.isValidElement(elem) &&
      (elem?.type?.name === 'Button' ? buttonList : tabList).push(elem)
  })
  return tabList.concat(buttonList.reverse())
}

const BoardHeader = props => {
  const { children, className, title, ...other } = props
  return (
    <div
      className={cx(
        `${prefixCls}-board__header`,
        `${prefixCls}-board__header`,
        className
      )}
      {...other}
    >
      {title && (
        <div className={`${prefixCls}-board__header-title`}>{title}</div>
      )}
      {rerangeChildren(children)}
    </div>
  )
}

BoardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,

  // The title of Board
  title: PropTypes.string
}

export default BoardHeader
