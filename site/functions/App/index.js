import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'earth-ui/Layout'
import { Dropdown, DropdownToggle, DropdownMenu } from 'earth-ui/Dropdown'
import Button from 'earth-ui/Button'
import Icon from 'earth-ui/Icon'
import './index.less'

class App extends Component {
  componentWillUnmount () {
    document.getElementsByTagName('body')[0].removeEventListener('touchmove')
  }

  renderNav () {
    return (
      <ul>
        <li>
          <IndexLink to="/" activeClassName="active">首页</IndexLink>
        </li>
        <li>
          <Link to="/guide" activeClassName="active">指南</Link>
        </li>
        <li>
          <Link to="/components" activeClassName="active">文档</Link>
        </li>
        <li>
          <Link to="/changelog" activeClassName="active">更新日志</Link>
        </li>
        <li>
          <Link to="/scaffolding" activeClassName="active">脚手架</Link>
        </li>
      </ul>
    )
  }

  render () {
    const { children } = this.props
    return (
      <div className="wrapper">
        <Row className="header" fluid>
          <Col>
            <Link to="/" className="header__logo">
              {/* <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="#logo"></use>'}} /> */}
              Earth UI <sub>v0.1.0</sub>
            </Link>
          </Col>
          <Col className="header__nav">
            {this.renderNav()}
          </Col>
          <Col right>
            <Dropdown ref="dropdown">
              <DropdownToggle className="header__nav-toggle">
                <Button icon="bars" transparent />
              </DropdownToggle>
              <DropdownMenu
                onClick={() => this.refs.dropdown.close()}
                className="header__nav-toggle-popover"
                align="middle"
              >
                {this.renderNav()}
              </DropdownMenu>
            </Dropdown>
            <a
              href="https://github.com/G-Explorer/Earth-UI"
              target="_blank"
              className="header__github"
            >
              <Icon type="github" />
            </a>
          </Col>
        </Row>
        <div className="content">{children}</div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
