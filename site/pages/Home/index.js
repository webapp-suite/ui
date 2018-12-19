import React from 'react'
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

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__banner">
        <div className="home__banner-center">
          <h1>A minimalism style ui component library based on React.</h1>
          <p>UI components range from simple buttons and icons to fancy datepickers and dropdown menus. The target audience is both developers and designers.</p>
          <Link to="/start/usage">
            <Button type="primary" className="home__banner-btn">Get Started</Button>
          </Link>
          <a href="https://github.com/G-Explorer/earth-ui">
            <Button type="secondary" className="home__banner-btn">Github</Button>
          </a>
        </div>
      </div>
      <div className="home__middle">
        <Center>
          <Row gutter>
            <Col col="md-10">
              <Code className="home__middle-code">{code}</Code>
            </Col>
            <Col col="md-4" />
            <Col col="md-10" className="home__middle-content">
              <h2>Less is more</h2>
              <p>一套基于ReactJS的UI组件库，在视觉设计和组件使用上都崇信极简主义的风格。采用声明式和命令式组件在不同场景灵活搭配，更便捷，也更注重中前台的用户体验。</p>
            </Col>
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

export default HomePage
