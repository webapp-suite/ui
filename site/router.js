import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect } from '@reach/router'
import Imported, { whenComponentsReady } from 'react-imported-component'
import NProgress from 'nprogress'
import App from './pages/index'
import Chrome from './pages/Chrome'

const asyncComponent = path => Imported(() => {
  NProgress.start()
  whenComponentsReady().then(() => NProgress.done())
  return import(`./pages/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
})

const Intro = () => React.createElement(asyncComponent('Intro'))
const Start = () => React.createElement(asyncComponent('Start'))
const Color = () => React.createElement(asyncComponent('design/Color/'))
const Typo = () => React.createElement(asyncComponent('design/Typo'))
const Changelog = () => React.createElement(asyncComponent('Changelog'))
const Dox = routeProps => React.createElement(asyncComponent(`Chrome/dox/${routeProps.component}.doc`))
const NotFound = () => React.createElement(asyncComponent('NotFound'))

ReactDOM.render((
  <Router>
    <App path="/">
      <Chrome path="/">
        <Intro path="/intro" />
        <Start path="/start" />
        <Color path="/color" />
        <Typo path="/typo" />
        <Changelog path="/changelog" />
        <Dox path="/components/:component" />
      </Chrome>
      <Redirect noThrow from="/" to="/intro" />
      <NotFound default />
    </App>
  </Router>
), document.getElementById('app'))
