import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import HeaderBar from 'earth-ui/lib/HeaderBar'
import Icon from 'earth-ui/lib/Icon'
import { Nav, SubNav, NavItemGroup, NavItem } from 'earth-ui/lib/Nav'
import { Tabs, TabList, Tab } from 'earth-ui/lib/Tabs'
import { Layout, LayoutSidebar, LayoutContent } from 'widgets/Layout'
import Scrollbar from 'widgets/Scrollbar'
import components from './components.json'
import './index.less'

// const SVG = props => {
//   return (
//
//   )
// }

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
      navigate(`/components/${route}`)
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
    const component = docName.split('-')[0]
    const { name, cn } = this.componentsMap[component]
    const tabs = getTabsByComponentName(components, name)
    return (
      <HeaderBar
        className="components__title"
        icon="/svg/appLogo.svg" title={`${name} ${cn}`}
      >
        {!!tabs && (
          <Tabs activeKey={docName}>
            <TabList>
              {!!tabs.length && tabs.map(tab => <Tab activeKey={tab.doc} onClick={() => this.handleTabClick(tab.doc)}>{tab.label}</Tab>)}
            </TabList>
          </Tabs>
        )}
      </HeaderBar>
    )
  }

  renderNavItem (item, position) {
    this.componentsMap[item.name] = item
    if (position === 'outside') {
      return (
        <NavItem id={item.name} title={item.cn} icon={`/svg/icons.svg#${item.icon}`} />
      )
    }
    const id = (item.tabs && item.tabs.length && item.tabs[0].doc) || item.name
    return (
      <NavItem id={id}>
        <span>{item.name}</span><span className="chinese">{item.cn}</span>
      </NavItem>
    )
  }

  renderNavItemGroup (itemGroup) {
    return (
      <NavItemGroup title={itemGroup.group}>
        {itemGroup.components.map(component => this.renderNavItem(component))}
      </NavItemGroup>
    )
  }

  render () {
    const { open } = this.state
    const { children, '*': component } = this.props
    return (
      <div className="components">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <div className="components__navbar-logo"><Icon type="logo-trade" /><Icon type="logo-shift" /></div>
            <Scrollbar className="components__navbar-scrollbar">
              <Nav
                selectedId={component}
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
                    <SubNav title={item.cn} defaultOpen={item.defaultOpen} icon={`/svg/icons.svg#${item.icon}`}>
                      {item.components.map(itemGroup => {
                        if (itemGroup.group) {
                          return this.renderNavItemGroup(itemGroup)
                        }
                        return this.renderNavItem(itemGroup)
                      })}
                    </SubNav>
                  )
                })}
              </Nav>
            </Scrollbar>
          </LayoutSidebar>
          <LayoutContent>
            {component && this.renderTitle(component)}
            <div className="components__content-wrapper"><div className="components__content">{children}</div></div>
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
