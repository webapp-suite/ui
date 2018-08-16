import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem } from 'earth-ui/lib/Nav'
import { Layout, LayoutSidebar, LayoutContent } from 'public/Layout'
import components from './components.json'

class Components extends Component {
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
      this.props.router.push(`/components/${route}`)
    }
  }

  handleItemClick = e => {
    this.toggle(false)
    this.switchRoute(e.id)
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
          <Nav selectedId={params.component} onItemClick={this.handleItemClick} >
            {components.map(item => {
              !item.components && (this.componentsMap[item.name] = item)
              if (item.components) {
                return (
                  <NavItem
                    key={item.category}
                    id={item.category}
                    title={item.cn}
                    defaultOpen
                  >
                    {item.components.map(component => {
                      this.componentsMap[component.name] = component
                      return (
                        <NavItem
                          key={component.name}
                          id={component.name}
                          title={<span><span>{component.name}</span><span className="chinese">{component.cn}</span></span>}
                        />
                      )
                    })}
                  </NavItem>
                )
              }
              return (
                <NavItem
                  key={item.name}
                  id={item.name}
                  title={item.cn}
                />
              )
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
  params: PropTypes.object,
  router: PropTypes.object
}

export default Components
