import React from 'react'
import { Col, Row, BackToTop } from '@webapps-ui/core-react'
import Markdown from 'widgets/Markdown'
import { backToTop } from '../config'
import PropTypes from 'prop-types'

const asyncComponent = fileName => import(`./${fileName}.md`)

class Start extends React.Component {
  constructor (props) {
    super()
    this.state = {
      md: ''
    }
    asyncComponent(props.routeProps.tab).then(md => {
      this.setState({ md: md.default })
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
Start.propTypes = {
  routeProps: PropTypes.object
}

export default Start
