import React from 'react'
import BackToTop from 'earth-ui/lib/BackToTop'
import Markdown from 'widgets/Markdown'
import Center from 'widgets/Center'
import html from '../../../CHANGELOG.md'
import { backToTop } from '../config'
import './index.less'

export default () => {
  return (
    <div className="changelog">
      <Center>
        <Markdown html={html} />
      </Center>
      <BackToTop {...backToTop} />
    </div>
  )
}
