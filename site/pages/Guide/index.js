import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import BackToTop from 'earth-ui/lib/BackToTop'
import html from '../../../README.zh-CN.md'
import config from '../config'
import './index.less'

export default () => {
  return (
    <div className="guide">
      <Header />
      <Center>
        <Markdown html={html} />
      </Center>
      <Footer />
      <BackToTop {...config.backToTop} />
    </div>
  )
}
