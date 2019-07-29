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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./public/src/index.js","vendors_main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/components/App.js":
/*!**************************************!*\
  !*** ./public/src/components/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCreate */ \"./public/src/components/UserCreate.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\n/* harmony import */ var _contexts_ColorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ColorContext */ \"./public/src/contexts/ColorContext.js\");\n/* harmony import */ var _LanuageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanuageSelector */ \"./public/src/components/LanuageSelector.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ui container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__[\"LanguageStore\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LanuageSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ColorContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: \"red\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9jb21wb25lbnRzL0FwcC5qcz81NWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlckNyZWF0ZSBmcm9tICcuL1VzZXJDcmVhdGUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTdG9yZSB9IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCc7XG5pbXBvcnQgQ29sb3JDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0NvbG9yQ29udGV4dCc7XG5pbXBvcnQgTGFuZ3VhZ2VTZWxjdG9yIGZyb20gJy4vTGFudWFnZVNlbGVjdG9yJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8TGFuZ3VhZ2VTdG9yZT5cbiAgICAgICAgICA8TGFuZ3VhZ2VTZWxjdG9yIC8+XG4gICAgICAgICAgPENvbG9yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT1cInJlZFwiPlxuICAgICAgICAgICAgPFVzZXJDcmVhdGUgLz5cbiAgICAgICAgICA8L0NvbG9yQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9MYW5ndWFnZVN0b3JlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQU1BOzs7O0FBWkE7QUFDQTtBQWNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/App.js\n");

/***/ }),

/***/ "./public/src/components/Button.js":
/*!*****************************************!*\
  !*** ./public/src/components/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jessehang/Desktop/react_context/public/src/components/Button.js: Unexpected token (13:16)\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mLanguageContext\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mConsumer\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m              {({ language }) \\u001b[33m=>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m                \\u001b[36mreturn\\u001b[39m language \\u001b[33m===\\u001b[39m \\u001b[32m'english'\\u001b[39m \\u001b[33m?\\u001b[39m \\u001b[32m'Submit'\\u001b[39m \\u001b[33m:\\u001b[39m \\u001b[32m'Voorleggen'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m              }\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mLanguageContext\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mConsumer\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mbutton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Object.unexpected (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Object.parseExprAtom (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8841:20)\\n    at Object.parseExprAtom (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3601:20)\\n    at Object.parseExprSubscripts (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseFunctionBody (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9406:24)\\n    at Object.parseArrowExpression (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9365:10)\\n    at Object.parseParenAndDistinguishExpression (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9002:12)\\n    at Object.parseExprAtom (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8762:21)\\n    at Object.parseExprAtom (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3601:20)\\n    at Object.parseExprSubscripts (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseExpression (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Object.jsxParseExpressionContainer (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3452:30)\\n    at Object.jsxParseElementAt (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3546:36)\\n    at Object.jsxParseElementAt (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3531:32)\\n    at Object.jsxParseElement (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3589:17)\\n    at Object.parseExprAtom (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:3596:19)\\n    at Object.parseExprSubscripts (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:8187:21)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/Button.js\n");

/***/ }),

/***/ "./public/src/components/Field.js":
/*!****************************************!*\
  !*** ./public/src/components/Field.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Field =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Field, _Component);\n\n  function Field() {\n    _classCallCheck(this, Field);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));\n  }\n\n  _createClass(Field, [{\n    key: \"render\",\n    value: function render() {\n      var text = this.context.language === 'english' ? 'Name' : 'Naam';\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ui field\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", null));\n    }\n  }]);\n\n  return Field;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nField.contextType = _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Field);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvRmllbGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvRmllbGQuanM/MWQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xuXG5jbGFzcyBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuY29udGV4dC5sYW5ndWFnZSA9PT0gJ2VuZ2xpc2gnID8gJ05hbWUnIDogJ05hYW0nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmllbGRcIj5cbiAgICAgICAgPGxhYmVsPnt0ZXh0fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBOzs7O0FBWkE7QUFDQTtBQURBO0FBZUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/Field.js\n");

/***/ }),

