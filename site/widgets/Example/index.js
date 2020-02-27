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

class Example extends React.Component {
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
    const { className, code, renderModel, children } = this.props
    const { open } = this.state
    const renderInLeft = () => {
      return (
        <Row className={cx('example', { example__open: open }, className)}>
          <Col col="md-32" className="example__left">
            <Board theme="simple">
              <Tabs>
                <BoardHeader>
                  <TabList>
                    <Tab>Render</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                </BoardHeader>
                <BoardBody>
                  <TabPanel tab="One" className="example__content">
                    {children}
                  </TabPanel>
                  <TabPanel tab="Two" className="example__code">
                    <Code lang="jsx">{code}</Code>
                  </TabPanel>
                </BoardBody>
              </Tabs>
            </Board>
          </Col>
        </Row>
      )
    }
    const renderInRight = () => {
      return (
        <Row
          className={cx(
            'example',
            'example__no-tabs-board',
            { example__open: !open },
            className
          )}
        >
          <Col col="md-32" className="example__left">
            <div className="example__no-tabs-board-render">{children}</div>
            <Board theme="simple">
              <BoardBody>
                <div className="example__code">
                  <Code lang="jsx">{code}</Code>
                </div>
              </BoardBody>
            </Board>
          </Col>
        </Row>
      )
    }
    const renderInFull = () => {
      return (
        <Row className={cx('example', { example__open: !open }, className)}>
          <Col col="md-32">
            <div className="example__content">{children}</div>
          </Col>
        </Row>
      )
    }
    const renderInRun = () => {
      return (
        <Row className={cx('example', { example__open: !open }, className)}>
          <Col col="md-32" className="example__left">
            <Board theme="simple">
              <BoardHeader>{children}</BoardHeader>
              <BoardBody>
                <div className="example__code">
                  <Code lang="jsx">{trimCode(code)}</Code>
                </div>
              </BoardBody>
            </Board>
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

Example.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  code: PropTypes.string,
  renderModel: PropTypes.oneOf(['left', 'right', 'full', 'run'])
}

export default Example
