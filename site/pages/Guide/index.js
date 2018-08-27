import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import Scrollbar from 'widgets/Scrollbar'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import BackToTop from 'earth-ui/lib/BackToTop'
import html from '../../../README.zh-CN.md'
import './index.less'

const config = {
  icon: 'eject',
  topDistance: 10,
  timing: 'easeIn',
  background: 'rgba(73, 73, 73, 1)',
  hover: {background: 'rgba(43, 43, 43, 1)'},
  position: {
    bottom: '10%',
    right: '40px'
  }
}

export default () => {
  return (
    <div className="guide">
      <Header />
      <Scrollbar>
        <Center>
          <Markdown html={html} />
        </Center>
        <Footer />
        <BackToTop {...config} />
      </Scrollbar>
    </div>
  )
}
