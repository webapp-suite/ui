import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Row, Col } from 'earth-ui/lib/Layout'
import { Tabs, Tab, TabList, TabPanel } from 'earth-ui/lib/Tabs'
import { Board, BoardHeader, BoardBody } from 'earth-ui/lib/Board'
import Code from 'widgets/Code'
import Markdown from 'widgets/Markdown'
import './index.less'

class Demo extends React.Component {
  constructor (props) {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  render () {
    const { className, title, desc, note, code, renderModel, children } = this.props
    const { open } = this.state
    const renderInLeft = () => {
      return (
        <Row className={cx('demo', {'demo__open': open}, className)}>
          <Col col="md-16" className="demo__left">
            <Markdown html={`<h2>${title}</h2>`} />
            {desc && <Markdown html={desc} />}
            <Board theme="simple">
              <Tabs>
                <BoardHeader>
                  <TabList>
                    <Tab>渲染</Tab>
                    <Tab>代码</Tab>
                  </TabList>
                </BoardHeader>
                <BoardBody>
                  <TabPanel tab="One" className="demo__content">{children}</TabPanel>
                  <TabPanel tab="Two" className="demo__code"><Code lang="jsx">{code}</Code></TabPanel>
                </BoardBody>
              </Tabs>
            </Board>
            {note && <Markdown html={note} />}
          </Col>
        </Row>
      )
    }
    const renderInRight = () => {
      return (
        <Row className={cx('demo', {'demo__open': !open}, className)}>
          <Col col="md-16" className="demo__left">
            <Markdown html={`<h2>${title}</h2>`} />
            {desc && <Markdown html={desc} />}
            {children}
            <Board theme="simple">
              <BoardBody>
                <div className="demo__code"><Code lang="jsx">{code}</Code></div>
              </BoardBody>
            </Board>
            {note && <Markdown html={note} />}
          </Col>
        </Row>
      )
    }
    const renderInFull = () => {
      return (
        <Row className={cx('demo', {'demo__open': !open}, className)}>
          <Col col="md-24">
            <div className="demo__content">{children}</div>
            {desc && <div className="demo__desc">{desc}</div>}
          </Col>
        </Row>
      )
    }

    const render = {
      'left': renderInLeft(),
      'right': renderInRight(),
      'full': renderInFull()
    }
    return render[renderModel]
  }
}

Demo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  note: PropTypes.string,
  code: PropTypes.string,
  renderModel: PropTypes.oneOf('left', 'right', 'full')
}

export default Demo
