import React from 'react'
import Icon from 'earth-ui/lib/Icon'
import './index.less'

const details = [{
  icon: 'docs-icon-paint-palette',
  title: 'Design Patterns',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}, {
  icon: 'docs-icon-window-application-6',
  title: 'Layout Components',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}, {
  icon: 'docs-icon-chat-bubble-square-alert-2',
  title: 'Programatical Declarative Components',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}, {
  icon: 'docs-icon-modules-1',
  title: 'Markup Declarative Components',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}, {
  icon: 'docs-icon-devices',
  title: 'Responsive Design',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}, {
  icon: 'docs-icon-font-size',
  title: 'Support Markdown',
  intro: 'SocialAmp is our best-in-class social share features that extends your reach and donations further than ever.'
}]

const Detail = props => (
  <div className="home__details">
    <div className="home__details-background">
      <div className="home__details-background-top" />
      <div className="home__details-background-bottom" />
    </div>
    <div className="home__details-content">
      <div className="home__details-content-title">
        <h2>Earth-UI component library features</h2>
      </div>
      <div className="home__details-content-list">
        {details.map(item => (
          <div className="home__details-content-list-item" key={item.icon}>
            <Icon className="home__details-content-list-item-icon" src={`/svg/icons.svg#${item.icon}`} />
            <p className="home__details-content-list-item-title">{item.title}</p>
            <p className="home__details-content-list-item-intro">{item.intro}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Detail
