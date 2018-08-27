import React from 'react'
import PropTypes from 'prop-types'
import { Nav, SubNav, NavItemGroup, NavItem } from 'earth-ui/lib/Nav'
import { Layout, LayoutSidebar, LayoutContent } from 'widgets/Layout'
import Header from 'widgets/Header'
import components from './components.json'

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
      this.props.router.push(`/components/${route}`)
    }
  }

  handleItemClick = props => {
    this.toggle(false)
    this.switchRoute(props.id)
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
      <div className="components">
        <Header />
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <Nav
              selectedId={params.component}
              onItemClick={this.handleItemClick}
              width={280}
              indent={40}
            >
              {components.map(item => {
                if (!item.components) {
                  this.componentsMap[item.name] = item
                  return (
                    <NavItem key={item.name} id={item.name} title={item.cn} />
                  )
                }
                return (
                  <SubNav key={item.name} title={item.cn} defaultOpen>
                    {item.components.map(itemGroup => {
                      return (
                        <NavItemGroup title={itemGroup.group} key={itemGroup.group}>
                          {itemGroup.components.map(component => {
                            this.componentsMap[component.name] = component
                            return (
                              <NavItem key={component.name} id={component.name}>
                                <span><span>{component.name}</span><span className="chinese">{component.cn}</span></span>
                              </NavItem>
                            )
                          })}
                        </NavItemGroup>
                      )
                    })}
                  </SubNav>
                )
              })}
            </Nav>
          </LayoutSidebar>
          <LayoutContent>
            {this.renderTitle(params.component ? params.component : params)}
            {children}
          </LayoutContent>
        </Layout>
      </div>
    )
  }
}

Components.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
  router: PropTypes.object
}

export default Components
