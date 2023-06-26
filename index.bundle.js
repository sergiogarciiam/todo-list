/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/global.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/global.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  overflow: hidden;
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/global.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;;EAEvB,oBAAoB;EACpB,8BAA8B;EAC9B,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,yCAAyC;EACzC,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,mDAAmD;AACrD;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --background-color: #1f1f1f;\n  --header-color: #262626;\n\n  --letter-color: #eee;\n  --second-letter-color: #999999;\n  --mark-color: #444444;\n  --shadow-color: #191919;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--letter-color);\n  overflow: hidden;\n}\n\n.page-container {\n  height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  grid-template-rows: 1fr 15fr;\n  grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/header.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/header.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

  transform-origin: right;
  transition: 1s;
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

.sidebar-hide {
  transform: translateX(-100px);
  opacity: 0;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/sidebar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,aAAa;;EAEb,qCAAqC;EACrC,2CAA2C;;EAE3C,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;;EAEjB,mBAAmB;EACnB,YAAY;;EAEZ,0BAA0B;EAC1B,qCAAqC;;EAErC,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;;EAEhB,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,UAAU;AACZ","sourcesContent":[".sidebar-container {\n  grid-area: sidebar;\n\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  padding: 20px;\n\n  background-color: var(--header-color);\n  box-shadow: 2px 2px 5px var(--shadow-color);\n\n  transform-origin: right;\n  transition: 1s;\n}\n\n.sidebar-buttons-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar-buttons-container > button {\n  padding: 5px;\n  text-align: left;\n  font-size: 1.1rem;\n\n  border-radius: 10px;\n  border: none;\n\n  color: var(--letter-color);\n  background-color: var(--header-color);\n\n  cursor: pointer;\n  transition: background-color 300ms;\n}\n\n.sidebar-buttons-container > button:hover {\n  background-color: var(--mark-color);\n}\n\n.quick-access {\n  color: var(--second-letter-color);\n}\n\n.source-link {\n  margin-top: auto;\n\n  color: var(--second-letter-color);\n  text-decoration: none;\n}\n\n.source-link:hover {\n  color: var(--letter-color);\n  text-decoration: underline;\n}\n\n.sidebar-hide {\n  transform: translateX(-100px);\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/task.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/task.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.tasks-container {
  position: relative;
  width: 50%;
}

.day-container .tasks-container,
.tasks-container .tasks-container {
  width: 100%;
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

.task-title {
  font-size: 1.3rem;
}

.task-project,
.task-date {
  font-size: 0.8rem;
  background-color: var(--header-color);
  padding: 5px;
  border-radius: 10px;
  align-items: center;
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

.blocker {
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/task.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;;EAET,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,qCAAqC;EACrC,kBAAkB;;EAElB,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;EACjB,qCAAqC;EACrC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,kBAAkB;;EAElB,WAAW;EACX,YAAY;EACZ,UAAU;AACZ","sourcesContent":[".tasks-container {\n  position: relative;\n  width: 50%;\n}\n\n.day-container .tasks-container,\n.tasks-container .tasks-container {\n  width: 100%;\n}\n\n.task-container {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n\n  border-radius: 15px;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.task-checkbox-button {\n  height: 20px;\n  width: 20px;\n  align-self: center;\n\n  border: 1px solid var(--letter-color);\n  border-radius: 5px;\n\n  background-color: var(--header-color);\n  cursor: pointer;\n}\n\n.task-title {\n  font-size: 1.3rem;\n}\n\n.task-project,\n.task-date {\n  font-size: 0.8rem;\n  background-color: var(--header-color);\n  padding: 5px;\n  border-radius: 10px;\n  align-items: center;\n}\n\n.task-edit-button,\n.task-delete-button {\n  cursor: pointer;\n  opacity: 0;\n}\n\n.task-edit-button {\n  margin-left: auto;\n}\n\n.task-container:hover > .task-edit-button,\n.task-container:hover > .task-delete-button {\n  opacity: 1;\n}\n\n.blocker {\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/taskMenu.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/taskMenu.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.task-menu-container {
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  border-radius: 20px;

  background-color: var(--header-color);

  z-index: 2;
}

.day-container .task-menu-container,
.tasks-container .task-menu-container {
  width: 100%;
}

/* NAME CONTAINER */
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

/* FEATURES CONTAINER */
.new-task-features-container {
  display: flex;
  gap: 20px;

  padding-bottom: 20px;
  border-bottom: 1px solid var(--mark-color);
}

/* DESCRIPTION AREA */
.description-area {
  min-height: 100px;
  color: var(--letter-color);
  background-color: var(--header-color);

  font-size: 1.1rem;
  padding: 10px;

  resize: none;
}

/* BUTTONS CONTAINER */
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

.new-task-buttons-container > button:hover {
  opacity: 0.6;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/taskMenu.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,aAAa;EACb,mBAAmB;;EAEnB,qCAAqC;;EAErC,UAAU;AACZ;;AAEA;;EAEE,WAAW;AACb;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,qCAAqC;EACrC,qCAAqC;;EAErC,kBAAkB;AACpB;;AAEA;EACE,WAAW;;EAEX,0BAA0B;EAC1B,qCAAqC;EACrC,aAAa;;EAEb,iBAAiB;AACnB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,SAAS;;EAET,oBAAoB;EACpB,0CAA0C;AAC5C;;AAEA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,qCAAqC;;EAErC,iBAAiB;EACjB,aAAa;;EAEb,YAAY;AACd;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,aAAa;;EAEb,YAAY;EACZ,mBAAmB;;EAEnB,mCAAmC;EACnC,0BAA0B;;EAE1B,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd","sourcesContent":[".task-menu-container {\n  position: relative;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 20px;\n  border-radius: 20px;\n\n  background-color: var(--header-color);\n\n  z-index: 2;\n}\n\n.day-container .task-menu-container,\n.tasks-container .task-menu-container {\n  width: 100%;\n}\n\n/* NAME CONTAINER */\n.new-task-name-container {\n  display: flex;\n  gap: 20px;\n}\n\n.task-edit-button,\n.task-delete-button,\n.new-task-name-container > button {\n  height: 20px;\n  width: 20px;\n  align-self: center;\n\n  background-color: var(--header-color);\n  border: 1px solid var(--letter-color);\n\n  border-radius: 5px;\n}\n\n.new-task-name-container > input {\n  width: 100%;\n\n  color: var(--letter-color);\n  background-color: var(--header-color);\n  padding: 10px;\n\n  font-size: 1.2rem;\n}\n\n/* FEATURES CONTAINER */\n.new-task-features-container {\n  display: flex;\n  gap: 20px;\n\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--mark-color);\n}\n\n/* DESCRIPTION AREA */\n.description-area {\n  min-height: 100px;\n  color: var(--letter-color);\n  background-color: var(--header-color);\n\n  font-size: 1.1rem;\n  padding: 10px;\n\n  resize: none;\n}\n\n/* BUTTONS CONTAINER */\n.new-task-buttons-container {\n  display: flex;\n  gap: 20px;\n  align-self: flex-end;\n}\n\n.new-task-buttons-container > button {\n  padding: 10px;\n\n  border: none;\n  border-radius: 10px;\n\n  background-color: var(--mark-color);\n  color: var(--letter-color);\n\n  cursor: pointer;\n  transition: opacity 300ms;\n}\n\n.new-task-buttons-container > button:hover {\n  opacity: 0.6;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/week.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/week.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.week-container {
  margin-left: 0px;
  padding-left: 50px;
  overflow-x: scroll;
}

.days-container {
  grid-template-columns: repeat(7, 500px);
  display: grid;
  gap: 100px;
}

.days-container {
  width: 100%;
}

.day-title {
  text-decoration: underline;
}

/* SCROLL BAR */
.week-container::-webkit-scrollbar {
  height: 8px;
}

/* Track */
.week-container::-webkit-scrollbar-track {
  background: var(--mark-color);
}

/* Handle */
.week-container::-webkit-scrollbar-thumb {
  background: var(--second-letter-color);
}

/* Handle on hover */
.week-container::-webkit-scrollbar-thumb:hover {
  background: var(--letter-color);
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/week.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,eAAe;AACf;EACE,WAAW;AACb;;AAEA,UAAU;AACV;EACE,6BAA6B;AAC/B;;AAEA,WAAW;AACX;EACE,sCAAsC;AACxC;;AAEA,oBAAoB;AACpB;EACE,+BAA+B;AACjC","sourcesContent":[".week-container {\n  margin-left: 0px;\n  padding-left: 50px;\n  overflow-x: scroll;\n}\n\n.days-container {\n  grid-template-columns: repeat(7, 500px);\n  display: grid;\n  gap: 100px;\n}\n\n.days-container {\n  width: 100%;\n}\n\n.day-title {\n  text-decoration: underline;\n}\n\n/* SCROLL BAR */\n.week-container::-webkit-scrollbar {\n  height: 8px;\n}\n\n/* Track */\n.week-container::-webkit-scrollbar-track {\n  background: var(--mark-color);\n}\n\n/* Handle */\n.week-container::-webkit-scrollbar-thumb {\n  background: var(--second-letter-color);\n}\n\n/* Handle on hover */\n.week-container::-webkit-scrollbar-thumb:hover {\n  background: var(--letter-color);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/global.css":
/*!**************************************!*\
  !*** ./src/assets/styles/global.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/assets/styles/task.css":
/*!************************************!*\
  !*** ./src/assets/styles/task.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/taskMenu.css":
/*!****************************************!*\
  !*** ./src/assets/styles/taskMenu.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./taskMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/taskMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/week.css":
/*!************************************!*\
  !*** ./src/assets/styles/week.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_week_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./week.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/week.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_week_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_week_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_week_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_week_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/main/header.js":
/*!***************************************!*\
  !*** ./src/components/main/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    profileHolder.classList.add("profile");

    sidebarButton.textContent = "s";
    sidebarButton.type = "button";
    sidebarButton.addEventListener("click", hideSidebar);

    headerContainer.appendChild(sidebarButton);
    headerContainer.appendChild(profileHolder);

    return headerContainer;
  };

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.toggle("sidebar-hide");
    setTimeout(() => sidebar.classList.toggle("hide"), 1000);
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/main/sidebar.js":
/*!****************************************!*\
  !*** ./src/components/main/sidebar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebarComponent: () => (/* binding */ sidebarComponent)
/* harmony export */ });
/* harmony import */ var _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainDisplayController */ "./src/components/mainDisplayController.js");


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
    week.addEventListener("click", _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__.mainDisplayController.setWeek);
    //projects.addEventListener("click", mainDisplayController.setProjects);

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

/***/ "./src/components/mainDisplayController.js":
/*!*************************************************!*\
  !*** ./src/components/mainDisplayController.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainDisplayController: () => (/* binding */ mainDisplayController)
/* harmony export */ });
/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/header */ "./src/components/main/header.js");
/* harmony import */ var _main_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/sidebar */ "./src/components/main/sidebar.js");
/* harmony import */ var _menu_inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/inbox */ "./src/components/menu/inbox.js");
/* harmony import */ var _menu_today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/today */ "./src/components/menu/today.js");
/* harmony import */ var _menu_week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/week */ "./src/components/menu/week.js");
/* harmony import */ var _menu_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/projects */ "./src/components/menu/projects.js");
/* harmony import */ var _menu_projects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menu_projects__WEBPACK_IMPORTED_MODULE_5__);







const mainDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(_main_header__WEBPACK_IMPORTED_MODULE_0__.headerComponent.setUp());
    pageContainer.appendChild(_main_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarComponent.setUp());
    pageContainer.appendChild(_menu_inbox__WEBPACK_IMPORTED_MODULE_2__.inboxComponent.setUp());

    document.body.appendChild(pageContainer);
  };

  const setInbox = () => {
    removeMain();
    pageContainer.appendChild(_menu_inbox__WEBPACK_IMPORTED_MODULE_2__.inboxComponent.setUp());
  };

  const setToday = () => {
    removeMain();
    pageContainer.appendChild(_menu_today__WEBPACK_IMPORTED_MODULE_3__.todayComponent.setUp());
  };

  const setWeek = () => {
    removeMain();
    pageContainer.appendChild(_menu_week__WEBPACK_IMPORTED_MODULE_4__.weekComponent.setUp());
  };

  const setProjects = () => {
    removeMain();
    pageContainer.appendChild(_menu_projects__WEBPACK_IMPORTED_MODULE_5__.projectsComponent.setUp());
  };

  function removeMain() {
    const main = document.querySelector("main");
    main.remove();
  }

  return { setUp, setInbox, setToday, setWeek, setProjects };
})();




/***/ }),

/***/ "./src/components/menu/inbox.js":
/*!**************************************!*\
  !*** ./src/components/menu/inbox.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxComponent: () => (/* binding */ inboxComponent)
/* harmony export */ });
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _tasks_addNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/addNewTask */ "./src/components/tasks/addNewTask.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/task */ "./src/components/tasks/task.js");




const inboxComponent = (() => {
  const setUp = () => {
    const inboxContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");

    inboxContainer.classList.add("inbox-container");

    inboxTitle.classList.add("inbox-title");
    inboxTitle.textContent = "Inbox";

    inboxContainer.appendChild(createBlocker());
    inboxContainer.appendChild(inboxTitle);
    inboxContainer.appendChild(createTasksContainer());
    inboxContainer.appendChild(_tasks_addNewTask__WEBPACK_IMPORTED_MODULE_1__.addNewTaskButton.setUp());

    return inboxContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__.tasksController.getAllTasks();

    tasksContainer.classList.add("tasks-container");

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].project === "Inbox") {
          tasksContainer.appendChild(
            _tasks_task__WEBPACK_IMPORTED_MODULE_2__.taskComponent.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  function createBlocker() {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");

    return blocker;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/menu/projects.js":
/*!*****************************************!*\
  !*** ./src/components/menu/projects.js ***!
  \*****************************************/
/***/ (() => {




/***/ }),

/***/ "./src/components/menu/today.js":
/*!**************************************!*\
  !*** ./src/components/menu/today.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todayComponent: () => (/* binding */ todayComponent)
/* harmony export */ });
/* harmony import */ var _utils_dateController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dateController */ "./src/utils/dateController.js");
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _tasks_addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/addNewTask */ "./src/components/tasks/addNewTask.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/task */ "./src/components/tasks/task.js");





const todayComponent = (() => {
  const setUp = () => {
    const todayContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    todayContainer.classList.add("today-container");

    todayTitle.classList.add("today-title");
    todayTitle.textContent = "Today";

    todayContainer.appendChild(createBlocker());
    todayContainer.appendChild(todayTitle);
    todayContainer.appendChild(createTasksContainer());
    todayContainer.appendChild(_tasks_addNewTask__WEBPACK_IMPORTED_MODULE_2__.addNewTaskButton.setUp());

    return todayContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = _utils_tasksController__WEBPACK_IMPORTED_MODULE_1__.tasksController.getAllTasks();

    tasksContainer.classList.add("tasks-container");

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].date === _utils_dateController__WEBPACK_IMPORTED_MODULE_0__.dateController.getTodayDate()) {
          tasksContainer.appendChild(
            _tasks_task__WEBPACK_IMPORTED_MODULE_3__.taskComponent.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  function createBlocker() {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");

    return blocker;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/menu/week.js":
/*!*************************************!*\
  !*** ./src/components/menu/week.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weekComponent: () => (/* binding */ weekComponent)
/* harmony export */ });
/* harmony import */ var _utils_dateController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dateController */ "./src/utils/dateController.js");
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _tasks_addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/addNewTask */ "./src/components/tasks/addNewTask.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/task */ "./src/components/tasks/task.js");





