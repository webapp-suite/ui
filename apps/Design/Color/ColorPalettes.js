/**
 * ant-design v3.10.4
 * https://github.com/ant-design/ant-design
 * Copyright (c) 2015-present Alipay.com, https://www.alipay.com/, MIT LICENSE
 */

import React from 'react'
import Palette from './Palette'

const ColorPalettes = () => {
  const colors = [
    {
      name: 'red',
      english: 'Red',
      chinese: '薄暮',
      description: '斗志、奔放'
    },
    {
      name: 'orange',
      english: 'Orange',
      chinese: '日暮',
      description: '温暖、欢快'
    },
    {
      name: 'yellow',
      english: 'Yellow',
      chinese: '日出',
      description: '出生、阳光'
    },
    {
      name: 'green',
      english: 'Green',
      chinese: '极光绿',
      description: '健康、创新'
    },
    {
      name: 'blue',
      english: 'Blue',
      chinese: '拂晓蓝',
      description: '包容、科技、普惠'
    },
    {
      name: 'purple',
      english: 'Purple',
      chinese: '酱紫',
      description: '优雅、浪漫'
    },
    {
      name: 'pink',
      english: 'Pink',
      chinese: '粉红',
      description: '明快、感性'
    },
    {
      name: 'gray',
      english: 'gray',
      chinese: '亮青灰',
      description: '轻盈、低调'
    },
    {
      name: 'slate',
      english: 'slate',
      chinese: '板岩灰',
      description: '神秘、突出'
    }
  ]
  return (
    <div className="color-palettes">
      {colors.map(color => <Palette key={color.name} color={color} showTitle />)}
    </div>
  )
}

export default ColorPalettes
