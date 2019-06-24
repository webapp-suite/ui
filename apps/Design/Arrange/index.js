import React from 'react'
import BackToTop from 'earth-ui/lib/BackToTop'
import { Col, Row } from 'earth-ui/lib/Layout'
import Markdown from 'widgets/Markdown'
import { backToTop } from '../../config'
import md from './arrange.md'

export default class extends React.Component {
  render () {
    return (
      <div className="arrange">
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
