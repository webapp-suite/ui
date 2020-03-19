// import { navigate } from '@reach/router'
import { Row } from '@webapps-ui/core-react'
import QueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import React from 'react'
import Center from '../Center'
import './index.less'

const data = [
  {
    title: 'Efficiency',
    intro:
      'Easier to build the UI. Programmatic and markup styles are both supported.',
    to: '/start/usage',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M22 2c-0.3-0.3-0.6-0.4-1-0.3 -2.6 0.7-3.2 0.8-4.8 1.6l4.5 4.5c0.7-1.6 0.8-2.1 1.6-4.8C22.4 2.6 22.3 2.3 22 2z"
          className="a"
        />
        <path
          d="M12.3 6l-7.3 7.3 5.7 5.7 7.3-7.3c0.6-0.6 1.2-1.4 1.7-2.1L14.4 4.3C13.7 4.8 13 5.4 12.3 6z"
          className="a"
        />
        <path
          d="M3.6 16.1c-1.2 1.2-1.4 5.7-1.4 5.7s4.5-0.2 5.7-1.4c0.5-0.5 0.8-1.2 0.9-2L5.6 15.3C4.9 15.3 4.2 15.6 3.6 16.1z"
          className="a"
        />
        <polygon points="8.2 9.1 3.6 9.1 2.2 10.5 4.5 12.8 " className="a" />
        <polygon
          points="13.5 21.8 14.9 20.4 14.9 15.8 11.2 19.5 "
          className="a"
        />
      </svg>
    )
  },
  {
    title: 'Guideline',
    intro:
      'Applicable for both developers and designers, help keep apps in same tone.',
    to: '/components/Layout',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <polygon points="16.7 2 14 4.9 14 16.5 22.6 7.5 " className="a" />
        <path
          d="M10 2H4c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h6c1.1 0 2-0.9 2-2v-16C12 2.9 11.1 2 10 2zM4 20v-16h6l0 16H4z"
          className="a"
        />
        <rect x="5" y="6" width="4" height="4" className="a" />
        <rect x="5" y="12" width="4" height="4" className="a" />
        <circle cx="7" cy="18" r="1" className="a" />
        <polygon
          points="22.5 13 18.3 13.4 14 18 14 21 23.3 19.9 "
          className="a"
        />
      </svg>
    )
  },
  {
    title: 'Applications',
    intro:
      'Apps are more powerful and flexible than normal components or pages.',
    to: '/components/Icon-usage',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M10.4 14.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2c-0.1 0-0.1 0.1-0.1 0.1l4.1 2.2 5-2.3C10.5 14.1 10.5 14.1 10.4 14.1z"
          className="a"
        />
        <path
          d="M1 19c0 0.4 0.2 0.7 0.6 0.9l3.4 1.7v-4.3l-4-2.2V19z"
          className="a"
        />
        <path
          d="M6 22c0.2 0 0.3 0 0.4-0.1l4-2C10.8 19.7 11 19.4 11 19v-4l-5 2.3V22z"
          className="a"
        />
        <path
          d="M13 19c0 0.4 0.2 0.7 0.6 0.9l4 2C17.7 22 17.8 22 18 22V17.3l-5-2.3V19z"
          className="a"
        />
        <path
          d="M22.4 14.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2c0 0 0 0-0.1 0l5 2.3 4.1-2.2C22.5 14.2 22.5 14.1 22.4 14.1z"
          className="a"
        />
        <path
          d="M19 17.3v4.3l3.4-1.7C22.8 19.7 23 19.4 23 19v-3.9L19 17.3z"
          className="a"
        />
        <path
          d="M16.4 5.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2C7.5 5.1 7.5 5.1 7.5 5.1l5 2.3 4.1-2.2C16.5 5.2 16.5 5.1 16.4 5.1z"
          className="a"
        />
        <path
          d="M13 12.6l3.4-1.7C16.8 10.7 17 10.4 17 10V6.1l-4 2.2V12.6z"
          className="a"
        />
        <path
          d="M7 10c0 0.4 0.2 0.7 0.6 0.9l4 2C11.7 13 11.8 13 12 13V8.3l-5-2.3V10z"
          className="a"
        />
      </svg>
    )
  }
]

class Section2 extends React.PureComponent {
  state = {
    hoverKey: null
  }
  onMouseOver = key => {
    this.setState({
      hoverKey: key
    })
  }

  onMouseOut = () => {
    this.setState({
      hoverKey: null
    })
  }
  render () {
    return (
      <div className="home__section2" id="home__section2">
        <div className="home__section2-title">
          <h1>Overview</h1>
        </div>
        <Row className="home__section2-box">
          <Center>
            <ScrollOverPack
              playScale="0.4"
              targetId="home"
              location="home__section2"
            >
              <QueueAnim
                className="home__section2-box-container"
                key="queue"
                ease={['easeOutQuart', 'easeInQuart']}
                leaveReverse
              >
                {data.map(item => (
                  <div
                    className="home__section2-box-container-cell"
                    key={item.title}
                  >
                    <QueueAnim type="bottom">
                      {/* onClick={() => navigate(item.to)} */}
                      <div>
                        {item.svgIcon}
                        <h3>{item.title}</h3>
                        <p>{item.intro}</p>
                      </div>
                    </QueueAnim>
                  </div>
                ))}
              </QueueAnim>
            </ScrollOverPack>
          </Center>
        </Row>
      </div>
    )
  }
}

export default Section2
