import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridGallery from 'react-grid-gallery'

const captionStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  maxHeight: '370px',
  overflow: 'hidden',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  color: 'white',
  padding: '10px',
  fontSize: '90%'
}

const customTagStyle = {
  wordWrap: 'break-word',
  display: 'inline-block',
  backgroundColor: 'white',
  height: 'auto',
  fontSize: '75%',
  fontWeight: '600',
  lineHeight: '1',
  padding: '.2em .6em .3em',
  borderRadius: '.25em',
  color: 'black',
  verticalAlign: 'baseline',
  margin: '10px'
}

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: this.props.images
    }
  }

  setCustomTags (i) {
    return (
      i.tags.map((t) => {
        return (<div
          key={t.value}
          style={customTagStyle}>
          {t.title}
        </div>)
      })
    )
  }

  render () {
    const images =
      this.state.images.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
            {i.hasOwnProperty('tags') &&
            this.setCustomTags(i)}
          </div>)
        return i
      })

    return (
      <div style={{
        display: 'block',
        minHeight: '1px',
        width: '100%',
        overflow: 'auto'}}>
        <GridGallery
          images={images}
          enableImageSelection={false}
          rowHeight={310}
          margin={4}
        />
      </div>
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
}

Gallery.defaultProps = {
  images: [
    {
      src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: 'Orange Macro (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
      thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: '286H (gratisography.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: '315H (gratisography.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '201H (gratisography.com)'
    },
    {
      src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: 'Big Ben (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
      thumbnail: 'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
      thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: 'Orange Macro (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
      thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: '286H (gratisography.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: '315H (gratisography.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '201H (gratisography.com)'
    },
    {
      src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: 'Big Ben (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
      thumbnail: 'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
      thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: 'Orange Macro (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
      thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: '286H (gratisography.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
      thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: '315H (gratisography.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '201H (gratisography.com)'
    },
    {
      src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: 'Big Ben (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
      thumbnail: 'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
      thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
    },
    {
      src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
      thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
    }
  ]
}

export default Gallery
