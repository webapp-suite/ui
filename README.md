<h1 align="center">
    <br>
    <img width="370" src="https://user-images.githubusercontent.com/12554487/76698462-23f12300-66de-11ea-9186-9d959bfb3d07.png" alt="webapps-ui logo">
    <br>
</h1>

<p align="center">
  Simple style react components for modern web apps
    <a href="https://react.webapps-ui.com">
      https://react.webapps-ui.com
    </a>
</p>

<div align="center">

[![Build Status][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Npm Version][npm-version-image]][npm-version-url]
[![Downloads Per Month][npm-downloads-image]][npm-downloads-url]
[![Dependencies][dependencies-image]][dependencies-url]  
[![Open PRs][open-prs-image]][open-prs-url]
[![Contributors][contributors-image]][contributors-url]
[![Slack][slack-image]][slack-url]
[![License][license-image]][license-url]
[![License Scan][license-scan-image]][license-scan-url]
[![Last Commit][last-commit-image]][last-commit-url]

</div>

## Basic usage

- Install the package

```bash
npm i @webapps-ui/core-react
```

- Import the component

```jsx
import { Button } from '@webapps-ui/core-react';
import '@webapps-ui/core-react/dist/index.min.css';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

> Note: @webapps-ui/core-react supports ES6 tree shaking by default.

For more information, please refer to [Get Started](https://ui.muwenzi.com/apps/start/usage) in our documentation.

## Local development

### How to run it

```bash
git clone git@github.com:webapps-ui/core-react.git
cd core-react
npm i
npm run dev
```

Open your browser and visit http://localhost:3003 , see more at [Development Instructions][dev-instructions-url] .

### How to create new component

```bash
npm run create MyComponent
```

Open: http://localhost:3003/apps/components/MyComponent

## Browser support

 | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --- | --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

---

## Contributing

We welcome all contributions. If you'd like to improve code, please read our [CONTRIBUTING.md][contributing-url] first, check out the [Development Instructions][dev-instructions-url] and feel free to create an [issue][open-issues-url] or submit a [pull request][open-prs-url].

### Maintainers

Welcome to join us if you have interest in this repo, please contact mrgaonju@gmail.com and we can discuss further.

- [Kimi Gao](https://github.com/Kimi-Gao)
- [Robbie Han](https://github.com/USTC-Han)
- [Sherry Shen](https://github.com/Mylittlegirl)

## Changelog

We use [GitHub Releases][github-release-url] to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes on the [releases][release-url] page. You can also read [CHANGELOG.md][changelog-url] file.

## License

[![FOSSA Status][fossa-status-image]][fossa-status-url]

All files on the WebApps UI github repository are subjected to the [MIT][license-url] license.

[travis-image]: https://badgen.net/travis/webapps-ui/core-react?icon=travis&label=build
[codecov-image]: https://badgen.net/codecov/c/github/webapps-ui/core-react/?icon=codecov
[npm-version-image]: https://badgen.net/npm/v/@webapps-ui/core-react?icon=npm
[npm-downloads-image]: https://badgen.net/npm/dm/@webapps-ui/core-react
[dependencies-image]: https://badgen.net/david/dep/webapps-ui/core-react
[open-issues-image]: https://badgen.net/github/open-issues/webapps-ui/core-react
[open-prs-image]: https://badgen.net/github/open-prs/webapps-ui/core-react
[last-commit-image]: https://badgen.net/github/last-commit/webapps-ui/core-react
[contributors-image]: https://badgen.net/github/contributors/webapps-ui/core-react
[license-image]: https://badgen.net/npm/license/@webapps-ui/core-react
[license-scan-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwebapps-ui%2Fcore-react.svg?type=shield
[slack-image]: https://badgen.net/badge/icon/slack?icon=slack&label
[fossa-status-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwebapps-ui%2Fcore-react.svg?type=small

[travis-url]: https://travis-ci.org/webapps-ui/core-react
[codecov-url]: https://codecov.io/gh/webapps-ui/core-react
[npm-version-url]: https://www.npmjs.com/package/@webapps-ui/core-react
[npm-downloads-url]: https://www.npmjs.com/package/@webapps-ui/core-react
[dependencies-url]: https://david-dm.org/webapps-ui/core-react
[open-issues-url]: https://github.com/webapps-ui/core-react/issues
[open-prs-url]: https://github.com/webapps-ui/core-react/pulls
[last-commit-url]: https://github.com/webapps-ui/core-react/commits/master
[contributors-url]: https://github.com/webapps-ui/core-react/graphs/contributors
[license-url]: https://github.com/webapps-ui/core-react/blob/master/LICENSE
[license-scan-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fwebapps-ui%2Fcore-react?ref=badge_shield
[dev-instructions-url]: https://github.com/webapps-ui/core-react/wiki/Local-development
[changelog-url]: https://github.com/webapps-ui/core-react/blob/master/CHANGELOG.md
[contributing-url]: https://github.com/webapps-ui/core-react/blob/master/.github/CONTRIBUTING.md
[slack-url]: https://webapps-ui.slack.com
[fossa-status-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fwebapps-ui%2Fcore-react?ref=badge_small
[github-release-url]: https://github.com/blog/1547-release-your-software
[release-url]: https://github.com/webapps-ui/core-react/releases
