import React from 'react'
import { Link } from 'react-router'
import Button from 'earth-ui/Button'
import { Row, Col } from 'earth-ui/Layout'
import Center from 'public/Center'
import Pre from 'public/Pre'
import Feature from './Feature'
import './index.less'

export default () => {
  const code = `import DatePicker from 'earth-ui/DatePicker'

class App extends Component {

  handleSelect(date) {
    console.log(date)
  }

  render() {
    return <DatePicker onSelect={this.handleSelect} />
  }
}`

  return (
    <div className="home">
      <div className="home__banner">
        <Center>
          <div className="home__banner-center">
            <h2>Earth UI - Earth Project React 组件库</h2>
            <h1>Earth UI Components Library</h1>
            <em>最新版本：v0.1.0</em>
            <Link to="/guide#install" className="home__banner-install">
              <Button>安装</Button>
            </Link>
            <Link to="/components" className="home__banner-start">
              <Button>文档</Button>
            </Link>
          </div>
        </Center>
      </div>

      <div className="home__middle">
        <Center>
          <Row gutter>
            <Col col="md-6" className="home__middle-left">
              <h2>2C端极简风格UI组件库</h2>
              <p>Galaxy-Explorer UI 结合 create-earth-app 脚手架可快速开发集单页面应用、组件化、可视化、大数据交互、权限管理、前后端分离等特性的企业级项目。</p>
            </Col>
            <Col col="md-6">
              <Pre className="home__middle-code">{code}</Pre>
            </Col>
          </Row>
        </Center>
      </div>

      <div className="home__features">
        <Center>
          <div className="home__features-head">
            <h1>组件库特点</h1>
            <p>Earth UI 抛弃了传统的组件封装方式，基于 React 组件开发思想，语义化 UI 的同时可作为一种数据类型自由传递，无论需求多么复杂，场景多么奇特，我们都可以搞定。</p>
          </div>
          <Row>
            <Feature title="多种类型组件" icon={require('./img/feature_0.png')}>
              采用声明式和命令式组件在不同场景灵活搭配，更加便捷
            </Feature>
            <Feature title="简单易用" icon={require('./img/feature_1.png')}>
              极简的属性和接口定义，尽量减少开发者的使用复杂度
            </Feature>
            <Feature title="生态完整" icon={require('./img/feature_2.png')}>
              搭配脚手架，摆脱繁琐的环境配置、重复的基础工作
            </Feature>
            <Feature title="完全免费" icon={require('./img/feature_3.png')}>
              基于 MIT 协议，免费开源
            </Feature>
          </Row>
        </Center>
      </div>

      <div className="home__bottom">
        <Center>
          <h1>站在巨人的肩膀上，无所不能</h1>
          <p>Galaxy-Explorer UI 汲取了很多优秀的社区资源，通过开源的形式来回馈大家。</p>
        </Center>
      </div>
    </div>
  )
}
