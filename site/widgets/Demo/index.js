import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Board,
  BoardBody,
  BoardHeader,
  Col,
  Row,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from 'earth-ui'
import Markdown from 'widgets/Markdown'
import Code from 'widgets/Code'
import * as type from '../../../src/components/_utils/type'
import './index.less'

function trimCode (code) {
  if (!type.isString(code)) {
    return
  }
  const snippet = code.split(';')[1]
  const snippetArray = snippet.split('\n')
  const lastSnippetItem = snippetArray[snippetArray.length - 1]
  const indent = lastSnippetItem.length - lastSnippetItem.trim().length
  return snippetArray.map((v, i) => (i === 0 ? v : v.slice(indent))).join('\n')
}

class Demo extends React.Component {
  constructor (props) {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const {
      className,
      title,
      desc,
      note,
      code,
      renderModel,
      children
    } = this.props
    const { open } = this.state
    const renderInLeft = () => {
      return (
        <Row className={cx('demo', { demo__open: open }, className)}>
          <Col col="md-16" className="demo__left">
            {title !== 'null' && <Markdown html={`<h2>${title}</h2>`} />}
            {desc && <Markdown html={desc} />}
            <Board theme="simple">
              <Tabs>
                <BoardHeader>
                  <TabList>
                    <Tab>Render</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                </BoardHeader>
                <BoardBody>
                  <TabPanel tab="One" className="demo__content">
                    {children}
                  </TabPanel>
                  <TabPanel tab="Two" className="demo__code">
                    <Code lang="jsx">{code}</Code>
                  </TabPanel>
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
        <Row
          className={cx(
            'demo',
            'demo__no-tabs-board',
            { demo__open: !open },
            className
          )}
        >
          <Col col="md-16" className="demo__left">
            <Markdown html={`<h2>${title}</h2>`} />
            {desc && <Markdown html={desc} />}
            <div className="demo__no-tabs-board-render">{children}</div>
            <Board theme="simple">
              <BoardBody>
                <div className="demo__code">
                  <Code lang="jsx">{code}</Code>
                </div>
              </BoardBody>
            </Board>
            {note && <Markdown html={note} />}
          </Col>
        </Row>
      )
    }
    const renderInFull = () => {
      return (
        <Row className={cx('demo', { demo__open: !open }, className)}>
          <Col col="md-24">
            <div className="demo__content">{children}</div>
            {desc && <div className="demo__desc">{desc}</div>}
          </Col>
        </Row>
      )
    }
    const renderInRun = () => {
      return (
        <Row
          className={cx(
            'demo',
            { demo__open: !open },
            { 'demo__no-title': title === 'null' },
            className
          )}
        >
          <Col col="md-16" className="demo__left">
            {title !== 'null' && <Markdown html={`<h2>${title}</h2>`} />}
            {desc && <Markdown html={desc} />}
            <Board theme="simple">
              <BoardHeader>{children}</BoardHeader>
              <BoardBody>
                <div className="demo__code">
                  <Code lang="jsx">{trimCode(code)}</Code>
                </div>
              </BoardBody>
            </Board>
            {note && <Markdown html={note} />}
          </Col>
        </Row>
      )
    }
    const render = {
      left: renderInLeft,
      right: renderInRight,
      full: renderInFull,
      run: renderInRun
    }
    return render[renderModel]()
  }
}

Demo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  note: PropTypes.string,
  code: PropTypes.string,
  renderModel: PropTypes.oneOf(['left', 'right', 'full', 'run'])
}

export default Demo
