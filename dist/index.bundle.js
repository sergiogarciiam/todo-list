/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/global.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/global.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-color: #1f1f1f;
  --header-color: #262626;

  --letter-color: #eee;
  --second-letter-color: #999999;
  --mark-color: #444444;
  --shadow-color: #191919;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: var(--background-color);
  color: var(--letter-color);
}

.page-container {
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 15fr;
  grid-template-areas: "header header" "sidebar main";
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/global.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;;EAEvB,oBAAoB;EACpB,8BAA8B;EAC9B,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,yCAAyC;EACzC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,mDAAmD;AACrD;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --background-color: #1f1f1f;\n  --header-color: #262626;\n\n  --letter-color: #eee;\n  --second-letter-color: #999999;\n  --mark-color: #444444;\n  --shadow-color: #191919;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--letter-color);\n}\n\n.page-container {\n  height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  grid-template-rows: 1fr 15fr;\n  grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/header.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/header.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header-container {
  grid-area: header;

  display: flex;
  justify-content: space-between;

  padding: 20px;

  background-color: var(--header-color);
  box-shadow: 2px 2px 5px var(--shadow-color);
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/header.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;;EAEjB,aAAa;EACb,8BAA8B;;EAE9B,aAAa;;EAEb,qCAAqC;EACrC,2CAA2C;EAC3C,UAAU;AACZ","sourcesContent":[".header-container {\n  grid-area: header;\n\n  display: flex;\n  justify-content: space-between;\n\n  padding: 20px;\n\n  background-color: var(--header-color);\n  box-shadow: 2px 2px 5px var(--shadow-color);\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
  grid-area: main;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  margin: 50px 0 0 500px;
}

.add-task-button {
  color: var(--second-letter-color);
  background-color: var(--background-color);
  border: none;
  border-radius: 15px;

  padding: 7px;
  font-size: 1.2rem;

  cursor: pointer;
}

.add-task-button:hover {
  border: 1px solid var(--second-letter-color);
  opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"AAAA;EACE,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;;EAET,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;EACzC,YAAY;EACZ,mBAAmB;;EAEnB,YAAY;EACZ,iBAAiB;;EAEjB,eAAe;AACjB;;AAEA;EACE,4CAA4C;EAC5C,YAAY;AACd","sourcesContent":["main {\n  grid-area: main;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n\n  margin: 50px 0 0 500px;\n}\n\n.add-task-button {\n  color: var(--second-letter-color);\n  background-color: var(--background-color);\n  border: none;\n  border-radius: 15px;\n\n  padding: 7px;\n  font-size: 1.2rem;\n\n  cursor: pointer;\n}\n\n.add-task-button:hover {\n  border: 1px solid var(--second-letter-color);\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/sidebar.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/sidebar.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sidebar-container {
  grid-area: sidebar;

  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 20px;

  background-color: var(--header-color);
  box-shadow: 2px 2px 5px var(--shadow-color);
}

.sidebar-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-buttons-container > button {
  padding: 5px;
  text-align: left;
  font-size: 1.1rem;

  border-radius: 10px;
  border: none;

  color: var(--letter-color);
  background-color: var(--header-color);

  cursor: pointer;
  transition: background-color 300ms;
}

.sidebar-buttons-container > button:hover {
  background-color: var(--mark-color);
}

.quick-access {
  color: var(--second-letter-color);
}

.source-link {
  margin-top: auto;

  color: var(--second-letter-color);
  text-decoration: none;
}

.source-link:hover {
  color: var(--letter-color);
  text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/sidebar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,aAAa;;EAEb,qCAAqC;EACrC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;;EAEjB,mBAAmB;EACnB,YAAY;;EAEZ,0BAA0B;EAC1B,qCAAqC;;EAErC,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;;EAEhB,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B","sourcesContent":[".sidebar-container {\n  grid-area: sidebar;\n\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  padding: 20px;\n\n  background-color: var(--header-color);\n  box-shadow: 2px 2px 5px var(--shadow-color);\n}\n\n.sidebar-buttons-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar-buttons-container > button {\n  padding: 5px;\n  text-align: left;\n  font-size: 1.1rem;\n\n  border-radius: 10px;\n  border: none;\n\n  color: var(--letter-color);\n  background-color: var(--header-color);\n\n  cursor: pointer;\n  transition: background-color 300ms;\n}\n\n.sidebar-buttons-container > button:hover {\n  background-color: var(--mark-color);\n}\n\n.quick-access {\n  color: var(--second-letter-color);\n}\n\n.source-link {\n  margin-top: auto;\n\n  color: var(--second-letter-color);\n  text-decoration: none;\n}\n\n.source-link:hover {\n  color: var(--letter-color);\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/tasks.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/tasks.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* NEW TASK MENU */
.new-task-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  border-radius: 20px;

  background-color: var(--header-color);
}

.new-task-name-container {
  display: flex;
  gap: 20px;
}

.task-edit-button,
.task-delete-button,
.new-task-name-container > button {
  height: 20px;
  width: 20px;
  align-self: center;

  background-color: var(--header-color);
  border: 1px solid var(--letter-color);

  border-radius: 5px;
}

.new-task-name-container > input {
  width: 100%;

  color: var(--letter-color);
  background-color: var(--header-color);
  padding: 10px;

  font-size: 1.2rem;
}

.new-task-features-container {
  display: flex;
  gap: 20px;

  padding-bottom: 20px;
  border-bottom: 1px solid var(--mark-color);
}

.new-task-buttons-container {
  display: flex;
  gap: 20px;
  align-self: flex-end;
}

.new-task-buttons-container > button {
  padding: 10px;

  border: none;
  border-radius: 10px;

  background-color: var(--mark-color);
  color: var(--letter-color);

  cursor: pointer;
  transition: opacity 300ms;
}

.description-area {
  min-height: 100px;
  color: var(--letter-color);
  background-color: var(--header-color);

  font-size: 1.1rem;
  padding: 10px;

  resize: none;
}

.new-task-buttons-container > button:hover {
  opacity: 0.6;
}

/* TASK */
.tasks-container {
  width: 50%;
}

.task-container {
  width: 100%;
  display: flex;
  gap: 20px;

  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
}

.task-checkbox-button {
  height: 20px;
  width: 20px;
  align-self: center;

  border: 1px solid var(--letter-color);
  border-radius: 5px;

  background-color: var(--header-color);
  cursor: pointer;
}

.task-container > p {
  font-size: 1.3rem;
}

.task-edit-button,
.task-delete-button {
  cursor: pointer;
  opacity: 0;
}

.task-edit-button {
  margin-left: auto;
}

.task-container:hover > .task-edit-button,
.task-container:hover > .task-delete-button {
  opacity: 1;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/tasks.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,aAAa;EACb,mBAAmB;;EAEnB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,qCAAqC;EACrC,qCAAqC;;EAErC,kBAAkB;AACpB;;AAEA;EACE,WAAW;;EAEX,0BAA0B;EAC1B,qCAAqC;EACrC,aAAa;;EAEb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,oBAAoB;EACpB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,aAAa;;EAEb,YAAY;EACZ,mBAAmB;;EAEnB,mCAAmC;EACnC,0BAA0B;;EAE1B,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,qCAAqC;;EAErC,iBAAiB;EACjB,aAAa;;EAEb,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,SAAS;AACT;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;;EAET,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,qCAAqC;EACrC,kBAAkB;;EAElB,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ","sourcesContent":["/* NEW TASK MENU */\n.new-task-container {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 20px;\n  border-radius: 20px;\n\n  background-color: var(--header-color);\n}\n\n.new-task-name-container {\n  display: flex;\n  gap: 20px;\n}\n\n.task-edit-button,\n.task-delete-button,\n.new-task-name-container > button {\n  height: 20px;\n  width: 20px;\n  align-self: center;\n\n  background-color: var(--header-color);\n  border: 1px solid var(--letter-color);\n\n  border-radius: 5px;\n}\n\n.new-task-name-container > input {\n  width: 100%;\n\n  color: var(--letter-color);\n  background-color: var(--header-color);\n  padding: 10px;\n\n  font-size: 1.2rem;\n}\n\n.new-task-features-container {\n  display: flex;\n  gap: 20px;\n\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--mark-color);\n}\n\n.new-task-buttons-container {\n  display: flex;\n  gap: 20px;\n  align-self: flex-end;\n}\n\n.new-task-buttons-container > button {\n  padding: 10px;\n\n  border: none;\n  border-radius: 10px;\n\n  background-color: var(--mark-color);\n  color: var(--letter-color);\n\n  cursor: pointer;\n  transition: opacity 300ms;\n}\n\n.description-area {\n  min-height: 100px;\n  color: var(--letter-color);\n  background-color: var(--header-color);\n\n  font-size: 1.1rem;\n  padding: 10px;\n\n  resize: none;\n}\n\n.new-task-buttons-container > button:hover {\n  opacity: 0.6;\n}\n\n/* TASK */\n.tasks-container {\n  width: 50%;\n}\n\n.task-container {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n\n  border-radius: 15px;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.task-checkbox-button {\n  height: 20px;\n  width: 20px;\n  align-self: center;\n\n  border: 1px solid var(--letter-color);\n  border-radius: 5px;\n\n  background-color: var(--header-color);\n  cursor: pointer;\n}\n\n.task-container > p {\n  font-size: 1.3rem;\n}\n\n.task-edit-button,\n.task-delete-button {\n  cursor: pointer;\n  opacity: 0;\n}\n\n.task-edit-button {\n  margin-left: auto;\n}\n\n.task-container:hover > .task-edit-button,\n.task-container:hover > .task-delete-button {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/global.css":
/*!**************************************!*\
  !*** ./src/assets/styles/global.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/header.css":
/*!**************************************!*\
  !*** ./src/assets/styles/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/sidebar.css":
/*!***************************************!*\
  !*** ./src/assets/styles/sidebar.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/tasks.css":
/*!*************************************!*\
  !*** ./src/assets/styles/tasks.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./tasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/tasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/components/addNewTask.js":
/*!**************************************!*\
  !*** ./src/components/addNewTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTaskButton: () => (/* binding */ addNewTaskButton)
/* harmony export */ });
/* harmony import */ var _taskMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMenu */ "./src/components/taskMenu.js");


const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", menuTaskSetUp);

    return addTaskButton;
  };

  function menuTaskSetUp(event) {
    let task = {
      name: "",
    };

    event.target.classList.add("hide");
    event.target.parentNode.appendChild(_taskMenu__WEBPACK_IMPORTED_MODULE_0__.taskMenuComponent.setUp(task));
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerComponent: () => (/* binding */ headerComponent)
/* harmony export */ });
const headerComponent = (() => {
  const setUp = () => {
    const headerContainer = document.createElement("header");
    const sidebarButton = document.createElement("button");
    const profileHolder = document.createElement("div");

    headerContainer.classList.add("header-container");

    sidebarButton.classList.add("sidebar-button");
    sidebarButton.textContent = "s";
    sidebarButton.type = "button";

    profileHolder.classList.add("profile");

    headerContainer.appendChild(sidebarButton);
    headerContainer.appendChild(profileHolder);

    return headerContainer;
  };

  return { setUp };
})();




