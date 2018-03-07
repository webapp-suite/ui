import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'public/Markdown'
import './index.less'

const Changelog = props => {
  return <Markdown className="changelog" html={props.html} />
}

Changelog.propTypes = {
  html: PropTypes.string
}

export default Changelog
