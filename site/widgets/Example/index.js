import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Board,
  BoardBody,
  BoardHeader,
  Button,
  Col,
  Row,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from '@webapps-ui/core-react'
import Code from 'widgets/Code'
import { EXAMPLE_MODE } from '../../constant'
import './index.less'

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
    const { className, code, renderModel, children, onRunClick } = this.props
    const { open } = this.state
    const renderInTabs = () => {
      return (
        <Row className={cx('example', { example__open: open }, className)}>
          <Col col="md-32" className="example__col">
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
    const renderInVertical = () => {
      return (
        <Row
          className={cx(
            'example',
            'example__no-tabs-board',
            { example__open: !open },
            className
          )}
        >
          <Col col="md-32" className="example__col">
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
    const renderInRenderOnly = () => {
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
          <Col col="md-32" className="example__col">
            <Board theme="simple">
              <BoardHeader>
                <Button onClick={() => onRunClick()} size="sm">
                  RUN THIS CODE
                </Button>
              </BoardHeader>
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
    const render = {
      [EXAMPLE_MODE.TABS]: renderInTabs,
      [EXAMPLE_MODE.VERTICAL]: renderInVertical,
      [EXAMPLE_MODE.RENDER_ONLY]: renderInRenderOnly,
      [EXAMPLE_MODE.RUN]: renderInRun
    }
    return render[renderModel]()
  }
}

Example.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  code: PropTypes.string,
  onRunClick: PropTypes.func,
  renderModel: PropTypes.oneOf(['tabs', 'vertical', 'renderOnly', 'run'])
}

export default Example
