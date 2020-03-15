/**
 * ant-design v3.10.4
 * https://github.com/ant-design/ant-design
 * Copyright (c) 2015-present Alipay.com, https://www.alipay.com/, MIT LICENSE
 */

import { notification } from '@webapps-ui/core-react'
import PropTypes from 'prop-types'
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const rgbToHex = rgbString => {
  const rgb = rgbString.match(/\d+/g)
  let r = parseInt(rgb[0], 10).toString(16)
  let g = parseInt(rgb[1], 10).toString(16)
  let b = parseInt(rgb[2], 10).toString(16)
  r = r.length === 1 ? `0${r}` : r
  g = g.length === 1 ? `0${g}` : g
  b = b.length === 1 ? `0${b}` : b
  return `#${r}${g}${b}`
}

export default class Palette extends React.Component {
  componentDidMount () {
    this.hexColors = {}
    Object.keys(this.colorNodes).forEach(key => {
      const computedColor = getComputedStyle(this.colorNodes[key])[
        'background-color'
      ]
      if (computedColor.indexOf('rgba') >= 0) {
        this.hexColors[key] = computedColor
      } else {
        this.hexColors[key] = rgbToHex(computedColor)
      }
    })
    this.forceUpdate()
  }

  render () {
    this.colorNodes = this.colorNodes || {}
    const {
      showTitle,
      direction,
      color: { name, english }
    } = this.props
    const className =
      direction === 'horizontal' ? 'color-palette-horizontal' : 'color-palette'
    const colors = []
    const colorNameMap = {
      3: '-lightest',
      4: '-lighter',
      5: '-light',
      6: '',
      7: '-dark',
      8: '-darker',
      9: '-darkest'
    }
    const colorName = english
    for (let i = 3; i <= 9; i += 1) {
      const colorText = `${name}${colorNameMap[i]}`
      colors.push(
        <CopyToClipboard
          text={this.hexColors ? this.hexColors[colorText] : ''}
          onCopy={() =>
            notification.success(
              `@ui-color-${colorText} copied: ${this.hexColors[colorText]}`,
              2000
            )
          }
          key={colorText}
        >
          <div
            key={i}
            ref={node => {
              this.colorNodes[`${name}${colorNameMap[i]}`] = node
            }}
            className={`main-color-item palette-${name}-${i}`}
            style={{
              color: (name === 'slate' ? i > 2 : i > 5) ? '#fff' : 'unset'
            }}
            title="click to copy color"
          >
            <span className="main-color-text">{colorText}</span>
            {this.hexColors ? (
              <span className="main-color-value">
                {this.hexColors[colorText]}
              </span>
            ) : null}
          </div>
        </CopyToClipboard>
      )
    }
    return (
      <div className={className}>
        {showTitle && (
          <div className="color-title">
            {colorName}
            {/* <span className="color-description">{description}</span> */}
          </div>
        )}
        <div className="main-color">{colors}</div>
      </div>
    )
  }
}

Palette.propTypes = {
  direction: PropTypes.string,
  showTitle: PropTypes.bool,
  color: PropTypes.object
}