/***/ }),

/***/ "./src/components/inbox.js":
/*!*********************************!*\
  !*** ./src/components/inbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxComponent: () => (/* binding */ inboxComponent)
/* harmony export */ });
/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNewTask */ "./src/components/addNewTask.js");


const inboxComponent = (() => {
  const setUp = () => {
    const inboxContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");
    const tasksContainer = document.createElement("div");

    inboxContainer.classList.add("inbox-container");

    inboxTitle.classList.add("inbox-title");
    inboxTitle.textContent = "Inbox";

    tasksContainer.classList.add("tasks-container");

    inboxContainer.appendChild(inboxTitle);
    inboxContainer.appendChild(tasksContainer);
    inboxContainer.appendChild(_addNewTask__WEBPACK_IMPORTED_MODULE_0__.addNewTaskButton.setUp());

    return inboxContainer;
  };

  return { setUp };
})();




/***/ }),

/***/ "./src/components/mainDisplayController.js":
/*!*************************************************!*\
  !*** ./src/components/mainDisplayController.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainDisplayController: () => (/* binding */ mainDisplayController)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox */ "./src/components/inbox.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today */ "./src/components/today.js");





const mainDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__.headerComponent.setUp());
    pageContainer.appendChild(_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarComponent.setUp());
    pageContainer.appendChild(_inbox__WEBPACK_IMPORTED_MODULE_2__.inboxComponent.setUp());

    document.body.appendChild(pageContainer);
  };

  const setInbox = () => {
    removeMain();
    pageContainer.appendChild(_inbox__WEBPACK_IMPORTED_MODULE_2__.inboxComponent.setUp());
  };

  const setToday = () => {
    removeMain();
    pageContainer.appendChild(_today__WEBPACK_IMPORTED_MODULE_3__.todayComponent.setUp());
  };

  function removeMain() {
    const main = document.querySelector("main");
    main.remove();
  }

  return { setUp, setInbox, setToday };
})();