const weekComponent = (() => {
  const setUp = () => {
    const weekContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    const daysContainer = document.createElement("div");

    weekContainer.classList.add("week-container");

    todayTitle.classList.add("week-title");
    todayTitle.textContent = "Week";

    daysContainer.classList.add("days-container");

    daysContainer.appendChild(createDay("Monday"));
    daysContainer.appendChild(createDay("Tuesday"));
    daysContainer.appendChild(createDay("Wednesday"));
    daysContainer.appendChild(createDay("Thursday"));
    daysContainer.appendChild(createDay("Friday"));
    daysContainer.appendChild(createDay("Saturday"));
    daysContainer.appendChild(createDay("Sunday"));

    weekContainer.appendChild(todayTitle);
    weekContainer.appendChild(daysContainer);

    return weekContainer;
  };

  function createDay(day) {
    const dayContainer = document.createElement("div");
    const dayTitle = document.createElement("h2");
    const numberDay = getNumberDay(day);

    dayContainer.classList.add("day-container");
    dayTitle.classList.add("day-title");

    dayTitle.textContent = day;

    dayContainer.appendChild(createBlocker());
    dayContainer.appendChild(dayTitle);
    dayContainer.appendChild(createTasksContainer(numberDay));
    dayContainer.appendChild(_tasks_addNewTask__WEBPACK_IMPORTED_MODULE_2__.addNewTaskButton.setUp());

    return dayContainer;
  }

  function createTasksContainer(numberDay) {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = _utils_tasksController__WEBPACK_IMPORTED_MODULE_1__.tasksController.getAllTasks();

    tasksContainer.classList.add("tasks-container");
    console.log(_utils_dateController__WEBPACK_IMPORTED_MODULE_0__.dateController.getNextDayOfWeek(numberDay));

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (
          tasksDictionary[key].date ===
          _utils_dateController__WEBPACK_IMPORTED_MODULE_0__.dateController.getNextDayOfWeek(numberDay)
        ) {
          tasksContainer.appendChild(
            _tasks_task__WEBPACK_IMPORTED_MODULE_3__.taskComponent.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  function getNumberDay(day) {
    return {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
      Sunday: 6,
    }[day];
  }

  function createBlocker() {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");

    return blocker;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/tasks/addNewTask.js":
/*!********************************************!*\
  !*** ./src/components/tasks/addNewTask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTaskButton: () => (/* binding */ addNewTaskButton)
/* harmony export */ });
/* harmony import */ var _utils_dateController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dateController */ "./src/utils/dateController.js");
/* harmony import */ var _taskMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMenu */ "./src/components/tasks/taskMenu.js");



const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", openTaskMenu);

    return addTaskButton;
  };

  function openTaskMenu(event) {
    event.target.classList.add("hide");

    const parent = event.target.parentNode;
    const task = createTask(parent);
    const blocker = document.querySelector(".blocker");

    parent.appendChild(_taskMenu__WEBPACK_IMPORTED_MODULE_1__.taskMenuComponent.setUp(null, task));
    blocker.classList.remove("hide");
  }

  function createTask(parent) {
    let task = {
      name: "",
      project: "Inbox",
      priority: "4",
      date: "",
      description: "",
    };

    if (parent.classList.contains("today-container")) {
      task.date = _utils_dateController__WEBPACK_IMPORTED_MODULE_0__.dateController.getTodayDate();
    } else if (parent.classList.contains("day-container")) {
      var dayOfWeek = Array.from(parent.parentNode.children).indexOf(parent);
      task.date = _utils_dateController__WEBPACK_IMPORTED_MODULE_0__.dateController.getNextDayOfWeek(dayOfWeek);
    }

    return task;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/components/tasks/task.js":
/*!**************************************!*\
  !*** ./src/components/tasks/task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskComponent: () => (/* binding */ taskComponent)
/* harmony export */ });
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _taskMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMenu */ "./src/components/tasks/taskMenu.js");



const taskComponent = (() => {
  const setUp = (taskId, task) => {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const taskTitle = document.createElement("p");
    const taskProject = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    taskContainer.addEventListener("click", openTaskMenu);
    taskContainer.id = `id${taskId}`;

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskProject.classList.add("task-project");
    taskDate.classList.add("task-date");
    taskEditButton.classList.add("task-edit-button");
    taskDeleteButton.classList.add("task-delete-button");

    taskTitle.textContent = task.name;
    taskProject.textContent = task.project;
    taskDate.textContent = task.date;

    taskCheckboxButton.style.backgroundColor = getPriorityColor(task.priority);

    taskContainer.appendChild(taskCheckboxButton);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskProject);
    if (taskDate.textContent !== "") taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    return taskContainer;
  };

  const updateTask = (taskId, task) => {
    const taskContainer = document.querySelector(`#id${taskId}`);
    const taskTitle = taskContainer.querySelector(".task-title");
    const taskCheckboxButton = taskContainer.querySelector(
      ".task-checkbox-button"
    );
    const taskProject = taskContainer.querySelector(".task-project");
    const taskEditButton = taskContainer.querySelector(".task-edit-button");

    let taskDate = taskContainer.querySelector(".task-date");

    taskTitle.textContent = task.name;
    taskProject.textContent = task.project;
    taskCheckboxButton.style.backgroundColor = getPriorityColor(task.priority);

    if (taskDate !== null) taskDate.remove();

    taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.date;

    if (taskDate.textContent !== "")
      taskContainer.insertBefore(taskDate, taskEditButton);
  };

  function openTaskMenu(event) {
    const taskContainer = event.target;
    const id = taskContainer.id;
    const task = _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__.tasksController.getTask(id.substring(2));

    const taskMenu = _taskMenu__WEBPACK_IMPORTED_MODULE_1__.taskMenuComponent.setUp(id, task);
    const tasksContainer = taskContainer.parentNode;

    const blocker = document.querySelector(".blocker");

    tasksContainer.insertBefore(taskMenu, taskContainer.nextSibling);
    taskContainer.classList.add("hide");
    blocker.classList.remove("hide");
  }

  function getPriorityColor(priority) {
    return { 1: "red", 2: "orange", 3: "blue", 4: "" }[priority];
  }

  return { setUp, updateTask };
})();




/***/ }),

/***/ "./src/components/tasks/taskMenu.js":
/*!******************************************!*\
  !*** ./src/components/tasks/taskMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskMenuComponent: () => (/* binding */ taskMenuComponent)
/* harmony export */ });
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/components/tasks/task.js");



const taskMenuComponent = (() => {
  let actualId = null;
  let actualTask = null;

  const setUp = (id, task) => {
    const taskMenuContainer = document.createElement("div");

    actualId = id;
    actualTask = task;

    taskMenuContainer.classList.add("task-menu-container");

    taskMenuContainer.appendChild(createNewTaskNameContainer());
    taskMenuContainer.appendChild(createNewTaskFeaturesContainer());
    taskMenuContainer.appendChild(createNewTaskDescriptionContainer());
    taskMenuContainer.appendChild(createNewTaskButtonsContainer());

    return taskMenuContainer;
  };

  function createNewTaskNameContainer() {
    const newTaskNameContainer = document.createElement("div");
    const checkbox = document.createElement("button");
    const inputTaskName = document.createElement("input");

    newTaskNameContainer.classList.add("new-task-name-container");
    inputTaskName.classList.add("input-task-name");
    inputTaskName.value = actualTask.name;

    newTaskNameContainer.appendChild(checkbox);
    newTaskNameContainer.appendChild(inputTaskName);

    return newTaskNameContainer;
  }

  function createNewTaskFeaturesContainer() {
    const newTaskFeaturesContainer = document.createElement("div");
    newTaskFeaturesContainer.classList.add("new-task-features-container");

    newTaskFeaturesContainer.appendChild(createProjectSelection());
    newTaskFeaturesContainer.appendChild(createPrioritySelection());
    newTaskFeaturesContainer.appendChild(createDueDate());

    return newTaskFeaturesContainer;
  }

  function createNewTaskDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    descriptionArea.value = actualTask.description;
    return descriptionArea;
  }

  function createNewTaskButtonsContainer() {
    const newTaskButtonsContainer = document.createElement("div");
    const cancelAddTaskButton = document.createElement("button");
    const confirmAddTaskButton = document.createElement("button");

    newTaskButtonsContainer.classList.add("new-task-buttons-container");
    cancelAddTaskButton.classList.add("cancel-add-task-button");
    confirmAddTaskButton.classList.add("confirm-add-task-button");

    cancelAddTaskButton.textContent = "Cancel";
    confirmAddTaskButton.textContent = "Confirm";

    cancelAddTaskButton.type = "button";
    confirmAddTaskButton.type = "button";

    if (actualId === null) {
      cancelAddTaskButton.addEventListener("click", hideTaskMenuFromNew);
      confirmAddTaskButton.addEventListener("click", addTask);
    } else {
      cancelAddTaskButton.addEventListener("click", hideTaskMenuFromUpdate);
      confirmAddTaskButton.addEventListener("click", updateTask);
    }

    newTaskButtonsContainer.appendChild(cancelAddTaskButton);
    newTaskButtonsContainer.appendChild(confirmAddTaskButton);

    return newTaskButtonsContainer;
  }

  function addTask() {
    actualTask = updateActualTask();

    const tasksContainer = document.querySelector(".tasks-container");
    const taskId = _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__.tasksController.createTask(actualTask);

    tasksContainer.appendChild(_task__WEBPACK_IMPORTED_MODULE_1__.taskComponent.setUp(taskId, actualTask));

    hideTaskMenuFromNew();
  }

  function updateTask() {
    actualTask = updateActualTask();

    _utils_tasksController__WEBPACK_IMPORTED_MODULE_0__.tasksController.updateTask(actualId.substring(2), actualTask);
    _task__WEBPACK_IMPORTED_MODULE_1__.taskComponent.updateTask(actualId.substring(2), actualTask);

    hideTaskMenuFromUpdate();
  }

  function updateActualTask() {
    const newActualTask = actualTask;

    const inputTaskName = document.querySelector(".input-task-name");
    const projectsSelection = document.querySelector(".project-select");
    const prioritySelection = document.querySelector(".priority-select");
    const dueDate = document.querySelector(".due-date-input");
    const description = document.querySelector(".description-area");

    newActualTask.name = inputTaskName.value;
    newActualTask.project = projectsSelection.value;
    newActualTask.priority = prioritySelection.value;
    newActualTask.date = dueDate.value;
    newActualTask.description = description.value;

    return newActualTask;
  }

  function hideTaskMenuFromNew() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const addTaskButton = document.querySelector(".add-task-button");
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    addTaskButton.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function hideTaskMenuFromUpdate() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const task = document.querySelector(`#${actualId}`);
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    task.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function createProjectSelection() {
    const projectsSelection = document.createElement("select");
    projectsSelection.classList.add("project-select");

    projectsSelection.add(new Option("Inbox", "Inbox"));

    projectsSelection.value = actualTask.project;

    return projectsSelection;
  }

  function createPrioritySelection() {
    const prioritySelection = document.createElement("select");
    prioritySelection.classList.add("priority-select");

    prioritySelection.add(new Option("Priority 1", 1));
    prioritySelection.add(new Option("Priority 2", 2));
    prioritySelection.add(new Option("Priority 3", 3));
    prioritySelection.add(new Option("Priority 4", 4));

    prioritySelection.value = actualTask.priority;

    return prioritySelection;
  }

  function createDueDate() {
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("due-date-input");
    dueDateInput.type = "date";

    dueDateInput.value = actualTask.date;

    return dueDateInput;
  }

  return { setUp };
})();




