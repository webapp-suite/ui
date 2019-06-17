import PropTypes from 'prop-types'
import React from 'react'
import importedComponent from 'react-imported-component'

const convertFirstUpperCase = str => `${str[0].toUpperCase()}${str.slice(1)}`
const asyncComponent = tabName => importedComponent(() => import(`./${convertFirstUpperCase(tabName)}`))

const Design = props => {
  return (
    <div className="design">
      {React.createElement(asyncComponent(props.routeProps.tab))}
    </div>
  )
}

Design.propTypes = {
  routeProps: PropTypes.object
}

export default Design