/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebarComponent: () => (/* binding */ sidebarComponent)
/* harmony export */ });
/* harmony import */ var _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDisplayController */ "./src/components/mainDisplayController.js");


const sidebarComponent = (() => {
  const setUp = () => {
    const sidebarContainer = document.createElement("nav");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.appendChild(createSidebarButtonsContainer());
    sidebarContainer.appendChild(createQuickAccessContainer());
    sidebarContainer.appendChild(createSourceLink());

    return sidebarContainer;
  };

  function createSidebarButtonsContainer() {
    const sidebarButtonsContainer = document.createElement("div");

    const inbox = createButton("Inbox");
    const today = createButton("Today");
    const week = createButton("Week");
    const projects = createButton("Projects");

    sidebarButtonsContainer.classList.add("sidebar-buttons-container");

    inbox.addEventListener("click", _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__.mainDisplayController.setInbox);
    today.addEventListener("click", _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__.mainDisplayController.setToday);
    // add events to each button

    sidebarButtonsContainer.appendChild(inbox);
    sidebarButtonsContainer.appendChild(today);
    sidebarButtonsContainer.appendChild(week);
    sidebarButtonsContainer.appendChild(projects);

    return sidebarButtonsContainer;
  }

  function createQuickAccessContainer() {
    const quickAccessContainer = document.createElement("div");
    const quickAccessTitle = document.createElement("p");

    quickAccessContainer.classList.add("quick-access-container");

    quickAccessTitle.classList.add("quick-access");
    quickAccessTitle.textContent = "Quick Access";

    quickAccessContainer.appendChild(quickAccessTitle);

    return quickAccessContainer;
  }

  function createSourceLink() {
    const sourceLink = document.createElement("a");
    sourceLink.classList.add("source-link");
    sourceLink.textContent = "source";
    sourceLink.href = "https://github.com/sergiogarciiam/todo-list";

    return sourceLink;
  }

  function createButton(name) {
    const button = document.createElement("button");
    button.textContent = name;

    return button;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/taskMenu.js":
/*!************************************!*\
  !*** ./src/components/taskMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskMenuComponent: () => (/* binding */ taskMenuComponent)
/* harmony export */ });
const taskMenuComponent = (() => {
  const setUp = (task) => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");

    newTaskContainer.appendChild(createNewTaskNameContainer(task.name));
    newTaskContainer.appendChild(createNewTaskFeaturesContainer());
    newTaskContainer.appendChild(createNewTaskDescriptionContainer());
    newTaskContainer.appendChild(createNewTaskButtonsContainer());

    return newTaskContainer;
  };

  function createNewTaskNameContainer(name) {
    const newTaskNameContainer = document.createElement("div");
    const checkbox = document.createElement("button");
    const inputTaskName = document.createElement("input");

    newTaskNameContainer.classList.add("new-task-name-container");
    inputTaskName.classList.add("input-task-name");
    inputTaskName.value = name;

    newTaskNameContainer.appendChild(checkbox);
    newTaskNameContainer.appendChild(inputTaskName);

    return newTaskNameContainer;
  }

  function createNewTaskFeaturesContainer() {
    const newTaskFeaturesContainer = document.createElement("div");
    const projectsSelection = document.createElement("select");
    const dueDateSelection = document.createElement("select");
    const prioritySelection = document.createElement("select");

    newTaskFeaturesContainer.classList.add("new-task-features-container");

    newTaskFeaturesContainer.appendChild(projectsSelection);
    newTaskFeaturesContainer.appendChild(dueDateSelection);
    newTaskFeaturesContainer.appendChild(prioritySelection);

    return newTaskFeaturesContainer;
  }

  function createNewTaskDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    return descriptionArea;
  }

  function createNewTaskButtonsContainer() {
    const newTaskButtonsContainer = document.createElement("div");
    const cancelAddTaskButton = document.createElement("button");
    const confirmAddTaskButton = document.createElement("button");

    newTaskButtonsContainer.classList.add("new-task-buttons-container");

    cancelAddTaskButton.classList.add("cancel-add-task-button");
    cancelAddTaskButton.textContent = "Cancel";
    cancelAddTaskButton.type = "button";
    cancelAddTaskButton.addEventListener("click", hideTaskMenu);

    confirmAddTaskButton.classList.add("confirm-add-task-button");
    confirmAddTaskButton.textContent = "Add task";
    confirmAddTaskButton.type = "button";
    confirmAddTaskButton.addEventListener("click", addTask);

    newTaskButtonsContainer.appendChild(cancelAddTaskButton);
    newTaskButtonsContainer.appendChild(confirmAddTaskButton);

    return newTaskButtonsContainer;
  }

  function addTask() {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const taskTitle = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    const tasksContainer = document.querySelector(".tasks-container");
    const inputTaskName = document.querySelector(".input-task-name");

    taskContainer.addEventListener("click", openTaskMenu);

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskEditButton.classList.add("task-edit-button");
    taskDeleteButton.classList.add("task-delete-button");

    taskTitle.textContent = inputTaskName.value;

    taskContainer.appendChild(taskCheckboxButton);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    tasksContainer.appendChild(taskContainer);

    hideTaskMenu();
  }

  function openTaskMenu() {}

  function hideTaskMenu() {
    const newTask = document.querySelector(".new-task-container");
    const addTaskButton = document.querySelector(".add-task-button");

    newTask.remove();
    addTaskButton.classList.remove("hide");
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/today.js":
/*!*********************************!*\
  !*** ./src/components/today.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todayComponent: () => (/* binding */ todayComponent)
