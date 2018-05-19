<h1 align="center">
    <br>
    <img width="430" src="https://user-images.githubusercontent.com/12554487/40153405-4784fd0e-59bc-11e8-893e-946b246b6076.jpg" alt="earth-ui logo">
    <br>
</h1>

> A minimalism-style UI component library and React-based implementation.

[![build status][travis-image]][travis-url]
[![npm version][npm-version-image]][npm-version-url]
[![npm downloads][npm-downloads-image]][npm-downloads-url]
[![license][license-image]][license-url]

English | [简体中文][zh-CN-url]

## Install

```bash
$ npm install earth-ui
```


## Usage

```js
import { Button } from 'earth-ui';
ReactDOM.render(<Button />, mountNode);
```

And import style manually:

```js
import 'earth-ui/dist/earth-ui.css';  // or 'earth-ui/dist/earth-ui.less'
```

## Global config

Just override or extend `defaultProps`, using [Tooltip](https://ui.muwenzi.com/components/Tooltip) as an example:

```js
Tooltip.defaultProps = Object.assign(Tooltip.defaultProps || {}, {
  triggerMode: 'click'
})
```

Imperative API modules: [message](https://ui.muwenzi.com/components/message), [xhr](https://ui.muwenzi.com/components/xhr) also support global config, the components which use url-mode to load data and [Form](https://ui.muwenzi.com/components/Form) are all dependent on xhr. Please refer to their respective documentation for detailed configuration.

> Those APIs will be stateful when global config is set and that's to say the final result is affected by the configuration. So try to configure it at a time and explain it to other developers.

## Development

```bash
$ git clone git@github.com:G-Explorer/earth-ui.git
$ cd earth-ui
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:3003 , see more at https://github.com/G-Explorer/earth-ui/wiki/Development .

#### Write a new component

```sh
npm run create MyComponent
```
Open: http://localhost:3003/components/MyComponent


## Changelog

[CHANGELOG](https://ui.muwenzi.com/changelog)

## Contributing

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/G-Explorer/earth-ui/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [Pull Requests](https://github.com/G-Explorer/earth-ui/pulls) or as [GitHub issues](https://github.com/G-Explorer/earth-ui/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/G-Explorer/earth-ui/wiki/Development) and have a good time! :)

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

[zh-CN-url]: https://github.com/G-Explorer/earth-ui/blob/master/README.zh-CN.md
