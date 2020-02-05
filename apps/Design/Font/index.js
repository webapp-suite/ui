import React from 'react'
import { Col, Row, BackToTop } from 'earth-ui'
import Markdown from 'widgets/Markdown'
import { backToTop } from '../../config'
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
        <BackToTop {...backToTop} />
      </div>
    )
  }
}
