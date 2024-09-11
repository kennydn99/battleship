/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General styles */\nbody {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n}\n\n.board-container {\n  display: flex;\n  gap: 36px;\n}\n\n.heading {\n  font-size: 2.5rem;\n}\n\n.real-board,\n.computer-board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); /* Adjust cell size as needed */\n  grid-template-rows: repeat(10, 40px); /* Adjust cell size as needed */\n  gap: 2px; /* Space between cells */\n  border: 1px solid #000;\n  background-color: #fff;\n}\n\n.board-cell {\n  width: 38px; /* Cell width */\n  height: 38px; /* Cell height */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ddd;\n  border: 1px solid #acaaaa;\n  cursor: pointer;\n}\n\n.cell-occupied {\n  background-color: #4caf50; /* Occupied cell color */\n}\n\n.cell-hit {\n  background-color: #e44d4d; /* Occupied cell color */\n}\n\n.cell-miss {\n  background-color: #5994e2; /* Occupied cell color */\n}\n\n.computer-board .board-cell.cell-occupied {\n  background-color: #ddd;\n}\n\n/* Button container styles */\nbutton {\n  margin: 10px; /* Space between buttons */\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  background-color: #007bff;\n  color: #fff;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\n/* Center buttons below boards */\n.buttons-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5); /* Slightly grayed-out background */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000; /* Make sure it's on top of everything */\n}\n\n/* Modal content */\n.modal {\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 300px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.modal p {\n  font-size: 1.2em;\n  margin-bottom: 20px;\n}\n\n.modal button {\n  padding: 10px 20px;\n  margin: 10px;\n  border: none;\n  border-radius: 4px;\n  background-color: #007bff;\n  color: white;\n  cursor: pointer;\n}\n\n.modal button:hover {\n  background-color: #0056b3;\n}\n\n.ship-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 250px;\n}\n\n.ship-select {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n\n/* Style for each ship container */\n.ship {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  margin-right: 8px;\n  cursor: grab;\n}\n\n/* Style for each segment of the ship to match board cells */\n.ship-cell {\n  width: 38px; /* Match the width of a board cell */\n  height: 38px; /* Match the height of a board cell */\n  background-color: #4caf50; /* Or whatever matches your board cell style */\n  border: 1px solid black;\n  display: inline-block;\n  margin-right: 2px;\n  margin-bottom: 2px;\n}\n\n.ship.dragging {\n  opacity: 0.5;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst dom = {\n  game: null,\n\n  isHorizontal: true,\n\n  init() {\n    // Clear existing content\n    document.body.innerHTML = '';\n\n    // Create heading section\n    const heading = document.createElement('div');\n    heading.classList.add('heading');\n    heading.textContent = 'battlesh!p';\n    document.body.appendChild(heading);\n\n    // Create and setup player and computer game boards in the DOM\n    const boardContainer = document.createElement('div');\n    boardContainer.classList.add('board-container');\n\n    const playerBoardContainer = document.createElement('div');\n    playerBoardContainer.classList.add('real-board-container');\n    const computerBoardContainer = document.createElement('div');\n    computerBoardContainer.classList.add('computer-board-container');\n\n    boardContainer.appendChild(playerBoardContainer);\n    boardContainer.appendChild(computerBoardContainer);\n    document.body.appendChild(boardContainer);\n\n    // Create game controls\n    const buttonsContainer = document.createElement('div');\n    buttonsContainer.classList.add('buttons-container');\n    const startGame = document.createElement('button');\n    startGame.classList.add('start-game-btn');\n    startGame.textContent = 'Start Game!';\n    buttonsContainer.appendChild(startGame);\n\n    const resetGame = document.createElement('button');\n    resetGame.classList.add('reset-game-btn');\n    resetGame.textContent = 'Reset Game!';\n    buttonsContainer.appendChild(resetGame);\n    document.body.appendChild(buttonsContainer);\n\n    // Setup event listeners\n    this.setupButtonEventListeners();\n  },\n\n  renderBoard(board, playerType) {\n    // Create Board Container\n    const boardContainer = document.createElement('div');\n    boardContainer.classList.add(`${playerType}-board`);\n\n    // Render board cells\n    board.forEach((row, rowIndex) => {\n      row.forEach((cell, colIndex) => {\n        const cellElement = document.createElement('div');\n        cellElement.classList.add('board-cell');\n\n        if (cell === 'hit') {\n          cellElement.classList.add('cell-hit');\n        } else if (cell === 'miss') {\n          cellElement.classList.add('cell-miss');\n        } else if (cell !== '') {\n          cellElement.classList.add('cell-occupied');\n        }\n\n        cellElement.dataset.row = rowIndex;\n        cellElement.dataset.col = colIndex;\n\n        boardContainer.appendChild(cellElement);\n      });\n    });\n\n    const parentElement = document.querySelector(\n      `.${playerType}-board-container`\n    );\n    parentElement.innerHTML = ''; // Clear previous content\n    parentElement.appendChild(boardContainer);\n  },\n\n  setupButtonEventListeners() {\n    const startButton = document.querySelector('.start-game-btn');\n    const resetButton = document.querySelector('.reset-game-btn');\n\n    startButton.addEventListener('click', () => this.startGame());\n    resetButton.addEventListener('click', () => this.resetGame());\n  },\n\n  setupBoardEventListeners() {\n    const computerBoardCells = document.querySelectorAll(\n      '.computer-board-container .board-cell'\n    );\n\n    computerBoardCells.forEach((cell) => {\n      cell.addEventListener('click', (event) => this.handleBoardClick(event));\n    });\n  },\n\n  handleBoardClick(event) {\n    const clickedCell = event.target;\n    const x = parseInt(clickedCell.dataset.row, 10);\n    const y = parseInt(clickedCell.dataset.col, 10);\n\n    // Check if position is already attacked\n    const { board } = this.game.computer.gameboard;\n    if (board[x][y] === 'hit' || board[x][y] === 'miss') {\n      return; // Exit early if this position was already attacked\n    }\n    // Player turn\n    this.game.playTurn(x, y);\n    this.renderBoard(\n      this.game.computer.gameboard.board,\n      this.game.computer.type\n    );\n    clickedCell.removeEventListener('click', this.handleBoardClick);\n\n    // Check if game is over after player turn\n    if (this.checkForGameOver()) return;\n\n    // delay computer turn\n    setTimeout(() => {\n      this.game.playTurn();\n      this.renderBoard(this.game.player.gameboard.board, this.game.player.type);\n      if (!this.checkForGameOver()) this.setupBoardEventListeners();\n    }, 500);\n  },\n\n  checkForGameOver() {\n    if (this.game.isGameOver()) {\n      this.handleGameOver();\n      return true; // Return true to indicate the game is over\n    }\n    return false; // Return false to indicate the game is not over\n  },\n\n  handleGameOver() {\n    const winner = this.game.endGame().type === 'real' ? 'You' : 'Computer';\n\n    // Create modal overlay\n    const overlay = document.createElement('div');\n    overlay.classList.add('modal-overlay');\n\n    // Create modal content\n    const modal = document.createElement('div');\n    modal.classList.add('modal');\n\n    const winnerText = document.createElement('p');\n    winnerText.textContent = `GAME OVER! ${winner} won!`;\n\n    const playAgainButton = document.createElement('button');\n    playAgainButton.textContent = 'Play Again';\n    playAgainButton.addEventListener('click', () => {\n      document.body.removeChild(overlay); // Remove modal\n      this.resetGame(); // Reset game logic\n    });\n\n    const closeButton = document.createElement('button');\n    closeButton.textContent = 'Close';\n    closeButton.addEventListener('click', () => {\n      document.body.removeChild(overlay); // Close modal\n    });\n\n    // Append elements to modal\n    modal.appendChild(winnerText);\n    modal.appendChild(playAgainButton);\n    modal.appendChild(closeButton);\n\n    // Append modal to overlay\n    overlay.appendChild(modal);\n\n    // Append overlay to the body\n    document.body.appendChild(overlay);\n  },\n\n  startGame() {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.game.startGame();\n    this.renderSetupGame();\n\n    // remove start game btn\n    const startButton = document.querySelector('.start-game-btn');\n    startButton.remove();\n  },\n\n  resetGame() {\n    this.game = null;\n    this.init();\n  },\n\n  renderSetupGame() {\n    const boardContainer = document.querySelector('.board-container');\n\n    // render blank player gameboard\n    this.renderBoard(this.game.player.gameboard.board, this.game.player.type);\n\n    // Wrapper for ship selection\n    const shipContainer = document.createElement('div');\n    shipContainer.classList.add('ship-container');\n\n    // Create and render ship selection\n    const shipSelection = document.createElement('div');\n    shipSelection.classList.add('ship-select');\n\n    // Create ships\n    const shipSizes = [5, 4, 3, 3, 2];\n\n    shipSizes.forEach((size, index) => {\n      const shipElement = document.createElement('div');\n      shipElement.classList.add('ship');\n      shipElement.dataset.size = size;\n      shipElement.draggable = true;\n      shipElement.id = `ship-${size}-${index}`;\n\n      // Create each segment of the ship to look like board cells\n      for (let i = 0; i < size; i++) {\n        const shipSegment = document.createElement('div');\n        shipSegment.classList.add('ship-cell');\n        shipElement.appendChild(shipSegment);\n      }\n\n      // Add drag event listeners\n      shipElement.addEventListener('dragstart', (e) => {\n        e.dataTransfer.setData('text/plain', size);\n\n        // Store the dragged element reference\n        e.dataTransfer.setData('shipElementId', e.target.id);\n      });\n\n      shipSelection.appendChild(shipElement);\n    });\n    shipContainer.appendChild(shipSelection);\n\n    const rotateButton = document.createElement('button');\n    rotateButton.classList.add('rotate-btn');\n    rotateButton.textContent = 'Rotate';\n    rotateButton.addEventListener('click', () => {\n      this.rotateShips(); // Rotate ships logic\n    });\n    shipContainer.appendChild(rotateButton);\n\n    boardContainer.appendChild(shipContainer);\n    // Enable dropping on player board\n    this.setupPlayerBoardForShipPlacement();\n  },\n\n  setupPlayerBoardForShipPlacement() {\n    const playerBoardCells = document.querySelectorAll(\n      '.real-board .board-cell'\n    );\n\n    playerBoardCells.forEach((cell) => {\n      cell.addEventListener('dragover', (e) => {\n        e.preventDefault(); // Allow drop\n      });\n\n      cell.addEventListener('drop', (e) => {\n        e.preventDefault();\n        const shipSize = e.dataTransfer.getData('text/plain');\n        const row = parseInt(e.target.dataset.row, 10);\n        const col = parseInt(e.target.dataset.col, 10);\n\n        try {\n          // Place the ship at the dropped coordinates\n          const shipPlaced = this.game.player.gameboard.placeShip(\n            new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](parseInt(shipSize, 10)),\n            row,\n            col,\n            this.isHorizontal // Determine if the ship is vertical\n          );\n\n          if (shipPlaced) {\n            // Remove selected ship from ship selection\n            const shipElementId = e.dataTransfer.getData('shipElementId');\n            const shipNode = document.getElementById(shipElementId);\n            if (shipNode) {\n              shipNode.remove(); // Remove the ship from the selection\n            }\n            // Re-render board with ship placed\n            this.renderBoard(\n              this.game.player.gameboard.board,\n              this.game.player.type\n            );\n\n            this.setupPlayerBoardForShipPlacement();\n\n            const remainingShips =\n              document.querySelectorAll('.ship-select .ship');\n            if (remainingShips.length === 0) {\n              // Optionally, you can disable further placements or start the game\n              const rotateButton = document.querySelector('.rotate-btn');\n              rotateButton.remove();\n\n              const playButton = document.createElement('button');\n              playButton.textContent = 'Play Game!';\n              playButton.addEventListener('click', () => this.playGame());\n\n              const shipSelection = document.querySelector('.ship-select');\n              shipSelection.appendChild(playButton);\n            }\n          }\n        } catch (error) {\n          console.error(error.message);\n        }\n      });\n    });\n  },\n\n  playGame() {\n    // hide ship container\n    const shipContainer = document.querySelector('.ship-container');\n    shipContainer.remove();\n    // place computer ships\n    this.game.setupComputerBoard();\n    // render computer board\n    this.renderBoard(\n      this.game.computer.gameboard.board,\n      this.game.computer.type\n    );\n\n    this.setupBoardEventListeners();\n  },\n\n  rotateShips() {\n    this.isHorizontal = !this.isHorizontal; // Toggle vertical or horizontal placement\n\n    // Rotate ships in the ship selection\n    const shipSelection = document.querySelector('.ship-select');\n    const ships = document.querySelectorAll('.ship');\n\n    if (!this.isHorizontal) {\n      shipSelection.style.flexDirection = 'row';\n      ships.forEach((ship) => {\n        const shipElement = ship; // Create a new reference\n        shipElement.style.flexDirection = 'column';\n      });\n    } else {\n      shipSelection.style.flexDirection = 'column';\n      ships.forEach((ship) => {\n        const shipElement = ship; // Create a new reference\n        shipElement.style.flexDirection = 'row';\n      });\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.player = null;\n    this.computer = null;\n    this.currentTurn = null;\n  }\n\n  startGame() {\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('real');\n    this.computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('computer');\n    this.currentTurn = this.player;\n  }\n\n  setupComputerBoard() {\n    // Place ships randomly for computer board\n    const computerShips = [\n      new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5),\n      new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4),\n      new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\n      new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\n      new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2),\n    ];\n\n    computerShips.forEach((ship) => {\n      let placed = false;\n      while (!placed) {\n        const isHorizontal = Math.random() < 0.5;\n        const startX = Math.floor(\n          Math.random() * this.computer.gameboard.board.length\n        );\n        const startY = Math.floor(\n          Math.random() * this.computer.gameboard.board[0].length\n        );\n\n        try {\n          placed = this.computer.gameboard.placeShip(\n            ship,\n            startX,\n            startY,\n            isHorizontal\n          );\n        } catch (error) {\n          placed = false;\n        }\n      }\n    });\n  }\n\n  playTurn(x, y) {\n    if (this.currentTurn === this.player) {\n      this.handlePlayerAttack(x, y);\n    } else if (this.currentTurn === this.computer) this.handleComputerAttack();\n  }\n\n  handlePlayerAttack(x, y) {\n    this.player.attack(this.computer, x, y);\n    if (this.isGameOver()) {\n      this.endGame();\n    } else {\n      this.switchTurn();\n    }\n  }\n\n  handleComputerAttack() {\n    this.computer.randomAttack(this.player);\n    if (this.isGameOver()) {\n      this.endGame();\n    } else {\n      this.switchTurn();\n    }\n  }\n\n  isGameOver() {\n    return (\n      this.player.gameboard.allShipsSunk() ||\n      this.computer.gameboard.allShipsSunk()\n    );\n  }\n\n  switchTurn() {\n    this.currentTurn =\n      this.currentTurn === this.player ? this.computer : this.player;\n  }\n\n  endGame() {\n    if (this.player.gameboard.allShipsSunk()) return this.computer;\n    return this.player;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.board = Array(10)\n      .fill(null)\n      .map(() => Array(10).fill(''));\n    this.ships = [];\n  }\n\n  placeShip(ship, startX, startY, horizontal) {\n    // Check if starting coordinates are within board boundaries\n    const boardHeight = this.board.length;\n    const boardWidth = this.board[0].length;\n    if (startX < 0 || startX > boardHeight || startY < 0 || startY > boardWidth)\n      throw new Error('Not a valid position!');\n\n    if (horizontal) {\n      // Check if the ship fits horizontally within the board\n      if (startY + ship.length > boardWidth)\n        throw new Error('Not a valid position!');\n\n      // Check if any of the cells where the ship will be placed are already occupied\n      for (let i = 0; i < ship.length - 1; i++) {\n        if (this.board[startX][startY + i] !== '')\n          throw new Error('Not a valid position!');\n      }\n\n      // Place ship on board\n      for (let i = 0; i < ship.length; i++) {\n        this.board[startX][startY + i] = ship;\n      }\n    } else {\n      // Check if the ship fits vertically within the board\n      if (startX + ship.length > boardHeight)\n        throw new Error('Not a valid position!');\n\n      // Check if any of the cells where the ship will be placed are already occupied\n      for (let i = 0; i < ship.length; i++) {\n        if (this.board[startX + i][startY] !== '')\n          throw new Error('Not a valid position!');\n      }\n\n      // Place the ship\n      for (let i = 0; i < ship.length; i++) {\n        this.board[startX + i][startY] = ship;\n      }\n    }\n\n    this.ships.push(ship);\n    return true;\n  }\n\n  receiveAttack(x, y) {\n    if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[0].length)\n      throw new Error('Not a valid attack!');\n\n    if (this.board[x][y] === 'hit' || this.board[x][y] === 'miss') {\n      throw new Error('Position already attacked!');\n    }\n\n    if (this.board[x][y] !== '') {\n      const ship = this.board[x][y];\n      ship.hit();\n      this.board[x][y] = 'hit';\n    } else {\n      this.board[x][y] = 'miss';\n    }\n  }\n\n  allShipsSunk() {\n    if (this.ships.length === 0) return false;\n    return this.ships.every((ship) => ship.isSunk());\n  }\n\n  // Add a getter for position on board\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n  constructor(type) {\n    this.type = type;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.availablePositions = this.initializeAvailablePositions();\n  }\n\n  getType() {\n    return this.type;\n  }\n\n  attack(opponent, x, y) {\n    if (this.type === 'real') {\n      opponent.gameboard.receiveAttack(x, y);\n    } else if (this.type === 'computer') {\n      // Make computer smarter later\n      opponent.gameboard.receiveAttack(x, y);\n    }\n\n    this.updateAvailablePositions(x, y);\n  }\n\n  initializeAvailablePositions() {\n    const positions = [];\n    for (let x = 0; x < this.gameboard.board.length; x++) {\n      for (let y = 0; y < this.gameboard.board[0].length; y++) {\n        positions.push([x, y]);\n      }\n    }\n    return positions;\n  }\n\n  updateAvailablePositions(x, y) {\n    // Find the index of the attacked position and remove it from availablePositions\n    const index = this.availablePositions.findIndex(\n      (pos) => pos[0] === x && pos[1] === y\n    );\n    if (index !== -1) {\n      this.availablePositions.splice(index, 1);\n    }\n  }\n\n  randomAttack(opponent) {\n    if (this.availablePositions.length === 0) {\n      return;\n    }\n    const randomIndex = Math.floor(\n      Math.random() * this.availablePositions.length\n    );\n    const [x, y] = this.availablePositions[randomIndex];\n\n    this.attack(opponent, x, y);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n  }\n\n  hit() {\n    this.hits += 1;\n  }\n\n  isSunk() {\n    return this.hits === this.length;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;