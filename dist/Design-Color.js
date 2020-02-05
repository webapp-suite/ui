(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Design-Color"],{

/***/ "./site/apps/Design/Color/ColorPalettes.js":
/*!*************************************************!*\
  !*** ./site/apps/Design/Color/ColorPalettes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Palette */ \"./site/apps/Design/Color/Palette.js\");\n/**\n * ant-design v3.10.4\n * https://github.com/ant-design/ant-design\n * Copyright (c) 2015-present Alipay.com, https://www.alipay.com/, MIT LICENSE\n */\n\n\n\nvar ColorPalettes = function ColorPalettes() {\n  var colors = [{\n    name: 'red',\n    english: 'Red',\n    chinese: '薄暮',\n    description: '斗志、奔放'\n  }, {\n    name: 'orange',\n    english: 'Orange',\n    chinese: '日暮',\n    description: '温暖、欢快'\n  }, {\n    name: 'yellow',\n    english: 'Yellow',\n    chinese: '日出',\n    description: '出生、阳光'\n  }, {\n    name: 'green',\n    english: 'Green',\n    chinese: '极光绿',\n    description: '健康、创新'\n  }, {\n    name: 'blue',\n    english: 'Blue',\n    chinese: '拂晓蓝',\n    description: '包容、科技、普惠'\n  }, {\n    name: 'purple',\n    english: 'Purple',\n    chinese: '酱紫',\n    description: '优雅、浪漫'\n  }, {\n    name: 'pink',\n    english: 'Pink',\n    chinese: '粉红',\n    description: '明快、感性'\n  }, {\n    name: 'gray',\n    english: 'gray',\n    chinese: '亮青灰',\n    description: '轻盈、低调'\n  }, {\n    name: 'slate',\n    english: 'slate',\n    chinese: '板岩灰',\n    description: '神秘、突出'\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"color-palettes\"\n  }, colors.map(function (color) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: color.name,\n      color: color,\n      showTitle: true\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPalettes);\n\n//# sourceURL=webpack:///./site/apps/Design/Color/ColorPalettes.js?");

/***/ }),

/***/ "./site/apps/Design/Color/index.js":
/*!*****************************************!*\
  !*** ./site/apps/Design/Color/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ColorPalettes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPalettes */ \"./site/apps/Design/Color/ColorPalettes.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./site/apps/Design/Color/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"design__color\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorPalettes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n});\n\n//# sourceURL=webpack:///./site/apps/Design/Color/index.js?");

/***/ })

}]);