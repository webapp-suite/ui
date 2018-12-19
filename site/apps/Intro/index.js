import { navigate } from '@reach/router'
import React from 'react'
import './index.less'

const Home = () => {
  return (
    <div className="intro">
      <article className="intro__wrap">
        <div className="intro__box intro__desc">
          <section className="intro__desc">
            <div className="intro__container">
              <div className="intro__txt">
                <p>Earth UI 基于 React 组件开发思想，致力于打造开箱即用、体验友好、功能完善的UI组件库。在设计和开发上都崇信极简主义的风格，Less is more。</p>
              </div>
            </div>
          </section>
        </div>
        <div className="intro__box intro__box-code">
          <section>
            <div className="intro__container intro__head intro__developers">
              <div className="intro__txt">
                <h2>开发者</h2>
                <p>组件库使用简洁的属性和接口定义，尽量减少开发者的使用复杂度。采用声明式和命令式组件在不同场景灵活搭配，更加便捷。</p>
              </div>
              <div className="intro__img">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M20.6 11C19.5 6.6 18.5 2 12 2c-4.4 0-8 3.6-8 8v12h12v-3h1c1.1 0 2-0.9 2-2v-3h2.3C21.3 14 20.7 11.6 20.6 11zM10.7 12.3l-1.4 1.4 -3-3c-0.4-0.4-0.4-1 0-1.4l3-3 1.4 1.4L8.4 10 10.7 12.3zM17.7 10.7l-3 3 -1.4-1.4L15.6 10l-2.3-2.3 1.4-1.4 3 3C18.1 9.7 18.1 10.3 17.7 10.7z" />
                </svg>
              </div>
            </div>
          </section>
          <section>
            <div className="intro__container">
              <div className="intro__cell">
                <div onClick={() => navigate('/start/usage')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M22 2c-0.3-0.3-0.6-0.4-1-0.3 -2.6 0.7-3.2 0.8-4.8 1.6l4.5 4.5c0.7-1.6 0.8-2.1 1.6-4.8C22.4 2.6 22.3 2.3 22 2z"
                      className="a" />
                    <path d="M12.3 6l-7.3 7.3 5.7 5.7 7.3-7.3c0.6-0.6 1.2-1.4 1.7-2.1L14.4 4.3C13.7 4.8 13 5.4 12.3 6z"
                      className="a" />
                    <path
                      d="M3.6 16.1c-1.2 1.2-1.4 5.7-1.4 5.7s4.5-0.2 5.7-1.4c0.5-0.5 0.8-1.2 0.9-2L5.6 15.3C4.9 15.3 4.2 15.6 3.6 16.1z"
                      className="a" />
                    <polygon points="8.2 9.1 3.6 9.1 2.2 10.5 4.5 12.8 " className="a" />
                    <polygon points="13.5 21.8 14.9 20.4 14.9 15.8 11.2 19.5 " className="a" />
                  </svg>
                  <h3>开始</h3>
                  <p>如何安装、使用和配置 Earth UI，以及本地开发 Earth UI 组件等</p>
                </div>
              </div>
              <div className="intro__cell">
                <div onClick={() => navigate('/components/Layout')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="16.7 2 14 4.9 14 16.5 22.6 7.5 " className="a" />
                    <path
                      d="M10 2H4c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h6c1.1 0 2-0.9 2-2v-16C12 2.9 11.1 2 10 2zM4 20v-16h6l0 16H4z"
                      className="a" />
                    <rect x="5" y="6" width="4" height="4" className="a" />
                    <rect x="5" y="12" width="4" height="4" className="a" />
                    <circle cx="7" cy="18" r="1" className="a" />
                    <polygon points="22.5 13 18.3 13.4 14 18 14 21 23.3 19.9 " className="a" />
                  </svg>
                  <h3>布局组件</h3>
                  <p>如何使用顶栏、工具栏、低栏、导航栏和侧边栏等构建系统页面</p>
                </div>
              </div>
              <div className="intro__cell">
                <div onClick={() => navigate('/components/Icon-usage')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M10.4 14.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2c-0.1 0-0.1 0.1-0.1 0.1l4.1 2.2 5-2.3C10.5 14.1 10.5 14.1 10.4 14.1z"
                      className="a" />
                    <path d="M1 19c0 0.4 0.2 0.7 0.6 0.9l3.4 1.7v-4.3l-4-2.2V19z" className="a" />
                    <path d="M6 22c0.2 0 0.3 0 0.4-0.1l4-2C10.8 19.7 11 19.4 11 19v-4l-5 2.3V22z" className="a" />
                    <path d="M13 19c0 0.4 0.2 0.7 0.6 0.9l4 2C17.7 22 17.8 22 18 22V17.3l-5-2.3V19z" className="a" />
                    <path
                      d="M22.4 14.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2c0 0 0 0-0.1 0l5 2.3 4.1-2.2C22.5 14.2 22.5 14.1 22.4 14.1z"
                      className="a" />
                    <path d="M19 17.3v4.3l3.4-1.7C22.8 19.7 23 19.4 23 19v-3.9L19 17.3z" className="a" />
                    <path
                      d="M16.4 5.1l-4-2c-0.3-0.1-0.6-0.1-0.9 0l-4 2C7.5 5.1 7.5 5.1 7.5 5.1l5 2.3 4.1-2.2C16.5 5.2 16.5 5.1 16.4 5.1z"
                      className="a" />
                    <path d="M13 12.6l3.4-1.7C16.8 10.7 17 10.4 17 10V6.1l-4 2.2V12.6z" className="a" />
                    <path d="M7 10c0 0.4 0.2 0.7 0.6 0.9l4 2C11.7 13 11.8 13 12 13V8.3l-5-2.3V10z" className="a" />
                  </svg>
                  <h3>UI 组件</h3>
                  <p>构建系统页面的基础组件，包括Button、Form、Aside等</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="intro__box intro__box-design">
          <section>
            <div className="intro__container intro__head intro__designers">
              <div className="intro__img">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M20.6 11C19.5 6.6 18.5 2 12 2c-4.4 0-8 3.6-8 8v12h12v-3h1c1.1 0 2-0.9 2-2v-3h2.3C21.3 14 20.7 11.6 20.6 11zM10 18v-5h-3l5-7v5h3L10 18z" />
                </svg>
              </div>
              <div className="intro__txt">
                <h2>设计师</h2>
                <p>组件库可以帮助设计师做快速原型设计，由于其标准的规范准则，将使得设计风格更加统一，同时还可以对组件库做出修正和改进。</p>
              </div>
            </div>
          </section>
          <section>
            <div className="intro__container">
              <div className="intro__cell">
                <div onClick={() => navigate('/design/color')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M9.1 10.7c0.9-1 0.8-2.5-0.2-3.4C7.9 6.4 3.6 5.9 3.6 5.9s0.9 3.9 2.1 5C6.7 11.8 8.2 11.7 9.1 10.7z"
                      className="a" />
                    <path
                      d="M13 12.1c0-0.3 0.1-0.7 0.3-1.1 1.4 0.9 3.2 0.7 4.4-0.5 1.4-1.4 2.4-7.5 2.4-7.5s-5.8 0.9-7.4 2.6c-1 1-1.2 2.5-0.7 3.8C11.3 10.3 11 11.2 11 12.1V15h2V12.1z"
                      className="a" />
                    <path
                      d="M17.7 16H6.3c-0.3 0-0.6 0.1-0.8 0.4 -0.2 0.3-0.2 0.6-0.2 0.9l1.4 5C6.9 22.7 7.3 23 7.8 23h8.5c0.4 0 0.8-0.3 1-0.7l1.4-5c0.1-0.3 0-0.6-0.2-0.9C18.3 16.1 18 16 17.7 16z"
                      className="a" />
                  </svg>
                  <h3>价值观与原则</h3>
                  <p>判断设计好坏的内在标准和践行设计价值观过程中行之有效的向导或提示</p>
                </div>
              </div>
              <div className="intro__cell">
                <div onClick={() => navigate('/design/color')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M22.7 11.3l-2.9-2.9c-0.4-0.4-1-0.4-1.4 0C18 8.8 17.5 9 17 9c-1.1 0-2-0.9-2-2 0-0.5 0.2-1 0.6-1.4 0.4-0.4 0.4-1 0-1.4l-2.9-2.9c-0.4-0.4-1-0.4-1.4 0L9.1 3.5C8.4 2.6 7.2 2 6 2 3.8 2 2 3.8 2 6c0 1.2 0.6 2.4 1.5 3.1l-2.2 2.2C1.1 11.5 1 11.7 1 12s0.1 0.5 0.3 0.7l2.9 2.9c0.4 0.4 1 0.4 1.4 0C6 15.2 6.5 15 7 15c1.1 0 2 0.9 2 2 0 0.5-0.2 1-0.6 1.4 -0.2 0.2-0.3 0.4-0.3 0.7 0 0.3 0.1 0.5 0.3 0.7l2.9 2.9C11.5 22.9 11.7 23 12 23c0.3 0 0.5-0.1 0.7-0.3l2.2-2.2C15.6 21.4 16.8 22 18 22c2.2 0 4-1.8 4-4 0-1.2-0.6-2.4-1.5-3.1l2.2-2.2C23.1 12.3 23.1 11.7 22.7 11.3z" />
                  </svg>
                  <h3>模式</h3>
                  <p>在系统页面设计过程中常见问题的通用化的解决方案和思路</p>
                </div>
              </div>
              <div className="intro__cell">
                <div onClick={() => navigate('/design/color')}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M22.7 22.3l-5.4-5.4C19 15.1 20 12.7 20 10c0-5.5-4.5-10-10-10S0 4.5 0 10c0 5.5 4.5 10 10 10 2.1 0 4.1-0.7 5.8-1.8l5.5 5.5L22.7 22.3zM9 17.9V10H6v2H4V9c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v3h-2v-2h-3v7.9C10.7 18 10.3 18 10 18S9.3 18 9 17.9z"
                      className="a" />
                    <polygon points="11 21 9 21 9 22 7 22 7 24 13 24 13 22 11 22 " className="a" />
                  </svg>
                  <h3>视觉</h3>
                  <p>对价值观，设计原则和模式的进一步抽象和总结，包括色彩、排版和字体等</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

export default Home
