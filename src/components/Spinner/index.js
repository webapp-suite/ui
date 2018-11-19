import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import omit from '../../utils/omit'
import './index.less'
import IndicatorSVG from './IndicatorSVG'

// Render indicator
let defaultIndicator = null

function shouldDelay (isLoading, delay) {
  return !!isLoading && !!delay && !isNaN(Number(delay))
}

function renderIndicator (_props) {
  const { indicator, size } = _props
  const sizeMap = {
    'sm': 36,
    'default': 60,
    'lg': 96
  }
  const dotClassName = `${prefixCls}-spinner__spinner-element-indictor`
  if (React.isValidElement(indicator)) {
    return (
      <div className={dotClassName}>
        {indicator}
      </div>
    )
  }

  if (React.isValidElement(defaultIndicator)) {
    return React.cloneElement((defaultIndicator), {
      className: cx((defaultIndicator).props.className, dotClassName)
    })
  }

  return (
    <div className={cx(dotClassName, `${prefixCls}-spinner__spinner-element-indictor-svg`)}>
      <IndicatorSVG width={sizeMap[size]} height={sizeMap[size]} />
    </div>
  )
}

class Spinner extends React.Component {
  static setDefaultIndicator (indicator) {
    defaultIndicator = indicator
  }

  debounceTimeout;
  delayTimeout;

  constructor (props) {
    super(props)

    const { isLoading, delay } = props
    this.state = {
      isLoading: isLoading && !shouldDelay(isLoading, delay)
    }
  }

  isNestedPattern () {
    return !!(this.props && this.props.children)
  }

  componentDidMount () {
    const { isLoading, delay } = this.props
    if (shouldDelay(isLoading, delay)) {
      this.delayTimeout = setTimeout(this.delayUpdateSpinning, delay)
    }
  }

  componentWillUnmount () {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout)
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
    }
  }

  componentDidUpdate () {
    const currentSpinning = this.state.isLoading
    const isLoading = this.props.isLoading
    if (currentSpinning === isLoading) {
      return
    }
    const { delay } = this.props

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout)
    }
    if (currentSpinning && !isLoading) {
      this.debounceTimeout = window.setTimeout(() => this.setState({ isLoading }), 300)
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout)
      }
    } else {
      if (shouldDelay(isLoading, delay)) {
        if (this.delayTimeout) {
          clearTimeout(this.delayTimeout)
        }
        this.delayTimeout = window.setTimeout(this.delayUpdateSpinning, delay)
      } else {
        this.setState({ isLoading })
      }
    }
  }

  delayUpdateSpinning = () => {
    const { isLoading } = this.props
    if (this.state.isLoading !== isLoading) {
      this.setState({ isLoading })
    }
  };

  render () {
    const { className, size, cover, tip, wrapperClassName, ...other } = this.props
    const { isLoading } = this.state

    const spinClassName = cx(`${prefixCls}-spinner__spinner-element`, {
      [`${prefixCls}-spinner__spinner-element_sm`]: size === 'sm',
      [`${prefixCls}-spinner__spinner-element_lg`]: size === 'lg',
      [`${prefixCls}-spinner__spinner-element_white`]: cover === 'white',
      [`${prefixCls}-spinner__spinner-element_black`]: cover === 'black',
      [`${prefixCls}-spinner__spinner-element_spinning`]: isLoading,
      [`${prefixCls}-spinner__spinner-element_show-text`]: !!tip
    }, className)

    // fix https://fb.me/react-unknown-prop
    const divProps = omit(other, [
      'isLoading',
      'delay',
      'indicator'
    ])

    const spinElement = (
      <div className={spinClassName} >
        {this.isNestedPattern() && <div className={`${prefixCls}-spinner__spinner-element-cover`} />}
        {renderIndicator(this.props)}
        {tip ? <div className={`${prefixCls}-spinner__spinner-element-text`}>{tip}</div> : null}
      </div>
    )
    if (this.isNestedPattern()) {
      let animateClassName = prefixCls + '-spinner_nested-loading'
      if (wrapperClassName) {
        animateClassName += ' ' + wrapperClassName
      }
      const containerClassName = cx(`${prefixCls}-spinner__container`, {
        [`${prefixCls}-spinner__container_loading`]: isLoading
      })
      return (
        <div
          {...divProps}
          className={animateClassName}
          style={null}
        >
          {spinElement}
          <div className={containerClassName}>
            {this.props.children}
          </div>
        </div>
      )
    }
    return spinElement
  }
}

Spinner.propTypes = {
  // Spinner自身样式类属性
  className: PropTypes.string,

  // Spinner包裹的最外层样式类属性
  wrapperClassName: PropTypes.string,

  // 是否为加载中状态，默认值为 `true`
  isLoading: PropTypes.bool,

  // 作为包裹元素时，可自定义描述文案
  tip: PropTypes.string,

  // 组件大小，默认值为 `default`
  size: PropTypes.oneOf(['sm', 'default', 'lg']),

  // 遮罩的背景风格，默认值为 `white`
  cover: PropTypes.oneOf(['white', 'black']),

  // 加载指示器
  indicator: PropTypes.node
}

Spinner.defaultProps = {
  isLoading: true,
  size: 'default',
  cover: 'white',
  wrapperClassName: ''
}

export default Spinner
