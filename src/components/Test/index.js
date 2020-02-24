import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.less'

class Test extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { className, isHidden, ...other } = this.props
    return (
      <div className={cx('test', className)} {...other}>
        something...
      </div>
    )
  }
}

Test.propTypes = {
  className: PropTypes.string.isRequired,

  /** Description of prop `test`. */
  test: PropTypes.string,

  // button type
  type: PropTypes.oneOf([
    'primary',
    'accept',
    'warning',
    'danger',
    'link',
    'text'
  ]),

  // button size, default `md`
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isHidden: PropTypes.bool,
  baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Test.defaultProps = {
  test: 'abcd',
  isHidden: false
}

export default Test
