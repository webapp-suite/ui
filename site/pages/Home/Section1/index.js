import { Col, Row } from '@webapps-ui/core-react'
import QueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import React from 'react'
import Code from 'widgets/Code'
import Center from '../Center'
import './index.less'

const code = `
import { Button } from '@webapps-ui/core-react'

class App extends Component {

  handleClick = () => {
    console.log('hello, @webapps-ui/core-react')
  }

  render () {
    return <Button onClick={this.handleClick} />
  }
}`

export default function Section1 () {
  return (
    <div className="home__section1" id="home__section1">
      <Center>
        <Row gutter>
          <ScrollOverPack targetId="home" location="home__section1">
            <QueueAnim key="code" duration={600} type="left">
              <Col col="md-10" key="code">
                <Code className="home__section1-code">{code}</Code>
              </Col>
            </QueueAnim>
          </ScrollOverPack>
          <Col col="md-4" />
          <ScrollOverPack targetId="home" location="home__section1">
            <QueueAnim key="intro" duration={600} type="right">
              <Col col="md-10" className="home__section1-content" key="content">
                <h2>Less is more</h2>
                <p>
                  A minimalist style in both visual design and component usage.
                  It's more flexible by using declarative components including
                  programmatic and markup style in different cases.
                </p>
              </Col>
            </QueueAnim>
          </ScrollOverPack>
        </Row>
      </Center>
    </div>
  )
}
