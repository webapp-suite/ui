import BackToTop from 'earth-ui/lib/BackToTop'
import {Col, Row} from 'earth-ui/lib/Layout'
import React from 'react'
import Markdown from 'widgets/Markdown'
import config from '../../config'
import md from './font.md'

export default class extends React.Component {
  render () {
    return (
      <div className="font">
        <Row>
          <Col col="md-16" className="demo__left">
            <Markdown html={md} />
          </Col>
        </Row>
        <BackToTop {...config.backToTop} />
      </div>
    )
  }
}
