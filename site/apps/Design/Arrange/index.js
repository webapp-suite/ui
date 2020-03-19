import React from 'react'
import { Col, Row, BackToTop } from '@webapps-ui/core-react'
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
