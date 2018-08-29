import React from 'react'
import { Link, IndexLink } from 'react-router'
import Button from 'earth-ui/lib/Button'
import { Row, Col } from 'earth-ui/lib/Layout'
import { Dropdown, DropdownToggle, DropdownMenu } from 'earth-ui/lib/Dropdown'
import Icon from 'earth-ui/lib/Icon'
import pkg from '../../../package.json'
import './index.less'

const renderNav = () => {
  return (
    <ul>
      <li>
        <IndexLink to="/" activeClassName="active">首页</IndexLink>
      </li>
      <li>
        <Link to="/guide" activeClassName="active">指南</Link>
      </li>
      {/* <li> */}
      {/* <Link to="/design" activeClassName="active">设计</Link> */}
      {/* </li> */}
      <li>
        <Link to="/components" activeClassName="active">组件</Link>
      </li>
      <li>
        <Link to="/changelog" activeClassName="active">更新日志</Link>
      </li>
    </ul>
  )
}

class Header extends React.Component {
  render () {
    return (
      <Row className="header" fluid>
        <Col>
          <Link to="/" className="header__logo">
            <img src="../../img/earth_text_white.png" className="header__logo-text" />
            {/* <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="#logo"></use>'}} /> */}
            <sub>v{`${pkg.version}`}</sub>
          </Link>
        </Col>
        <Col className="header__nav">
          {renderNav()}
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
              {renderNav()}
            </DropdownMenu>
          </Dropdown>
          <a
            href="https://github.com/G-Explorer/earth-ui"
            target="_blank"
            className="header__github"
          >
            <Icon type="github" />
          </a>
        </Col>
      </Row>
    )
  }
}

export default Header
