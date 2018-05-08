import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem } from 'earth-ui/Nav'
import { Layout, LayoutSidebar, LayoutContent } from 'public/Layout'
import components from './components.json'

class Components extends Component {
  constructor () {
    super()
    this.componentsMap = {}
    this.state = {
      open: false
    }
  }

  toggle (open) {
    this.setState({ open })
  }

  renderTitle (component) {
    const { name, cn } = this.componentsMap[component]
    return (
      <h2 className="components__title" style={{marginTop: '0px'}}>{cn + ' ' + name}</h2>
    )
  }

  render () {
    const { open } = this.state
    const { children, params } = this.props
    return (
      <Layout open={open} onToggle={open => this.toggle(open)}>
        <LayoutSidebar>
          <Nav href="/components" onItemClick={() => this.toggle(false)}>
            {components.map((item, i) => {
              !item.components && (this.componentsMap[item.name] = item)
              return item.components
                ? <NavItem
                  key={item.category}
                  title={item.cn}
                  defaultOpen
                >
                  {item.components.map((component, i) => {
                    this.componentsMap[component.name] = component
                    return (
                      <NavItem
                        key={component.name}
                        href={component.name}
                        title={<span><span>{component.name}</span><span className="chinese">{component.cn}</span></span>}
                      />
                    )
                  })}
                </NavItem>
                : <NavItem
                  key={item.name}
                  href={item.name}
                  title={item.cn}
                />
            })}
          </Nav>
        </LayoutSidebar>
        <LayoutContent>
          {this.renderTitle(params.component ? params.component : params)}
          {children}
        </LayoutContent>
      </Layout>
    )
  }
}

Components.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object
}

export default Components
