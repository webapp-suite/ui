import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Row, Col } from 'earth-ui/lib/Layout'
import Board from 'earth-ui/lib/Board'
import Code from 'widgets/Code'
import './index.less'

class Demo extends Component {
  constructor (props) {
    super()
    this.state = {
      open: false
    }
  }

  // componentDidMount() {
  //   this.codeHeight = ReactDOM.findDOMNode(this.refs.pre).offsetHeight
  // }

  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  render () {
    const { className, title, desc, code, renderPosition, children } = this.props
    const { open } = this.state
    const renderInLeft = () => {
      const buttons = [{
        label: 'show code',
        type: 'tertiary',
        onClick: () => {
          this.handleToggle()
        }
      }]
      return (
        <Row className={cx('demo', {'demo__open': open}, className)}>
          <Col col="md-13" className="demo__left">
            <Board title={title} buttons={buttons} theme="simple">
              <div className="demo__content">{children}</div>
              {desc && <div className="demo__desc">{desc}</div>}
              <div className="demo__code demo__code_last" ref="pre">
                <Code lang="jsx">{code}</Code>
              </div>
            </Board>
          </Col>
        </Row>
      )
    }
    const renderInRight = () => {
      const buttons = [{
        label: 'hide code',
        type: 'tertiary',
        onClick: () => {
          this.handleToggle()
        }
      }]
      return (
        <Row className={cx('demo', {'demo__open': !open}, className)}>
          <Col col="md-13" className="demo__left">
            <Board title={title} buttons={buttons} theme="simple">
              <div className="demo__code" ref="pre">
                <Code lang="jsx">{code}</Code>
              </div>
            </Board>
          </Col>
          <Col col="md-11">
            <div className="demo__content_right">{children}</div>
            {desc && <div className="demo__desc">{desc}</div>}
          </Col>
        </Row>
      )
    }

    const render = {
      'left': renderInLeft(),
      'right': renderInRight()
    }
    return render[renderPosition]
  }
}

Demo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  code: PropTypes.string,
  renderPosition: PropTypes.oneOf('left', 'right')
}

export default Demo
