<h1 align="center">
    <br>
    <img width="328" src="https://user-images.githubusercontent.com/12554487/100519844-68254480-31d5-11eb-9834-f926818d1aad.png" alt="webapp-suite ui logo">
    <br>
</h1>

<p align="center">
  A simple, modular and accessible react component library for modern web applications
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
npm i @webapp-suite/ui
```

- Import the component

```jsx
import { Button } from '@webapp-suite/ui';
import '@webapp-suite/ui/dist/index.min.css';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

> Note: @webapp-suite/ui supports ES6 tree shaking by default.

For more information, please refer to [Get Started](https://ui.muwenzi.com/apps/start/usage) in our documentation.

## Local development

### How to run it

```bash
git clone git@github.com:webapp-suite/ui.git
cd ui
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

## Changelog

We use [GitHub Releases][github-release-url] to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes on the [releases][release-url] page. You can also read [CHANGELOG.md][changelog-url] file.

## License

[![FOSSA Status][fossa-status-image]][fossa-status-url]

All files on the WebApp UI github repository are subjected to the [MIT][license-url] license.

[travis-image]: https://badgen.net/travis/webapp-suite/ui?icon=travis&label=build
[codecov-image]: https://badgen.net/codecov/c/github/webapp-suite/ui/?icon=codecov
[npm-version-image]: https://badgen.net/npm/v/@webapp-suite/ui?icon=npm
[npm-downloads-image]: https://badgen.net/npm/dm/@webapp-suite/ui
[dependencies-image]: https://badgen.net/david/dep/webapp-suite/ui
[open-issues-image]: https://badgen.net/github/open-issues/webapp-suite/ui
[open-prs-image]: https://badgen.net/github/open-prs/webapp-suite/ui
[last-commit-image]: https://badgen.net/github/last-commit/webapp-suite/ui
[contributors-image]: https://badgen.net/github/contributors/webapp-suite/ui
[license-image]: https://badgen.net/npm/license/@webapp-suite/ui
[license-scan-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwebapp-suite%2Fui.svg?type=shield
[slack-image]: https://badgen.net/badge/icon/slack?icon=slack&label
[fossa-status-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwebapp-suite%2Fui.svg?type=small

[travis-url]: https://travis-ci.com/webapp-suite/ui
[codecov-url]: https://codecov.io/gh/webapp-suite/ui
[npm-version-url]: https://www.npmjs.com/package/@webapp-suite/ui
[npm-downloads-url]: https://www.npmjs.com/package/@webapp-suite/ui
[dependencies-url]: https://david-dm.org/webapp-suite/ui
[open-issues-url]: https://github.com/webapp-suite/ui/issues
[open-prs-url]: https://github.com/webapp-suite/ui/pulls
[last-commit-url]: https://github.com/webapp-suite/ui/commits/master
[contributors-url]: https://github.com/webapp-suite/ui/graphs/contributors
[license-url]: https://github.com/webapp-suite/ui/blob/master/LICENSE
[license-scan-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fwebapp-suite%2Fui?ref=badge_shield
[dev-instructions-url]: https://github.com/webapp-suite/ui/wiki/Local-development
[changelog-url]: https://github.com/webapp-suite/ui/blob/master/CHANGELOG.md
[contributing-url]: https://github.com/webapp-suite/ui/blob/master/.github/CONTRIBUTING.md
[slack-url]: https://webapp-suite.slack.com
[fossa-status-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fwebapp-suite%2Fui?ref=badge_small
[github-release-url]: https://github.com/blog/1547-release-your-software
[release-url]: https://github.com/webapp-suite/ui/releases
