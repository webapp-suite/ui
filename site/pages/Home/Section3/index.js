import { Icon } from '@webapps-ui/core-react'
import QueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import React from 'react'
import './index.less'

const dataList = [
  {
    icon: 'docs-icon-paint-palette',
    title: 'Design Style',
    intro:
      'Simple but details polished. Try to display richer content in fewer colors while making the page elements full of layers.'
  },
  {
    icon: 'docs-icon-window-application-6',
    title: 'Layout Components',
    intro:
      'Make the layout more convenient and consistent. Follow the current design trend, also keep simple and rigorous.'
  },
  {
    icon: 'docs-icon-dialog',
    title: 'Programmatic Declarative Components',
    intro:
      'This kind of components can build UI quickly without requiring developers’ too much attention to style and typo.'
  },
  {
    icon: 'docs-icon-modules-1',
    title: 'Markup Declarative Components',
    intro:
      'It has natural advantage of flexibility and easy combination, which is the cornerstone of the WebApps UI component library.'
  },
  {
    icon: 'docs-icon-devices',
    title: 'Responsive Design',
    intro:
      'TODO: We will support multi-screen including mobile, tablet and desktop. Please stay tuned for our new features.'
  },
  {
    icon: 'docs-icon-font-size',
    title: 'Support Markdown',
    intro:
      'WebApps UI has built-in support for Markdown meanwhile support basic Markdown for specific components.'
  }
]

const Section3 = props => (
  <div className="home__section3" id="home__section3">
    <div className="home__section3-background">
      <div className="home__section3-background-top" />
      <div className="home__section3-background-bottom" />
    </div>
    <div className="home__section3-content">
      <div className="home__section3-content-title">
        <h2>WebApps-UI component library features</h2>
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
              <Icon
                className="home__section3-content-list-item-icon"
                src={`/svg/icons.svg#${item.icon}`}
              />
              <p className="home__section3-content-list-item-title">
                {item.title}
              </p>
              <p className="home__section3-content-list-item-intro">
                {item.intro}
              </p>
            </div>
          ))}
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
)

export default Section3
