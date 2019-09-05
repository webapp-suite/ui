<h1 align="center">
    <br>
    <img width="300" src="https://user-images.githubusercontent.com/12554487/50267761-49539a80-0463-11e9-805d-af44524abf47.png" alt="earth-ui logo">
    <br>
</h1>

<p align="center">
  Simple Style React UI Components for Web 
    <a href="https://ui.muwenzi.com">
      https://ui.muwenzi.com
    </a>
</p>

<div align="center">

[![Build Status][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Npm Version][npm-version-image]][npm-version-url]
[![Downloads Per Month][npm-downloads-image]][npm-downloads-url]
[![Dependencies][dependencies-image]][dependencies-url]  
[![Open Issues][open-issues-image]][open-issues-url]
[![Open PRs][open-prs-image]][open-prs-url]
[![Contributors][contributors-image]][contributors-url]
[![License][license-image]][license-url]
[![Slack][slack-image]][slack-url]
[![Last Commit][last-commit-image]][last-commit-url]

</div>

## ➤ How to use it

- Install the package

```bash
npm i earth-ui
```

- Import the component

```jsx
import { Button } from 'earth-ui';
import 'earth-ui/dist/earth-ui.min.css';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

> Note: earth-ui supports ES6 tree shaking by default.

For more information, please refer to [Get Started](https://ui.muwenzi.com/apps/start/usage) in our documentation.

## ➤ How to run it

```bash
git clone git@github.com:cosmos-x/earth-ui.git
cd earth-ui
npm i
npm run dev
```

Open your browser and visit http://localhost:3003 , see more at [Development Instructions][dev-instructions-url] .

## ➤ How to create new component

```bash
npm run create MyComponent
```
Open: http://localhost:3003/apps/components/MyComponent

## ➤ How to contribute

We welcome all contributions. Please read our [CONTRIBUTING.md][contributing-url] first. You can submit any ideas as [Pull Requests][open-prs-url] or as [GitHub issues][open-issues-url]. If you'd like to improve code, check out the [Development Instructions][dev-instructions-url] and have a good time! :)

---

## ➤ Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --- | --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## ➤ Changelog

[CHANGELOG][changelog-url]

## ➤ License

MIT © [Kimi Gao](https://github.com/muwenzi)

[travis-image]: https://badgen.net/travis/cosmos-x/earth-ui?icon=travis&label=build
[codecov-image]: https://codecov.io/gh/cosmos-x/earth-ui/branch/master/graph/badge.svg
[npm-version-image]: https://badgen.net/npm/v/earth-ui?icon=npm
[npm-downloads-image]: https://badgen.net/npm/dm/earth-ui
[dependencies-image]: https://badgen.net/david/dep/cosmos-x/earth-ui
[open-issues-image]: https://badgen.net/github/open-issues/cosmos-x/earth-ui
[open-prs-image]: https://badgen.net/github/open-prs/cosmos-x/earth-ui
[last-commit-image]: https://badgen.net/github/last-commit/cosmos-x/earth-ui
[contributors-image]: https://badgen.net/github/contributors/cosmos-x/earth-ui
[license-image]: https://badgen.net/npm/license/earth-ui
[slack-image]: https://badgen.net/badge/icon/slack?icon=slack&label

[travis-url]: https://travis-ci.org/cosmos-x/earth-ui
[codecov-url]: https://codecov.io/gh/cosmos-x/earth-ui
[npm-version-url]: https://www.npmjs.com/package/earth-ui
[npm-downloads-url]: https://www.npmjs.com/package/earth-ui
[dependencies-url]: https://david-dm.org/cosmos-x/earth-ui
[open-issues-url]: https://github.com/cosmos-x/earth-ui/issues
[open-prs-url]: https://github.com/cosmos-x/earth-ui/pulls
[last-commit-url]: https://github.com/cosmos-x/earth-ui/commits/master
[contributors-url]: https://github.com/cosmos-x/earth-ui/graphs/contributors
[license-url]: https://github.com/cosmos-x/earth-ui/blob/master/LICENSE
[dev-instructions-url]: https://github.com/cosmos-x/earth-ui/wiki/Local-development
[changelog-url]: https://github.com/cosmos-x/earth-ui/blob/master/CHANGELOG.md
[contributing-url]: https://github.com/cosmos-x/earth-ui/blob/master/.github/CONTRIBUTING.md
[slack-url]: https://g-explorer.slack.com
