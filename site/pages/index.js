import React from 'react'
import PropTypes from 'prop-types'
// import TopHeader from 'widgets/Header'
import './index.less'

class App extends React.Component {
  componentWillUnmount () {
    document.getElementsByTagName('body')[0].removeEventListener('touchmove')
  }

  render () {
    let { children } = this.props
    return (
      <div className="wrapper">
        {/* <TopHeader /> */}
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
