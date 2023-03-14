(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main: #ff7070;\n    --sub: #ffb8b7;\n    --text: hsl(0, 0%, 0%);\n    --main-height: 87vh;\n    --screen-width: (100vw);\n  }\n\nbody {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=text]:focus {\n    outline: solid;\n    outline-width: 2px;\n    outline-color: var(--sub);\n    /* border: var(--main) 2px solid; */\n}\n\ntextarea {\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    resize: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    border: none;\n}\n\ntextarea:focus {\n    outline: solid;\n    outline-width: 2px;\n    outline-color: var(--sub);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\ninput[type=\"color\"] {\n    height: 20px;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\ninput[type=\"color\"]::-webkit-color-swatch {\n\tborder: none;\n}\n\nh1, h2, h3, h4, h5, h6, p, li, label, legend {\n    font-family: Arial, Helvetica, sans-serif;\n\n    overflow: hidden;\n    white-space:nowrap;\n    text-overflow: ellipsis;\n}\n\nlegend {\n    font-size: 26px;\n    margin-bottom: 30px;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #858585;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: var(--main)\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: var(--sub);\n  }\n\n.header-text {\n    color: var(--text);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: var(--main)\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: var(--main-height);\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n    max-height: var(--main-height);\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    overflow-y: auto;\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 18px;\n    overflow: hidden;\n    white-space:nowrap;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.item-container {\n    overflow-y: auto;\n}\n\n.task-header {\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.add-task {\n    display: flex;\n    align-items: center;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 46px auto 20px;\n\n    margin: 15px 40px;\n    border: var(--sub) solid 2px;\n    border-radius: 10px;\n    background-color: var(--sub);\n    height: 70px;\n    opacity: 1;\n    transition: opacity .4s linear;\n    z-index: 6;\n}\n\n.task-item-long {\n    width: calc(0.69 * var(--screen-width));\n    transition: width .25s ease-in-out;\n}\n\n.task-item-short {\n    width: calc((0.73 * var(--screen-width)) - 340px);\n    transition: width .3s ease-in-out;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / 3;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n\n    color: var(--text);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-title {\n    grid-area: 1 / 1 / 2 / 7;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 1 / 3 / 7;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    grid-area: 1 / 1 / 2 / 2;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.checkbox-input {\n    margin: 10px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .33s linear;\n}\n\n.task-complete-short {\n    width: calc((0.73 * var(--screen-width)) - 340px);\n    transition: width .3s ease-in-out;\n}\n\n.task-complete-long {\n    width: calc(0.69 * var(--screen-width));\n    transition: width .25s ease-in-out;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n\n    width: 100%;\n    max-height: var(--main-height);\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: var(--main) solid 0px;\n    background-color: #606060;\n    height: 78.29%;\n    max-width: 340px;\n}\n\n.sidebar-info {\n    display: flex;\n\n    max-width: 340px;\n    padding: 8px 30px;\n}\n\n.info-container {\n    max-width: 100%;\n}\n\n.task-sidebar-hidden {\n    min-width: 0px;\n    max-width: 0px;\n    border-left: var(--main) solid 0px;\n\n    transition: all .25s ease-in-out;\n}\n\n.task-sidebar-visible {\n    min-width: 340px;\n    max-width: 340px;\n    border-left: var(--main) solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.side-title {\n    grid-area: 1 / 1 / 3 / 2;\n\n    cursor: pointer;\n    background-color: #929292;\n    font-size: 28px;\n    margin: 10px 0px;\n    max-width: 85%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    border: 1px solid black; \n    border-radius: 12px;\n    padding: 6px;\n}\n\n.desc-container {\n    grid-area: 3 / 1 / 4 / 2;\n    min-height: 10vw;\n}\n\n.side-description {\n    max-width: 89.9%;\n    overflow: hidden;\n    white-space: normal;\n    text-overflow: ellipsis;\n    background-color: #929292;\n    min-height: 10vw;\n    border: 1px solid black; \n    border-radius: 12px;\n    padding: 6px;\n    overflow: auto;\n    outline: none;\n    cursor: pointer;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    resize: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.side-priority {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.side-due-date {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    border: 1px solid black;\n    border-radius: 12px;\n    padding: 6px;\n\n    margin-left: 10px;\n}\n\n.due-date-container {\n    display: flex;\n}\n\n.side-status {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.delete-button {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.sidebar-x-button {\n    grid-area: 1 / 2 / 6 / 3;\n\n    display: flex;\n    justify-content: center;\n\n    margin-left: 8px;\n    margin-top: -15px;\n    font-size: 35px;\n    color: white;\n}\n\n.delete-container {\n    display: flex;\n    align-items: center;\n}\n\n.delete-text {\n    margin-left: 10px;\n}\n\n.project-modal {\n    display: grid;\n    grid-template: 1fr 10fr 2fr/ 10fr 3fr 1fr;\n\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 230px;\n    width: 500px;\n    background-color: #2f2f2f;\n    border: var(--main) solid 5px;\n    color: white;\n    visibility: hidden;\n}\n\n.project-x-button {\n    grid-area: 1 / 3 / 2 / 4;\n\n    display: flex;\n    justify-content: center;\n\n    margin: 0px 15px;\n    font-size: 35px;\n    color: white;\n}\n\n.create-project-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n\n    grid-area: 1 / 1 / 3 / 3;\n\n    font-size: 1.3rem;\n    padding: 24px 40px;\n}\n\n.project-input {\n    margin-top: 15px;\n    width: 80%;\n    height: 28px;\n    font-size: 22px;\n}\n\n.create-project-button {\n    grid-area: 2 / 2 / 3 / 4;\n\n    margin-top: 140px;\n    margin-left: 20px;\n    max-width: 70%;\n    height: 30px;\n\n    background-color: var(--main);\n    border: none;\n    color: var(--text);\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\n.create-project-button:hover {\n    background-color: var(--sub);\n}\n\n.create-project-button:active {\n    transform: scale(0.98);\n}\n\n.task-legend {\n    margin-bottom: 10px;\n}\n\n.task-modal {\n    display: grid;\n    grid-template: 1fr 10fr 2fr/ 10fr 3fr 1fr;\n\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom:2%;\n    margin: auto;\n    z-index: 999;\n    height: 580px;\n    width: 450px;\n    background-color: #2f2f2f;\n    border: var(--main) solid 5px;\n    color: white;\n    visibility: hidden;\n}\n\n.create-task-form {\n    grid-area: 1 / 1 / 3 / 3;\n    display: flex;\n    flex-direction: column;\n\n    margin: auto;\n    width: 300px;\n    font-size: 1.3rem;\n    padding-left: 40px;\n    padding-top: 24px;\n}\n\n.task-modal-input {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    margin: 15px 10px;\n}\n\n.task-input {\n    margin-top: 10px;\n    width: 100%;\n    height: 25px;\n    font-size: 22px;\n}\n\n.task-input-textarea {\n    margin-top: 10px;\n    width: 100%;\n    height: 60px;\n    font-size: 16px;\n}\n\n.task-x-button {\n    grid-area: 1 / 3 / 2 / 4;\n\n    display: flex;\n    justify-content: center;\n\n    margin: 0px 15px;\n    font-size: 35px;\n    color: white;\n}\n\n.create-task-button {\n    grid-area: 3 / 1 / 4 / 3;\n    \n    margin-top: 20px;\n    margin-left: 300px;\n    max-width: 60%;\n    height: 30px;\n\n    background-color: var(--main);\n    border: none;\n    color: var(--text);\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\n.create-task-button:hover {\n    background-color: var(--sub);\n}\n\n.create-task-button:active {\n    transform: scale(0.98);\n}\n\n.modal-backdrop {\n    position:fixed;\n    top:8vh;\n    bottom: 7vh;\n    left:0;\n    width:100vw;\n    height:100vh;\n    background-color:rgba(0, 0, 0, 0.434);\n    visibility: hidden;\n}\n\n.visible {\n    visibility: visible;\n}\n\n.blur {\n    filter: blur(1.8px);\n    pointer-events: none;\n\n    transition: filter .2s ease-in-out;\n}\n\n.quick-blur {\n    filter: blur(2px);\n    pointer-events: none;\n\n    transition: filter .05s ease-in-out;\n}\n\n.footer-container {\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 1fr;\n\n    position: fixed;\n    bottom: 0px;\n\n    width: 100vw;\n    background-color: #1e1e1e;\n    height: 5vh;\n}\n\n.footer-text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    grid-area: 1 / 2 / 2 / 3;\n\n    color: white;\n    margin: 0px;\n}\n\n.theme-container {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    \n\n    grid-area: 1 / 3 / 2 / 4;\n\n    color: white;\n    margin-right: 40px;\n    column-gap: 14px;\n}\n\n.required {\n    color:rgb(252, 104, 104);\n    margin-left:2px;\n}\n\n.disable-click {\n    pointer-events: none;\n}\n\n.select-date {\n    display:flex; \n    align-items: center;\n\n    margin: 0px 20px;\n    color: white;\n}\n\n.due {\n    border: #505050 2px solid;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin: 0px 10px;\n    width: 100px;\n    height: 30px;\n    cursor: pointer;\n\n    font-size: 14spx;\n}\n\n.due-selected {\n    background-color: #727272;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;EACzB;;AAEF;IACI,gBAAgB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,2BAA2B;AAC7B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,mCAAmC;AACvC;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;IACxB,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;IACvC,mDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;CACC,UAAU;AACX;AACA;CACC,YAAY;AACb;;AAEA;IACI,yCAAyC;;IAEzC,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,qBAAqB;AACzB;;;AAGA;IACI,qBAAqB;AACzB;;AAEA,UAAU;AACV;IACI,WAAW;EACb;;EAEA,UAAU;EACV;IACE,mBAAmB;EACrB;;EAEA,WAAW;EACX;IACE;EACF;;EAEA,oBAAoB;EACpB;IACE,sBAAsB;EACxB;;AAEF;IACI,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,WAAW;IACX,gBAAgB;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,oCAAoC;IACpC,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;;IAE9B,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,oCAAoC;IACpC,gBAAgB;IAChB,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,8BAA8B;;IAE9B,iCAAiC;IACjC,yBAAyB;IACzB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oCAAoC;;IAEpC,iBAAiB;IACjB,4BAA4B;IAC5B,mBAAmB;IACnB,4BAA4B;IAC5B,YAAY;IACZ,UAAU;IACV,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,uCAAuC;IACvC,kCAAkC;AACtC;;AAEA;IACI,iDAAiD;IACjD,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;;IAEzB,aAAa;IACb,4CAA4C;;IAE5C,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,+BAA+B;AACnC;;AAEA;IACI,iDAAiD;IACjD,iCAAiC;AACrC;;AAEA;IACI,uCAAuC;IACvC,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,6BAA6B;;IAE7B,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,eAAe;IACf,QAAQ;IACR,gBAAgB;;IAEhB,6BAA6B;IAC7B,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,aAAa;;IAEb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,kCAAkC;;IAElC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kCAAkC;;IAElC,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;;IAExB,eAAe;IACf,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;;IAEZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,uBAAuB;;IAEvB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,yCAAyC;;IAEzC,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,MAAM;IACN,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,uBAAuB;;IAEvB,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;;IAEtB,wBAAwB;;IAExB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,wBAAwB;;IAExB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,YAAY;;IAEZ,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yCAAyC;;IAEzC,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,MAAM;IACN,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;;IAEtB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;;IAE7B,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,wBAAwB;;IAExB,aAAa;IACb,uBAAuB;;IAEvB,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,wBAAwB;;IAExB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,YAAY;;IAEZ,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,OAAO;IACP,WAAW;IACX,MAAM;IACN,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;;IAEpB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;;IAEpB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,gCAAgC;;IAEhC,eAAe;IACf,WAAW;;IAEX,YAAY;IACZ,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,wBAAwB;;IAExB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;;;IAGpB,wBAAwB;;IAExB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,mBAAmB;;IAEnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;;IAEf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[":root {\n    --main: #ff7070;\n    --sub: #ffb8b7;\n    --text: hsl(0, 0%, 0%);\n    --main-height: 87vh;\n    --screen-width: (100vw);\n  }\n\nbody {\n    overflow: hidden;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: rgb(80, 80, 80);\n}\n\ninput[type=text]:focus {\n    outline: solid;\n    outline-width: 2px;\n    outline-color: var(--sub);\n    /* border: var(--main) 2px solid; */\n}\n\ntextarea {\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    resize: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    border: none;\n}\n\ntextarea:focus {\n    outline: solid;\n    outline-width: 2px;\n    outline-color: var(--sub);\n}\n\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #d8d8d8;\n    margin: 0;\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.10em solid currentColor;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: 100ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n    background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\ninput[type=\"color\"] {\n    height: 20px;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\ninput[type=\"color\"]::-webkit-color-swatch {\n\tborder: none;\n}\n\nh1, h2, h3, h4, h5, h6, p, li, label, legend {\n    font-family: Arial, Helvetica, sans-serif;\n\n    overflow: hidden;\n    white-space:nowrap;\n    text-overflow: ellipsis;\n}\n\nlegend {\n    font-size: 26px;\n    margin-bottom: 30px;\n}\n\na:link { \n    text-decoration: none; \n}\n\na:visited { \n    text-decoration: none; \n}\n\n\na:hover { \n    text-decoration: none; \n}\n\n\na:active { \n    text-decoration: none; \n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #858585;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: var(--main)\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: var(--sub);\n  }\n\n.header-text {\n    color: var(--text);\n    font-size: 22px;\n    margin: 0 40px;\n}\n\n.header-container {\n    display: flex;\n    align-items: center;\n\n    height: 8vh;\n    min-width: 100vw;\n    background-color: var(--main)\n}\n\n.main-container {\n    display: grid;\n    grid-template: auto / 1fr 4fr;\n    min-height: var(--main-height);\n}\n\n.project-container {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: rgb(114, 114, 114);\n    display: grid;\n    grid-template: 10% 90% / 100%;\n    max-height: var(--main-height);\n\n    list-style: none;\n    color:rgb(255, 255, 255);\n}\n\n.task-list {\n    grid-area: 1 / 2 / 2 / 3;\n    background: rgb(80, 80, 80);\n}\n\n.projects-bar {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1px;\n    background-color: rgb(30, 30, 30);\n}\n\n.project-list {\n    overflow-y: auto;\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n.sidebar-item {\n    margin-left: 30px;\n    color: rgb(255, 255, 255);\n    font-size: 20px;\n}\n\n.add-project-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-project-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.add-task-button {\n    height: 24px;\n    width: 24px;\n    margin-right: 30px;\n    margin-left: 20px;\n    transition: all .4s;\n}\n.add-task-button:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n    transition: .4s;\n}\n\n.project-div {\n    display: flex;\n    align-items: center;\n\n    border: solid 2px rgb(100, 100, 100);\n    transition: 0.3s;\n    background-color: rgb(80, 80, 80);\n    height: 2em;\n}\n\n.project-div:hover {\n    background-color: rgb(168, 168, 168);\n    cursor: pointer;\n}\n\n.selected-project {\n    background-color: rgb(168, 168, 168);\n}\n\n.project-div:focus {\n    background-color: rgb(189, 42, 42);\n}\n\n.project-div:nth-child(n+2) {\n    margin-top: -2px;\n}\n\n.project-text {\n    margin-left: 40px;\n    font-size: 18px;\n    overflow: hidden;\n    white-space:nowrap;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.item-container {\n    overflow-y: auto;\n}\n\n.task-header {\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n\n    background-color: rgb(46, 46, 46);\n    color: rgb(255, 255, 255);\n    grid-area: 1 / 1 / 2 / 2;\n    padding-left: 20px;\n}\n\n.add-task {\n    display: flex;\n    align-items: center;\n}\n\n.task-list {\n    grid-area: 2 / 1 / 3 / 2;\n    \n    display: grid;\n    grid-template: 1fr / 1fr;\n}\n\n.notask-message {\n    color: white;\n    font-size: 36px;\n    padding-left: 80px;\n}\n\n.task-item {\n    display: grid;\n    grid-template: 100% / 46px auto 20px;\n\n    margin: 15px 40px;\n    border: var(--sub) solid 2px;\n    border-radius: 10px;\n    background-color: var(--sub);\n    height: 70px;\n    opacity: 1;\n    transition: opacity .4s linear;\n    z-index: 6;\n}\n\n.task-item-long {\n    width: calc(0.69 * var(--screen-width));\n    transition: width .25s ease-in-out;\n}\n\n.task-item-short {\n    width: calc((0.73 * var(--screen-width)) - 340px);\n    transition: width .3s ease-in-out;\n}\n\n.task-info-container {\n    grid-area: 1 / 2 / -1 / 3;\n\n    display: grid;\n    grid-template: 50% 50% / 20px repeat(7, 1fr);\n\n    color: var(--text);\n}\n\n.task-info-container:hover {\n    cursor: pointer;\n}\n\n.task-item > div > p {\n    margin: 0px;\n}\n\n.task-title {\n    grid-area: 1 / 1 / 2 / 7;\n    display: flex;\n    align-items: center;\n\n    font-size: 20px;\n}\n\n.task-desc {\n    grid-area: 2 / 1 / 3 / 7;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-prio {\n    grid-area: 1 / 8 / 2 / 9;\n    display: flex;\n    align-items: center;\n\n    font-size: 16px;\n}\n\n.task-date {\n    grid-area: 2 / 8 / 3 / 9;\n    display: flex;\n    align-items: center;\n    \n    font-size: 16px;\n}\n\n.task-checkbox {\n    grid-area: 1 / 1 / 2 / 2;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.checkbox-input {\n    margin: 10px;\n}\n\n.task-complete {\n    opacity: .3;\n    transition: opacity .33s linear;\n}\n\n.task-complete-short {\n    width: calc((0.73 * var(--screen-width)) - 340px);\n    transition: width .3s ease-in-out;\n}\n\n.task-complete-long {\n    width: calc(0.69 * var(--screen-width));\n    transition: width .25s ease-in-out;\n}\n\n.task-container {\n    display: grid;\n    grid-template: 10% 90% / auto;\n\n    width: 100%;\n    max-height: var(--main-height);\n}\n\n.task-sidebar {\n    z-index: 3;\n    position: fixed;\n    right: 0;\n    overflow: hidden;\n\n    border: var(--main) solid 0px;\n    background-color: #606060;\n    height: 78.29%;\n    max-width: 340px;\n}\n\n.sidebar-info {\n    display: flex;\n\n    max-width: 340px;\n    padding: 8px 30px;\n}\n\n.info-container {\n    max-width: 100%;\n}\n\n.task-sidebar-hidden {\n    min-width: 0px;\n    max-width: 0px;\n    border-left: var(--main) solid 0px;\n\n    transition: all .25s ease-in-out;\n}\n\n.task-sidebar-visible {\n    min-width: 340px;\n    max-width: 340px;\n    border-left: var(--main) solid 7px;\n\n    transition: all .3s ease-in-out;\n}\n\n.side-title {\n    grid-area: 1 / 1 / 3 / 2;\n\n    cursor: pointer;\n    background-color: #929292;\n    font-size: 28px;\n    margin: 10px 0px;\n    max-width: 85%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    border: 1px solid black; \n    border-radius: 12px;\n    padding: 6px;\n}\n\n.desc-container {\n    grid-area: 3 / 1 / 4 / 2;\n    min-height: 10vw;\n}\n\n.side-description {\n    max-width: 89.9%;\n    overflow: hidden;\n    white-space: normal;\n    text-overflow: ellipsis;\n    background-color: #929292;\n    min-height: 10vw;\n    border: 1px solid black; \n    border-radius: 12px;\n    padding: 6px;\n    overflow: auto;\n    outline: none;\n    cursor: pointer;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    resize: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.side-priority {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.side-due-date {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    border: 1px solid black;\n    border-radius: 12px;\n    padding: 6px;\n\n    margin-left: 10px;\n}\n\n.due-date-container {\n    display: flex;\n}\n\n.side-status {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.delete-button {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.sidebar-x-button {\n    grid-area: 1 / 2 / 6 / 3;\n\n    display: flex;\n    justify-content: center;\n\n    margin-left: 8px;\n    margin-top: -15px;\n    font-size: 35px;\n    color: white;\n}\n\n.delete-container {\n    display: flex;\n    align-items: center;\n}\n\n.delete-text {\n    margin-left: 10px;\n}\n\n.project-modal {\n    display: grid;\n    grid-template: 1fr 10fr 2fr/ 10fr 3fr 1fr;\n\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom: 10%;\n    margin: auto;\n    z-index: 999;\n    height: 230px;\n    width: 500px;\n    background-color: #2f2f2f;\n    border: var(--main) solid 5px;\n    color: white;\n    visibility: hidden;\n}\n\n.project-x-button {\n    grid-area: 1 / 3 / 2 / 4;\n\n    display: flex;\n    justify-content: center;\n\n    margin: 0px 15px;\n    font-size: 35px;\n    color: white;\n}\n\n.create-project-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n\n    grid-area: 1 / 1 / 3 / 3;\n\n    font-size: 1.3rem;\n    padding: 24px 40px;\n}\n\n.project-input {\n    margin-top: 15px;\n    width: 80%;\n    height: 28px;\n    font-size: 22px;\n}\n\n.create-project-button {\n    grid-area: 2 / 2 / 3 / 4;\n\n    margin-top: 140px;\n    margin-left: 20px;\n    max-width: 70%;\n    height: 30px;\n\n    background-color: var(--main);\n    border: none;\n    color: var(--text);\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\n.create-project-button:hover {\n    background-color: var(--sub);\n}\n\n.create-project-button:active {\n    transform: scale(0.98);\n}\n\n.task-legend {\n    margin-bottom: 10px;\n}\n\n.task-modal {\n    display: grid;\n    grid-template: 1fr 10fr 2fr/ 10fr 3fr 1fr;\n\n    position: absolute;\n    left: 5%; \n    right: 0; \n    top: 0;\n    bottom:2%;\n    margin: auto;\n    z-index: 999;\n    height: 580px;\n    width: 450px;\n    background-color: #2f2f2f;\n    border: var(--main) solid 5px;\n    color: white;\n    visibility: hidden;\n}\n\n.create-task-form {\n    grid-area: 1 / 1 / 3 / 3;\n    display: flex;\n    flex-direction: column;\n\n    margin: auto;\n    width: 300px;\n    font-size: 1.3rem;\n    padding-left: 40px;\n    padding-top: 24px;\n}\n\n.task-modal-input {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    margin: 15px 10px;\n}\n\n.task-input {\n    margin-top: 10px;\n    width: 100%;\n    height: 25px;\n    font-size: 22px;\n}\n\n.task-input-textarea {\n    margin-top: 10px;\n    width: 100%;\n    height: 60px;\n    font-size: 16px;\n}\n\n.task-x-button {\n    grid-area: 1 / 3 / 2 / 4;\n\n    display: flex;\n    justify-content: center;\n\n    margin: 0px 15px;\n    font-size: 35px;\n    color: white;\n}\n\n.create-task-button {\n    grid-area: 3 / 1 / 4 / 3;\n    \n    margin-top: 20px;\n    margin-left: 300px;\n    max-width: 60%;\n    height: 30px;\n\n    background-color: var(--main);\n    border: none;\n    color: var(--text);\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\n.create-task-button:hover {\n    background-color: var(--sub);\n}\n\n.create-task-button:active {\n    transform: scale(0.98);\n}\n\n.modal-backdrop {\n    position:fixed;\n    top:8vh;\n    bottom: 7vh;\n    left:0;\n    width:100vw;\n    height:100vh;\n    background-color:rgba(0, 0, 0, 0.434);\n    visibility: hidden;\n}\n\n.visible {\n    visibility: visible;\n}\n\n.blur {\n    filter: blur(1.8px);\n    pointer-events: none;\n\n    transition: filter .2s ease-in-out;\n}\n\n.quick-blur {\n    filter: blur(2px);\n    pointer-events: none;\n\n    transition: filter .05s ease-in-out;\n}\n\n.footer-container {\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 1fr;\n\n    position: fixed;\n    bottom: 0px;\n\n    width: 100vw;\n    background-color: #1e1e1e;\n    height: 5vh;\n}\n\n.footer-text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    grid-area: 1 / 2 / 2 / 3;\n\n    color: white;\n    margin: 0px;\n}\n\n.theme-container {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    \n\n    grid-area: 1 / 3 / 2 / 4;\n\n    color: white;\n    margin-right: 40px;\n    column-gap: 14px;\n}\n\n.required {\n    color:rgb(252, 104, 104);\n    margin-left:2px;\n}\n\n.disable-click {\n    pointer-events: none;\n}\n\n.select-date {\n    display:flex; \n    align-items: center;\n\n    margin: 0px 20px;\n    color: white;\n}\n\n.due {\n    border: #505050 2px solid;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin: 0px 10px;\n    width: 100px;\n    height: 30px;\n    cursor: pointer;\n\n    font-size: 14spx;\n}\n\n.due-selected {\n    background-color: #727272;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/moment/locale sync recursive \\b\\B":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale/ sync \b\B ***!
  \***********************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/moment/locale sync recursive \\b\\B";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    0
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match('^[^/\\\\]*$') != null;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            "object" !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = undefined;
                __webpack_require__("./node_modules/moment/locale sync recursive \\b\\B")("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.4';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

const Project = (() => {
    const projectArray = [{
        name: "Work", 
        taskArray: [
            {
                title: "Do Work", 
                description: "Gotta get that money", 
                dueDate: moment().format("YYYY-M-D"), 
                priority: "high", 
                complete: false, 
                completedOn: moment("3000-12-25")
            }, 
            {
                title: "Team Meeting",
                description: "Rick will give a nice little presentation",
                dueDate: moment("2023-04-15").format("YYYY-M-D"),
                priority: "low", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Christmas Party",
                description: "Christmas themed attire required",
                dueDate: moment("2023-12-23").format("YYYY-M-D"),
                priority: "mid", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Make To-Do List Tool",
                description: "Really need this to increase productivity",
                dueDate: moment("2023-03-29").format("YYYY-M-D"),
                priority: "highest", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Sleep",
                description: "ZZZzzzz",
                dueDate: moment().add(1, "days").format("YYYY-M-D"),
                priority: "highest", 
                complete: false,
                completedOn: moment("3000-12-25")
            }
        ]
    }, 
    {
        name: "School",
        taskArray: [
            {
                title: "Do Homework",
                description: "get you smart up",
                dueDate: moment().format("YYYY-M-D"),
                priority: "low af", complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Baseball Practice", description: "hittin' bombs",
                dueDate: moment().format("YYYY-M-D"),
                priority: "medium",
                complete: false,
                completedOn: moment("3000-12-25")
            }
        ]
    }
];

    const projectFactory = (name) => {
        let taskArray = [{title: "Get Started!", description: "Description goes here!", dueDate: moment().format("YYYY-M-D"), priority: "high", complete: false, completedOn: moment("3000-12-25")}];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
    }

    function deleteTask(project, task) {
        let taskArray = project.taskArray
        let taskToDelete;
        for (let taskIndex in taskArray) {
            if (taskArray[taskIndex] === task) {
                taskToDelete = taskIndex;
            }
        };
        taskArray.splice(taskToDelete, 1)
    }

    return { projectFactory, createProject, projectArray, deleteTask }
})();

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

const Task = (() => {

    const taskFactory = (title, description, dueDate, priority, complete, completedOn) => {
        return { title, description, dueDate, priority, complete, completedOn }
    };

    function createTask(taskName, taskDesc, taskPrio, taskDate, project) {
        const newTask = taskFactory(taskName, taskDesc, taskDate, taskPrio, false, moment("3000-12-25"));
        project.taskArray.push(newTask);
    }

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

const UI = (() => {
    let displayedProject = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0];
    let sidebarToggle = false;
    let sidebarTaskDisplayed = {};
    const root = document.querySelector(':root');
    let todayFilter = false;
    let weekFilter = false;
    let monthFilter = false;

    root.style.setProperty('--screen-width', window.innerWidth + "px");

    window.addEventListener("resize", function() {
        root.style.setProperty('--screen-width', window.innerWidth + "px");
    })
    
    function renderModals() {
        let modalContainer = document.createElement("div");
        modalContainer.id = "modal-container";
        modalContainer.classList.add("modal-container");
        document.body.appendChild(modalContainer);

        modalContainer.innerHTML = `
        <div class="project-modal" id="project-modal">
            <div class="project-x-button" id="project-x-button">&times;</div>
            <form class="create-project-form" id="create-project-form">
                <legend>New Project</legend>
                <label for="project-name">Project Name<span class="required">*</span> :</label>
                <input type="text" id="project-name" class="project-input" name="project-name" required>
            </form>
            <button id="create-project-button" class="create-project-button" type="button">Create</button>
        </div>
        <div class="task-modal" id="task-modal">
            <div class="task-x-button" id="task-x-button">&times;</div>
            <form class="create-task-form" id="create-task-form">
                <legend class="task-legend">New Task</legend>
                <div class="task-modal-input">
                    <label for="task-title">Title<span class="required">*</span> :</label>
                    <input class="task-input" type="text" id="task-title" name="task-title" required>
                </div>
                <div class="task-modal-input">
                    <label for="task-desc">Description:</label>
                    <textarea rows="4" cols="50" class="task-input-textarea" type="textarea" id="task-desc" name="task-desc"></textarea>
                </div>
                <div class="task-modal-input">
                    <label for="task-prio">Priority<span class="required">*</span> :</label>
                    <input class="task-input" type="text" id="task-prio" name="task-prio" value="Low">
                </div>
                <div class="task-modal-input">
                    <label for="task-date">Deadline<span class="required">*</span> :</label>
                    <input class="task-input" type="date" id="task-date" name="task-date" value="${moment().format("YYYY-MM-DD")}">
                </div>
            </form>
            <button id="create-task-button" class="create-task-button" type="button">Create</button>
        </div>
        <div class="modal-backdrop" id="modal-backdrop"></div>
        `

        document.getElementById("project-modal").addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("create-project-button").click();
            }
        });

        document.getElementById("task-modal").addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("create-task-button").click();
            }
        });
    }

    function openModal(modal) {
        document.getElementById(modal).classList.add("visible")
        document.getElementById("modal-backdrop").classList.add("visible")
        document.getElementById("main-container").classList.add("blur")
    }

    function closeModal(modal) {
        document.getElementById(modal).classList.remove("visible")
        document.getElementById("modal-backdrop").classList.remove("visible")
        document.getElementById("main-container").classList.remove("blur")
        document.getElementById("create-project-form").reset();
        document.getElementById("create-task-form").reset();
    }

    function closeSidebar() {
        document.getElementById("task-sidebar").classList.remove("task-sidebar-visible")
        document.getElementById("task-sidebar").classList.add("task-sidebar-hidden")
        sidebarToggle = false;

        let taskItems = document.querySelectorAll(".task-item");
        taskItems.forEach((item) => {
            if (item.classList.contains("task-complete")) {
                item.classList.remove("task-complete-short")
                item.classList.add("task-complete-long")
            } else {
                item.classList.remove("task-item-short")
                item.classList.add("task-item-long")
            }
        });
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
                <div class="add-task">
                    <h2>Tasks</h2>
                    <svg class="add-task-button" id="add-task-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                </div>
                <div class="select-date">
                    <p class="due " id="due-today">
                    Today
                    </p>
                    <p class="due" id="due-week">
                    This Week
                    </p>
                    <p class="due" id="due-month">
                    This Month
                    </p>
                </div>
            </div>
            <div id="task-list" class="task-list">
            </div>
        </div>
            `

        document.getElementById('add-project-button').addEventListener('click', createProjectModal)
        document.getElementById('add-task-button').addEventListener('click', createTaskModal)

        let dueTodayButton = document.getElementById('due-today');
        dueTodayButton.onclick = () => {
            todayFilterToggle();
            renderToday();
            console.log(todayFilter)
        }
        let dueWeekButton = document.getElementById('due-week');
        dueWeekButton.onclick = () => {
            weekFilterToggle();
            renderWeek();
        }
        let dueMonthButton = document.getElementById('due-month');
        dueMonthButton.onclick = () => {
            monthFilterToggle()
            renderMonth();
        }
    
       initTasks();
    }

    function renderFooter() {
        let footerContainer = document.createElement("div");
        footerContainer.id = "footer-container";
        footerContainer.classList.add("footer-container");
        document.body.appendChild(footerContainer);

        footerContainer.innerHTML = `
        <p class="footer-text">©︎ Kenny 2023</p>
        <div class="theme-container">
            <label for="theme-selector">Color Theme:</label>
            <input type="color" id="theme-selector" class="theme-selector" name="theme-selector" value="#ff7070">
        </div>
        `
        
        document.getElementById('theme-selector').addEventListener('input', changeTheme)
    };

    function changeTheme() {
        let colorValue = (document.getElementById("theme-selector").value);

        function hexToHSL(H) {
            // Convert hex to RGB first
            let r = 0, g = 0, b = 0;
            if (H.length == 4) {
              r = "0x" + H[1] + H[1];
              g = "0x" + H[2] + H[2];
              b = "0x" + H[3] + H[3];
            } else if (H.length == 7) {
              r = "0x" + H[1] + H[2];
              g = "0x" + H[3] + H[4];
              b = "0x" + H[5] + H[6];
            }
            // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;
          
            if (delta == 0)
              h = 0;
            else if (cmax == r)
              h = ((g - b) / delta) % 6;
            else if (cmax == g)
              h = (b - r) / delta + 2;
            else
              h = (r - g) / delta + 4;
          
            h = Math.round(h * 60);
          
            if (h < 0)
              h += 360;
          
            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            let lightShade = "hsl(" + h + "," + s + "%," + (l + 14) + "%)";
          
            return lightShade
          }

        let hslLightValue = hexToHSL(colorValue)

        let textColorCheck = hslLightValue.match(/(?<=,)[^,]+(?=%\))/);

        if (textColorCheck > (64) ) {
            root.style.setProperty('--text', "black");
        } else {
            root.style.setProperty('--text', "white");
        }
        
        root.style.setProperty('--main', colorValue);
        root.style.setProperty('--sub', hslLightValue);
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
                renderTasks((projectArray[i]).taskArray);
            };
            let individualProject = document.createElement("li");
            individualProject.innerHTML = projectArray[i].name;
            individualProject.classList.add("project-text")
            projectDiv.appendChild(individualProject);

            projectList.appendChild(projectDiv)
        }
        highlightProject();
    }

    function highlightProject() {
        for (let projectNumber in _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray) {
            if (document.getElementById("project" + projectNumber)) {
                if (_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[projectNumber].taskArray === displayedProject.taskArray) {
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
            renderTasks(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[0].taskArray);
        }
    };

    function renderTasks2() {

    }

    function renderTasks(taskArray) {
        (taskArray).sort(function(a, b) {
                return (b.completedOn).diff(a.completedOn)
            }
        )
        
        let taskList = document.getElementById("task-list");
        taskList.innerHTML = '';

        let itemContainer = document.createElement("div");
        itemContainer.id = "item-container";
        itemContainer.classList.add("item-container");
        if (sidebarToggle === true) {
            itemContainer.onclick = () => {
                closeSidebar();
            }
        }

        let taskListSection = document.getElementById("task-list");
        let taskSidebar = document.createElement("div");
        taskSidebar.id = "task-sidebar";
        taskSidebar.classList.add("task-sidebar", "task-sidebar-hidden");
        taskListSection.appendChild(taskSidebar);

        if (!taskArray[0]) {
            let noTaskMessage = document.createElement("p");
            noTaskMessage.innerText = "No tasks yet!";
            noTaskMessage.classList.add("notask-message");
            taskList.appendChild(noTaskMessage);
            return
        };

        for (let i = 0; i < (taskArray).length; i++) {
            let taskItem = document.createElement("div");
            taskItem.classList.add("task-item", taskItem.complete ? "task-complete-long" : "task-item-long")
            taskItem.id = "task-item"
            taskItem.name = "task-item"
            if (sidebarToggle === true) {
                if (taskItem.complete === true) {
                    taskItem.classList.remove("task-complete-long");
                    taskItem.classList.add("task-complete-short");
                } else {
                    taskItem.classList.remove("task-item-long");
                    taskItem.classList.add("task-item-short");
                }
            }

            if (taskArray[i].complete === true) {
                taskItem.classList.add("task-complete");
            };
            let taskInfo = document.createElement("div");
            taskInfo.classList.add("task-info-container");
            taskInfo.innerHTML = `
            <div class="task-title" id="task-title"><p>${taskArray[i].title}</p></div>
            <div class="task-desc" id="task-desc"><p>${taskArray[i].description}</p></div>
            <div class="task-prio" id="task-prio"><p>${taskArray[i].priority}</p></div>
            <div class="task-date" id="task-date"><p>${taskArray[i].dueDate}</p></div>
            `
            taskInfo.onclick = (e) => {
                e.stopPropagation();
                console.log(window.innerWidth)
                if ((sidebarToggle === true) && (taskArray[i].title !== document.getElementById("side-title").innerHTML)) {
                    setSidebarInfo(taskArray[i], taskSidebar, e);
                } else {
                    toggleTaskSidebar(taskArray[i], taskSidebar);
                }
            }

            let checkDiv = document.createElement("div");
            checkDiv.id = "task-checkbox"
            checkDiv.classList.add("task-checkbox")

            let completeCheck = document.createElement("input")
            completeCheck.classList.add("checkbox-input")
            completeCheck.id="checkbox" + i
            completeCheck.type = "checkbox"
            completeCheck.checked = taskArray[i].complete;
            completeCheck.onchange = () => {
                taskArray[i].complete;
            }

            checkDiv.onclick = (e) => {
                e.stopPropagation();
                completeCheck.checked = !taskArray[i].complete;
                taskArray[i].complete = !taskArray[i].complete
                if (document.getElementById("side-title")) {
                    if (taskArray[i].title === document.getElementById("side-title").innerHTML) {
                        setSidebarInfo(taskArray[i], taskSidebar, e)
                    }
                }
                if (taskArray[i].complete === true) {
                    taskArray[i].completedOn = moment();
                    taskItem.classList.add("task-complete")
                    _Task__WEBPACK_IMPORTED_MODULE_1__.Task.updateComplete(document.getElementById("checkbox" + i))
                } else {
                    taskItem.classList.remove("task-complete")
                    _Task__WEBPACK_IMPORTED_MODULE_1__.Task.updateComplete(document.getElementById("checkbox" + i))
                    taskArray[i].completedOn = moment("3000-12-25");
                };
                document.getElementById("item-container").classList.add("disable-click")
                if (taskArray.length !== 0) {
                    setTimeout(function() {
                        document.getElementById("item-container").classList.remove("disable-click")
                    }, 800);
                    setTimeout(function() {
                        renderTasks(displayedProject.taskArray);
                    }, 800);
                }
            }
            
            checkDiv.appendChild(completeCheck);

            taskItem.appendChild(checkDiv);
            taskItem.appendChild(taskInfo);

            itemContainer.appendChild(taskItem);
        }
        if (sidebarToggle === true) {
            taskSidebar.classList.remove("task-sidebar-hidden")
            taskSidebar.classList.add("task-sidebar-visible")
            setSidebarInfo(sidebarTaskDisplayed, taskSidebar)
        };
        taskList.appendChild(itemContainer);
        highlightProject();
    };

    function todayFilterToggle() {
        weekFilter = false;
        monthFilter = false;
        todayFilter = !todayFilter;
        document.getElementById("due-week").classList.remove("due-selected");
        document.getElementById("due-month").classList.remove("due-selected");
    }

    function renderToday() {
        if (todayFilter === true) {
            let todayTaskArray = [];
            let taskArray = displayedProject.taskArray
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].dueDate === moment().format("YYYY-M-DD")) {
                    todayTaskArray.push(taskArray[i])
                }
            }
            document.getElementById("due-today").classList.add("due-selected");
            renderTasks(todayTaskArray)
        } else {
            document.getElementById("due-today").classList.remove("due-selected");
            renderTasks(displayedProject.taskArray);
        }
    }

    function weekFilterToggle() {
        todayFilter = false;
        monthFilter = false;
        weekFilter = !weekFilter;
        document.getElementById("due-today").classList.remove("due-selected");
        document.getElementById("due-month").classList.remove("due-selected");
    }

    function renderWeek() {
        if (weekFilter === true) {
            let weekTaskArray = [];
            let taskArray = displayedProject.taskArray
            for (let i = 0; i < taskArray.length; i++) {
                if ((moment().isBefore(taskArray[i].dueDate) || moment().isSame(taskArray[i].dueDate, "day")) && moment().diff(taskArray[i].dueDate, "days") > -7) {
                    weekTaskArray.push(taskArray[i])
                }
            }
            document.getElementById("due-week").classList.add("due-selected");
            renderTasks(weekTaskArray)
        } else {
            document.getElementById("due-week").classList.remove("due-selected");
            renderTasks(displayedProject.taskArray);
        }
    }

    function monthFilterToggle() {
        todayFilter = false;
        weekFilter = false;
        monthFilter = !monthFilter
        document.getElementById("due-today").classList.remove("due-selected");
        document.getElementById("due-week").classList.remove("due-selected");
    }

    function renderMonth() {
        if (monthFilter === true) {
            let monthTaskArray = [];
            let taskArray = displayedProject.taskArray
            for (let i = 0; i < taskArray.length; i++) {
                if ((moment().isSame(taskArray[i].dueDate, "month"))) {
                    monthTaskArray.push(taskArray[i])
                }
            }
            document.getElementById("due-month").classList.add("due-selected");
            renderTasks(monthTaskArray)
        } else {
            document.getElementById("due-month").classList.remove("due-selected");
            renderTasks(displayedProject.taskArray);
        }
    }

    function sidebarHTML(task, taskStatus) {
        return `
                <div class="sidebar-info" id="sidebar-info">
                    <div class="info-container">
                        <input type="text" value="${task.title}" class="side-title" id="side-title">
                        <div class="desc-container">
                            <textarea cols="50" rows="6" class="side-description" id="side-description">${task.description}</textarea>
                        </div>
                        <p class="side-priority" id="side-priority">${task.priority}</p>
                        <div class="due-date-container">
                            <label for="side-due-date">Deadline: </label>
                            <input type="date" class="side-due-date" id="side-due-date" name="side-due-date" value="${moment(task.dueDate).format("yyyy-MM-DD")}">
                        </div>
                        <p class="side-status" id="side-status">Status: ${taskStatus}</p>
                        <button class="delete-button" id="delete-button">
                            <div class="delete-container">
                                <p class="delete-text">Delete</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="sidebar-x-button" id="sidebar-x-button">&times;</div>
                </div>
                `
    }

    function setSidebarInfo(task, sidebarElement, eventTarget) {
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        if (eventTarget !== undefined && task !== sidebarTaskDisplayed) {
            sidebarElement.classList.add("quick-blur");
            sidebarElement.innerHTML= sidebarHTML(task, taskStatus);
            setTimeout(() => {
                sidebarElement.classList.remove("quick-blur");
            }, 50);
        } else {
            sidebarElement.innerHTML= sidebarHTML(task, taskStatus);
        };

        let xButton = document.getElementById("sidebar-x-button");
        xButton.onclick = () => {
            closeSidebar();
        }

        sidebarTaskDisplayed = task;

        (document.getElementById("delete-button")).onclick = () => {
            _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.deleteTask(displayedProject, sidebarTaskDisplayed);
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = false;
            renderTasks(displayedProject.taskArray)
        }

        (document.getElementById("side-title")).oninput = (e) => {
            let originalText = sidebarTaskDisplayed.title;
            let newText = e.target.value;
            let difIndex = (findFirstDiffPos(originalText, newText) + 1)

            sidebarTaskDisplayed.title = newText;
            renderTasks(displayedProject.taskArray)
            document.getElementById("side-title").focus()
            document.getElementById("side-title").setSelectionRange(difIndex, difIndex, "forward");
            document.getElementById("side-title").value = newText;
        }
        (document.getElementById("side-description")).oninput = (e) => {
            let originalText = sidebarTaskDisplayed.description;
            let newText = e.target.value;
            let difIndex = (findFirstDiffPos(originalText, newText) + 1)

            sidebarTaskDisplayed.description = newText;
            renderTasks(displayedProject.taskArray)
            document.getElementById("side-description").focus()
            document.getElementById("side-description").setSelectionRange(difIndex, difIndex, "forward");
            document.getElementById("side-description").value = newText;
        }
        (document.getElementById("side-due-date")).onchange = () => {
            sidebarTaskDisplayed.dueDate = moment((document.getElementById("side-due-date")).value).format("YYYY-MM-DD");
            renderTasks(displayedProject.taskArray)
            console.log(sidebarTaskDisplayed)
        }
    }

    function toggleTaskSidebar(task, sidebarElement) {
        let itemContainer = document.getElementById("item-container");

        itemContainer.onclick = () => {
            closeSidebar();
        }

        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };

        sidebarElement.innerHTML= sidebarHTML(task, taskStatus);

        if (sidebarToggle === false) {
            sidebarElement.classList.remove("task-sidebar-hidden")
            sidebarElement.classList.add("task-sidebar-visible")
            sidebarToggle = !sidebarToggle;
            sidebarTaskDisplayed = task;
        } else {
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = () => {
            }
        }

        let xButton = document.getElementById("sidebar-x-button");

        xButton.onclick = () => {
            closeSidebar();
        }

        (document.getElementById("delete-button")).onclick = () => {
            _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.deleteTask(displayedProject, sidebarTaskDisplayed);
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = false;
            renderTasks(displayedProject.taskArray)
        }
        (document.getElementById("side-title")).oninput = (e) => {
            let originalText = sidebarTaskDisplayed.title;
            let newText = e.target.value;
            let difIndex = (findFirstDiffPos(originalText, newText) + 1)

            sidebarTaskDisplayed.title = newText;
            renderTasks(displayedProject.taskArray)
            document.getElementById("side-title").focus()
            document.getElementById("side-title").setSelectionRange(difIndex, difIndex, "forward");
            document.getElementById("side-title").value = newText;
        }
        (document.getElementById("side-description")).oninput = (e) => {
            let originalText = sidebarTaskDisplayed.description;
            let newText = e.target.value;
            let difIndex = (findFirstDiffPos(originalText, newText) + 1)

            sidebarTaskDisplayed.description = newText;
            renderTasks(displayedProject.taskArray)
            document.getElementById("side-description").focus()
            document.getElementById("side-description").setSelectionRange(difIndex, difIndex, "forward");
            document.getElementById("side-description").value = newText;
        }
        (document.getElementById("side-due-date")).onchange = () => {
            sidebarTaskDisplayed.dueDate = moment((document.getElementById("side-due-date")).value).format("YYYY-MM-DD");
            renderTasks(displayedProject.taskArray)
            console.log(sidebarTaskDisplayed)
        }

        if (sidebarToggle === true) {
            let taskItems = document.querySelectorAll(".task-item");
            taskItems.forEach((item) => {
                if (item.classList.contains("task-complete")) {
                    item.classList.add("task-complete-short")
                    item.classList.remove("task-complete-long")
                } else {
                    item.classList.add("task-item-short")
                    item.classList.remove("task-item-long")
                }
              });
        }
    }

    function findFirstDiffPos(a, b) {
        var i = 0;
        if (a === b) return -1;
        while (a[i] === b[i]) i++;
        return i;
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
            if (document.getElementById("create-project-form")[0].checkValidity()) {
                createProjectItem(projectModal)
            } else {
                document.getElementById("create-project-form")[0].reportValidity();
            }
        }
    };

    function createProjectItem(projectModal) {
        let projectName = document.getElementById("project-name").value
        _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.createProject(projectName);
        renderProjects(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray);
        displayedProject = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray.length - 1)]
        renderTasks((_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray[(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray.length - 1)]).taskArray)
        sidebarToggle = false;
        closeModal(projectModal);
    }

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
            if (document.getElementById("create-task-form")[0].checkValidity()) {
                let taskTitle = document.getElementById("task-title").value
                let taskDesc = document.getElementById("task-desc").value
                let taskPrio = document.getElementById("task-prio").value
                let taskDate = moment(document.getElementById("task-date").value).format("YYYY/M/D");
                _Task__WEBPACK_IMPORTED_MODULE_1__.Task.createTask(taskTitle, taskDesc, taskPrio, taskDate, displayedProject);
                sidebarToggle = false;
                renderTasks(displayedProject.taskArray);
                closeModal(taskModal);
            } else {
                document.getElementById("create-task-form")[0].reportValidity();
            }
        }
    };

    function renderPage() {
        renderModals();
        renderHeader();
        renderMainContainer();
        renderProjects(_Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectArray);
        renderFooter()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsSUFBSTs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQ0FBa0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkIscUJBQXFCLEVBQUU7QUFDdkIsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUIsd0JBQXdCLElBQUk7QUFDNUIsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSx3RUFBd0UsTUFBTSxtQkFBbUIsTUFBTSxxQkFBcUIsTUFBTSxFQUFFLElBQUk7QUFDaks7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QztBQUM5Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBTztBQUN4QyxnQkFBZ0IsMEVBQWUsSUFBVyxPQUFPLENBQUM7QUFDbEQ7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxJQUFJLEVBQUU7QUFDcEM7QUFDQSw0QkFBNEIsRUFBRSxJQUFJLEVBQUU7QUFDcEM7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDLCtCQUErQixFQUFFO0FBQ2pDLGlDQUFpQyxFQUFFO0FBQ25DLCtCQUErQixFQUFFO0FBQ2pDLDZCQUE2QixFQUFFLElBQUksRUFBRTtBQUNyQyw0QkFBNEIsRUFBRTtBQUM5QixtQ0FBbUMsR0FBRztBQUN0Qyw2QkFBNkIsRUFBRTtBQUMvQiwrQkFBK0IsRUFBRSxJQUFJLEVBQUU7QUFDdkMsOEJBQThCLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLDRCQUE0QixFQUFFO0FBQzlCLDJCQUEyQixFQUFFO0FBQzdCLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELElBQUksMERBQTBELElBQUkscUVBQXFFLEVBQUU7QUFDak07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25qTEQsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNXO0FBQ3ZCOztBQUVyQixzREFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDSmIsYUFBYSxtQkFBTyxDQUFDLCtDQUFROztBQUV0QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIseUtBQXlLO0FBQ25NLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNGbUM7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLCtDQUFROztBQUV0Qjs7QUFFUDtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbUM7QUFDUDtBQUM3QixhQUFhLG1CQUFPLENBQUMsK0NBQVE7O0FBRXRCO0FBQ1AsMkJBQTJCLDhEQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLDhCQUE4QjtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDJEQUFvQjtBQUN0RDtBQUNBLG9CQUFvQiwyREFBb0I7QUFDeEM7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksOERBQXVCO0FBQ25DO0FBQ0Esd0JBQXdCLHdFQUFpQztBQUN6RDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsbUJBQW1CO0FBQzVFLHVEQUF1RCx5QkFBeUI7QUFDaEYsdURBQXVELHNCQUFzQjtBQUM3RSx1REFBdUQscUJBQXFCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFtQjtBQUN2QyxrQkFBa0I7QUFDbEI7QUFDQSxvQkFBb0Isc0RBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBLDBHQUEwRyxpQkFBaUI7QUFDM0g7QUFDQSxzRUFBc0UsY0FBYztBQUNwRjtBQUNBO0FBQ0Esc0hBQXNILDBDQUEwQztBQUNoSztBQUNBLDBFQUEwRSxXQUFXO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZLHlEQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHlEQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQXFCO0FBQzdCLHVCQUF1QiwyREFBb0I7QUFDM0MsMkJBQTJCLDJEQUFvQixFQUFFLGtFQUEyQjtBQUM1RSxxQkFBcUIsMkRBQW9CLEVBQUUsa0VBQTJCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBb0I7QUFDM0M7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlLyBzeW5jIFxcYlxcQiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbjogI2ZmNzA3MDtcXG4gICAgLS1zdWI6ICNmZmI4Yjc7XFxuICAgIC0tdGV4dDogaHNsKDAsIDAlLCAwJSk7XFxuICAgIC0tbWFpbi1oZWlnaHQ6IDg3dmg7XFxuICAgIC0tc2NyZWVuLXdpZHRoOiAoMTAwdncpO1xcbiAgfVxcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBzb2xpZDtcXG4gICAgb3V0bGluZS13aWR0aDogMnB4O1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1zdWIpO1xcbiAgICAvKiBib3JkZXI6IHZhcigtLW1haW4pIDJweCBzb2xpZDsgKi9cXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHNvbGlkO1xcbiAgICBvdXRsaW5lLXdpZHRoOiAycHg7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLXN1Yik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgd2lkdGg6IDEuMTVlbTtcXG4gICAgaGVpZ2h0OiAxLjE1ZW07XFxuICAgIGJvcmRlcjogMC4xMGVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBsaSwgbGFiZWwsIGxlZ2VuZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbmE6bGluayB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5hOnZpc2l0ZWQgeyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuYTpob3ZlciB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmFjdGl2ZSB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjODU4NTg1O1xcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKVxcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWIpO1xcbiAgfVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDAgNDBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbilcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciA0ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1haW4taGVpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTQsIDExNCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA5MCUgLyAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYWluLWhlaWdodCk7XFxuXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcbn1cXG5cXG4ucHJvamVjdHMtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxufVxcblxcbi5wcm9qZWN0LWRpdjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDQyLCA0Mik7XFxufVxcblxcbi5wcm9qZWN0LWRpdjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbn1cXG5cXG4ubm90YXNrLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwJSAvIDQ2cHggYXV0byAyMHB4O1xcblxcbiAgICBtYXJnaW46IDE1cHggNDBweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1zdWIpIHNvbGlkIDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViKTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBsaW5lYXI7XFxuICAgIHotaW5kZXg6IDY7XFxufVxcblxcbi50YXNrLWl0ZW0tbG9uZyB7XFxuICAgIHdpZHRoOiBjYWxjKDAuNjkgKiB2YXIoLS1zY3JlZW4td2lkdGgpKTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2staXRlbS1zaG9ydCB7XFxuICAgIHdpZHRoOiBjYWxjKCgwLjczICogdmFyKC0tc2NyZWVuLXdpZHRoKSkgLSAzNDBweCk7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gLTEgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA1MCUgNTAlIC8gMjBweCByZXBlYXQoNywgMWZyKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay1wcmlvIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gOCAvIDIgLyA5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IDIgLyA4IC8gMyAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGUge1xcbiAgICBvcGFjaXR5OiAuMztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzNzIGxpbmVhcjtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtc2hvcnQge1xcbiAgICB3aWR0aDogY2FsYygoMC43MyAqIHZhcigtLXNjcmVlbi13aWR0aCkpIC0gMzQwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWxvbmcge1xcbiAgICB3aWR0aDogY2FsYygwLjY5ICogdmFyKC0tc2NyZWVuLXdpZHRoKSk7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwJSA5MCUgLyBhdXRvO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tbWFpbi1oZWlnaHQpO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYm9yZGVyOiB2YXIoLS1tYWluKSBzb2xpZCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XFxuICAgIGhlaWdodDogNzguMjklO1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4uc2lkZWJhci1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stc2lkZWJhci1oaWRkZW4ge1xcbiAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgbWF4LXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1tYWluKSBzb2xpZCAwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1zaWRlYmFyLXZpc2libGUge1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tbWFpbikgc29saWQgN3B4O1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2lkZS10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MjkyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIG1heC13aWR0aDogODUlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgbWluLWhlaWdodDogMTB2dztcXG59XFxuXFxuLnNpZGUtZGVzY3JpcHRpb24ge1xcbiAgICBtYXgtd2lkdGg6IDg5LjklO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyOTI5MjtcXG4gICAgbWluLWhlaWdodDogMTB2dztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2lkZS1wcmlvcml0eSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2lkZS1kdWUtZGF0ZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogNnB4O1xcblxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlLXN0YXR1cyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2lkZWJhci14LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyA2IC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAyZnIvIDEwZnIgM2ZyIDFmcjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1JTsgXFxuICAgIHJpZ2h0OiAwOyBcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcXG4gICAgYm9yZGVyOiB2YXIoLS1tYWluKSBzb2xpZCA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC14LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbjogMHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMztcXG5cXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDI0cHggNDBweDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yik7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuXFxuLnRhc2stbGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAyZnIvIDEwZnIgM2ZyIDFmcjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1JTsgXFxuICAgIHJpZ2h0OiAwOyBcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206MiU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBoZWlnaHQ6IDU4MHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XFxuICAgIGJvcmRlcjogdmFyKC0tbWFpbikgc29saWQgNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWZvcm0ge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuXFxuLnRhc2stbW9kYWwtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICAgbWFyZ2luOiAxNXB4IDEwcHg7XFxufVxcblxcbi50YXNrLWlucHV0IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udGFzay1pbnB1dC10ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2steC1idXR0b24ge1xcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBtYXJnaW46IDBweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMzBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxufVxcblxcbi5tb2RhbC1iYWNrZHJvcCB7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB0b3A6OHZoO1xcbiAgICBib3R0b206IDd2aDtcXG4gICAgbGVmdDowO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40MzQpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMS44cHgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnF1aWNrLWJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAuMDVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnIgMWZyO1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMHB4O1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxuICAgIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGhlbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIFxcblxcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNHB4O1xcbn1cXG5cXG4ucmVxdWlyZWQge1xcbiAgICBjb2xvcjpyZ2IoMjUyLCAxMDQsIDEwNCk7XFxuICAgIG1hcmdpbi1sZWZ0OjJweDtcXG59XFxuXFxuLmRpc2FibGUtY2xpY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1kYXRlIHtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZHVlIHtcXG4gICAgYm9yZGVyOiAjNTA1MDUwIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbjogMHB4IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRzcHg7XFxufVxcblxcbi5kdWUtc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3MjcyO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FB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O0lBQ3ZCLG1CQUFtQjs7SUFFbkIsd0JBQXdCOztJQUV4QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7OztJQUdwQix3QkFBd0I7O0lBRXhCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7O0lBRWYsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluOiAjZmY3MDcwO1xcbiAgICAtLXN1YjogI2ZmYjhiNztcXG4gICAgLS10ZXh0OiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1tYWluLWhlaWdodDogODd2aDtcXG4gICAgLS1zY3JlZW4td2lkdGg6ICgxMDB2dyk7XFxuICB9XFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHNvbGlkO1xcbiAgICBvdXRsaW5lLXdpZHRoOiAycHg7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLXN1Yik7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tbWFpbikgMnB4IHNvbGlkOyAqL1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogc29saWQ7XFxuICAgIG91dGxpbmUtd2lkdGg6IDJweDtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tc3ViKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB3aWR0aDogMS4xNWVtO1xcbiAgICBoZWlnaHQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjEwZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl0ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGxpLCBsYWJlbCwgbGVnZW5kIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuYTpsaW5rIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbmE6dmlzaXRlZCB7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG5cXG5hOmhvdmVyIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcblxcbmE6YWN0aXZlIHsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICM4NTg1ODU7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4pXFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Yik7XFxuICB9XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbjogMCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKVxcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMWZyIDRmcjtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tbWFpbi1oZWlnaHQpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDkwJSAvIDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLW1haW4taGVpZ2h0KTtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMztcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG59XFxuXFxuLnByb2plY3QtZGl2OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgNDIsIDQyKTtcXG59XFxuXFxuLnByb2plY3QtZGl2Om50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxufVxcblxcbi5ub3Rhc2stbWVzc2FnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMDAlIC8gNDZweCBhdXRvIDIwcHg7XFxuXFxuICAgIG1hcmdpbjogMTVweCA0MHB4O1xcbiAgICBib3JkZXI6IHZhcigtLXN1Yikgc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIpO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGxpbmVhcjtcXG4gICAgei1pbmRleDogNjtcXG59XFxuXFxuLnRhc2staXRlbS1sb25nIHtcXG4gICAgd2lkdGg6IGNhbGMoMC42OSAqIHZhcigtLXNjcmVlbi13aWR0aCkpO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1pdGVtLXNob3J0IHtcXG4gICAgd2lkdGg6IGNhbGMoKDAuNzMgKiB2YXIoLS1zY3JlZW4td2lkdGgpKSAtIDM0MHB4KTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAtMSAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDUwJSA1MCUgLyAyMHB4IHJlcGVhdCg3LCAxZnIpO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtID4gZGl2ID4gcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50YXNrLXByaW8ge1xcbiAgICBncmlkLWFyZWE6IDEgLyA4IC8gMiAvIDk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDggLyAzIC8gOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZSB7XFxuICAgIG9wYWNpdHk6IC4zO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zM3MgbGluZWFyO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1zaG9ydCB7XFxuICAgIHdpZHRoOiBjYWxjKCgwLjczICogdmFyKC0tc2NyZWVuLXdpZHRoKSkgLSAzNDBweCk7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtbG9uZyB7XFxuICAgIHdpZHRoOiBjYWxjKDAuNjkgKiB2YXIoLS1zY3JlZW4td2lkdGgpKTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAlIDkwJSAvIGF1dG87XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYWluLWhlaWdodCk7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBib3JkZXI6IHZhcigtLW1haW4pIHNvbGlkIDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcXG4gICAgaGVpZ2h0OiA3OC4yOSU7XFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxufVxcblxcbi5zaWRlYmFyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1zaWRlYmFyLWhpZGRlbiB7XFxuICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICBtYXgtd2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW1haW4pIHNvbGlkIDBweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLXNpZGViYXItdmlzaWJsZSB7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1tYWluKSBzb2xpZCA3cHg7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zaWRlLXRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjkyOTI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgbWF4LXdpZHRoOiA4NSU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLmRlc2MtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICBtaW4taGVpZ2h0OiAxMHZ3O1xcbn1cXG5cXG4uc2lkZS1kZXNjcmlwdGlvbiB7XFxuICAgIG1heC13aWR0aDogODkuOSU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MjkyO1xcbiAgICBtaW4taGVpZ2h0OiAxMHZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zaWRlLXByaW9yaXR5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zaWRlLWR1ZS1kYXRlIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGUtc3RhdHVzIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zaWRlYmFyLXgtYnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDYgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIDJmci8gMTBmciAzZnIgMWZyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xcbiAgICBib3JkZXI6IHZhcigtLW1haW4pIHNvbGlkIDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LXgtYnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luOiAwcHggMTVweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAzO1xcblxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMjRweCA0MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xcblxcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViKTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbn1cXG5cXG4udGFzay1sZWdlbmQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIDJmci8gMTBmciAzZnIgMWZyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbToyJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGhlaWdodDogNTgwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcXG4gICAgYm9yZGVyOiB2YXIoLS1tYWluKSBzb2xpZCA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stZm9ybSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG5cXG4udGFzay1tb2RhbC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBtYXJnaW46IDE1cHggMTBweDtcXG59XFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi50YXNrLWlucHV0LXRleHRhcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzay14LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbjogMHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICBcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yik7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuXFxuLm1vZGFsLWJhY2tkcm9wIHtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDo4dmg7XFxuICAgIGJvdHRvbTogN3ZoO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjQzNCk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cigxLjhweCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucXVpY2stYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIC4wNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmciAxZnI7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50aGVtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgXFxuXFxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE0cHg7XFxufVxcblxcbi5yZXF1aXJlZCB7XFxuICAgIGNvbG9yOnJnYigyNTIsIDEwNCwgMTA0KTtcXG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xcbn1cXG5cXG4uZGlzYWJsZS1jbGljayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWRhdGUge1xcbiAgICBkaXNwbGF5OmZsZXg7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kdWUge1xcbiAgICBib3JkZXI6ICM1MDUwNTAgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNHNweDtcXG59XFxuXFxuLmR1ZS1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjcyNzI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXFxcXGJcXFxcQlwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsIi8vISBtb21lbnQuanNcbi8vISB2ZXJzaW9uIDogMi4yOS40XG4vLyEgYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBtb21lbnRqcy5jb21cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgZ2xvYmFsLm1vbWVudCA9IGZhY3RvcnkoKVxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgaG9va0NhbGxiYWNrO1xuXG4gICAgZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuICAgIC8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBob29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICAgICAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gICAgICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBOdW1iZXJdJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgICAgICB2YXIgcmVzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgYXJyTGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyckxlbjsgKytpKSB7XG4gICAgICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgICAgIGEudmFsdWVPZiA9IGIudmFsdWVPZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1wdHk6IGZhbHNlLFxuICAgICAgICAgICAgdW51c2VkVG9rZW5zOiBbXSxcbiAgICAgICAgICAgIHVudXNlZElucHV0OiBbXSxcbiAgICAgICAgICAgIG92ZXJmbG93OiAtMixcbiAgICAgICAgICAgIGNoYXJzTGVmdE92ZXI6IDAsXG4gICAgICAgICAgICBudWxsSW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgaW52YWxpZEVyYTogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRNb250aDogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRGb3JtYXQ6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzbzogZmFsc2UsXG4gICAgICAgICAgICBwYXJzZWREYXRlUGFydHM6IFtdLFxuICAgICAgICAgICAgZXJhOiBudWxsLFxuICAgICAgICAgICAgbWVyaWRpZW06IG51bGwsXG4gICAgICAgICAgICByZmMyODIyOiBmYWxzZSxcbiAgICAgICAgICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICAgICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgICAgIG0uX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLl9wZjtcbiAgICB9XG5cbiAgICB2YXIgc29tZTtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAgICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgICAgICBpZiAobS5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSksXG4gICAgICAgICAgICAgICAgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAhPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgPVxuICAgICAgICAgICAgICAgICAgICAhaXNOYU4obS5fZC5nZXRUaW1lKCkpICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRFcmEgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLndlZWtkYXlNaXNtYXRjaCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgICAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgPVxuICAgICAgICAgICAgICAgICAgICBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKG0pKSB7XG4gICAgICAgICAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLl9pc1ZhbGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoZmxhZ3MpIHtcbiAgICAgICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICAgICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGV4dGVuZChnZXRQYXJzaW5nRmxhZ3MobSksIGZsYWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxuICAgIC8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG4gICAgdmFyIG1vbWVudFByb3BlcnRpZXMgPSAoaG9va3MubW9tZW50UHJvcGVydGllcyA9IFtdKSxcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHByb3AsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBtb21lbnRQcm9wZXJ0aWVzTGVuID0gbW9tZW50UHJvcGVydGllcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc0FNb21lbnRPYmplY3QpKSB7XG4gICAgICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faSkpIHtcbiAgICAgICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2YpKSB7XG4gICAgICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sKSkge1xuICAgICAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fc3RyaWN0KSkge1xuICAgICAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3R6bSkpIHtcbiAgICAgICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc1VUQykpIHtcbiAgICAgICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fb2Zmc2V0KSkge1xuICAgICAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3BmKSkge1xuICAgICAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbG9jYWxlKSkge1xuICAgICAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzTGVuID4gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1vbWVudFByb3BlcnRpZXNMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICAvLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE1vbWVudChjb25maWcpIHtcbiAgICAgICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoY29uZmlnLl9kICE9IG51bGwgPyBjb25maWcuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wIGluIGNhc2UgdXBkYXRlT2Zmc2V0IGNyZWF0ZXMgbmV3IG1vbWVudFxuICAgICAgICAvLyBvYmplY3RzLlxuICAgICAgICBpZiAodXBkYXRlSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNb21lbnQob2JqKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm5cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0aW9uIHdhcm5pbmc6ICcgKyBtc2cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcbiAgICAgICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobnVsbCwgbXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBhcmcsXG4gICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgYXJnTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJnTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093blByb3AoYXJndW1lbnRzWzBdLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICAgICAgbXNnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG5Bcmd1bWVudHM6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCkuc3RhY2tcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGZuKTtcbiAgICB9XG5cbiAgICB2YXIgZGVwcmVjYXRpb25zID0ge307XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXByZWNhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbiAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHR5cGVvZiBGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbikgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBwcm9wLCBpO1xuICAgICAgICBmb3IgKGkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjb25maWcsIGkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzWydfJyArIGldID0gcHJvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICAvLyBMZW5pZW50IG9yZGluYWwgcGFyc2luZyBhY2NlcHRzIGp1c3QgYSBudW1iZXIgaW4gYWRkaXRpb24gdG9cbiAgICAgICAgLy8gbnVtYmVyICsgKHBvc3NpYmx5KSBzdHVmZiBjb21pbmcgZnJvbSBfZGF5T2ZNb250aE9yZGluYWxQYXJzZS5cbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgICAgICB0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAodGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZS5zb3VyY2UgfHwgdGhpcy5fb3JkaW5hbFBhcnNlLnNvdXJjZSkgK1xuICAgICAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICAgICAgL1xcZHsxLDJ9Ly5zb3VyY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgICAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLFxuICAgICAgICAgICAgcHJvcDtcbiAgICAgICAgZm9yIChwcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIHBhcmVudENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gY2hpbGRDb25maWdbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGhhc093blByb3AocGFyZW50Q29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMb2NhbGUoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cztcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgcmVzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgICAgIHNhbWVEYXk6ICdbVG9kYXkgYXRdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNhbGVuZGFyKGtleSwgbW9tLCBub3cpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChtb20sIG5vdykgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgICAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArXG4gICAgICAgICAgICBhYnNOdW1iZXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGluZ1Rva2VucyA9XG4gICAgICAgICAgICAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fE57MSw1fXxZWVlZWVl8WVlZWVl8WVlZWXxZWXx5ezIsNH18eW8/fGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nLFxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLFxuICAgICAgICBmb3JtYXRGdW5jdGlvbnMgPSB7fSxcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuICAgIC8vIHRva2VuOiAgICAnTSdcbiAgICAvLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4gICAgLy8gb3JkaW5hbDogICdNbydcbiAgICAvLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbiAgICBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbih0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBmdW5jO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm9yZGluYWwoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnLFxuICAgICAgICAgICAgICAgIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihhcnJheVtpXSlcbiAgICAgICAgICAgICAgICAgICAgPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICA6IGFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbiAgICBmdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9XG4gICAgICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICAgICAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgICAgIHZhciBpID0gNTtcblxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vuc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvbmdEYXRlRm9ybWF0ID0ge1xuICAgICAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgICAgICBMVDogJ2g6bW0gQScsXG4gICAgICAgIEw6ICdNTS9ERC9ZWVlZJyxcbiAgICAgICAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICAgICAgICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICAgICAgTExMTDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChrZXkpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0sXG4gICAgICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgICAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlclxuICAgICAgICAgICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0b2spIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ01NTU0nIHx8XG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ01NJyB8fFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdERCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9rID09PSAnZGRkZCdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvay5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvaztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRJbnZhbGlkRGF0ZSA9ICdJbnZhbGlkIGRhdGUnO1xuXG4gICAgZnVuY3Rpb24gaW52YWxpZERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdE9yZGluYWwgPSAnJWQnLFxuICAgICAgICBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbiAgICBmdW5jdGlvbiBvcmRpbmFsKG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRSZWxhdGl2ZVRpbWUgPSB7XG4gICAgICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICAgICAgcGFzdDogJyVzIGFnbycsXG4gICAgICAgIHM6ICdhIGZldyBzZWNvbmRzJyxcbiAgICAgICAgc3M6ICclZCBzZWNvbmRzJyxcbiAgICAgICAgbTogJ2EgbWludXRlJyxcbiAgICAgICAgbW06ICclZCBtaW51dGVzJyxcbiAgICAgICAgaDogJ2FuIGhvdXInLFxuICAgICAgICBoaDogJyVkIGhvdXJzJyxcbiAgICAgICAgZDogJ2EgZGF5JyxcbiAgICAgICAgZGQ6ICclZCBkYXlzJyxcbiAgICAgICAgdzogJ2Egd2VlaycsXG4gICAgICAgIHd3OiAnJWQgd2Vla3MnLFxuICAgICAgICBNOiAnYSBtb250aCcsXG4gICAgICAgIE1NOiAnJWQgbW9udGhzJyxcbiAgICAgICAgeTogJ2EgeWVhcicsXG4gICAgICAgIHl5OiAnJWQgeWVhcnMnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KVxuICAgICAgICAgICAgPyBvdXRwdXQobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKVxuICAgICAgICAgICAgOiBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXN0RnV0dXJlKGRpZmYsIG91dHB1dCkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgYWxpYXNlcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkVW5pdEFsaWFzKHVuaXQsIHNob3J0aGFuZCkge1xuICAgICAgICB2YXIgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2xvd2VyQ2FzZSArICdzJ10gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSB1bml0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0KSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxuICAgICAgICAgICAgcHJvcDtcblxuICAgICAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZElucHV0O1xuICAgIH1cblxuICAgIHZhciBwcmlvcml0aWVzID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRVbml0UHJpb3JpdHkodW5pdCwgcHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdGllc1t1bml0XSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXRpemVkVW5pdHModW5pdHNPYmopIHtcbiAgICAgICAgdmFyIHVuaXRzID0gW10sXG4gICAgICAgICAgICB1O1xuICAgICAgICBmb3IgKHUgaW4gdW5pdHNPYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKHVuaXRzT2JqLCB1KSkge1xuICAgICAgICAgICAgICAgIHVuaXRzLnB1c2goeyB1bml0OiB1LCBwcmlvcml0eTogcHJpb3JpdGllc1t1XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdW5pdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNGbG9vcihudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIC8vIC0wIC0+IDBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSW50KGFyZ3VtZW50Rm9yQ29lcmNpb24pIHtcbiAgICAgICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgICAgIHZhbHVlID0gMDtcblxuICAgICAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlR2V0U2V0KHVuaXQsIGtlZXBUaW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0JDEodGhpcywgdW5pdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0KG1vbSwgdW5pdCkge1xuICAgICAgICByZXR1cm4gbW9tLmlzVmFsaWQoKVxuICAgICAgICAgICAgPyBtb20uX2RbJ2dldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0oKVxuICAgICAgICAgICAgOiBOYU47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0JDEobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgICAgICBpZiAobW9tLmlzVmFsaWQoKSAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdW5pdCA9PT0gJ0Z1bGxZZWFyJyAmJlxuICAgICAgICAgICAgICAgIGlzTGVhcFllYXIobW9tLnllYXIoKSkgJiZcbiAgICAgICAgICAgICAgICBtb20ubW9udGgoKSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIG1vbS5kYXRlKCkgPT09IDI5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0oXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtb20ubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGgodmFsdWUsIG1vbS5tb250aCgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBzdHJpbmdHZXQodW5pdHMpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaW5nU2V0KHVuaXRzLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgICAgICB2YXIgcHJpb3JpdGl6ZWQgPSBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzKSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHByaW9yaXRpemVkTGVuID0gcHJpb3JpdGl6ZWQubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHByaW9yaXRpemVkTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gxID0gL1xcZC8sIC8vICAgICAgIDAgLSA5XG4gICAgICAgIG1hdGNoMiA9IC9cXGRcXGQvLCAvLyAgICAgIDAwIC0gOTlcbiAgICAgICAgbWF0Y2gzID0gL1xcZHszfS8sIC8vICAgICAwMDAgLSA5OTlcbiAgICAgICAgbWF0Y2g0ID0gL1xcZHs0fS8sIC8vICAgIDAwMDAgLSA5OTk5XG4gICAgICAgIG1hdGNoNiA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8yID0gL1xcZFxcZD8vLCAvLyAgICAgICAwIC0gOTlcbiAgICAgICAgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vLCAvLyAgICAgOTk5IC0gOTk5OVxuICAgICAgICBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy8sIC8vICAgOTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LywgLy8gICAgICAgMCAtIDk5OVxuICAgICAgICBtYXRjaDF0bzQgPSAvXFxkezEsNH0vLCAvLyAgICAgICAwIC0gOTk5OVxuICAgICAgICBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLywgLy8gICAgICAgMCAtIGluZlxuICAgICAgICBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvLCAvLyAgICAtaW5mIC0gaW5mXG4gICAgICAgIG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpLCAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuICAgICAgICBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy8sIC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG4gICAgICAgIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgICAgICAvLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4gICAgICAgIG1hdGNoV29yZCA9XG4gICAgICAgICAgICAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaSxcbiAgICAgICAgcmVnZXhlcztcblxuICAgIHJlZ2V4ZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW4sIHJlZ2V4LCBzdHJpY3RSZWdleCkge1xuICAgICAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpXG4gICAgICAgICAgICA/IHJlZ2V4XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4ID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykge1xuICAgICAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuICAgIGZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2V4RXNjYXBlKFxuICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBmdW5jID0gY2FsbGJhY2ssXG4gICAgICAgICAgICB0b2tlbkxlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRva2VuID0gW3Rva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5MZW4gPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuLCBjYWxsYmFjaykge1xuICAgICAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgICAgICBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBZRUFSID0gMCxcbiAgICAgICAgTU9OVEggPSAxLFxuICAgICAgICBEQVRFID0gMixcbiAgICAgICAgSE9VUiA9IDMsXG4gICAgICAgIE1JTlVURSA9IDQsXG4gICAgICAgIFNFQ09ORCA9IDUsXG4gICAgICAgIE1JTExJU0VDT05EID0gNixcbiAgICAgICAgV0VFSyA9IDcsXG4gICAgICAgIFdFRUtEQVkgPSA4O1xuXG4gICAgZnVuY3Rpb24gbW9kKG4sIHgpIHtcbiAgICAgICAgcmV0dXJuICgobiAlIHgpICsgeCkgJSB4O1xuICAgIH1cblxuICAgIHZhciBpbmRleE9mO1xuXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIC8vIEkga25vd1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICAgICAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgICAgICByZXR1cm4gbW9kTW9udGggPT09IDFcbiAgICAgICAgICAgID8gaXNMZWFwWWVhcih5ZWFyKVxuICAgICAgICAgICAgICAgID8gMjlcbiAgICAgICAgICAgICAgICA6IDI4XG4gICAgICAgICAgICA6IDMxIC0gKChtb2RNb250aCAlIDcpICUgMik7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIHZhciBkZWZhdWx0TG9jYWxlTW9udGhzID1cbiAgICAgICAgICAgICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9XG4gICAgICAgICAgICAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXG4gICAgICAgIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgICAgICBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHMobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1tcbiAgICAgICAgICAgICAgICAgICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZm9ybWF0J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgICAgIF1bbS5tb250aCgpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0W1xuICAgICAgICAgICAgICAgICAgTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgbW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NTScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TW9udGgodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCAnTW9udGgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERheXNJbk1vbnRoKCkge1xuICAgICAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aHNSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICAgICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNob3J0UGllY2VzID0gW10sXG4gICAgICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG1vbTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICAgICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgICAgICByZXR1cm4geSA8PSA5OTk5ID8gemVyb0ZpbGwoeSwgNCkgOiAnKycgKyB5O1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWScsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWScsIDRdLCAwLCAneWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCA1XSwgMCwgJ3llYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZWScsIDYsIHRydWVdLCAwLCAneWVhcicpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCd5ZWFyJywgJ3knKTtcblxuICAgIC8vIFBSSU9SSVRJRVNcblxuICAgIGFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XG4gICAgYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPVxuICAgICAgICAgICAgaW5wdXQubGVuZ3RoID09PSAyID8gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG4gICAgfVxuXG4gICAgLy8gSE9PS1NcblxuICAgIGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG4gICAgfTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRZZWFyID0gbWFrZUdldFNldCgnRnVsbFllYXInLCB0cnVlKTtcblxuICAgIGZ1bmN0aW9uIGdldElzTGVhcFllYXIoKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgICAgIC8vIGNhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgICAgIHZhciBkYXRlO1xuICAgICAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHkgKyA0MDAsIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHkpIHtcbiAgICAgICAgdmFyIGRhdGUsIGFyZ3M7XG4gICAgICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICBhcmdzWzBdID0geSArIDQwMDtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuICAgIGZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xuXG4gICAgICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgICAgIHJlc1llYXIsXG4gICAgICAgICAgICByZXNEYXlPZlllYXI7XG5cbiAgICAgICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgICAgIHdlZWsgPSBNYXRoLmZsb29yKChtb20uZGF5T2ZZZWFyKCkgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDEsXG4gICAgICAgICAgICByZXNXZWVrLFxuICAgICAgICAgICAgcmVzWWVhcjtcblxuICAgICAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgICAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbiAgICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuICAgIC8vIFBSSU9SSVRJRVNcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigndycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICAgICAgWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcbiAgICAgICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgLy8gTE9DQUxFU1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vlayhtb20pIHtcbiAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIobW9tLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3kpLndlZWs7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICAgICAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3k6IDYsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDZ0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZldlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWsoaW5wdXQpIHtcbiAgICAgICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayhpbnB1dCkge1xuICAgICAgICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4odGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGRkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ0UnLCAwLCAwLCAnaXNvV2Vla2RheScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuICAgIGFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG4gICAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ2QnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcbiAgICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xuICAgIH1cblxuICAgIC8vIExPQ0FMRVNcbiAgICBmdW5jdGlvbiBzaGlmdFdlZWtkYXlzKHdzLCBuKSB7XG4gICAgICAgIHJldHVybiB3cy5zbGljZShuLCA3KS5jb25jYXQod3Muc2xpY2UoMCwgbikpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPVxuICAgICAgICAgICAgJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgICAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciB3ZWVrZGF5cyA9IGlzQXJyYXkodGhpcy5fd2Vla2RheXMpXG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xuICAgICAgICAgICAgICAgICAgbSAmJiBtICE9PSB0cnVlICYmIHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Zvcm1hdCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdO1xuICAgICAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB3ZWVrZGF5c1ttLmRheSgpXVxuICAgICAgICAgICAgOiB3ZWVrZGF5cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1Nob3J0KG0pIHtcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c1Nob3J0LCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4obSkge1xuICAgICAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHRoaXMuX3dlZWtkYXlzTWluLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXVxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSQxKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihcbiAgICAgICAgICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZSQxLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG5cbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArXG4gICAgICAgICAgICAgICAgICAgICd8XicgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgK1xuICAgICAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgICAgICBmb3JtYXQgPT09ICdkZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRheSA9IHRoaXMuX2lzVVRDID8gdGhpcy5fZC5nZXRVVENEYXkoKSA6IHRoaXMuX2QuZ2V0RGF5KCk7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGlucHV0IC0gZGF5LCAnZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgICAgIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla2RheXNSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBkZWZhdWx0V2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW5QaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIHNob3J0UGllY2VzID0gW10sXG4gICAgICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgIG1pbnAsXG4gICAgICAgICAgICBzaG9ydHAsXG4gICAgICAgICAgICBsb25ncDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICBtaW5wID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c01pbihtb20sICcnKSk7XG4gICAgICAgICAgICBzaG9ydHAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICAgICAgbG9uZ3AgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAgICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgICAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG5cbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGZ1bmN0aW9uIGhGb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCkgJSAxMiB8fCAxMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrRm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpIHx8IDI0O1xuICAgIH1cblxuICAgIGFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDJdLCAwLCAnaG91cicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDJdLCAwLCBoRm9ybWF0KTtcbiAgICBhZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgaEZvcm1hdC5hcHBseSh0aGlzKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnJyArXG4gICAgICAgICAgICB0aGlzLmhvdXJzKCkgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbWVyaWRpZW0odG9rZW4sIGxvd2VyY2FzZSkge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKFxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnMoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICBsb3dlcmNhc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gICAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbiAgICB9XG5cbiAgICBhZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XG4gICAgYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0gnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG4gICAgYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICAgICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0LFxuICAgICAgICAgICAgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUlzUE0oaW5wdXQpIHtcbiAgICAgICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgICAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICAgICAgcmV0dXJuIChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pLFxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbiAgICAgICAgLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgdGhleSB3YW50LiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbiAgICAgICAgLy8gYSBuZXcgdGltZXpvbmUpIG1ha2VzIHNlbnNlLiBBZGRpbmcvc3VidHJhY3RpbmcgaG91cnMgZG9lcyBub3QgZm9sbG93XG4gICAgICAgIC8vIHRoaXMgcnVsZS5cbiAgICAgICAgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgICAgICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICAgICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxuICAgICAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICAgICAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgICAgICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuXG4gICAgICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgICAgIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlLFxuICAgIH07XG5cbiAgICAvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG4gICAgdmFyIGxvY2FsZXMgPSB7fSxcbiAgICAgICAgbG9jYWxlRmFtaWxpZXMgPSB7fSxcbiAgICAgICAgZ2xvYmFsTG9jYWxlO1xuXG4gICAgZnVuY3Rpb24gY29tbW9uUHJlZml4KGFycjEsIGFycjIpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBtaW5sID0gTWF0aC5taW4oYXJyMS5sZW5ndGgsIGFycjIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1pbmw7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWlubDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbiAgICB9XG5cbiAgICAvLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbiAgICAvLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuICAgIC8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbiAgICBmdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBzcGxpdDtcblxuICAgICAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBuZXh0ICYmXG4gICAgICAgICAgICAgICAgICAgIG5leHQubGVuZ3RoID49IGogJiZcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uUHJlZml4KHNwbGl0LCBuZXh0KSA+PSBqIC0gMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xvY2FsZU5hbWVTYW5lKG5hbWUpIHtcbiAgICAgICAgLy8gUHJldmVudCBuYW1lcyB0aGF0IGxvb2sgbGlrZSBmaWxlc3lzdGVtIHBhdGhzLCBpLmUgY29udGFpbiAnLycgb3IgJ1xcJ1xuICAgICAgICByZXR1cm4gbmFtZS5tYXRjaCgnXlteL1xcXFxcXFxcXSokJykgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICAgICAgdmFyIG9sZExvY2FsZSA9IG51bGwsXG4gICAgICAgICAgICBhbGlhc2VkUmVxdWlyZTtcbiAgICAgICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbW9kdWxlICYmXG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyAmJlxuICAgICAgICAgICAgaXNMb2NhbGVOYW1lU2FuZShuYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgbm90IGZvdW5kIHRvIGF2b2lkIHJlcGVhdGluZyBleHBlbnNpdmUgZmlsZSByZXF1aXJlIGNhbGwgY2F1c2luZyBoaWdoIENQVVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGZpbmQgZW4tVVMsIGVuX1VTLCBlbi11cyBmb3IgZXZlcnkgZm9ybWF0IGNhbGxcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbnVsbDsgLy8gbnVsbCBtZWFucyBub3QgZm91bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy93YXJuIHVzZXIgaWYgYXJndW1lbnRzIGFyZSBwYXNzZWQgYnV0IHRoZSBsb2NhbGUgY291bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgICAgICdkZWZpbmVMb2NhbGVPdmVycmlkZScsXG4gICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgICAgICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlLFxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsICYmIGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2hpbGQgbG9jYWxlIGluLXBsYWNlIHRvIGF2b2lkIG1lbW9yeS1sZWFrc1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0uc2V0KG1lcmdlQ29uZmlncyhsb2NhbGVzW25hbWVdLl9jb25maWcsIGNvbmZpZykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNRVJHRVxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVMb2NhbGUgaXMgY2FsbGVkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGFiYnIgc28gaXQgd2lsbCBoYXZlIGEgbmFtZSAoZ2V0dGVycyByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIG90aGVyd2lzZSkuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBnZXRTZXRHbG9iYWxMb2NhbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgbG9jYWxlIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5KSB7XG4gICAgICAgIHZhciBsb2NhbGU7XG5cbiAgICAgICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGtleSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4ga2V5cyhsb2NhbGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KG0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93LFxuICAgICAgICAgICAgYSA9IG0uX2E7XG5cbiAgICAgICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExXG4gICAgICAgICAgICAgICAgICAgID8gTU9OVEhcbiAgICAgICAgICAgICAgICAgICAgOiBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pXG4gICAgICAgICAgICAgICAgICAgID8gREFURVxuICAgICAgICAgICAgICAgICAgICA6IGFbSE9VUl0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgYVtIT1VSXSA+IDI0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgKGFbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhW01JTlVURV0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbU0VDT05EXSAhPT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gIT09IDApKVxuICAgICAgICAgICAgICAgICAgICA/IEhPVVJcbiAgICAgICAgICAgICAgICAgICAgOiBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgID8gTUlOVVRFXG4gICAgICAgICAgICAgICAgICAgIDogYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OVxuICAgICAgICAgICAgICAgICAgICA/IFNFQ09ORFxuICAgICAgICAgICAgICAgICAgICA6IGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OVxuICAgICAgICAgICAgICAgICAgICA/IE1JTExJU0VDT05EXG4gICAgICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93RGF5T2ZZZWFyICYmXG4gICAgICAgICAgICAgICAgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFSztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLy8gaXNvIDg2MDEgcmVnZXhcbiAgICAvLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbiAgICB2YXIgZXh0ZW5kZWRJc29SZWdleCA9XG4gICAgICAgICAgICAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pLSg/OlxcZFxcZC1cXGRcXGR8V1xcZFxcZC1cXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbKy1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLyxcbiAgICAgICAgYmFzaWNJc29SZWdleCA9XG4gICAgICAgICAgICAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkfCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuICAgICAgICB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vLFxuICAgICAgICBpc29EYXRlcyA9IFtcbiAgICAgICAgICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICAgICAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgICAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICAgICAgICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcbiAgICAgICAgICAgIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS9dLFxuICAgICAgICAgICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vXSxcbiAgICAgICAgICAgIFsnWVlZWU1NREQnLCAvXFxkezh9L10sXG4gICAgICAgICAgICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS9dLFxuICAgICAgICAgICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgICAgICAgICAgIFsnWVlZWURERCcsIC9cXGR7N30vXSxcbiAgICAgICAgICAgIFsnWVlZWU1NJywgL1xcZHs2fS8sIGZhbHNlXSxcbiAgICAgICAgICAgIFsnWVlZWScsIC9cXGR7NH0vLCBmYWxzZV0sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbiAgICAgICAgaXNvVGltZXMgPSBbXG4gICAgICAgICAgICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgICAgICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICAgICAgICAgICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICAgICAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgICAgICAgICAgIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICAgICAgICAgICAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICAgICAgICAgICAgWydISCcsIC9cXGRcXGQvXSxcbiAgICAgICAgXSxcbiAgICAgICAgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKCgtP1xcZCspL2ksXG4gICAgICAgIC8vIFJGQyAyODIyIHJlZ2V4OiBGb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjc2VjdGlvbi0zLjNcbiAgICAgICAgcmZjMjgyMiA9XG4gICAgICAgICAgICAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvLFxuICAgICAgICBvYnNPZmZzZXRzID0ge1xuICAgICAgICAgICAgVVQ6IDAsXG4gICAgICAgICAgICBHTVQ6IDAsXG4gICAgICAgICAgICBFRFQ6IC00ICogNjAsXG4gICAgICAgICAgICBFU1Q6IC01ICogNjAsXG4gICAgICAgICAgICBDRFQ6IC01ICogNjAsXG4gICAgICAgICAgICBDU1Q6IC02ICogNjAsXG4gICAgICAgICAgICBNRFQ6IC02ICogNjAsXG4gICAgICAgICAgICBNU1Q6IC03ICogNjAsXG4gICAgICAgICAgICBQRFQ6IC03ICogNjAsXG4gICAgICAgICAgICBQU1Q6IC04ICogNjAsXG4gICAgICAgIH07XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgICAgICBhbGxvd1RpbWUsXG4gICAgICAgICAgICBkYXRlRm9ybWF0LFxuICAgICAgICAgICAgdGltZUZvcm1hdCxcbiAgICAgICAgICAgIHR6Rm9ybWF0LFxuICAgICAgICAgICAgaXNvRGF0ZXNMZW4gPSBpc29EYXRlcy5sZW5ndGgsXG4gICAgICAgICAgICBpc29UaW1lc0xlbiA9IGlzb1RpbWVzLmxlbmd0aDtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgICAgICB5ZWFyU3RyLFxuICAgICAgICBtb250aFN0cixcbiAgICAgICAgZGF5U3RyLFxuICAgICAgICBob3VyU3RyLFxuICAgICAgICBtaW51dGVTdHIsXG4gICAgICAgIHNlY29uZFN0clxuICAgICkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW1xuICAgICAgICAgICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXG4gICAgICAgICAgICBwYXJzZUludChkYXlTdHIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApLFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cikge1xuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICAgICAgaWYgKHllYXIgPD0gNDkpIHtcbiAgICAgICAgICAgIHJldHVybiAyMDAwICsgeWVhcjtcbiAgICAgICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgcmV0dXJuIHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXChbXigpXSpcXCl8W1xcblxcdF0vZywgJyAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcc1xccyovLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHNcXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dlZWtkYXkod2Vla2RheVN0ciwgcGFyc2VkSW5wdXQsIGNvbmZpZykge1xuICAgICAgICBpZiAod2Vla2RheVN0cikge1xuICAgICAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW5kZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgICAgICAgICAgdmFyIHdlZWtkYXlQcm92aWRlZCA9IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0ciksXG4gICAgICAgICAgICAgICAgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFswXSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMV0sXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzJdXG4gICAgICAgICAgICAgICAgKS5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5UHJvdmlkZWQgIT09IHdlZWtkYXlBY3R1YWwpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0LCBtaWxpdGFyeU9mZnNldCwgbnVtT2Zmc2V0KSB7XG4gICAgICAgIGlmIChvYnNPZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gICAgICAgIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKSxcbiAgICAgICAgICAgICAgICBtID0gaG0gJSAxMDAsXG4gICAgICAgICAgICAgICAgaCA9IChobSAtIG0pIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIGggKiA2MCArIG07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGFuZCB0aW1lIGZyb20gcmVmIDI4MjIgZm9ybWF0XG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKSxcbiAgICAgICAgICAgIHBhcnNlZEFycmF5O1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcbiAgICAgICAgICAgICAgICBtYXRjaFs0XSxcbiAgICAgICAgICAgICAgICBtYXRjaFszXSxcbiAgICAgICAgICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICBtYXRjaFs1XSxcbiAgICAgICAgICAgICAgICBtYXRjaFs2XSxcbiAgICAgICAgICAgICAgICBtYXRjaFs3XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tXZWVrZGF5KG1hdGNoWzFdLCBwYXJzZWRBcnJheSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XG4gICAgICAgICAgICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcbiAgICAgICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG5cbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gMSkgQVNQLk5FVCwgMikgSVNPLCAzKSBSRkMgMjgyMiBmb3JtYXRzLCBvciA0KSBvcHRpb25hbCBmYWxsYmFjayBpZiBwYXJzaW5nIGlzbid0IHN0cmljdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcbiAgICAgICAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICAgICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuX3N0cmljdCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcbiAgICAgICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ3ZhbHVlIHByb3ZpZGVkIGlzIG5vdCBpbiBhIHJlY29nbml6ZWQgUkZDMjgyMiBvciBJU08gZm9ybWF0LiBtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZSgpLCAnICtcbiAgICAgICAgICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICAgICAgICAgJ2Rpc2NvdXJhZ2VkLiBQbGVhc2UgcmVmZXIgdG8gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXG4gICAgICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRzKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWcpIHtcbiAgICAgICAgLy8gaG9va3MgaXMgYWN0dWFsbHkgdGhlIGV4cG9ydGVkIG1vbWVudCBvYmplY3RcbiAgICAgICAgdmFyIG5vd1ZhbHVlID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENNb250aCgpLFxuICAgICAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuICAgIC8vIHRoZSBhcnJheSBzaG91bGQgbWlycm9yIHRoZSBwYXJhbWV0ZXJzIGJlbG93XG4gICAgLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4gICAgLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5KGNvbmZpZykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBpbnB1dCA9IFtdLFxuICAgICAgICAgICAgY3VycmVudERhdGUsXG4gICAgICAgICAgICBleHBlY3RlZFdlZWtkYXksXG4gICAgICAgICAgICB5ZWFyVG9Vc2U7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAgICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICAgICAgICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHxcbiAgICAgICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcik7XG4gICAgICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAgICAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgICAgICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgICAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxuICAgICAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPVxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9PSBudWxsID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gY3JlYXRlVVRDRGF0ZSA6IGNyZWF0ZURhdGUpLmFwcGx5KFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGlucHV0XG4gICAgICAgICk7XG4gICAgICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDXG4gICAgICAgICAgICA/IGNvbmZpZy5fZC5nZXRVVENEYXkoKVxuICAgICAgICAgICAgOiBjb25maWcuX2QuZ2V0RGF5KCk7XG5cbiAgICAgICAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gICAgICAgIC8vIHdpdGggcGFyc2Vab25lLlxuICAgICAgICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuX25leHREYXkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIG1pc21hdGNoaW5nIGRheSBvZiB3ZWVrXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZpZy5fdyAmJlxuICAgICAgICAgICAgdHlwZW9mIGNvbmZpZy5fdy5kICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKSB7XG4gICAgICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdywgY3VyV2VlaztcblxuICAgICAgICB3ID0gY29uZmlnLl93O1xuICAgICAgICBpZiAody5HRyAhPSBudWxsIHx8IHcuVyAhPSBudWxsIHx8IHcuRSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkb3cgPSAxO1xuICAgICAgICAgICAgZG95ID0gNDtcblxuICAgICAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXG4gICAgICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgICAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgICAgICAgICAgLy8gY3JlYXRlIG5vdykuXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKFxuICAgICAgICAgICAgICAgIHcuR0csXG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW1lFQVJdLFxuICAgICAgICAgICAgICAgIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgICAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgICAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgICAgICBjdXJXZWVrID0gd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCBkb3csIGRveSk7XG5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG4gICAgaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG4gICAgaG9va3MuUkZDXzI4MjIgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xuICAgICAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLlJGQ18yODIyKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fYSA9IFtdO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAgICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHBhcnNlZElucHV0LFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBza2lwcGVkLFxuICAgICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwLFxuICAgICAgICAgICAgZXJhLFxuICAgICAgICAgICAgdG9rZW5MZW47XG5cbiAgICAgICAgdG9rZW5zID1cbiAgICAgICAgICAgIGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcbiAgICAgICAgdG9rZW5MZW4gPSB0b2tlbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBwYXJzZWRJbnB1dCA9IChzdHJpbmcubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKSB8fFxuICAgICAgICAgICAgICAgIFtdKVswXTtcbiAgICAgICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIHNraXBwZWQgPSBzdHJpbmcuc3Vic3RyKDAsIHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9XG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgICAgICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChcbiAgICAgICAgICAgIGNvbmZpZy5fbG9jYWxlLFxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdLFxuICAgICAgICAgICAgY29uZmlnLl9tZXJpZGllbVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGhhbmRsZSBlcmFcbiAgICAgICAgZXJhID0gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhO1xuICAgICAgICBpZiAoZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2FbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFzQ29udmVydFllYXIoZXJhLCBjb25maWcuX2FbWUVBUl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJpZGllbUZpeFdyYXAobG9jYWxlLCBob3VyLCBtZXJpZGllbSkge1xuICAgICAgICB2YXIgaXNQbTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkb1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZS5pc1BNICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgICAgICBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICAgICAgICAgICAgaWYgKGlzUG0gJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciArPSAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIHZhciB0ZW1wQ29uZmlnLFxuICAgICAgICAgICAgYmVzdE1vbWVudCxcbiAgICAgICAgICAgIHNjb3JlVG9CZWF0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSxcbiAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQsXG4gICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlnZkxlbiA9IGNvbmZpZy5fZi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbmZpZ2ZMZW4gPT09IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWdmTGVuOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgICAgIGlmICghYmVzdEZvcm1hdElzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQgfHxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZEZvcm1hdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSksXG4gICAgICAgICAgICBkYXlPckRhdGUgPSBpLmRheSA9PT0gdW5kZWZpbmVkID8gaS5kYXRlIDogaS5kYXk7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChcbiAgICAgICAgICAgIFtpLnllYXIsIGkubW9udGgsIGRheU9yRGF0ZSwgaS5ob3VyLCBpLm1pbnV0ZSwgaS5zZWNvbmQsIGkubWlsbGlzZWNvbmRdLFxuICAgICAgICAgICAgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICAgICAgaWYgKHJlcy5fbmV4dERheSkge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgICAgICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xuXG4gICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoeyBudWxsSW5wdXQ6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgICAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGlzVVRDKSB7XG4gICAgICAgIHZhciBjID0ge307XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdHJ1ZSB8fCBmb3JtYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdHJpY3QgPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYWxlID09PSB0cnVlIHx8IGxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChpc09iamVjdChpbnB1dCkgJiYgaXNPYmplY3RFbXB0eShpbnB1dCkpIHx8XG4gICAgICAgICAgICAoaXNBcnJheShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID09PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgICAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgICAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgICAgICBjLl9sID0gbG9jYWxlO1xuICAgICAgICBjLl9pID0gaW5wdXQ7XG4gICAgICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgICAgIGMuX3N0cmljdCA9IHN0cmljdDtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAnbW9tZW50KCkubWluIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWF4IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAnbW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWluIGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPiB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbiAgICAvLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4gICAgLy9cbiAgICAvLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4gICAgLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbiAgICBmdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICAgICAgdmFyIHJlcywgaTtcbiAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogVXNlIFtdLnNvcnQgaW5zdGVhZD9cbiAgICBmdW5jdGlvbiBtaW4oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF4KCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG4gICAgfVxuXG4gICAgdmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICtuZXcgRGF0ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgb3JkZXJpbmcgPSBbXG4gICAgICAgICd5ZWFyJyxcbiAgICAgICAgJ3F1YXJ0ZXInLFxuICAgICAgICAnbW9udGgnLFxuICAgICAgICAnd2VlaycsXG4gICAgICAgICdkYXknLFxuICAgICAgICAnaG91cicsXG4gICAgICAgICdtaW51dGUnLFxuICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgJ21pbGxpc2Vjb25kJyxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKG0pIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gZmFsc2UsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgb3JkZXJMZW4gPSBvcmRlcmluZy5sZW5ndGg7XG4gICAgICAgIGZvciAoa2V5IGluIG0pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXNPd25Qcm9wKG0sIGtleSkgJiZcbiAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIChtW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4obVtrZXldKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3JkZXJMZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKG1bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobVtvcmRlcmluZ1tpXV0pICE9PSB0b0ludChtW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCQxKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pLFxuICAgICAgICAgICAgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwLFxuICAgICAgICAgICAgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwLFxuICAgICAgICAgICAgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDAsXG4gICAgICAgICAgICB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IG5vcm1hbGl6ZWRJbnB1dC5pc29XZWVrIHx8IDAsXG4gICAgICAgICAgICBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwLFxuICAgICAgICAgICAgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91ciB8fCAwLFxuICAgICAgICAgICAgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGUgfHwgMCxcbiAgICAgICAgICAgIHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kIHx8IDAsXG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmQgfHwgMDtcblxuICAgICAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAgICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID1cbiAgICAgICAgICAgICttaWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgc2Vjb25kcyAqIDFlMyArIC8vIDEwMDBcbiAgICAgICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vdXNpbmcgMTAwMCAqIDYwICogNjAgaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgICAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcbiAgICAgICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgICAgICB0aGlzLl9kYXlzID0gK2RheXMgKyB3ZWVrcyAqIDc7XG4gICAgICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgKyBxdWFydGVycyAqIDMgKyB5ZWFycyAqIDEyO1xuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgICAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgICAgICB0aGlzLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWJzUm91bmQobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkaWZmcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KHRva2VuLCBzZXBhcmF0b3IpIHtcbiAgICAgICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpLFxuICAgICAgICAgICAgICAgIHNpZ24gPSAnKyc7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICAgICAgc2lnbiA9ICctJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgc2lnbiArXG4gICAgICAgICAgICAgICAgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yICtcbiAgICAgICAgICAgICAgICB6ZXJvRmlsbCh+fm9mZnNldCAlIDYwLCAyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2Zmc2V0KCdaJywgJzonKTtcbiAgICBvZmZzZXQoJ1paJywgJycpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIHRpbWV6b25lIGNodW5rZXJcbiAgICAvLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbiAgICAvLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cbiAgICB2YXIgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbiAgICBmdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXIsIHN0cmluZykge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IChzdHJpbmcgfHwgJycpLm1hdGNoKG1hdGNoZXIpLFxuICAgICAgICAgICAgY2h1bmssXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgICAgIG1pbnV0ZXM7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2h1bmsgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgICAgIHBhcnRzID0gKGNodW5rICsgJycpLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAwLCAwXTtcbiAgICAgICAgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyB0b0ludChwYXJ0c1syXSk7XG5cbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxuICAgIGZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcbiAgICAgICAgdmFyIHJlcywgZGlmZjtcbiAgICAgICAgaWYgKG1vZGVsLl9pc1VUQykge1xuICAgICAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcbiAgICAgICAgICAgIGRpZmYgPVxuICAgICAgICAgICAgICAgIChpc01vbWVudChpbnB1dCkgfHwgaXNEYXRlKGlucHV0KVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LnZhbHVlT2YoKVxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQpLmxvY2FsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0KG0pIHtcbiAgICAgICAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgICAgIHJldHVybiAtTWF0aC5yb3VuZChtLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgIH1cblxuICAgIC8vIEhPT0tTXG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4gICAgLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXG4gICAgaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICAvLyBrZWVwTG9jYWxUaW1lID0gdHJ1ZSBtZWFucyBvbmx5IGNoYW5nZSB0aGUgdGltZXpvbmUsIHdpdGhvdXRcbiAgICAvLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuICAgIC8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbiAgICAvLyArMDIwMCwgc28gd2UgYWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCwgdG8gYmUgdmFsaWQuXG4gICAgLy9cbiAgICAvLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbiAgICAvLyBmcm9tIHRoZSBhY3R1YWwgcmVwcmVzZW50ZWQgdGltZS4gVGhhdCBpcyB3aHkgd2UgY2FsbCB1cGRhdGVPZmZzZXRcbiAgICAvLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4gICAgLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4gICAgLy8gdGhlcmUgaXMgbm8gc3VjaCB0aW1lIGluIHRoZSBnaXZlbiB0aW1lem9uZS5cbiAgICBmdW5jdGlvbiBnZXRTZXRPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUsIGtlZXBNaW51dGVzKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0O1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLnV0Y09mZnNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMoa2VlcExvY2FsVGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0aGlzLl90em0sIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIHRoaXMuX2kpO1xuICAgICAgICAgICAgaWYgKHRab25lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCA9IGlucHV0ID8gY3JlYXRlTG9jYWwoaW5wdXQpLnV0Y09mZnNldCgpIDogMDtcblxuICAgICAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoMCkudXRjT2Zmc2V0KCkgfHxcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoNSkudXRjT2Zmc2V0KClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjID0ge30sXG4gICAgICAgICAgICBvdGhlcjtcblxuICAgICAgICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xuICAgICAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgICAgICBpZiAoYy5fYSkge1xuICAgICAgICAgICAgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xuICAgICAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID1cbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTG9jYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/ICF0aGlzLl9pc1VUQyA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVXRjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbiAgICB2YXIgYXNwTmV0UmVnZXggPSAvXigtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspOihcXGQrKSg/OjooXFxkKykoXFwuXFxkKik/KT8kLyxcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAgICAgLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuICAgICAgICAvLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG4gICAgICAgIGlzb1JlZ2V4ID1cbiAgICAgICAgICAgIC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbihpbnB1dCwga2V5KSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAgICAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcbiAgICAgICAgICAgIG1hdGNoID0gbnVsbCxcbiAgICAgICAgICAgIHNpZ24sXG4gICAgICAgICAgICByZXQsXG4gICAgICAgICAgICBkaWZmUmVzO1xuXG4gICAgICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgbXM6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICAgICAgZDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICAgICAgTTogaW5wdXQuX21vbnRocyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpIHx8ICFpc05hTigraW5wdXQpKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uW2tleV0gPSAraW5wdXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9ICtpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIHNpZ24gPSBtYXRjaFsxXSA9PT0gJy0nID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkOiB0b0ludChtYXRjaFtEQVRFXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIGg6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbTogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIHM6IHRvSW50KG1hdGNoW1NFQ09ORF0pICogc2lnbixcbiAgICAgICAgICAgICAgICBtczogdG9JbnQoYWJzUm91bmQobWF0Y2hbTUlMTElTRUNPTkRdICogMTAwMCkpICogc2lnbiwgLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXG4gICAgICAgICAgICAgICAgTTogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgICAgIHc6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBkOiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgaDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIG06IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgICAgICAgICBzOiBwYXJzZUlzbyhtYXRjaFs4XSwgc2lnbiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAoJ2Zyb20nIGluIGR1cmF0aW9uIHx8ICd0bycgaW4gZHVyYXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgICAgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLmZyb20pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLnRvKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1zID0gZGlmZlJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICBkdXJhdGlvbi5NID0gZGlmZlJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSBuZXcgRHVyYXRpb24oZHVyYXRpb24pO1xuXG4gICAgICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2xvY2FsZScpKSB7XG4gICAgICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19pc1ZhbGlkJykpIHtcbiAgICAgICAgICAgIHJldC5faXNWYWxpZCA9IGlucHV0Ll9pc1ZhbGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBjcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcbiAgICBjcmVhdGVEdXJhdGlvbi5pbnZhbGlkID0gY3JlYXRlSW52YWxpZCQxO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VJc28oaW5wLCBzaWduKSB7XG4gICAgICAgIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gICAgICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgICAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgICAgIHZhciByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAgICAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXMgPSB7fTtcblxuICAgICAgICByZXMubW9udGhzID1cbiAgICAgICAgICAgIG90aGVyLm1vbnRoKCkgLSBiYXNlLm1vbnRoKCkgKyAob3RoZXIueWVhcigpIC0gYmFzZS55ZWFyKCkpICogMTI7XG4gICAgICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgICAgIC0tcmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKCEoYmFzZS5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlKTtcbiAgICAgICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKHBlcmlvZCAhPT0gbnVsbCAmJiAhaXNOYU4oK3BlcmlvZCkpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdtb21lbnQoKS4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyhwZXJpb2QsIG51bWJlcikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtb21lbnQoKS4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0bXAgPSB2YWw7XG4gICAgICAgICAgICAgICAgdmFsID0gcGVyaW9kO1xuICAgICAgICAgICAgICAgIHBlcmlvZCA9IHRtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuICAgICAgICAgICAgYWRkU3VidHJhY3QodGhpcywgZHVyLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3VidHJhY3QobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyksXG4gICAgICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgICAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIC8vIE5vIG9wXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgICAgICAgaWYgKG1vbnRocykge1xuICAgICAgICAgICAgc2V0TW9udGgobW9tLCBnZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5cykge1xuICAgICAgICAgICAgc2V0JDEobW9tLCAnRGF0ZScsIGdldChtb20sICdEYXRlJykgKyBkYXlzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFkZCA9IGNyZWF0ZUFkZGVyKDEsICdhZGQnKSxcbiAgICAgICAgc3VidHJhY3QgPSBjcmVhdGVBZGRlcigtMSwgJ3N1YnRyYWN0Jyk7XG5cbiAgICBmdW5jdGlvbiBpc1N0cmluZyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcbiAgICB9XG5cbiAgICAvLyB0eXBlIE1vbWVudElucHV0ID0gTW9tZW50IHwgRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBNb21lbnRJbnB1dE9iamVjdCB8IHZvaWQ7IC8vIG51bGwgfCB1bmRlZmluZWRcbiAgICBmdW5jdGlvbiBpc01vbWVudElucHV0KGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc01vbWVudChpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzRGF0ZShpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzU3RyaW5nKGlucHV0KSB8fFxuICAgICAgICAgICAgaXNOdW1iZXIoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc01vbWVudElucHV0T2JqZWN0KGlucHV0KSB8fFxuICAgICAgICAgICAgaW5wdXQgPT09IG51bGwgfHxcbiAgICAgICAgICAgIGlucHV0ID09PSB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01vbWVudElucHV0T2JqZWN0KGlucHV0KSB7XG4gICAgICAgIHZhciBvYmplY3RUZXN0ID0gaXNPYmplY3QoaW5wdXQpICYmICFpc09iamVjdEVtcHR5KGlucHV0KSxcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICAgICAgICAneWVhcnMnLFxuICAgICAgICAgICAgICAgICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAneScsXG4gICAgICAgICAgICAgICAgJ21vbnRocycsXG4gICAgICAgICAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAgICAgJ2RheXMnLFxuICAgICAgICAgICAgICAgICdkYXknLFxuICAgICAgICAgICAgICAgICdkJyxcbiAgICAgICAgICAgICAgICAnZGF0ZXMnLFxuICAgICAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICAgICAnRCcsXG4gICAgICAgICAgICAgICAgJ2hvdXJzJyxcbiAgICAgICAgICAgICAgICAnaG91cicsXG4gICAgICAgICAgICAgICAgJ2gnLFxuICAgICAgICAgICAgICAgICdtaW51dGVzJyxcbiAgICAgICAgICAgICAgICAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAnbScsXG4gICAgICAgICAgICAgICAgJ3NlY29uZHMnLFxuICAgICAgICAgICAgICAgICdzZWNvbmQnLFxuICAgICAgICAgICAgICAgICdzJyxcbiAgICAgICAgICAgICAgICAnbWlsbGlzZWNvbmRzJyxcbiAgICAgICAgICAgICAgICAnbWlsbGlzZWNvbmQnLFxuICAgICAgICAgICAgICAgICdtcycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHByb3BlcnR5LFxuICAgICAgICAgICAgcHJvcGVydHlMZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydHlMZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHlUZXN0ID0gcHJvcGVydHlUZXN0IHx8IGhhc093blByb3AoaW5wdXQsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmplY3RUZXN0ICYmIHByb3BlcnR5VGVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHtcbiAgICAgICAgdmFyIGFycmF5VGVzdCA9IGlzQXJyYXkoaW5wdXQpLFxuICAgICAgICAgICAgZGF0YVR5cGVUZXN0ID0gZmFsc2U7XG4gICAgICAgIGlmIChhcnJheVRlc3QpIHtcbiAgICAgICAgICAgIGRhdGFUeXBlVGVzdCA9XG4gICAgICAgICAgICAgICAgaW5wdXQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNOdW1iZXIoaXRlbSkgJiYgaXNTdHJpbmcoaW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlUZXN0ICYmIGRhdGFUeXBlVGVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NhbGVuZGFyU3BlYyhpbnB1dCkge1xuICAgICAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3NhbWVEYXknLFxuICAgICAgICAgICAgICAgICduZXh0RGF5JyxcbiAgICAgICAgICAgICAgICAnbGFzdERheScsXG4gICAgICAgICAgICAgICAgJ25leHRXZWVrJyxcbiAgICAgICAgICAgICAgICAnbGFzdFdlZWsnLFxuICAgICAgICAgICAgICAgICdzYW1lRWxzZScsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHByb3BlcnR5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBwcm9wZXJ0eVRlc3QgfHwgaGFzT3duUHJvcChpbnB1dCwgcHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGRpZmYgPCAtNlxuICAgICAgICAgICAgPyAnc2FtZUVsc2UnXG4gICAgICAgICAgICA6IGRpZmYgPCAtMVxuICAgICAgICAgICAgPyAnbGFzdFdlZWsnXG4gICAgICAgICAgICA6IGRpZmYgPCAwXG4gICAgICAgICAgICA/ICdsYXN0RGF5J1xuICAgICAgICAgICAgOiBkaWZmIDwgMVxuICAgICAgICAgICAgPyAnc2FtZURheSdcbiAgICAgICAgICAgIDogZGlmZiA8IDJcbiAgICAgICAgICAgID8gJ25leHREYXknXG4gICAgICAgICAgICA6IGRpZmYgPCA3XG4gICAgICAgICAgICA/ICduZXh0V2VlaydcbiAgICAgICAgICAgIDogJ3NhbWVFbHNlJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxlbmRhciQxKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAgICAgLy8gU3VwcG9ydCBmb3Igc2luZ2xlIHBhcmFtZXRlciwgZm9ybWF0cyBvbmx5IG92ZXJsb2FkIHRvIHRoZSBjYWxlbmRhciBmdW5jdGlvblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTW9tZW50SW5wdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDYWxlbmRhclNwZWMoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgICAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcbiAgICAgICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnLFxuICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICBmb3JtYXRzICYmXG4gICAgICAgICAgICAgICAgKGlzRnVuY3Rpb24oZm9ybWF0c1tmb3JtYXRdKVxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdHNbZm9ybWF0XS5jYWxsKHRoaXMsIG5vdylcbiAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChcbiAgICAgICAgICAgIG91dHB1dCB8fCB0aGlzLmxvY2FsZURhdGEoKS5jYWxlbmRhcihmb3JtYXQsIHRoaXMsIGNyZWF0ZUxvY2FsKG5vdykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCZWZvcmUoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQmV0d2Vlbihmcm9tLCB0bywgdW5pdHMsIGluY2x1c2l2aXR5KSB7XG4gICAgICAgIHZhciBsb2NhbEZyb20gPSBpc01vbWVudChmcm9tKSA/IGZyb20gOiBjcmVhdGVMb2NhbChmcm9tKSxcbiAgICAgICAgICAgIGxvY2FsVG8gPSBpc01vbWVudCh0bykgPyB0byA6IGNyZWF0ZUxvY2FsKHRvKTtcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxGcm9tLmlzVmFsaWQoKSAmJiBsb2NhbFRvLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbmNsdXNpdml0eSA9IGluY2x1c2l2aXR5IHx8ICcoKSc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaW5jbHVzaXZpdHlbMF0gPT09ICcoJ1xuICAgICAgICAgICAgICAgID8gdGhpcy5pc0FmdGVyKGxvY2FsRnJvbSwgdW5pdHMpXG4gICAgICAgICAgICAgICAgOiAhdGhpcy5pc0JlZm9yZShsb2NhbEZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgICAgIChpbmNsdXNpdml0eVsxXSA9PT0gJyknXG4gICAgICAgICAgICAgICAgPyB0aGlzLmlzQmVmb3JlKGxvY2FsVG8sIHVuaXRzKVxuICAgICAgICAgICAgICAgIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICAgICAgaW5wdXRNcztcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcbiAgICAgICAgICAgICAgICBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JBZnRlcihpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsIHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWZmKGlucHV0LCB1bml0cywgYXNGbG9hdCkge1xuICAgICAgICB2YXIgdGhhdCwgem9uZURlbHRhLCBvdXRwdXQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIHRoaXMpO1xuXG4gICAgICAgIGlmICghdGhhdC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB6b25lRGVsdGEgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogNmU0O1xuXG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAxZTM7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDBcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDZlNDtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDg2NGU1O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gNjA0OGU1O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aERpZmYoYSwgYikge1xuICAgICAgICBpZiAoYS5kYXRlKCkgPCBiLmRhdGUoKSkge1xuICAgICAgICAgICAgLy8gZW5kLW9mLW1vbnRoIGNhbGN1bGF0aW9ucyB3b3JrIGNvcnJlY3Qgd2hlbiB0aGUgc3RhcnQgbW9udGggaGFzIG1vcmVcbiAgICAgICAgICAgIC8vIGRheXMgdGhhbiB0aGUgZW5kIG1vbnRoLlxuICAgICAgICAgICAgcmV0dXJuIC1tb250aERpZmYoYiwgYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICAgICAgdmFyIHdob2xlTW9udGhEaWZmID0gKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIgKyAoYi5tb250aCgpIC0gYS5tb250aCgpKSxcbiAgICAgICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgICAgICBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCAnbW9udGhzJyksXG4gICAgICAgICAgICBhbmNob3IyLFxuICAgICAgICAgICAgYWRqdXN0O1xuXG4gICAgICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgICAgICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbiAgICB9XG5cbiAgICBob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbiAgICBob29rcy5kZWZhdWx0Rm9ybWF0VXRjID0gJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nO1xuXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0lTT1N0cmluZyhrZWVwT2Zmc2V0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1dGMgPSBrZWVwT2Zmc2V0ICE9PSB0cnVlLFxuICAgICAgICAgICAgbSA9IHV0YyA/IHRoaXMuY2xvbmUoKS51dGMoKSA6IHRoaXM7XG4gICAgICAgIGlmIChtLnllYXIoKSA8IDAgfHwgbS55ZWFyKCkgPiA5OTk5KSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxuICAgICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgICAgdXRjXG4gICAgICAgICAgICAgICAgICAgID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXSdcbiAgICAgICAgICAgICAgICAgICAgOiAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XG4gICAgICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICAgICAgaWYgKHV0Yykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSArIHRoaXMudXRjT2Zmc2V0KCkgKiA2MCAqIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdaJywgZm9ybWF0TW9tZW50KG0sICdaJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgdXRjID8gJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nIDogJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gICAgICogYWxzbyBiZSBldmFsdWF0ZWQgdG8gZ2V0IGEgbmV3IG1vbWVudCB3aGljaCBpcyB0aGUgc2FtZVxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21vbWVudC5pbnZhbGlkKC8qICcgKyB0aGlzLl9pICsgJyAqLyknO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmdW5jID0gJ21vbWVudCcsXG4gICAgICAgICAgICB6b25lID0gJycsXG4gICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgZGF0ZXRpbWUsXG4gICAgICAgICAgICBzdWZmaXg7XG4gICAgICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgICAgIGZ1bmMgPSB0aGlzLnV0Y09mZnNldCgpID09PSAwID8gJ21vbWVudC51dGMnIDogJ21vbWVudC5wYXJzZVpvbmUnO1xuICAgICAgICAgICAgem9uZSA9ICdaJztcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgICAgICB5ZWFyID0gMCA8PSB0aGlzLnllYXIoKSAmJiB0aGlzLnllYXIoKSA8PSA5OTk5ID8gJ1lZWVknIDogJ1lZWVlZWSc7XG4gICAgICAgIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgICAgIHN1ZmZpeCA9IHpvbmUgKyAnW1wiKV0nO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChwcmVmaXggKyB5ZWFyICsgZGF0ZXRpbWUgKyBzdWZmaXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdChpbnB1dFN0cmluZykge1xuICAgICAgICBpZiAoIWlucHV0U3RyaW5nKSB7XG4gICAgICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKVxuICAgICAgICAgICAgICAgID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0Y1xuICAgICAgICAgICAgICAgIDogaG9va3MuZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcywgZnJvbTogdGltZSB9KVxuICAgICAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tTm93KHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fCBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgZnJvbTogdGhpcywgdG86IHRpbWUgfSlcbiAgICAgICAgICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXG4gICAgICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy50byhjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICAvLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4gICAgLy8gaW5zdGFuY2UuICBPdGhlcndpc2UsIGl0IHdpbGwgcmV0dXJuIHRoZSBsb2NhbGUgY29uZmlndXJhdGlvblxuICAgIC8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICBmdW5jdGlvbiBsb2NhbGUoa2V5KSB7XG4gICAgICAgIHZhciBuZXdMb2NhbGVEYXRhO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIHZhciBNU19QRVJfU0VDT05EID0gMTAwMCxcbiAgICAgICAgTVNfUEVSX01JTlVURSA9IDYwICogTVNfUEVSX1NFQ09ORCxcbiAgICAgICAgTVNfUEVSX0hPVVIgPSA2MCAqIE1TX1BFUl9NSU5VVEUsXG4gICAgICAgIE1TX1BFUl80MDBfWUVBUlMgPSAoMzY1ICogNDAwICsgOTcpICogMjQgKiBNU19QRVJfSE9VUjtcblxuICAgIC8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XG4gICAgZnVuY3Rpb24gbW9kJDEoZGl2aWRlbmQsIGRpdmlzb3IpIHtcbiAgICAgICAgcmV0dXJuICgoZGl2aWRlbmQgJSBkaXZpc29yKSArIGRpdmlzb3IpICUgZGl2aXNvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0YXJ0T2ZEYXRlKHksIG0sIGQpIHtcbiAgICAgICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgZCkudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXRjU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgICAgICAvLyBEYXRlLlVUQyByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgcmV0dXJuIERhdGUuVVRDKHkgKyA0MDAsIG0sIGQpIC0gTVNfUEVSXzQwMF9ZRUFSUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLlVUQyh5LCBtLCBkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0T2YodW5pdHMpIHtcbiAgICAgICAgdmFyIHRpbWUsIHN0YXJ0T2ZEYXRlO1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCAwLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSAtICh0aGlzLm1vbnRoKCkgJSAzKSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtIHRoaXMud2Vla2RheSgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKFxuICAgICAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcbiAgICAgICAgICAgICAgICAgICAgTVNfUEVSX0hPVVJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfTUlOVVRFKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgLT0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kLnNldFRpbWUodGltZSk7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kT2YodW5pdHMpIHtcbiAgICAgICAgdmFyIHRpbWUsIHN0YXJ0T2ZEYXRlO1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMykgKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSArIDEsIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSArIDdcbiAgICAgICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gKHRoaXMuaXNvV2Vla2RheSgpIC0gMSkgKyA3XG4gICAgICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSArIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lICs9XG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSIC1cbiAgICAgICAgICAgICAgICAgICAgbW9kJDEoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICAgICAgICAgICkgLVxuICAgICAgICAgICAgICAgICAgICAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfU0VDT05EIC0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bml4KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBtLnllYXIoKSxcbiAgICAgICAgICAgIG0ubW9udGgoKSxcbiAgICAgICAgICAgIG0uZGF0ZSgpLFxuICAgICAgICAgICAgbS5ob3VyKCksXG4gICAgICAgICAgICBtLm1pbnV0ZSgpLFxuICAgICAgICAgICAgbS5zZWNvbmQoKSxcbiAgICAgICAgICAgIG0ubWlsbGlzZWNvbmQoKSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b09iamVjdCgpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQkMigpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2luZ0ZsYWdzKCkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRBdCgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dDogdGhpcy5faSxcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICAgICAgaXNVVEM6IHRoaXMuX2lzVVRDLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3QsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ04nLCAwLCAwLCAnZXJhQWJicicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTicsIDAsIDAsICdlcmFBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTicsIDAsIDAsICdlcmFBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTk4nLCAwLCAwLCAnZXJhTmFtZScpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTk5OTicsIDAsIDAsICdlcmFOYXJyb3cnKTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5JywgMV0sICd5bycsICdlcmFZZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5JywgMl0sIDAsICdlcmFZZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5eScsIDNdLCAwLCAnZXJhWWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eXl5JywgNF0sIDAsICdlcmFZZWFyJyk7XG5cbiAgICBhZGRSZWdleFRva2VuKCdOJywgbWF0Y2hFcmFBYmJyKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTicsIG1hdGNoRXJhQWJicik7XG4gICAgYWRkUmVnZXhUb2tlbignTk5OJywgbWF0Y2hFcmFBYmJyKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTk5OJywgbWF0Y2hFcmFOYW1lKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTk5OTicsIG1hdGNoRXJhTmFycm93KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oXG4gICAgICAgIFsnTicsICdOTicsICdOTk4nLCAnTk5OTicsICdOTk5OTiddLFxuICAgICAgICBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgZXJhID0gY29uZmlnLl9sb2NhbGUuZXJhc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAgICAgaWYgKGVyYSkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVyYSA9IGVyYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEVyYSA9IGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3knLCBtYXRjaFVuc2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCd5eScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3l5eScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3l5eXknLCBtYXRjaFVuc2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCd5bycsIG1hdGNoRXJhWWVhck9yZGluYWwpO1xuXG4gICAgYWRkUGFyc2VUb2tlbihbJ3knLCAneXknLCAneXl5JywgJ3l5eXknXSwgWUVBUik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ3lvJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpIHtcbiAgICAgICAgICAgIG1hdGNoID0gaW5wdXQubWF0Y2goY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fbG9jYWxlLmVyYVllYXJPcmRpbmFsUGFyc2UpIHtcbiAgICAgICAgICAgIGFycmF5W1lFQVJdID0gY29uZmlnLl9sb2NhbGUuZXJhWWVhck9yZGluYWxQYXJzZShpbnB1dCwgbWF0Y2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVFcmFzKG0sIGZvcm1hdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMuX2VyYXMgfHwgZ2V0TG9jYWxlKCdlbicpLl9lcmFzO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBob29rcyhlcmFzW2ldLnNpbmNlKS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS5zaW5jZSA9IGRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSArSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0udW50aWwpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS51bnRpbCA9IGRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJhcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVFcmFzUGFyc2UoZXJhTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMuZXJhcygpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFiYnIsXG4gICAgICAgICAgICBuYXJyb3c7XG4gICAgICAgIGVyYU5hbWUgPSBlcmFOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICBuYW1lID0gZXJhc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBhYmJyID0gZXJhc1tpXS5hYmJyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBuYXJyb3cgPSBlcmFzW2ldLm5hcnJvdy50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhYmJyID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOTk5OTic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFycm93ID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtuYW1lLCBhYmJyLCBuYXJyb3ddLmluZGV4T2YoZXJhTmFtZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlRXJhc0NvbnZlcnRZZWFyKGVyYSwgeWVhcikge1xuICAgICAgICB2YXIgZGlyID0gZXJhLnNpbmNlIDw9IGVyYS51bnRpbCA/ICsxIDogLTE7XG4gICAgICAgIGlmICh5ZWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBob29rcyhlcmEuc2luY2UpLnllYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBob29rcyhlcmEuc2luY2UpLnllYXIoKSArICh5ZWFyIC0gZXJhLm9mZnNldCkgKiBkaXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcmFOYW1lKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYU5hcnJvdygpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYXJyb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYXJyb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJhQWJicigpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0uYWJicjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcmFZZWFyKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBkaXIsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIGRpciA9IGVyYXNbaV0uc2luY2UgPD0gZXJhc1tpXS51bnRpbCA/ICsxIDogLTE7XG5cbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHx8XG4gICAgICAgICAgICAgICAgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMueWVhcigpIC0gaG9va3MoZXJhc1tpXS5zaW5jZSkueWVhcigpKSAqIGRpciArXG4gICAgICAgICAgICAgICAgICAgIGVyYXNbaV0ub2Zmc2V0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnllYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYW1lUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNOYW1lUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc0FiYnJSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzQWJiclJlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzQWJiclJlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVyYXNOYXJyb3dSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzTmFycm93UmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNOYXJyb3dSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYUFiYnIoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmVyYXNBYmJyUmVnZXgoaXNTdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhTmFtZShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc05hbWVSZWdleChpc1N0cmljdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFOYXJyb3coaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmVyYXNOYXJyb3dSZWdleChpc1N0cmljdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFZZWFyT3JkaW5hbChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXggfHwgbWF0Y2hVbnNpZ25lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlRXJhc1BhcnNlKCkge1xuICAgICAgICB2YXIgYWJiclBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbmFtZVBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbmFycm93UGllY2VzID0gW10sXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5lcmFzKCk7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICBuYW1lUGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5uYW1lKSk7XG4gICAgICAgICAgICBhYmJyUGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5hYmJyKSk7XG4gICAgICAgICAgICBuYXJyb3dQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLm5hcnJvdykpO1xuXG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFtZSkpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5uYXJyb3cpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VyYXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fZXJhc05hbWVSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG5hbWVQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9lcmFzQWJiclJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgYWJiclBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX2VyYXNOYXJyb3dSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgbmFycm93UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnZ2cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydHRycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuKHRva2VuLCBnZXR0ZXIpIHtcbiAgICAgICAgYWRkRm9ybWF0VG9rZW4oMCwgW3Rva2VuLCB0b2tlbi5sZW5ndGhdLCAwLCBnZXR0ZXIpO1xuICAgIH1cblxuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCAnd2Vla1llYXInKTtcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsICd3ZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAnaXNvV2Vla1llYXInKTtcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsICdpc29XZWVrWWVhcicpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xuICAgIGFkZFVuaXRBbGlhcygnaXNvV2Vla1llYXInLCAnR0cnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XG4gICAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrWWVhcicsIDEpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignRycsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdnJywgbWF0Y2hTaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gICAgYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdHR0dHRycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnZycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgICAgICBbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLFxuICAgICAgICBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy53ZWVrKCksXG4gICAgICAgICAgICB0aGlzLndlZWtkYXkoKSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy5pc29XZWVrKCksXG4gICAgICAgICAgICB0aGlzLmlzb1dlZWtkYXkoKSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICA0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoKSB7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyKCkge1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy5pc29XZWVrWWVhcigpLCAxLCA0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcigpIHtcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdlZWtzSW5XZWVrWWVhcigpIHtcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLndlZWtZZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgICAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIodGhpcywgZG93LCBkb3kpLnllYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgICAgICBpZiAod2VlayA+IHdlZWtzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNldFdlZWtBbGwuY2FsbCh0aGlzLCBpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0V2Vla0FsbCh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdRJywgMCwgJ1FvJywgJ3F1YXJ0ZXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbiAgICBhZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcbiAgICAgICAgICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyAodGhpcy5tb250aCgpICUgMykpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdEJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0XG4gICAgICAgICAgICA/IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZVxuICAgICAgICAgICAgOiBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50O1xuICAgIH0pO1xuXG4gICAgYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG4gICAgYWRkUGFyc2VUb2tlbignRG8nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG4gICAgfSk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzXSwgJ0RERG8nLCAnZGF5T2ZZZWFyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXlPZlllYXInLCA0KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG4gICAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mWWVhcihpbnB1dCkge1xuICAgICAgICB2YXIgZGF5T2ZZZWFyID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTVcbiAgICAgICAgICAgICkgKyAxO1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdtJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyXSwgMCwgJ3NlY29uZCcpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRTZWNvbmQgPSBtYWtlR2V0U2V0KCdTZWNvbmRzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMDApO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbiAgICB9KTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignUycsIG1hdGNoMXRvMywgbWF0Y2gxKTtcbiAgICBhZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdTU1MnLCBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbiAgICB2YXIgdG9rZW4sIGdldFNldE1pbGxpc2Vjb25kO1xuICAgIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICAgICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xuICAgIH1cblxuICAgIGdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3onLCAwLCAwLCAnem9uZUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFpvbmVBYmJyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFpvbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvID0gTW9tZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLmFkZCA9IGFkZDtcbiAgICBwcm90by5jYWxlbmRhciA9IGNhbGVuZGFyJDE7XG4gICAgcHJvdG8uY2xvbmUgPSBjbG9uZTtcbiAgICBwcm90by5kaWZmID0gZGlmZjtcbiAgICBwcm90by5lbmRPZiA9IGVuZE9mO1xuICAgIHByb3RvLmZvcm1hdCA9IGZvcm1hdDtcbiAgICBwcm90by5mcm9tID0gZnJvbTtcbiAgICBwcm90by5mcm9tTm93ID0gZnJvbU5vdztcbiAgICBwcm90by50byA9IHRvO1xuICAgIHByb3RvLnRvTm93ID0gdG9Ob3c7XG4gICAgcHJvdG8uZ2V0ID0gc3RyaW5nR2V0O1xuICAgIHByb3RvLmludmFsaWRBdCA9IGludmFsaWRBdDtcbiAgICBwcm90by5pc0FmdGVyID0gaXNBZnRlcjtcbiAgICBwcm90by5pc0JlZm9yZSA9IGlzQmVmb3JlO1xuICAgIHByb3RvLmlzQmV0d2VlbiA9IGlzQmV0d2VlbjtcbiAgICBwcm90by5pc1NhbWUgPSBpc1NhbWU7XG4gICAgcHJvdG8uaXNTYW1lT3JBZnRlciA9IGlzU2FtZU9yQWZ0ZXI7XG4gICAgcHJvdG8uaXNTYW1lT3JCZWZvcmUgPSBpc1NhbWVPckJlZm9yZTtcbiAgICBwcm90by5pc1ZhbGlkID0gaXNWYWxpZCQyO1xuICAgIHByb3RvLmxhbmcgPSBsYW5nO1xuICAgIHByb3RvLmxvY2FsZSA9IGxvY2FsZTtcbiAgICBwcm90by5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcbiAgICBwcm90by5tYXggPSBwcm90b3R5cGVNYXg7XG4gICAgcHJvdG8ubWluID0gcHJvdG90eXBlTWluO1xuICAgIHByb3RvLnBhcnNpbmdGbGFncyA9IHBhcnNpbmdGbGFncztcbiAgICBwcm90by5zZXQgPSBzdHJpbmdTZXQ7XG4gICAgcHJvdG8uc3RhcnRPZiA9IHN0YXJ0T2Y7XG4gICAgcHJvdG8uc3VidHJhY3QgPSBzdWJ0cmFjdDtcbiAgICBwcm90by50b0FycmF5ID0gdG9BcnJheTtcbiAgICBwcm90by50b09iamVjdCA9IHRvT2JqZWN0O1xuICAgIHByb3RvLnRvRGF0ZSA9IHRvRGF0ZTtcbiAgICBwcm90by50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nO1xuICAgIHByb3RvLmluc3BlY3QgPSBpbnNwZWN0O1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICE9IG51bGwpIHtcbiAgICAgICAgcHJvdG9bU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ01vbWVudDwnICsgdGhpcy5mb3JtYXQoKSArICc+JztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdG8udG9KU09OID0gdG9KU09OO1xuICAgIHByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgcHJvdG8udW5peCA9IHVuaXg7XG4gICAgcHJvdG8udmFsdWVPZiA9IHZhbHVlT2Y7XG4gICAgcHJvdG8uY3JlYXRpb25EYXRhID0gY3JlYXRpb25EYXRhO1xuICAgIHByb3RvLmVyYU5hbWUgPSBnZXRFcmFOYW1lO1xuICAgIHByb3RvLmVyYU5hcnJvdyA9IGdldEVyYU5hcnJvdztcbiAgICBwcm90by5lcmFBYmJyID0gZ2V0RXJhQWJicjtcbiAgICBwcm90by5lcmFZZWFyID0gZ2V0RXJhWWVhcjtcbiAgICBwcm90by55ZWFyID0gZ2V0U2V0WWVhcjtcbiAgICBwcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcbiAgICBwcm90by53ZWVrWWVhciA9IGdldFNldFdlZWtZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtZZWFyID0gZ2V0U2V0SVNPV2Vla1llYXI7XG4gICAgcHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcbiAgICBwcm90by5tb250aCA9IGdldFNldE1vbnRoO1xuICAgIHByb3RvLmRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGg7XG4gICAgcHJvdG8ud2VlayA9IHByb3RvLndlZWtzID0gZ2V0U2V0V2VlaztcbiAgICBwcm90by5pc29XZWVrID0gcHJvdG8uaXNvV2Vla3MgPSBnZXRTZXRJU09XZWVrO1xuICAgIHByb3RvLndlZWtzSW5ZZWFyID0gZ2V0V2Vla3NJblllYXI7XG4gICAgcHJvdG8ud2Vla3NJbldlZWtZZWFyID0gZ2V0V2Vla3NJbldlZWtZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG4gICAgcHJvdG8uaXNvV2Vla3NJbklTT1dlZWtZZWFyID0gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyO1xuICAgIHByb3RvLmRhdGUgPSBnZXRTZXREYXlPZk1vbnRoO1xuICAgIHByb3RvLmRheSA9IHByb3RvLmRheXMgPSBnZXRTZXREYXlPZldlZWs7XG4gICAgcHJvdG8ud2Vla2RheSA9IGdldFNldExvY2FsZURheU9mV2VlaztcbiAgICBwcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xuICAgIHByb3RvLmRheU9mWWVhciA9IGdldFNldERheU9mWWVhcjtcbiAgICBwcm90by5ob3VyID0gcHJvdG8uaG91cnMgPSBnZXRTZXRIb3VyO1xuICAgIHByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG4gICAgcHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcbiAgICBwcm90by5taWxsaXNlY29uZCA9IHByb3RvLm1pbGxpc2Vjb25kcyA9IGdldFNldE1pbGxpc2Vjb25kO1xuICAgIHByb3RvLnV0Y09mZnNldCA9IGdldFNldE9mZnNldDtcbiAgICBwcm90by51dGMgPSBzZXRPZmZzZXRUb1VUQztcbiAgICBwcm90by5sb2NhbCA9IHNldE9mZnNldFRvTG9jYWw7XG4gICAgcHJvdG8ucGFyc2Vab25lID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG4gICAgcHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbiAgICBwcm90by5pc0RTVCA9IGlzRGF5bGlnaHRTYXZpbmdUaW1lO1xuICAgIHByb3RvLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIHByb3RvLmlzVXRjT2Zmc2V0ID0gaXNVdGNPZmZzZXQ7XG4gICAgcHJvdG8uaXNVdGMgPSBpc1V0YztcbiAgICBwcm90by5pc1VUQyA9IGlzVXRjO1xuICAgIHByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG4gICAgcHJvdG8uem9uZU5hbWUgPSBnZXRab25lTmFtZTtcbiAgICBwcm90by5kYXRlcyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJyxcbiAgICAgICAgZ2V0U2V0RGF5T2ZNb250aFxuICAgICk7XG4gICAgcHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkJyxcbiAgICAgICAgZ2V0U2V0TW9udGhcbiAgICApO1xuICAgIHByb3RvLnllYXJzID0gZGVwcmVjYXRlKFxuICAgICAgICAneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsXG4gICAgICAgIGdldFNldFllYXJcbiAgICApO1xuICAgIHByb3RvLnpvbmUgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsXG4gICAgICAgIGdldFNldFpvbmVcbiAgICApO1xuICAgIHByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ2lzRFNUU2hpZnRlZCBpcyBkZXByZWNhdGVkLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kc3Qtc2hpZnRlZC8gZm9yIG1vcmUgaW5mb3JtYXRpb24nLFxuICAgICAgICBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWRcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVW5peChpbnB1dCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJblpvbmUoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZVBhcnNlUG9zdEZvcm1hdChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICB2YXIgcHJvdG8kMSA9IExvY2FsZS5wcm90b3R5cGU7XG5cbiAgICBwcm90byQxLmNhbGVuZGFyID0gY2FsZW5kYXI7XG4gICAgcHJvdG8kMS5sb25nRGF0ZUZvcm1hdCA9IGxvbmdEYXRlRm9ybWF0O1xuICAgIHByb3RvJDEuaW52YWxpZERhdGUgPSBpbnZhbGlkRGF0ZTtcbiAgICBwcm90byQxLm9yZGluYWwgPSBvcmRpbmFsO1xuICAgIHByb3RvJDEucHJlcGFyc2UgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG4gICAgcHJvdG8kMS5wb3N0Zm9ybWF0ID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvJDEucmVsYXRpdmVUaW1lID0gcmVsYXRpdmVUaW1lO1xuICAgIHByb3RvJDEucGFzdEZ1dHVyZSA9IHBhc3RGdXR1cmU7XG4gICAgcHJvdG8kMS5zZXQgPSBzZXQ7XG4gICAgcHJvdG8kMS5lcmFzID0gbG9jYWxlRXJhcztcbiAgICBwcm90byQxLmVyYXNQYXJzZSA9IGxvY2FsZUVyYXNQYXJzZTtcbiAgICBwcm90byQxLmVyYXNDb252ZXJ0WWVhciA9IGxvY2FsZUVyYXNDb252ZXJ0WWVhcjtcbiAgICBwcm90byQxLmVyYXNBYmJyUmVnZXggPSBlcmFzQWJiclJlZ2V4O1xuICAgIHByb3RvJDEuZXJhc05hbWVSZWdleCA9IGVyYXNOYW1lUmVnZXg7XG4gICAgcHJvdG8kMS5lcmFzTmFycm93UmVnZXggPSBlcmFzTmFycm93UmVnZXg7XG5cbiAgICBwcm90byQxLm1vbnRocyA9IGxvY2FsZU1vbnRocztcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0ID0gbG9jYWxlTW9udGhzU2hvcnQ7XG4gICAgcHJvdG8kMS5tb250aHNQYXJzZSA9IGxvY2FsZU1vbnRoc1BhcnNlO1xuICAgIHByb3RvJDEubW9udGhzUmVnZXggPSBtb250aHNSZWdleDtcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0UmVnZXggPSBtb250aHNTaG9ydFJlZ2V4O1xuICAgIHByb3RvJDEud2VlayA9IGxvY2FsZVdlZWs7XG4gICAgcHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xuICAgIHByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxuICAgIHByb3RvJDEud2Vla2RheXMgPSBsb2NhbGVXZWVrZGF5cztcbiAgICBwcm90byQxLndlZWtkYXlzTWluID0gbG9jYWxlV2Vla2RheXNNaW47XG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0ID0gbG9jYWxlV2Vla2RheXNTaG9ydDtcbiAgICBwcm90byQxLndlZWtkYXlzUGFyc2UgPSBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuXG4gICAgcHJvdG8kMS53ZWVrZGF5c1JlZ2V4ID0gd2Vla2RheXNSZWdleDtcbiAgICBwcm90byQxLndlZWtkYXlzU2hvcnRSZWdleCA9IHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICBwcm90byQxLndlZWtkYXlzTWluUmVnZXggPSB3ZWVrZGF5c01pblJlZ2V4O1xuXG4gICAgcHJvdG8kMS5pc1BNID0gbG9jYWxlSXNQTTtcbiAgICBwcm90byQxLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XG5cbiAgICBmdW5jdGlvbiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgc2V0dGVyKSB7XG4gICAgICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgICAgIHV0YyA9IGNyZWF0ZVVUQygpLnNldChzZXR0ZXIsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZVtmaWVsZF0odXRjLCBmb3JtYXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgb3V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIC8vICgpXG4gICAgLy8gKDUpXG4gICAgLy8gKGZtdCwgNSlcbiAgICAvLyAoZm10KVxuICAgIC8vICh0cnVlKVxuICAgIC8vICh0cnVlLCA1KVxuICAgIC8vICh0cnVlLCBmbXQsIDUpXG4gICAgLy8gKHRydWUsIGZtdClcbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGVTb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgbG9jYWxlU29ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG91dCA9IFtdO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCAoaW5kZXggKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCAoaSArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzKGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xuICAgIH1cblxuICAgIGdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgICAgIGVyYXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5jZTogJzAwMDEtMDEtMDEnLFxuICAgICAgICAgICAgICAgIHVudGlsOiArSW5maW5pdHksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBbm5vIERvbWluaScsXG4gICAgICAgICAgICAgICAgbmFycm93OiAnQUQnLFxuICAgICAgICAgICAgICAgIGFiYnI6ICdBRCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpbmNlOiAnMDAwMC0xMi0zMScsXG4gICAgICAgICAgICAgICAgdW50aWw6IC1JbmZpbml0eSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JlZm9yZSBDaHJpc3QnLFxuICAgICAgICAgICAgICAgIG5hcnJvdzogJ0JDJyxcbiAgICAgICAgICAgICAgICBhYmJyOiAnQkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICAgICAgdG9JbnQoKG51bWJlciAlIDEwMCkgLyAxMCkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAndGgnO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuICAgIGhvb2tzLmxhbmcgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQubGFuZyBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZSBpbnN0ZWFkLicsXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZVxuICAgICk7XG4gICAgaG9va3MubGFuZ0RhdGEgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJyxcbiAgICAgICAgZ2V0TG9jYWxlXG4gICAgKTtcblxuICAgIHZhciBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBhYnMoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgICAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICAgICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgICAgIGRhdGEuaG91cnMgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgICAgICBkYXRhLm1vbnRocyA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgICAgICBkYXRhLnllYXJzID0gbWF0aEFicyhkYXRhLnllYXJzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJ0cmFjdCQxKGR1cmF0aW9uLCBpbnB1dCwgdmFsdWUsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVEdXJhdGlvbihpbnB1dCwgdmFsdWUpO1xuXG4gICAgICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uX2RheXMgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgICAgIGR1cmF0aW9uLl9tb250aHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21vbnRocztcblxuICAgICAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xuICAgIH1cblxuICAgIC8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBhZGQkMShpbnB1dCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAxKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0JDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgLTEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic0NlaWwobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnViYmxlKCkge1xuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMsXG4gICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMsXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIHNlY29uZHMsXG4gICAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgICAgaG91cnMsXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIG1vbnRoc0Zyb21EYXlzO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAgICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICAgICAgICAgIGRheXMgPSAwO1xuICAgICAgICAgICAgbW9udGhzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAgICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgICAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICAgICAgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICAgICAgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgICAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xuXG4gICAgICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAgICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgICAgICBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gICAgICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICAgICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICBkYXRhLmRheXMgPSBkYXlzO1xuICAgICAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICAgICAgZGF0YS55ZWFycyA9IHllYXJzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheXNUb01vbnRocyhkYXlzKSB7XG4gICAgICAgIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgICAgICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgICAgIHJldHVybiAoZGF5cyAqIDQ4MDApIC8gMTQ2MDk3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aHMpIHtcbiAgICAgICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgICAgIHJldHVybiAobW9udGhzICogMTQ2MDk3KSAvIDQ4MDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXModW5pdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5cyxcbiAgICAgICAgICAgIG1vbnRocyxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuICAgICAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocztcbiAgICAgICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocyAvIDM7XG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgdGhpcy5hcygnbXMnKT9cbiAgICBmdW5jdGlvbiB2YWx1ZU9mJDEoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICAgICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzKGFsaWFzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxuICAgICAgICBhc1NlY29uZHMgPSBtYWtlQXMoJ3MnKSxcbiAgICAgICAgYXNNaW51dGVzID0gbWFrZUFzKCdtJyksXG4gICAgICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcbiAgICAgICAgYXNEYXlzID0gbWFrZUFzKCdkJyksXG4gICAgICAgIGFzV2Vla3MgPSBtYWtlQXMoJ3cnKSxcbiAgICAgICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcbiAgICAgICAgYXNRdWFydGVycyA9IG1ha2VBcygnUScpLFxuICAgICAgICBhc1llYXJzID0gbWFrZUFzKCd5Jyk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZSQxKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0JDIodW5pdHMpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXNbdW5pdHMgKyAncyddKCkgOiBOYU47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUdldHRlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKSxcbiAgICAgICAgc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ3NlY29uZHMnKSxcbiAgICAgICAgbWludXRlcyA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKSxcbiAgICAgICAgaG91cnMgPSBtYWtlR2V0dGVyKCdob3VycycpLFxuICAgICAgICBkYXlzID0gbWFrZUdldHRlcignZGF5cycpLFxuICAgICAgICBtb250aHMgPSBtYWtlR2V0dGVyKCdtb250aHMnKSxcbiAgICAgICAgeWVhcnMgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG4gICAgZnVuY3Rpb24gd2Vla3MoKSB7XG4gICAgICAgIHJldHVybiBhYnNGbG9vcih0aGlzLmRheXMoKSAvIDcpO1xuICAgIH1cblxuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgICAgIHRocmVzaG9sZHMgPSB7XG4gICAgICAgICAgICBzczogNDQsIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgICAgICAgICAgczogNDUsIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgICAgICAgICBtOiA0NSwgLy8gbWludXRlcyB0byBob3VyXG4gICAgICAgICAgICBoOiAyMiwgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgICAgICBkOiAyNiwgLy8gZGF5cyB0byBtb250aC93ZWVrXG4gICAgICAgICAgICB3OiBudWxsLCAvLyB3ZWVrcyB0byBtb250aFxuICAgICAgICAgICAgTTogMTEsIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgICAgIH07XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuICAgIGZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCB0aHJlc2hvbGRzLCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpLFxuICAgICAgICAgICAgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpLFxuICAgICAgICAgICAgbWludXRlcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpLFxuICAgICAgICAgICAgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKSxcbiAgICAgICAgICAgIGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKSxcbiAgICAgICAgICAgIG1vbnRocyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpLFxuICAgICAgICAgICAgd2Vla3MgPSByb3VuZChkdXJhdGlvbi5hcygndycpKSxcbiAgICAgICAgICAgIHllYXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSksXG4gICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdKSB8fFxuICAgICAgICAgICAgICAgIChzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSkgfHxcbiAgICAgICAgICAgICAgICAobWludXRlcyA8PSAxICYmIFsnbSddKSB8fFxuICAgICAgICAgICAgICAgIChtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSkgfHxcbiAgICAgICAgICAgICAgICAoaG91cnMgPD0gMSAmJiBbJ2gnXSkgfHxcbiAgICAgICAgICAgICAgICAoaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSkgfHxcbiAgICAgICAgICAgICAgICAoZGF5cyA8PSAxICYmIFsnZCddKSB8fFxuICAgICAgICAgICAgICAgIChkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSk7XG5cbiAgICAgICAgaWYgKHRocmVzaG9sZHMudyAhPSBudWxsKSB7XG4gICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICBhIHx8XG4gICAgICAgICAgICAgICAgKHdlZWtzIDw9IDEgJiYgWyd3J10pIHx8XG4gICAgICAgICAgICAgICAgKHdlZWtzIDwgdGhyZXNob2xkcy53ICYmIFsnd3cnLCB3ZWVrc10pO1xuICAgICAgICB9XG4gICAgICAgIGEgPSBhIHx8XG4gICAgICAgICAgICAobW9udGhzIDw9IDEgJiYgWydNJ10pIHx8XG4gICAgICAgICAgICAobW9udGhzIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdKSB8fFxuICAgICAgICAgICAgKHllYXJzIDw9IDEgJiYgWyd5J10pIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICAgICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgICAgICBhWzRdID0gbG9jYWxlO1xuICAgICAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHJvdW5kaW5nRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygcm91bmRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgYSB0aHJlc2hvbGQgZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICAgICAgICB9XG4gICAgICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgICAgICBpZiAodGhyZXNob2xkID09PSAncycpIHtcbiAgICAgICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaHVtYW5pemUoYXJnV2l0aFN1ZmZpeCwgYXJnVGhyZXNob2xkcykge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aXRoU3VmZml4ID0gZmFsc2UsXG4gICAgICAgICAgICB0aCA9IHRocmVzaG9sZHMsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYXJnVGhyZXNob2xkcyA9IGFyZ1dpdGhTdWZmaXg7XG4gICAgICAgICAgICBhcmdXaXRoU3VmZml4ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHdpdGhTdWZmaXggPSBhcmdXaXRoU3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXJnVGhyZXNob2xkcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhyZXNob2xkcywgYXJnVGhyZXNob2xkcyk7XG4gICAgICAgICAgICBpZiAoYXJnVGhyZXNob2xkcy5zICE9IG51bGwgJiYgYXJnVGhyZXNob2xkcy5zcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGguc3MgPSBhcmdUaHJlc2hvbGRzLnMgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIG91dHB1dCA9IHJlbGF0aXZlVGltZSQxKHRoaXMsICF3aXRoU3VmZml4LCB0aCwgbG9jYWxlKTtcblxuICAgICAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuICAgIGZ1bmN0aW9uIHNpZ24oeCkge1xuICAgICAgICByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcbiAgICAgICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAgICAgLy8gICogbWlsbGlzZWNvbmRzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSBob3Vyc1xuICAgICAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIGlzIG5vIGNvbnRleHQtZnJlZSBjb252ZXJzaW9uIGJldHdlZW4gaG91cnMgYW5kIGRheXNcbiAgICAgICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlY29uZHMgPSBhYnMkMSh0aGlzLl9taWxsaXNlY29uZHMpIC8gMTAwMCxcbiAgICAgICAgICAgIGRheXMgPSBhYnMkMSh0aGlzLl9kYXlzKSxcbiAgICAgICAgICAgIG1vbnRocyA9IGFicyQxKHRoaXMuX21vbnRocyksXG4gICAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgICAgaG91cnMsXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCksXG4gICAgICAgICAgICB0b3RhbFNpZ24sXG4gICAgICAgICAgICB5bVNpZ24sXG4gICAgICAgICAgICBkYXlzU2lnbixcbiAgICAgICAgICAgIGhtc1NpZ247XG5cbiAgICAgICAgaWYgKCF0b3RhbCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxuICAgICAgICAgICAgcmV0dXJuICdQMEQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIHNlY29uZHMgJT0gNjA7XG4gICAgICAgIG1pbnV0ZXMgJT0gNjA7XG5cbiAgICAgICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgICAgICB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICAgICAgbW9udGhzICU9IDEyO1xuXG4gICAgICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgICAgIHMgPSBzZWNvbmRzID8gc2Vjb25kcy50b0ZpeGVkKDMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJykgOiAnJztcblxuICAgICAgICB0b3RhbFNpZ24gPSB0b3RhbCA8IDAgPyAnLScgOiAnJztcbiAgICAgICAgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgICAgICBkYXlzU2lnbiA9IHNpZ24odGhpcy5fZGF5cykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG4gICAgICAgIGhtc1NpZ24gPSBzaWduKHRoaXMuX21pbGxpc2Vjb25kcykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRvdGFsU2lnbiArXG4gICAgICAgICAgICAnUCcgK1xuICAgICAgICAgICAgKHllYXJzID8geW1TaWduICsgeWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAgICAgKG1vbnRocyA/IHltU2lnbiArIG1vbnRocyArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAoZGF5cyA/IGRheXNTaWduICsgZGF5cyArICdEJyA6ICcnKSArXG4gICAgICAgICAgICAoaG91cnMgfHwgbWludXRlcyB8fCBzZWNvbmRzID8gJ1QnIDogJycpICtcbiAgICAgICAgICAgIChob3VycyA/IGhtc1NpZ24gKyBob3VycyArICdIJyA6ICcnKSArXG4gICAgICAgICAgICAobWludXRlcyA/IGhtc1NpZ24gKyBtaW51dGVzICsgJ00nIDogJycpICtcbiAgICAgICAgICAgIChzZWNvbmRzID8gaG1zU2lnbiArIHMgKyAnUycgOiAnJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvdG8kMiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuICAgIHByb3RvJDIuaXNWYWxpZCA9IGlzVmFsaWQkMTtcbiAgICBwcm90byQyLmFicyA9IGFicztcbiAgICBwcm90byQyLmFkZCA9IGFkZCQxO1xuICAgIHByb3RvJDIuc3VidHJhY3QgPSBzdWJ0cmFjdCQxO1xuICAgIHByb3RvJDIuYXMgPSBhcztcbiAgICBwcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG4gICAgcHJvdG8kMi5hc1NlY29uZHMgPSBhc1NlY29uZHM7XG4gICAgcHJvdG8kMi5hc01pbnV0ZXMgPSBhc01pbnV0ZXM7XG4gICAgcHJvdG8kMi5hc0hvdXJzID0gYXNIb3VycztcbiAgICBwcm90byQyLmFzRGF5cyA9IGFzRGF5cztcbiAgICBwcm90byQyLmFzV2Vla3MgPSBhc1dlZWtzO1xuICAgIHByb3RvJDIuYXNNb250aHMgPSBhc01vbnRocztcbiAgICBwcm90byQyLmFzUXVhcnRlcnMgPSBhc1F1YXJ0ZXJzO1xuICAgIHByb3RvJDIuYXNZZWFycyA9IGFzWWVhcnM7XG4gICAgcHJvdG8kMi52YWx1ZU9mID0gdmFsdWVPZiQxO1xuICAgIHByb3RvJDIuX2J1YmJsZSA9IGJ1YmJsZTtcbiAgICBwcm90byQyLmNsb25lID0gY2xvbmUkMTtcbiAgICBwcm90byQyLmdldCA9IGdldCQyO1xuICAgIHByb3RvJDIubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzO1xuICAgIHByb3RvJDIuc2Vjb25kcyA9IHNlY29uZHM7XG4gICAgcHJvdG8kMi5taW51dGVzID0gbWludXRlcztcbiAgICBwcm90byQyLmhvdXJzID0gaG91cnM7XG4gICAgcHJvdG8kMi5kYXlzID0gZGF5cztcbiAgICBwcm90byQyLndlZWtzID0gd2Vla3M7XG4gICAgcHJvdG8kMi5tb250aHMgPSBtb250aHM7XG4gICAgcHJvdG8kMi55ZWFycyA9IHllYXJzO1xuICAgIHByb3RvJDIuaHVtYW5pemUgPSBodW1hbml6ZTtcbiAgICBwcm90byQyLnRvSVNPU3RyaW5nID0gdG9JU09TdHJpbmckMTtcbiAgICBwcm90byQyLnRvU3RyaW5nID0gdG9JU09TdHJpbmckMTtcbiAgICBwcm90byQyLnRvSlNPTiA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi5sb2NhbGUgPSBsb2NhbGU7XG4gICAgcHJvdG8kMi5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcblxuICAgIHByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoXG4gICAgICAgICd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsXG4gICAgICAgIHRvSVNPU3RyaW5nJDFcbiAgICApO1xuICAgIHByb3RvJDIubGFuZyA9IGxhbmc7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3gnLCAwLCAwLCAndmFsdWVPZicpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG4gICAgfSk7XG5cbiAgICAvLyEgbW9tZW50LmpzXG5cbiAgICBob29rcy52ZXJzaW9uID0gJzIuMjkuNCc7XG5cbiAgICBzZXRIb29rQ2FsbGJhY2soY3JlYXRlTG9jYWwpO1xuXG4gICAgaG9va3MuZm4gPSBwcm90bztcbiAgICBob29rcy5taW4gPSBtaW47XG4gICAgaG9va3MubWF4ID0gbWF4O1xuICAgIGhvb2tzLm5vdyA9IG5vdztcbiAgICBob29rcy51dGMgPSBjcmVhdGVVVEM7XG4gICAgaG9va3MudW5peCA9IGNyZWF0ZVVuaXg7XG4gICAgaG9va3MubW9udGhzID0gbGlzdE1vbnRocztcbiAgICBob29rcy5pc0RhdGUgPSBpc0RhdGU7XG4gICAgaG9va3MubG9jYWxlID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xuICAgIGhvb2tzLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkO1xuICAgIGhvb2tzLmR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb247XG4gICAgaG9va3MuaXNNb21lbnQgPSBpc01vbWVudDtcbiAgICBob29rcy53ZWVrZGF5cyA9IGxpc3RXZWVrZGF5cztcbiAgICBob29rcy5wYXJzZVpvbmUgPSBjcmVhdGVJblpvbmU7XG4gICAgaG9va3MubG9jYWxlRGF0YSA9IGdldExvY2FsZTtcbiAgICBob29rcy5pc0R1cmF0aW9uID0gaXNEdXJhdGlvbjtcbiAgICBob29rcy5tb250aHNTaG9ydCA9IGxpc3RNb250aHNTaG9ydDtcbiAgICBob29rcy53ZWVrZGF5c01pbiA9IGxpc3RXZWVrZGF5c01pbjtcbiAgICBob29rcy5kZWZpbmVMb2NhbGUgPSBkZWZpbmVMb2NhbGU7XG4gICAgaG9va3MudXBkYXRlTG9jYWxlID0gdXBkYXRlTG9jYWxlO1xuICAgIGhvb2tzLmxvY2FsZXMgPSBsaXN0TG9jYWxlcztcbiAgICBob29rcy53ZWVrZGF5c1Nob3J0ID0gbGlzdFdlZWtkYXlzU2hvcnQ7XG4gICAgaG9va3Mubm9ybWFsaXplVW5pdHMgPSBub3JtYWxpemVVbml0cztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVSb3VuZGluZyA9IGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nO1xuICAgIGhvb2tzLnJlbGF0aXZlVGltZVRocmVzaG9sZCA9IGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZDtcbiAgICBob29rcy5jYWxlbmRhckZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0O1xuICAgIGhvb2tzLnByb3RvdHlwZSA9IHByb3RvO1xuXG4gICAgLy8gY3VycmVudGx5IEhUTUw1IGlucHV0IHR5cGUgb25seSBzdXBwb3J0cyAyNC1ob3VyIGZvcm1hdHNcbiAgICBob29rcy5IVE1MNV9GTVQgPSB7XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMOiAnWVlZWS1NTS1ERFRISDptbScsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiAvPlxuICAgICAgICBEQVRFVElNRV9MT0NBTF9TRUNPTkRTOiAnWVlZWS1NTS1ERFRISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICAgICAgREFURTogJ1lZWVktTU0tREQnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICBUSU1FOiAnSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiAvPlxuICAgICAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIxXCIgLz5cbiAgICAgICAgVElNRV9NUzogJ0hIOm1tOnNzLlNTUycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgICAgIFdFRUs6ICdHR0dHLVtXXVdXJywgLy8gPGlucHV0IHR5cGU9XCJ3ZWVrXCIgLz5cbiAgICAgICAgTU9OVEg6ICdZWVlZLU1NJywgLy8gPGlucHV0IHR5cGU9XCJtb250aFwiIC8+XG4gICAgfTtcblxuICAgIHJldHVybiBob29rcztcblxufSkpKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0c1wiXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxuXG5VSS5yZW5kZXJQYWdlKCk7IiwidmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW3tcbiAgICAgICAgbmFtZTogXCJXb3JrXCIsIFxuICAgICAgICB0YXNrQXJyYXk6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEbyBXb3JrXCIsIFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdvdHRhIGdldCB0aGF0IG1vbmV5XCIsIFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IG1vbWVudCgpLmZvcm1hdChcIllZWVktTS1EXCIpLCBcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsIFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgY29tcGxldGVkT246IG1vbWVudChcIjMwMDAtMTItMjVcIilcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRlYW0gTWVldGluZ1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJpY2sgd2lsbCBnaXZlIGEgbmljZSBsaXR0bGUgcHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogbW9tZW50KFwiMjAyMy0wNC0xNVwiKS5mb3JtYXQoXCJZWVlZLU0tRFwiKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIiwgXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZE9uOiBtb21lbnQoXCIzMDAwLTEyLTI1XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNocmlzdG1hcyBQYXJ0eVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNocmlzdG1hcyB0aGVtZWQgYXR0aXJlIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogbW9tZW50KFwiMjAyMy0xMi0yM1wiKS5mb3JtYXQoXCJZWVlZLU0tRFwiKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtaWRcIiwgXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZE9uOiBtb21lbnQoXCIzMDAwLTEyLTI1XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1ha2UgVG8tRG8gTGlzdCBUb29sXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmVhbGx5IG5lZWQgdGhpcyB0byBpbmNyZWFzZSBwcm9kdWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBtb21lbnQoXCIyMDIzLTAzLTI5XCIpLmZvcm1hdChcIllZWVktTS1EXCIpLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hlc3RcIiwgXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZE9uOiBtb21lbnQoXCIzMDAwLTEyLTI1XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNsZWVwXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWlpaenp6elwiLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IG1vbWVudCgpLmFkZCgxLCBcImRheXNcIikuZm9ybWF0KFwiWVlZWS1NLURcIiksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaGVzdFwiLCBcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkT246IG1vbWVudChcIjMwMDAtMTItMjVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJTY2hvb2xcIixcbiAgICAgICAgdGFza0FycmF5OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRG8gSG9tZXdvcmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJnZXQgeW91IHNtYXJ0IHVwXCIsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NLURcIiksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93IGFmXCIsIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRPbjogbW9tZW50KFwiMzAwMC0xMi0yNVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJCYXNlYmFsbCBQcmFjdGljZVwiLCBkZXNjcmlwdGlvbjogXCJoaXR0aW4nIGJvbWJzXCIsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NLURcIiksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZE9uOiBtb21lbnQoXCIzMDAwLTEyLTI1XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG4gICAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgdGFza0FycmF5ID0gW3t0aXRsZTogXCJHZXQgU3RhcnRlZCFcIiwgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZ29lcyBoZXJlIVwiLCBkdWVEYXRlOiBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU0tRFwiKSwgcHJpb3JpdHk6IFwiaGlnaFwiLCBjb21wbGV0ZTogZmFsc2UsIGNvbXBsZXRlZE9uOiBtb21lbnQoXCIzMDAwLTEyLTI1XCIpfV07XG4gICAgICAgIHJldHVybiB7IG5hbWUsIHRhc2tBcnJheSB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgIGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0LnRhc2tBcnJheVxuICAgICAgICBsZXQgdGFza1RvRGVsZXRlO1xuICAgICAgICBmb3IgKGxldCB0YXNrSW5kZXggaW4gdGFza0FycmF5KSB7XG4gICAgICAgICAgICBpZiAodGFza0FycmF5W3Rhc2tJbmRleF0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXNrVG9EZWxldGUgPSB0YXNrSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza1RvRGVsZXRlLCAxKVxuICAgIH1cblxuICAgIHJldHVybiB7IHByb2plY3RGYWN0b3J5LCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0QXJyYXksIGRlbGV0ZVRhc2sgfVxufSkoKTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdHNcIlxudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5leHBvcnQgY29uc3QgVGFzayA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgY29tcGxldGVkT24pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUsIGNvbXBsZXRlZE9uIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tQcmlvLCB0YXNrRGF0ZSwgcHJvamVjdCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRGF0ZSwgdGFza1ByaW8sIGZhbHNlLCBtb21lbnQoXCIzMDAwLTEyLTI1XCIpKTtcbiAgICAgICAgcHJvamVjdC50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrVGl0bGUodGFzaywgbmV3VGl0bGUpIHtcbiAgICAgICAgdGFzay50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrRGVzY3JpcHRpb24odGFzaywgbmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrRHVlRGF0ZSh0YXNrLCBuZXdEdWVEYXRlKSB7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tQcmlvcml0eSh0YXNrLCBuZXdQcmlvcml0eSkge1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlKHRhc2spIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlO1xuICAgIH1cbiAgICByZXR1cm4geyB0YXNrRmFjdG9yeSwgY3JlYXRlVGFzaywgdXBkYXRlQ29tcGxldGUgfVxufSkoKTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL1Byb2plY3RzJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzaydcbnZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuZXhwb3J0IGNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBsZXQgZGlzcGxheWVkUHJvamVjdCA9IFByb2plY3QucHJvamVjdEFycmF5WzBdO1xuICAgIGxldCBzaWRlYmFyVG9nZ2xlID0gZmFsc2U7XG4gICAgbGV0IHNpZGViYXJUYXNrRGlzcGxheWVkID0ge307XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgbGV0IHRvZGF5RmlsdGVyID0gZmFsc2U7XG4gICAgbGV0IHdlZWtGaWx0ZXIgPSBmYWxzZTtcbiAgICBsZXQgbW9udGhGaWx0ZXIgPSBmYWxzZTtcblxuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc2NyZWVuLXdpZHRoJywgd2luZG93LmlubmVyV2lkdGggKyBcInB4XCIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc2NyZWVuLXdpZHRoJywgd2luZG93LmlubmVyV2lkdGggKyBcInB4XCIpO1xuICAgIH0pXG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxzKCkge1xuICAgICAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5pZCA9IFwibW9kYWwtY29udGFpbmVyXCI7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbW9kYWxcIiBpZD1cInByb2plY3QtbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXgtYnV0dG9uXCIgaWQ9XCJwcm9qZWN0LXgtYnV0dG9uXCI+JnRpbWVzOzwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjcmVhdGUtcHJvamVjdC1mb3JtXCIgaWQ9XCJjcmVhdGUtcHJvamVjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5OZXcgUHJvamVjdDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5Qcm9qZWN0IE5hbWU8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj4gOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LW5hbWVcIiBjbGFzcz1cInByb2plY3QtaW5wdXRcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCIgY2xhc3M9XCJjcmVhdGUtcHJvamVjdC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1tb2RhbFwiIGlkPVwidGFzay1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2steC1idXR0b25cIiBpZD1cInRhc2steC1idXR0b25cIj4mdGltZXM7PC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNyZWF0ZS10YXNrLWZvcm1cIiBpZD1cImNyZWF0ZS10YXNrLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwidGFzay1sZWdlbmRcIj5OZXcgVGFzazwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW1vZGFsLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXRpdGxlXCI+VGl0bGU8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj4gOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRhc2staW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFzay10aXRsZVwiIG5hbWU9XCJ0YXNrLXRpdGxlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbW9kYWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIGNvbHM9XCI1MFwiIGNsYXNzPVwidGFzay1pbnB1dC10ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0YXJlYVwiIGlkPVwidGFzay1kZXNjXCIgbmFtZT1cInRhc2stZGVzY1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbW9kYWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb1wiPlByaW9yaXR5PHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+IDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0YXNrLWlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRhc2stcHJpb1wiIG5hbWU9XCJ0YXNrLXByaW9cIiB2YWx1ZT1cIkxvd1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW1vZGFsLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRhdGVcIj5EZWFkbGluZTxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPiA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIiBuYW1lPVwidGFzay1kYXRlXCIgdmFsdWU9XCIke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIil9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLXRhc2stYnV0dG9uXCIgY2xhc3M9XCJjcmVhdGUtdGFzay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3BcIiBpZD1cIm1vZGFsLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIGEgY2xpY2tcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1tb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiRW50ZXJcIiBrZXkgb24gdGhlIGtleWJvYXJkXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgZGVmYXVsdCBhY3Rpb24sIGlmIG5lZWRlZFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFzay1idXR0b25cIikuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsKS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tkcm9wXCIpLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImJsdXJcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsKS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tkcm9wXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIilcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdC1mb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2stZm9ybVwiKS5yZXNldCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNpZGViYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stc2lkZWJhci12aXNpYmxlXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgIHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIik7XG4gICAgICAgIHRhc2tJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNvbXBsZXRlXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb21wbGV0ZS1zaG9ydFwiKVxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGUtbG9uZ1wiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWl0ZW0tc2hvcnRcIilcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tbG9uZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuaWQgPSBcImhlYWRlci1jb250YWluZXJcIjtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyLXRleHRcIj5Uby1EbyBMaXN0PC9oMT5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1haW5Db250YWluZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWJhclwiIGNsYXNzPVwicHJvamVjdHMtYmFyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzaWRlYmFyLWl0ZW1cIj5Qcm9qZWN0czwvcD5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYWRkLXByb2plY3QtYnV0dG9uXCIgaWQ9XCJhZGQtcHJvamVjdC1idXR0b25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCIgaWQ9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRhc2stY29udGFpbmVyXCIgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UYXNrczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIiBpZD1cImFkZC10YXNrLWJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImR1ZSBcIiBpZD1cImR1ZS10b2RheVwiPlxuICAgICAgICAgICAgICAgICAgICBUb2RheVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZHVlXCIgaWQ9XCJkdWUtd2Vla1wiPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIFdlZWtcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImR1ZVwiIGlkPVwiZHVlLW1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidGFzay1saXN0XCIgY2xhc3M9XCJ0YXNrLWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0TW9kYWwpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2tNb2RhbClcblxuICAgICAgICBsZXQgZHVlVG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLXRvZGF5Jyk7XG4gICAgICAgIGR1ZVRvZGF5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RheUZpbHRlclRvZ2dsZSgpO1xuICAgICAgICAgICAgcmVuZGVyVG9kYXkoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5RmlsdGVyKVxuICAgICAgICB9XG4gICAgICAgIGxldCBkdWVXZWVrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS13ZWVrJyk7XG4gICAgICAgIGR1ZVdlZWtCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHdlZWtGaWx0ZXJUb2dnbGUoKTtcbiAgICAgICAgICAgIHJlbmRlcldlZWsoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZHVlTW9udGhCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLW1vbnRoJyk7XG4gICAgICAgIGR1ZU1vbnRoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb250aEZpbHRlclRvZ2dsZSgpXG4gICAgICAgICAgICByZW5kZXJNb250aCgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgaW5pdFRhc2tzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgICAgICBsZXQgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXItY29udGFpbmVyXCI7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLXRleHRcIj7Cqe+4jiBLZW5ueSAyMDIzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhlbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGhlbWUtc2VsZWN0b3JcIj5Db2xvciBUaGVtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwidGhlbWUtc2VsZWN0b3JcIiBjbGFzcz1cInRoZW1lLXNlbGVjdG9yXCIgbmFtZT1cInRoZW1lLXNlbGVjdG9yXCIgdmFsdWU9XCIjZmY3MDcwXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoYW5nZVRoZW1lKVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUaGVtZSgpIHtcbiAgICAgICAgbGV0IGNvbG9yVmFsdWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKS52YWx1ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGV4VG9IU0woSCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBoZXggdG8gUkdCIGZpcnN0XG4gICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcbiAgICAgICAgICAgIGlmIChILmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgIHIgPSBcIjB4XCIgKyBIWzFdICsgSFsxXTtcbiAgICAgICAgICAgICAgZyA9IFwiMHhcIiArIEhbMl0gKyBIWzJdO1xuICAgICAgICAgICAgICBiID0gXCIweFwiICsgSFszXSArIEhbM107XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEgubGVuZ3RoID09IDcpIHtcbiAgICAgICAgICAgICAgciA9IFwiMHhcIiArIEhbMV0gKyBIWzJdO1xuICAgICAgICAgICAgICBnID0gXCIweFwiICsgSFszXSArIEhbNF07XG4gICAgICAgICAgICAgIGIgPSBcIjB4XCIgKyBIWzVdICsgSFs2XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZW4gdG8gSFNMXG4gICAgICAgICAgICByIC89IDI1NTtcbiAgICAgICAgICAgIGcgLz0gMjU1O1xuICAgICAgICAgICAgYiAvPSAyNTU7XG4gICAgICAgICAgICBsZXQgY21pbiA9IE1hdGgubWluKHIsZyxiKSxcbiAgICAgICAgICAgICAgICBjbWF4ID0gTWF0aC5tYXgocixnLGIpLFxuICAgICAgICAgICAgICAgIGRlbHRhID0gY21heCAtIGNtaW4sXG4gICAgICAgICAgICAgICAgaCA9IDAsXG4gICAgICAgICAgICAgICAgcyA9IDAsXG4gICAgICAgICAgICAgICAgbCA9IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVsdGEgPT0gMClcbiAgICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICBlbHNlIGlmIChjbWF4ID09IHIpXG4gICAgICAgICAgICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgICAgICAgICBlbHNlIGlmIChjbWF4ID09IGcpXG4gICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGggPSBNYXRoLnJvdW5kKGggKiA2MCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaCA8IDApXG4gICAgICAgICAgICAgIGggKz0gMzYwO1xuICAgICAgICAgIFxuICAgICAgICAgICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgICAgICAgICAgcyA9IGRlbHRhID09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xuICAgICAgICAgICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XG5cbiAgICAgICAgICAgIGxldCBsaWdodFNoYWRlID0gXCJoc2woXCIgKyBoICsgXCIsXCIgKyBzICsgXCIlLFwiICsgKGwgKyAxNCkgKyBcIiUpXCI7XG4gICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGlnaHRTaGFkZVxuICAgICAgICAgIH1cblxuICAgICAgICBsZXQgaHNsTGlnaHRWYWx1ZSA9IGhleFRvSFNMKGNvbG9yVmFsdWUpXG5cbiAgICAgICAgbGV0IHRleHRDb2xvckNoZWNrID0gaHNsTGlnaHRWYWx1ZS5tYXRjaCgvKD88PSwpW14sXSsoPz0lXFwpKS8pO1xuXG4gICAgICAgIGlmICh0ZXh0Q29sb3JDaGVjayA+ICg2NCkgKSB7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRleHQnLCBcImJsYWNrXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10ZXh0JywgXCJ3aGl0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tYWluJywgY29sb3JWYWx1ZSk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc3ViJywgaHNsTGlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuaWQgPSBcInByb2plY3RcIiArIGk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKVxuICAgICAgICAgICAgcHJvamVjdERpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKHByb2plY3RBcnJheVtpXSkudGFza0FycmF5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgaW5kaXZpZHVhbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBpbmRpdmlkdWFsUHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICAgICAgICAgIGluZGl2aWR1YWxQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIilcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFByb2plY3QpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFByb2plY3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0TnVtYmVyIGluIFByb2plY3QucHJvamVjdEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBwcm9qZWN0TnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGlmIChQcm9qZWN0LnByb2plY3RBcnJheVtwcm9qZWN0TnVtYmVyXS50YXNrQXJyYXkgPT09IGRpc3BsYXllZFByb2plY3QudGFza0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiICsgcHJvamVjdE51bWJlcikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBwcm9qZWN0TnVtYmVyKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdFRhc2tzKCkge1xuICAgICAgICBpZiAoUHJvamVjdC5wcm9qZWN0QXJyYXlbMF0pIHtcbiAgICAgICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoUHJvamVjdC5wcm9qZWN0QXJyYXlbMF0udGFza0FycmF5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrczIoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrQXJyYXkpIHtcbiAgICAgICAgKHRhc2tBcnJheSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChiLmNvbXBsZXRlZE9uKS5kaWZmKGEuY29tcGxldGVkT24pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1Db250YWluZXIuaWQgPSBcIml0ZW0tY29udGFpbmVyXCI7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhc2tMaXN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICBsZXQgdGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrU2lkZWJhci5pZCA9IFwidGFzay1zaWRlYmFyXCI7XG4gICAgICAgIHRhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXJcIiwgXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpO1xuICAgICAgICB0YXNrTGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1NpZGViYXIpO1xuXG4gICAgICAgIGlmICghdGFza0FycmF5WzBdKSB7XG4gICAgICAgICAgICBsZXQgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbm9UYXNrTWVzc2FnZS5pbm5lclRleHQgPSBcIk5vIHRhc2tzIHlldCFcIjtcbiAgICAgICAgICAgIG5vVGFza01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm5vdGFzay1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrQXJyYXkpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiLCB0YXNrSXRlbS5jb21wbGV0ZSA/IFwidGFzay1jb21wbGV0ZS1sb25nXCIgOiBcInRhc2staXRlbS1sb25nXCIpXG4gICAgICAgICAgICB0YXNrSXRlbS5pZCA9IFwidGFzay1pdGVtXCJcbiAgICAgICAgICAgIHRhc2tJdGVtLm5hbWUgPSBcInRhc2staXRlbVwiXG4gICAgICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrSXRlbS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb21wbGV0ZS1sb25nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZS1zaG9ydFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1pdGVtLWxvbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tc2hvcnRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFza0FycmF5W2ldLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGVcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm8tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdGFza0luZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGVcIiBpZD1cInRhc2stdGl0bGVcIj48cD4ke3Rhc2tBcnJheVtpXS50aXRsZX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXNjXCIgaWQ9XCJ0YXNrLWRlc2NcIj48cD4ke3Rhc2tBcnJheVtpXS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcmlvXCIgaWQ9XCJ0YXNrLXByaW9cIj48cD4ke3Rhc2tBcnJheVtpXS5wcmlvcml0eX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIj48cD4ke3Rhc2tBcnJheVtpXS5kdWVEYXRlfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIHRhc2tJbmZvLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgaWYgKChzaWRlYmFyVG9nZ2xlID09PSB0cnVlKSAmJiAodGFza0FycmF5W2ldLnRpdGxlICE9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtdGl0bGVcIikuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTaWRlYmFySW5mbyh0YXNrQXJyYXlbaV0sIHRhc2tTaWRlYmFyLCBlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYXNrU2lkZWJhcih0YXNrQXJyYXlbaV0sIHRhc2tTaWRlYmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjaGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjaGVja0Rpdi5pZCA9IFwidGFzay1jaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKVxuXG4gICAgICAgICAgICBsZXQgY29tcGxldGVDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgY29tcGxldGVDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtaW5wdXRcIilcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2suaWQ9XCJjaGVja2JveFwiICsgaVxuICAgICAgICAgICAgY29tcGxldGVDaGVjay50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLmNoZWNrZWQgPSB0YXNrQXJyYXlbaV0uY29tcGxldGU7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tBcnJheVtpXS5jb21wbGV0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2tEaXYub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNoZWNrLmNoZWNrZWQgPSAhdGFza0FycmF5W2ldLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHRhc2tBcnJheVtpXS5jb21wbGV0ZSA9ICF0YXNrQXJyYXlbaV0uY29tcGxldGVcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrQXJyYXlbaV0udGl0bGUgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZGViYXJJbmZvKHRhc2tBcnJheVtpXSwgdGFza1NpZGViYXIsIGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tBcnJheVtpXS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrQXJyYXlbaV0uY29tcGxldGVkT24gPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgVGFzay51cGRhdGVDb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIgKyBpKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICBUYXNrLnVwZGF0ZUNvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3hcIiArIGkpKVxuICAgICAgICAgICAgICAgICAgICB0YXNrQXJyYXlbaV0uY29tcGxldGVkT24gPSBtb21lbnQoXCIzMDAwLTEyLTI1XCIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1jbGlja1wiKVxuICAgICAgICAgICAgICAgIGlmICh0YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlLWNsaWNrXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0LnRhc2tBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjaGVja0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUNoZWNrKTtcblxuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tEaXYpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFza1NpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stc2lkZWJhci1oaWRkZW5cIilcbiAgICAgICAgICAgIHRhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXItdmlzaWJsZVwiKVxuICAgICAgICAgICAgc2V0U2lkZWJhckluZm8oc2lkZWJhclRhc2tEaXNwbGF5ZWQsIHRhc2tTaWRlYmFyKVxuICAgICAgICB9O1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgaGlnaGxpZ2h0UHJvamVjdCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b2RheUZpbHRlclRvZ2dsZSgpIHtcbiAgICAgICAgd2Vla0ZpbHRlciA9IGZhbHNlO1xuICAgICAgICBtb250aEZpbHRlciA9IGZhbHNlO1xuICAgICAgICB0b2RheUZpbHRlciA9ICF0b2RheUZpbHRlcjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuICAgICAgICBpZiAodG9kYXlGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCB0b2RheVRhc2tBcnJheSA9IFtdO1xuICAgICAgICAgICAgbGV0IHRhc2tBcnJheSA9IGRpc3BsYXllZFByb2plY3QudGFza0FycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrQXJyYXlbaV0uZHVlRGF0ZSA9PT0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NLUREXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5VGFza0FycmF5LnB1c2godGFza0FycmF5W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRvZGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJkdWUtc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyh0b2RheVRhc2tBcnJheSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkdWUtc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0LnRhc2tBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrRmlsdGVyVG9nZ2xlKCkge1xuICAgICAgICB0b2RheUZpbHRlciA9IGZhbHNlO1xuICAgICAgICBtb250aEZpbHRlciA9IGZhbHNlO1xuICAgICAgICB3ZWVrRmlsdGVyID0gIXdlZWtGaWx0ZXI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRvZGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkdWUtc2VsZWN0ZWRcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLW1vbnRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkdWUtc2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyV2VlaygpIHtcbiAgICAgICAgaWYgKHdlZWtGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCB3ZWVrVGFza0FycmF5ID0gW107XG4gICAgICAgICAgICBsZXQgdGFza0FycmF5ID0gZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtb21lbnQoKS5pc0JlZm9yZSh0YXNrQXJyYXlbaV0uZHVlRGF0ZSkgfHwgbW9tZW50KCkuaXNTYW1lKHRhc2tBcnJheVtpXS5kdWVEYXRlLCBcImRheVwiKSkgJiYgbW9tZW50KCkuZGlmZih0YXNrQXJyYXlbaV0uZHVlRGF0ZSwgXCJkYXlzXCIpID4gLTcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Vla1Rhc2tBcnJheS5wdXNoKHRhc2tBcnJheVtpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJkdWUtc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyh3ZWVrVGFza0FycmF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhGaWx0ZXJUb2dnbGUoKSB7XG4gICAgICAgIHRvZGF5RmlsdGVyID0gZmFsc2U7XG4gICAgICAgIHdlZWtGaWx0ZXIgPSBmYWxzZTtcbiAgICAgICAgbW9udGhGaWx0ZXIgPSAhbW9udGhGaWx0ZXJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtdG9kYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImR1ZS1zZWxlY3RlZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtd2Vla1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vbnRoKCkge1xuICAgICAgICBpZiAobW9udGhGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBtb250aFRhc2tBcnJheSA9IFtdO1xuICAgICAgICAgICAgbGV0IHRhc2tBcnJheSA9IGRpc3BsYXllZFByb2plY3QudGFza0FycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgobW9tZW50KCkuaXNTYW1lKHRhc2tBcnJheVtpXS5kdWVEYXRlLCBcIm1vbnRoXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICBtb250aFRhc2tBcnJheS5wdXNoKHRhc2tBcnJheVtpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1tb250aFwiKS5jbGFzc0xpc3QuYWRkKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MobW9udGhUYXNrQXJyYXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1tb250aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2lkZWJhckhUTUwodGFzaywgdGFza1N0YXR1cykge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiBpZD1cInNpZGViYXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiIGNsYXNzPVwic2lkZS10aXRsZVwiIGlkPVwic2lkZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCI2XCIgY2xhc3M9XCJzaWRlLWRlc2NyaXB0aW9uXCIgaWQ9XCJzaWRlLWRlc2NyaXB0aW9uXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2lkZS1wcmlvcml0eVwiIGlkPVwic2lkZS1wcmlvcml0eVwiPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNpZGUtZHVlLWRhdGVcIj5EZWFkbGluZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInNpZGUtZHVlLWRhdGVcIiBpZD1cInNpZGUtZHVlLWRhdGVcIiBuYW1lPVwic2lkZS1kdWUtZGF0ZVwiIHZhbHVlPVwiJHttb21lbnQodGFzay5kdWVEYXRlKS5mb3JtYXQoXCJ5eXl5LU1NLUREXCIpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZGUtc3RhdHVzXCIgaWQ9XCJzaWRlLXN0YXR1c1wiPlN0YXR1czogJHt0YXNrU3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgaWQ9XCJkZWxldGUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZWxldGUtdGV4dFwiPkRlbGV0ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXRyYXNoLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXIteC1idXR0b25cIiBpZD1cInNpZGViYXIteC1idXR0b25cIj4mdGltZXM7PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNpZGViYXJJbmZvKHRhc2ssIHNpZGViYXJFbGVtZW50LCBldmVudFRhcmdldCkge1xuICAgICAgICBsZXQgdGFza1N0YXR1cyA9IFwiXCI7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1N0YXR1cyA9IFwiSW5jb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZXZlbnRUYXJnZXQgIT09IHVuZGVmaW5lZCAmJiB0YXNrICE9PSBzaWRlYmFyVGFza0Rpc3BsYXllZCkge1xuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInF1aWNrLWJsdXJcIik7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUw9IHNpZGViYXJIVE1MKHRhc2ssIHRhc2tTdGF0dXMpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInF1aWNrLWJsdXJcIik7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUw9IHNpZGViYXJIVE1MKHRhc2ssIHRhc2tTdGF0dXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB4QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXgtYnV0dG9uXCIpO1xuICAgICAgICB4QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZVNpZGViYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNpZGViYXJUYXNrRGlzcGxheWVkID0gdGFzaztcblxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnV0dG9uXCIpKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgUHJvamVjdC5kZWxldGVUYXNrKGRpc3BsYXllZFByb2plY3QsIHNpZGViYXJUYXNrRGlzcGxheWVkKTtcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXNpZGViYXItdmlzaWJsZVwiKVxuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stc2lkZWJhci1oaWRkZW5cIilcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGRpc3BsYXllZFByb2plY3QudGFza0FycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKSkub25pbnB1dCA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gc2lkZWJhclRhc2tEaXNwbGF5ZWQudGl0bGU7XG4gICAgICAgICAgICBsZXQgbmV3VGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRpZkluZGV4ID0gKGZpbmRGaXJzdERpZmZQb3Mob3JpZ2luYWxUZXh0LCBuZXdUZXh0KSArIDEpXG5cbiAgICAgICAgICAgIHNpZGViYXJUYXNrRGlzcGxheWVkLnRpdGxlID0gbmV3VGV4dDtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGRpc3BsYXllZFByb2plY3QudGFza0FycmF5KVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLmZvY3VzKClcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKS5zZXRTZWxlY3Rpb25SYW5nZShkaWZJbmRleCwgZGlmSW5kZXgsIFwiZm9yd2FyZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS10aXRsZVwiKS52YWx1ZSA9IG5ld1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1kZXNjcmlwdGlvblwiKSkub25pbnB1dCA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gc2lkZWJhclRhc2tEaXNwbGF5ZWQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgbmV3VGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRpZkluZGV4ID0gKGZpbmRGaXJzdERpZmZQb3Mob3JpZ2luYWxUZXh0LCBuZXdUZXh0KSArIDEpXG5cbiAgICAgICAgICAgIHNpZGViYXJUYXNrRGlzcGxheWVkLmRlc2NyaXB0aW9uID0gbmV3VGV4dDtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGRpc3BsYXllZFByb2plY3QudGFza0FycmF5KVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWRlc2NyaXB0aW9uXCIpLmZvY3VzKClcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1kZXNjcmlwdGlvblwiKS5zZXRTZWxlY3Rpb25SYW5nZShkaWZJbmRleCwgZGlmSW5kZXgsIFwiZm9yd2FyZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IG5ld1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1kdWUtZGF0ZVwiKSkub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyVGFza0Rpc3BsYXllZC5kdWVEYXRlID0gbW9tZW50KChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtZHVlLWRhdGVcIikpLnZhbHVlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaWRlYmFyVGFza0Rpc3BsYXllZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhc2tTaWRlYmFyKHRhc2ssIHNpZGViYXJFbGVtZW50KSB7XG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZVNpZGViYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YXNrU3RhdHVzID0gXCJcIjtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMgPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzID0gXCJJbmNvbXBsZXRlXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2lkZWJhckVsZW1lbnQuaW5uZXJIVE1MPSBzaWRlYmFySFRNTCh0YXNrLCB0YXNrU3RhdHVzKTtcblxuICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1zaWRlYmFyLXZpc2libGVcIilcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSAhc2lkZWJhclRvZ2dsZTtcbiAgICAgICAgICAgIHNpZGViYXJUYXNrRGlzcGxheWVkID0gdGFzaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXNpZGViYXItdmlzaWJsZVwiKVxuICAgICAgICAgICAgc2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stc2lkZWJhci1oaWRkZW5cIilcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUgPSAhc2lkZWJhclRvZ2dsZTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXgtYnV0dG9uXCIpO1xuXG4gICAgICAgIHhCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlU2lkZWJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ1dHRvblwiKSkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIFByb2plY3QuZGVsZXRlVGFzayhkaXNwbGF5ZWRQcm9qZWN0LCBzaWRlYmFyVGFza0Rpc3BsYXllZCk7XG4gICAgICAgICAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zaWRlYmFyLXZpc2libGVcIilcbiAgICAgICAgICAgIHNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNpZGViYXItaGlkZGVuXCIpXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0LnRhc2tBcnJheSlcbiAgICAgICAgfVxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpKS5vbmlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSBzaWRlYmFyVGFza0Rpc3BsYXllZC50aXRsZTtcbiAgICAgICAgICAgIGxldCBuZXdUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGlmSW5kZXggPSAoZmluZEZpcnN0RGlmZlBvcyhvcmlnaW5hbFRleHQsIG5ld1RleHQpICsgMSlcblxuICAgICAgICAgICAgc2lkZWJhclRhc2tEaXNwbGF5ZWQudGl0bGUgPSBuZXdUZXh0O1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtdGl0bGVcIikuZm9jdXMoKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLnNldFNlbGVjdGlvblJhbmdlKGRpZkluZGV4LCBkaWZJbmRleCwgXCJmb3J3YXJkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLXRpdGxlXCIpLnZhbHVlID0gbmV3VGV4dDtcbiAgICAgICAgfVxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWRlc2NyaXB0aW9uXCIpKS5vbmlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSBzaWRlYmFyVGFza0Rpc3BsYXllZC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBuZXdUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGlmSW5kZXggPSAoZmluZEZpcnN0RGlmZlBvcyhvcmlnaW5hbFRleHQsIG5ld1RleHQpICsgMSlcblxuICAgICAgICAgICAgc2lkZWJhclRhc2tEaXNwbGF5ZWQuZGVzY3JpcHRpb24gPSBuZXdUZXh0O1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtZGVzY3JpcHRpb25cIikuZm9jdXMoKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWRlc2NyaXB0aW9uXCIpLnNldFNlbGVjdGlvblJhbmdlKGRpZkluZGV4LCBkaWZJbmRleCwgXCJmb3J3YXJkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gbmV3VGV4dDtcbiAgICAgICAgfVxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWR1ZS1kYXRlXCIpKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNpZGViYXJUYXNrRGlzcGxheWVkLmR1ZURhdGUgPSBtb21lbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1kdWUtZGF0ZVwiKSkudmFsdWUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhkaXNwbGF5ZWRQcm9qZWN0LnRhc2tBcnJheSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNpZGViYXJUYXNrRGlzcGxheWVkKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZGViYXJUb2dnbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCB0YXNrSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staXRlbVwiKTtcbiAgICAgICAgICAgIHRhc2tJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1jb21wbGV0ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlLXNob3J0XCIpXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInRhc2stY29tcGxldGUtbG9uZ1wiKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbS1zaG9ydFwiKVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWl0ZW0tbG9uZ1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRmlyc3REaWZmUG9zKGEsIGIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBpZiAoYSA9PT0gYikgcmV0dXJuIC0xO1xuICAgICAgICB3aGlsZSAoYVtpXSA9PT0gYltpXSkgaSsrO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RNb2RhbCgpIHtcbiAgICAgICAgbGV0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKS5jbGFzc05hbWU7XG4gICAgICAgIGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYmFja2Ryb3BcIik7XG4gICAgICAgIGxldCB4QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXgtYnV0dG9uXCIpO1xuXG4gICAgICAgIG9wZW5Nb2RhbChwcm9qZWN0TW9kYWwpO1xuXG4gICAgICAgIGJhY2tkcm9wLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKHByb2plY3RNb2RhbCk7XG4gICAgICAgIH1cblxuICAgICAgICB4QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKHByb2plY3RNb2RhbCk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIilbMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdEl0ZW0ocHJvamVjdE1vZGFsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIilbMF0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbShwcm9qZWN0TW9kYWwpIHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWVcbiAgICAgICAgUHJvamVjdC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoUHJvamVjdC5wcm9qZWN0QXJyYXkpO1xuICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0ID0gUHJvamVjdC5wcm9qZWN0QXJyYXlbKFByb2plY3QucHJvamVjdEFycmF5Lmxlbmd0aCAtIDEpXVxuICAgICAgICByZW5kZXJUYXNrcygoUHJvamVjdC5wcm9qZWN0QXJyYXlbKFByb2plY3QucHJvamVjdEFycmF5Lmxlbmd0aCAtIDEpXSkudGFza0FycmF5KVxuICAgICAgICBzaWRlYmFyVG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIGNsb3NlTW9kYWwocHJvamVjdE1vZGFsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTW9kYWwoKSB7XG4gICAgICAgIGxldCB0YXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbW9kYWxcIikuY2xhc3NOYW1lO1xuICAgICAgICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tkcm9wXCIpO1xuICAgICAgICBsZXQgeEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay14LWJ1dHRvblwiKTtcblxuICAgICAgICBvcGVuTW9kYWwodGFza01vZGFsKTtcblxuICAgICAgICBiYWNrZHJvcC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCh0YXNrTW9kYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgeEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCh0YXNrTW9kYWwpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS10YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFzay1mb3JtXCIpWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY1wiKS52YWx1ZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrUHJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbW9tZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlKS5mb3JtYXQoXCJZWVlZL00vRFwiKTtcbiAgICAgICAgICAgICAgICBUYXNrLmNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzYywgdGFza1ByaW8sIHRhc2tEYXRlLCBkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyVG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoZGlzcGxheWVkUHJvamVjdC50YXNrQXJyYXkpO1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwodGFza01vZGFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFzay1mb3JtXCIpWzBdLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICAgICAgcmVuZGVyTW9kYWxzKCk7XG4gICAgICAgIHJlbmRlckhlYWRlcigpO1xuICAgICAgICByZW5kZXJNYWluQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKFByb2plY3QucHJvamVjdEFycmF5KTtcbiAgICAgICAgcmVuZGVyRm9vdGVyKClcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJQYWdlIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=