/***/ }),

/***/ "./src/utils/dateController.js":
/*!*************************************!*\
  !*** ./src/utils/dateController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateController: () => (/* binding */ dateController)
/* harmony export */ });
const dateController = (() => {
  function getTodayDate() {
    var today = new Date();

    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var day = String(today.getDate()).padStart(2, "0");

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  }

  function getNextDayOfWeek(dayOfWeek) {
    var today = new Date();
    var currentDay = today.getDay();

    var distance = (dayOfWeek + 7 - currentDay + 1) % 7;

    today.setDate(today.getDate() + distance);

    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var day = String(today.getDate()).padStart(2, "0");

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  }

  return { getTodayDate, getNextDayOfWeek };
})();




/***/ }),

/***/ "./src/utils/projectsController.js":
/*!*****************************************!*\
  !*** ./src/utils/projectsController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsController: () => (/* binding */ projectsController)
/* harmony export */ });
const projectsController = (() => {
  let totalProjects = 0;
  let projectsDictionary = {};

  const setUp = () => {
    let project = {
      name: "Project 1",
    };
    projectsDictionary[totalProjects] = project;
    totalProjects = 1;
  };

  const createProject = (project) => {
    const projectId = totalProjects;
    projectsDictionary[totalProjects] = project;
    totalProjects++;

    return projectId;
  };

  const updateProject = (id, project) => {
    projectsDictionary[id] = project;
  };

  const getProject = (id) => {
    return projectsDictionary[id];
  };

  const deleteProject = (id) => {
    delete projectsDictionary[id];
  };

  const getAllProjects = () => {
    return projectsDictionary;
  };

  return {
    setUp,
    createProject,
    updateProject,
    getProject,
    deleteProject,
    getAllProjects,
  };
})();




/***/ }),

/***/ "./src/utils/tasksController.js":
/*!**************************************!*\
  !*** ./src/utils/tasksController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tasksController: () => (/* binding */ tasksController)
/* harmony export */ });
const tasksController = (() => {
  let totalTasks = 0;
  let tasksDictionary = {};

  const setUp = () => {
    let task = {
      name: "Hello",
      project: "Inbox",
      priority: "1",
      date: "",
      description: "Bye!!",
    };
    tasksDictionary[totalTasks] = task;
    totalTasks = 1;
  };

  const createTask = (task) => {
    const taskId = totalTasks;
    tasksDictionary[totalTasks] = task;
    totalTasks++;
    return taskId;
  };

  const updateTask = (id, task) => {
    tasksDictionary[id] = task;
    console.log(task);
  };

  const getTask = (id) => {
    return tasksDictionary[id];
  };

  const deleteTask = (id) => {
    delete tasksDictionary[id];
  };

  const getAllTasks = () => {
    return tasksDictionary;
  };

  return { setUp, createTask, updateTask, getTask, deleteTask, getAllTasks };
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mainDisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mainDisplayController */ "./src/components/mainDisplayController.js");
/* harmony import */ var _utils_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/projectsController */ "./src/utils/projectsController.js");
/* harmony import */ var _utils_tasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/tasksController */ "./src/utils/tasksController.js");
/* harmony import */ var _assets_styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/header.css */ "./src/assets/styles/header.css");
/* harmony import */ var _assets_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/sidebar.css */ "./src/assets/styles/sidebar.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _assets_styles_week_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles/week.css */ "./src/assets/styles/week.css");
/* harmony import */ var _assets_styles_task_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/styles/task.css */ "./src/assets/styles/task.css");
/* harmony import */ var _assets_styles_taskMenu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles/taskMenu.css */ "./src/assets/styles/taskMenu.css");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/styles/global.css */ "./src/assets/styles/global.css");












