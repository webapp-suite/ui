import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import BackToTop from 'earth-ui/lib/BackToTop'
import html from '../../../CHANGELOG.md'
import config from '../config'
import './index.less'

export default () => {
  return (
    <div className="changelog">
      <Center>
        <Markdown html={html} />
      </Center>
      <BackToTop {...config.backToTop} />
    </div>
  )
}
