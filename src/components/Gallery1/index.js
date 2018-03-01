import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import './index.less'

class Gallery extends Component {
  render () {
    const { options } = this.props
    const childElements = this.props.elements.map((element, index) =>
      <div className="grid-item">
        <div className="grid-item-cover" />
        <img src={`/img/test/${index + 1}.jpg`} alt="" />
      </div>
    )
    return (
      <Masonry
        className={'grid'} // default ''
        elementType={'div'} // default 'div'
        options={options} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        <div className="grid-sizer" />
        <div className="gutter-sizer" />
        {childElements}
      </Masonry>
    )
  }
}

Gallery.propTypes = {
  elements: PropTypes.array,
  options: PropTypes.object
}

export default Gallery
