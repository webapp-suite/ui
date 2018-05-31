import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Row, Col } from 'earth-ui/lib/Layout'
import Button from 'earth-ui/lib/Button'
import './index.less'

class Layout extends Component {
  getChildContext () {
    return {
      layout: this
    }
  }

  close () {
    this.props.open && this.props.onToggle(false)
  }

  toggle (e) {
    e.stopPropagation()
    this.props.onToggle(!this.props.open)
  }

  render () {
    const { open, className, children } = this.props
    return (
      <Row fluid className={classnames('layout', {'layout--open': open}, className)}>
        {children}
      </Row>
    )
  }
}

Layout.childContextTypes = {
  layout: PropTypes.instanceOf(Layout)
}

Layout.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

const LayoutSidebar = props => {
  const { children } = props
  return <Col className="layout__sidebar">{children}</Col>
}

const LayoutContent = (props, { layout }) => {
  const { children } = props
  return (
    <Col className="layout__content" onClick={() => layout.close()}>
      <Button
        icon="bars"
        className="layout__toggle"
        onClick={e => layout.toggle(e)}
      />
      {children}
    </Col>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

LayoutSidebar.propTypes = {
  children: PropTypes.node
}

LayoutContent.propTypes = {
  children: PropTypes.node
}

LayoutContent.contextTypes = {
  layout: PropTypes.object
}

export { Layout, LayoutSidebar, LayoutContent }
