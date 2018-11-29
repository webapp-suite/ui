import React from 'react'
import BackToTop from 'earth-ui/lib/BackToTop'
import { Col, Row } from 'earth-ui/lib/Layout'
import Markdown from 'widgets/Markdown'
import { backToTop } from '../config'

const asyncComponent = fileName => import(`./${fileName}.md`)

export default class extends React.Component {
  constructor (props) {
    super()
    this.state = {
      md: ''
    }
    asyncComponent(props.routeProps.tab).then(md => {
      this.setState({ md })
    })
  }

  render () {
    return (
      <div className="start">
        <Row>
          <Col col="md-16" className="demo__left">
            <Markdown html={this.state.md} />
          </Col>
        </Row>
        <BackToTop {...backToTop} />
      </div>
    )
  }
}
