import PropTypes from 'prop-types'
import React from 'react'
import './index.less'

class App extends React.Component {
  componentWillUnmount () {
    document.getElementsByTagName('body')[0].removeEventListener('touchmove')
  }

  render () {
    let { children } = this.props
    return (
      <div className="wrapper">
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