_utils_projectsController__WEBPACK_IMPORTED_MODULE_1__.projectsController.setUp();
_utils_tasksController__WEBPACK_IMPORTED_MODULE_2__.tasksController.setUp();
_components_mainDisplayController__WEBPACK_IMPORTED_MODULE_0__.mainDisplayController.setUp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFMEI7Ozs7Ozs7VUMzQzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJFO0FBQ1g7QUFDTjs7QUFFdEI7QUFDQztBQUNIO0FBQ0E7QUFDQTtBQUNJO0FBQ0Y7O0FBRXBDLHlFQUFrQjtBQUNsQixtRUFBZTtBQUNmLG9GQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrTWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvd2Vlay5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzg0MTIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLmNzcz8xN2E4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzPzU1MDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvc2lkZWJhci5jc3M/YmRhYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrLmNzcz9kYTk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3Rhc2tNZW51LmNzcz83NzFiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3dlZWsuY3NzPzM4MjgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkRpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnUvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudS90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51L3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza3MvYWRkTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Rhc2tNZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlscy9kYXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXRpbHMvcHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlscy90YXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcbiAgLS1oZWFkZXItY29sb3I6ICMyNjI2MjY7XG5cbiAgLS1sZXR0ZXItY29sb3I6ICNlZWU7XG4gIC0tc2Vjb25kLWxldHRlci1jb2xvcjogIzk5OTk5OTtcbiAgLS1tYXJrLWNvbG9yOiAjNDQ0NDQ0O1xuICAtLXNoYWRvdy1jb2xvcjogIzE5MTkxOTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlclwiIFwic2lkZWJhciBtYWluXCI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7O0VBRXZCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XFxuICAtLWhlYWRlci1jb2xvcjogIzI2MjYyNjtcXG5cXG4gIC0tbGV0dGVyLWNvbG9yOiAjZWVlO1xcbiAgLS1zZWNvbmQtbGV0dGVyLWNvbG9yOiAjOTk5OTk5O1xcbiAgLS1tYXJrLWNvbG9yOiAjNDQ0NDQ0O1xcbiAgLS1zaGFkb3ctY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlci1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgcGFkZGluZzogMjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICB6LWluZGV4OiAxO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsOEJBQThCOztFQUU5QixhQUFhOztFQUViLHFDQUFxQztFQUNyQywyQ0FBMkM7RUFDM0MsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAyMHB4O1xuXG4gIG1hcmdpbjogNTBweCAwIDAgNTAwcHg7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgcGFkZGluZzogN3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcbiAgb3BhY2l0eTogMC41O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbjogNTBweCAwIDAgNTAwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1sZXR0ZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNpZGViYXItY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcblxuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XG5cbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuXG4uc2lkZWJhci1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLnNpZGViYXItYnV0dG9ucy1jb250YWluZXIgPiBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcblxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG59XG5cbi5zaWRlYmFyLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyay1jb2xvcik7XG59XG5cbi5xdWljay1hY2Nlc3Mge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XG59XG5cbi5zb3VyY2UtbGluayB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG5cbiAgY29sb3I6IHZhcigtLXNlY29uZC1sZXR0ZXItY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zb3VyY2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1sZXR0ZXItY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNpZGViYXItaGlkZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICBvcGFjaXR5OiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTOztFQUVULGFBQWE7O0VBRWIscUNBQXFDO0VBQ3JDLDJDQUEyQzs7RUFFM0MsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixtQkFBbUI7RUFDbkIsWUFBWTs7RUFFWiwwQkFBMEI7RUFDMUIscUNBQXFDOztFQUVyQyxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcblxcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLnNpZGViYXItYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcbn1cXG5cXG4uc2lkZWJhci1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJrLWNvbG9yKTtcXG59XFxuXFxuLnF1aWNrLWFjY2VzcyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XFxufVxcblxcbi5zb3VyY2UtbGluayB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcblxcbiAgY29sb3I6IHZhcigtLXNlY29uZC1sZXR0ZXItY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc291cmNlLWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxldHRlci1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNpZGViYXItaGlkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRhc2tzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmRheS1jb250YWluZXIgLnRhc2tzLWNvbnRhaW5lcixcbi50YXNrcy1jb250YWluZXIgLnRhc2tzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stY2hlY2tib3gtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxldHRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi50YXNrLXByb2plY3QsXG4udGFzay1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stZWRpdC1idXR0b24sXG4udGFzay1kZWxldGUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGFzay1lZGl0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIgPiAudGFzay1lZGl0LWJ1dHRvbixcbi50YXNrLWNvbnRhaW5lcjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTOztFQUVULG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixxQ0FBcUM7RUFDckMsa0JBQWtCOztFQUVsQixxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFza3MtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5kYXktY29udGFpbmVyIC50YXNrcy1jb250YWluZXIsXFxuLnRhc2tzLWNvbnRhaW5lciAudGFza3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrYm94LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxldHRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2stcHJvamVjdCxcXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lZGl0LWJ1dHRvbixcXG4udGFzay1kZWxldGUtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50YXNrLWVkaXQtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6aG92ZXIgPiAudGFzay1lZGl0LWJ1dHRvbixcXG4udGFzay1jb250YWluZXI6aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGFzay1tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcblxuICB6LWluZGV4OiAyO1xufVxuXG4uZGF5LWNvbnRhaW5lciAudGFzay1tZW51LWNvbnRhaW5lcixcbi50YXNrcy1jb250YWluZXIgLnRhc2stbWVudS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogTkFNRSBDT05UQUlORVIgKi9cbi5uZXctdGFzay1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbn1cblxuLnRhc2stZWRpdC1idXR0b24sXG4udGFzay1kZWxldGUtYnV0dG9uLFxuLm5ldy10YXNrLW5hbWUtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxldHRlci1jb2xvcik7XG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIgPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGNvbG9yOiB2YXIoLS1sZXR0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vKiBGRUFUVVJFUyBDT05UQUlORVIgKi9cbi5uZXctdGFzay1mZWF0dXJlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG5cbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYXJrLWNvbG9yKTtcbn1cblxuLyogREVTQ1JJUFRJT04gQVJFQSAqL1xuLmRlc2NyaXB0aW9uLWFyZWEge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6IHZhcigtLWxldHRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG5cbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgcmVzaXplOiBub25lO1xufVxuXG4vKiBCVVRUT05TIENPTlRBSU5FUiAqL1xuLm5ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLm5ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyay1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1sZXR0ZXItY29sb3IpO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbn1cblxuLm5ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy90YXNrTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUzs7RUFFVCxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixxQ0FBcUM7O0VBRXJDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLHFDQUFxQztFQUNyQyxxQ0FBcUM7O0VBRXJDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxhQUFhOztFQUViLGlCQUFpQjtBQUNuQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsU0FBUzs7RUFFVCxvQkFBb0I7RUFDcEIsMENBQTBDO0FBQzVDOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIscUNBQXFDOztFQUVyQyxpQkFBaUI7RUFDakIsYUFBYTs7RUFFYixZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhOztFQUViLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQywwQkFBMEI7O0VBRTFCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stbWVudS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcblxcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmRheS1jb250YWluZXIgLnRhc2stbWVudS1jb250YWluZXIsXFxuLnRhc2tzLWNvbnRhaW5lciAudGFzay1tZW51LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTkFNRSBDT05UQUlORVIgKi9cXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2stZWRpdC1idXR0b24sXFxuLnRhc2stZGVsZXRlLWJ1dHRvbixcXG4ubmV3LXRhc2stbmFtZS1jb250YWluZXIgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy10YXNrLW5hbWUtY29udGFpbmVyID4gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qIEZFQVRVUkVTIENPTlRBSU5FUiAqL1xcbi5uZXctdGFzay1mZWF0dXJlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1hcmstY29sb3IpO1xcbn1cXG5cXG4vKiBERVNDUklQVElPTiBBUkVBICovXFxuLmRlc2NyaXB0aW9uLWFyZWEge1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuXFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIEJVVFRPTlMgQ09OVEFJTkVSICovXFxuLm5ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyay1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XFxufVxcblxcbi5uZXctdGFzay1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndlZWstY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbi5kYXlzLWNvbnRhaW5lciB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDUwMHB4KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMDBweDtcbn1cblxuLmRheXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXktdGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogU0NST0xMIEJBUiAqL1xuLndlZWstY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogOHB4O1xufVxuXG4vKiBUcmFjayAqL1xuLndlZWstY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1hcmstY29sb3IpO1xufVxuXG4vKiBIYW5kbGUgKi9cbi53ZWVrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtbGV0dGVyLWNvbG9yKTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG4ud2Vlay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGV0dGVyLWNvbG9yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvd2Vlay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7QUFDYjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsV0FBVztBQUNYO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLCtCQUErQjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2Vlay1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLmRheXMtY29udGFpbmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDUwMHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZGF5cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXktdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIFNDUk9MTCBCQVIgKi9cXG4ud2Vlay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogOHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbi53ZWVrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFyay1jb2xvcik7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbi53ZWVrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWxldHRlci1jb2xvcik7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbi53ZWVrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGV0dGVyLWNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tNZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza01lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlZWsuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWVrLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgaGVhZGVyQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBzaWRlYmFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9maWxlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICBzaWRlYmFyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ1dHRvblwiKTtcbiAgICBwcm9maWxlSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlXCIpO1xuXG4gICAgc2lkZWJhckJ1dHRvbi50ZXh0Q29udGVudCA9IFwic1wiO1xuICAgIHNpZGViYXJCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgc2lkZWJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJCdXR0b24pO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlSG9sZGVyKTtcblxuICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250YWluZXJcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcblxuZXhwb3J0IHsgaGVhZGVyQ29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBtYWluRGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vbWFpbkRpc3BsYXlDb250cm9sbGVyXCI7XG5cbmNvbnN0IHNpZGViYXJDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWNvbnRhaW5lclwiKTtcblxuICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhckJ1dHRvbnNDb250YWluZXIoKSk7XG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVRdWlja0FjY2Vzc0NvbnRhaW5lcigpKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZUxpbmsoKSk7XG5cbiAgICByZXR1cm4gc2lkZWJhckNvbnRhaW5lcjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyQnV0dG9uc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBzaWRlYmFyQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbmJveCA9IGNyZWF0ZUJ1dHRvbihcIkluYm94XCIpO1xuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlQnV0dG9uKFwiVG9kYXlcIik7XG4gICAgY29uc3Qgd2VlayA9IGNyZWF0ZUJ1dHRvbihcIldlZWtcIik7XG4gICAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVCdXR0b24oXCJQcm9qZWN0c1wiKTtcblxuICAgIHNpZGViYXJCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xuXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5EaXNwbGF5Q29udHJvbGxlci5zZXRJbmJveCk7XG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5EaXNwbGF5Q29udHJvbGxlci5zZXRUb2RheSk7XG4gICAgd2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbkRpc3BsYXlDb250cm9sbGVyLnNldFdlZWspO1xuICAgIC8vcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5EaXNwbGF5Q29udHJvbGxlci5zZXRQcm9qZWN0cyk7XG5cbiAgICBzaWRlYmFyQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveCk7XG4gICAgc2lkZWJhckJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIHNpZGViYXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWspO1xuICAgIHNpZGViYXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIHJldHVybiBzaWRlYmFyQnV0dG9uc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVF1aWNrQWNjZXNzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHF1aWNrQWNjZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWlja0FjY2Vzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBxdWlja0FjY2Vzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVpY2stYWNjZXNzLWNvbnRhaW5lclwiKTtcblxuICAgIHF1aWNrQWNjZXNzVGl0bGUuY2xhc3NMaXN0LmFkZChcInF1aWNrLWFjY2Vzc1wiKTtcbiAgICBxdWlja0FjY2Vzc1RpdGxlLnRleHRDb250ZW50ID0gXCJRdWljayBBY2Nlc3NcIjtcblxuICAgIHF1aWNrQWNjZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aWNrQWNjZXNzVGl0bGUpO1xuXG4gICAgcmV0dXJuIHF1aWNrQWNjZXNzQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU291cmNlTGluaygpIHtcbiAgICBjb25zdCBzb3VyY2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc291cmNlTGluay5jbGFzc0xpc3QuYWRkKFwic291cmNlLWxpbmtcIik7XG4gICAgc291cmNlTGluay50ZXh0Q29udGVudCA9IFwic291cmNlXCI7XG4gICAgc291cmNlTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2VyZ2lvZ2FyY2lpYW0vdG9kby1saXN0XCI7XG5cbiAgICByZXR1cm4gc291cmNlTGluaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuXG5leHBvcnQgeyBzaWRlYmFyQ29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBoZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluL2hlYWRlclwiO1xuaW1wb3J0IHsgc2lkZWJhckNvbXBvbmVudCB9IGZyb20gXCIuL21haW4vc2lkZWJhclwiO1xuaW1wb3J0IHsgaW5ib3hDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51L2luYm94XCI7XG5pbXBvcnQgeyB0b2RheUNvbXBvbmVudCB9IGZyb20gXCIuL21lbnUvdG9kYXlcIjtcbmltcG9ydCB7IHdlZWtDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51L3dlZWtcIjtcbmltcG9ydCB7IHByb2plY3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVudS9wcm9qZWN0c1wiO1xuXG5jb25zdCBtYWluRGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgcGFnZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRhaW5lclwiKTtcblxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29tcG9uZW50LnNldFVwKCkpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbXBvbmVudC5zZXRVcCgpKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94Q29tcG9uZW50LnNldFVwKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmJveCA9ICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveENvbXBvbmVudC5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RheSA9ICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvbXBvbmVudC5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzZXRXZWVrID0gKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtDb21wb25lbnQuc2V0VXAoKSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlTWFpbigpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb21wb25lbnQuc2V0VXAoKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5yZW1vdmUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwLCBzZXRJbmJveCwgc2V0VG9kYXksIHNldFdlZWssIHNldFByb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgeyBtYWluRGlzcGxheUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IHRhc2tzQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi91dGlscy90YXNrc0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFkZE5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi4vdGFza3MvYWRkTmV3VGFza1wiO1xuaW1wb3J0IHsgdGFza0NvbXBvbmVudCB9IGZyb20gXCIuLi90YXNrcy90YXNrXCI7XG5cbmNvbnN0IGluYm94Q29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgaW5ib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYm94LWNvbnRhaW5lclwiKTtcblxuICAgIGluYm94VGl0bGUuY2xhc3NMaXN0LmFkZChcImluYm94LXRpdGxlXCIpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgICBpbmJveENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCbG9ja2VyKCkpO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94VGl0bGUpO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tzQ29udGFpbmVyKCkpO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdXR0b24uc2V0VXAoKSk7XG5cbiAgICByZXR1cm4gaW5ib3hDb250YWluZXI7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGFza3NDb250YWluZXIoKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tzRGljdGlvbmFyeSA9IHRhc2tzQ29udHJvbGxlci5nZXRBbGxUYXNrcygpO1xuXG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWNvbnRhaW5lclwiKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0YXNrc0RpY3Rpb25hcnkpIHtcbiAgICAgIGlmICh0YXNrc0RpY3Rpb25hcnkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodGFza3NEaWN0aW9uYXJ5W2tleV0ucHJvamVjdCA9PT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0YXNrQ29tcG9uZW50LnNldFVwKGtleSwgdGFza3NEaWN0aW9uYXJ5W2tleV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJsb2NrZXIoKSB7XG4gICAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlclwiKTtcbiAgICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW5ib3hDb21wb25lbnQgfTtcbiIsImltcG9ydCB7IGRhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGVDb250cm9sbGVyXCI7XG5pbXBvcnQgeyB0YXNrc0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGFza3NDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBhZGROZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4uL3Rhc2tzL2FkZE5ld1Rhc2tcIjtcbmltcG9ydCB7IHRhc2tDb21wb25lbnQgfSBmcm9tIFwiLi4vdGFza3MvdGFza1wiO1xuXG5jb25zdCB0b2RheUNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kYXktY29udGFpbmVyXCIpO1xuXG4gICAgdG9kYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktdGl0bGVcIik7XG4gICAgdG9kYXlUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJsb2NrZXIoKSk7XG4gICAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSk7XG4gICAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza3NDb250YWluZXIoKSk7XG4gICAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J1dHRvbi5zZXRVcCgpKTtcblxuICAgIHJldHVybiB0b2RheUNvbnRhaW5lcjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVUYXNrc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza3NEaWN0aW9uYXJ5ID0gdGFza3NDb250cm9sbGVyLmdldEFsbFRhc2tzKCk7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRhc2tzRGljdGlvbmFyeSkge1xuICAgICAgaWYgKHRhc2tzRGljdGlvbmFyeS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0YXNrc0RpY3Rpb25hcnlba2V5XS5kYXRlID09PSBkYXRlQ29udHJvbGxlci5nZXRUb2RheURhdGUoKSkge1xuICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGFza0NvbXBvbmVudC5zZXRVcChrZXksIHRhc2tzRGljdGlvbmFyeVtrZXldKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3NDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCbG9ja2VyKCkge1xuICAgIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcImJsb2NrZXJcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZGF5Q29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBkYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGFza3NDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Rhc2tzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgYWRkTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuLi90YXNrcy9hZGROZXdUYXNrXCI7XG5pbXBvcnQgeyB0YXNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Rhc2tzL3Rhc2tcIjtcblxuY29uc3Qgd2Vla0NvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHdlZWtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgd2Vla0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2Vlay1jb250YWluZXJcIik7XG5cbiAgICB0b2RheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrLXRpdGxlXCIpO1xuICAgIHRvZGF5VGl0bGUudGV4dENvbnRlbnQgPSBcIldlZWtcIjtcblxuICAgIGRheXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheXMtY29udGFpbmVyXCIpO1xuXG4gICAgZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJNb25kYXlcIikpO1xuICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiVHVlc2RheVwiKSk7XG4gICAgZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJXZWRuZXNkYXlcIikpO1xuICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiVGh1cnNkYXlcIikpO1xuICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiRnJpZGF5XCIpKTtcbiAgICBkYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlNhdHVyZGF5XCIpKTtcbiAgICBkYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlN1bmRheVwiKSk7XG5cbiAgICB3ZWVrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpO1xuICAgIHdlZWtDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gd2Vla0NvbnRhaW5lcjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVEYXkoZGF5KSB7XG4gICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBudW1iZXJEYXkgPSBnZXROdW1iZXJEYXkoZGF5KTtcblxuICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5LWNvbnRhaW5lclwiKTtcbiAgICBkYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGF5LXRpdGxlXCIpO1xuXG4gICAgZGF5VGl0bGUudGV4dENvbnRlbnQgPSBkYXk7XG5cbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvY2tlcigpKTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5VGl0bGUpO1xuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrc0NvbnRhaW5lcihudW1iZXJEYXkpKTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J1dHRvbi5zZXRVcCgpKTtcblxuICAgIHJldHVybiBkYXlDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUYXNrc0NvbnRhaW5lcihudW1iZXJEYXkpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza3NEaWN0aW9uYXJ5ID0gdGFza3NDb250cm9sbGVyLmdldEFsbFRhc2tzKCk7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKGRhdGVDb250cm9sbGVyLmdldE5leHREYXlPZldlZWsobnVtYmVyRGF5KSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGFza3NEaWN0aW9uYXJ5KSB7XG4gICAgICBpZiAodGFza3NEaWN0aW9uYXJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhc2tzRGljdGlvbmFyeVtrZXldLmRhdGUgPT09XG4gICAgICAgICAgZGF0ZUNvbnRyb2xsZXIuZ2V0TmV4dERheU9mV2VlayhudW1iZXJEYXkpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGFza0NvbXBvbmVudC5zZXRVcChrZXksIHRhc2tzRGljdGlvbmFyeVtrZXldKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3NDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROdW1iZXJEYXkoZGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1vbmRheTogMCxcbiAgICAgIFR1ZXNkYXk6IDEsXG4gICAgICBXZWRuZXNkYXk6IDIsXG4gICAgICBUaHVyc2RheTogMyxcbiAgICAgIEZyaWRheTogNCxcbiAgICAgIFNhdHVyZGF5OiA1LFxuICAgICAgU3VuZGF5OiA2LFxuICAgIH1bZGF5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJsb2NrZXIoKSB7XG4gICAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlclwiKTtcbiAgICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2Vla0NvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgZGF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFza01lbnVcIjtcblxuY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza01lbnUpO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tCdXR0b247XG4gIH07XG5cbiAgZnVuY3Rpb24gb3BlblRhc2tNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2socGFyZW50KTtcbiAgICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9ja2VyXCIpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tNZW51Q29tcG9uZW50LnNldFVwKG51bGwsIHRhc2spKTtcbiAgICBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGFzayhwYXJlbnQpIHtcbiAgICBsZXQgdGFzayA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gICAgICBwcmlvcml0eTogXCI0XCIsXG4gICAgICBkYXRlOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgfTtcblxuICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kYXktY29udGFpbmVyXCIpKSB7XG4gICAgICB0YXNrLmRhdGUgPSBkYXRlQ29udHJvbGxlci5nZXRUb2RheURhdGUoKTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXktY29udGFpbmVyXCIpKSB7XG4gICAgICB2YXIgZGF5T2ZXZWVrID0gQXJyYXkuZnJvbShwYXJlbnQucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihwYXJlbnQpO1xuICAgICAgdGFzay5kYXRlID0gZGF0ZUNvbnRyb2xsZXIuZ2V0TmV4dERheU9mV2VlayhkYXlPZldlZWspO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGFkZE5ld1Rhc2tCdXR0b24gfTtcbiIsImltcG9ydCB7IHRhc2tzQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi91dGlscy90YXNrc0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFza01lbnVcIjtcblxuY29uc3QgdGFza0NvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKHRhc2tJZCwgdGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tDaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRhc2tFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYXNrTWVudSk7XG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGBpZCR7dGFza0lkfWA7XG5cbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrQ2hlY2tib3hCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3gtYnV0dG9uXCIpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICB0YXNrUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwidGFzay1wcm9qZWN0XCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdC1idXR0b25cIik7XG4gICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYnV0dG9uXCIpO1xuXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuXG4gICAgdGFza0NoZWNrYm94QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFByaW9yaXR5Q29sb3IodGFzay5wcmlvcml0eSk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveEJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xuICAgIGlmICh0YXNrRGF0ZS50ZXh0Q29udGVudCAhPT0gXCJcIikgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAodGFza0lkLCB0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpZCR7dGFza0lkfWApO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tDaGVja2JveEJ1dHRvbiA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnRhc2stY2hlY2tib3gtYnV0dG9uXCJcbiAgICApO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJvamVjdFwiKTtcbiAgICBjb25zdCB0YXNrRWRpdEJ1dHRvbiA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXQtYnV0dG9uXCIpO1xuXG4gICAgbGV0IHRhc2tEYXRlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKTtcblxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICB0YXNrUHJvamVjdC50ZXh0Q29udGVudCA9IHRhc2sucHJvamVjdDtcbiAgICB0YXNrQ2hlY2tib3hCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0UHJpb3JpdHlDb2xvcih0YXNrLnByaW9yaXR5KTtcblxuICAgIGlmICh0YXNrRGF0ZSAhPT0gbnVsbCkgdGFza0RhdGUucmVtb3ZlKCk7XG5cbiAgICB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICBpZiAodGFza0RhdGUudGV4dENvbnRlbnQgIT09IFwiXCIpXG4gICAgICB0YXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrRGF0ZSwgdGFza0VkaXRCdXR0b24pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9wZW5UYXNrTWVudShldmVudCkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaWQgPSB0YXNrQ29udGFpbmVyLmlkO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrc0NvbnRyb2xsZXIuZ2V0VGFzayhpZC5zdWJzdHJpbmcoMikpO1xuXG4gICAgY29uc3QgdGFza01lbnUgPSB0YXNrTWVudUNvbXBvbmVudC5zZXRVcChpZCwgdGFzayk7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XG5cbiAgICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9ja2VyXCIpO1xuXG4gICAgdGFza3NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tNZW51LCB0YXNrQ29udGFpbmVyLm5leHRTaWJsaW5nKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGJsb2NrZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcmlvcml0eUNvbG9yKHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHsgMTogXCJyZWRcIiwgMjogXCJvcmFuZ2VcIiwgMzogXCJibHVlXCIsIDQ6IFwiXCIgfVtwcmlvcml0eV07XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCwgdXBkYXRlVGFzayB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFza0NvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgdGFza3NDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Rhc2tzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGFza0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgdGFza01lbnVDb21wb25lbnQgPSAoKCkgPT4ge1xuICBsZXQgYWN0dWFsSWQgPSBudWxsO1xuICBsZXQgYWN0dWFsVGFzayA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAoaWQsIHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBhY3R1YWxJZCA9IGlkO1xuICAgIGFjdHVhbFRhc2sgPSB0YXNrO1xuXG4gICAgdGFza01lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbWVudS1jb250YWluZXJcIik7XG5cbiAgICB0YXNrTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrTmFtZUNvbnRhaW5lcigpKTtcbiAgICB0YXNrTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrRmVhdHVyZXNDb250YWluZXIoKSk7XG4gICAgdGFza01lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyKCkpO1xuICAgIHRhc2tNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2tCdXR0b25zQ29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIHRhc2tNZW51Q29udGFpbmVyO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tOYW1lQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIG5ld1Rhc2tOYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1uYW1lLWNvbnRhaW5lclwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10YXNrLW5hbWVcIik7XG4gICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9IGFjdHVhbFRhc2submFtZTtcblxuICAgIG5ld1Rhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBuZXdUYXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcblxuICAgIHJldHVybiBuZXdUYXNrTmFtZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBuZXdUYXNrRmVhdHVyZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stZmVhdHVyZXMtY29udGFpbmVyXCIpO1xuXG4gICAgbmV3VGFza0ZlYXR1cmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RTZWxlY3Rpb24oKSk7XG4gICAgbmV3VGFza0ZlYXR1cmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5U2VsZWN0aW9uKCkpO1xuICAgIG5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEdWVEYXRlKCkpO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tGZWF0dXJlc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tEZXNjcmlwdGlvbkNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25BcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1hcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uQXJlYS52YWx1ZSA9IGFjdHVhbFRhc2suZGVzY3JpcHRpb247XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQXJlYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b25zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjb25maXJtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stYnV0dG9ucy1jb250YWluZXJcIik7XG4gICAgY2FuY2VsQWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29uZmlybS1hZGQtdGFzay1idXR0b25cIik7XG5cbiAgICBjYW5jZWxBZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuXG4gICAgY2FuY2VsQWRkVGFza0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb25maXJtQWRkVGFza0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIGlmIChhY3R1YWxJZCA9PT0gbnVsbCkge1xuICAgICAgY2FuY2VsQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVRhc2tNZW51RnJvbU5ldyk7XG4gICAgICBjb25maXJtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrTWVudUZyb21VcGRhdGUpO1xuICAgICAgY29uZmlybUFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRhc2spO1xuICAgIH1cblxuICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEFkZFRhc2tCdXR0b24pO1xuICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1BZGRUYXNrQnV0dG9uKTtcblxuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgYWN0dWFsVGFzayA9IHVwZGF0ZUFjdHVhbFRhc2soKTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0lkID0gdGFza3NDb250cm9sbGVyLmNyZWF0ZVRhc2soYWN0dWFsVGFzayk7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50LnNldFVwKHRhc2tJZCwgYWN0dWFsVGFzaykpO1xuXG4gICAgaGlkZVRhc2tNZW51RnJvbU5ldygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFzaygpIHtcbiAgICBhY3R1YWxUYXNrID0gdXBkYXRlQWN0dWFsVGFzaygpO1xuXG4gICAgdGFza3NDb250cm9sbGVyLnVwZGF0ZVRhc2soYWN0dWFsSWQuc3Vic3RyaW5nKDIpLCBhY3R1YWxUYXNrKTtcbiAgICB0YXNrQ29tcG9uZW50LnVwZGF0ZVRhc2soYWN0dWFsSWQuc3Vic3RyaW5nKDIpLCBhY3R1YWxUYXNrKTtcblxuICAgIGhpZGVUYXNrTWVudUZyb21VcGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdHVhbFRhc2soKSB7XG4gICAgY29uc3QgbmV3QWN0dWFsVGFzayA9IGFjdHVhbFRhc2s7XG5cbiAgICBjb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLW5hbWVcIik7XG4gICAgY29uc3QgcHJvamVjdHNTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1zZWxlY3RcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRhdGUtaW5wdXRcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLWFyZWFcIik7XG5cbiAgICBuZXdBY3R1YWxUYXNrLm5hbWUgPSBpbnB1dFRhc2tOYW1lLnZhbHVlO1xuICAgIG5ld0FjdHVhbFRhc2sucHJvamVjdCA9IHByb2plY3RzU2VsZWN0aW9uLnZhbHVlO1xuICAgIG5ld0FjdHVhbFRhc2sucHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdGlvbi52YWx1ZTtcbiAgICBuZXdBY3R1YWxUYXNrLmRhdGUgPSBkdWVEYXRlLnZhbHVlO1xuICAgIG5ld0FjdHVhbFRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIHJldHVybiBuZXdBY3R1YWxUYXNrO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRhc2tNZW51RnJvbU5ldygpIHtcbiAgICBjb25zdCB0YXNrTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tZW51LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tlclwiKTtcblxuICAgIHRhc2tNZW51Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUYXNrTWVudUZyb21VcGRhdGUoKSB7XG4gICAgY29uc3QgdGFza01lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbWVudS1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FjdHVhbElkfWApO1xuICAgIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrZXJcIik7XG5cbiAgICB0YXNrTWVudUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcm9qZWN0c1NlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3RcIik7XG5cbiAgICBwcm9qZWN0c1NlbGVjdGlvbi5hZGQobmV3IE9wdGlvbihcIkluYm94XCIsIFwiSW5ib3hcIikpO1xuXG4gICAgcHJvamVjdHNTZWxlY3Rpb24udmFsdWUgPSBhY3R1YWxUYXNrLnByb2plY3Q7XG5cbiAgICByZXR1cm4gcHJvamVjdHNTZWxlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXNlbGVjdFwiKTtcblxuICAgIHByaW9yaXR5U2VsZWN0aW9uLmFkZChuZXcgT3B0aW9uKFwiUHJpb3JpdHkgMVwiLCAxKSk7XG4gICAgcHJpb3JpdHlTZWxlY3Rpb24uYWRkKG5ldyBPcHRpb24oXCJQcmlvcml0eSAyXCIsIDIpKTtcbiAgICBwcmlvcml0eVNlbGVjdGlvbi5hZGQobmV3IE9wdGlvbihcIlByaW9yaXR5IDNcIiwgMykpO1xuICAgIHByaW9yaXR5U2VsZWN0aW9uLmFkZChuZXcgT3B0aW9uKFwiUHJpb3JpdHkgNFwiLCA0KSk7XG5cbiAgICBwcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9IGFjdHVhbFRhc2sucHJpb3JpdHk7XG5cbiAgICByZXR1cm4gcHJpb3JpdHlTZWxlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEdWVEYXRlKCkge1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLWlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG5cbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhY3R1YWxUYXNrLmRhdGU7XG5cbiAgICByZXR1cm4gZHVlRGF0ZUlucHV0O1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tNZW51Q29tcG9uZW50IH07XG4iLCJjb25zdCBkYXRlQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIHZhciBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHREYXlPZldlZWsoZGF5T2ZXZWVrKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgY3VycmVudERheSA9IHRvZGF5LmdldERheSgpO1xuXG4gICAgdmFyIGRpc3RhbmNlID0gKGRheU9mV2VlayArIDcgLSBjdXJyZW50RGF5ICsgMSkgJSA3O1xuXG4gICAgdG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyBkaXN0YW5jZSk7XG5cbiAgICB2YXIgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgdmFyIGRheSA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICAgIHZhciBmb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcblxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0VG9kYXlEYXRlLCBnZXROZXh0RGF5T2ZXZWVrIH07XG59KSgpO1xuXG5leHBvcnQgeyBkYXRlQ29udHJvbGxlciB9O1xuIiwiY29uc3QgcHJvamVjdHNDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHRvdGFsUHJvamVjdHMgPSAwO1xuICBsZXQgcHJvamVjdHNEaWN0aW9uYXJ5ID0ge307XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3QgPSB7XG4gICAgICBuYW1lOiBcIlByb2plY3QgMVwiLFxuICAgIH07XG4gICAgcHJvamVjdHNEaWN0aW9uYXJ5W3RvdGFsUHJvamVjdHNdID0gcHJvamVjdDtcbiAgICB0b3RhbFByb2plY3RzID0gMTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSB0b3RhbFByb2plY3RzO1xuICAgIHByb2plY3RzRGljdGlvbmFyeVt0b3RhbFByb2plY3RzXSA9IHByb2plY3Q7XG4gICAgdG90YWxQcm9qZWN0cysrO1xuXG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGlkLCBwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNEaWN0aW9uYXJ5W2lkXSA9IHByb2plY3Q7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0c0RpY3Rpb25hcnlbaWRdO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBkZWxldGUgcHJvamVjdHNEaWN0aW9uYXJ5W2lkXTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHNEaWN0aW9uYXJ5O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VXAsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGdldFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBnZXRBbGxQcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzQ29udHJvbGxlciB9O1xuIiwiY29uc3QgdGFza3NDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHRvdGFsVGFza3MgPSAwO1xuICBsZXQgdGFza3NEaWN0aW9uYXJ5ID0ge307XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2sgPSB7XG4gICAgICBuYW1lOiBcIkhlbGxvXCIsXG4gICAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gICAgICBwcmlvcml0eTogXCIxXCIsXG4gICAgICBkYXRlOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQnllISFcIixcbiAgICB9O1xuICAgIHRhc2tzRGljdGlvbmFyeVt0b3RhbFRhc2tzXSA9IHRhc2s7XG4gICAgdG90YWxUYXNrcyA9IDE7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0lkID0gdG90YWxUYXNrcztcbiAgICB0YXNrc0RpY3Rpb25hcnlbdG90YWxUYXNrc10gPSB0YXNrO1xuICAgIHRvdGFsVGFza3MrKztcbiAgICByZXR1cm4gdGFza0lkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaWQsIHRhc2spID0+IHtcbiAgICB0YXNrc0RpY3Rpb25hcnlbaWRdID0gdGFzaztcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzRGljdGlvbmFyeVtpZF07XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgIGRlbGV0ZSB0YXNrc0RpY3Rpb25hcnlbaWRdO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrc0RpY3Rpb25hcnk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAsIGNyZWF0ZVRhc2ssIHVwZGF0ZVRhc2ssIGdldFRhc2ssIGRlbGV0ZVRhc2ssIGdldEFsbFRhc2tzIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrc0NvbnRyb2xsZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IG1haW5EaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbkRpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tIFwiLi91dGlscy9wcm9qZWN0c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tzQ29udHJvbGxlciB9IGZyb20gXCIuL3V0aWxzL3Rhc2tzQ29udHJvbGxlclwiO1xuXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy93ZWVrLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL3Rhc2suY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvdGFza01lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuXG5wcm9qZWN0c0NvbnRyb2xsZXIuc2V0VXAoKTtcbnRhc2tzQ29udHJvbGxlci5zZXRVcCgpO1xubWFpbkRpc3BsYXlDb250cm9sbGVyLnNldFVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=