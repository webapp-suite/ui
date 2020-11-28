# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.9.0](https://github.com/webapp-suite/ui/compare/v0.8.2...v0.9.0) (2020-05-17)


### Features

* **Button:** add htmlType prop for form submit button ([#278](https://github.com/webapp-suite/ui/issues/278)) ([03fbf72](https://github.com/webapp-suite/ui/commit/03fbf72334a852f6c18135ed7ca4927f019089d9))
* **Nav:** make setting button can be hidden ([#279](https://github.com/webapp-suite/ui/issues/279)) ([e9e121b](https://github.com/webapp-suite/ui/commit/e9e121bded0cc97076d35a7e18590a2358c3587d))


### Bug Fixes

* **button:** prevent button inheriting parent's line-height ([9b48c71](https://github.com/webapp-suite/ui/commit/9b48c718a2ff42740dcd7ed9b6008bd1544e32a7))
* **header:** fix button height issue in safari ([dc9d7d6](https://github.com/webapp-suite/ui/commit/dc9d7d6afe1bf13c850cd1e3173d49226d22f1b1))

### [0.8.2](https://github.com/webapp-suite/ui/compare/v0.8.0...v0.8.2) (2020-05-15)

### Bug Fixes

* **Nav:** render issue in safari when nav collapsed ([#276](https://github.com/webapp-suite/ui/issues/276)) ([244a891](https://github.com/webapp-suite/ui/commit/244a8915fad93e91bcf0be9bb0c37a20f828a22d)), closes [#272](https://github.com/webapp-suite/ui/issues/272)

### [0.8.1](https://github.com/webapp-suite/ui/compare/v0.8.0...v0.8.1) (2020-05-09)

### Bug Fixes

* **Nav:** make Nav can be collapsed after clicked item ([#271](https://github.com/webapp-suite/ui/issues/271)) ([7748b67](https://github.com/webapp-suite/ui/commit/7748b678816955b269772418c85083d07dd95bb3))

## [0.8.0](https://github.com/webapp-suite/ui/compare/v0.7.1...v0.8.0) (2020-04-28)


### Features

* **Header:** support children and polish style ([0cb4c7a](https://github.com/webapp-suite/ui/commit/0cb4c7ae16d2357ce8d41b19367fbc921305baf3))


### Bug Fixes

* **Button:** large button style issue ([687cefa](https://github.com/webapp-suite/ui/commit/687cefaa11a7df1053960ee8fd1e1928c906a3f9))
* **dialog:** make the dialog to the center of window ([fcfc20f](https://github.com/webapp-suite/ui/commit/fcfc20f161d2bd1b5057e41a5cbce27ac769fb5a))
* **docs:** button line-height caused by markdown ([153d289](https://github.com/webapp-suite/ui/commit/153d289a36f95b809e910a6427973699f83a1428))
* **Upload:** onUplading to onUploading ([3ad6871](https://github.com/webapp-suite/ui/commit/3ad68717a7a2caac98a9b10f313ac7476118642f))
* **website:** svg font and style issue ([3092009](https://github.com/webapp-suite/ui/commit/309200978af129eedaf4337cdf088f490b078330))

### [0.7.1](https://github.com/webapp-suite/ui/compare/v0.7.0...v0.7.1) (2020-02-20)


### Bug Fixes

* **deps:** react-custom-scrollbars missing ([c123603](https://github.com/webapp-suite/ui/commit/c123603819214f6910a301b462d97e82d1cff518))

## [0.7.0](https://github.com/webapp-suite/ui/compare/v0.6.0...v0.7.0) (2020-02-20)


### Features

* **input:** add new input component ([#77](https://github.com/webapp-suite/ui/issues/77)) ([653de93](https://github.com/webapp-suite/ui/commit/653de93744bab75d10688260220244c2ffce8b78)), closes [#62](https://github.com/webapp-suite/ui/issues/62)
* **Nav:** make the Nav can collapsed and opened ([#197](https://github.com/webapp-suite/ui/issues/197)) ([98aa328](https://github.com/webapp-suite/ui/commit/98aa328b606a41dac8bcb83f45672a9bf9cae16e))

## [0.6.0](https://github.com/webapp-suite/ui/compare/v0.5.0...v0.6.0) (2019-10-01)


### Features

* **Button:** add loading attribute to button to initialize a spinner ([#76](https://github.com/webapp-suite/ui/issues/76)) ([221b0c5](https://github.com/webapp-suite/ui/commit/221b0c5)), closes [#61](https://github.com/webapp-suite/ui/issues/61)

### Notable changes

* **webpack:**
  * use latest stable webpack@4 ([#56](https://github.com/webapp-suite/ui/pull/56))
  * support webpack tree shaking ([#63](https://github.com/webapp-suite/ui/pull/63))
* **deps:**
  * classlist: update to 2.0.0 ([#69](https://github.com/webapp-suite/ui/pull/69))
  * react-avatar-editor: update to 11.0.7 ([#69](https://github.com/webapp-suite/ui/pull/69))

<a name="0.5.0"></a>
# [0.5.0](https://github.com/webapp-suite/ui/compare/v0.4.1...v0.5.0) (2019-08-11)


### Features

* **Header:** rename HeaderBar to Header and add color prop ([5d5ce5f](https://github.com/webapp-suite/ui/commit/5d5ce5f))
* **Pager:** add Pager component ([#46](https://github.com/webapp-suite/ui/issues/46)) ([74216ec](https://github.com/webapp-suite/ui/commit/74216ec))
* **ToolBar:** add ToolBar for tabs just now ([76849fa](https://github.com/webapp-suite/ui/commit/76849fa))


### BREAKING CHANGES

* **Header:** HeaderBar was obsoleted and use Header instead



<a name="0.4.1"></a>
## [0.4.1](https://github.com/webapp-suite/ui/compare/v0.4.0...v0.4.1) (2019-05-14)


### Bug Fixes

* **Spinner:** text position issue in lg Spinner ([a5f6b57](https://github.com/webapp-suite/ui/commit/a5f6b57))


### BREAKING CHANGES

* **Spinner:** replace `loading` with `isLoading`



<a name="0.4.0"></a>
# [0.4.0](https://github.com/webapp-suite/ui/compare/v0.3.3...v0.4.0) (2019-03-04)


### Features
* **Aside:** add aside and refactor basic dialog by react portal ([#45](https://github.com/webapp-suite/ui/issues/45)) ([fc14984](https://github.com/webapp-suite/ui/commit/eda4016)), closes [#39](https://github.com/webapp-suite/ui/issues/39)
* **dialog/notification:** use colorful buttons and add accept type in dialog ([#41]((https://github.com/webapp-suite/ui/issues/41))) ([eda4016](https://github.com/webapp-suite/ui/commit/eda4016)), closes [#38](https://github.com/webapp-suite/ui/issues/38)
* **Button:** add accept warning and danger button type ([#40](https://github.com/webapp-suite/ui/issues/40)) ([fc14984](https://github.com/webapp-suite/ui/commit/fc14984)), closes [#37](https://github.com/webapp-suite/ui/issues/37)


### BREAKING CHANGES

* remove `primary` options in dialog



<a name="0.3.3"></a>
## [0.3.3](https://github.com/webapp-suite/ui/compare/v0.3.2...v0.3.3) (2019-01-23)



<a name="0.3.2"></a>
## [0.3.2](https://github.com/webapp-suite/ui/compare/v0.3.1...v0.3.2) (2019-01-23)


### Bug Fixes

* **babel/runtime:** move [@babel](https://github.com/babel)/runtime to dependencies ([fe0efa1](https://github.com/webapp-suite/ui/commit/fe0efa1))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/webapp-suite/ui/compare/v0.3.0...v0.3.1) (2019-01-23)


### Bug Fixes

* **AvatarClip:** adjust button text position ([d0b21e4](https://github.com/webapp-suite/ui/commit/d0b21e4))
* **ClearableInput:** adjust close button position in normal input ([a57f7fe](https://github.com/webapp-suite/ui/commit/a57f7fe))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/webapp-suite/ui/compare/v0.2.2...v0.3.0) (2019-01-05)


### Features

* **all components:** use new design and add some new components ([#27](https://github.com/webapp-suite/ui/issues/27)) ([71465b1](https://github.com/webapp-suite/ui/commit/71465b1))
* **dialog/notification:** add dialog and notification components ([#33](https://github.com/webapp-suite/ui/issues/33)) ([4cfa535](https://github.com/webapp-suite/ui/commit/4cfa535))
* **Spinner/Switch:** add spinner and switch components ([#30](https://github.com/webapp-suite/ui/issues/30)) ([e259a52](https://github.com/webapp-suite/ui/commit/e259a52))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/webapp-suite/ui/compare/v0.2.1...v0.2.2) (2018-09-11)


### Bug Fixes

* **gulpfile:** cannot use lib caused by prefixCls config ([7b37ef8](https://github.com/webapp-suite/ui/commit/7b37ef8))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/webapp-suite/ui/compare/v0.2.0...v0.2.1) (2018-09-11)


### Code Refactoring

* **site/Nav:** make navbar scroll separately on webpage and small tweaks in Nav ([#7](https://github.com/webapp-suite/ui/pull/7)) ([97efaa5](https://github.com/webapp-suite/ui/commit/97efaa5))
* **router:** use reach router and remove prop-types warnings in site console ([#26](https://github.com/webapp-suite/ui/pull/26)) ([e2902a2](https://github.com/webapp-suite/ui/commit/e2902a2))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/webapp-suite/ui/compare/v0.1.3...v0.2.0) (2018-08-20)


### Code Refactoring

* **Nav:** remove react-router and use new properties ([#2](https://github.com/webapp-suite/ui/issues/2)) ([5c5d1b7](https://github.com/webapp-suite/ui/commit/5c5d1b7))
* **all components:** use yandex BEM css code style([#1](https://github.com/webapp-suite/ui/issues/1)) ([1506538](https://github.com/webapp-suite/ui/commit/1506538))


### BREAKING CHANGES

* **Nav:** remove IndexNavItem and add SubNav, NavItemGroup



<a name="0.1.3"></a>
## [0.1.3](https://github.com/webapp-suite/ui/compare/v0.1.2...v0.1.3) (2018-05-30)


### Bug Fixes

* **package.json:** resolve dist dir missing when npm publish ([b7fe94d](https://github.com/webapp-suite/ui/commit/b7fe94d))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/webapp-suite/ui/compare/v0.1.1...v0.1.2) (2018-05-30)


### Bug Fixes

All those changes were referred to cannot import `@webapp-suite/ui` lib

* **utils:** move utils to components dir and renamed ([c4420b9](https://github.com/webapp-suite/ui/commit/c4420b9))
* **less:** small tweak in components less ([192bb9e](https://github.com/webapp-suite/ui/commit/192bb9e))
* **components:** remove redundant code in some components ([d4d947d](https://github.com/webapp-suite/ui/commit/d4d947d))
* **components:** use new url less file ([763f0dd](https://github.com/webapp-suite/ui/commit/763f0dd))
* **config/package:** new build command and gulpfile changed ([83cc5ef](https://github.com/webapp-suite/ui/commit/83cc5ef))
* **travis:** use dist and lib command ([7e72da6](https://github.com/webapp-suite/ui/commit/7e72da6))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/webapp-suite/ui/compare/v0.1.0...v0.1.1) (2018-05-24)


### Bug Fixes

* **site:Footer:** help links change ([c361d02](https://github.com/webapp-suite/ui/commit/c361d02))



<a name="0.1.0"></a>
# 0.1.0 (2018-05-22)


### Bug Fixes

* **AvatarClip:** modal style issue ([6d05a94](https://github.com/webapp-suite/ui/commit/6d05a94))
* **Modal:** close button of modal has no animation ([e405c84](https://github.com/webapp-suite/ui/commit/e405c84))
* npm run build failed in travis ([aea1332](https://github.com/webapp-suite/ui/commit/aea1332))


### Features

* **BackToTop:** add icon type in the button ([d0be042](https://github.com/webapp-suite/ui/commit/d0be042))
* **Form:** add width props ([265d3ea](https://github.com/webapp-suite/ui/commit/265d3ea))
* **Nav:** add width props ([a7402dd](https://github.com/webapp-suite/ui/commit/a7402dd))
* **Upload:** make button can more configurable ([5757e37](https://github.com/webapp-suite/ui/commit/5757e37))
* add npm run create ([b2eab0b](https://github.com/webapp-suite/ui/commit/b2eab0b))
* add ui library logo ([00ffaa4](https://github.com/webapp-suite/ui/commit/00ffaa4))
