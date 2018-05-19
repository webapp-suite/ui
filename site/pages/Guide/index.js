import React from 'react'
import Center from 'public/Center'
import Markdown from 'public/Markdown'
import html from '../../../README.zh-CN.md'

export default () => {
  return (
    <Center>
      <Markdown html={html} />
    </Center>
  )
}
