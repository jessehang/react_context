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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCreate */ \"./public/src/components/UserCreate.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\n/* harmony import */ var _contexts_ColorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ColorContext */ \"./public/src/contexts/ColorContext.js\");\n/* harmony import */ var _LanuageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanuageSelector */ \"./public/src/components/LanuageSelector.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      language: 'english'\n    }, _this.onLanguageChange = function (language) {\n      _this.setState({\n        language: language\n      });\n    }, _temp));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ui container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LanuageSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onLanguageChange: this.onLanguageChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: this.state.language\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ColorContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: \"red\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9jb21wb25lbnRzL0FwcC5qcz81NWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlckNyZWF0ZSBmcm9tICcuL1VzZXJDcmVhdGUnO1xuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IENvbG9yQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9Db2xvckNvbnRleHQnO1xuaW1wb3J0IExhbmd1YWdlU2VsY3RvciBmcm9tICcuL0xhbnVhZ2VTZWxlY3Rvcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBsYW5ndWFnZTogJ2VuZ2xpc2gnIH07XG5cbiAgb25MYW5ndWFnZUNoYW5nZSA9IGxhbmd1YWdlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGFuZ3VhZ2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8TGFuZ3VhZ2VTZWxjdG9yIG9uTGFuZ3VhZ2VDaGFuZ2U9e3RoaXMub25MYW5ndWFnZUNoYW5nZX0gLz5cblxuICAgICAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmxhbmd1YWdlfT5cbiAgICAgICAgICA8Q29sb3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPVwicmVkXCI+XG4gICAgICAgICAgICA8VXNlckNyZWF0ZSAvPlxuICAgICAgICAgIDwvQ29sb3JDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU1BOzs7O0FBbkJBO0FBQ0E7QUFxQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/App.js\n");

/***/ }),

/***/ "./public/src/components/Button.js":
/*!*****************************************!*\
  !*** ./public/src/components/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\n/* harmony import */ var _contexts_ColorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ColorContext */ \"./public/src/contexts/ColorContext.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Button =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Button, _Component);\n\n  function Button() {\n    _classCallCheck(this, Button);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));\n  }\n\n  _createClass(Button, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ColorContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Consumer, null, function (color) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"ui button \".concat(color)\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Consumer, null, function (value) {\n          return value === 'english' ? 'Submit' : 'Voorleggen';\n        }));\n      });\n    }\n  }]);\n\n  return Button;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcz9lNzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCc7XG5pbXBvcnQgQ29sb3JDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0NvbG9yQ29udGV4dCc7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbG9yQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge2NvbG9yID0+IChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHVpIGJ1dHRvbiAke2NvbG9yfWB9PlxuICAgICAgICAgICAgPExhbmd1YWdlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgICAge3ZhbHVlID0+ICh2YWx1ZSA9PT0gJ2VuZ2xpc2gnID8gJ1N1Ym1pdCcgOiAnVm9vcmxlZ2dlbicpfVxuICAgICAgICAgICAgPC9MYW5ndWFnZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NvbG9yQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFIQTtBQVNBOzs7O0FBYkE7QUFDQTtBQWVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/Button.js\n");

/***/ }),

/***/ "./public/src/components/Field.js":
/*!****************************************!*\
  !*** ./public/src/components/Field.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./public/src/contexts/LanguageContext.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Field =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Field, _Component);\n\n  function Field() {\n    _classCallCheck(this, Field);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));\n  }\n\n  _createClass(Field, [{\n    key: \"render\",\n    value: function render() {\n      var text = this.context === 'english' ? 'Name' : 'Naam';\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ui field\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", null));\n    }\n  }]);\n\n  return Field;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nField.contextType = _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Field);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvRmllbGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvRmllbGQuanM/MWQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xuXG5jbGFzcyBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuY29udGV4dCA9PT0gJ2VuZ2xpc2gnID8gJ05hbWUnIDogJ05hYW0nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmllbGRcIj5cbiAgICAgICAgPGxhYmVsPnt0ZXh0fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBOzs7O0FBWkE7QUFDQTtBQURBO0FBZUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/Field.js\n");

/***/ }),

/***/ "./public/src/components/LanuageSelector.js":
/*!**************************************************!*\
  !*** ./public/src/components/LanuageSelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar LanguageSelector =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LanguageSelector, _Component);\n\n  function LanguageSelector() {\n    _classCallCheck(this, LanguageSelector);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LanguageSelector).apply(this, arguments));\n  }\n\n  _createClass(LanguageSelector, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Select a language:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"flag us\",\n        onClick: function onClick() {\n          return _this.props.onLanguageChange('english');\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"flag nl\",\n        onClick: function onClick() {\n          return _this.props.onLanguageChange('dutch');\n        }\n      }));\n    }\n  }]);\n\n  return LanguageSelector;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTGFudWFnZVNlbGVjdG9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9jb21wb25lbnRzL0xhbnVhZ2VTZWxlY3Rvci5qcz8xOTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExhbmd1YWdlU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFNlbGVjdCBhIGxhbmd1YWdlOlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsYWcgdXNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25MYW5ndWFnZUNoYW5nZSgnZW5nbGlzaCcpfVxuICAgICAgICAvPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsYWcgbmxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25MYW5ndWFnZUNoYW5nZSgnZHV0Y2gnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTZWxlY3RvcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BOzs7O0FBZkE7QUFDQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/LanuageSelector.js\n");

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
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jessehang/Desktop/react_context/public/src/contexts/LanguageContext.js: Support for the experimental syntax 'exportDefaultFrom' isn't currently enabled (21:8):\\n\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 21 | \\u001b[39m\\u001b[36mexport\\u001b[39m deafult \\u001b[33mLanguageStore\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-proposal-export-default-from (https://git.io/vb4yH) to the 'plugins' section of your Babel config to enable transformation.\\n    at Object.raise (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Object.expectPlugin (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:7647:18)\\n    at Object.maybeParseExportDefaultSpecifier (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:10919:12)\\n    at Object.parseExport (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:10871:29)\\n    at Object.parseStatementContent (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9933:27)\\n    at Object.parseStatement (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Object.parseBlockBody (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Object.parseTopLevel (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:9758:10)\\n    at Object.parse (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:11270:17)\\n    at parse (/Users/jessehang/Desktop/react_context/node_modules/@babel/parser/lib/index.js:11306:38)\\n    at parser (/Users/jessehang/Desktop/react_context/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/jessehang/Desktop/react_context/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/jessehang/Desktop/react_context/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/jessehang/Desktop/react_context/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/jessehang/Desktop/react_context/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/contexts/LanguageContext.js\n");

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