import React, { PureComponent } from 'react'
import './index.less'

class Footer extends PureComponent {
  render () {
    return (
      <footer className="container">
        <div className="first-line">
          <div className="left">
            <h2>About WebApps-UI</h2>
            <div className="intro">
              A simple style react components for modern web applications
            </div>
          </div>
          <div className="left">
            <h2>Alipay reward</h2>
            <div className="pay">
              <img
                src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/qrcode_alipay.jpg"
                alt="qrcode_alipay"
              />
            </div>
          </div>
          <div className="left">
            <h2>Wechat reward</h2>
            <div className="pay">
              <img
                src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/qrcode_wechat.jpg"
                alt="qrcode_wechat"
              />
            </div>
          </div>
          <div className="right">
            <h2>Help</h2>
            <div className="help">
              <div>
                <a href="https://github.com/webapps-ui/core-react">Github</a>
              </div>
              <div>
                <a href="https://github.com/webapps-ui/core-react/releases">
                  Release Note
                </a>
              </div>
              <div>
                <a href="https://github.com/webapps-ui/core-react/issues/new">
                  Bug Report
                </a>
              </div>
              <div>
                <a href="https://g-explorer.slack.com">Slack Chat</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-line">
          <div className="left">
            <img
              className="footer__second-line-left-logo"
              src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/white-bg-webapps-ui-gray.png"
            />
          </div>
          <div className="right">
            <a href="http://beian.miit.gov.cn/">苏ICP备15056713号-2</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
