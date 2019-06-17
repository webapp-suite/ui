import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

const Markdown = props => {
  const { className, html, ...other } = props
  return (
    <div
      className={cx('markdown', className)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...other}
    />
  )
}

Markdown.propTypes = {
  html: PropTypes.string,
  className: PropTypes.string
}

export default Markdown
