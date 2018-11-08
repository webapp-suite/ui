import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import BackToTop from 'earth-ui/lib/BackToTop'
import html from '../../../README.zh-CN.md'
import config from '../config'
import './index.less'

export default () => {
  return (
    <div className="guide">
      <Center>
        <Markdown html={html} />
      </Center>
      <BackToTop {...config.backToTop} />
    </div>
  )
}
