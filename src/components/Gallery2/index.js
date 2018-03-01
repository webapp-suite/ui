import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import grid from 'image-grid'
// import './index.less'

class Gallery extends Component {
  componentDidMount () {
    grid('.container', {
      maxHeight: 370,
      margin: 10,
      callback: function () {
        // do stuff because layout changed.
      }
    })
  }
  render () {
    // const { options } = this.props
    // const childElements = this.props.elements.map((element, index) =>
    //   <div className="grid-item">
    //     <div className="grid-item-cover" />
    //     <img src={`/img/test/${index + 1}.jpg`} alt="" />
    //   </div>
    // )
    return (
      <div className="container">
        <img width="400" height="400" src="http://lorempixel.com/400/400?2" />
        <img width="520" height="400" src="http://lorempixel.com/520/400?3" />
        <img width="400" height="400" src="http://lorempixel.com/400/400?4" />
        <img width="440" height="400" src="http://lorempixel.com/440/400?5" />
        <img width="360" height="400" src="http://lorempixel.com/360/400?6" />
        <img width="400" height="400" src="http://lorempixel.com/400/400?7" />
        <img width="360" height="400" src="http://lorempixel.com/360/400" />
        <img width="600" height="400" src="http://lorempixel.com/600/400" />
        <img width="480" height="400" src="http://lorempixel.com/480/400" />
        <img width="520" height="400" src="http://lorempixel.com/520/400" />
        <img width="560" height="400" src="http://lorempixel.com/560/400" />
        <img width="480" height="400" src="http://lorempixel.com/480/400?13" />
        <img width="560" height="400" src="http://lorempixel.com/560/400?14" />
        <img width="320" height="400" src="http://lorempixel.com/320/400?15" />
        <img width="480" height="400" src="http://lorempixel.com/480/400?16" />
        <img width="440" height="400" src="http://lorempixel.com/440/400?17" />
        <div>
          <img width="520" height="400" src="http://lorempixel.com/520/400?18" />
        </div>
        <div data-ratio="16-9">
          <img src="http://lorempixel.com/800/450?19" />
        </div>
      </div>
    )
  }
}

// Gallery.propTypes = {
//   elements: PropTypes.array,
//   options: PropTypes.object
// }

export default Gallery
