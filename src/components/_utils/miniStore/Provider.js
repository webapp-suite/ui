import React from 'react'
import PropTypes from 'prop-types'
import { storeShape } from './PropTypes'

export default class Provider extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    store: PropTypes.any
  }

  static childContextTypes = {
    miniStore: storeShape.isRequired
  }

  getChildContext () {
    return {
      miniStore: this.props.store
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}
