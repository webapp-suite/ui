import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect } from '@reach/router'
import Imported, { whenComponentsReady } from 'react-imported-component'
import NProgress from 'nprogress'
import App from './pages/index'

const asyncComponent = path => Imported(() => {
  NProgress.start()
  whenComponentsReady().then(() => NProgress.done())
  return import(`./pages/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
})

const Home = asyncComponent('Home')
const Guide = asyncComponent('Guide')
const Changelog = asyncComponent('Changelog')
const NotFound = asyncComponent('NotFound')
const Components = asyncComponent('Components')
const Doc = routeProps => React.createElement(asyncComponent(`Components/docs/${routeProps.component}.doc`))

ReactDOM.render((
  <Router>
    <App path="/">
      <Home path="/" />
      <Guide path="/guide" />
      <Redirect noThrow from="/components" to="/components/Layout" />
      <Components path="/components">
        <Doc path=":component" />
      </Components>
      <Changelog path="/changelog" />
      <NotFound default />
    </App>
  </Router>
), document.getElementById('app'))
