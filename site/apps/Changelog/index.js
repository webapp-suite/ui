import BackToTop from 'earth-ui/lib/BackToTop'
import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import html from '../../../CHANGELOG.md'
import {backToTop} from '../config'
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
