"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-list {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.sidebar-items {\n    list-style: none;\n    margin-top: 40px;\n    color:rgb(255, 255, 255);\n}\n\n.projects-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    height: 2em;\n    background-color: rgb(154, 76, 255);\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 1fr 10fr / auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 5% 95%;\n\n    margin: 15px 50px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 2 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 2 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    display: flex;\n    align-items: center;\n\n    margin-left: 8px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n\n.selected-project {\n    background-color: aqua;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-list {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.sidebar-items {\n    list-style: none;\n    margin-top: 40px;\n    color:rgb(255, 255, 255);\n}\n\n.projects-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    height: 2em;\n    background-color: rgb(154, 76, 255);\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 1fr 10fr / auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 5% 95%;\n\n    margin: 15px 50px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 2 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 2 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    display: flex;\n    align-items: center;\n\n    margin-left: 8px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n\n.selected-project {\n    background-color: aqua;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Projects */ "./src/modules/Projects.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




_modules_UI__WEBPACK_IMPORTED_MODULE_0__.UI.renderPage();

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = (() => {
    const projectArray = [{name: "Work", taskArray: [{title: "Do Work", description: "Gotta get that money", dueDate: "Tomorrow", priority: "high", complete: false}, {title: "Sleep", description: "ZZZzzzz", dueDate: "Tomorrow", priority: "highest", complete: false}]}, {name: "School", taskArray: [{title: "Do Homework", description: "get you smart up", dueDate: "Tomorrow", priority: "low af", complete: false}, {title: "Baseball Practice", description: "hittin' bombs", dueDate: "Tomorrow", priority: "medium", complete: false}]}];

    const projectFactory = (name) => {
        let taskArray = [];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
        console.log(projectArray)
    }

    return { projectFactory, createProject, projectArray }
})();

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");


const Task = (() => {

    const taskFactory = (title, description, dueDate, priority, complete) => {
        return { title, description, dueDate, priority, complete }
    };

    function createTask(taskName, project) {
        const newTask = taskFactory(taskName, "hi", "hi", "hi", false);
        console.log(project.taskArray)      
        project.taskArray.push(newTask);
        console.log(project.taskArray)
    }

    function printTask(task) {
        console.log(task)
    };

    function addTaskToList(project, task){
        project.taskList.push(task);
    };

    function updateTaskTitle(task, newTitle) {
        task.title = newTitle;
    };

    function updateTaskDescription(task, newDescription) {
        task.description = newDescription;
    };

    function updateTaskDueDate(task, newDueDate) {
        task.dueDate = newDueDate;
    };

    function updateTaskPriority(task, newPriority) {
        task.priority = newPriority;
    };

    function updateComplete(task) {
        task.complete = !task.complete;
    }
    return { taskFactory, createTask, updateComplete }
})();


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



