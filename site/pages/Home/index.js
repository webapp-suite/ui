import React from 'react'
import QueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import NProgress from 'nprogress'
import { Link } from '@reach/router'
import Button from 'earth-ui/lib/Button'
import { Row, Col } from 'earth-ui/lib/Layout'
import Center from './Center'
import Header from './Header'
import Footer from './Footer'
import Feature from './Feature'
import Detail from './Detail'
import Code from 'widgets/Code'
import BackToTop from 'earth-ui/lib/BackToTop'
import { backToTop } from '../../apps/config'
import './index.less'

const code = `
import Button from 'earth-ui/lib/Button'

class App extends Component {

  handleClick = () => {
    console.log('hello, earth-ui')
  }

  render () {
    return <Button onClick={this.handleClick} />
  }
}`

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
          src="/img/home_banner.png"
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
            {this.state.imageStatus === 'loaded' &&
              <img className="home__banner-background-image"
                src="/img/home_banner.png"
                alt="background image"
                draggable="false"
              />}
          </div>
          <QueueAnim type="alpha" className="home__banner-center" delay={150}>
            <QueueAnim className="text-wrapper" key="text" type="bottom">
              <h1 key="h1">A minimalism style ui component library based on React.</h1>
              <p key="p">UI components range from simple buttons and icons to fancy datepickers and dropdown menus. The target audience is both developers and designers.</p>
              <div key="buttons">
                <Link to="/app/start/usage">
                  <Button type="primary" className="home__banner-btn">Get Started</Button>
                </Link>
                <a href="https://github.com/G-Explorer/earth-ui">
                  <Button type="secondary" className="home__banner-btn">Github</Button>
                </a>
              </div>
            </QueueAnim>
          </QueueAnim>
        </div>
        <div className="home__middle" id="home__middle">
          <Center>
            <Row gutter>
              <ScrollOverPack targetId="home" location="home__middle">
                <QueueAnim
                  className="intro__container"
                  key="code"
                  duration={600}
                  type="left"
                >
                  <Col col="md-10" key="code">
                    <Code className="home__middle-code">{code}</Code>
                  </Col>
                </QueueAnim>
              </ScrollOverPack>
              <Col col="md-4" />
              <ScrollOverPack targetId="home" location="home__middle">
                <QueueAnim
                  className="intro__container"
                  key="intro"
                  duration={600}
                  type="right"
                >
                  <Col col="md-10" className="home__middle-content" key="content">
                    <h2>Less is more</h2>
                    <p>A minimalist style in both visual design and component usage. It's more flexible by using declarative components including programatical and markup style in different cases.</p>
                  </Col>
                </QueueAnim>
              </ScrollOverPack>
            </Row>
          </Center>

        </div>
        <Feature />
        <Detail />
        <Footer />
        <BackToTop {...backToTop} />
      </div>
    )
  }
}

export default Home