/***/ "./public/src/components/LanuageSelector.js":
/*!**************************************************!*\
  !*** ./public/src/components/LanuageSelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar LanguageSelector =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LanguageSelector, _Component);\n\n  function LanguageSelector() {\n    _classCallCheck(this, LanguageSelector);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LanguageSelector).apply(this, arguments));\n  }\n\n  _createClass(LanguageSelector, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Select a language:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"flag us\",\n        onClick: function onClick() {\n          return _this.context.onLanguageChange('english');\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"flag nl\",\n        onClick: function onClick() {\n          return _this.context.onLanguageChange('dutch');\n        }\n      }));\n    }\n  }]);\n\n  return LanguageSelector;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nLanguageSelector.contextType = _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTGFudWFnZVNlbGVjdG9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9jb21wb25lbnRzL0xhbnVhZ2VTZWxlY3Rvci5qcz8xOTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCc7XG5cbmNsYXNzIExhbmd1YWdlU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBTZWxlY3QgYSBsYW5ndWFnZTpcbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGFnIHVzXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRleHQub25MYW5ndWFnZUNoYW5nZSgnZW5nbGlzaCcpfVxuICAgICAgICAvPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsYWcgbmxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGV4dC5vbkxhbmd1YWdlQ2hhbmdlKCdkdXRjaCcpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdG9yO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7Ozs7QUFqQkE7QUFDQTtBQURBO0FBb0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/LanuageSelector.js\n");

/***/ }),

/***/ "./public/src/components/UserCreate.js":
/*!*********************************************!*\
  !*** ./public/src/components/UserCreate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./public/src/components/Field.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./public/src/components/Button.js\");\n\n\n\n\nvar UserCreate = function UserCreate() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ui form\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserCreate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvVXNlckNyZWF0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9Vc2VyQ3JlYXRlLmpzPzlhNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5jb25zdCBVc2VyQ3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZm9ybVwiPlxuICAgICAgPEZpZWxkIC8+XG4gICAgICA8QnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ3JlYXRlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/UserCreate.js\n");

/***/ }),

/***/ "./public/src/contexts/ColorContext.js":
/*!*********************************************!*\
  !*** ./public/src/contexts/ColorContext.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRleHRzL0NvbG9yQ29udGV4dC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9zcmMvY29udGV4dHMvQ29sb3JDb250ZXh0LmpzP2RiNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/contexts/ColorContext.js\n");

/***/ }),

/***/ "./public/src/contexts/LanguageContext.js":
/*!************************************************!*\
  !*** ./public/src/contexts/LanguageContext.js ***!
  \************************************************/
/*! exports provided: LanguageStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageStore\", function() { return LanguageStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('english');\nvar LanguageStore =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LanguageStore, _Component);\n\n  function LanguageStore() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, LanguageStore);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LanguageStore)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      language: 'english'\n    }, _this.onLanguageChange = function (language) {\n      _this.setState({\n        language: language\n      });\n    }, _temp));\n  }\n\n  _createClass(LanguageStore, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {\n        value: _objectSpread({}, this.state, {\n          onLanguageChange: this.onLanguageChange\n        })\n      }, this.props.children);\n    }\n  }]);\n\n  return LanguageStore;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9zcmMvY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0LmpzP2RlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoJ2VuZ2xpc2gnKTtcblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlU3RvcmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgbGFuZ3VhZ2U6ICdlbmdsaXNoJyB9O1xuXG4gIG9uTGFuZ3VhZ2VDaGFuZ2UgPSBsYW5ndWFnZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhbmd1YWdlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3sgLi4udGhpcy5zdGF0ZSwgb25MYW5ndWFnZUNoYW5nZTogdGhpcy5vbkxhbmd1YWdlQ2hhbmdlIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQWZBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/contexts/LanguageContext.js\n");

/***/ }),

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./public/src/components/App.js\");\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.querySelector('#root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9pbmRleC5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/index.js\n");

/***/ })

/******/ });