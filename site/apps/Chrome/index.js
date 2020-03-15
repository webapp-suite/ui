import { navigate } from '@reach/router'
import {
  Nav,
  NavItem,
  NavItemGroup,
  SubNav,
  Header,
  Tab,
  TabList,
  Tabs,
  ToolBar,
  notification
} from '@webapps-ui/core-react'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout, LayoutContent, LayoutSidebar } from 'widgets/Layout'
import { nav as components } from '../config.js'
import './index.less'

const firstUpperCase = str =>
  str.replace(
    /\b(\w)(\w*)/g,
    ($0, $1, $2) => $1.toUpperCase() + $2.toLowerCase()
  )

const getTabsByComponentName = (components, componentName) => {
  for (const c of components) {
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

  handleLogoutClick = () => {
    this.switchRoute('/')
  }

  handleSettingClick = () => {
    notification.success('Coming soon!')
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
    let componentName = (nameBeforeSlash === 'components'
      ? nameAfterSlash
      : nameBeforeSlash
    ).split('-')[0]
    if (componentName === 'start') {
      componentName = 'get started'
    }
    const component = this.componentsMap[componentName]
    const { name = '' } = component || {}
    const title = name === 'intro' ? 'WebApps UI' : name
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
                      {firstUpperCase(tab.label)}
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
          title={firstUpperCase(item.name)}
          icon={`/svg/icons.svg#${item.icon}`}
        />
      )
    }
    const nameAfterSlash =
      (item.tabs && item.tabs.length && item.tabs[0].doc) || item.name
    const id = path ? `${path}/${nameAfterSlash}` : nameAfterSlash
    return (
      <NavItem id={id} key={id}>
        <span>{item.name}</span>
        {/* <span className="chinese">{item.cn}</span> */}
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
    const { children, '*': childComponentPath } = this.props
    return (
      <div className="components">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <Nav
              selectedId={childComponentPath}
              onItemClick={this.handleItemClick}
              onSettingClick={this.handleSettingClick}
              onLogoutClick={this.handleLogoutClick}
              className="components__nav"
              user={{
                avatar:
                  'https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/avatarPlaceholder.svg',
                name: 'KIMI GAO',
                company: 'WebApps UI'
              }}
              logoUrl="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/dark-bg-webapps-ui.svg"
            >
              {components.map(item => {
                if (!item.components) {
                  return this.renderNavItem(item, 'outside')
                }
                return (
                  <SubNav
                    key={item.name}
                    title={firstUpperCase(item.name)}
                    icon={`/svg/icons.svg#${item.icon}`}
                  >
                    {item.components.map(itemGroup => {
                      if (itemGroup.group) {
                        return this.renderNavItemGroup(itemGroup)
                      }
                      return this.renderNavItem(itemGroup, 'inside', item.path)
                    })}
                  </SubNav>
                )
              })}
            </Nav>
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
