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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #858585;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgb(154, 76, 255);\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgb(197 153 255);\n  }\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n    max-height: 92vh;\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    overflow-y: auto;\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n}\n\n.item-container {\n    overflow-y: auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 6% 94%;\n\n    margin: 15px 40px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 1 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 1 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    grid-area: 1 / 1 / 2 / 2;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n    max-height: 92vh;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    display: grid;\n    /* Add grid details here */\n\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 0px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n\n.delete-container {\n    display: flex;\n    align-items: center;\n}\n\n.delete-text {\n    margin-left: 10px;\n}\n\n.project-modal {\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 50%;\n    width: 60%;\n    background-color: #0e6aff;\n    visibility: hidden;\n}\n\n.task-modal {\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 50%;\n    width: 60%;\n    background-color: #0e6aff;\n    visibility: hidden;\n}\n\n.modal-backdrop {\n    position:fixed;\n    top:0;\n    left:0;\n    width:100vw;\n    height:100vh;\n    background-color:rgba(0, 0, 0, 0.434);\n    visibility: hidden;\n}\n\n.visible {\n    visibility: visible;\n}\n\n.blur {\n    filter: blur(1.8px);\n    pointer-events: none;\n}\n\n.x-button {\n    font-size: 30px;\n    width: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #858585;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgb(154, 76, 255);\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgb(197 153 255);\n  }\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n    max-height: 92vh;\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    overflow-y: auto;\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n}\n\n.item-container {\n    overflow-y: auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 6% 94%;\n\n    margin: 15px 40px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 1 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 1 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    grid-area: 1 / 1 / 2 / 2;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n    max-height: 92vh;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    display: grid;\n    /* Add grid details here */\n\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 0px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n\n.delete-container {\n    display: flex;\n    align-items: center;\n}\n\n.delete-text {\n    margin-left: 10px;\n}\n\n.project-modal {\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 50%;\n    width: 60%;\n    background-color: #0e6aff;\n    visibility: hidden;\n}\n\n.task-modal {\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 50%;\n    width: 60%;\n    background-color: #0e6aff;\n    visibility: hidden;\n}\n\n.modal-backdrop {\n    position:fixed;\n    top:0;\n    left:0;\n    width:100vw;\n    height:100vh;\n    background-color:rgba(0, 0, 0, 0.434);\n    visibility: hidden;\n}\n\n.visible {\n    visibility: visible;\n}\n\n.blur {\n    filter: blur(1.8px);\n    pointer-events: none;\n}\n\n.x-button {\n    font-size: 30px;\n    width: 2rem;\n}\n"],"sourceRoot":""}]);
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
        let taskArray = [{title: "Get Started!", description: "Description goes here!", dueDate: "Tomorrow", priority: "high", complete: false}];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
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

    function createTask(taskName, taskDesc, taskDate, taskPrio, project) {
        const newTask = taskFactory(taskName, taskDesc, taskDate, taskPrio, false);
        console.log(project)
        project.taskArray.push(newTask);
    }

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
    let displayedTasks = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0].taskArray;
    let sidebarToggle = false;
    
    function renderModals() {
        let modalContainer = document.createElement("div");
        modalContainer.id = "modal-container";
        modalContainer.classList.add("modal-container");
        document.body.appendChild(modalContainer);

        modalContainer.innerHTML = `
        <div class="project-modal" id="project-modal">
            <div class="x-button" id="project-x-button">&times;</div>
            <form id="createProjectForm">
                <label for="project-name">Project Name:</label>
                <input type="text" id="project-name" name="project-name" required>
                <button id="create-project-button" type="button">Create</button>
            </form>
        </div>
        <div class="task-modal" id="task-modal">
            <div class="x-button" id="task-x-button">&times;</div>
            <form id="createTaskForm">
                <label for="task-title">Project Name:</label>
                <input type="text" id="task-title" name="task-title" required>
                <label for="task-desc">Project Name:</label>
                <input type="text" id="task-desc" name="task-desc">
                <label for="task-prio">Project Name:</label>
                <input type="text" id="task-prio" name="task-prio">
                <label for="task-date">Project Name:</label>
                <input type="text" id="task-date" name="task-date">
                <button id="create-task-button" type="button">Create</button>
            </form>
        </div>
        <div class="modal-backdrop" id="modal-backdrop"></div>
        `
    }

    function openModal(modal) {
        document.getElementById(modal).classList.add("visible")
        document.getElementById("modal-backdrop").classList.add("visible")
        document.getElementById("main-container").classList.add("blur")
        document.getElementById("header-container").classList.add("blur")
    }

    function closeModal(modal) {
        document.getElementById(modal).classList.remove("visible")
        document.getElementById("modal-backdrop").classList.remove("visible")
        document.getElementById("main-container").classList.remove("blur")
        document.getElementById("header-container").classList.remove("blur")
    }

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
        <div class="project-container">
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
            projectDiv.id = "project" + i;
            projectDiv.classList.add("project-div")
            projectDiv.onclick = () => {
                sidebarToggle = false;
                displayedProject = projectArray[i]
                renderTasks(projectArray[i]);
            };
            let individualProject = document.createElement("li");
            individualProject.innerHTML = projectArray[i].name;
            individualProject.classList.add("project-text")
            projectDiv.appendChild(individualProject);

            projectList.appendChild(projectDiv)
        }
    }

    function highlightProject() {
        for (let projectNumber in _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray) {
            if (document.getElementById("project" + projectNumber)) {
                if (_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[projectNumber].taskArray === displayedTasks) {
                    document.getElementById("project" + projectNumber).classList.add("selected-project");
                } else {
                    document.getElementById("project" + projectNumber).classList.remove("selected-project");
                }
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
        displayedTasks = project.taskArray;
        taskList.appendChild(itemContainer);
        highlightProject();
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
                <h2 class="side-title" id="side-title">${task.title}</h2>
                <p class="side-description" id="side-description">${task.description}</h2>
                <p class="side-dueDate" id="side-dueDate">${task.dueDate}</h2>
                <p class="side-priority" id="side-priority">${task.priority}</h2>
                <p class="side-title" id="side-title">Status: ${taskStatus}</h2>
                <button class="delete-button" id="delete-button">
                    <div class="delete-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    <p class="delete-text">Delete</p>
                    </div>
                </button>
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
        let projectModal = document.getElementById("project-modal").className;
        let backdrop = document.getElementById("modal-backdrop");
        let xButton = document.getElementById("project-x-button");

        openModal(projectModal);

        backdrop.onclick = () => {
            closeModal(projectModal);
        }

        xButton.onclick = () => {
            closeModal(projectModal);
        } 

        let createButton = document.getElementById("create-project-button");
        createButton.onclick = () => {
            if (document.getElementById("createProjectForm")[0].checkValidity()) {
                let projectName = document.getElementById("project-name").value
                _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.createProject(projectName);
                renderProjects(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray);
                renderTasks(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray.length - 1)])
                closeModal(projectModal);
            } else {
                document.getElementById("createProjectForm")[0].reportValidity();
            }
        }
    };

    function createTaskModal() {
        let taskModal = document.getElementById("task-modal").className;
        let backdrop = document.getElementById("modal-backdrop");
        let xButton = document.getElementById("task-x-button");

        openModal(taskModal);

        backdrop.onclick = () => {
            closeModal(taskModal);
        }

        xButton.onclick = () => {
            closeModal(taskModal);
        } 

        let createButton = document.getElementById("create-task-button");
        createButton.onclick = () => {
            if (document.getElementById("createTaskForm")[0].checkValidity()) {
                let taskTitle = document.getElementById("task-title").value
                let taskDesc = document.getElementById("task-desc").value
                let taskPrio = document.getElementById("task-prio").value
                let taskDate = document.getElementById("task-date").value
                console.log(taskTitle, taskDesc, taskPrio, taskDate, displayedProject)
                _Task__WEBPACK_IMPORTED_MODULE_1__.Task.createTask(taskTitle, taskDesc, taskPrio, taskDate, displayedProject);
                renderTasks(displayedProject);
                closeModal(taskModal);
            } else {
                document.getElementById("createTaskForm")[0].reportValidity();
            }
        }
    };

    function renderPage() {
        renderModals();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLE9BQU8s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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQWU7QUFDL0I7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBb0I7QUFDM0M7O0FBRUEsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjEwZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGxpIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmE6bGluayB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5hOnZpc2l0ZWQgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTpob3ZlciB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmFjdGl2ZSB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjODU4NTg1O1xcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU0LCA3NiwgMjU1KTtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NyAxNTMgMjU1KTtcXG4gIH1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA3NiwgMjU1KTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciA0ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDkydmg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMTE0LCAxMTQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMCUgOTAlIC8gMTAwJTtcXG4gICAgbWF4LWhlaWdodDogOTJ2aDtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG59XFxuXFxuLnByb2plY3QtZGl2OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgNDIsIDQyKTtcXG59XFxuXFxuLnByb2plY3QtZGl2Om50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA5MCUgLyBhdXRvO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbn1cXG5cXG4ubm90YXNrLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwJSAvIDYlIDk0JTtcXG5cXG4gICAgbWFyZ2luOiAxNXB4IDQwcHg7XFxuICAgIGJvcmRlcjogI2M1OTlmZiBzb2xpZCAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTk5ZmY7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eS40cyBsaW5lYXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIC0xIC8gLTE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDUwJSA1MCUgLyAyMHB4IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLXByaW8ge1xcbiAgICBncmlkLWFyZWE6IDEgLyA4IC8gMiAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDggLyAzIC8gOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29tcGxldGUge1xcbiAgICBvcGFjaXR5OiAuMztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuN3MgbGluZWFyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogOTJ2aDtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGJvcmRlcjogI2ExNTlmZiBzb2xpZCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XFxuICAgIGhlaWdodDogODEuNSU7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi5zaWRlYmFyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBBZGQgZ3JpZCBkZXRhaWxzIGhlcmUgKi9cXG5cXG4gICAgd2lkdGg6IDM0MHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcXG59XFxuXFxuLnRhc2stc2lkZWJhci1oaWRkZW4ge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBib3JkZXI6ICM1MDUwNTAgc29saWQgMHB4O1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1zaWRlYmFyLXZpc2libGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXI6ICM5YTRjZmYgc29saWQgN3B4O1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNSU7IFxcbiAgICByaWdodDogMDsgXFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmFmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNSU7IFxcbiAgICByaWdodDogMDsgXFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmFmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWwtYmFja2Ryb3Age1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNDM0KTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDEuOHB4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsU0FBUztJQUNU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O0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxLQUFLO0lBQ0wsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgd2lkdGg6IDEuMTVlbTtcXG4gICAgaGVpZ2h0OiAxLjE1ZW07XFxuICAgIGJvcmRlcjogMC4xMGVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBsaSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hOmxpbmsgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuYTp2aXNpdGVkIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcblxcbmE6aG92ZXIgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTphY3RpdmUgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICB9XFxuICBcXG4gIC8qIFRyYWNrICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzg1ODU4NTtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NCwgNzYsIDI1NSk7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTcgMTUzIDI1NSk7XFxuICB9XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDAgNDBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgNzYsIDI1NSk7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxZnIgNGZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MnZoO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDkwJSAvIDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDkydmg7XFxuXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcbn1cXG5cXG4ucHJvamVjdHMtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxufVxcblxcbi5wcm9qZWN0LWRpdjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDQyLCA0Mik7XFxufVxcblxcbi5wcm9qZWN0LWRpdjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMCUgOTAlIC8gYXV0bztcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXG59XFxuXFxuLm5vdGFzay1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogODBweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMCUgLyA2JSA5NCU7XFxuXFxuICAgIG1hcmdpbjogMTVweCA0MHB4O1xcbiAgICBib3JkZXI6ICNjNTk5ZmYgc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU5OWZmO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkuNHMgbGluZWFyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAtMSAvIC0xO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA1MCUgNTAlIC8gMjBweCByZXBlYXQoNywgMWZyKTtcXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0gPiBkaXYgPiBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1wcmlvIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gOCAvIDIgLyA5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IDIgLyA4IC8gMyAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlIHtcXG4gICAgb3BhY2l0eTogLjM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjdzIGxpbmVhcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDkydmg7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBib3JkZXI6ICNhMTU5ZmYgc29saWQgMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xcbiAgICBoZWlnaHQ6IDgxLjUlO1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uc2lkZWJhci1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogQWRkIGdyaWQgZGV0YWlscyBoZXJlICovXFxuXFxuICAgIHdpZHRoOiAzNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XFxufVxcblxcbi50YXNrLXNpZGViYXItaGlkZGVuIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgYm9yZGVyOiAjNTA1MDUwIHNvbGlkIDBweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stc2lkZWJhci12aXNpYmxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAjOWE0Y2ZmIHNvbGlkIDdweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZhZmY7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZhZmY7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsLWJhY2tkcm9wIHtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjQzNCk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cigxLjhweCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ueC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0c1wiXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxuXG5VSS5yZW5kZXJQYWdlKCk7IiwiZXhwb3J0IGNvbnN0IFByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFt7bmFtZTogXCJXb3JrXCIsIHRhc2tBcnJheTogW3t0aXRsZTogXCJEbyBXb3JrXCIsIGRlc2NyaXB0aW9uOiBcIkdvdHRhIGdldCB0aGF0IG1vbmV5XCIsIGR1ZURhdGU6IFwiVG9tb3Jyb3dcIiwgcHJpb3JpdHk6IFwiaGlnaFwiLCBjb21wbGV0ZTogZmFsc2V9LCB7dGl0bGU6IFwiU2xlZXBcIiwgZGVzY3JpcHRpb246IFwiWlpaenp6elwiLCBkdWVEYXRlOiBcIlRvbW9ycm93XCIsIHByaW9yaXR5OiBcImhpZ2hlc3RcIiwgY29tcGxldGU6IGZhbHNlfV19LCB7bmFtZTogXCJTY2hvb2xcIiwgdGFza0FycmF5OiBbe3RpdGxlOiBcIkRvIEhvbWV3b3JrXCIsIGRlc2NyaXB0aW9uOiBcImdldCB5b3Ugc21hcnQgdXBcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJsb3cgYWZcIiwgY29tcGxldGU6IGZhbHNlfSwge3RpdGxlOiBcIkJhc2ViYWxsIFByYWN0aWNlXCIsIGRlc2NyaXB0aW9uOiBcImhpdHRpbicgYm9tYnNcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJtZWRpdW1cIiwgY29tcGxldGU6IGZhbHNlfV19XTtcblxuICAgIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IFt7dGl0bGU6IFwiR2V0IFN0YXJ0ZWQhXCIsIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGdvZXMgaGVyZSFcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJoaWdoXCIsIGNvbXBsZXRlOiBmYWxzZX1dO1xuICAgICAgICByZXR1cm4geyBuYW1lLCB0YXNrQXJyYXkgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHByb2plY3RGYWN0b3J5LCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0QXJyYXkgfVxufSkoKTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdHNcIlxuXG5leHBvcnQgY29uc3QgVGFzayA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRGF0ZSwgdGFza1ByaW8sIHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0RhdGUsIHRhc2tQcmlvLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIHByb2plY3QudGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFza1RvTGlzdChwcm9qZWN0LCB0YXNrKXtcbiAgICAgICAgcHJvamVjdC50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrVGl0bGUodGFzaywgbmV3VGl0bGUpIHtcbiAgICAgICAgdGFzay50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrRGVzY3JpcHRpb24odGFzaywgbmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrRHVlRGF0ZSh0YXNrLCBuZXdEdWVEYXRlKSB7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tQcmlvcml0eSh0YXNrLCBuZXdQcmlvcml0eSkge1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlKHRhc2spIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlO1xuICAgIH1cbiAgICByZXR1cm4geyB0YXNrRmFjdG9yeSwgY3JlYXRlVGFzaywgdXBkYXRlQ29tcGxldGUgfVxufSkoKTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL1Byb2plY3RzJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzaydcblxuZXhwb3J0IGNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBsZXQgZGlzcGxheWVkUHJvamVjdCA9IFByb2plY3QucHJvamVjdEFycmF5WzBdO1xuICAgIGxldCBkaXNwbGF5ZWRUYXNrcyA9IFByb2plY3QucHJvamVjdEFycmF5WzBdLnRhc2tBcnJheTtcbiAgICBsZXQgc2lkZWJhclRvZ2dsZSA9IGZhbHNlO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFscygpIHtcbiAgICAgICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuaWQgPSBcIm1vZGFsLWNvbnRhaW5lclwiO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgICAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCIgaWQ9XCJwcm9qZWN0LW1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieC1idXR0b25cIiBpZD1cInByb2plY3QteC1idXR0b25cIj4mdGltZXM7PC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cImNyZWF0ZVByb2plY3RGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZVwiPlByb2plY3QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbmFtZT1cInByb2plY3QtbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGUtcHJvamVjdC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1tb2RhbFwiIGlkPVwidGFzay1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngtYnV0dG9uXCIgaWQ9XCJ0YXNrLXgtYnV0dG9uXCI+JnRpbWVzOzwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJjcmVhdGVUYXNrRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXRpdGxlXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrLXRpdGxlXCIgbmFtZT1cInRhc2stdGl0bGVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kZXNjXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrLWRlc2NcIiBuYW1lPVwidGFzay1kZXNjXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb1wiPlByb2plY3QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFzay1wcmlvXCIgbmFtZT1cInRhc2stcHJpb1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRhdGVcIj5Qcm9qZWN0IE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2stZGF0ZVwiIG5hbWU9XCJ0YXNrLWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLXRhc2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCIgaWQ9XCJtb2RhbC1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsKS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tkcm9wXCIpLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImJsdXJcIilcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbCkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIilcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1iYWNrZHJvcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICAgICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5pZCA9IFwiaGVhZGVyLWNvbnRhaW5lclwiO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgICAgICBoZWFkZXJDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXItdGV4dFwiPlRvLURvIExpc3Q8L2gxPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWFpbkNvbnRhaW5lcigpIHtcbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtYmFyXCIgY2xhc3M9XCJwcm9qZWN0cy1iYXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGViYXItaXRlbVwiPlByb2plY3RzPC9wPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhZGQtcHJvamVjdC1idXR0b25cIiBpZD1cImFkZC1wcm9qZWN0LWJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIj48L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIiBpZD1cInByb2plY3QtbGlzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGFzay1jb250YWluZXJcIiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VGFza3M8L2gyPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIiBpZD1cImFkZC10YXNrLWJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrLWxpc3RcIiBjbGFzcz1cInRhc2stbGlzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuXG4gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdE1vZGFsKVxuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2tNb2RhbClcbiAgICBcbiAgICAgICBpbml0VGFza3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5pZCA9IFwicHJvamVjdFwiICsgaTtcbiAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGl2XCIpXG4gICAgICAgICAgICBwcm9qZWN0RGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2lkZWJhclRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbaV1cbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0QXJyYXlbaV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBpbmRpdmlkdWFsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGluZGl2aWR1YWxQcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgaW5kaXZpZHVhbFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGV4dFwiKVxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpbmRpdmlkdWFsUHJvamVjdCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0TnVtYmVyIGluIFByb2plY3QucHJvamVjdEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBwcm9qZWN0TnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGlmIChQcm9qZWN0LnByb2plY3RBcnJheVtwcm9qZWN0TnVtYmVyXS50YXNrQXJyYXkgPT09IGRpc3BsYXllZFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiICsgcHJvamVjdE51bWJlcikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBwcm9qZWN0TnVtYmVyKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdFRhc2tzKCkge1xuICAgICAgICBpZiAoUHJvamVjdC5wcm9qZWN0QXJyYXlbMF0pIHtcbiAgICAgICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoUHJvamVjdC5wcm9qZWN0QXJyYXlbMF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QpIHtcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWxpc3RcIik7XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5pZCA9IFwiaXRlbS1jb250YWluZXJcIjtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXJcIik7XG5cbiAgICAgICAgbGV0IHRhc2tMaXN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICBsZXQgdGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrU2lkZWJhci5pZCA9IFwidGFzay1zaWRlYmFyXCI7XG4gICAgICAgIHRhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXJcIiwgXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpO1xuICAgICAgICB0YXNrTGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1NpZGViYXIpO1xuXG4gICAgICAgIGlmICghcHJvamVjdC50YXNrQXJyYXlbMF0pIHtcbiAgICAgICAgICAgIGxldCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBub1Rhc2tNZXNzYWdlLmlubmVyVGV4dCA9IFwiTm8gdGFza3MgeWV0IVwiO1xuICAgICAgICAgICAgbm9UYXNrTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibm90YXNrLW1lc3NhZ2VcIik7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChub1Rhc2tNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHByb2plY3QudGFza0FycmF5KS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIilcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tBcnJheVtpXS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZVwiPjxwPiR7cHJvamVjdC50YXNrQXJyYXlbaV0udGl0bGV9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVzY1wiIGlkPVwidGFzay1kZXNjXCI+PHA+JHtwcm9qZWN0LnRhc2tBcnJheVtpXS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcmlvXCIgaWQ9XCJ0YXNrLXByaW9cIj48cD4ke3Byb2plY3QudGFza0FycmF5W2ldLnByaW9yaXR5fTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIiBpZD1cInRhc2stZGF0ZVwiPjxwPiR7cHJvamVjdC50YXNrQXJyYXlbaV0uZHVlRGF0ZX08L3A+PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB0YXNrSW5mby5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoc2lkZWJhclRvZ2dsZSA9PT0gdHJ1ZSkgJiYgKHByb2plY3QudGFza0FycmF5W2ldLnRpdGxlICE9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtdGl0bGVcIikuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTaWRlYmFySW5mbyhwcm9qZWN0LnRhc2tBcnJheVtpXSwgdGFza1NpZGViYXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhc2tTaWRlYmFyKHByb2plY3QudGFza0FycmF5W2ldLCB0YXNrU2lkZWJhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2hlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2hlY2tEaXYuaWQgPSBcInRhc2stY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIilcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2suaWQ9XCJjaGVja2JveFwiICsgaVxuICAgICAgICAgICAgY29tcGxldGVDaGVjay50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLmNoZWNrZWQgPSBwcm9qZWN0LnRhc2tBcnJheVtpXS5jb21wbGV0ZTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2sub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGUgPSAhcHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGVcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tBcnJheVtpXS50aXRsZSA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2lkZWJhckluZm8ocHJvamVjdC50YXNrQXJyYXlbaV0sIHRhc2tTaWRlYmFyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tBcnJheVtpXS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICBUYXNrLnVwZGF0ZUNvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3hcIiArIGkpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgIFRhc2sudXBkYXRlQ29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiICsgaSkpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVjayk7XG5cbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrRGl2KTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheWVkVGFza3MgPSBwcm9qZWN0LnRhc2tBcnJheTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIGhpZ2hsaWdodFByb2plY3QoKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gcmVuZGVyU2lkZWJhcih0YXNrKSB7XG4gICAgLy8gICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNpZGViYXJcIilcbiAgICAvLyAgICAgc2lkZWJhci5pbm5lckhUTUw9IGBcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgIC8vICAgICAgICAgICAgIDxoMj4ke3Rhc2sudGl0bGV9PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L2gyPlxuICAgIC8vICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L2gyPlxuICAgIC8vICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0YXNrU3RhdHVzfTwvaDI+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgYFxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHNldFNpZGViYXJJbmZvKHRhc2ssIHNpZGViYXJFbGVtZW50KSB7XG4gICAgICAgIGxldCB0YXNrU3RhdHVzID0gXCJcIjtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMgPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJJbmNvbXBsZXRlXCI7XG4gICAgICAgIH07XG4gICAgICAgIHNpZGViYXJFbGVtZW50LmlubmVySFRNTD0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiIGlkPVwic2lkZWJhci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic2lkZS10aXRsZVwiPiR7dGFzay50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5kdWVEYXRlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0YXNrLnByaW9yaXR5fTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzOiAke3Rhc2tTdGF0dXN9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFza1NpZGViYXIodGFzaywgc2lkZWJhckVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1N0YXR1cyA9IFwiXCI7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1N0YXR1cyA9IFwiSW5jb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUw9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNpZGUtdGl0bGVcIiBpZD1cInNpZGUtdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGUtZGVzY3JpcHRpb25cIiBpZD1cInNpZGUtZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGUtZHVlRGF0ZVwiIGlkPVwic2lkZS1kdWVEYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGUtcHJpb3JpdHlcIiBpZD1cInNpZGUtcHJpb3JpdHlcIj4ke3Rhc2sucHJpb3JpdHl9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGUtdGl0bGVcIiBpZD1cInNpZGUtdGl0bGVcIj5TdGF0dXM6ICR7dGFza1N0YXR1c308L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgaWQ9XCJkZWxldGUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCI+PC9wb2x5bGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVsZXRlLXRleHRcIj5EZWxldGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgaWYgKHNpZGViYXJUb2dnbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zaWRlYmFyLWhpZGRlblwiKVxuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stc2lkZWJhci12aXNpYmxlXCIpXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gIXNpZGViYXJUb2dnbGU7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zaWRlYmFyLXZpc2libGVcIilcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gIXNpZGViYXJUb2dnbGU7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbW9kYWxcIikuY2xhc3NOYW1lO1xuICAgICAgICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tkcm9wXCIpO1xuICAgICAgICBsZXQgeEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC14LWJ1dHRvblwiKTtcblxuICAgICAgICBvcGVuTW9kYWwocHJvamVjdE1vZGFsKTtcblxuICAgICAgICBiYWNrZHJvcC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChwcm9qZWN0TW9kYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgeEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChwcm9qZWN0TW9kYWwpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVQcm9qZWN0Rm9ybVwiKVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIFByb2plY3QuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoUHJvamVjdC5wcm9qZWN0QXJyYXkpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKFByb2plY3QucHJvamVjdEFycmF5WyhQcm9qZWN0LnByb2plY3RBcnJheS5sZW5ndGggLSAxKV0pXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChwcm9qZWN0TW9kYWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RGb3JtXCIpWzBdLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKCkge1xuICAgICAgICBsZXQgdGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW1vZGFsXCIpLmNsYXNzTmFtZTtcbiAgICAgICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1iYWNrZHJvcFwiKTtcbiAgICAgICAgbGV0IHhCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2steC1idXR0b25cIik7XG5cbiAgICAgICAgb3Blbk1vZGFsKHRhc2tNb2RhbCk7XG5cbiAgICAgICAgYmFja2Ryb3Aub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwodGFza01vZGFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwodGFza01vZGFsKTtcbiAgICAgICAgfSBcblxuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFzay1idXR0b25cIik7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0Zvcm1cIilbMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tQcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9cIikudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUaXRsZSwgdGFza0Rlc2MsIHRhc2tQcmlvLCB0YXNrRGF0ZSwgZGlzcGxheWVkUHJvamVjdClcbiAgICAgICAgICAgICAgICBUYXNrLmNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzYywgdGFza1ByaW8sIHRhc2tEYXRlLCBkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKHRhc2tNb2RhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0Zvcm1cIilbMF0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgICAgICByZW5kZXJNb2RhbHMoKTtcbiAgICAgICAgcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHJlbmRlck1haW5Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoUHJvamVjdC5wcm9qZWN0QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==