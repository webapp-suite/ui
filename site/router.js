import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute, IndexRedirect, withRouter } from 'react-router'
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import process from 'nprogress'
import App from './pages/index'

render((
  <Router onUpdate={() => {
    process.done()
    window.scrollTo(0, 0)
  }} history={browserHistory}>
    <Route
      path="/"
      onEnter={() => process.start()}
      onChange={() => process.start()}
      component={App}
    >
      <IndexRoute getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/Home').default)
        })
      }} />
      <Route path="guide" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/Guide').default)
        })
      }} />
      <Route path="Design" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/Design').default)
        })
      }} >
        <IndexRedirect to="/design/layout" />
        <Route path=":designElement" getComponent={(nextState, cb) => {
          const designElement = nextState.location.pathname.split('/').pop()
          require.ensure([], require => {
            cb(null, require(`./pages/Design/docs/${designElement}.md`))
          })
        }} />
      </Route>
      <Route path="components" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, withRouter(require('./pages/Components').default))
        })
      }}>
        <IndexRedirect to="/components/Layout" />
        <Route path=":component" getComponent={(nextState, cb) => {
          const component = nextState.location.pathname.split('/').pop()
          require.ensure([], require => {
            cb(null, require(`./pages/Components/docs/${component}.doc`).default)
          })
        }} />
      </Route>
      <Route path="Changelog" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/Changelog').default)
        })
      }} />
      <Route path="*" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/NotFound').default)
        })
      }} />
    </Route>
  </Router>
), document.getElementById('app'))
