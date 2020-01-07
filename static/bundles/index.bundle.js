/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index.bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./scripts/index.js","vendors.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Drawer__List.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__List.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Drawer__ListItem.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__ListItem.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
// Module
exports.push([module.i, ".nav-drawer {\n    position: absolute;\n    top: 56px;\n    bottom: 0;\n    left: 0;\n    display: block;\n    width: 0;\n    height: auto;\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n    z-index: 1;\n    background-color: white;\n    overflow-y: auto;\n    opacity: 0;\n    pointer-events: none;\n    will-change: width, opacity;\n    transition: width 0.2s ease-in, opacity 0.2s ease-in;\n    box-shadow: 0 1px 3px #757575;\n}\n\n.open {\n    width: 60%;\n    opacity: 1;\n    pointer-events: auto;\n}\n\n@media screen and (min-width: 768px) {\n    .open {\n        width: 20%;\n        opacity: 1;\n        pointer-events: auto;\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__List.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__List.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Drawer__List {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    word-wrap: normal;\n}\n\n.Drawer__List .collapsed>li {\n    display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__ListItem.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer__ListItem.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Drawer__ListItem a:hover, .Drawer__ListItem p:hover {\n    background: #BBDEFB;\n}\n\n.Drawer__ListItem a {\n    display: block;\n    height: 3em;\n    line-height: 3em;\n    color: #2979ff;\n    font-size: 1em;\n    text-decoration: none;\n}\n\n.ListItem__emoji {\n    position: absolute;\n    left: 1em;\n    font-family: monospace;\n}\n\n.ListItem__title {\n    position: absolute;\n    left: 3em;\n    font-family: Arial, Helvetica, sans-serif;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/app.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/app.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Drawer.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/Drawer.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/content.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./toolbar.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/toolbar.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
// Module
exports.push([module.i, "\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/content.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/content.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  background-color: #F5F5F5;\n  z-index: 0;\n  transition: all 0.2s ease;\n}\n\n.content {\n  position: fixed;\n  top: 56px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  background-color: #eeeeee;\n  z-index: 0;\n  font-size: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: dodgerblue;\n}\n\n.content li {\n  word-wrap: break-word;\n}\n\n.content li p{\n  margin: 0.5rem 0.5rem 0.5rem 0;\n}\n\n.content p {\n  margin: 0.5rem;\n  color: black;\n}\n\n.flex-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n  max-width: 768px;\n  min-height: 100vh;\n}\n\n.ViewTitle {\n  text-align: center;\n  letter-spacing: 1px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/toolbar.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/toolbar.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App__Toolbar {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    height: 56px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\n    z-index: 1;\n    background: #2196F3;\n}\n\n.App__Toolbar .toggle-btn {\n    float: left;\n    margin: 16px;\n    padding: 0;\n    border: 0;\n    outline-color: yellow;\n    background-color: transparent;\n}\n\n.App__Toolbar .toggle-btn .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n    margin-top: 4px;\n    background: white;\n}\n\n.App__Toolbar .brand-name {\n    color: white;\n    font-size: 1.3em;\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 56px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./scripts/components/Github.js":
/*!**************************************!*\
  !*** ./scripts/components/Github.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Github; });
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _RepoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RepoList */ "./scripts/components/RepoList.js");







/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

 // ES6



var urlForUsername = function urlForUsername(username) {
  return "https://api.github.com/users/".concat(username, "/repos");
};

var _ref =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {}, void 0, "Loading");

var _ref2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {}, void 0, "Network request failed...");

var Github =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Github, _Component);

  function Github(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Github);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Github).call(this, props));
    _this.state = {
      repos: [],
      loading: true,
      requestFailed: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Github, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(urlForUsername(this.props.username)).then(function (response) {
        if (!response.ok) {
          _this2.setState({
            requestFailed: true,
            loading: false
          });

          throw Error('Network request failed...');
        }

        response.json().then(function (data) {
          _this2.setState({
            repos: data,
            loading: false
          });
        });
      })["catch"](function (err) {
        _this2.setState({
          requestFailed: true,
          loading: false
        });

        console.warn(err.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return _ref;
      } else if (this.state.requestFailed) {
        return _ref2;
      } else {
        return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_RepoList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          repos: this.state.repos
        });
      }
    }
  }]);

  return Github;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


Github.propTypes = {
  username: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};

/***/ }),

/***/ "./scripts/components/Repo.js":
/*!************************************!*\
  !*** ./scripts/components/Repo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

 // ES6

var Repo = function Repo(_ref) {
  var id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      html_url = _ref.html_url;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("li", {
    className: "repo",
    id: id,
    title: name
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("h3", {
    className: "repo__name"
  }, void 0, name), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
    className: "repo__description"
  }, void 0, "Description: ", description || 'Not Available for this Repo'), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
    className: "repo__html_url"
  }, void 0, "Url:", _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("a", {
    href: html_url,
    rel: "noopener",
    target: "_blank"
  }, void 0, html_url)));
};

Repo.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  html_url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Repo);

/***/ }),

/***/ "./scripts/components/RepoList.js":
/*!****************************************!*\
  !*** ./scripts/components/RepoList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Repo */ "./scripts/components/Repo.js");



/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

 // ES6



var RepoList = function RepoList(_ref) {
  var repos = _ref.repos;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("ul", {
    className: "RepoList"
  }, void 0, repos.sort(function (a, b) {
    return b.id - a.id;
  }).map(function (repo, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Repo__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      key: i
    }, repo));
  }));
};

