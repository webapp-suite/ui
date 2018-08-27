import React from 'react'
import Center from 'widgets/Center'
import Markdown from 'widgets/Markdown'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import Scrollbar from 'widgets/Scrollbar'
import html from '../../../CHANGELOG.md'
import './index.less'

export default () => {
  return (
    <div className="changelog">
      <Header />
      <Scrollbar>
        <Center>
          <Markdown html={html} />
        </Center>
        <Footer />
      </Scrollbar>
    </div>
  )
}
