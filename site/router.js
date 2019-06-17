import { Redirect, Router } from '@reach/router'
import NProgress from 'nprogress'
import React from 'react'
import ReactDOM from 'react-dom'
import Imported, { whenComponentsReady } from 'react-imported-component'
import Chrome from './apps/Chrome'
import App from './apps/index'

const asyncComponent = path =>
  Imported(() => {
    NProgress.start()
    whenComponentsReady().then(() => {
      !['/', 'InProgress'].includes(path) && NProgress.done()
    })
    if (path === '/') {
      return import('./pages/Home')
    }
    return path.match('.dox')
      ? import(`../src/components/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
      : import(`./apps/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
  })

const WIP = [
  'ToolBar',
  'Header',
  'Footer',
  'SideBar',
  'Form',
  'Menu',
  'Table',
  'Tag',
  'Modal',
  'Note',
  'Search',
  'DatePicker',
  'Card',
  'Time',
  'Actions'
]

const getComponentDoc = component => {
  if (WIP.includes(component)) {
    return 'InProgress'
  }
  return `${component.split('-')[0]}/docs/${component}.dox`
}

const Home = () => React.createElement(asyncComponent('/'))
const Start = routeProps =>
  React.createElement(asyncComponent('Start'), { routeProps: routeProps })
const Design = routeProps =>
  React.createElement(asyncComponent('Design'), { routeProps: routeProps })
const Changelog = () => React.createElement(asyncComponent('Changelog'))
const Dox = routeProps =>
  React.createElement(asyncComponent(getComponentDoc(routeProps.component)))
const NotFound = () => React.createElement(asyncComponent('NotFound'))

ReactDOM.render(
  <Router>
    <App path="/apps">
      <Chrome path="/">
        <Changelog path="/changelog" />
        <Start path="/start/:tab" />
        <Design path="/design/:tab" />
        <Dox path="/components/:component" />
      </Chrome>
      {/* from means relative path, to means abs path */}
      <Redirect noThrow from="/" to="/" />
    </App>
    <Home path="/" />
    <NotFound default />
  </Router>,
  document.getElementById('app')
)
