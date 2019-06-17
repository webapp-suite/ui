import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PrismCode from './PrismCode'
import './index.less'

const Code = props => {
  const { className, lang = 'jsx', children } = props
  return (
    <pre className={cx('prism', className)}>
      <PrismCode className={`language-${lang}`}>
        {children}
      </PrismCode>
    </pre>

  )
}

Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lang: PropTypes.string
}

export default Code
