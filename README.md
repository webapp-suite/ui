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

## Local development

### How to run it

```bash
git clone git@github.com:cosmos-x/earth-ui.git
cd earth-ui
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

- [Kimi Gao](https://github.com/muwenzi)
- [Robbie Han](https://github.com/USTC-Han)
- [Sherry Shen](https://github.com/Mylittlegirl)

## Changelog

We use [GitHub Releases][github-release-url] to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes on the [releases][release-url] page. You can also read [CHANGELOG.md][changelog-url] file.

## License

[![FOSSA Status][fossa-status-image]][fossa-status-url]

All files on the Earth UI github repository are subject to the [MIT][license-url] license.

[travis-image]: https://badgen.net/travis/cosmos-x/earth-ui?icon=travis&label=build
[codecov-image]: https://badgen.net/codecov/c/github/cosmos-x/earth-ui/?icon=codecov
[npm-version-image]: https://badgen.net/npm/v/earth-ui?icon=npm
[npm-downloads-image]: https://badgen.net/npm/dm/earth-ui
[dependencies-image]: https://badgen.net/david/dep/cosmos-x/earth-ui
[open-issues-image]: https://badgen.net/github/open-issues/cosmos-x/earth-ui
[open-prs-image]: https://badgen.net/github/open-prs/cosmos-x/earth-ui
[last-commit-image]: https://badgen.net/github/last-commit/cosmos-x/earth-ui
[contributors-image]: https://badgen.net/github/contributors/cosmos-x/earth-ui
[license-image]: https://badgen.net/npm/license/earth-ui
[license-scan-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcosmos-x%2Fearth-ui.svg?type=shield
[slack-image]: https://badgen.net/badge/icon/slack?icon=slack&label
[fossa-status-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcosmos-x%2Fearth-ui.svg?type=small

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
[license-scan-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcosmos-x%2Fearth-ui?ref=badge_shield
[dev-instructions-url]: https://github.com/cosmos-x/earth-ui/wiki/Local-development
[changelog-url]: https://github.com/cosmos-x/earth-ui/blob/master/CHANGELOG.md
[contributing-url]: https://github.com/cosmos-x/earth-ui/blob/master/.github/CONTRIBUTING.md
[slack-url]: https://g-explorer.slack.com
[fossa-status-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcosmos-x%2Fearth-ui?ref=badge_small
[github-release-url]: https://github.com/blog/1547-release-your-software
[release-url]: https://github.com/cosmos-x/earth-ui/releases
