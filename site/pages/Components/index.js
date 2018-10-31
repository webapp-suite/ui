import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import HeaderBar from 'earth-ui/lib/HeaderBar'
import { Nav, SubNav, NavItemGroup, NavItem } from 'earth-ui/lib/Nav'
import { Tabs, TabList, Tab } from 'earth-ui/lib/Tabs'
import { Layout, LayoutSidebar, LayoutContent } from 'widgets/Layout'
// import Scrollbar from 'widgets/Scrollbar'
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
        <NavItem key={item.name} id={item.name} title={item.cn} />
      )
    }
    const id = (item.tabs && item.tabs.length && item.tabs[0].doc) || item.name
    return (
      <NavItem key={item.name} id={id}>
        <span>{item.name}</span><span className="chinese">{item.cn}</span>
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
    const { children, '*': component } = this.props
    return (
      <div className="components">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <Nav
              selectedId={component}
              onItemClick={this.handleItemClick}
              width={320}
              indent={40}
            >
              {components.map(item => {
                if (!item.components) {
                  return this.renderNavItem(item, 'outside')
                }
                return (
                  <SubNav key={item.name} title={item.cn} defaultOpen={item.defaultOpen}>
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