/* harmony export */ });
/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNewTask */ "./src/components/addNewTask.js");


const todayComponent = (() => {
  const setUp = () => {
    const todayContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    const tasksContainer = document.createElement("div");

    todayContainer.classList.add("today-container");

    todayTitle.classList.add("today-title");
    todayTitle.textContent = "Today";

    tasksContainer.classList.add("tasks-container");

    todayContainer.appendChild(todayTitle);
    todayContainer.appendChild(tasksContainer);
    todayContainer.appendChild(_addNewTask__WEBPACK_IMPORTED_MODULE_0__.addNewTaskButton.setUp());

    return todayContainer;
  };

  return { setUp };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mainDisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mainDisplayController */ "./src/components/mainDisplayController.js");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/global.css */ "./src/assets/styles/global.css");
/* harmony import */ var _assets_styles_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/header.css */ "./src/assets/styles/header.css");
/* harmony import */ var _assets_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/sidebar.css */ "./src/assets/styles/sidebar.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _assets_styles_tasks_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/tasks.css */ "./src/assets/styles/tasks.css");







_components_mainDisplayController__WEBPACK_IMPORTED_MODULE_0__.mainDisplayController.setUp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtGQUErRixZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLDJCQUEyQixtQ0FBbUMsMEJBQTBCLDRCQUE0QixHQUFHLE9BQU8sMkJBQTJCLGVBQWUsY0FBYyxHQUFHLFVBQVUsOENBQThDLCtCQUErQixHQUFHLHFCQUFxQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxpQ0FBaUMsNERBQTRELEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxxQkFBcUI7QUFDcDhCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3ZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtGQUErRixhQUFhLFdBQVcsYUFBYSxZQUFZLFlBQVksYUFBYSxXQUFXLDRDQUE0QyxzQkFBc0Isb0JBQW9CLG1DQUFtQyxvQkFBb0IsNENBQTRDLGdEQUFnRCxlQUFlLEdBQUcscUJBQXFCO0FBQzNjO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxXQUFXLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLCtCQUErQixvQkFBb0Isb0JBQW9CLDJCQUEyQiw0QkFBNEIsY0FBYyw2QkFBNkIsR0FBRyxzQkFBc0Isc0NBQXNDLDhDQUE4QyxpQkFBaUIsd0JBQXdCLG1CQUFtQixzQkFBc0Isc0JBQXNCLEdBQUcsNEJBQTRCLGlEQUFpRCxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDcHlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3ZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdHQUFnRyxhQUFhLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxZQUFZLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsOENBQThDLHVCQUF1QixvQkFBb0IsMkJBQTJCLGNBQWMsb0JBQW9CLDRDQUE0QyxnREFBZ0QsR0FBRyxnQ0FBZ0Msa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcseUNBQXlDLGlCQUFpQixxQkFBcUIsc0JBQXNCLDBCQUEwQixpQkFBaUIsaUNBQWlDLDBDQUEwQyxzQkFBc0IsdUNBQXVDLEdBQUcsK0NBQStDLHdDQUF3QyxHQUFHLG1CQUFtQixzQ0FBc0MsR0FBRyxrQkFBa0IscUJBQXFCLHdDQUF3QywwQkFBMEIsR0FBRyx3QkFBd0IsK0JBQStCLCtCQUErQixHQUFHLHFCQUFxQjtBQUN2OEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFHQUFxRyxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsbUVBQW1FLGVBQWUsa0JBQWtCLDJCQUEyQixjQUFjLG9CQUFvQix3QkFBd0IsNENBQTRDLEdBQUcsOEJBQThCLGtCQUFrQixjQUFjLEdBQUcsaUZBQWlGLGlCQUFpQixnQkFBZ0IsdUJBQXVCLDRDQUE0QywwQ0FBMEMseUJBQXlCLEdBQUcsc0NBQXNDLGdCQUFnQixpQ0FBaUMsMENBQTBDLGtCQUFrQix3QkFBd0IsR0FBRyxrQ0FBa0Msa0JBQWtCLGNBQWMsMkJBQTJCLCtDQUErQyxHQUFHLGlDQUFpQyxrQkFBa0IsY0FBYyx5QkFBeUIsR0FBRywwQ0FBMEMsa0JBQWtCLG1CQUFtQix3QkFBd0IsMENBQTBDLCtCQUErQixzQkFBc0IsOEJBQThCLEdBQUcsdUJBQXVCLHNCQUFzQiwrQkFBK0IsMENBQTBDLHdCQUF3QixrQkFBa0IsbUJBQW1CLEdBQUcsZ0RBQWdELGlCQUFpQixHQUFHLGtDQUFrQyxlQUFlLEdBQUcscUJBQXFCLGdCQUFnQixrQkFBa0IsY0FBYywwQkFBMEIsa0JBQWtCLG9CQUFvQixHQUFHLDJCQUEyQixpQkFBaUIsZ0JBQWdCLHVCQUF1Qiw0Q0FBNEMsdUJBQXVCLDRDQUE0QyxvQkFBb0IsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsNkNBQTZDLG9CQUFvQixlQUFlLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLDZGQUE2RixlQUFlLEdBQUcscUJBQXFCO0FBQy9rRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3ZJMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTJHO0FBQzNHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJcUQ7QUFDN0UsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiK0M7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qyx3REFBaUI7QUFDekQ7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7QUN6QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix5REFBZ0I7O0FBRS9DO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJpQjtBQUNFO0FBQ0o7QUFDQTs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDhCQUE4QixvREFBZTtBQUM3Qyw4QkFBOEIsc0RBQWdCO0FBQzlDLDhCQUE4QixrREFBYzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtEQUFjO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQWM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEMrQjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MseUVBQXFCO0FBQ3pELG9DQUFvQyx5RUFBcUI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7OztBQ3JFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQWdCOztBQUUvQztBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUV5Qjs7Ozs7OztVQ3pCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJFO0FBQ3ZDO0FBQ0E7QUFDQztBQUNIO0FBQ0M7O0FBRW5DLG9GQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzg0MTIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLmNzcz8xN2E4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzPzU1MDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvc2lkZWJhci5jc3M/YmRhYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrcy5jc3M/Zjg3YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FkZE5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW5EaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tNZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XG4gIC0taGVhZGVyLWNvbG9yOiAjMjYyNjI2O1xuXG4gIC0tbGV0dGVyLWNvbG9yOiAjZWVlO1xuICAtLXNlY29uZC1sZXR0ZXItY29sb3I6ICM5OTk5OTk7XG4gIC0tbWFyay1jb2xvcjogIzQ0NDQ0NDtcbiAgLS1zaGFkb3ctY29sb3I6ICMxOTE5MTk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWxldHRlci1jb2xvcik7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlciBoZWFkZXJcIiBcInNpZGViYXIgbWFpblwiO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCOztFQUV2QixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XFxuICAtLWhlYWRlci1jb2xvcjogIzI2MjYyNjtcXG5cXG4gIC0tbGV0dGVyLWNvbG9yOiAjZWVlO1xcbiAgLS1zZWNvbmQtbGV0dGVyLWNvbG9yOiAjOTk5OTk5O1xcbiAgLS1tYXJrLWNvbG9yOiAjNDQ0NDQ0O1xcbiAgLS1zaGFkb3ctY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBtYWluXFxcIjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XG4gIHotaW5kZXg6IDE7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLGFBQWE7O0VBRWIscUNBQXFDO0VBQ3JDLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDIwcHg7XG5cbiAgbWFyZ2luOiA1MHB4IDAgMCA1MDBweDtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICBwYWRkaW5nOiA3cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZC1sZXR0ZXItY29sb3IpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTOztFQUVULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLGlCQUFpQjs7RUFFakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbWFyZ2luOiA1MHB4IDAgMCA1MDBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBwYWRkaW5nOiA3cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2lkZWJhci1jb250YWluZXIge1xuICBncmlkLWFyZWE6IHNpZGViYXI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xuXG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuLnNpZGViYXItYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5zaWRlYmFyLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG5cbiAgY29sb3I6IHZhcigtLWxldHRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xufVxuXG4uc2lkZWJhci1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmstY29sb3IpO1xufVxuXG4ucXVpY2stYWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZC1sZXR0ZXItY29sb3IpO1xufVxuXG4uc291cmNlLWxpbmsge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc291cmNlLWxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCOztFQUVsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsYUFBYTs7RUFFYixxQ0FBcUM7RUFDckMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7RUFFakIsbUJBQW1CO0VBQ25CLFlBQVk7O0VBRVosMEJBQTBCO0VBQzFCLHFDQUFxQzs7RUFFckMsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhci1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXItYnV0dG9ucy1jb250YWluZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGNvbG9yOiB2YXIoLS1sZXR0ZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxufVxcblxcbi5zaWRlYmFyLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmstY29sb3IpO1xcbn1cXG5cXG4ucXVpY2stYWNjZXNzIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcXG59XFxuXFxuLnNvdXJjZS1saW5rIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zb3VyY2UtbGluazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIE5FVyBUQVNLIE1FTlUgKi9cbi5uZXctdGFzay1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG5cbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xufVxuXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5cbi50YXNrLWVkaXQtYnV0dG9uLFxuLnRhc2stZGVsZXRlLWJ1dHRvbixcbi5uZXctdGFzay1uYW1lLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sZXR0ZXItY29sb3IpO1xuXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ldy10YXNrLW5hbWUtY29udGFpbmVyID4gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcblxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgcGFkZGluZzogMTBweDtcblxuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm5ldy10YXNrLWZlYXR1cmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcblxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1hcmstY29sb3IpO1xufVxuXG4ubmV3LXRhc2stYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ubmV3LXRhc2stYnV0dG9ucy1jb250YWluZXIgPiBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJrLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWxldHRlci1jb2xvcik7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xufVxuXG4uZGVzY3JpcHRpb24tYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcblxuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMTBweDtcblxuICByZXNpemU6IG5vbmU7XG59XG5cbi5uZXctdGFzay1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLyogVEFTSyAqL1xuLnRhc2tzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1jaGVja2JveC1idXR0b24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stY29udGFpbmVyID4gcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udGFzay1lZGl0LWJ1dHRvbixcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50YXNrLWVkaXQtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi50YXNrLWNvbnRhaW5lcjpob3ZlciA+IC50YXNrLWVkaXQtYnV0dG9uLFxuLnRhc2stY29udGFpbmVyOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3Rhc2tzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTOztFQUVULGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixxQ0FBcUM7RUFDckMscUNBQXFDOztFQUVyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsYUFBYTs7RUFFYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUzs7RUFFVCxvQkFBb0I7RUFDcEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhOztFQUViLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQywwQkFBMEI7O0VBRTFCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHFDQUFxQzs7RUFFckMsaUJBQWlCO0VBQ2pCLGFBQWE7O0VBRWIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFNBQVM7QUFDVDtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUzs7RUFFVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIscUNBQXFDO0VBQ3JDLGtCQUFrQjs7RUFFbEIscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTkVXIFRBU0sgTUVOVSAqL1xcbi5uZXctdGFzay1jb250YWluZXIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2stZWRpdC1idXR0b24sXFxuLnRhc2stZGVsZXRlLWJ1dHRvbixcXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy10YXNrLW5hbWUtY29udGFpbmVyID4gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uZXctdGFzay1mZWF0dXJlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1hcmstY29sb3IpO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9ucy1jb250YWluZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJrLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1sZXR0ZXItY29sb3IpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWFyZWEge1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuXFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5uZXctdGFzay1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi8qIFRBU0sgKi9cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtYnV0dG9uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50YXNrLWVkaXQtYnV0dG9uLFxcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2stZWRpdC1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlciA+IC50YXNrLWVkaXQtYnV0dG9uLFxcbi50YXNrLWNvbnRhaW5lcjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFza01lbnVcIjtcblxuY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFza1NldFVwKTtcblxuICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1lbnVUYXNrU2V0VXAoZXZlbnQpIHtcbiAgICBsZXQgdGFzayA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgfTtcblxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YXNrTWVudUNvbXBvbmVudC5zZXRVcCh0YXNrKSk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcblxuZXhwb3J0IHsgYWRkTmV3VGFza0J1dHRvbiB9O1xuIiwiY29uc3QgaGVhZGVyQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBzaWRlYmFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9maWxlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcblxuICAgIHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xuICAgIHNpZGViYXJCdXR0b24udGV4dENvbnRlbnQgPSBcInNcIjtcbiAgICBzaWRlYmFyQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgcHJvZmlsZUhvbGRlci5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcblxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyQnV0dG9uKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUhvbGRlcik7XG5cbiAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuXG5leHBvcnQgeyBoZWFkZXJDb21wb25lbnQgfTtcbiIsImltcG9ydCB7IGFkZE5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9hZGROZXdUYXNrXCI7XG5cbmNvbnN0IGluYm94Q29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGluYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmJveC1jb250YWluZXJcIik7XG5cbiAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmJveC10aXRsZVwiKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWNvbnRhaW5lclwiKTtcblxuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94VGl0bGUpO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbiAgICBpbmJveENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnV0dG9uLnNldFVwKCkpO1xuXG4gICAgcmV0dXJuIGluYm94Q29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuXG5leHBvcnQgeyBpbmJveENvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgaGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBzaWRlYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgaW5ib3hDb21wb25lbnQgfSBmcm9tIFwiLi9pbmJveFwiO1xuaW1wb3J0IHsgdG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi90b2RheVwiO1xuXG5jb25zdCBtYWluRGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgcGFnZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRhaW5lclwiKTtcblxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29tcG9uZW50LnNldFVwKCkpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbXBvbmVudC5zZXRVcCgpKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94Q29tcG9uZW50LnNldFVwKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmJveCA9ICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveENvbXBvbmVudC5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RheSA9ICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvbXBvbmVudC5zZXRVcCgpKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluLnJlbW92ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAsIHNldEluYm94LCBzZXRUb2RheSB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWFpbkRpc3BsYXlDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBtYWluRGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tYWluRGlzcGxheUNvbnRyb2xsZXJcIjtcblxuY29uc3Qgc2lkZWJhckNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHNpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItY29udGFpbmVyXCIpO1xuXG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQnV0dG9uc0NvbnRhaW5lcigpKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVF1aWNrQWNjZXNzQ29udGFpbmVyKCkpO1xuICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU291cmNlTGluaygpKTtcblxuICAgIHJldHVybiBzaWRlYmFyQ29udGFpbmVyO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJCdXR0b25zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHNpZGViYXJCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGluYm94ID0gY3JlYXRlQnV0dG9uKFwiSW5ib3hcIik7XG4gICAgY29uc3QgdG9kYXkgPSBjcmVhdGVCdXR0b24oXCJUb2RheVwiKTtcbiAgICBjb25zdCB3ZWVrID0gY3JlYXRlQnV0dG9uKFwiV2Vla1wiKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZUJ1dHRvbihcIlByb2plY3RzXCIpO1xuXG4gICAgc2lkZWJhckJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9ucy1jb250YWluZXJcIik7XG5cbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbkRpc3BsYXlDb250cm9sbGVyLnNldEluYm94KTtcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbkRpc3BsYXlDb250cm9sbGVyLnNldFRvZGF5KTtcbiAgICAvLyBhZGQgZXZlbnRzIHRvIGVhY2ggYnV0dG9uXG5cbiAgICBzaWRlYmFyQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveCk7XG4gICAgc2lkZWJhckJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIHNpZGViYXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWspO1xuICAgIHNpZGViYXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIHJldHVybiBzaWRlYmFyQnV0dG9uc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVF1aWNrQWNjZXNzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHF1aWNrQWNjZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWlja0FjY2Vzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBxdWlja0FjY2Vzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVpY2stYWNjZXNzLWNvbnRhaW5lclwiKTtcblxuICAgIHF1aWNrQWNjZXNzVGl0bGUuY2xhc3NMaXN0LmFkZChcInF1aWNrLWFjY2Vzc1wiKTtcbiAgICBxdWlja0FjY2Vzc1RpdGxlLnRleHRDb250ZW50ID0gXCJRdWljayBBY2Nlc3NcIjtcblxuICAgIHF1aWNrQWNjZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aWNrQWNjZXNzVGl0bGUpO1xuXG4gICAgcmV0dXJuIHF1aWNrQWNjZXNzQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU291cmNlTGluaygpIHtcbiAgICBjb25zdCBzb3VyY2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc291cmNlTGluay5jbGFzc0xpc3QuYWRkKFwic291cmNlLWxpbmtcIik7XG4gICAgc291cmNlTGluay50ZXh0Q29udGVudCA9IFwic291cmNlXCI7XG4gICAgc291cmNlTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2VyZ2lvZ2FyY2lpYW0vdG9kby1saXN0XCI7XG5cbiAgICByZXR1cm4gc291cmNlTGluaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuXG5leHBvcnQgeyBzaWRlYmFyQ29tcG9uZW50IH07XG4iLCJjb25zdCB0YXNrTWVudUNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1jb250YWluZXJcIik7XG5cbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2tOYW1lQ29udGFpbmVyKHRhc2submFtZSkpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0ZlYXR1cmVzQ29udGFpbmVyKCkpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyKCkpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0J1dHRvbnNDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gbmV3VGFza0NvbnRhaW5lcjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrTmFtZUNvbnRhaW5lcihuYW1lKSB7XG4gICAgY29uc3QgbmV3VGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgbmV3VGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrLW5hbWUtY29udGFpbmVyXCIpO1xuICAgIGlucHV0VGFza05hbWUuY2xhc3NMaXN0LmFkZChcImlucHV0LXRhc2stbmFtZVwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnZhbHVlID0gbmFtZTtcblxuICAgIG5ld1Rhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBuZXdUYXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcblxuICAgIHJldHVybiBuZXdUYXNrTmFtZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBuZXdUYXNrRmVhdHVyZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RzU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBkdWVEYXRlU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICBuZXdUYXNrRmVhdHVyZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrLWZlYXR1cmVzLWNvbnRhaW5lclwiKTtcblxuICAgIG5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1NlbGVjdGlvbik7XG4gICAgbmV3VGFza0ZlYXR1cmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3Rpb24pO1xuICAgIG5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdGlvbik7XG5cbiAgICByZXR1cm4gbmV3VGFza0ZlYXR1cmVzQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbkFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWFyZWFcIik7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQXJlYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b25zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjb25maXJtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stYnV0dG9ucy1jb250YWluZXJcIik7XG5cbiAgICBjYW5jZWxBZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGNhbmNlbEFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEFkZFRhc2tCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVRhc2tNZW51KTtcblxuICAgIGNvbmZpcm1BZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb25maXJtLWFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG5cbiAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxBZGRUYXNrQnV0dG9uKTtcbiAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQWRkVGFza0J1dHRvbik7XG5cbiAgICByZXR1cm4gbmV3VGFza0J1dHRvbnNDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tDaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdGFza0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLW5hbWVcIik7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza01lbnUpO1xuXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFza0NoZWNrYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94LWJ1dHRvblwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgdGFza0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdC1idXR0b25cIik7XG4gICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYnV0dG9uXCIpO1xuXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaW5wdXRUYXNrTmFtZS52YWx1ZTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94QnV0dG9uKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcblxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgaGlkZVRhc2tNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuVGFza01lbnUoKSB7fVxuXG4gIGZ1bmN0aW9uIGhpZGVUYXNrTWVudSgpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1jb250YWluZXJcIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuXG4gICAgbmV3VGFzay5yZW1vdmUoKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tNZW51Q29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBhZGROZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vYWRkTmV3VGFza1wiO1xuXG5jb25zdCB0b2RheUNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kYXktY29udGFpbmVyXCIpO1xuXG4gICAgdG9kYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktdGl0bGVcIik7XG4gICAgdG9kYXlUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1jb250YWluZXJcIik7XG5cbiAgICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKTtcbiAgICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG4gICAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J1dHRvbi5zZXRVcCgpKTtcblxuICAgIHJldHVybiB0b2RheUNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9kYXlDb21wb25lbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IG1haW5EaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbkRpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zaWRlYmFyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvdGFza3MuY3NzXCI7XG5cbm1haW5EaXNwbGF5Q29udHJvbGxlci5zZXRVcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9