const UI = (() => {
    let displayedProject = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0];
    let sidebarToggle = false;
    
    function renderHeader() {
        let headerContainer = document.createElement("div");
        headerContainer.id = "header-container";
        headerContainer.classList.add("header-container");
        document.body.appendChild(headerContainer);

        headerContainer.innerHTML = `
        <h1 class="header-text">To-Do List</h1>
        `
    }

    function renderMainContainer() {
        let mainContainer = document.createElement("div");
        mainContainer.id = "main-container";
        mainContainer.classList.add("main-container");
        document.body.appendChild(mainContainer);

        mainContainer.innerHTML = `
        <div class="project-list">
            <div class="sidebar-items">
                <div id="projects-bar" class="projects-bar">
                    <p class="sidebar-item">Projects</p>
                    <svg class="add-project-button" id="add-project-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                </div>
                <div class="project-list" id="project-list">
                </div>
            </div>
        </div>
        <div id="task-container" class="task-container">
            <div class="task-header">
                <h2>Tasks</h2>
                <svg class="add-task-button" id="add-task-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </div>
            <div id="task-list" class="task-list">
            </div>
        </div>
        `

       document.getElementById('add-project-button').addEventListener('click', createProjectModal)
       document.getElementById('add-task-button').addEventListener('click', createTaskModal)
    
       initTasks();
    }

    function renderProjects(projectArray) {
        let projectList = document.getElementById("project-list");
        projectList.innerHTML = '';
        for (let i = 0; i < projectArray.length; i++) {
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("project-div")
            projectDiv.onclick = () => {
                sidebarToggle = false;
                displayedProject = projectArray[i]
                renderTasks(projectArray[i]);
                displayedProject = projectArray[i];
            };
            let individualProject = document.createElement("li");
            individualProject.innerHTML = projectArray[i].name;
            individualProject.classList.add("project-text")
            projectDiv.appendChild(individualProject);

            projectList.appendChild(projectDiv)
            highlightProject(projectArray, projectDiv, displayedProject.taskArray);
        }
    }

    function highlightProject(projectArray, projectElement, taskList) {
        for (let project in projectArray) {
            if (projectArray[project].taskArray === taskList) {
                projectElement.classList.add("selected-project");
            } else {
                console.log(projectArray, projectElement, taskList)
                projectElement.classList.remove("selected-project");
            }
        }
    };

    function initTasks() {
        if (_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0]) {
            let taskList = document.getElementById("task-list");
            renderTasks(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0]);
        }
    };

    function renderTasks(project) {
        let taskList = document.getElementById("task-list");
        taskList.innerHTML = '';

        let itemContainer = document.createElement("div");
        itemContainer.id = "item-container";
        itemContainer.classList.add("item-container");

        let taskListSection = document.getElementById("task-list");
        let taskSidebar = document.createElement("div");
        taskSidebar.id = "task-sidebar";
        taskSidebar.classList.add("task-sidebar", "task-sidebar-hidden");
        taskListSection.appendChild(taskSidebar);

        if (!project.taskArray[0]) {
            let noTaskMessage = document.createElement("p");
            noTaskMessage.innerText = "No tasks yet!";
            noTaskMessage.classList.add("notask-message");
            taskList.appendChild(noTaskMessage);
            return
        };

        for (let i = 0; i < (project.taskArray).length; i++) {
            let taskItem = document.createElement("div");
            taskItem.classList.add("task-item")
            if (project.taskArray[i].complete === true) {
                taskItem.classList.add("task-complete");
            };
            let taskInfo = document.createElement("div");
            taskInfo.classList.add("task-info-container");
            taskInfo.innerHTML = `
            <div class="task-name" id="task-name"><p>${project.taskArray[i].title}</p></div>
            <div class="task-desc" id="task-desc"><p>${project.taskArray[i].description}</p></div>
            <div class="task-prio" id="task-prio"><p>${project.taskArray[i].priority}</p></div>
            <div class="task-date" id="task-date"><p>${project.taskArray[i].dueDate}</p></div>
            `
            taskInfo.onclick = () => {
                if ((sidebarToggle === true) && (project.taskArray[i].title !== document.getElementById("side-title").innerHTML)) {
                    setSidebarInfo(project.taskArray[i], taskSidebar);
                } else {
                    toggleTaskSidebar(project.taskArray[i], taskSidebar);
                }
            }

            let checkDiv = document.createElement("div");
            checkDiv.id = "task-checkbox"
            checkDiv.classList.add("task-checkbox")

            let completeCheck = document.createElement("input")
            completeCheck.id="checkbox" + i
            completeCheck.type = "checkbox"
            completeCheck.checked = project.taskArray[i].complete;
            completeCheck.onchange = () => {
                project.taskArray[i].complete = !project.taskArray[i].complete
                if (document.getElementById("side-title")) {
                    if (project.taskArray[i].title === document.getElementById("side-title").innerHTML) {
                        setSidebarInfo(project.taskArray[i], taskSidebar)
                    }
                }
                console.log(project.taskArray[i])
                console.log((document.getElementById("checkbox" + i)).checked)
                if (project.taskArray[i].complete === true) {
                    taskItem.classList.add("task-complete")
                    _Task__WEBPACK_IMPORTED_MODULE_1__.Task.updateComplete(document.getElementById("checkbox" + i))
                } else {
                    taskItem.classList.remove("task-complete")
                    _Task__WEBPACK_IMPORTED_MODULE_1__.Task.updateComplete(document.getElementById("checkbox" + i))
                };

            }
            checkDiv.appendChild(completeCheck);

            taskItem.appendChild(checkDiv);
            taskItem.appendChild(taskInfo);

            itemContainer.appendChild(taskItem);
        }
        taskList.appendChild(itemContainer);
    };

    // function renderSidebar(task) {
    //     let sidebar = document.getElementById("task-sidebar")
    //     sidebar.innerHTML= `
    //         <div class="sidebar-info" id="sidebar-info">
    //             <h2>${task.title}</h2>
    //             <p>${task.description}</h2>
    //             <p>${task.dueDate}</h2>
    //             <p>${task.priority}</h2>
    //             <p>Status: ${taskStatus}</h2>
    //         </div>
    //     `
    // }

    function setSidebarInfo(task, sidebarElement) {
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        sidebarElement.innerHTML= `
            <div class="sidebar-info" id="sidebar-info">
                <h2 id="side-title">${task.title}</h2>
                <p>${task.description}</h2>
                <p>${task.dueDate}</h2>
                <p>${task.priority}</h2>
                <p>Status: ${taskStatus}</h2>
            </div>
        `
    }

    function toggleTaskSidebar(task, sidebarElement) {
        let itemContainer = document.getElementById("item-container");
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        sidebarElement.innerHTML= `
            <div class="sidebar-info" id="sidebar-info">
                <h2 id="side-title">${task.title}</h2>
                <p>${task.description}</h2>
                <p>${task.dueDate}</h2>
                <p>${task.priority}</h2>
                <p>Status: ${taskStatus}</h2>
            </div>
        `
        if (sidebarToggle === false) {
            sidebarElement.classList.remove("task-sidebar-hidden")
            sidebarElement.classList.add("task-sidebar-visible")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = (e) => {
                e.stopPropagation();
                console.log("open")
            }
        } else {
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = () => {
            }
        }
    }

    function createProjectModal() {
        let projectName = prompt("Project name?");
        if (projectName === "" || projectName === null) {
            return;
        }
        _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.createProject(projectName);
        renderProjects(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray);
        renderTasks(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray.length - 1)])
    };

    function createTaskModal() {
        let taskName = prompt("Task name?");
        if (taskName === "" || taskName === null) {
            return;
        }
        _Task__WEBPACK_IMPORTED_MODULE_1__.Task.createTask(taskName, displayedProject);
        renderTasks(displayedProject);
    };

    function renderPage() {
        renderHeader();
        renderMainContainer();
        renderProjects(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray);
    }

    return { renderPage }
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsdUJBQXVCLEdBQUcsZ0JBQWdCLGNBQWMsZUFBZSxnQ0FBZ0MsR0FBRyw4QkFBOEIsd0VBQXdFLHVCQUF1QixnQ0FBZ0MsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLHFCQUFxQix3Q0FBd0MseUJBQXlCLG9CQUFvQiw0QkFBNEIsR0FBRyxzQ0FBc0Msb0JBQW9CLG9CQUFvQixxQkFBcUIseUJBQXlCLDBCQUEwQiw4Q0FBOEMsMERBQTBELG1DQUFtQyxHQUFHLDhDQUE4QywwQkFBMEIsR0FBRyxtQ0FBbUMsZ0RBQWdELEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsZ0JBQWdCLDZCQUE2QixHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyxrQkFBa0IsZ0NBQWdDLHNCQUFzQixxQkFBcUIsR0FBRyx1QkFBdUIsb0JBQW9CLDBCQUEwQixvQkFBb0IsdUJBQXVCLDBDQUEwQyxHQUFHLHFCQUFxQixvQkFBb0Isb0NBQW9DLHVCQUF1QixHQUFHLG1CQUFtQiwrQkFBK0IsMkNBQTJDLEdBQUcsZ0JBQWdCLCtCQUErQixrQ0FBa0MsR0FBRyxvQkFBb0IsdUJBQXVCLHVCQUF1QiwrQkFBK0IsR0FBRyxtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsMEJBQTBCLGtCQUFrQiwwQ0FBMEMsR0FBRyxtQkFBbUIsd0JBQXdCLGdDQUFnQyxzQkFBc0IsR0FBRyx5QkFBeUIsbUJBQW1CLGtCQUFrQix5QkFBeUIsd0JBQXdCLDBCQUEwQixHQUFHLDZCQUE2QixzQkFBc0IsK0JBQStCLHNCQUFzQixHQUFHLHNCQUFzQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLEdBQUcsMEJBQTBCLHNCQUFzQiwrQkFBK0Isc0JBQXNCLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsNkNBQTZDLHVCQUF1Qix3Q0FBd0Msa0JBQWtCLEdBQUcsd0JBQXdCLDJDQUEyQyxzQkFBc0IsR0FBRyx3QkFBd0IseUNBQXlDLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLG1CQUFtQix3QkFBd0Isc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQiwwQ0FBMEMsZ0NBQWdDLCtCQUErQix5QkFBeUIsR0FBRyxnQkFBZ0IsK0JBQStCLDBCQUEwQiwrQkFBK0IsR0FBRyxxQkFBcUIsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxnQkFBZ0Isb0JBQW9CLG1DQUFtQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsaUJBQWlCLG1CQUFtQixpQkFBaUIsb0NBQW9DLGlCQUFpQixHQUFHLDBCQUEwQixpQ0FBaUMsc0JBQXNCLG1EQUFtRCxHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsZ0JBQWdCLCtCQUErQixvQkFBb0IsMEJBQTBCLHdCQUF3QixHQUFHLGdCQUFnQiwrQkFBK0Isb0JBQW9CLDBCQUEwQix3QkFBd0IsR0FBRyxnQkFBZ0IsK0JBQStCLG9CQUFvQiwwQkFBMEIsd0JBQXdCLEdBQUcsZ0JBQWdCLCtCQUErQixvQkFBb0IsMEJBQTBCLDRCQUE0QixHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLHlCQUF5QixHQUFHLG9CQUFvQixrQkFBa0IscUNBQXFDLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQixpQkFBaUIsc0JBQXNCLGVBQWUsdUJBQXVCLGtDQUFrQyxnQ0FBZ0Msb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixtQkFBbUIsd0JBQXdCLEdBQUcsMEJBQTBCLGlCQUFpQixnQ0FBZ0Msd0NBQXdDLEdBQUcsMkJBQTJCLGlCQUFpQixnQ0FBZ0Msd0NBQXdDLEdBQUcsdUJBQXVCLDZCQUE2QixHQUFHLE9BQU8saUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVks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QUEyQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBZTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBb0I7QUFDM0M7O0FBRUEsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjEwZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGxpIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmE6bGluayB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5hOnZpc2l0ZWQgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTpob3ZlciB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmFjdGl2ZSB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA3NiwgMjU1KTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciA0ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDkydmg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnByb2plY3RzLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA3NiwgMjU1KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCA0MiwgNDIpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG5cXG4ucHJvamVjdC10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgLyBhdXRvO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbn1cXG5cXG4ubm90YXNrLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwJSAvIDUlIDk1JTtcXG5cXG4gICAgbWFyZ2luOiAxNXB4IDUwcHg7XFxuICAgIGJvcmRlcjogI2M1OTlmZiBzb2xpZCAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTk5ZmY7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eS40cyBsaW5lYXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIC0xIC8gLTE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDUwJSA1MCUgLyAyMHB4IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLXByaW8ge1xcbiAgICBncmlkLWFyZWE6IDEgLyA4IC8gMiAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDggLyAzIC8gOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZSB7XFxuICAgIG9wYWNpdHk6IC4zO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC43cyBsaW5lYXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYm9yZGVyOiAjYTE1OWZmIHNvbGlkIDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcXG4gICAgaGVpZ2h0OiA4MS41JTtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnNpZGViYXItaW5mbyB7XFxuICAgIHdpZHRoOiAzNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XFxufVxcblxcbi50YXNrLXNpZGViYXItaGlkZGVuIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgYm9yZGVyOiAjNTA1MDUwIHNvbGlkIDdweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stc2lkZWJhci12aXNpYmxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAjOWE0Y2ZmIHNvbGlkIDdweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFD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QUN4QixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixRQUFRO0lBQ1IsZ0JBQWdCOztJQUVoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5Qjs7SUFFekIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5Qjs7SUFFekIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgd2lkdGg6IDEuMTVlbTtcXG4gICAgaGVpZ2h0OiAxLjE1ZW07XFxuICAgIGJvcmRlcjogMC4xMGVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBsaSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hOmxpbmsgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuYTp2aXNpdGVkIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcblxcbmE6aG92ZXIgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTphY3RpdmUgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDAgNDBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgNzYsIDI1NSk7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxZnIgNGZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MnZoO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTQsIDExNCk7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuLnNpZGViYXItaXRlbXMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgNzYsIDI1NSk7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGl2OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgNDIsIDQyKTtcXG59XFxuXFxuLnByb2plY3QtZGl2Om50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIC8gYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXG59XFxuXFxuLm5vdGFzay1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogODBweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMCUgLyA1JSA5NSU7XFxuXFxuICAgIG1hcmdpbjogMTVweCA1MHB4O1xcbiAgICBib3JkZXI6ICNjNTk5ZmYgc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU5OWZmO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkuNHMgbGluZWFyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAtMSAvIC0xO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA1MCUgNTAlIC8gMjBweCByZXBlYXQoNywgMWZyKTtcXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0gPiBkaXYgPiBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1wcmlvIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gOCAvIDIgLyA5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IDIgLyA4IC8gMyAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGUge1xcbiAgICBvcGFjaXR5OiAuMztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuN3MgbGluZWFyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGJvcmRlcjogI2ExNTlmZiBzb2xpZCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XFxuICAgIGhlaWdodDogODEuNSU7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5zaWRlYmFyLWluZm8ge1xcbiAgICB3aWR0aDogMzQwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xcbn1cXG5cXG4udGFzay1zaWRlYmFyLWhpZGRlbiB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGJvcmRlcjogIzUwNTA1MCBzb2xpZCA3cHg7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLXNpZGViYXItdmlzaWJsZSB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogIzlhNGNmZiBzb2xpZCA3cHg7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL21vZHVsZXMvVUlcIlxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdHNcIlxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuVUkucmVuZGVyUGFnZSgpOyIsImV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbe25hbWU6IFwiV29ya1wiLCB0YXNrQXJyYXk6IFt7dGl0bGU6IFwiRG8gV29ya1wiLCBkZXNjcmlwdGlvbjogXCJHb3R0YSBnZXQgdGhhdCBtb25leVwiLCBkdWVEYXRlOiBcIlRvbW9ycm93XCIsIHByaW9yaXR5OiBcImhpZ2hcIiwgY29tcGxldGU6IGZhbHNlfSwge3RpdGxlOiBcIlNsZWVwXCIsIGRlc2NyaXB0aW9uOiBcIlpaWnp6enpcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJoaWdoZXN0XCIsIGNvbXBsZXRlOiBmYWxzZX1dfSwge25hbWU6IFwiU2Nob29sXCIsIHRhc2tBcnJheTogW3t0aXRsZTogXCJEbyBIb21ld29ya1wiLCBkZXNjcmlwdGlvbjogXCJnZXQgeW91IHNtYXJ0IHVwXCIsIGR1ZURhdGU6IFwiVG9tb3Jyb3dcIiwgcHJpb3JpdHk6IFwibG93IGFmXCIsIGNvbXBsZXRlOiBmYWxzZX0sIHt0aXRsZTogXCJCYXNlYmFsbCBQcmFjdGljZVwiLCBkZXNjcmlwdGlvbjogXCJoaXR0aW4nIGJvbWJzXCIsIGR1ZURhdGU6IFwiVG9tb3Jyb3dcIiwgcHJpb3JpdHk6IFwibWVkaXVtXCIsIGNvbXBsZXRlOiBmYWxzZX1dfV07XG5cbiAgICBjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgdGFza0FycmF5IH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxuICAgIH1cblxuICAgIHJldHVybiB7IHByb2plY3RGYWN0b3J5LCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0QXJyYXkgfVxufSkoKTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdHNcIlxuXG5leHBvcnQgY29uc3QgVGFzayA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLCBcImhpXCIsIFwiaGlcIiwgXCJoaVwiLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza0FycmF5KSAgICAgIFxuICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tBcnJheSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmludFRhc2sodGFzaykge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrVG9MaXN0KHByb2plY3QsIHRhc2spe1xuICAgICAgICBwcm9qZWN0LnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tUaXRsZSh0YXNrLCBuZXdUaXRsZSkge1xuICAgICAgICB0YXNrLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrLCBuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tEdWVEYXRlKHRhc2ssIG5ld0R1ZURhdGUpIHtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFza1ByaW9yaXR5KHRhc2ssIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGUodGFzaykge1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7XG4gICAgfVxuICAgIHJldHVybiB7IHRhc2tGYWN0b3J5LCBjcmVhdGVUYXNrLCB1cGRhdGVDb21wbGV0ZSB9XG59KSgpO1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdHMnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9UYXNrJ1xuXG5leHBvcnQgY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGxldCBkaXNwbGF5ZWRQcm9qZWN0ID0gUHJvamVjdC5wcm9qZWN0QXJyYXlbMF07XG4gICAgbGV0IHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuaWQgPSBcImhlYWRlci1jb250YWluZXJcIjtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyLXRleHRcIj5Uby1EbyBMaXN0PC9oMT5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1haW5Db250YWluZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWJhclwiIGNsYXNzPVwicHJvamVjdHMtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lkZWJhci1pdGVtXCI+UHJvamVjdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhZGQtcHJvamVjdC1idXR0b25cIiBpZD1cImFkZC1wcm9qZWN0LWJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIiBpZD1cInByb2plY3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGFzay1jb250YWluZXJcIiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VGFza3M8L2gyPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIiBpZD1cImFkZC10YXNrLWJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrLWxpc3RcIiBjbGFzcz1cInRhc2stbGlzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0TW9kYWwpXG4gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFza01vZGFsKVxuICAgIFxuICAgICAgIGluaXRUYXNrcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RBcnJheSkge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICAgICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKVxuICAgICAgICAgICAgcHJvamVjdERpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdEFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBpbmRpdmlkdWFsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGluZGl2aWR1YWxQcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgaW5kaXZpZHVhbFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGV4dFwiKVxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpbmRpdmlkdWFsUHJvamVjdCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgICAgICAgICBoaWdobGlnaHRQcm9qZWN0KHByb2plY3RBcnJheSwgcHJvamVjdERpdiwgZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0UHJvamVjdChwcm9qZWN0QXJyYXksIHByb2plY3RFbGVtZW50LCB0YXNrTGlzdCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RBcnJheSkge1xuICAgICAgICAgICAgaWYgKHByb2plY3RBcnJheVtwcm9qZWN0XS50YXNrQXJyYXkgPT09IHRhc2tMaXN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSwgcHJvamVjdEVsZW1lbnQsIHRhc2tMaXN0KVxuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGluaXRUYXNrcygpIHtcbiAgICAgICAgaWYgKFByb2plY3QucHJvamVjdEFycmF5WzBdKSB7XG4gICAgICAgICAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKFByb2plY3QucHJvamVjdEFycmF5WzBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1Db250YWluZXIuaWQgPSBcIml0ZW0tY29udGFpbmVyXCI7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCB0YXNrTGlzdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICAgICAgbGV0IHRhc2tTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1NpZGViYXIuaWQgPSBcInRhc2stc2lkZWJhclwiO1xuICAgICAgICB0YXNrU2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidGFzay1zaWRlYmFyXCIsIFwidGFzay1zaWRlYmFyLWhpZGRlblwiKTtcbiAgICAgICAgdGFza0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tTaWRlYmFyKTtcblxuICAgICAgICBpZiAoIXByb2plY3QudGFza0FycmF5WzBdKSB7XG4gICAgICAgICAgICBsZXQgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbm9UYXNrTWVzc2FnZS5pbm5lclRleHQgPSBcIk5vIHRhc2tzIHlldCFcIjtcbiAgICAgICAgICAgIG5vVGFza01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm5vdGFzay1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0LnRhc2tBcnJheSkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpXG4gICAgICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2staW5mby1jb250YWluZXJcIik7XG4gICAgICAgICAgICB0YXNrSW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrLW5hbWVcIj48cD4ke3Byb2plY3QudGFza0FycmF5W2ldLnRpdGxlfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2stZGVzY1wiPjxwPiR7cHJvamVjdC50YXNrQXJyYXlbaV0uZGVzY3JpcHRpb259PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJpb1wiIGlkPVwidGFzay1wcmlvXCI+PHA+JHtwcm9qZWN0LnRhc2tBcnJheVtpXS5wcmlvcml0eX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIj48cD4ke3Byb2plY3QudGFza0FycmF5W2ldLmR1ZURhdGV9PC9wPjwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgdGFza0luZm8ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHNpZGViYXJUb2dnbGUgPT09IHRydWUpICYmIChwcm9qZWN0LnRhc2tBcnJheVtpXS50aXRsZSAhPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLmlubmVySFRNTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2lkZWJhckluZm8ocHJvamVjdC50YXNrQXJyYXlbaV0sIHRhc2tTaWRlYmFyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYXNrU2lkZWJhcihwcm9qZWN0LnRhc2tBcnJheVtpXSwgdGFza1NpZGViYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNoZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNoZWNrRGl2LmlkID0gXCJ0YXNrLWNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpXG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLmlkPVwiY2hlY2tib3hcIiArIGlcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY29tcGxldGVDaGVjay5jaGVja2VkID0gcHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGU7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza0FycmF5W2ldLmNvbXBsZXRlID0gIXByb2plY3QudGFza0FycmF5W2ldLmNvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXlbaV0udGl0bGUgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZGViYXJJbmZvKHByb2plY3QudGFza0FycmF5W2ldLCB0YXNrU2lkZWJhcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tBcnJheVtpXSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiICsgaSkpLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGFza0FycmF5W2ldLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgIFRhc2sudXBkYXRlQ29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiICsgaSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInRhc2stY29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgVGFzay51cGRhdGVDb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIgKyBpKSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUNoZWNrKTtcblxuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tEaXYpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gcmVuZGVyU2lkZWJhcih0YXNrKSB7XG4gICAgLy8gICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNpZGViYXJcIilcbiAgICAvLyAgICAgc2lkZWJhci5pbm5lckhUTUw9IGBcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgIC8vICAgICAgICAgICAgIDxoMj4ke3Rhc2sudGl0bGV9PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L2gyPlxuICAgIC8vICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L2gyPlxuICAgIC8vICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0YXNrU3RhdHVzfTwvaDI+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgYFxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHNldFNpZGViYXJJbmZvKHRhc2ssIHNpZGViYXJFbGVtZW50KSB7XG4gICAgICAgIGxldCB0YXNrU3RhdHVzID0gXCJcIjtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMgPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJJbmNvbXBsZXRlXCI7XG4gICAgICAgIH07XG4gICAgICAgIHNpZGViYXJFbGVtZW50LmlubmVySFRNTD0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiIGlkPVwic2lkZWJhci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic2lkZS10aXRsZVwiPiR7dGFzay50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5kdWVEYXRlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0YXNrLnByaW9yaXR5fTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzOiAke3Rhc2tTdGF0dXN9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFza1NpZGViYXIodGFzaywgc2lkZWJhckVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1N0YXR1cyA9IFwiXCI7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1N0YXR1cyA9IFwiSW5jb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUw9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInNpZGUtdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0YXNrU3RhdHVzfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1zaWRlYmFyLXZpc2libGVcIilcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSAhc2lkZWJhclRvZ2dsZTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXNpZGViYXItdmlzaWJsZVwiKVxuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stc2lkZWJhci1oaWRkZW5cIilcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSAhc2lkZWJhclRvZ2dsZTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RNb2RhbCgpIHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiIHx8IHByb2plY3ROYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUHJvamVjdC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoUHJvamVjdC5wcm9qZWN0QXJyYXkpO1xuICAgICAgICByZW5kZXJUYXNrcyhQcm9qZWN0LnByb2plY3RBcnJheVsoUHJvamVjdC5wcm9qZWN0QXJyYXkubGVuZ3RoIC0gMSldKVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTW9kYWwoKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHByb21wdChcIlRhc2sgbmFtZT9cIik7XG4gICAgICAgIGlmICh0YXNrTmFtZSA9PT0gXCJcIiB8fCB0YXNrTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFRhc2suY3JlYXRlVGFzayh0YXNrTmFtZSwgZGlzcGxheWVkUHJvamVjdCk7XG4gICAgICAgIHJlbmRlclRhc2tzKGRpc3BsYXllZFByb2plY3QpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgICAgICByZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgcmVuZGVyTWFpbkNvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cyhQcm9qZWN0LnByb2plY3RBcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyUGFnZSB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9