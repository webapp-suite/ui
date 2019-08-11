import { Link, navigate } from '@reach/router'
import Header from 'earth-ui/lib/Header'
import Icon from 'earth-ui/lib/Icon'
import { Nav, NavItem, NavItemGroup, SubNav } from 'earth-ui/lib/Nav'
import { Tab, TabList, Tabs } from 'earth-ui/lib/Tabs'
import ToolBar from 'earth-ui/lib/ToolBar'
import Tooltip from 'earth-ui/lib/Tooltip'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout, LayoutContent, LayoutSidebar } from 'widgets/Layout'
import Scrollbar from 'widgets/Scrollbar'
import { nav as components } from '../config.js'
import './index.less'

const getTabsByComponentName = (components, componentName) => {
  for (let c of components) {
    if (c.name === componentName) {
      return c.tabs
    }
    if (c.components) {
      const tabs = getTabsByComponentName(c.components, componentName)
      if (tabs) return tabs
    }
  }
}

const routerWithDynamicSegments = ['components/', 'start/', 'design/']

function renderNavBottom () {
  return (
    <div className="components__navbar-bottom">
      <div className="components__navbar-bottom-image">
        <img
          className="components__navbar-bottom-image-icon"
          src="/svg/avatarPlaceholder.svg"
          alt="Avatar"
        />
      </div>
      <div className="components__navbar-bottom-user">
        <span className="components__navbar-bottom-user-name">KIMI GAO</span>
        <span className="components__navbar-bottom-user-company">
          Earthui Corp.
        </span>
      </div>
      <div className="components__navbar-bottom-logout">
        <Tooltip title="Unfinished feature">
          <Icon
            type="logout"
            className="components__navbar-bottom-logout-icon"
          />
        </Tooltip>
      </div>
      <div className="components__navbar-bottom-settings">
        <Tooltip title="Unfinished feature">
          <Icon
            type="settings"
            className="components__navbar-bottom-settings-icon"
          />
        </Tooltip>
      </div>
    </div>
  )
}

class Components extends React.Component {
  constructor (props) {
    super()
    this.componentsMap = {}
    this.state = {
      open: false
    }
  }

  toggle (open) {
    this.setState({ open })
  }

  switchRoute (route) {
    if (route) {
      navigate(`/apps/${route}`)
    }
  }

  handleItemClick = props => {
    this.toggle(false)
    this.switchRoute(props.id)
  }

  handleTabClick = doc => {
    this.switchRoute(doc)
  }

  renderTitle (docName) {
    const nameBeforeSlash = docName.split('/')[0]
    const nameAfterSlash = routerWithDynamicSegments.some(v =>
      docName.includes(v)
    )
      ? docName.split('/')[1]
      : docName
    const componentName = (nameBeforeSlash === 'components'
      ? nameAfterSlash
      : nameBeforeSlash
    ).split('-')[0]
    const component = this.componentsMap[componentName]
    const { name = '', cn = '' } = component || {}
    const title = name === 'intro' ? 'Earth UI' : `${name} ${cn}`
    const tabs = getTabsByComponentName(components, name)
    return (
      <div className="components__content-top">
        <Header
          className="components__title"
          icon="/svg/app_logo_bg_blue.svg"
          title={title}
        />
        {!!tabs && (
          <ToolBar>
            <Tabs activeKey={nameAfterSlash}>
              <TabList>
                {!!tabs.length &&
                  tabs.map(tab => (
                    <Tab
                      activeKey={tab.doc}
                      key={tab.doc}
                      onClick={() =>
                        this.handleTabClick(`${nameBeforeSlash}/${tab.doc}`)
                      }
                    >
                      {tab.label}
                    </Tab>
                  ))}
              </TabList>
            </Tabs>
          </ToolBar>
        )}
      </div>
    )
  }

  renderNavItem (item, position, path) {
    this.componentsMap[item.name] = item
    if (position === 'outside') {
      const id = item.tabs ? `${item.path}/${item.tabs[0].doc}` : item.name
      return (
        <NavItem
          id={id}
          key={item.name}
          title={item.cn}
          icon={`/svg/icons.svg#${item.icon}`}
        />
      )
    }
    const nameAfterSlash =
      (item.tabs && item.tabs.length && item.tabs[0].doc) || item.name
    const id = path ? `${path}/${nameAfterSlash}` : nameAfterSlash
    return (
      <NavItem id={id} key={item.name}>
        <span>{item.name}</span>
        <span className="chinese">{item.cn}</span>
      </NavItem>
    )
  }

  renderNavItemGroup (itemGroup) {
    return (
      <NavItemGroup title={itemGroup.group} key={itemGroup.group}>
        {itemGroup.components.map(component => this.renderNavItem(component))}
      </NavItemGroup>
    )
  }

  render () {
    const { open } = this.state
    let { children, '*': childComponentPath } = this.props
    return (
      <div className="components">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <div className="components__navbar-top">
              <Link to="/" className="components__navbar-top-logo">
                <span>EARTHUi</span>
              </Link>
              <div className="components__navbar-top-close">
                <Tooltip direction="down" title="Unfinished feature">
                  <Icon type="close" />
                </Tooltip>
              </div>
            </div>
            <Scrollbar className="components__navbar-scrollbar">
              <Nav
                selectedId={childComponentPath}
                onItemClick={this.handleItemClick}
                width={320}
                indent={20}
                className="components__navbar-menu"
              >
                {components.map(item => {
                  if (!item.components) {
                    return this.renderNavItem(item, 'outside')
                  }
                  return (
                    <SubNav
                      key={item.name}
                      title={item.cn}
                      defaultOpen={item.defaultOpen}
                      icon={`/svg/icons.svg#${item.icon}`}
                    >
                      {item.components.map(itemGroup => {
                        if (itemGroup.group) {
                          return this.renderNavItemGroup(itemGroup)
                        }
                        return this.renderNavItem(
                          itemGroup,
                          'inside',
                          item.path
                        )
                      })}
                    </SubNav>
                  )
                })}
              </Nav>
            </Scrollbar>
            {renderNavBottom()}
          </LayoutSidebar>
          <LayoutContent>
            {childComponentPath && this.renderTitle(childComponentPath)}
            <div className="components__content-wrapper">
              <div className="components__content">{children}</div>
            </div>
          </LayoutContent>
        </Layout>
      </div>
    )
  }
}

Components.propTypes = {
  children: PropTypes.node,
  '*': PropTypes.string
}

export default Components
