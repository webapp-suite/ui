import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import JustifiedLayout from './JustifiedLayout'
import './index.less'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      containerWidth: props.options.containerWidth
    }
  }
  componentDidMount () {
    if (!this.state.containerWidth) {
      const parentDom = ReactDOM.findDOMNode(this).parentNode
      this.setState({ containerWidth: parentDom.offsetWidth })
    }
  }
  render () {
    const { images, options } = this.props
    options.containerWidth = this.state.containerWidth
    const childElements = images.map((image, index) =>
      <div className="cmui-gallery__wrapper"
        style={{backgroundImage: `url(${image.src})`, width: image.width, height: image.height}}
      >
        <div className="cmui-gallery__img-cover" />
      </div>
    )
    return (
      options.containerWidth
        ? <JustifiedLayout {...options}>
          {childElements}
        </JustifiedLayout>
        : <div />
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      // thumbnail: PropTypes.string.isRequired,
      // srcset: PropTypes.array,
      // caption: PropTypes.string,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  ).isRequired,
  options: PropTypes.object
}

export default Gallery
