<h1 align="center">
    <br>
    <img width="430" src="https://user-images.githubusercontent.com/12554487/40153405-4784fd0e-59bc-11e8-893e-946b246b6076.jpg" alt="earth-ui logo">
    <br>
</h1>

> 一套基于ReactJS的极简风格的UI组件库。

[![build status][travis-image]][travis-url]
[![npm version][npm-version-image]][npm-version-url]
[![npm downloads][npm-downloads-image]][npm-downloads-url]
[![license][license-image]][license-url]

[English][en-url] | 简体中文

## 安装

```bash
$ npm install earth-ui
```


## 使用示例

```js
import { Button } from 'earth-ui';
ReactDOM.render(<Button />, mountNode);
```

引入样式：

```js
import 'earth-ui/dist/earth-ui.css';  // or 'earth-ui/dist/earth-ui.less'
```

## 组件全局配置

覆盖或扩展 `defaultProps` 即可，以 [Tooltip](https://ui.muwenzi.com/components/Tooltip) 为例:

```js
Tooltip.defaultProps = Object.assign(Tooltip.defaultProps || {}, {
  triggerMode: 'click'
})
```

命令式 API 模块：[message](https://ui.muwenzi.com/components/message)、[xhr](https://ui.muwenzi.com/components/xhr) 也支持全局配置，涉及 url 方式加载数据的组件以及 [Form](https://ui.muwenzi.com/components/Form) 均依赖 xhr，详细配置请参考其各自文档。

> 全局配置后，这些 API 会变成有状态的，即最终结果受配置影响，所以尽量一次性配置并向其它开发者说明。

## 本地开发

```bash
$ git clone git@github.com:G-Explorer/earth-ui.git
$ cd earth-ui
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:3003 ， 更多本地开发文档参见 https://github.com/G-Explorer/earth-ui/wiki/Development .

#### 编写一个新组件

```sh
npm run create MyComponent
```
查看：http://localhost:3003/components/MyComponent


## 更新日志

[CHANGELOG](https://ui.muwenzi.com/changelog)

## 贡献

欢迎大家参与贡献开源项目，贡献前请先阅读 [CONTRIBUTING.md](https://github.com/G-Explorer/earth-ui/blob/master/.github/CONTRIBUTING.md)。你可以通过 [Pull Requests](https://github.com/G-Explorer/earth-ui/pulls) 或者 [GitHub issues](https://github.com/G-Explorer/earth-ui/issues) 来贡献你的想法或代码。如果你想改进代码，请先查看 [Development Instructions](https://github.com/G-Explorer/earth-ui/wiki/Development) 祝coding愉快！:)

## License

MIT © [Kimi Gao](https://github.com/muwenzi)

[travis-url]: https://travis-ci.org/G-Explorer/earth-ui
[travis-image]: https://img.shields.io/travis/G-Explorer/earth-ui/master.svg?style=flat-square

[npm-version-url]: https://www.npmjs.com/package/earth-ui
[npm-version-image]: https://img.shields.io/npm/v/earth-ui.svg?style=flat-square

[npm-downloads-url]: https://www.npmjs.com/package/earth-ui
[npm-downloads-image]: https://img.shields.io/npm/dt/earth-ui.svg?style=flat-square

[license-url]: https://github.com/G-Explorer/earth-ui/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/G-Explorer/earth-ui.svg?style=flat-square

[en-url]: https://github.com/G-Explorer/earth-ui/blob/master/README.md