RepoList.propTypes = {
  repos: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RepoList);

/***/ }),

/***/ "./scripts/components/Views.js":
/*!*************************************!*\
  !*** ./scripts/components/Views.js ***!
  \*************************************/
/*! exports provided: View1, View2, View3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View1", function() { return View1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View2", function() { return View2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View3", function() { return View3; });
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Github */ "./scripts/components/Github.js");




var _ref =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  id: "View1",
  className: "wrapper"
}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  className: "ViewTitle"
}, void 0, "View 1"), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Github__WEBPACK_IMPORTED_MODULE_2__["default"], {
  username: "giovanni0918"
}));

var View1 = function View1() {
  return _ref;
};

var _ref2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  id: "View2",
  className: "wrapper"
}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  className: "ViewTitle"
}, void 0, "View 2"), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Github__WEBPACK_IMPORTED_MODULE_2__["default"], {
  username: "juan1003"
}));

var View2 = function View2() {
  return _ref2;
};

var _ref3 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  id: "View3",
  className: "wrapper"
}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  className: "ViewTitle"
}, void 0, "View 3"), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Github__WEBPACK_IMPORTED_MODULE_2__["default"], {
  username: "marcmaceira"
}));

var View3 = function View3() {
  return _ref3;
};



/***/ }),

/***/ "./scripts/components/common/Drawer.js":
/*!*********************************************!*\
  !*** ./scripts/components/common/Drawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _list_items_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list-items.js */ "./scripts/list-items.js");


/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


 // ES6



var Drawer = function Drawer(_ref) {
  var callback = _ref.callback,
      open = _ref.open;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("aside", {
    className: open ? 'nav-drawer open' : 'nav-drawer'
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("nav", {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("ul", {
    className: "Drawer__List"
  }, void 0, _list_items_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (li, i) {
    return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("li", {
      className: "Drawer__ListItem"
    }, i, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: li.href,
      onClick: callback
    }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
      className: "ListItem__emoji"
    }, void 0, li.emoji), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
      className: "ListItem__title"
    }, void 0, li.title)));
  }))));
};

Drawer.propTypes = {
  callback: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./scripts/components/common/DrawerLayout.js":
/*!***************************************************!*\
  !*** ./scripts/components/common/DrawerLayout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerLayout; });
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Views */ "./scripts/components/Views.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Drawer */ "./scripts/components/common/Drawer.js");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Toolbar */ "./scripts/components/common/Toolbar.js");








/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/






__webpack_require__(/*! ../../../static/styles/app.css */ "./static/styles/app.css");

var _ref =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  exact: true,
  path: "/react-starter-kit/",
  component: _Views__WEBPACK_IMPORTED_MODULE_9__["View1"]
});

var _ref2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/react-starter-kit/view2",
  component: _Views__WEBPACK_IMPORTED_MODULE_9__["View2"]
});

var _ref3 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/react-starter-kit/view3",
  component: _Views__WEBPACK_IMPORTED_MODULE_9__["View3"]
});

var DrawerLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(DrawerLayout, _Component);

  function DrawerLayout(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DrawerLayout);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(DrawerLayout).call(this, props));
    _this.state = {
      isDrawerOpen: false
    };
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.toggleDrawer = _this.toggleDrawer.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DrawerLayout, [{
    key: "toggleDrawer",
    value: function toggleDrawer(event) {
      this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.state.isDrawerOpen) {
        this.toggleDrawer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isDrawerOpen = this.state.isDrawerOpen;
      return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "React Starter Kit",
        onButtonClick: this.toggleDrawer
      }), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        className: "container"
      }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Drawer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: isDrawerOpen,
        callback: this.toggleDrawer
      }), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("main", {
        className: isDrawerOpen ? 'content toggled flex-center' : 'content flex-center',
        onClick: this.handleClick
      }, void 0, children, _ref, _ref2, _ref3))));
    }
  }]);

  return DrawerLayout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./scripts/components/common/Toolbar.js":
/*!**********************************************!*\
  !*** ./scripts/components/common/Toolbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


/*
MIT License

Copyright (c) 2019 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
 // ES6



var _ref2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  className: "icon-bar"
});

var _ref3 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  className: "icon-bar"
});

var _ref4 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  className: "icon-bar"
});

var Toolbar = function Toolbar(_ref) {
  var onButtonClick = _ref.onButtonClick,
      title = _ref.title;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("header", {
    className: "App__Toolbar "
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("button", {
    className: "toggle-btn",
    onClick: onButtonClick
  }, void 0, _ref2, _ref3, _ref4), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
    className: "brand-name"
  }, void 0, title));
};

Toolbar.propTypes = {
  onButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_DrawerLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/DrawerLayout */ "./scripts/components/common/DrawerLayout.js");




Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_DrawerLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {}), document.getElementById('app'));

/***/ }),

/***/ "./scripts/list-items.js":
/*!*******************************!*\
  !*** ./scripts/list-items.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var listItemsConfig = [{
  emoji: '🏠',
  title: 'View 1',
  href: '/react-starter-kit/'
}, {
  emoji: '✌️',
  title: 'View 2',
  href: '/react-starter-kit/view2'
}, {
  emoji: '🍃',
  title: 'View 3',
  href: '/react-starter-kit/view3'
}];
/* harmony default export */ __webpack_exports__["default"] = (listItemsConfig);

/***/ }),

/***/ "./static/styles/app.css":
/*!*******************************!*\
  !*** ./static/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./static/styles/app.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map