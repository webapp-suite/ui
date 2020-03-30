import React from 'react'
// import { Link } from '@reach/router'
import { Row, Col } from '@webapps-ui/core-react'
// import { Button } from '@webapps-ui/core-react'
// import { Dropdown, DropdownToggle, DropdownMenu } from '@webapps-ui/core-react'
// import { Icon } from '@webapps-ui/core-react'
import pkg from '../../../../package.json'
import './index.less'

// TODO: will be replaced in next @reach/router
// const NavLink = ({ className, activeClassName, partial, ...props }) => (
//   <Link
//     getProps={({ isCurrent, isPartiallyCurrent }) => {
//       const condition = partial ? isPartiallyCurrent : isCurrent
//       return condition
//         ? { className: `${className} active` }
//         : { className }
//     }}
//     {...props}
//   />
// )

// const renderNav = () => {
//   return (
//     <ul>
//       <li><NavLink to="/" activeClassName="active">首页</NavLink></li>
//       <li><NavLink to="/guide" activeClassName="active">指南</NavLink></li>
//       <li><NavLink to="/components" activeClassName="active" partial>组件</NavLink></li>
//       <li><NavLink to="/changelog" activeClassName="active">更新日志</NavLink></li>
//     </ul>
//   )
// }

class Header extends React.Component {
  render () {
    return (
      <Row className="header" fluid>
        <Col>
          <div className="header__logo">
            <img
              className="header__logo-img"
              src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/white-bg-webapps-ui-gray.png"
            />
            {/* <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="#logo"></use>'}} /> */}
            <sub>v{`${pkg.version}`}</sub>
          </div>
        </Col>
        {/* <Col className="header__nav"> */}
        {/* {renderNav()} */}
        {/* </Col> */}
        {/* <Col right> */}
        {/* <Dropdown ref="dropdown"> */}
        {/* <DropdownToggle className="header__nav-toggle"> */}
        {/* <Button icon="bars" /> */}
        {/* </DropdownToggle> */}
        {/* <DropdownMenu */}
        {/* onClick={() => this.refs.dropdown.close()} */}
        {/* className="header__nav-toggle-popover" */}
        {/* align="middle" */}
        {/* > */}
        {/* {renderNav()} */}
        {/* </DropdownMenu> */}
        {/* </Dropdown> */}
        {/* <a */}
        {/* href="https://github.com/cosmos-x/@webapps-ui/core-react" */}
        {/* target="_blank" */}
        {/* className="header__github" */}
        {/* > */}
        {/* <Icon type="github" /> */}
        {/* </a> */}
        {/* </Col> */}
      </Row>
    )
  }
}

export default Header
