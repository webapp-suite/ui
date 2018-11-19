import {Redirect, Router} from '@reach/router'
import NProgress from 'nprogress'
import React from 'react'
import ReactDOM from 'react-dom'
import Imported, {whenComponentsReady} from 'react-imported-component'
import Chrome from './apps/Chrome'
import App from './apps/index'

const asyncComponent = path => Imported(() => {
  NProgress.start()
  whenComponentsReady().then(() => NProgress.done())
  return path.match('.dox')
    ? import(`../src/components/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
    : import(`./apps/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
})

const Intro = () => React.createElement(asyncComponent('Intro'))
const Start = routeProps => React.createElement(asyncComponent('Start'), {routeProps: routeProps})
const Design = routeProps => React.createElement(asyncComponent('Design'), {routeProps: routeProps})
const Changelog = () => React.createElement(asyncComponent('Changelog'))
const Dox = routeProps => React.createElement(asyncComponent(`${routeProps.component.split('-')[0]}/docs/${routeProps.component}.dox`))
const NotFound = () => React.createElement(asyncComponent('NotFound'))

ReactDOM.render((
  <Router>
    <App path="/">
      <Chrome path="/">
        <Intro path="/intro" />
        <Changelog path="/changelog" />
        <Start path="/start/:tab" />
        <Design path="/design/:tab" />
        <Dox path="/components/:component" />
      </Chrome>
      <Redirect noThrow from="/" to="/intro" />
      <NotFound default />
    </App>
  </Router>
), document.getElementById('app'))
