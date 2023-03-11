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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 5% 95%;\n\n    margin: 15px 40px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 2 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 2 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    display: flex;\n    align-items: center;\n\n    margin-left: 8px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,2BAA2B;AAC7B;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;IACxB,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;IACvC,mDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,qBAAqB;AACzB;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,WAAW;IACX,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,oCAAoC;IACpC,aAAa;IACb,6BAA6B;;IAE7B,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,oCAAoC;IACpC,gBAAgB;IAChB,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,iCAAiC;IACjC,yBAAyB;IACzB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,4BAA4B;;IAE5B,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,YAAY;IACZ,UAAU;IACV,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,0BAA0B;;IAE1B,aAAa;IACb,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,eAAe;IACf,QAAQ;IACR,gBAAgB;;IAEhB,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,yBAAyB;;IAEzB,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,yBAAyB;;IAEzB,+BAA+B;AACnC","sourcesContent":["body {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\nh1, h2, h3, h4, h5, h6, p, li {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n.header-text {\n    color: rgb(255, 255, 255);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: rgb(154, 76, 255);\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: 92vh;\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 16px;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 5% 95%;\n\n    margin: 15px 40px;\n    border: #c599ff solid 2px;\n    border-radius: 10px;\n    background-color: #c599ff;\n    width: 85%;\n    height: 70px;\n    opacity: 1;\n    transition: opacity.4s linear;\n    z-index: 2;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / -1;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-name {\n    grid-area: 1 / 2 / 2 / 4;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 2 / 3 / 8;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    display: flex;\n    align-items: center;\n\n    margin-left: 8px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .7s linear;\n}\n\n.task-container {\n    width: 100%;\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: #a159ff solid 0px;\n    background-color: #606060;\n    height: 81.5%;\n    width: 30%;\n}\n\n.sidebar-info {\n    width: 340px;\n    padding: 8px 30px;\n}\n\n.task-sidebar-hidden {\n    width: 0px;\n    border: #505050 solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.task-sidebar-visible {\n    width: 30%;\n    border: #9a4cff solid 7px;\n\n    transition: all .4s ease-in-out;\n}\n"],"sourceRoot":""}]);
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
    let displayedTasks = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0].taskArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxL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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQXFCO0FBQzdCLHVCQUF1QiwyREFBb0I7QUFDM0Msb0JBQW9CLDJEQUFvQixFQUFFLGtFQUEyQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBZTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBb0I7QUFDM0M7O0FBRUEsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjEwZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGxpIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmE6bGluayB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5hOnZpc2l0ZWQgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTpob3ZlciB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmFjdGl2ZSB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA3NiwgMjU1KTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciA0ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDkydmg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMTE0LCAxMTQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMCUgOTAlIC8gMTAwJTtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG59XFxuXFxuLnByb2plY3QtZGl2OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgNDIsIDQyKTtcXG59XFxuXFxuLnByb2plY3QtZGl2Om50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA5MCUgLyBhdXRvO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbn1cXG5cXG4ubm90YXNrLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwJSAvIDUlIDk1JTtcXG5cXG4gICAgbWFyZ2luOiAxNXB4IDQwcHg7XFxuICAgIGJvcmRlcjogI2M1OTlmZiBzb2xpZCAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTk5ZmY7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eS40cyBsaW5lYXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIC0xIC8gLTE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDUwJSA1MCUgLyAyMHB4IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLXByaW8ge1xcbiAgICBncmlkLWFyZWE6IDEgLyA4IC8gMiAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDggLyAzIC8gOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZSB7XFxuICAgIG9wYWNpdHk6IC4zO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC43cyBsaW5lYXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYm9yZGVyOiAjYTE1OWZmIHNvbGlkIDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcXG4gICAgaGVpZ2h0OiA4MS41JTtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnNpZGViYXItaW5mbyB7XFxuICAgIHdpZHRoOiAzNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XFxufVxcblxcbi50YXNrLXNpZGViYXItaGlkZGVuIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgYm9yZGVyOiAjNTA1MDUwIHNvbGlkIDdweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stc2lkZWJhci12aXNpYmxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAjOWE0Y2ZmIHNvbGlkIDdweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLG1EQUFtRDtJQUNuRCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiw2QkFBNkI7O0lBRTdCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7O0lBRTVCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCOztJQUUxQixhQUFhO0lBQ2IsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLGdCQUFnQjs7SUFFaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7O0lBRXpCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7O0lBRXpCLCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIHdpZHRoOiAxLjE1ZW07XFxuICAgIGhlaWdodDogMS4xNWVtO1xcbiAgICBib3JkZXI6IDAuMTBlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgbGkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYTpsaW5rIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbmE6dmlzaXRlZCB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmhvdmVyIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcblxcbmE6YWN0aXZlIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbWFyZ2luOiAwIDQwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDc2LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMWZyIDRmcjtcXG4gICAgbWluLWhlaWdodDogOTJ2aDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTQsIDExNCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA5MCUgLyAxMDAlO1xcblxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuLnByb2plY3RzLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXG59XFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnByb2plY3QtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCA0MiwgNDIpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG5cXG4ucHJvamVjdC10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDkwJSAvIGF1dG87XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxufVxcblxcbi5ub3Rhc2stbWVzc2FnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMDAlIC8gNSUgOTUlO1xcblxcbiAgICBtYXJnaW46IDE1cHggNDBweDtcXG4gICAgYm9yZGVyOiAjYzU5OWZmIHNvbGlkIDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1OTlmZjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LjRzIGxpbmVhcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gLTEgLyAtMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNTAlIDUwJSAvIDIwcHggcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtID4gZGl2ID4gcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50YXNrLWRlc2Mge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stcHJpbyB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDggLyAyIC8gOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gOCAvIDMgLyA5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlIHtcXG4gICAgb3BhY2l0eTogLjM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjdzIGxpbmVhcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBib3JkZXI6ICNhMTU5ZmYgc29saWQgMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xcbiAgICBoZWlnaHQ6IDgxLjUlO1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uc2lkZWJhci1pbmZvIHtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcXG59XFxuXFxuLnRhc2stc2lkZWJhci1oaWRkZW4ge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBib3JkZXI6ICM1MDUwNTAgc29saWQgN3B4O1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1zaWRlYmFyLXZpc2libGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXI6ICM5YTRjZmYgc29saWQgN3B4O1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0c1wiXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxuXG5VSS5yZW5kZXJQYWdlKCk7IiwiZXhwb3J0IGNvbnN0IFByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFt7bmFtZTogXCJXb3JrXCIsIHRhc2tBcnJheTogW3t0aXRsZTogXCJEbyBXb3JrXCIsIGRlc2NyaXB0aW9uOiBcIkdvdHRhIGdldCB0aGF0IG1vbmV5XCIsIGR1ZURhdGU6IFwiVG9tb3Jyb3dcIiwgcHJpb3JpdHk6IFwiaGlnaFwiLCBjb21wbGV0ZTogZmFsc2V9LCB7dGl0bGU6IFwiU2xlZXBcIiwgZGVzY3JpcHRpb246IFwiWlpaenp6elwiLCBkdWVEYXRlOiBcIlRvbW9ycm93XCIsIHByaW9yaXR5OiBcImhpZ2hlc3RcIiwgY29tcGxldGU6IGZhbHNlfV19LCB7bmFtZTogXCJTY2hvb2xcIiwgdGFza0FycmF5OiBbe3RpdGxlOiBcIkRvIEhvbWV3b3JrXCIsIGRlc2NyaXB0aW9uOiBcImdldCB5b3Ugc21hcnQgdXBcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJsb3cgYWZcIiwgY29tcGxldGU6IGZhbHNlfSwge3RpdGxlOiBcIkJhc2ViYWxsIFByYWN0aWNlXCIsIGRlc2NyaXB0aW9uOiBcImhpdHRpbicgYm9tYnNcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJtZWRpdW1cIiwgY29tcGxldGU6IGZhbHNlfV19XTtcblxuICAgIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IFt7dGl0bGU6IFwiR2V0IFN0YXJ0ZWQhXCIsIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGdvZXMgaGVyZSFcIiwgZHVlRGF0ZTogXCJUb21vcnJvd1wiLCBwcmlvcml0eTogXCJoaWdoXCIsIGNvbXBsZXRlOiBmYWxzZX1dO1xuICAgICAgICByZXR1cm4geyBuYW1lLCB0YXNrQXJyYXkgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvamVjdEZhY3RvcnksIGNyZWF0ZVByb2plY3QsIHByb2plY3RBcnJheSB9XG59KSgpOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0c1wiXG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTmFtZSwgcHJvamVjdCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUsIFwiaGlcIiwgXCJoaVwiLCBcImhpXCIsIGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrQXJyYXkpICAgICAgXG4gICAgICAgIHByb2plY3QudGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza0FycmF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByaW50VGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZFRhc2tUb0xpc3QocHJvamVjdCwgdGFzayl7XG4gICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFza1RpdGxlKHRhc2ssIG5ld1RpdGxlKSB7XG4gICAgICAgIHRhc2sudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2ssIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFza0R1ZURhdGUodGFzaywgbmV3RHVlRGF0ZSkge1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrUHJpb3JpdHkodGFzaywgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZSh0YXNrKSB7XG4gICAgICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdGFza0ZhY3RvcnksIGNyZWF0ZVRhc2ssIHVwZGF0ZUNvbXBsZXRlIH1cbn0pKCk7XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0cydcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL1Rhc2snXG5cbmV4cG9ydCBjb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgbGV0IGRpc3BsYXllZFByb2plY3QgPSBQcm9qZWN0LnByb2plY3RBcnJheVswXTtcbiAgICBsZXQgZGlzcGxheWVkVGFza3MgPSBQcm9qZWN0LnByb2plY3RBcnJheVswXS50YXNrQXJyYXk7XG4gICAgbGV0IHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuaWQgPSBcImhlYWRlci1jb250YWluZXJcIjtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyLXRleHRcIj5Uby1EbyBMaXN0PC9oMT5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1haW5Db250YWluZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWJhclwiIGNsYXNzPVwicHJvamVjdHMtYmFyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzaWRlYmFyLWl0ZW1cIj5Qcm9qZWN0czwvcD5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYWRkLXByb2plY3QtYnV0dG9uXCIgaWQ9XCJhZGQtcHJvamVjdC1idXR0b25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCIgaWQ9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRhc2stY29udGFpbmVyXCIgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlRhc2tzPC9oMj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uXCIgaWQ9XCJhZGQtdGFzay1idXR0b25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidGFzay1saXN0XCIgY2xhc3M9XCJ0YXNrLWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcblxuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3RNb2RhbClcbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrTW9kYWwpXG4gICAgXG4gICAgICAgaW5pdFRhc2tzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuaWQgPSBcInByb2plY3RcIiArIGk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKVxuICAgICAgICAgICAgcHJvamVjdERpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdEFycmF5W2ldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgaW5kaXZpZHVhbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBpbmRpdmlkdWFsUHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICAgICAgICAgIGluZGl2aWR1YWxQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIilcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFByb2plY3QpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0UHJvamVjdCgpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdE51bWJlciBpbiBQcm9qZWN0LnByb2plY3RBcnJheSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiICsgcHJvamVjdE51bWJlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoUHJvamVjdC5wcm9qZWN0QXJyYXlbcHJvamVjdE51bWJlcl0udGFza0FycmF5ID09PSBkaXNwbGF5ZWRUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIiArIHByb2plY3ROdW1iZXIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiICsgcHJvamVjdE51bWJlcikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGluaXRUYXNrcygpIHtcbiAgICAgICAgaWYgKFByb2plY3QucHJvamVjdEFycmF5WzBdKSB7XG4gICAgICAgICAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKFByb2plY3QucHJvamVjdEFycmF5WzBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1Db250YWluZXIuaWQgPSBcIml0ZW0tY29udGFpbmVyXCI7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCB0YXNrTGlzdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICAgICAgbGV0IHRhc2tTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1NpZGViYXIuaWQgPSBcInRhc2stc2lkZWJhclwiO1xuICAgICAgICB0YXNrU2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidGFzay1zaWRlYmFyXCIsIFwidGFzay1zaWRlYmFyLWhpZGRlblwiKTtcbiAgICAgICAgdGFza0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tTaWRlYmFyKTtcblxuICAgICAgICBpZiAoIXByb2plY3QudGFza0FycmF5WzBdKSB7XG4gICAgICAgICAgICBsZXQgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbm9UYXNrTWVzc2FnZS5pbm5lclRleHQgPSBcIk5vIHRhc2tzIHlldCFcIjtcbiAgICAgICAgICAgIG5vVGFza01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm5vdGFzay1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0LnRhc2tBcnJheSkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpXG4gICAgICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2staW5mby1jb250YWluZXJcIik7XG4gICAgICAgICAgICB0YXNrSW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrLW5hbWVcIj48cD4ke3Byb2plY3QudGFza0FycmF5W2ldLnRpdGxlfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2stZGVzY1wiPjxwPiR7cHJvamVjdC50YXNrQXJyYXlbaV0uZGVzY3JpcHRpb259PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJpb1wiIGlkPVwidGFzay1wcmlvXCI+PHA+JHtwcm9qZWN0LnRhc2tBcnJheVtpXS5wcmlvcml0eX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIj48cD4ke3Byb2plY3QudGFza0FycmF5W2ldLmR1ZURhdGV9PC9wPjwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgdGFza0luZm8ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHNpZGViYXJUb2dnbGUgPT09IHRydWUpICYmIChwcm9qZWN0LnRhc2tBcnJheVtpXS50aXRsZSAhPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLmlubmVySFRNTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2lkZWJhckluZm8ocHJvamVjdC50YXNrQXJyYXlbaV0sIHRhc2tTaWRlYmFyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYXNrU2lkZWJhcihwcm9qZWN0LnRhc2tBcnJheVtpXSwgdGFza1NpZGViYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNoZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNoZWNrRGl2LmlkID0gXCJ0YXNrLWNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpXG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLmlkPVwiY2hlY2tib3hcIiArIGlcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY29tcGxldGVDaGVjay5jaGVja2VkID0gcHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGU7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza0FycmF5W2ldLmNvbXBsZXRlID0gIXByb2plY3QudGFza0FycmF5W2ldLmNvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXlbaV0udGl0bGUgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZGViYXJJbmZvKHByb2plY3QudGFza0FycmF5W2ldLCB0YXNrU2lkZWJhcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXlbaV0uY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgVGFzay51cGRhdGVDb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICBUYXNrLnVwZGF0ZUNvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3hcIiArIGkpKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlQ2hlY2spO1xuXG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja0Rpdik7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXllZFRhc2tzID0gcHJvamVjdC50YXNrQXJyYXk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICBoaWdobGlnaHRQcm9qZWN0KCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHJlbmRlclNpZGViYXIodGFzaykge1xuICAgIC8vICAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zaWRlYmFyXCIpXG4gICAgLy8gICAgIHNpZGViYXIuaW5uZXJIVE1MPSBgXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1pbmZvXCIgaWQ9XCJzaWRlYmFyLWluZm9cIj5cbiAgICAvLyAgICAgICAgICAgICA8aDI+JHt0YXNrLnRpdGxlfTwvaDI+XG4gICAgLy8gICAgICAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgLy8gICAgICAgICAgICAgPHA+JHt0YXNrLmR1ZURhdGV9PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Rhc2sucHJpb3JpdHl9PC9oMj5cbiAgICAvLyAgICAgICAgICAgICA8cD5TdGF0dXM6ICR7dGFza1N0YXR1c308L2gyPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgIGBcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBzZXRTaWRlYmFySW5mbyh0YXNrLCBzaWRlYmFyRWxlbWVudCkge1xuICAgICAgICBsZXQgdGFza1N0YXR1cyA9IFwiXCI7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1N0YXR1cyA9IFwiSW5jb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUw9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInNpZGUtdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0YXNrU3RhdHVzfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhc2tTaWRlYmFyKHRhc2ssIHNpZGViYXJFbGVtZW50KSB7XG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHRhc2tTdGF0dXMgPSBcIlwiO1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFza1N0YXR1cyA9IFwiQ29tcGxldGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMgPSBcIkluY29tcGxldGVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgc2lkZWJhckVsZW1lbnQuaW5uZXJIVE1MPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1pbmZvXCIgaWQ9XCJzaWRlYmFyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzaWRlLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0YXNrLmR1ZURhdGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2sucHJpb3JpdHl9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5TdGF0dXM6ICR7dGFza1N0YXR1c308L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgaWYgKHNpZGViYXJUb2dnbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zaWRlYmFyLWhpZGRlblwiKVxuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stc2lkZWJhci12aXNpYmxlXCIpXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gIXNpZGViYXJUb2dnbGU7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zaWRlYmFyLXZpc2libGVcIilcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gIXNpZGViYXJUb2dnbGU7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIik7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJcIiB8fCBwcm9qZWN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFByb2plY3QuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKFByb2plY3QucHJvamVjdEFycmF5KTtcbiAgICAgICAgcmVuZGVyVGFza3MoUHJvamVjdC5wcm9qZWN0QXJyYXlbKFByb2plY3QucHJvamVjdEFycmF5Lmxlbmd0aCAtIDEpXSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKCkge1xuICAgICAgICBsZXQgdGFza05hbWUgPSBwcm9tcHQoXCJUYXNrIG5hbWU/XCIpO1xuICAgICAgICBpZiAodGFza05hbWUgPT09IFwiXCIgfHwgdGFza05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBUYXNrLmNyZWF0ZVRhc2sodGFza05hbWUsIGRpc3BsYXllZFByb2plY3QpO1xuICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICAgICAgcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHJlbmRlck1haW5Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoUHJvamVjdC5wcm9qZWN0QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==