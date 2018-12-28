import Icon from 'earth-ui/lib/Icon'
import QueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import React from 'react'
import './index.less'

const dataList = [{
  icon: 'docs-icon-paint-palette',
  title: 'Design Style',
  intro: '简洁而不失细节的打磨。主张用更少的颜色展示更丰富的内容，同时让页面元素充满层次感。'
}, {
  icon: 'docs-icon-window-application-6',
  title: 'Layout Components',
  intro: '让页面布局更加便捷、统一。页面的布局设计紧随当下流行趋势，而不失其简洁和严谨的特点。'
}, {
  icon: 'docs-icon-chat-bubble-square-alert-2',
  title: 'Programatical Declarative Components',
  intro: '使用函数声明的方式，快速构建UI组件，更多是全局组件，而不需要开发者过多关注其样式和排版。'
}, {
  icon: 'docs-icon-modules-1',
  title: 'Markup Declarative Components',
  intro: '组件库大多数组件是该类型组件，有其天然的灵活易组合等方面优势，也是 Earth UI 组件库的基石。'
}, {
  icon: 'docs-icon-devices',
  title: 'Responsive Design',
  intro: 'TODO: 响应式设计，支持多屏幕，适配手机端，主要分为三种类型：mobile、tablet 和 desktop。'
}, {
  icon: 'docs-icon-font-size',
  title: 'Support Markdown',
  intro: '组件库内置了对 Markdown 的支持，便于页面排版，在某些组件中也增加了对 Markdown 的简单支持。'
}]

const Section3 = props => (
  <div className="home__section3" id="home__section3">
    <div className="home__section3-background">
      <div className="home__section3-background-top" />
      <div className="home__section3-background-bottom" />
    </div>
    <div className="home__section3-content">
      <div className="home__section3-content-title">
        <h2>Earth-UI component library features</h2>
      </div>
      <ScrollOverPack playScale="0.4" targetId="home" location="home__section3">
        <QueueAnim
          className="home__section3-content-list"
          key="queue"
          duration={600}
          ease={['easeOutQuart', 'easeInQuart']}
        >
          {dataList.map(item => (
            <div className="home__section3-content-list-item" key={item.icon}>
              <Icon className="home__section3-content-list-item-icon" src={`/svg/icons.svg#${item.icon}`} />
              <p className="home__section3-content-list-item-title">{item.title}</p>
              <p className="home__section3-content-list-item-intro">{item.intro}</p>
            </div>
          ))}
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
)

export default Section3
