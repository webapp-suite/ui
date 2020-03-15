import { navigate } from '@reach/router'
import { Button, BackToTop } from '@webapps-ui/core-react'
import NProgress from 'nprogress'
import QueueAnim from 'rc-queue-anim'
import React from 'react'
import { backToTop } from '../../apps/config'
import Footer from './Footer'
import Header from './Header'
import './index.less'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { imageStatus: 'loading' }
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' })
    NProgress.done()
  }

  handleImageErrored = () => {
    this.setState({ imageStatus: 'failed' })
    NProgress.done()
  }

  render () {
    if (this.state.imageStatus === 'loading') {
      return (
        <img
          style={{ display: 'none' }}
          src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/home_banner.png"
          alt="background image"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
      )
    }
    return (
      <div className="home" id="home">
        <Header />
        <div className="home__banner">
          <div className="home__banner-background">
            {this.state.imageStatus === 'loaded' && (
              <img
                className="home__banner-background-image"
                src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/home_banner.png"
                alt="background image"
                draggable="false"
              />
            )}
          </div>
          <QueueAnim type="alpha" className="home__banner-center" delay={150}>
            <QueueAnim className="text-wrapper" key="text" type="bottom">
              <h1 key="h1">
                A minimalism style ui component library based on React.
              </h1>
              <p key="p">
                UI components range from simple buttons and icons to fancy
                datepickers and dropdown menus. The target audience is both
                developers and designers.
              </p>
              <div key="buttons">
                <Button
                  type="primary"
                  size="lg"
                  onClick={() => navigate('/apps/start/usage')}
                >
                  GET STARTED
                </Button>
                <a href="https://github.com/webapps-ui/core-react">
                  <Button type="primary" size="lg" ghost>
                    GITHUB
                  </Button>
                </a>
              </div>
            </QueueAnim>
          </QueueAnim>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
        <BackToTop {...backToTop} />
      </div>
    )
  }
}

export default Home
