/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pretty * {\n  box-sizing: border-box;\n}\n\n.pretty input:not([type=checkbox]):not([type=radio]) {\n  display: none;\n}\n\n.pretty {\n  position: relative;\n  display: inline-block;\n  margin-right: 1em;\n  white-space: nowrap;\n  line-height: 1;\n}\n.pretty input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 1em;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.pretty .state label {\n  position: initial;\n  display: inline-block;\n  font-weight: normal;\n  margin: 0;\n  text-indent: 1.5em;\n  min-width: calc(1em + 2px);\n}\n.pretty .state label:before, .pretty .state label:after {\n  content: \"\";\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  display: block;\n  box-sizing: border-box;\n  border-radius: 0;\n  border: 1px solid transparent;\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  background-color: transparent;\n}\n.pretty .state label:before {\n  border-color: #bdc3c7;\n}\n.pretty .state.p-is-hover, .pretty .state.p-is-indeterminate {\n  display: none;\n}\n\n@keyframes zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n@keyframes tada {\n  0% {\n    animation-timing-function: ease-in;\n    opacity: 0;\n    transform: scale(7);\n  }\n  38% {\n    animation-timing-function: ease-out;\n    opacity: 1;\n    transform: scale(1);\n  }\n  55% {\n    animation-timing-function: ease-in;\n    transform: scale(1.5);\n  }\n  72% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  81% {\n    animation-timing-function: ease-in;\n    transform: scale(1.24);\n  }\n  89% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  95% {\n    animation-timing-function: ease-in;\n    transform: scale(1.04);\n  }\n  100% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n}\n@keyframes jelly {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  40% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  50% {\n    transform: scale3d(0.85, 1.15, 1);\n  }\n  65% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  75% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rotate {\n  0% {\n    opacity: 0;\n    transform: translateZ(-200px) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateZ(0) rotate(0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 0px 0px #bdc3c7;\n  }\n  100% {\n    box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0);\n  }\n}\n.pretty.p-default.p-fill .state label:after {\n  transform: scale(1);\n}\n\n.pretty.p-default .state label:after {\n  transform: scale(0.6);\n}\n.pretty.p-default input:checked ~ .state label:after {\n  background-color: #bdc3c7 !important;\n}\n\n.pretty.p-default.p-thick .state label:before, .pretty.p-default.p-thick .state label:after {\n  border-width: calc(1em / 7);\n}\n.pretty.p-default.p-thick .state label:after {\n  transform: scale(0.4) !important;\n}\n\n.pretty.p-icon .state .icon {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-icon .state .icon:before {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-icon input:checked ~ .state .icon {\n  opacity: 1;\n}\n.pretty.p-icon input:checked ~ .state label:before {\n  border-color: #5a656b;\n}\n\n.pretty.p-svg .state .svg {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-svg .state svg {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-svg input:checked ~ .state .svg {\n  opacity: 1;\n}\n\n.pretty.p-image .state img {\n  opacity: 0;\n  position: absolute;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  left: 0;\n  z-index: 0;\n  text-align: center;\n  line-height: normal;\n  transform: scale(0.8);\n}\n.pretty.p-image input:checked ~ .state img {\n  opacity: 1;\n}\n\n.pretty.p-switch input {\n  min-width: 2em;\n}\n.pretty.p-switch .state {\n  position: relative;\n}\n.pretty.p-switch .state:before {\n  content: \"\";\n  border: 1px solid #bdc3c7;\n  border-radius: 60px;\n  width: 2em;\n  box-sizing: unset;\n  height: calc(1em + 2px);\n  position: absolute;\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 16%);\n  z-index: 0;\n  transition: all 0.5s ease;\n}\n.pretty.p-switch .state label {\n  text-indent: 2.5em;\n}\n.pretty.p-switch .state label:before, .pretty.p-switch .state label:after {\n  transition: all 0.5s ease;\n  border-radius: 100%;\n  left: 0;\n  border-color: transparent;\n  transform: scale(0.8);\n}\n.pretty.p-switch .state label:after {\n  background-color: #bdc3c7 !important;\n}\n.pretty.p-switch input:checked ~ .state:before {\n  border-color: #5a656b;\n}\n.pretty.p-switch input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch input:checked ~ .state label:after {\n  background-color: #5a656b !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-fill input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:after {\n  background-color: #fff !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-slim .state:before {\n  height: 0.1em;\n  background: #bdc3c7 !important;\n  top: calc(50% - 0.1em);\n}\n.pretty.p-switch.p-slim input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n\n.pretty.p-has-hover input:hover ~ .state:not(.p-is-hover) {\n  display: none;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover {\n  display: block;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover .icon {\n  display: block;\n}\n\n.pretty.p-has-focus input:focus ~ .state label:before {\n  box-shadow: 0px 0px 3px 0px #bdc3c7;\n}\n\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state:not(.p-is-indeterminate) {\n  display: none;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate {\n  display: block;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate .icon {\n  display: block;\n  opacity: 1;\n}\n\n.pretty.p-toggle .state.p-on {\n  opacity: 0;\n  display: none;\n}\n.pretty.p-toggle .state.p-off,\n.pretty.p-toggle .state .icon,\n.pretty.p-toggle .state .svg,\n.pretty.p-toggle .state img {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle .state.p-off .icon {\n  color: #bdc3c7;\n}\n.pretty.p-toggle input:checked ~ .state.p-on {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle input:checked ~ .state.p-off {\n  opacity: 0;\n  display: none;\n}\n\n.pretty.p-plain input:checked ~ .state label:before, .pretty.p-plain.p-toggle .state label:before {\n  content: none;\n}\n.pretty.p-plain.p-plain .icon {\n  transform: scale(1.1);\n}\n\n.pretty.p-round .state label:before, .pretty.p-round .state label:after {\n  border-radius: 100%;\n}\n.pretty.p-round.p-icon .state .icon {\n  border-radius: 100%;\n  overflow: hidden;\n}\n.pretty.p-round.p-icon .state .icon:before {\n  transform: scale(0.8);\n}\n\n.pretty.p-curve .state label:before, .pretty.p-curve .state label:after {\n  border-radius: 20%;\n}\n\n.pretty.p-smooth label:before,\n.pretty.p-smooth label:after,\n.pretty.p-smooth .icon,\n.pretty.p-smooth .svg {\n  transition: all 0.5s ease;\n}\n.pretty.p-smooth input:checked + .state label:after {\n  transition: all 0.3s ease;\n}\n.pretty.p-smooth input:checked + .state .icon,\n.pretty.p-smooth input:checked + .state .svg,\n.pretty.p-smooth input:checked + .state img {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-default input:checked + .state label:after {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-plain input:checked + .state label:before {\n  content: \"\";\n  transform: scale(0);\n  transition: all 0.5s ease;\n}\n\n.pretty.p-tada:not(.p-default) input:checked + .state .icon,\n.pretty.p-tada:not(.p-default) input:checked + .state .svg,\n.pretty.p-tada:not(.p-default) input:checked + .state img,\n.pretty.p-tada:not(.p-default) input:checked + .state label:before,\n.pretty.p-tada:not(.p-default) input:checked + .state label:after {\n  animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n  opacity: 1;\n}\n\n.pretty.p-jelly:not(.p-default) input:checked + .state .icon,\n.pretty.p-jelly:not(.p-default) input:checked + .state .svg,\n.pretty.p-jelly:not(.p-default) input:checked + .state img,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:after {\n  animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .icon,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .svg,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state img,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:after {\n  animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-pulse:not(.p-switch) input:checked ~ .state label:before {\n  animation: pulse 1s;\n}\n\n.pretty input[disabled] {\n  cursor: not-allowed;\n  display: none;\n}\n.pretty input[disabled] ~ * {\n  opacity: 0.5;\n}\n\n.pretty.p-locked input {\n  display: none;\n  cursor: not-allowed;\n}\n\n.pretty input:checked ~ .state.p-primary label:after, .pretty.p-toggle .state.p-primary label:after {\n  background-color: #428bca !important;\n}\n.pretty input:checked ~ .state.p-primary .icon,\n.pretty input:checked ~ .state.p-primary .svg, .pretty.p-toggle .state.p-primary .icon,\n.pretty.p-toggle .state.p-primary .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-primary-o label:before, .pretty.p-toggle .state.p-primary-o label:before {\n  border-color: #428bca;\n}\n.pretty input:checked ~ .state.p-primary-o label:after, .pretty.p-toggle .state.p-primary-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-primary-o .icon,\n.pretty input:checked ~ .state.p-primary-o .svg,\n.pretty input:checked ~ .state.p-primary-o svg, .pretty.p-toggle .state.p-primary-o .icon,\n.pretty.p-toggle .state.p-primary-o .svg,\n.pretty.p-toggle .state.p-primary-o svg {\n  color: #428bca;\n  stroke: #428bca;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {\n  background-color: #428bca !important;\n}\n.pretty.p-switch input:checked ~ .state.p-primary:before {\n  border-color: #428bca;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-primary:before {\n  background-color: #428bca !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-primary:before {\n  border-color: #245682;\n  background-color: #245682 !important;\n}\n.pretty input:checked ~ .state.p-info label:after, .pretty.p-toggle .state.p-info label:after {\n  background-color: #5bc0de !important;\n}\n.pretty input:checked ~ .state.p-info .icon,\n.pretty input:checked ~ .state.p-info .svg, .pretty.p-toggle .state.p-info .icon,\n.pretty.p-toggle .state.p-info .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-info-o label:before, .pretty.p-toggle .state.p-info-o label:before {\n  border-color: #5bc0de;\n}\n.pretty input:checked ~ .state.p-info-o label:after, .pretty.p-toggle .state.p-info-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-info-o .icon,\n.pretty input:checked ~ .state.p-info-o .svg,\n.pretty input:checked ~ .state.p-info-o svg, .pretty.p-toggle .state.p-info-o .icon,\n.pretty.p-toggle .state.p-info-o .svg,\n.pretty.p-toggle .state.p-info-o svg {\n  color: #5bc0de;\n  stroke: #5bc0de;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-info-o label:after {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch input:checked ~ .state.p-info:before {\n  border-color: #5bc0de;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-info:before {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-info:before {\n  border-color: #2390b0;\n  background-color: #2390b0 !important;\n}\n.pretty input:checked ~ .state.p-success label:after, .pretty.p-toggle .state.p-success label:after {\n  background-color: #5cb85c !important;\n}\n.pretty input:checked ~ .state.p-success .icon,\n.pretty input:checked ~ .state.p-success .svg, .pretty.p-toggle .state.p-success .icon,\n.pretty.p-toggle .state.p-success .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-success-o label:before, .pretty.p-toggle .state.p-success-o label:before {\n  border-color: #5cb85c;\n}\n.pretty input:checked ~ .state.p-success-o label:after, .pretty.p-toggle .state.p-success-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-success-o .icon,\n.pretty input:checked ~ .state.p-success-o .svg,\n.pretty input:checked ~ .state.p-success-o svg, .pretty.p-toggle .state.p-success-o .icon,\n.pretty.p-toggle .state.p-success-o .svg,\n.pretty.p-toggle .state.p-success-o svg {\n  color: #5cb85c;\n  stroke: #5cb85c;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-success-o label:after {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch input:checked ~ .state.p-success:before {\n  border-color: #5cb85c;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-success:before {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-success:before {\n  border-color: #357935;\n  background-color: #357935 !important;\n}\n.pretty input:checked ~ .state.p-warning label:after, .pretty.p-toggle .state.p-warning label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty input:checked ~ .state.p-warning .icon,\n.pretty input:checked ~ .state.p-warning .svg, .pretty.p-toggle .state.p-warning .icon,\n.pretty.p-toggle .state.p-warning .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-warning-o label:before, .pretty.p-toggle .state.p-warning-o label:before {\n  border-color: #f0ad4e;\n}\n.pretty input:checked ~ .state.p-warning-o label:after, .pretty.p-toggle .state.p-warning-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-warning-o .icon,\n.pretty input:checked ~ .state.p-warning-o .svg,\n.pretty input:checked ~ .state.p-warning-o svg, .pretty.p-toggle .state.p-warning-o .icon,\n.pretty.p-toggle .state.p-warning-o .svg,\n.pretty.p-toggle .state.p-warning-o svg {\n  color: #f0ad4e;\n  stroke: #f0ad4e;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-warning-o label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch input:checked ~ .state.p-warning:before {\n  border-color: #f0ad4e;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-warning:before {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-warning:before {\n  border-color: #c77c11;\n  background-color: #c77c11 !important;\n}\n.pretty input:checked ~ .state.p-danger label:after, .pretty.p-toggle .state.p-danger label:after {\n  background-color: #d9534f !important;\n}\n.pretty input:checked ~ .state.p-danger .icon,\n.pretty input:checked ~ .state.p-danger .svg, .pretty.p-toggle .state.p-danger .icon,\n.pretty.p-toggle .state.p-danger .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-danger-o label:before, .pretty.p-toggle .state.p-danger-o label:before {\n  border-color: #d9534f;\n}\n.pretty input:checked ~ .state.p-danger-o label:after, .pretty.p-toggle .state.p-danger-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-danger-o .icon,\n.pretty input:checked ~ .state.p-danger-o .svg,\n.pretty input:checked ~ .state.p-danger-o svg, .pretty.p-toggle .state.p-danger-o .icon,\n.pretty.p-toggle .state.p-danger-o .svg,\n.pretty.p-toggle .state.p-danger-o svg {\n  color: #d9534f;\n  stroke: #d9534f;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-danger-o label:after {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch input:checked ~ .state.p-danger:before {\n  border-color: #d9534f;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-danger:before {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-danger:before {\n  border-color: #a02622;\n  background-color: #a02622 !important;\n}\n\n.pretty.p-bigger label:before,\n.pretty.p-bigger label:after,\n.pretty.p-bigger .icon,\n.pretty.p-bigger .svg,\n.pretty.p-bigger .img {\n  font-size: 1.2em !important;\n  top: calc((0% - (100% - 1em)) - 35%) !important;\n}\n.pretty.p-bigger label {\n  text-indent: 1.7em;\n}\n\n@media print {\n  .pretty .state:before,\n.pretty .state label:before,\n.pretty .state label:after,\n.pretty .state .icon {\n    color-adjust: exact;\n    /* stylelint-disable */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_clock {\n  font-size: 2.5rem;\n  padding: 1rem 1.5rem;\n  font-weight: 300;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}\n\n.stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}\n\n.stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_libraryfilter-wrapper {\n  opacity: 1;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.5s cubic-bezier(0.75, 0, 0.25, 1);\n}\n.stadiaplus_libraryfilter-wrapper.closing {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper.closed {\n  display: none;\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon-wrapper {\n  position: absolute;\n  display: inline-block;\n  z-index: 4;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 32px;\n  background-color: #393a3c;\n  transition: transform 0.23s cubic-bezier(0.35, 0, 0.15, 1);\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon {\n  font-family: \"Material Icons Extended\";\n  font-size: 32px;\n  z-index: 4;\n  padding: 16px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper {\n  transform: scale(1.015);\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper:hover {\n  transform: scale(1);\n}\n\n.stadiaplus_libraryfilter-bar {\n  background-color: #303236;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_dropdown {\n  display: block;\n  padding: 0.5rem;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-checkbox {\n  margin-left: auto;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction {\n  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  border-radius: 50%;\n  padding: 2px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction::after {\n  content: \"arrow_drop_down\";\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.ascending {\n  transform: rotate(0deg);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.descending {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_networkmonitor {\n  position: absolute;\n  width: 300px;\n  top: 0;\n  left: 0;\n  z-index: 150;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.stadiaplus_networkmonitor * {\n  user-select: none;\n}\n.stadiaplus_networkmonitor ul {\n  list-style-type: none;\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n.stadiaplus_networkmonitor.editable {\n  z-index: 300;\n  cursor: move;\n}\n\n.stadiaplus_networkmonitor-tab ul {\n  list-style-type: none;\n  padding-inline-start: 1rem;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.stadiaplus_networkmonitor-checkbox {\n  margin: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/PopupFix.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/PopupFix.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".zLoQpb.offset {\n  margin-top: 5rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_rating {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  position: relative;\n}\n.stadiaplus_rating:hover .stadiaplus_rating-tooltip {\n  opacity: 1;\n  transform: translateX(-50%) scale(1);\n}\n.stadiaplus_rating .stadiaplus_rating-tooltip {\n  font-family: \"Google Sans\", sans-serif;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) scale(0.9);\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 0.5rem;\n  color: #ffffff;\n  font-size: 20px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out 0.3s;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_storefilter {\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_storefilter .bar {\n  border-radius: 0.5rem 0.5rem 0 0;\n  background-color: rgba(255, 255, 255, 0.12);\n  padding: 1rem;\n  align-items: center;\n  display: flex;\n  align-content: center;\n}\n.stadiaplus_storefilter .bar::before {\n  content: \"search\";\n  font-size: 32px;\n  margin-right: 0.5rem;\n  font-family: \"Material Icons Extended\";\n}\n.stadiaplus_storefilter .bar input {\n  width: calc(100% - 1rem);\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.12);\n  font-family: \"Google Sans\", sans-serif;\n  font-size: 1.25rem;\n  outline: #ff773d 3px;\n  color: #ffffff;\n  font-weight: 500;\n  border: none;\n  border-radius: 0.25rem;\n}\n.stadiaplus_storefilter .games {\n  margin-bottom: 1.5rem;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.06);\n  border-radius: 0 0 0.5rem 0.5rem;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game {\n  display: none;\n  height: 90px;\n  align-content: center;\n  border-radius: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.06);\n  margin: 0.5rem;\n  box-shadow: 0 0 0 0.1875rem transparent;\n  color: #ffffff;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game.shown {\n  display: flex;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game img {\n  object-fit: cover;\n  width: 140px;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game .detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 1.5rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}\n\n.stadiaplus_ui-component {\n  /* \n   *   Must remove 2 x padding or it doesnt work \n   */\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 1rem;\n  background-color: #2d2e30;\n  transition: transform 0.15s ease-in-out;\n  z-index: 999;\n}\n.stadiaplus_ui-component.open {\n  transform: translateX(0);\n}\n.stadiaplus_ui-component header {\n  display: flex;\n  align-items: center;\n}\n.stadiaplus_ui-component header .CwCxFd {\n  font-size: 22px;\n}\n\n.stadiaplus_ui-btn-container {\n  margin-top: -16px;\n}\n.stadiaplus_ui-btn-container.E0Zk9b {\n  justify-content: space-between;\n}\n\n.stadiaplus_ui-button {\n  width: 130.677px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
exports.push([module.i, ".GqLi4d {\n  filter: brightness(0.9) contrast(1.1);\n}\n\nhtml body .dSGvzf {\n  margin: 0 1rem;\n}\n\nhtml body .CVVXfc {\n  flex-direction: column;\n  align-items: initial;\n}\n\nhr {\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n::-webkit-scrollbar {\n  background-color: #46484d;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #505257 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_modal {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  opacity: 0;\n}\n.stadiaplus_modal .stadiaplus_modal-wrapper {\n  position: fixed;\n  max-width: 33.333%;\n  min-width: 20%;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background: #303236;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  transition: transform 0.2s ease;\n}\n.stadiaplus_modal .stadiaplus_modal-close {\n  float: right;\n  padding: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 24px;\n}\n.stadiaplus_modal .stadiaplus_modal-close:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n}\n.stadiaplus_modal.active {\n  opacity: 1;\n  pointer-events: initial;\n}\n.stadiaplus_modal.active .stadiaplus_modal-wrapper {\n  transform: translate(-50%, -50%) scale(1);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_dropdown.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n.stadiaplus_dropdown.style-dark.ss-main {\n  border-color: #3C3E43;\n  width: auto;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content {\n  border-color: #3C3E43;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content .ss-list .ss-option {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.8);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content .ss-list .ss-option.ss-disabled {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.4);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected {\n  background: transparent;\n  border: none;\n  border-bottom: #93959F 1px solid;\n  border-radius: 0;\n  width: 180px;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .placeholder,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .ss-plus span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .ss-arrow span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .ss-plus span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .ss-arrow span {\n  border-color: #93959F;\n}\n.stadiaplus_dropdown.style-light.ss-main {\n  width: auto;\n}\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected {\n  background: transparent;\n  border: none;\n  border-bottom: #cccccc 1px solid;\n  border-radius: 0;\n  width: 180px;\n}\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected .ss-plus span,\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected .ss-arrow span,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected .ss-plus span,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected .ss-arrow span {\n  border-color: #cccccc;\n}\n.stadiaplus_dropdown.style-slimselect-large.ss-main {\n  width: 200px;\n  height: 40px;\n}\n.stadiaplus_dropdown.style-slimselect-large.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-slimselect-large.ss-main .ss-single-selected {\n  height: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_snackbar {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  border-radius: 4px;\n  z-index: 999;\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  position: fixed;\n  bottom: 8px;\n  left: calc(50% - 200px);\n  transform: scale(0.5) translateY(16px);\n  opacity: 0;\n  transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1), opacity 0.15s cubic-bezier(0, 0, 0.2, 1);\n}\n.stadiaplus_snackbar.active {\n  transform: scale(1) translateY(0px);\n  opacity: 1;\n}\n\n.stadiaplus_snackbar-label {\n  font-size: 16px;\n  padding: 16px;\n}\n\n.stadiaplus_snackbar-close {\n  padding: 8px;\n  margin: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 20px;\n}\n.stadiaplus_snackbar-close:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ss-main{position:relative;display:inline-block;user-select:none;color:#666;width:100%}.ss-main .ss-single-selected{display:flex;cursor:pointer;width:100%;height:30px;padding:6px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .2s}.ss-main .ss-single-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-single-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-single-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-single-selected .placeholder{flex:1 1 100%;text-align:left;width:calc(100% - 30px);line-height:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ss-main .ss-single-selected .placeholder,.ss-main .ss-single-selected .placeholder *{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ss-main .ss-single-selected .placeholder *{width:auto}.ss-main .ss-single-selected .placeholder .ss-disabled{color:#dedede}.ss-main .ss-single-selected .ss-deselect{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px;font-weight:700}.ss-main .ss-single-selected .ss-deselect.ss-hide{display:none}.ss-main .ss-single-selected .ss-arrow{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px}.ss-main .ss-single-selected .ss-arrow span{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:3px;transition:transform .2s,margin .2s}.ss-main .ss-single-selected .ss-arrow span.arrow-up{transform:rotate(-135deg);margin:3px 0 0}.ss-main .ss-single-selected .ss-arrow span.arrow-down{transform:rotate(45deg);margin:-3px 0 0}.ss-main .ss-multi-selected{display:flex;flex-direction:row;cursor:pointer;min-height:30px;width:100%;padding:0 0 0 3px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .2s}.ss-main .ss-multi-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled{color:#666}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete{cursor:not-allowed}.ss-main .ss-multi-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-multi-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-multi-selected .ss-values{display:flex;flex-wrap:wrap;justify-content:flex-start;flex:1 1 100%;width:calc(100% - 30px)}.ss-main .ss-multi-selected .ss-values .ss-disabled{display:flex;padding:4px 5px;margin:2px 0;line-height:1em;align-items:center;width:100%;color:#dedede;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes scaleOut{0%{transform:scale(1);opacity:1}to{transform:scale(0);opacity:0}}.ss-main .ss-multi-selected .ss-values .ss-value{display:flex;user-select:none;align-items:center;font-size:12px;padding:3px 5px;margin:3px 5px 3px 0;color:#fff;background-color:#5897fb;border-radius:4px;animation-name:scaleIn;animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:both}.ss-main .ss-multi-selected .ss-values .ss-value.ss-out{animation-name:scaleOut;animation-duration:.2s;animation-timing-function:ease-out}.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete{margin:0 0 0 5px;cursor:pointer}.ss-main .ss-multi-selected .ss-add{display:flex;flex:0 1 3px;margin:9px 12px 0 5px}.ss-main .ss-multi-selected .ss-add .ss-plus{display:flex;justify-content:center;align-items:center;background:#666;position:relative;height:10px;width:2px;transition:transform .2s}.ss-main .ss-multi-selected .ss-add .ss-plus:after{background:#666;content:\"\";position:absolute;height:2px;width:10px;left:-4px;top:4px}.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross{transform:rotate(45deg)}.ss-content{position:absolute;width:100%;margin:-1px 0 0;box-sizing:border-box;border:1px solid #dcdee2;z-index:1010;background-color:#fff;transform-origin:center top;transition:transform .2s,opacity .2s;opacity:0;transform:scaleY(0)}.ss-content.ss-open{display:block;opacity:1;transform:scaleY(1)}.ss-content .ss-search{display:flex;flex-direction:row;padding:8px 8px 6px}.ss-content .ss-search.ss-hide,.ss-content .ss-search.ss-hide input{height:0;opacity:0;padding:0;margin:0}.ss-content .ss-search input{display:inline-flex;font-size:inherit;line-height:inherit;flex:1 1 auto;width:100%;min-width:0;height:30px;padding:6px 8px;margin:0;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;text-align:left;box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-appearance:textfield}.ss-content .ss-search input::placeholder{color:#8a8a8a;vertical-align:middle}.ss-content .ss-search input:focus{box-shadow:0 0 5px #5897fb}.ss-content .ss-search .ss-addable{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;font-size:22px;font-weight:700;flex:0 0 30px;height:30px;margin:0 0 0 8px;border:1px solid #dcdee2;border-radius:4px;box-sizing:border-box}.ss-content .ss-addable{padding-top:0}.ss-content .ss-list{max-height:200px;overflow-x:hidden;overflow-y:auto;text-align:left}.ss-content .ss-list .ss-optgroup .ss-optgroup-label{padding:6px 10px;font-weight:700}.ss-content .ss-list .ss-optgroup .ss-option{padding:6px 6px 6px 25px}.ss-content .ss-list .ss-optgroup-label-selectable{cursor:pointer}.ss-content .ss-list .ss-optgroup-label-selectable:hover{color:#fff;background-color:#5897fb}.ss-content .ss-list .ss-option{padding:6px 10px;cursor:pointer;user-select:none}.ss-content .ss-list .ss-option *{display:inline-block}.ss-content .ss-list .ss-option.ss-highlighted,.ss-content .ss-list .ss-option:hover{color:#fff;background-color:#5897fb}.ss-content .ss-list .ss-option.ss-disabled{cursor:not-allowed;color:#dedede;background-color:#fff}.ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected{color:#666;background-color:rgba(88,151,251,.1)}.ss-content .ss-list .ss-option.ss-hide{display:none}.ss-content .ss-list .ss-option .ss-search-highlight{background-color:#fffb8c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/pretty-checkbox/src/pretty-checkbox.scss":
/*!***************************************************************!*\
  !*** ./node_modules/pretty-checkbox/src/pretty-checkbox.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./pretty-checkbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\n    this.enabled = false;\n    this.peerConnections = [];\n    this.originalRTC;\n    this.startTime;\n    this.element;\n    this.editable = false;\n    this.x = 0;\n    this.y = 0;\n\n    const self = this;\n    this.originalRTC = RTCPeerConnection;\n    (function (OriginalRTCConnection) {\n        self.originalRTC = OriginalRTCConnection;\n\n        RTCPeerConnection = function (args) {\n            const connection = new OriginalRTCConnection(args);\n            self.peerConnections.push(connection);\n            return connection;\n        };\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\n    })(RTCPeerConnection);\n\n    this.start = function () {\n        this.enabled = true;\n        this.element = document.createElement('div');\n        this.element.classList.add('stadiaplus_networkmonitor');\n        this.element.id =\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\n        document.body.appendChild(this.element);\n\n        this.startTime = Date.now();\n\n        this.setEditable(true);\n        this.updatePosition();\n        this.update();\n    };\n\n    this.setPosition = function (x, y) {\n        this.x = x;\n        this.y = y;\n        this.updatePosition();\n    };\n\n    this.updatePosition = function () {\n        this.element.style.left = this.x + 'px';\n        this.element.style.top = this.y + 'px';\n\n        const corners = {\n            tl: 10,\n            tr: 10,\n            bl: 10,\n            br: 10,\n        };\n\n        if (this.x < 10) {\n            corners.tl = 0;\n            corners.bl = 0;\n        }\n\n        if (this.y < 10) {\n            corners.tl = 0;\n            corners.tr = 0;\n        }\n\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\n            corners.tr = 0;\n            corners.br = 0;\n        }\n\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\n            corners.bl = 0;\n            corners.br = 0;\n        }\n\n        this.element.style[\n            'border-radius'\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\n    };\n\n    this.mouseEvents = [];\n    this.moving = false;\n    this.offset = { x: 0, y: 0 };\n    this.setEditable = function (editable) {\n        this.editable = editable;\n        this.element.classList.toggle('editable', editable);\n\n        if (editable) {\n            this.mouseEvents.push(\n                {\n                    target: document,\n                    type: 'mousemove',\n                    fn: (event) => {\n                        if (this.moving) {\n                            this.x = Math.max(\n                                0, // Minimum x value\n                                Math.min(\n                                    window.innerWidth -\n                                        this.element.clientWidth, // Maximum x value\n                                    event.clientX - this.offset.x,\n                                ),\n                            );\n                            this.y = Math.max(\n                                0, // Minimum y value\n                                Math.min(\n                                    window.innerHeight -\n                                        this.element.clientHeight, // Maximum y value\n                                    event.clientY - this.offset.y,\n                                ),\n                            );\n\n                            this.updatePosition();\n                        }\n                    },\n                },\n                {\n                    target: this.element,\n                    type: 'mousedown',\n                    fn: (event) => {\n                        this.moving = true;\n                        this.offset.x = event.clientX - this.x;\n                        this.offset.y = event.clientY - this.y;\n                    },\n                },\n                {\n                    target: document,\n                    type: 'mouseup',\n                    fn: (event) => {\n                        this.moving = false;\n                    },\n                },\n            );\n            this.mouseEvents.forEach((event) =>\n                event.target.addEventListener(event.type, event.fn),\n            );\n        } else {\n            this.mouseEvents.forEach((event) =>\n                event.target.removeEventListener(event.type, event.fn),\n            );\n        }\n    };\n\n    this.setVisible = function (visible) {\n        visible.forEach(e => this.visible[e.id] = e);\n    };\n\n    this.stop = function () {\n        this.enabled = false;\n        this.setEditable(false);\n        this.element.remove();\n\n        RTCPeerConnection = this.originalRTC;\n        peerConnections = [];\n    };\n\n    this.visible = {};\n\n    this.stats = [];\n    this.update = function () {\n        if (this.peerConnections.length > 1) {\n          const openConnections = this.peerConnections.filter(x => x.connectionState == \"connected\");\n\n          openConnections[1].getStats().then((_stats) => {\n                this.stats = Array.from(_stats);\n\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\n                );\n                const RTCIceCandidatePair = this.getStat((stat) =>\n                    stat[0].startsWith('RTCIceCandidatePair'),\n                );\n                const RTCMediaStreamTrack_receiver = this.getStat(\n                    (stat) =>\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\n                        stat[1].kind === 'video',\n                );\n\n                const resolution = this.getResolution(\n                    RTCMediaStreamTrack_receiver,\n                );\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\n                const totalTraffic = this.translateByteUnits(\n                    this.getTotalDownload(RTCIceCandidatePair),\n                );\n                const currentTraffic =\n                    this.translateBitUnits(\n                        this.getDownloadSpeed(RTCIceCandidatePair),\n                    ) + '/s';\n                const averageTraffic =\n                    this.translateBitUnits(\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\n                    ) + '/s';\n                const packetsLost = this.getPacketsLost(\n                    RTCInboundRTPVideoStream,\n                );\n                const averagePacketLoss =\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\n                const jitterBuffer =\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\n\n                let html = '';\n                if (this.visible['time'].enabled) {\n                    let time = new Date();\n                    let timeString = time.toLocaleString();\n                    html += `<h5>${timeString}</h5>`;\n                }\n\n                html += '<ul>';\n                if (this.visible['resolution'].enabled) {\n                    html += `<li>${this.visible['resolution'].name}: ${resolution.width}x${resolution.height}</li>`;\n                }\n\n                if (this.visible['fps'].enabled) {\n                    html += `<li>${this.visible['fps'].name}: ${fps}</li>`;\n                }\n\n                if (this.visible['latency'].enabled) {\n                    html += `<li>${this.visible['latency'].name}: ${latency}</li>`;\n                }\n\n                if (this.visible['codec'].enabled) {\n                    html += `<li>${this.visible['codec'].name}: ${codec}</li>`;\n                }\n\n                if (this.visible['traffic'].enabled) {\n                    html += `<li>${this.visible['traffic'].name}: ${totalTraffic}</li>`;\n                }\n\n                if (this.visible['current-traffic'].enabled) {\n                    html += `<li>${this.visible['current-traffic'].name}: ${currentTraffic}</li>`;\n                }\n\n                if (this.visible['average-traffic'].enabled) {\n                    html += `<li>${this.visible['average-traffic'].name}: ${averageTraffic}</li>`;\n                }\n\n                if (this.visible['packets-lost'].enabled) {\n                    html += `<li>${this.visible['packets-lost'].name}: ${packetsLost}</li>`;\n                }\n\n                if (this.visible['average-packet-loss'].enabled) {\n                    html += `<li>${this.visible['average-packet-loss'].name}: ${averagePacketLoss}</li>`;\n                }\n\n                if (this.visible['jitter-buffer'].enabled) {\n                    html += `<li>${this.visible['jitter-buffer'].name}: ${jitterBuffer}</li>`;\n                }\n\n                html += '</ul>';\n\n                this.element.innerHTML = html;\n            });\n        } else {\n            this.startTime = Date.now();\n            this.element.innerHTML = `\n                <h5>Error</h5>\n                <p>\n                    Uh oh, something went terribly wrong. \n                    This feature is still very unstable and \n                    the developer knows there are problems, \n                    please understand that this issue is \n                    actively being worked on.\n                </p>\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\n            `;\n        }\n\n        if (this.enabled) {\n            setTimeout(() => {\n                this.update();\n            }, 1000);\n        }\n    };\n\n    this.getStat = function (filter) {\n        return this.stats.find(filter)[1];\n    };\n\n    this.translateBitUnits = function (value) {\n        const units = ['bit', 'kbit', 'Mbit', 'Gbit'];\n\n        let i = 0;\n        while (value / 1000 >= 1) {\n            i++;\n            value /= 1000;\n        }\n\n        return (\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\n        );\n    };\n\n    this.translateByteUnits = function (value) {\n        const units = ['B', 'kB', 'MB', 'GB'];\n\n        let i = 0;\n        while (value / 1000 >= 1) {\n            i++;\n            value /= 1000;\n        }\n\n        return (\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\n        );\n    };\n\n    this.getLatency = function (RTCIceCandidatePair) {\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\n    };\n\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\n        return (\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\n        ).toPrecision(4);\n    };\n\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\n        return RTCInboundRTPVideoStream.packetsLost;\n    };\n\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\n        return (\n            (RTCInboundRTPVideoStream.packetsLost /\n                (RTCInboundRTPVideoStream.packetsReceived +\n                    RTCInboundRTPVideoStream.packetsLost)) *\n            100\n        ).toPrecision(2);\n    };\n\n    this.lastDownload = 0;\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\n        const download = this.getTotalDownload(RTCIceCandidatePair);\n        const speed = download - this.lastDownload;\n        this.lastDownload = download;\n        return speed * 8;\n    };\n\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\n        return (\n            this.getTotalDownload(RTCIceCandidatePair) * 8 /\n            (this.timeSinceStart() / 1000)\n        );\n    };\n\n    this.getTotalDownload = function (RTCIceCandidatePair) {\n        return RTCIceCandidatePair.bytesReceived;\n    };\n\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\n        return {\n            width: RTCMediaStreamTrack_receiver.frameWidth,\n            height: RTCMediaStreamTrack_receiver.frameHeight,\n        };\n    };\n\n    this.getCodec = function (RTCInboundRTPVideoStream) {\n        const codecStat = this.getStat(\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\n        );\n        return codecStat.mimeType.substring('video/'.length);\n    };\n\n    this.lastFrames = 0;\n    this.getFPS = function (RTCInboundRTPVideoStream) {\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\n        return fps;\n    };\n\n    this.timeSinceStart = function () {\n        return Date.now() - this.startTime;\n    };\n};\n\nStadiaPlusMonitor = new MonitorRunnable();\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/Recorder.js":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/Recorder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("let blobs;\n\nconst Recorder = function () {\n    this.mediaRecorder;\n    this.blobs;\n    this.recording = false;\n\n    this.onMediaRecorderDataAvailable = function (event) {\n        console.log('onMediaRecorderDataAvailable', event);\n        if (event.data && event.data.size > 0) {\n            console.log('push: ', blobs.length);\n            blobs.push(event.data);\n            console.log('blobs: ', blobs.length);\n        } else {\n            console.log('no push: ', event);\n        }\n    }\n\n    this.onMediaRecorderStop = function (event) {\n        console.log('onMediaRecorderStop', event);\n    }\n\n    this.start = function () {\n        console.log('start');\n        blobs = [];\n        mediaRecorderOptions = {mimeType: 'video/webm;codecs=vp9,opus'};\n        if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {\n            mediaRecorderOptions.mimeType = 'video/webm';\n            if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {\n                mediaRecorderOptions.mimeType = '';\n            }\n        }\n\n        const videoElements = document.getElementsByTagName('video');\n        if (videoElements.length == 0) {\n            console.log('no video elements');\n            return\n        }\n        const videoElement = videoElements[0];\n        try {\n            this.mediaRecorder = new MediaRecorder(videoElement.captureStream(), mediaRecorderOptions);\n        } catch (e) {\n            console.log('record: ', e);\n            return;\n        }\n        this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable;\n        this.mediaRecorder.onstop = this.onMediaRecorderStop;\n        this.mediaRecorder.start();\n        this.recording = true;\n        console.log('recording');\n    };\n\n    this.stop = function (download) {\n        console.log('stop');\n        if (this.mediaRecorder.state == 'inactive') {\n            this.mediaRecorder = null;\n            this.recording = false;\n            console.log('invactive');\n            return;\n        }\n        // 'stop' triggers 'ondataavailable'.\n        this.mediaRecorder.stop();\n        // required so 'ondataavailable' runs to completion as well as 'stop'.\n        setTimeout(() => {\n            console.log('download', blobs);\n            const blob = new Blob(blobs, {type: 'video/webm'});\n            const url = window.URL.createObjectURL(blob);\n\n            console.log('url: ', url);\n\n            const a = document.createElement('a');\n            a.style.display = 'none';\n            a.href = url;\n            a.download = 'test.webm';\n            document.body.appendChild(a);\n            a.click();\n            setTimeout(() => {\n                document.body.removeChild(a);\n                window.URL.revokeObjectURL(url);\n            }, 100);\n\n            this.mediaRecorder = null;\n            this.recording = false;\n            console.log('download end');\n            if (!download) {\n                this.mediaRecorder = null;\n                this.recording = false;\n            }\n        }, 1000);\n    };\n\n};\n\nStadiaPlusRecorder = new Recorder();\n");

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./slimselect.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return(s={},n.m=i=[function(e,t,i){"use strict";function s(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}var n;t.__esModule=!0,t.hasClassInTree=function(e,t){function s(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}return s(e,t)||function e(t,i){return t&&t!==document?s(t,i)?t:e(t.parentNode,i):null}(e,t)},t.ensureElementInView=function(e,t){var i=e.scrollTop+e.offsetTop,s=i+e.clientHeight,n=t.offsetTop,a=n+t.clientHeight;n<i?e.scrollTop-=i-n:s<a&&(e.scrollTop+=a-s)},t.putContent=function(e,t,i){var s=e.offsetHeight,n=e.getBoundingClientRect(),a=i?n.top:n.top-s,o=i?n.bottom:n.bottom+s;return a<=0?"below":o>=window.innerHeight?"above":i?t:"below"},t.debounce=function(n,a,o){var l;return void 0===a&&(a=100),void 0===o&&(o=!1),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=self,s=o&&!l;clearTimeout(l),l=setTimeout(function(){l=null,o||n.apply(i,e)},a),s&&n.apply(i,e)}},t.isValueInArrayOfObjects=function(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var s=0,n=e;s<n.length;s++){var a=n[s];if(a&&a[t]&&a[t]===i)return!0}return!1},t.highlight=function(e,t,i){var s=e,n=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(n))return e;var a=e.match(n).index,o=a+e.match(n)[0].toString().length,l=e.substring(a,o);return s=s.replace(n,'<mark class="'+i+'">'+l+"</mark>")},"function"!=typeof(n=window).CustomEvent&&(s.prototype=n.Event.prototype,n.CustomEvent=s)},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.newOption=function(e){return{id:e.id?e.id:String(Math.floor(1e8*Math.random())),value:e.value?e.value:"",text:e.text?e.text:"",innerHTML:e.innerHTML?e.innerHTML:"",selected:!!e.selected&&e.selected,display:void 0===e.display||e.display,disabled:!!e.disabled&&e.disabled,placeholder:!!e.placeholder&&e.placeholder,class:e.class?e.class:void 0,data:e.data?e.data:{}}},n.prototype.add=function(e){this.data.push({id:String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:"",selected:!1,display:!0,disabled:!1,placeholder:!1,class:void 0,data:{}})},n.prototype.parseSelectData=function(){this.data=[];for(var e=0,t=this.main.select.element.childNodes;e<t.length;e++){var i=t[e];if("OPTGROUP"===i.nodeName){for(var s={label:i.label,options:[]},n=0,a=i.childNodes;n<a.length;n++){var o=a[n];if("OPTION"===o.nodeName){var l=this.pullOptionData(o);s.options.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text)}}this.data.push(s)}else"OPTION"===i.nodeName&&(l=this.pullOptionData(i),this.data.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text))}},n.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:e.innerHTML,selected:e.selected,disabled:e.disabled,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}},n.prototype.setSelectedFromSelect=function(){if(this.main.config.isMultiple){for(var e=[],t=0,i=this.main.select.element.options;t<i.length;t++){var s=i[t];if(s.selected){var n=this.getObjectFromData(s.value,"value");n&&n.id&&e.push(n.id)}}this.setSelected(e,"id")}else{var a=this.main.select.element;if(-1!==a.selectedIndex){var o=a.options[a.selectedIndex].value;this.setSelected(o,"value")}}},n.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.placeholder||(r.selected=this.shouldBeSelected(r,e,t))}}}else n.selected=this.shouldBeSelected(n,e,t)}},n.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t))for(var s=0,n=t;s<n.length;s++){var a=n[s];if(i in e&&String(e[i])===String(a))return!0}else if(i in e&&String(e[i])===String(t))return!0;return!1},n.prototype.getSelected=function(){for(var e={text:"",placeholder:this.main.config.placeholderText},t=[],i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.selected&&(this.main.config.isMultiple?t.push(r):e=r)}}}else n.selected&&(this.main.config.isMultiple?t.push(n):e=n)}return this.main.config.isMultiple?t:e},n.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){var i=[],s=this.getSelected();if(Array.isArray(s))for(var n=0,a=s;n<a.length;n++){var o=a[n];i.push(o[t])}i.push(e),this.setSelected(i,t)}},n.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],s=0,n=this.getSelected();s<n.length;s++){var a=n[s];String(a[t])!==String(e)&&i.push(a[t])}this.setSelected(i,t)}},n.prototype.onDataChange=function(){this.main.onChange&&this.isOnChangeEnabled&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},n.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(t in n&&String(n[t])===String(e))return n;if(n.hasOwnProperty("options")){var a=n;if(a.options)for(var o=0,l=a.options;o<l.length;o++){var r=l[o];if(String(r[t])===String(e))return r}}}return null},n.prototype.search=function(n){if(""!==(this.searchValue=n).trim()){var a=this.main.config.searchFilter,e=this.data.slice(0);n=n.trim();var t=e.map(function(e){if(e.hasOwnProperty("options")){var t=e,i=[];if(t.options&&(i=t.options.filter(function(e){return a(e,n)})),0!==i.length){var s=Object.assign({},t);return s.options=i,s}}return e.hasOwnProperty("text")&&a(e,n)?e:null});this.filtered=t.filter(function(e){return e})}else this.filtered=null},n);function n(e){this.contentOpen=!1,this.contentPosition="below",this.isOnChangeEnabled=!0,this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}function r(e){return void 0!==e.text||(console.error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e)),!1)}t.Data=s,t.validateData=function(e){if(!e)return console.error("Data must be an array of objects"),!1;for(var t=0,i=0,s=e;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){r(l[o])||t++}}}else r(n)||t++}return 0===t},t.validateOption=r},function(e,t,i){"use strict";t.__esModule=!0;var s=i(3),n=i(4),a=i(5),o=i(1),l=i(0),r=(c.prototype.validate=function(e){var t="string"==typeof e.select?document.querySelector(e.select):e.select;if(!t)throw new Error("Could not find select element");if("SELECT"!==t.tagName)throw new Error("Element isnt of type select");return t},c.prototype.selected=function(){if(this.config.isMultiple){for(var e=[],t=0,i=n=this.data.getSelected();t<i.length;t++){var s=i[t];e.push(s.value)}return e}var n;return(n=this.data.getSelected())?n.value:""},c.prototype.set=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.select.setValue(),this.data.onDataChange(),this.render(),i&&this.close()},c.prototype.setSelected=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.set(e,t,i,s)},c.prototype.setData=function(e){if(o.validateData(e)){var t=JSON.parse(JSON.stringify(e)),i=this.data.getSelected();if(this.config.isAjax&&i)if(this.config.isMultiple)for(var s=0,n=i.reverse();s<n.length;s++){var a=n[s];t.unshift(a)}else t.unshift(this.data.getSelected()),t.unshift({text:"",placeholder:!0});this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect()}else console.error("Validation problem on: #"+this.select.element.id)},c.prototype.addData=function(e){o.validateData([e])?(this.data.add(this.data.newOption(e)),this.select.create(this.data.data),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()):console.error("Validation problem on: #"+this.select.element.id)},c.prototype.open=function(){var e=this;if(this.config.isEnabled&&!this.data.contentOpen){if(this.beforeOpen&&this.beforeOpen(),this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.plus.classList.add("ss-cross"):this.slim.singleSelected&&(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.config.addToBody){var t=this.slim.container.getBoundingClientRect();this.slim.content.style.top=t.top+t.height+window.scrollY+"px",this.slim.content.style.left=t.left+window.scrollX+"px",this.slim.content.style.width=t.width+"px"}if(this.slim.content.classList.add(this.config.open),"up"===this.config.showContent.toLowerCase()?this.moveContentAbove():"down"===this.config.showContent.toLowerCase()?this.moveContentBelow():"above"===l.putContent(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),!this.config.isMultiple){var i=this.data.getSelected();if(i){var s=i.id,n=this.slim.list.querySelector('[data-id="'+s+'"]');n&&l.ensureElementInView(this.slim.list,n)}}setTimeout(function(){e.data.contentOpen=!0,e.config.searchFocus&&e.slim.search.input.focus(),e.afterOpen&&e.afterOpen()},this.config.timeoutDelay)}},c.prototype.close=function(){var e=this;this.data.contentOpen&&(this.beforeClose&&this.beforeClose(),this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""),setTimeout(function(){e.slim.content.removeAttribute("style"),e.data.contentPosition="below",e.config.isMultiple&&e.slim.multiSelected?(e.slim.multiSelected.container.classList.remove(e.config.openAbove),e.slim.multiSelected.container.classList.remove(e.config.openBelow)):e.slim.singleSelected&&(e.slim.singleSelected.container.classList.remove(e.config.openAbove),e.slim.singleSelected.container.classList.remove(e.config.openBelow)),e.slim.search.input.blur(),e.afterClose&&e.afterClose()},this.config.timeoutDelay))},c.prototype.moveContentAbove=function(){var e=0;this.config.isMultiple&&this.slim.multiSelected?e=this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected&&(e=this.slim.singleSelected.container.offsetHeight);var t=e+this.slim.content.offsetHeight-1;this.slim.content.style.margin="-"+t+"px 0 0 0",this.slim.content.style.height=t-e+1+"px",this.slim.content.style.transformOrigin="center bottom",this.data.contentPosition="above",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.container.classList.add(this.config.openAbove)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.container.classList.add(this.config.openAbove))},c.prototype.moveContentBelow=function(){this.data.contentPosition="below",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.add(this.config.openBelow)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.add(this.config.openBelow))},c.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.triggerMutationObserver=!0},c.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.triggerMutationObserver=!0},c.prototype.search=function(t){if(this.data.searchValue!==t)if(this.slim.search.input.value=t,this.config.isAjax){var i=this;this.config.isSearching=!0,this.render(),this.ajax&&this.ajax(t,function(e){i.config.isSearching=!1,Array.isArray(e)?(e.unshift({text:"",placeholder:!0}),i.setData(e),i.data.search(t),i.render()):"string"==typeof e?i.slim.options(e):i.render()})}else this.data.search(t),this.render()},c.prototype.setSearchText=function(e){this.config.searchText=e},c.prototype.render=function(){this.config.isMultiple?this.slim.values():(this.slim.placeholder(),this.slim.deselect()),this.slim.options()},c.prototype.destroy=function(e){void 0===e&&(e=null);var t=e?document.querySelector("."+e+".ss-main"):this.slim.container,i=e?document.querySelector("[data-ssid="+e+"]"):this.select.element;if(t&&i&&(i.style.display="",delete i.dataset.ssid,i.slim=null,t.parentElement&&t.parentElement.removeChild(t),this.config.addToBody)){var s=e?document.querySelector("."+e+".ss-content"):this.slim.content;if(!s)return;document.body.removeChild(s)}},c);function c(e){var t=this;this.ajax=null,this.addable=null,this.beforeOnChange=null,this.onChange=null,this.beforeOpen=null,this.afterOpen=null,this.beforeClose=null,this.afterClose=null;var i=this.validate(e);i.dataset.ssid&&this.destroy(i.dataset.ssid),e.ajax&&(this.ajax=e.ajax),e.addable&&(this.addable=e.addable),this.config=new s.Config({select:i,isAjax:!!e.ajax,showSearch:e.showSearch,searchPlaceholder:e.searchPlaceholder,searchText:e.searchText,searchingText:e.searchingText,searchFocus:e.searchFocus,searchHighlight:e.searchHighlight,searchFilter:e.searchFilter,closeOnSelect:e.closeOnSelect,showContent:e.showContent,placeholderText:e.placeholder,allowDeselect:e.allowDeselect,allowDeselectOption:e.allowDeselectOption,hideSelectedOption:e.hideSelectedOption,deselectLabel:e.deselectLabel,isEnabled:e.isEnabled,valuesUseText:e.valuesUseText,showOptionTooltips:e.showOptionTooltips,selectByGroup:e.selectByGroup,limit:e.limit,timeoutDelay:e.timeoutDelay,addToBody:e.addToBody}),this.select=new n.Select({select:i,main:this}),this.data=new o.Data({main:this}),this.slim=new a.Slim({main:this}),this.select.element.parentNode&&this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),e.data?this.setData(e.data):this.render(),document.addEventListener("click",function(e){e.target&&!l.hasClassInTree(e.target,t.config.id)&&t.close()}),"auto"===this.config.showContent&&window.addEventListener("scroll",l.debounce(function(e){t.data.contentOpen&&("above"===l.putContent(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())}),!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange),e.beforeOpen&&(this.beforeOpen=e.beforeOpen),e.afterOpen&&(this.afterOpen=e.afterOpen),e.beforeClose&&(this.beforeClose=e.beforeClose),e.afterClose&&(this.afterClose=e.afterClose),this.config.isEnabled||this.disable()}t.default=r},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.searchFilter=function(e,t){return-1!==e.text.toLowerCase().indexOf(t.toLowerCase())},n);function n(e){this.id="",this.isMultiple=!1,this.isAjax=!1,this.isSearching=!1,this.showSearch=!0,this.searchFocus=!0,this.searchHighlight=!1,this.closeOnSelect=!0,this.showContent="auto",this.searchPlaceholder="Search",this.searchText="No Results",this.searchingText="Searching...",this.placeholderText="Select Value",this.allowDeselect=!1,this.allowDeselectOption=!1,this.hideSelectedOption=!1,this.deselectLabel="x",this.isEnabled=!0,this.valuesUseText=!1,this.showOptionTooltips=!1,this.selectByGroup=!1,this.limit=0,this.timeoutDelay=200,this.addToBody=!1,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.searchHighlighter="ss-search-highlight",this.addable="ss-addable",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.optgroupLabelSelectable="ss-optgroup-label-selectable",this.option="ss-option",this.optionSelected="ss-option-selected",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.className.split(" "),this.isMultiple=e.select.multiple,this.isAjax=e.isAjax,this.showSearch=!1!==e.showSearch,this.searchFocus=!1!==e.searchFocus,this.searchHighlight=!0===e.searchHighlight,this.closeOnSelect=!1!==e.closeOnSelect,e.showContent&&(this.showContent=e.showContent),this.isEnabled=!1!==e.isEnabled,e.searchPlaceholder&&(this.searchPlaceholder=e.searchPlaceholder),e.searchText&&(this.searchText=e.searchText),e.searchingText&&(this.searchingText=e.searchingText),e.placeholderText&&(this.placeholderText=e.placeholderText),this.allowDeselect=!0===e.allowDeselect,this.allowDeselectOption=!0===e.allowDeselectOption,this.hideSelectedOption=!0===e.hideSelectedOption,e.deselectLabel&&(this.deselectLabel=e.deselectLabel),e.valuesUseText&&(this.valuesUseText=e.valuesUseText),e.showOptionTooltips&&(this.showOptionTooltips=e.showOptionTooltips),e.selectByGroup&&(this.selectByGroup=e.selectByGroup),e.limit&&(this.limit=e.limit),e.searchFilter&&(this.searchFilter=e.searchFilter),null!=e.timeoutDelay&&(this.timeoutDelay=e.timeoutDelay),this.addToBody=!0===e.addToBody}t.Config=s},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.setValue=function(){if(this.main.data.getSelected()){if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=0,i=this.element.options;t<i.length;t++){var s=i[t];s.selected=!1;for(var n=0,a=e;n<a.length;n++)a[n].value===s.value&&(s.selected=!0)}else e=this.main.data.getSelected(),this.element.value=e?e.value:"";this.main.data.isOnChangeEnabled=!1,this.element.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.main.data.isOnChangeEnabled=!0}},n.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none",this.element.dataset.ssid=this.main.config.id},n.prototype.addEventListeners=function(){var t=this;this.element.addEventListener("change",function(e){t.main.data.setSelectedFromSelect(),t.main.render()})},n.prototype.addMutationObserver=function(){var t=this;this.main.config.isAjax||(this.mutationObserver=new MutationObserver(function(e){t.triggerMutationObserver&&(t.main.data.parseSelectData(),t.main.data.setSelectedFromSelect(),t.main.render(),e.forEach(function(e){"class"===e.attributeName&&t.main.slim.updateContainerDivClass(t.main.slim.container)}))}),this.observeMutationObserver())},n.prototype.observeMutationObserver=function(){this.mutationObserver&&this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},n.prototype.disconnectMutationObserver=function(){this.mutationObserver&&this.mutationObserver.disconnect()},n.prototype.create=function(e){this.element.innerHTML="";for(var t=0,i=e;t<i.length;t++){var s=i[t];if(s.hasOwnProperty("options")){var n=s,a=document.createElement("optgroup");if(a.label=n.label,n.options)for(var o=0,l=n.options;o<l.length;o++){var r=l[o];a.appendChild(this.createOption(r))}this.element.appendChild(a)}else this.element.appendChild(this.createOption(s))}},n.prototype.createOption=function(t){var i=document.createElement("option");return i.value=t.value||t.text,i.innerHTML=t.innerHTML||t.text,t.selected&&(i.selected=t.selected),t.disabled&&(i.disabled=!0),t.placeholder&&i.setAttribute("data-placeholder","true"),t.class&&t.class.split(" ").forEach(function(e){i.classList.add(e)}),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach(function(e){i.setAttribute("data-"+e,t.data[e])}),i},n);function n(e){this.triggerMutationObserver=!0,this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.mutationObserver=null,this.addMutationObserver(),this.element.slim=e.main}t.Select=s},function(e,t,i){"use strict";t.__esModule=!0;var a=i(0),o=i(1),s=(n.prototype.containerDiv=function(){var e=document.createElement("div");return e.style.cssText=this.main.config.style,this.updateContainerDivClass(e),e},n.prototype.updateContainerDivClass=function(e){this.main.config.class=this.main.select.element.className.split(" "),e.className="",e.classList.add(this.main.config.id),e.classList.add(this.main.config.main);for(var t=0,i=this.main.config.class;t<i.length;t++){var s=i[t];""!==s.trim()&&e.classList.add(s)}},n.prototype.singleSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),e.appendChild(i);var s=document.createElement("span");s.innerHTML=this.main.config.deselectLabel,s.classList.add("ss-deselect"),s.onclick=function(e){e.stopPropagation(),t.main.config.isEnabled&&t.main.set("")},e.appendChild(s);var n=document.createElement("span");n.classList.add(this.main.config.arrow);var a=document.createElement("span");return a.classList.add("arrow-down"),n.appendChild(a),e.appendChild(n),e.onclick=function(){t.main.config.isEnabled&&(t.main.data.contentOpen?t.main.close():t.main.open())},{container:e,placeholder:i,deselect:s,arrowIcon:{container:n,arrow:a}}},n.prototype.placeholder=function(){var e=this.main.data.getSelected();if(null===e||e&&e.placeholder){var t=document.createElement("span");t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.placeholderText,this.singleSelected&&(this.singleSelected.placeholder.innerHTML=t.outerHTML)}else{var i="";e&&(i=e.innerHTML&&!0!==this.main.config.valuesUseText?e.innerHTML:e.text),this.singleSelected&&(this.singleSelected.placeholder.innerHTML=e?i:"")}},n.prototype.deselect=function(){if(this.singleSelected){if(!this.main.config.allowDeselect)return void this.singleSelected.deselect.classList.add("ss-hide");""===this.main.selected()?this.singleSelected.deselect.classList.add("ss-hide"):this.singleSelected.deselect.classList.remove("ss-hide")}},n.prototype.multiSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),e.appendChild(i);var s=document.createElement("div");s.classList.add(this.main.config.add);var n=document.createElement("span");return n.classList.add(this.main.config.plus),n.onclick=function(e){t.main.data.contentOpen&&(t.main.close(),e.stopPropagation())},s.appendChild(n),e.appendChild(s),e.onclick=function(e){t.main.config.isEnabled&&(e.target.classList.contains(t.main.config.valueDelete)||(t.main.data.contentOpen?t.main.close():t.main.open()))},{container:e,values:i,add:s,plus:n}},n.prototype.values=function(){if(this.multiSelected){for(var e,t=this.multiSelected.values.childNodes,i=this.main.data.getSelected(),s=[],n=0,a=t;n<a.length;n++){var o=a[n];e=!0;for(var l=0,r=i;l<r.length;l++){var c=r[l];String(c.id)===String(o.dataset.id)&&(e=!1)}e&&s.push(o)}for(var d=0,h=s;d<h.length;d++){var u=h[d];u.classList.add("ss-out"),this.multiSelected.values.removeChild(u)}for(t=this.multiSelected.values.childNodes,c=0;c<i.length;c++){e=!1;for(var p=0,m=t;p<m.length;p++)o=m[p],String(i[c].id)===String(o.dataset.id)&&(e=!0);e||(0!==t.length&&HTMLElement.prototype.insertAdjacentElement?0===c?this.multiSelected.values.insertBefore(this.valueDiv(i[c]),t[c]):t[c-1].insertAdjacentElement("afterend",this.valueDiv(i[c])):this.multiSelected.values.appendChild(this.valueDiv(i[c])))}if(0===i.length){var f=document.createElement("span");f.classList.add(this.main.config.disabled),f.innerHTML=this.main.config.placeholderText,this.multiSelected.values.innerHTML=f.outerHTML}}},n.prototype.valueDiv=function(a){var o=this,e=document.createElement("div");e.classList.add(this.main.config.value),e.dataset.id=a.id;var t=document.createElement("span");t.classList.add(this.main.config.valueText),t.innerHTML=a.innerHTML&&!0!==this.main.config.valuesUseText?a.innerHTML:a.text,e.appendChild(t);var i=document.createElement("span");return i.classList.add(this.main.config.valueDelete),i.innerHTML=this.main.config.deselectLabel,i.onclick=function(e){e.preventDefault(),e.stopPropagation();var t=!1;if(o.main.config.isEnabled){if(o.main.beforeOnChange||(t=!0),o.main.beforeOnChange){for(var i=o.main.data.getSelected(),s=JSON.parse(JSON.stringify(i)),n=0;n<s.length;n++)s[n].id===a.id&&s.splice(n,1);!1!==o.main.beforeOnChange(s)&&(t=!0)}t&&(o.main.data.removeFromSelected(a.id,"id"),o.main.render(),o.main.select.setValue(),o.main.data.onDataChange())}},e.appendChild(i),e},n.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},n.prototype.searchDiv=function(){var n=this,e=document.createElement("div"),s=document.createElement("input"),a=document.createElement("div");e.classList.add(this.main.config.search);var t={container:e,input:s};return this.main.config.showSearch||(e.classList.add(this.main.config.hide),s.readOnly=!0),s.type="search",s.placeholder=this.main.config.searchPlaceholder,s.tabIndex=0,s.setAttribute("aria-label",this.main.config.searchPlaceholder),s.setAttribute("autocapitalize","off"),s.setAttribute("autocomplete","off"),s.setAttribute("autocorrect","off"),s.onclick=function(e){setTimeout(function(){""===e.target.value&&n.main.search("")},10)},s.onkeydown=function(e){"ArrowUp"===e.key?(n.main.open(),n.highlightUp(),e.preventDefault()):"ArrowDown"===e.key?(n.main.open(),n.highlightDown(),e.preventDefault()):"Tab"===e.key?n.main.data.contentOpen?n.main.close():setTimeout(function(){n.main.close()},n.main.config.timeoutDelay):"Enter"===e.key&&e.preventDefault()},s.onkeyup=function(e){var t=e.target;if("Enter"===e.key){if(n.main.addable&&e.ctrlKey)return a.click(),e.preventDefault(),void e.stopPropagation();var i=n.list.querySelector("."+n.main.config.highlighted);i&&i.click()}else"ArrowUp"===e.key||"ArrowDown"===e.key||("Escape"===e.key?n.main.close():n.main.config.showSearch&&n.main.data.contentOpen?n.main.search(t.value):s.value="");e.preventDefault(),e.stopPropagation()},s.onfocus=function(){n.main.open()},e.appendChild(s),this.main.addable&&(a.classList.add(this.main.config.addable),a.innerHTML="+",a.onclick=function(e){if(n.main.addable){e.preventDefault(),e.stopPropagation();var t=n.search.input.value;if(""===t.trim())return void n.search.input.focus();var i=n.main.addable(t),s="";if(!i)return;"object"==typeof i?o.validateOption(i)&&(n.main.addData(i),s=i.value?i.value:i.text):(n.main.addData(n.main.data.newOption({text:i,value:i})),s=i),n.main.search(""),setTimeout(function(){n.main.set(s,"value",!1,!1)},100),n.main.config.closeOnSelect&&setTimeout(function(){n.main.close()},100)}},e.appendChild(a),t.addable=a),t},n.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.previousSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}if(t&&t.classList.contains(this.main.config.optgroupLabel)&&(t=null),null===t){var s=e.parentNode;if(s.classList.contains(this.main.config.optgroup)&&s.previousSibling){var n=s.previousSibling.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");n.length&&(t=n[n.length-1])}}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.highlightDown=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.nextSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.nextSibling;else t=this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===t&&null!==e){var i=e.parentNode;i.classList.contains(this.main.config.optgroup)&&i.nextSibling&&(t=i.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")"))}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.listDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.list),e},n.prototype.options=function(e){void 0===e&&(e="");var t,i=this.main.data.filtered||this.main.data.data;if((this.list.innerHTML="")!==e)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=e,void this.list.appendChild(t);if(this.main.config.isAjax&&this.main.config.isSearching)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.searchingText,void this.list.appendChild(t);if(0===i.length){var s=document.createElement("div");return s.classList.add(this.main.config.option),s.classList.add(this.main.config.disabled),s.innerHTML=this.main.config.searchText,void this.list.appendChild(s)}for(var n=function(e){if(e.hasOwnProperty("label")){var t=e,n=document.createElement("div");n.classList.add(c.main.config.optgroup);var i=document.createElement("div");i.classList.add(c.main.config.optgroupLabel),c.main.config.selectByGroup&&c.main.config.isMultiple&&i.classList.add(c.main.config.optgroupLabelSelectable),i.innerHTML=t.label,n.appendChild(i);var s=t.options;if(s){for(var a=0,o=s;a<o.length;a++){var l=o[a];n.appendChild(c.option(l))}if(c.main.config.selectByGroup&&c.main.config.isMultiple){var r=c;i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();for(var t=0,i=n.children;t<i.length;t++){var s=i[t];-1!==s.className.indexOf(r.main.config.option)&&s.click()}})}}c.list.appendChild(n)}else c.list.appendChild(c.option(e))},c=this,a=0,o=i;a<o.length;a++)n(o[a])},n.prototype.option=function(r){if(r.placeholder){var e=document.createElement("div");return e.classList.add(this.main.config.option),e.classList.add(this.main.config.hide),e}var t=document.createElement("div");t.classList.add(this.main.config.option),r.class&&r.class.split(" ").forEach(function(e){t.classList.add(e)}),r.style&&(t.style.cssText=r.style);var c=this.main.data.getSelected();t.dataset.id=r.id,this.main.config.searchHighlight&&this.main.slim&&r.innerHTML&&""!==this.main.slim.search.input.value.trim()?t.innerHTML=a.highlight(r.innerHTML,this.main.slim.search.input.value,this.main.config.searchHighlighter):r.innerHTML&&(t.innerHTML=r.innerHTML),this.main.config.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent);var d=this;t.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=this.dataset.id;if(!0===r.selected&&d.main.config.allowDeselectOption){var i=!1;if(d.main.beforeOnChange&&d.main.config.isMultiple||(i=!0),d.main.beforeOnChange&&d.main.config.isMultiple){for(var s=d.main.data.getSelected(),n=JSON.parse(JSON.stringify(s)),a=0;a<n.length;a++)n[a].id===t&&n.splice(a,1);!1!==d.main.beforeOnChange(n)&&(i=!0)}i&&(d.main.config.isMultiple?(d.main.data.removeFromSelected(t,"id"),d.main.render(),d.main.select.setValue(),d.main.data.onDataChange()):d.main.set(""))}else{if(r.disabled||r.selected)return;if(d.main.config.limit&&Array.isArray(c)&&d.main.config.limit<=c.length)return;if(d.main.beforeOnChange){var o=void 0,l=JSON.parse(JSON.stringify(d.main.data.getObjectFromData(t)));l.selected=!0,d.main.config.isMultiple?(o=JSON.parse(JSON.stringify(c))).push(l):o=JSON.parse(JSON.stringify(l)),!1!==d.main.beforeOnChange(o)&&d.main.set(t,"id",d.main.config.closeOnSelect)}else d.main.set(t,"id",d.main.config.closeOnSelect)}});var i=c&&a.isValueInArrayOfObjects(c,"id",r.id);return(r.disabled||i)&&(t.onclick=null,d.main.config.allowDeselectOption||t.classList.add(this.main.config.disabled),d.main.config.hideSelectedOption&&t.classList.add(this.main.config.hide)),i?t.classList.add(this.main.config.optionSelected):t.classList.remove(this.main.config.optionSelected),t},n);function n(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.singleSelected=null,this.multiSelected=null,this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.multiSelected&&this.container.appendChild(this.multiSelected.container)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container)),this.main.config.addToBody?(this.content.classList.add(this.main.config.id),document.body.appendChild(this.content)):this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)}t.Slim=s}],n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)).default;function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var i,s});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/Browser.ts":
/*!************************!*\
  !*** ./src/Browser.ts ***!
  \************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.init = function () {
        var version = navigator.appVersion.split(' ').find(function (e) { return e.indexOf('Chrome') != -1; }).split('/')[1].split('.');
        var accumulator = 0;
        for (var i = 0; i < version.length; i++) {
            accumulator += version[i] * Math.pow(10, (version.length - i - 1) * 2);
        }
        this.version = accumulator;
    };
    Browser.getVersion = function () {
        return this.version;
    };
    return Browser;
}());



/***/ }),

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ "./src/Language.ts");

/**
 * A generic component of Stadia+
 *
 * @export the Component type.
 * @class Component
 */
var Component = /** @class */ (function () {
    function Component() {
        /**
         * The Component's name.
         */
        this.name = 'My Component';
        this.tag = "component";
    }
    /**
     * This method is called whenever the component should start loading.
     */
    Component.prototype.load = function () {
        this.name = _Language__WEBPACK_IMPORTED_MODULE_0__["Language"].get(this.tag + '.name');
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);
        this.updateRenderer();
        this.onStart();
    };
    Component.prototype.updateRenderer = function () {
        var renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        this.renderer = Array.from(renderers).find(function (renderer) { return renderer.style.opacity !== '0'; });
    };
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    Component.prototype.exists = function () {
        if (this.renderer.style.opacity === '0')
            return false;
        return document.querySelector('#' + this.id) !== null;
    };
    /**
     * This method is called whenever the component is unloading.
     */
    Component.prototype.unload = function () {
        this.onStop();
    };
    /**
     * This method is called when the Component should start.
     */
    Component.prototype.onStart = function () { };
    /**
     * This method is called when the Component should stop.
     */
    Component.prototype.onStop = function () { };
    /**
     * This method is called once every second.
     */
    Component.prototype.onUpdate = function () { };
    return Component;
}());



/***/ }),

/***/ "./src/ComponentLoader.ts":
/*!********************************!*\
  !*** ./src/ComponentLoader.ts ***!
  \********************************/
/*! exports provided: ComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");

/**
 * A utility class responsible for loading [[Component|Components]] and delivering events.
 *
 * @export the ComponentLoader type.
 * @class ComponentLoader
 */
var ComponentLoader = /** @class */ (function () {
    function ComponentLoader() {
        this.components = [];
    }
    /**
     * Registers a new component.
     *
     * @param {Component} component the component to register.
     */
    ComponentLoader.prototype.register = function (component) {
        this.components.push(component);
    };
    /**
     * Unregisters a component.
     *
     * @param {Component} component
     */
    ComponentLoader.prototype.unregister = function (component) {
        this.components.filter(function (e) { return e.id !== component.id; });
    };
    /**
     * Starts the component loader.
     */
    ComponentLoader.prototype.start = function () {
        var _this = this;
        _Storage__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].COMPONENTS.get(function (result) {
            var storage = result.components;
            if (storage === undefined) {
                storage = {};
            }
            for (var _i = 0, _a = _this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (storage[component.tag] === undefined) {
                    storage[component.tag] = {};
                }
                if (storage[component.tag].enabled === undefined) {
                    storage[component.tag].enabled = true;
                }
                component.enabled = storage[component.tag].enabled;
                if (component.enabled && !component.active)
                    component.load();
            }
            ;
            _Storage__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].COMPONENTS.set(storage);
            _this.startTimer();
        });
    };
    /**
     * Stops the component loader.
     */
    ComponentLoader.prototype.stop = function () {
        this.components.forEach(function (component) {
            if (component.active)
                component.unload();
        });
        this.stopTimer();
    };
    ComponentLoader.prototype.startTimer = function () {
        var self = this;
        this.timer = setInterval(function () {
            self.components.forEach(function (component) {
                if (component.active)
                    component.onUpdate();
            });
        }, 1000);
    };
    ComponentLoader.prototype.stopTimer = function () {
        clearInterval(this.timer);
    };
    return ComponentLoader;
}());



/***/ }),

/***/ "./src/Language.ts":
/*!*************************!*\
  !*** ./src/Language.ts ***!
  \*************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");
/* harmony import */ var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/en-US.json */ "./src/lang/en-US.json");
var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/en-US.json */ "./src/lang/en-US.json", 1);
/* harmony import */ var _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/sv-SE.json */ "./src/lang/sv-SE.json");
var _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/sv-SE.json */ "./src/lang/sv-SE.json", 1);
/* harmony import */ var _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/fr-FR.json */ "./src/lang/fr-FR.json");
var _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/fr-FR.json */ "./src/lang/fr-FR.json", 1);
/* harmony import */ var _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/it-IT.json */ "./src/lang/it-IT.json");
var _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/it-IT.json */ "./src/lang/it-IT.json", 1);
/* harmony import */ var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang/es-ES.json */ "./src/lang/es-ES.json");
var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/es-ES.json */ "./src/lang/es-ES.json", 1);
/* harmony import */ var _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lang/de-DE.json */ "./src/lang/de-DE.json");
var _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/de-DE.json */ "./src/lang/de-DE.json", 1);
/* harmony import */ var _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lang/uk-UA.json */ "./src/lang/uk-UA.json");
var _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/uk-UA.json */ "./src/lang/uk-UA.json", 1);
/* harmony import */ var _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lang/eu-ES.json */ "./src/lang/eu-ES.json");
var _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/eu-ES.json */ "./src/lang/eu-ES.json", 1);
/* harmony import */ var _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lang/gl-ES.json */ "./src/lang/gl-ES.json");
var _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/gl-ES.json */ "./src/lang/gl-ES.json", 1);
/* harmony import */ var _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lang/ru-RU.json */ "./src/lang/ru-RU.json");
var _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/ru-RU.json */ "./src/lang/ru-RU.json", 1);
/* harmony import */ var _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lang/nl-BE.json */ "./src/lang/nl-BE.json");
var _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/nl-BE.json */ "./src/lang/nl-BE.json", 1);
/* harmony import */ var _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lang/pt-BR.json */ "./src/lang/pt-BR.json");
var _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/pt-BR.json */ "./src/lang/pt-BR.json", 1);














var chrome = window.chrome;
var Language = /** @class */ (function () {
    function Language(name, tag, data) {
        this.data = {};
        this.tag = tag;
        this.name = name;
        this.data = data;
    }
    Language.prototype.register = function () {
        Language.languages.push(this);
    };
    Language.prototype.get = function (name, vars) {
        var keys = name.split(/\./g);
        var val = this.data;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            val = val[key];
        }
        if (vars !== undefined) {
            for (var _var in vars) {
                val = val.split('{{' + _var + '}}').join(vars[_var]);
            }
        }
        return val;
    };
    Language.prototype.setDefault = function () {
        Language.default = this;
    };
    Language.load = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        // Check for the first language that isn't equal to the default
        _Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.get(function (result) {
            var language = result[_Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.tag];
            if (language === undefined || language === 'automatic') {
                language = _this.automatic();
            }
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Using language configuration ' + language);
            _this.languages.forEach(function (lang, index) {
                if (lang.tag === language) {
                    _this.current = lang;
                }
                if (index === _this.languages.length - 1) {
                    callback();
                }
            });
        });
    };
    Language.set = function (language) {
        this.current = language;
    };
    Language.automatic = function () {
        var _this = this;
        return window.navigator.languages.find(function (l) {
            return l.length >= 5 &&
                (_this.default === undefined || l !== _this.default.tag);
        });
    };
    Language.init = function () {
        var lang_deDE = new Language('Deutsche (DE)', 'de-DE', _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7__);
        lang_deDE.register();
        var lang_esES = new Language('Español (ES)', 'es-ES', _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6__);
        lang_esES.register();
        var lang_enUS = new Language('English (US)', 'en-US', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__);
        lang_enUS.register();
        lang_enUS.setDefault();
        // const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
        // lang_enSTEEF.register();
        var lang_frFR = new Language('Français (FR)', 'fr-FR', _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4__);
        lang_frFR.register();
        var lang_itIT = new Language('Italiano (IT)', 'it-IT', _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5__);
        lang_itIT.register();
        var lang_svSE = new Language('Svenska (SE)', 'sv-SE', _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3__);
        lang_svSE.register();
        var lang_ukUA = new Language('Українська (UA)', 'uk-UA', _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8__);
        lang_ukUA.register();
        var lang_euES = new Language('Euskara (EU)', 'eu-ES', _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9__);
        lang_euES.register();
        var lang_glES = new Language('Galego (GL)', 'gl-ES', _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10__);
        lang_glES.register();
        var lang_ruRU = new Language('русский (RU)', 'ru-RU', _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11__);
        lang_ruRU.register();
        var lang_nlBE = new Language('Nederlands (BE)', 'nl-BE', _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12__);
        lang_nlBE.register();
        var lang_ptBR = new Language('Português (BR)', 'pt-BR', _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13__);
        lang_ptBR.register();
    };
    Language.get = function (name, vars) {
        if (this.current === undefined) {
            this.current = this.default;
        }
        var val = this.current.get(name, vars);
        return val;
    };
    Language.languages = [];
    return Language;
}());



/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix = '[Stadia+]';
var Logger = /** @class */ (function () {
    function Logger() {
        this.info = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83D\uDCC3 " + obj.join(' '), 'color: black');
        };
        this.warning = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83D\uDE1F " + obj.join(' '), 'color: orange');
        };
        this.error = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\u274C " + obj.join(' '), 'color: red; font-weight: 700');
        };
        this.component = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83E\uDDE9 " + obj.join(' '), 'color: darkgreen');
        };
        /**
         * Dubiously created by Adrian Cooney
         * @author http://adriancooney.github.io
         */
        this.image = function (url, width, height) {
            var getBox = function (width, height) {
                return {
                    string: "+",
                    style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: 0;"
                };
            };
            var dim = getBox(width, height);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
        };
    }
    return Logger;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Logger());


/***/ }),

/***/ "./src/Shortcut.ts":
/*!*************************!*\
  !*** ./src/Shortcut.ts ***!
  \*************************/
/*! exports provided: Shortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony import */ var _util_downloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/downloader */ "./src/util/downloader.js");

var Shortcut = /** @class */ (function () {
    function Shortcut(url, name) {
        this.url = url;
        this.name = name;
    }
    Shortcut.prototype.save = function () {
        _util_downloader__WEBPACK_IMPORTED_MODULE_0__["default"].download("<html><body><script>window.location=\"" + this.url + "\"</script></body></html>", this.name + ".htm", "text/html");
    };
    return Shortcut;
}());



/***/ }),

/***/ "./src/Storage.ts":
/*!************************!*\
  !*** ./src/Storage.ts ***!
  \************************/
/*! exports provided: LocalStorage, SyncStorage, StorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncStorage", function() { return SyncStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageManager", function() { return StorageManager; });
var chrome = window.chrome;
var LocalStorage = /** @class */ (function () {
    function LocalStorage(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    LocalStorage.prototype.get = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.get([this.tag], callback);
    };
    LocalStorage.prototype.set = function (value, callback) {
        var _a;
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.set((_a = {}, _a[this.tag] = value, _a), callback);
    };
    LocalStorage.get = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.get(storages.map(function (e) { return e.tag; }), callback);
    };
    LocalStorage.set = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.set(storages, callback);
    };
    LocalStorage.clear = function () {
        chrome.storage.local.clear();
    };
    LocalStorage.CODEC = new LocalStorage('Codec', 'codec');
    LocalStorage.RESOLUTION = new LocalStorage('Resolution', 'resolution');
    LocalStorage.MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');
    LocalStorage.CACHE_VERSION = new LocalStorage('Cache Version', 'cache-version');
    return LocalStorage;
}());

var SyncStorage = /** @class */ (function () {
    function SyncStorage(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    SyncStorage.prototype.get = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.get([this.tag], callback);
    };
    SyncStorage.prototype.set = function (value, callback) {
        var _a;
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.set((_a = {}, _a[this.tag] = value, _a), callback);
    };
    SyncStorage.get = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.get(storages.map(function (e) { return e.tag; }), callback);
    };
    SyncStorage.set = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.set(storages, callback);
    };
    SyncStorage.clear = function () {
        chrome.storage.sync.clear();
    };
    SyncStorage.LIBRARY_GAMES = new SyncStorage('Library Games', 'games');
    SyncStorage.LIBRARY_SORT_ORDER = new SyncStorage('Sort Order', 'sort-order');
    SyncStorage.LIBRARY_SORT_DIRECTION = new SyncStorage('Sort Direction', 'sort-direction');
    SyncStorage.LANGUAGE = new SyncStorage('Language', 'language');
    SyncStorage.COMPONENTS = new SyncStorage('Components', 'components');
    return SyncStorage;
}());

var StorageManager = /** @class */ (function () {
    function StorageManager(appdata) {
        this.appdata = appdata;
    }
    StorageManager.prototype.checkCacheVersion = function (callback) {
        var _this = this;
        LocalStorage.CACHE_VERSION.get(function (result) {
            var cacheVersion = result[LocalStorage.CACHE_VERSION.tag];
            if (cacheVersion === undefined || _this.appdata['cache-version'] > cacheVersion) {
                _this.appdata['clear-keys'].local.forEach(function (key) {
                    var _a;
                    LocalStorage.set((_a = {}, _a[key] = null, _a));
                });
                _this.appdata['clear-keys'].sync.forEach(function (key) {
                    var _a;
                    SyncStorage.set((_a = {}, _a[key] = null, _a));
                });
            }
            LocalStorage.CACHE_VERSION.set(_this.appdata['cache-version']);
        });
    };
    return StorageManager;
}());



/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.load = function () {
        this.menuElement = document.querySelector('.X1asv');
    };
    Util.prototype.isMenuOpen = function () {
        return this.menuElement.style.opacity !== '0';
    };
    Util.prototype.isInGame = function () {
        return window.location.pathname.indexOf('player') !== -1;
    };
    Util.prototype.isInHome = function () {
        return window.location.pathname.indexOf('home') !== -1;
    };
    Util.prototype.isInStore = function () {
        return window.location.pathname.indexOf('store') !== -1 && !this.isInStoreDetail();
    };
    Util.prototype.isInStoreDetail = function () {
        return window.location.pathname.indexOf('store/details') !== -1;
    };
    Util.prototype.desandbox = function (javascript) {
        var script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
    };
    return Util;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Util());


/***/ }),

/***/ "./src/WebDatabase.ts":
/*!****************************!*\
  !*** ./src/WebDatabase.ts ***!
  \****************************/
/*! exports provided: WebDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDatabase", function() { return WebDatabase; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");

var WebDatabase = /** @class */ (function () {
    function WebDatabase(url) {
        this.url = url;
    }
    WebDatabase.prototype.connect = function (callback) {
        if (this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Already connected to the database.');
            return;
        }
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.url, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    self.connected = true;
                    self.connection = JSON.parse(xhr.responseText);
                    if (callback)
                        callback(self.connection);
                }
                else {
                    self.connected = false;
                    _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error when connecting to database:', xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            self.connected = false;
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error when connecting to database:', xhr.statusText);
        };
        xhr.send(null);
    };
    WebDatabase.prototype.getConnection = function () {
        if (!this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    };
    WebDatabase.prototype.disconnect = function () {
        this.connection = null;
        this.connected = false;
    };
    WebDatabase.prototype.reconnect = function (callback) {
        this.disconnect();
        this.connect(callback);
    };
    return WebDatabase;
}());



/***/ }),

/***/ "./src/appdata.json":
/*!**************************!*\
  !*** ./src/appdata.json ***!
  \**************************/
/*! exports provided: cache-version, clear-keys, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cache-version\":0.1,\"clear-keys\":{\"local\":[\"monitor-stats\"],\"sync\":[]}}");

/***/ }),

/***/ "./src/components/AllowWindowedMode.ts":
/*!*********************************************!*\
  !*** ./src/components/AllowWindowedMode.ts ***!
  \*********************************************/
/*! exports provided: AllowWindowedMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowWindowedMode", function() { return AllowWindowedMode; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var chrome = window.chrome;
/**
 * A button allowing users to play Stadia in windowed mode.
 *
 * @export the AllowWindowedMode type.
 * @class AllowWindowedMode
 * @extends {Component}
 */
var AllowWindowedMode = /** @class */ (function (_super) {
    __extends(AllowWindowedMode, _super);
    function AllowWindowedMode() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'allow-windowed-mode';
        /**
         * Whether windowed mode is enabled or not
         */
        _this.windowed = false;
        // Whether events have been added already or not.
        _this.eventsAdded = false;
        var self = _this;
        // Main event, stops built-in fullscreen events from reaching Stadia whenever windowed mode is enabled.
        window.addEventListener('fullscreenchange', function (event) {
            if (self.windowed) {
                event.stopPropagation();
            }
        }, true);
        return _this;
    }
    /**
     * Enters windowed mode.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.enterWindowed = function () {
        this.windowed = true;
        document.exitFullscreen();
    };
    /**
     * Exits windowed mode
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.exitWindowed = function () {
        this.windowed = false;
        document.documentElement.requestFullscreen();
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onStart = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('component.enabled', { name: this.name }));
        this.active = true;
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'), this.id);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onStop = function () {
        this.exitWindowed();
        this.active = false;
    };
    /**
     * Update button labels and icons to fit current mode.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.updateButton = function () {
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        var icon_exit = chrome.runtime.getURL('images/icons/windowed_exit.svg');
        if (this.windowed) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.fullscreen'));
        }
        else {
            this.button.setIcon(icon);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'));
        }
    };
    /**
     * Called once every second, updates component elements and variables
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onUpdate = function () {
        var _this = this;
        // If menu is open and a game is playing.
        if (_Util__WEBPACK_IMPORTED_MODULE_4__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_4__["default"].isInGame()) {
            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();
                var self_1 = this;
                // Create the button instance
                this.button.create(function () {
                    // If events are already added, don't add them again
                    if (!_this.eventsAdded) {
                        self_1.button.onPressed(function () {
                            if (self_1.windowed) {
                                self_1.exitWindowed();
                            }
                            else {
                                self_1.enterWindowed();
                            }
                            self_1.updateButton();
                        });
                        _this.eventsAdded = true;
                    }
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.exists()) {
            this.button.destroy();
        }
    };
    return AllowWindowedMode;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Clock.ts":
/*!*********************************!*\
  !*** ./src/components/Clock.ts ***!
  \*********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Clock.scss */ "./src/components/styles/Clock.scss");
/* harmony import */ var _styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'clock';
        _this.createElement();
        return _this;
    }
    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     *
     * @memberof Clock
     */
    Clock.prototype.createElement = function () {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    Clock.prototype.onStart = function () {
        this.active = true;
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { 'name': this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    Clock.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { 'name': this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof Clock
     */
    Clock.prototype.onUpdate = function () {
        var _this = this;
        // Only update the clock when it's visible
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                var container = document.querySelector('.hxhAyf');
                container.prepend(this.element);
            }
            var time_1 = new Date().toLocaleTimeString();
            window.requestAnimationFrame(function () {
                _this.element.innerHTML = time_1;
            });
        }
    };
    return Clock;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/ForceCodec.ts":
/*!**************************************!*\
  !*** ./src/components/ForceCodec.ts ***!
  \**************************************/
/*! exports provided: ForceCodec, Codec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceCodec", function() { return ForceCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codec", function() { return Codec; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ForceCodec.scss */ "./src/components/styles/ForceCodec.scss");
/* harmony import */ var _styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIRow */ "./src/ui/UIRow.ts");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
/* harmony import */ var _ForceResolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForceResolution */ "./src/components/ForceResolution.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var chrome = window.chrome;
/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
var ForceCodec = /** @class */ (function (_super) {
    __extends(ForceCodec, _super);
    function ForceCodec(tab, snackbar) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'force-codec';
        /**
         * The current codec.
         */
        _this.codec = Codec.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        return _this;
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    ForceCodec.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.get(function (result) {
            _this.codec = result.codec;
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    ForceCodec.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.set(this.codec, callback);
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onStart = function () {
        var _this = this;
        this.active = true;
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"codec\">\n                                <option value=\"" + Codec.AUTOMATIC + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic') + "</option>\n                                <option value=\"" + Codec.VP9 + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('vp9') + "</option>\n                                <option value=\"" + Codec.H264 + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('h264') + "</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply') + "</a>\n                    </div>\n                    <p class='stadiaplus_muted' id='" + this.id + "-4k-tooltip' style='display: none'>" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-codec.4k-tooltip') + "</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.codec = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(function () {
                    _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get(function (result) {
                        self.select.enable();
                        if (result.resolution === _ForceResolution__WEBPACK_IMPORTED_MODULE_7__["Resolution"].UHD_4K || result.resolution === _ForceResolution__WEBPACK_IMPORTED_MODULE_7__["Resolution"].WQHD) {
                            self.codec = Codec.VP9;
                            self.select.disable();
                            var tooltip = document.getElementById(_this.id + '-4k-tooltip');
                            tooltip.style.display = 'block';
                        }
                        self.select.set(self.codec);
                        ForceCodec.setCodec(self.codec);
                    });
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                self.select.set(self.codec);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get("component.enabled", { name: this.name }));
    };
    /**
     * Sets the used Codec
     *
     * @static
     * @param {number} codec
     * @memberof ForceCodec
     */
    ForceCodec.setCodec = function (codec) {
        var script = document.createElement('script');
        var vp9data = '{"vp9":"ExternalDecoder"}'; // Browser.getVersion() >= 84414402 ? '{"vp9": "libvpx"}' : '{"vp9":"ExternalDecoder"}';
        var h264data = '{"h264":"ExternalDecoder", "vp9":"libvpx"}'; // Browser.getVersion() >= 84414402 ? '{"vp9":"libvpx","h264":"FFmpeg"}' : '{"h264":"ExternalDecoder", "vp9":"libvpx"}';
        switch (codec) {
            case Codec.VP9:
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '" + vp9data + "');\n            ";
                break;
            case Codec.H264:
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '" + h264data + "');\n            ";
                break;
            case Codec.AUTOMATIC:
                script.innerHTML = "\n                localStorage.removeItem(\"video_codec_implementation_by_codec_key\");\n            ";
                break;
            default:
                script.innerHTML = "\n                localStorage.removeItem(\"video_codec_implementation_by_codec_key\");\n            ";
                break;
        }
        document.body.appendChild(script);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onStop = function () {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onUpdate = function () {
    };
    return ForceCodec;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * The different kinds of codecs, represented as numbers.
 *
 * @export the Codec type
 * @class Codec
 */
var Codec = /** @class */ (function () {
    function Codec() {
    }
    /**
     * Automatic codec, let Stadia decide on it's own.
     */
    Codec.AUTOMATIC = 0;
    /**
     * VP9 codec, usually works better than H264 but at the cost of lower quality.
     */
    Codec.VP9 = 1;
    /**
     * H264 codec, high quality and Mac-OS compatible codec but with latency issues.
     */
    Codec.H264 = 2;
    return Codec;
}());



/***/ }),

/***/ "./src/components/ForceResolution.ts":
/*!*******************************************!*\
  !*** ./src/components/ForceResolution.ts ***!
  \*******************************************/
/*! exports provided: ForceResolution, Resolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceResolution", function() { return ForceResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolution", function() { return Resolution; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ForceResolution.scss */ "./src/components/styles/ForceResolution.scss");
/* harmony import */ var _styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIRow */ "./src/ui/UIRow.ts");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var chrome = window.chrome;
/**
 * A dropdown allowing changing of the resolution.
 *
 * @export the ForceResolution type.
 * @class ForceResolution
 * @extends {Component}
 */
var ForceResolution = /** @class */ (function (_super) {
    __extends(ForceResolution, _super);
    function ForceResolution(tab, snackbar) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'force-resolution';
        /**
         * The current resolution.
         */
        _this.resolution = Resolution.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        _this.getStorage();
        window.addEventListener('DOMContentLoaded', function () { return ForceResolution.setResolution(_this.resolution); });
        return _this;
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    ForceResolution.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get(function (result) {
            _this.resolution = result.resolution;
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    ForceResolution.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.set(this.resolution, callback);
    };
    /**
     * Called on startup, initializes important variables.
     */
    ForceResolution.prototype.onStart = function () {
        var _this = this;
        this.active = true;
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"resolution\">\n                                <option value=\"" + Resolution.AUTOMATIC + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic') + "</option>\n                                <option value=\"" + Resolution.UHD_4K + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('4k') + "</option>\n                                <option value=\"" + Resolution.WQHD + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('1440p') + "</option>\n                                <option value=\"" + Resolution.FHD + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('1080p') + "</option>\n                                <option value=\"" + Resolution.HD + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('720p') + " (" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('experimental') + ")</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply') + "</a>\n                    </div>\n\n                    <p class=\"stadiaplus_muted\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-resolution.note') + "</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.resolution = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(function () {
                    _this.select.set(self.resolution);
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                self.select.set(self.resolution);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Sets the user [[Resolution]]
     *
     * @static
     * @param {number} resolution the user Resolution
     * @memberof ForceResolution
     */
    ForceResolution.setResolution = function (resolution) {
        var script = document.createElement('script');
        var height;
        var width;
        switch (resolution) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                break;
            case Resolution.WQHD:
                width = 2560;
                height = 1440;
                break;
            case Resolution.FHD:
                width = 1920;
                height = 1080;
                break;
            case Resolution.HD:
                width = 1280;
                height = 720;
                break;
            case Resolution.AUTOMATIC:
                return;
            default:
                return;
        }
        script.innerHTML = "\n            Object.defineProperty(window.screen, 'availWidth', { value: " + width + " });\n            Object.defineProperty(window.screen, 'availHeight', { value: " + height + " });\n            Object.defineProperty(window.screen, 'width', { value: " + width + " });\n            Object.defineProperty(window.screen, 'height', { value: " + height + " });\n        ";
        document.body.appendChild(script);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    ForceResolution.prototype.onStop = function () {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    ForceResolution.prototype.onUpdate = function () {
    };
    return ForceResolution;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * The different kinds of resolutions, represented as numbers.
 *
 * @export the Resolution type
 * @class Resolution
 */
var Resolution = /** @class */ (function () {
    function Resolution() {
    }
    /**
     * Automatic, let Stadia handle resolutions.
     */
    Resolution.AUTOMATIC = 0;
    /**
     * 4K, or 3840x2160
     */
    Resolution.UHD_4K = 1;
    /**
     * WQHD, or 2560x1440
     */
    Resolution.WQHD = 2;
    /**
     * Full HD, or 1920x1080
     */
    Resolution.FHD = 3;
    /**
     * HD, or 1280x720
     */
    Resolution.HD = 4;
    return Resolution;
}());



/***/ }),

/***/ "./src/components/LibraryFilter.ts":
/*!*****************************************!*\
  !*** ./src/components/LibraryFilter.ts ***!
  \*****************************************/
/*! exports provided: LibraryFilter, FilterOrder, OrderDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryFilter", function() { return LibraryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOrder", function() { return FilterOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDirection", function() { return OrderDirection; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/LibraryFilter.scss */ "./src/components/styles/LibraryFilter.scss");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
/* harmony import */ var _Shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shortcut */ "./src/Shortcut.ts");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/styles/Button.scss */ "./src/ui/styles/Button.scss");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var _a = window, chrome = _a.chrome, Array = _a.Array;
/**
 * A filtering system allowing hiding and showing specific games in your library as well as ordering them by name.
 *
 * @export the LibraryFilter type
 * @class LibraryFilter
 * @extends {Component}
 */
var LibraryFilter = /** @class */ (function (_super) {
    __extends(LibraryFilter, _super);
    function LibraryFilter(snackbar, database, uuidMap, modal) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'library-filter';
        /**
         * List of games and game data imported from the DOM
         */
        _this.games = {};
        // Import database & uuidMap from index.js
        _this.database = database;
        _this.uuidMap = uuidMap;
        // Import snackbar from index.js
        _this.snackbar = snackbar;
        _this.modal = modal;
        // Create new filter bar element
        _this.filterBar = document.createElement('div');
        _this.filterBar.classList.add('stadiaplus_libraryfilter-bar');
        return _this;
    }
    /**
     * Creates a wrapper around every game and initializes the elements necessary to show or hide it.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.createAllWrappers = function () {
        var _this = this;
        this.getStorage(function () {
            var i = 0;
            _this.gameTiles.forEach(function (tile) {
                i++;
                var element = tile;
                _this.createWrapper(element, _this.getUUID(element));
                if (i === _this.gameTiles.length) {
                    _this.updateSortDirection();
                    _this.sortGames();
                }
            });
        });
    };
    /**
     * Get the game UUID from it's jslog attribute.
     *
     * @param {Element} tile
     * @returns
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.getUUID = function (tile) {
        return tile
            .getAttribute('jslog')
            .split('; ')[1]
            .substring(3);
    };
    LibraryFilter.prototype.wrapperExists = function (uuid) {
        return this.renderer.querySelector('#' + this.id + '-' + uuid);
    };
    /**
     * Given a tile element, create a wrapper around it and an icon allowing it to be shown or hidden.
     *
     * @param {Element} element the game element
     * @param {string} uuid the game uuid
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.createWrapper = function (element, uuid) {
        var _this = this;
        if (this.wrapperExists(uuid))
            return;
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        var entry = connection[map[uuid]];
        // Create the wrapper
        var wrapper = document.createElement('div');
        wrapper.setAttribute('game-uuid', uuid);
        wrapper.setAttribute('game-name', entry[1]);
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');
        wrapper.id = this.id + '-' + uuid;
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('stadiaplus_libraryfilter-icon-wrapper');
        // Create the visibility icon
        var visibility = document.createElement('div');
        visibility.classList.add('stadiaplus_libraryfilter-icon');
        visibility.innerHTML = 'visibility';
        // Create the visibility icon
        var shortcut = document.createElement('div');
        shortcut.classList.add('stadiaplus_libraryfilter-icon');
        shortcut.innerHTML = 'add_to_queue';
        // Wrap the wrapper around the element and add the icon before it
        element.parentNode.insertBefore(wrapper, element);
        iconWrapper.appendChild(visibility);
        iconWrapper.appendChild(shortcut);
        wrapper.appendChild(iconWrapper);
        wrapper.appendChild(element);
        // Check the storage for visibility, hide the game if both 'visible' and 'showAll' is false
        if (!this.games.hasOwnProperty(uuid)) {
            this.games[uuid] = { visible: true };
        }
        else if (!this.games[uuid].visible && !this.showAll) {
            wrapper.classList.add('closed');
        }
        // Position the icon in the top right corner rather than the top left using
        // a margin (using the 'left' css attribute is not possible)
        iconWrapper.style.marginLeft = element.clientWidth - visibility.clientWidth + 'px';
        iconWrapper.style.transformOrigin = "calc(100% - " + element.clientWidth /
            2 + "px) " + element.clientHeight / 2 + "px";
        // When the icon is clicked on
        visibility.addEventListener('click', function () {
            var visible = _this.games[uuid].visible;
            // If the game is visible, set it to hidden
            if (visible) {
                _this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.hide-game'));
                _this.games[uuid].visible = false;
            }
            else {
                // Otherwise set it to shown
                _this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.show-game'));
                _this.games[uuid].visible = true;
            }
            // Update the game's visibility
            _this.updateGame(wrapper, element, true);
            _this.setStorage();
        });
        shortcut.addEventListener('click', function () {
            var short = new _Shortcut__WEBPACK_IMPORTED_MODULE_8__["Shortcut"]('https://stadia.google.com/player/' + uuid, entry[1]);
            _this.modal.activate("\n                <h4>Create a Desktop Shortcut</h4>\n                <p>Press the button below to create a desktop shortcut for " + entry[1] + ".</p>\n                <div class=\"CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button\" id=\"shortcut-button\">Save Shortcut</div>\n            ");
            _this.modal.element.querySelector('#shortcut-button').addEventListener('click', function () {
                short.save();
            });
        });
    };
    /**
     * Updates a game's visibility, making sure it's only shown when it's supposed to
     *
     * @param {Element} wrapper The game's wrapper, created by [[createWrapper]]
     * @param {Element} tile The game tile
     * @param {boolean} animate Should the game have an animated closing effect?
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.updateGame = function (wrapper, tile, animate) {
        // Get the game UUID
        var uuid = this.getUUID(tile);
        // Get the game icon
        var visibility = wrapper.querySelector('.stadiaplus_libraryfilter-icon');
        var iconwrapper = wrapper.querySelector('.stadiaplus_libraryfilter-icon-wrapper');
        // If the game isn't visible...
        if (!this.games[uuid].visible) {
            // ...but all games should still be shown
            if (this.showAll) {
                // Set the icon to display that it's not visible but shown anyways
                visibility.innerHTML = 'visibility_off';
                // Make sure the element isn't hidden
                wrapper.classList.remove('closing', 'closed');
                iconwrapper.style.marginLeft = tile.clientWidth - iconwrapper.clientWidth + 'px';
            }
            else {
                // Otherwise...
                // ...if the hiding should be animated
                if (animate) {
                    // Fade the game tile out
                    wrapper.classList.add('closing');
                    // After 1 second, hide it
                    setTimeout(function () {
                        wrapper.classList.add('closed');
                    }, 1000);
                }
                else {
                    // Otherwise
                    // Hide the element normally
                    wrapper.classList.add('closed');
                }
            }
        }
        else {
            // If the game is visible
            // Make sure the icon stays in place and doesn't get reset back to the top left corner
            iconwrapper.style.marginLeft = wrapper.clientWidth - iconwrapper.clientWidth + 'px';
            // Make sure the icon shows that it is visible
            visibility.innerHTML = 'visibility';
        }
    };
    /**
     * Update all games, shorthand for looping through tiles and updating them individually
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.updateAllGames = function () {
        var _this = this;
        this.sortGames();
        this.gameTiles.forEach(function (tile) {
            _this.updateGame(tile.parentElement, tile, false);
        });
    };
    /**
     * Read the stored data from the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been read
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        if (!this.active) {
            this.games = {};
            callback();
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].get([
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION,
        ], function (result) {
            _this.games = result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] : {};
            _this.order =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag]
                    : FilterOrder.RECENT;
            _this.direction =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag]
                    : OrderDirection.ASCENDING;
            callback();
        });
    };
    /**
     * Write to the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been written
     * @returns
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.setStorage = function (callback) {
        var _a;
        if (callback === void 0) { callback = function () { }; }
        if (!this.active) {
            callback();
            return;
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].set((_a = {},
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] = this.games,
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag] = this.order,
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag] = this.direction,
            _a), callback);
    };
    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onStart = function () {
        this.active = true;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Adds a variety of events to the filter bar
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.addFilterBarEvents = function () {
        var _this = this;
        // When the order is changed, set it in the storage
        this.select.element.addEventListener('change', function () {
            _this.order = parseInt(_this.select.get()[0]);
            _this.sortGames();
            _this.setStorage();
        });
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        this.checkbox.addEventListener('click', function () {
            _this.showAll = _this.checkbox.checked;
            _this.updateAllGames();
        });
        var dir = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        // Toggle the sort direction
        dir.addEventListener('click', function () {
            _this.reveseSortDirection();
            event.stopPropagation();
        });
    };
    LibraryFilter.prototype.reveseSortDirection = function () {
        var element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            if (this.direction === OrderDirection.ASCENDING) {
                this.direction = OrderDirection.DESCENDING;
            }
            else {
                this.direction = OrderDirection.ASCENDING;
            }
        }
        this.updateSortDirection();
    };
    LibraryFilter.prototype.updateSortDirection = function () {
        var element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            element.classList.toggle('descending', this.direction === OrderDirection.DESCENDING);
            element.classList.toggle('ascending', this.direction === OrderDirection.ASCENDING);
        }
        this.sortGames();
        this.setStorage();
    };
    /**
     * Runs when the component is stopped, destroys necessary parts
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onStop = function () {
        this.active = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach(function (e) { return e.remove(); });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Sorts the game list according to the current sort order.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.sortGames = function () {
        var arr = Array.from(this.gameTiles).map(function (e) { return e.parentElement; }); // Get all wrappers as an array
        arr = arr.sort(FilterOrder.getSorter(this.order));
        if (this.direction === OrderDirection.ASCENDING) {
            arr = arr.reverse();
        }
        arr.forEach(function (el) {
            el.parentElement.prepend(el);
        });
    };
    /**
     * Runs every second, creates and updates elements.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInHome()) {
            if (!this.exists()) {
                this.updateRenderer();
                var container = this.renderer.querySelector('.CVVXfc.YYy3Zb');
                if (!container)
                    return;
                this.filterBar.id = this.id;
                this.filterBar.innerHTML = "\n                    <span class=\"material-icons\">\n                        sort\n                    </span>\n                    <select name=\"order\">\n                        <option value=\"" + FilterOrder.RECENT + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.recent') + "</option>\n                        <option value=\"" + FilterOrder.ALPHABETICAL + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.alphabetical') + "</option>\n                        <option value=\"" + FilterOrder.RANDOM + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.random') + "</option>\n                    </select>\n                    <span id='" + (this.filterBar.id +
                    '-direction') + "' class=\"material-icons ascending stadiaplus_filterbar-direction\"></span>\n                ";
                var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"](_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.show-hidden'))
                    .setBigger(true)
                    .setShape(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["CheckboxShape"].CURVED)
                    .build(), pretty = _a.pretty, checkbox = _a.checkbox;
                pretty.classList.add('stadiaplus_filterbar-checkbox');
                this.filterBar.appendChild(pretty);
                this.checkbox = checkbox;
                this.gameTiles = this.renderer.querySelectorAll('.GqLi4d');
                container.appendChild(this.filterBar);
                this.createAllWrappers();
                // Style the custom select box in the filter bar
                this.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](this.filterBar.querySelector('select'), { placeholder: FilterOrder.RECENT });
                this.select.set(this.order);
                this.addFilterBarEvents();
            }
        }
    };
    return LibraryFilter;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */
var FilterOrder = /** @class */ (function () {
    function FilterOrder() {
    }
    /**
     * Get the sorting method of the inputed order.
     *
     * @static
     * @returns a function sorting games by the inputed order.
     * @param {FilterOrder} order
     * @memberof FilterOrder
     */
    FilterOrder.getSorter = function (order) {
        switch (order) {
            case this.RECENT:
                return this.sortRecent;
            case this.ALPHABETICAL:
                return this.sortAlphabetical;
            case this.RANDOM:
                return this.sortRandom;
        }
    };
    /**
     * Sort by recent games.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    FilterOrder.sortRecent = function (a, b) {
        return 1;
    };
    /**
     * Sort alphabetically.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    FilterOrder.sortAlphabetical = function (a, b) {
        var nameA = a.getAttribute('game-name');
        var nameB = b.getAttribute('game-name');
        if (nameA === undefined || nameB === undefined) {
            return 1;
        }
        return nameA.localeCompare(nameB);
    };
    FilterOrder.sortRandom = function (a, b) {
        return Math.round(Math.random() * 2) - 1;
    };
    /**
     * Default Stadia sorting, recent/new games.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.RECENT = 0;
    /**
     * Alphabetical order.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.ALPHABETICAL = 1;
    /**
     * Random order.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.RANDOM = 2;
    return FilterOrder;
}());

/**
 * Enum containing different order directions
 *
 * @export the OrderDirection type.
 * @enum {number}
 */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["ASCENDING"] = 0] = "ASCENDING";
    OrderDirection[OrderDirection["DESCENDING"] = 1] = "DESCENDING";
})(OrderDirection || (OrderDirection = {}));


/***/ }),

/***/ "./src/components/NetworkMonitor.ts":
/*!******************************************!*\
  !*** ./src/components/NetworkMonitor.ts ***!
  \******************************************/
/*! exports provided: NetworkMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkMonitor", function() { return NetworkMonitor; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UIComponent */ "./src/ui/UIComponent.ts");
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NetworkMonitor.scss */ "./src/components/styles/NetworkMonitor.scss");
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../MonitorRunnable */ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






// Import the Monitor runnable as a raw string
// @ts-ignore




var _a = window, chrome = _a.chrome, RTCPeerConnection = _a.RTCPeerConnection;
/**
 * A network monitor allowing users to see their network statistics while playing a game.
 *
 * @export the NetworkMonitor type.
 * @class NetworkMonitor
 * @extends {Component}
 */
var NetworkMonitor = /** @class */ (function (_super) {
    __extends(NetworkMonitor, _super);
    function NetworkMonitor() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'network-monitor';
        /**
         * Whether the component is active or not.
         */
        _this.active = false;
        /**
         * Whether the monitor is open or not.
         */
        _this.monitorOpen = false;
        /**
         * Visible network statistics.
         */
        _this.visible = [];
        _this.element = document.createElement('div');
        _this.element.classList.add('stadiaplus_network-monitor');
        document.addEventListener('DOMContentLoaded', function () {
            _this.startRunnable();
        });
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]].
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.createUI = function () {
        var _this = this;
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"](_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.name'), "\n            <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_networkmonitor-toggle-button' id='" + this.id + "-togglebutton'>" + _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.show') + "</div>\n            <hr>\n            <h6>" + _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.heading-visible') + "</h6>\n            <ul id='" + this.id + "-visiblelist'></ul>\n            ", this.id);
        this.component.element.classList.add('stadiaplus_networkmonitor-tab');
        var icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.button-label'), this.id + '-button');
        this.getStorage(function () { _this.updateVisible(); });
    };
    /**
     * Start the network monitor runnable.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.startRunnable = function () {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox(_raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__["default"]);
    };
    /**
     * Open the monitor.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.openMonitor = function () {
        this.monitorOpen = true;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.start()');
    };
    /**
     * Close the monitor.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.closeMonitor = function () {
        this.monitorOpen = false;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.stop()');
    };
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.get(function (result) {
            if (result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag]) {
                _this.visible = result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag];
            }
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.set(this.visible, callback);
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onStart = function () {
        this.active = true;
        this.startRunnable();
        this.createUI();
        this.visible = [
            {
                id: 'time',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.time'),
            },
            {
                id: 'resolution',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.resolution'),
            },
            {
                id: 'fps',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.fps'),
            },
            {
                id: 'latency',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.latency'),
            },
            {
                id: 'codec',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.codec'),
            },
            {
                id: 'traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.traffic'),
            },
            {
                id: 'current-traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.current-traffic'),
            },
            {
                id: 'average-traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.average-traffic'),
            },
            {
                id: 'packets-lost',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.packets-lost'),
            },
            {
                id: 'average-packet-loss',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.average-packet-loss'),
            },
            {
                id: 'jitter-buffer',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.jitter-buffer'),
            },
        ];
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onStop = function () {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.closeMonitor();
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor = null');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Updates which statistics should be visible.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.updateVisible = function () {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox("StadiaPlusMonitor.setVisible(" + JSON.stringify(this.visible) + ")");
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                var self_1 = this;
                this.updateRenderer();
                this.component.create();
                this.component.onOpen(function () {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(true)');
                });
                this.component.onClose(function () {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(false)');
                });
                var list = document.getElementById(this.id + '-visiblelist');
                var _loop_1 = function (i) {
                    var stat = this_1.visible[i];
                    var item = document.createElement('li');
                    var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"](stat.name).setBigger(true).setAnimation(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxAnimation"].SMOOTH).build(), pretty = _a.pretty, checkbox = _a.checkbox;
                    pretty.classList.add('stadiaplus_networkmonitor-checkbox');
                    item.appendChild(pretty);
                    list.appendChild(item);
                    checkbox.checked = stat.enabled;
                    checkbox.addEventListener('click', (function () {
                        _this.visible[i].enabled = checkbox.checked;
                        _this.updateVisible();
                        _this.setStorage();
                    }).bind(this_1));
                };
                var this_1 = this;
                for (var i = 0; i < this.visible.length; i++) {
                    _loop_1(i);
                }
                var toggleButton_1 = document.getElementById(this.id + '-togglebutton');
                toggleButton_1.classList.toggle('shown', this.monitorOpen);
                toggleButton_1.addEventListener('click', function () {
                    if (!_this.monitorOpen) {
                        _this.openMonitor();
                        toggleButton_1.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
                    }
                    else {
                        _this.closeMonitor();
                        toggleButton_1.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
                    }
                    toggleButton_1.classList.toggle('shown', _this.monitorOpen);
                });
                this.button.create(function () {
                    self_1.button.onPressed(function () {
                        self_1.component.openTab();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.component.open) {
            this.component.closeTab();
        }
        else if (this.exists()) {
            this.button.destroy();
            this.component.element.remove();
        }
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame() && document.querySelector('body>.stadiaplus_networkmonitor')) {
            this.closeMonitor();
        }
    };
    return NetworkMonitor;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/PasteFromClipboard.ts":
/*!**********************************************!*\
  !*** ./src/components/PasteFromClipboard.ts ***!
  \**********************************************/
/*! exports provided: Platform, PasteFromClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasteFromClipboard", function() { return PasteFromClipboard; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.WINDOWS = "Win32";
    Platform.MACOS = "MacIntel";
    return Platform;
}());

var PasteFromClipboard = /** @class */ (function (_super) {
    __extends(PasteFromClipboard, _super);
    function PasteFromClipboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tag = 'paste-from-clipboard';
        return _this;
    }
    /**
     * Called on startup, initializes important variables.
     */
    PasteFromClipboard.prototype.onStart = function () {
        this.active = true;
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    PasteFromClipboard.prototype.onStop = function () {
        this.active = false;
    };
    /**
     * Called once every second.
     */
    PasteFromClipboard.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        if (_Util__WEBPACK_IMPORTED_MODULE_1__["default"].isInGame()) {
            this.updateRenderer();
            var input = this.renderer.getElementsByTagName('input')[0];
            if (input != this.target) {
                if (undefined != this.target) {
                    this.target.removeEventListener('keydown', this.keydownEventListener);
                }
                this.target = input;
                this.target.addEventListener('keydown', this.keydownEventListener);
            }
        }
    };
    /**
     *  @param event
     */
    PasteFromClipboard.prototype.keydownEventListener = function (event) {
        var ctrlKey;
        switch (navigator.platform) {
            case Platform.WINDOWS:
                ctrlKey = event.ctrlKey;
                break;
            case Platform.MACOS:
                ctrlKey = event.metaKey;
                break;
            default:
                ctrlKey = event.ctrlKey;
                break;
        }
        if (ctrlKey && 'KeyV' == event.code) {
            navigator.clipboard.readText().then(function (data) {
                event.target.dispatchEvent(new InputEvent('input', {
                    // InputEventInit
                    data: data,
                    inputType: "insertText",
                    isComposing: false,
                    // UIEventInit
                    view: null,
                    // EventInit
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                }));
            });
        }
    };
    return PasteFromClipboard;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/PopupFix.ts":
/*!************************************!*\
  !*** ./src/components/PopupFix.ts ***!
  \************************************/
/*! exports provided: PopupFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFix", function() { return PopupFix; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_PopupFix_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/PopupFix.scss */ "./src/components/styles/PopupFix.scss");
/* harmony import */ var _styles_PopupFix_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PopupFix_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * A simple fix that solves an issue where notifications would hide specific buttons
 *
 * @export the PopupFix type.
 * @class PopupFix
 * @extends {Component}
 */
var PopupFix = /** @class */ (function (_super) {
    __extends(PopupFix, _super);
    function PopupFix() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'popup-fix';
        return _this;
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof PopupFix
     */
    PopupFix.prototype.onStart = function () {
        this.active = true;
        this.popup = document.querySelector('.zLoQpb');
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            this.popup.classList.add('offset');
            this.inGame = false;
        }
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { 'name': this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof PopupFix
     */
    PopupFix.prototype.onStop = function () {
        this.active = false;
        this.popup.classList.remove('offset');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { 'name': this.name }));
    };
    PopupFix.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame() && this.popup.classList.contains('offset') && !this.inGame) {
            this.popup.classList.remove('offset');
            this.inGame = true;
        }
    };
    return PopupFix;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Ratings.ts":
/*!***********************************!*\
  !*** ./src/components/Ratings.ts ***!
  \***********************************/
/*! exports provided: Ratings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return Ratings; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Ratings.scss */ "./src/components/styles/Ratings.scss");
/* harmony import */ var _styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * A component adding Metacritic ratings to every Stadia game.
 *
 * @export the Ratings type
 * @class Ratings
 * @extends {Component}
 */
var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    function Ratings(database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'ratings';
        /**
         * The value from each bound in which a game will get 0 or 5 stars.
         */
        _this.graceAmount = 10;
        /**
         * The maximum number of stars to award.
         */
        _this.maxStars = 5;
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    /**
     * Creates the rating element.
     *
     * @memberof Ratings
     */
    Ratings.prototype.createElement = function () {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons');
    };
    /**
     * The current game UUID.
     *
     * @returns the game UUID as a string.
     * @memberof Ratings
     */
    Ratings.prototype.getUUID = function () {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    };
    /**
     * Updates the current rating, fetching it from the database.
     *
     * @memberof Ratings
     */
    Ratings.prototype.updateRating = function () {
        var uuid = this.getUUID();
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        var entry = connection[map[uuid]];
        this.element.setAttribute('data-rating', entry[6]);
    };
    /**
     * Calculates how many stars a game should have based on it's rating.
     *
     * @param {number} rating the game's rating.
     * @returns {string[]} an array of icon strings, being either "star", "star_half" or "star_outline".
     * @memberof Ratings
     */
    Ratings.prototype.getStars = function (rating) {
        var outputStars = [];
        // Clamps the rating to values between 0 and 1,
        // where (0 + graceAmount) is 0 and (100 - graceAmount) is 1
        var clampedR = (rating / 100) * (1 + (this.graceAmount / 100) * 2) - (this.graceAmount / 100);
        for (var i = 0, r = clampedR; i < this.maxStars; i += 1, r -= 1 / this.maxStars) {
            if (r >= 1 / this.maxStars) {
                outputStars.push('star');
            }
            else if (r >= 0) {
                outputStars.push('star_half');
            }
            else {
                outputStars.push('star_outline');
            }
        }
        return outputStars;
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    Ratings.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    Ratings.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the rating element to make sure it always displays the correct value.
     *
     * @memberof Clock
     */
    Ratings.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStoreDetail()) {
            if (!this.exists()) {
                this.updateRating();
                this.updateRenderer();
                var rating = parseInt(this.element.getAttribute('data-rating'));
                var stars = this.getStars(rating);
                if (rating > 0) {
                    var nextSibling = this.renderer.querySelector('.ZzBJSb > .BMUnfd');
                    if (nextSibling === null)
                        return;
                    nextSibling.parentNode.insertBefore(this.element, nextSibling);
                    this.element.innerHTML = "\n                        " + stars.join(' ') + "\n        \n                        <div class=\"stadiaplus_rating-tooltip\">\n                            " + rating + " / 100 (" + _Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('ratings.source-name') + ")\n                        </div>\n                    ";
                }
            }
        }
    };
    return Ratings;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Record.ts":
/*!**********************************!*\
  !*** ./src/components/Record.ts ***!
  \**********************************/
/*! exports provided: Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _raw_loader_Recorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../Recorder */ "./node_modules/raw-loader/dist/cjs.js!./src/Recorder.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





// Import the Recorder runnable as a raw string
// @ts-ignore

var chrome = window.chrome;
/**
 * A button allowing the user to record the session locally.
 *
 * @export the Record type.
 * @class Record
 * @extends {Component}
 */
var Record = /** @class */ (function (_super) {
    __extends(Record, _super);
    function Record() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'record';
        /**
         * Whether recording mode is on or not.
         */
        _this.recording = false;
        // Whether events have been added already or not.
        _this.eventsAdded = false;
        return _this;
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Record
     */
    Record.prototype.onStart = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('component.enabled', { name: this.name }));
        this.active = true;
        _Util__WEBPACK_IMPORTED_MODULE_4__["default"].desandbox(_raw_loader_Recorder__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // TODO Change icons
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('record.button-label.record'), this.id);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof NetworkMonitor
     */
    Record.prototype.onStop = function () {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.recording = false;
        _Util__WEBPACK_IMPORTED_MODULE_4__["default"].desandbox('StadiaPlusRecorder.stop(false)');
        _Util__WEBPACK_IMPORTED_MODULE_4__["default"].desandbox('StadiaPlusRecorder = null');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Update button labels and icons to fit current mode.
     *
     * @memberof Record
     */
    Record.prototype.updateButton = function () {
        // TODO Change icons
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        var icon_exit = chrome.runtime.getURL('images/icons/windowed_exit.svg');
        if (this.recording) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('record.button-label.stop-recording'));
        }
        else {
            this.button.setIcon(icon);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('record.button-label.record'));
        }
    };
    /**
     * Called once every second, updates component elements and variables
     * F
     * @memberof Record
     */
    Record.prototype.onUpdate = function () {
        var _this = this;
        // If menu is open and a game is playing.
        if (_Util__WEBPACK_IMPORTED_MODULE_4__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_4__["default"].isInGame()) {
            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();
                var self_1 = this;
                // Create the button instance
                this.button.create(function () {
                    // If events are already added, don't add them again
                    if (!_this.eventsAdded) {
                        self_1.button.onPressed(function () {
                            if (self_1.recording) {
                                _Util__WEBPACK_IMPORTED_MODULE_4__["default"].desandbox('StadiaPlusRecorder.stop(true)');
                                _this.recording = false;
                            }
                            else {
                                _Util__WEBPACK_IMPORTED_MODULE_4__["default"].desandbox('StadiaPlusRecorder.start()');
                                _this.recording = true;
                            }
                            self_1.updateButton();
                        });
                        _this.eventsAdded = true;
                    }
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.exists()) {
            this.button.destroy();
        }
    };
    return Record;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/StoreFilter.ts":
/*!***************************************!*\
  !*** ./src/components/StoreFilter.ts ***!
  \***************************************/
/*! exports provided: StoreFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFilter", function() { return StoreFilter; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/StoreFilter.scss */ "./src/components/styles/StoreFilter.scss");
/* harmony import */ var _styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * A search bar displayed on the store page of Stadia.
 *
 * @export the StoreFilter type.
 * @class StoreFilter
 * @extends {Component}
 */
var StoreFilter = /** @class */ (function (_super) {
    __extends(StoreFilter, _super);
    function StoreFilter(database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'store-filter';
        /**
         * An array of all game elements.
         */
        _this.games = [];
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    /**
     * Creates the search bar and necessary elements/variables.
     *
     * @memberof StoreFilter
     */
    StoreFilter.prototype.createElement = function () {
        var _this = this;
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = "\n            <div class='bar'>\n                <input type='text' placeholder=\"" + connection[Math.floor(Math.random() * connection.length)][1] + "...\" id='" + this.id + "-search'>\n            </div>\n            <div class='games' id='" + this.id + "-games'>\n\n            </div>\n        ";
        Object.keys(map).forEach(function (key) {
            var entry = connection[map[key]];
            var element = document.createElement('a');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = "\n                <img src='https://loremflickr.com/640/360'>\n                <div class='detail'>\n                    <h5 class='name'>Lorem Ipsum</h5>\n                    <span class='stadiaplus_muted tags'></span>\n                </div>\n            ";
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-tags', entry[2]);
            var url = "https://stadia.google.com";
            var locArr = location.href.split('/');
            if (locArr.length > 5) {
                url = locArr.slice(0, 5).join('/') + '/';
                url = url.substring(0, url.length + (url.endsWith('/') ? -1 : 0));
            }
            var storeId = entry[0].match(/https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/)[1];
            element.setAttribute('href', url + '/store/details/' + storeId);
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));
            _this.games.push(element);
        });
    };
    /**
     * Adds the input events to the search bar.
     *
     * @memberof StoreFilter
     */
    StoreFilter.prototype.addEvents = function () {
        var _this = this;
        this.searchField.addEventListener('input', function () {
            _this.search(_this.searchField.value);
        });
    };
    /**
     * Searches the game list for a specific string and shows whichever games fit.
     *
     * @param {string} query the string to search for.
     * @memberof StoreFilter
     */
    StoreFilter.prototype.search = function (query) {
        this.games.forEach(function (game) {
            var name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        });
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, makes sure the search bar only exists when it's supposed to and works properly even if accidentally destroyed.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStore()) {
            if (!this.exists()) {
                this.updateRenderer();
                var container = this.renderer.querySelector('.nWmtLd');
                if (container === null)
                    return;
                container.prepend(this.element);
                var gameContainer_1 = document.getElementById(this.id + '-games');
                this.games.forEach(function (game) {
                    gameContainer_1.appendChild(game);
                    var image = game.querySelector('img');
                    image.src = game.getAttribute('data-img');
                    var name = game.querySelector('.detail>.name');
                    name.innerHTML = game.getAttribute('data-name');
                    var tags = game.querySelector('.detail>.tags');
                    tags.innerHTML = game.getAttribute('data-tags');
                });
                this.searchField = this.renderer.querySelector('#' + this.id + '-search');
                this.addEvents();
            }
        }
    };
    return StoreFilter;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/UITab.ts":
/*!*********************************!*\
  !*** ./src/components/UITab.ts ***!
  \*********************************/
/*! exports provided: UITab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UITab", function() { return UITab; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UIComponent */ "./src/ui/UIComponent.ts");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/UITab.scss */ "./src/components/styles/UITab.scss");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/styles/Button.scss */ "./src/ui/styles/Button.scss");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Grid.scss */ "./src/styles/Grid.scss");
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Typography.scss */ "./src/styles/Typography.scss");
/* harmony import */ var _styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var chrome = window.chrome;
/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
var UITab = /** @class */ (function (_super) {
    __extends(UITab, _super);
    function UITab() {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.tag = 'ui-tab';
        /**
         * An amount of rows, each containing content.
         */
        _this.rows = [];
        /**
         * A list of fun MOTD messages added to the tab.
         */
        _this.motdList = [
            '<img src="https://cdn.discordapp.com/emojis/636227864076746772.png?v=1" style="display: inline-flex; width: 24px">',
            "Don't look here, look below!",
            'Reality can be whatever I want.',
            'If you ask nicely, Stadia might even do your laundry for you!',
            'Have you tried asking customer support?',
            'Follow u/mafrans on Reddit!',
            'Stadia+, like Google+ but still alive.',
            'Stadia is DOA, believe me.',
            'Get a load of this guy, using chrome extensions to improve his Stadia experience.',
            "I'm telling you, don't trust that guy. You know, the guy.",
            'Shoutout to Chris and Grace!',
            'Have you tried Splitlings yet?',
            'Always check the ratings before you buy a new game.',
            'Have you tried GeForce Now?',
            'A hot dog is definitely not a sandwich.',
            'Idk about you, but I really want one of those fancy smart toilets.',
            'Chris is typing guys!!',
            'Does anyone have a buddy pass I could borrow?',
            'I paid $139 for this?',
            'Is Fortnite on Stadia yet?',
            'u/baconrules was the first to see 4k!',
            'So did the person that made the stadia+ extension give up on stadia?',
            'It\'s like GFN, but without any pulled games.',
            'Long live Geforce Now+',
            'Spend your money before it runs out.',
            'When does Stadia 2 come out?',
        ];
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     *
     * @memberof UITab
     */
    UITab.prototype.createElement = function () {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Stadia+', "\n                <i \n                    class=\"stadiaplus_muted\" \n                    style=\"margin-top: 1rem; margin-bottom: 5rem; display: block\"\n                >\n                    " + this.motdList[Math.floor(Math.random() * this.motdList.length)] + "\n                </i>\n            ", this.id);
        var icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('ui-tab.button-label'), this.id + '-button');
    };
    /**
     * Append all rows that don't already exist.
     *
     * @param {boolean} [reload]
     * @memberof UITab
     */
    UITab.prototype.createRows = function (reload) {
        var _this = this;
        var i = 0;
        this.rows.forEach(function (row) {
            if (!row.exists()) {
                row.append(_this.component, i > 0);
            }
            else if (reload) {
                row.reload();
            }
            i++;
        });
    };
    /**
     * Reload all rows
     *
     * @memberof UITab
     */
    UITab.prototype.reloadRows = function () {
        this.rows.forEach(function (row) { return row.reload(); });
    };
    /**
     * Add a row to the list.
     *
     * @memberof UITab
     */
    UITab.prototype.addRow = function (row) {
        this.rows.push(row);
    };
    /**
     * Clear and unload all rows.
     *
     * @memberof UITab
     */
    UITab.prototype.clearRows = function () {
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            row.element.remove();
        }
        this.rows = [];
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof UITab
     */
    UITab.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof UITab
     */
    UITab.prototype.onStop = function () {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.rows.forEach(function (row) {
            row.element.remove();
        });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof UITab
     */
    UITab.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                this.updateRenderer();
                this.component.create();
                this.createRows(true);
                var self_1 = this;
                this.button.create(function () {
                    self_1.button.onPressed(function () {
                        _this.createRows(true);
                        self_1.component.openTab();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.component.open) {
            this.component.closeTab();
        }
    };
    return UITab;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/styles/Clock.scss":
/*!******************************************!*\
  !*** ./src/components/styles/Clock.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Clock.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/ForceCodec.scss":
/*!***********************************************!*\
  !*** ./src/components/styles/ForceCodec.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ForceCodec.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/ForceResolution.scss":
/*!****************************************************!*\
  !*** ./src/components/styles/ForceResolution.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ForceResolution.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/LibraryFilter.scss":
/*!**************************************************!*\
  !*** ./src/components/styles/LibraryFilter.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LibraryFilter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/NetworkMonitor.scss":
/*!***************************************************!*\
  !*** ./src/components/styles/NetworkMonitor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./NetworkMonitor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/PopupFix.scss":
/*!*********************************************!*\
  !*** ./src/components/styles/PopupFix.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./PopupFix.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/PopupFix.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/Ratings.scss":
/*!********************************************!*\
  !*** ./src/components/styles/Ratings.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Ratings.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/StoreFilter.scss":
/*!************************************************!*\
  !*** ./src/components/styles/StoreFilter.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./StoreFilter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/UITab.scss":
/*!******************************************!*\
  !*** ./src/components/styles/UITab.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./UITab.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/Util.ts");
/* harmony import */ var _styles_Global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Global.scss */ "./src/styles/Global.scss");
/* harmony import */ var _styles_Global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentLoader */ "./src/ComponentLoader.ts");
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Clock */ "./src/components/Clock.ts");
/* harmony import */ var _components_UITab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UITab */ "./src/components/UITab.ts");
/* harmony import */ var _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ForceCodec */ "./src/components/ForceCodec.ts");
/* harmony import */ var _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ForceResolution */ "./src/components/ForceResolution.ts");
/* harmony import */ var _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NetworkMonitor */ "./src/components/NetworkMonitor.ts");
/* harmony import */ var _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/Snackbar */ "./src/ui/Snackbar.ts");
/* harmony import */ var _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/LibraryFilter */ "./src/components/LibraryFilter.ts");
/* harmony import */ var _WebDatabase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebDatabase */ "./src/WebDatabase.ts");
/* harmony import */ var _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/StoreFilter */ "./src/components/StoreFilter.ts");
/* harmony import */ var _components_Ratings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Ratings */ "./src/components/Ratings.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Language */ "./src/Language.ts");
/* harmony import */ var _components_AllowWindowedMode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AllowWindowedMode */ "./src/components/AllowWindowedMode.ts");
/* harmony import */ var _components_Record__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Record */ "./src/components/Record.ts");
/* harmony import */ var _components_PasteFromClipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/PasteFromClipboard */ "./src/components/PasteFromClipboard.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");
/* harmony import */ var _appdata_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appdata.json */ "./src/appdata.json");
var _appdata_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./appdata.json */ "./src/appdata.json", 1);
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/Modal */ "./src/ui/Modal.ts");
/* harmony import */ var _Shortcut__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Shortcut */ "./src/Shortcut.ts");
/* harmony import */ var _Browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Browser */ "./src/Browser.ts");
/* harmony import */ var _components_PopupFix__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/PopupFix */ "./src/components/PopupFix.ts");


























// Always load languages first
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].init();
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].load();

_Browser__WEBPACK_IMPORTED_MODULE_22__["Browser"].init();

const storageManager = new _Storage__WEBPACK_IMPORTED_MODULE_18__["StorageManager"](_appdata_json__WEBPACK_IMPORTED_MODULE_19__);
storageManager.checkCacheVersion();

const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const modal = new _ui_Modal__WEBPACK_IMPORTED_MODULE_20__["Modal"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

const database = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
// loader.register(new PopupFix());
loader.register(new _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__["LibraryFilter"](snackbar, database, uuidMap, modal));
loader.register(new _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__["ForceCodec"](tab, snackbar));
loader.register(new _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__["ForceResolution"](tab, snackbar));
loader.register(tab);
loader.register(new _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__["NetworkMonitor"]());
loader.register(new _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__["StoreFilter"](database, uuidMap));
loader.register(new _components_Ratings__WEBPACK_IMPORTED_MODULE_13__["Ratings"](database, uuidMap));
loader.register(new _components_AllowWindowedMode__WEBPACK_IMPORTED_MODULE_15__["AllowWindowedMode"]());
loader.register(new _components_Record__WEBPACK_IMPORTED_MODULE_16__["Record"]());
loader.register(new _components_PasteFromClipboard__WEBPACK_IMPORTED_MODULE_17__["PasteFromClipboard"]());

window.addEventListener('load', () => {
    _Util__WEBPACK_IMPORTED_MODULE_1__["default"].load();
    snackbar.create();
    modal.create();
    loader.start();
})

/***/ }),

/***/ "./src/lang/de-DE.json":
/*!*****************************!*\
  !*** ./src/lang/de-DE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Komponente {{name}} wurde aktiviert.\",\"disabled\":\"Komponente {{name}} wurde deaktiviert.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Uhr\"},\"force-codec\":{\"name\":\"Codec erzwingen\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Auflösung erzwingen\",\"note\":\"Anmerkung: Die gewählte Auflösung ist die Maximale, die Stadia verweden wird. Falls Ihr Computer diese Auflösung nicht darstellen kann oder nicht genug Bandbreite zu Verfügung steht, wird eine kleinere Auflösung verwendet.\"},\"library-filter\":{\"name\":\"Sammlungsfilter\",\"recent\":\"Neuste\",\"alphabetical\":\"Alphabetisch\",\"random\":\"Zufällig\",\"show-hidden\":\"Zeige Versteckte\"},\"network-monitor\":{\"name\":\"Netwerkmonitor\",\"heading-visible\":\"Sichtbare Statistiken\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Einfügen aus der Zwischenablage\"},\"ratings\":{\"name\":\"Bewertungen\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Seite neu laden um die Änderung anzuzeigen.\",\"hide-game\":\"Ein Spiel wurde versteckt.\",\"show-game\":\"Ein Spiel ist nicht mehr versteckt.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Anwenden\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Component {{name}} has been enabled.\",\"disabled\":\"Component {{name}} has been disabled.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Clock\"},\"force-codec\":{\"name\":\"Force Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Force Resolution\",\"note\":\"Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.\"},\"library-filter\":{\"name\":\"Library Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alphabetical\",\"random\":\"Random\",\"show-hidden\":\"Show Hidden\"},\"network-monitor\":{\"name\":\"Network Monitor\",\"heading-visible\":\"Visible Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Paste from Clipboard\"},\"ratings\":{\"name\":\"Ratings\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Reload the page to see your changes.\",\"hide-game\":\"A game has been hidden.\",\"show-game\":\"A game is no longer hidden.\"},\"automatic\":\"Automatic\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"El componente {{name}}  ha sido habilitado.\",\"disabled\":\"El componente {{name}} ha sido deshabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Reloj\"},\"force-codec\":{\"name\":\"Fuerza Códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Fuerza Resolución\",\"note\":\"Nota: el valor establecido es la resolución máxima que Stadia intentará lograr. Si su computadora no es capaz de procesar la resolución o no está disponible con la opción de uso de datos actual, no se mostrará.\"},\"library-filter\":{\"name\":\"Filtro Biblioteca\",\"recent\":\"Reciente\",\"alphabetical\":\"Alfabético\",\"random\":\"Aleatorio\",\"show-hidden\":\"Mostrar oculto\"},\"network-monitor\":{\"name\":\"Monitor de red\",\"heading-visible\":\"Estadísticas visibles\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar desde el portapapeles\"},\"ratings\":{\"name\":\"Calificaciones\",\"source-name\":\"Metacrítico\"},\"store-filter\":{\"name\":\"Filtro de tienda\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Vuelva a cargar la página para ver sus cambios.\",\"hide-game\":\"Un juego ha sido escondido.\",\"show-game\":\"Un juego ya no está oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/eu-ES.json":
/*!*****************************!*\
  !*** ./src/lang/eu-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Egilea: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Luzapena prest dago. Ireki Stadia eta hasi jolasten! Egurra! 🎮\",\"launch-button\":\"Ireki Stadia\",\"help-button\":\"Laguntza & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Ezarpenak\",\"language\":\"Hizkuntza\",\"components\":\"Osagarriak\",\"edit-components\":\"Editatu osagarriak\"},\"developer-page\":{\"title\":\"Aurreratuak\",\"clear-cache-button\":\"Cachea ezabatu\",\"storage\":\"Biltegia\"},\"component-page\":{\"title\":\"Osagarriak\"}},\"component\":{\"enabled\":\"{{name}} gaitu egin da.\",\"disabled\":\"{{name}} desgaitu egin da.\"},\"allow-windowed-mode\":{\"name\":\"Onartu lehio-modua\",\"button-label\":{\"windowed\":\"Lehioan\",\"fullscreen\":\"Pantaila osoa\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Erlojua\"},\"force-codec\":{\"name\":\"Behartu codec\",\"4k-tooltip\":\"Codec hori ezin da gaitu 4K aukerarekin\"},\"force-resolution\":{\"name\":\"Behartu bereizmena\",\"note\":\"Oharra: jarritako balioa izango da Stadia ezartzen saiatuko den handiena. Zure ordenagailuak ezin badu bereizmen hori exekutatu  edota ez badator bat Stadiaren zure data-ezarpenekin ezin izango da gauzatu..\"},\"library-filter\":{\"name\":\"Bildumaren iragazkia\",\"recent\":\"Arestikoak\",\"alphabetical\":\"Alfabetikoa\",\"random\":\"Aliritzira\",\"show-hidden\":\"Erakutsi izkutatutakoak\"},\"network-monitor\":{\"name\":\"Sare-monitorea\",\"heading-visible\":\"Ikusteko estatistikak\",\"button-label\":\"Monitorea\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Itsatsi arbelean\"},\"ratings\":{\"name\":\"Balorazioak\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Denda-iragazkia\"},\"ui-tab\":{\"name\":\"Stadia+ UI Fitxa\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Orria birkargatu ezarritako aldaketak abiarazteko.\",\"hide-game\":\"Joku bat izkutatu egin da.\",\"show-game\":\"Joku bat jada ikusgai dago.\"},\"automatic\":\"Automatikoa\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Ezarri\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/fr-FR.json":
/*!*****************************!*\
  !*** ./src/lang/fr-FR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Développé par {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'extension est prête. Lancez Stadia et commencez à jouer! 🎮\",\"launch-button\":\"Lancer Stadia\",\"help-button\":\"Aide & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Paramètres\",\"language\":\"Langue\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Développeur\",\"clear-cache-button\":\"Vider le cache\",\"storage\":\"Stockage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Le composant {{name}} a été activé.\",\"disabled\":\"Le composant {{name}} a été désactivé.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Horloge\"},\"force-codec\":{\"name\":\"Forcer le codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forcer la résolution\",\"note\":\"Remarque: la valeur définie est la résolution maximale que Stadia tentera d'atteindre. Si votre ordinateur ne peut pas afficher cette résolution ou que l'option de consommation des données ne le permet pas, elle ne sera pas utilisée.\"},\"library-filter\":{\"name\":\"Filtre de la bibliothèque\",\"recent\":\"Récent\",\"alphabetical\":\"Alphabétique\",\"random\":\"Aléatoire\",\"show-hidden\":\"Montrer caché(s)\"},\"network-monitor\":{\"name\":\"Moniteur réseau\",\"heading-visible\":\"Statistiques visibles\",\"button-label\":\"Moniteur\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Coller depuis le presse-papiers\"},\"ratings\":{\"name\":\"Évaluations\",\"source-name\":\"Métacritique\"},\"store-filter\":{\"name\":\"Filtre du magasin\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Rechargez la page pour voir vos modifications.\",\"hide-game\":\"Un jeu a été caché.\",\"show-game\":\"Un jeu n'est plus caché.\"},\"automatic\":\"Automatique\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Appliquer\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/gl-ES.json":
/*!*****************************!*\
  !*** ./src/lang/gl-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Creado por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensión está lista. Inicia Stadia e lume! 🎮\",\"launch-button\":\"Inicia Stadia\",\"help-button\":\"Axuda & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Configuración\",\"language\":\"Idioma\",\"components\":\"Compoñentes\",\"edit-components\":\"Edita os compoñentes\"},\"developer-page\":{\"title\":\"Avanzadas\",\"clear-cache-button\":\"Limpa a caché\",\"storage\":\"Almacenamento\"},\"component-page\":{\"title\":\"Compoñentes\"}},\"component\":{\"enabled\":\"Activouse {{name}}.\",\"disabled\":\"Desactivouse {{name}}.\"},\"allow-windowed-mode\":{\"name\":\"Permite o modo fiestra\",\"button-label\":{\"windowed\":\"En fiestra\",\"fullscreen\":\"Pantalla completa\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Reloxo\"},\"force-codec\":{\"name\":\"Forza códec\",\"4k-tooltip\":\"O códec seleccionado non está disponíbel ao seleccionar 4K\"},\"force-resolution\":{\"name\":\"Forza resolución\",\"note\":\"Aviso: o valor indicado será o máximo que Stadia intentará acadar. Se o teu computador non é compatíbel coa resolución ou esta supera o uso de datos que teñas configurado na conta, non se activará.\"},\"library-filter\":{\"name\":\"Filtrar\",\"recent\":\"Recentes\",\"alphabetical\":\"Alfabeticamente\",\"random\":\"Aleatoriamente\",\"show-hidden\":\"Mostrar agochados\"},\"network-monitor\":{\"name\":\"Monitor de rede\",\"heading-visible\":\"Estatísticas\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar do portapapeis\"},\"ratings\":{\"name\":\"Valoracións\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtrar\"},\"ui-tab\":{\"name\":\"Pestaña UI de Stadia+\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Recarga a páxina para activar os cambios.\",\"hide-game\":\"Agochóuse un xogo.\",\"show-game\":\"Un xogo deixou de estar agochado.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/it-IT.json":
/*!*****************************!*\
  !*** ./src/lang/it-IT.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Sviluppato da {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'estensione è pronta per l'uso. Avvia Stadia e inizia a giocare! 🎮\",\"launch-button\":\"Avvia Stadia\",\"help-button\":\"Aiuto & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Impostazioni\",\"language\":\"Lingua\",\"components\":\"Componenti\",\"edit-components\":\"Modifica Componenti\"},\"developer-page\":{\"title\":\"Sviluppatore\",\"clear-cache-button\":\"Pulisci Cache\",\"storage\":\"Archiviazione\"},\"component-page\":{\"title\":\"Componenti\"}},\"component\":{\"enabled\":\"Il componente {{name}} è stato attivato.\",\"disabled\":\"Il componente {{name}} è stato disattivato.\"},\"allow-windowed-mode\":{\"name\":\"Consentire la Modalità Finestra\",\"button-label\":{\"windowed\":\"Finestra\",\"fullscreen\":\"Schermo Intero\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Orologio\"},\"force-codec\":{\"name\":\"Forza Codec\",\"4k-tooltip\":\"Non è possibile forzare il codec quando si è in 4K\"},\"force-resolution\":{\"name\":\"Forza Risoluzione\",\"note\":\"Nota: il valore impostato è la massima risoluzione che Stadia tenterà di raggiungere. Se il tuo computer non è in grado di renderizzare la risoluzione, o non è disponibile con l'opzione di utilizzo dei dati corrente, questa non verrà visualizzata.\"},\"library-filter\":{\"name\":\"Filtro Libreria\",\"recent\":\"Recente\",\"alphabetical\":\"Alfabetico\",\"random\":\"Casuale\",\"show-hidden\":\"Mostra Nascosti\"},\"network-monitor\":{\"name\":\"Monitor di Rete\",\"heading-visible\":\"Statistiche Visibili\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Mostra Monitor di Rete\",\"hide\":\"Nascondi Monitor di Rete\"},\"stats\":{\"time\":\"Orario\",\"resolution\":\"Risoluzione\",\"fps\":\"FPS\",\"latency\":\"Latenza\",\"codec\":\"Codec\",\"traffic\":\"Traffico\",\"current-traffic\":\"Traffico Attuale\",\"average-traffic\":\"Traffico Medio\",\"packets-lost\":\"Pacchetti Persi\",\"average-packet-loss\":\"Perdita Media di Pacchetti\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Incolla dagli Appunti\"},\"ratings\":{\"name\":\"Valutazioni\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro Negozio\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Ricarica la pagina per vedere i cambiamenti.\",\"hide-game\":\"Un gioco è stato nascosto.\",\"show-game\":\"Un gioco non è più nascosto.\"},\"automatic\":\"Automatico\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Applica\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/nl-BE.json":
/*!*****************************!*\
  !*** ./src/lang/nl-BE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Ontwikkeld door {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"De extentie is klaar. Je kan nu Stadia openen en beginnen spelen! 🎮\",\"launch-button\":\"Stadia starten\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Instellingen\",\"language\":\"Taal\",\"components\":\"Componenten\",\"edit-components\":\"Componenten aanpassen\"},\"developer-page\":{\"title\":\"Ontwikkelaar\",\"clear-cache-button\":\"Cache wissen\",\"storage\":\"Opslag\"},\"component-page\":{\"title\":\"Componenten\"}},\"component\":{\"enabled\":\"Component {{name}} werd ingeschakeld.\",\"disabled\":\"Component {{name}} werd uitgeschakeld.\"},\"allow-windowed-mode\":{\"name\":\"Spelen in venster toestaan\",\"button-label\":{\"windowed\":\"In venster\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Klok\"},\"force-codec\":{\"name\":\"Codec forceren\",\"4k-tooltip\":\"Codec kan niet geforceerd worden wanneer je in 4K speelt\"},\"force-resolution\":{\"name\":\"Resolutie forceren\",\"note\":\"Merk op: Deze waarde is de maximale resolutie dat Stadia zal proberen te halen. Dit zal niet werken als je computer deze resolutie niet kan afspelen of als de resolutie niet beschikbaar is voor de dataverbruik selectie.\"},\"library-filter\":{\"name\":\"Bibliotheek Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alfabetisch\",\"random\":\"Willekeurig\",\"show-hidden\":\"Verborgen weergeven\"},\"network-monitor\":{\"name\":\"Netwerk Monitor\",\"heading-visible\":\"Zichtbare Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"ratings\":{\"name\":\"Scores\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filter bewaren\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Herlaad de pagina om je aanpassingen te zien.\",\"hide-game\":\"Een spel werd verborgen.\",\"show-game\":\"Een spel is niet langer verborgen.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Toepassen\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/pt-BR.json":
/*!*****************************!*\
  !*** ./src/lang/pt-BR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Desenvolvido por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensão está nos conformes! Inicie o Stadia e comece a jogar! 🎮\",\"launch-button\":\"Abrir Stadia\",\"help-button\":\"Ajuda & Perguntas Frequentas\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Opções\",\"language\":\"Idioma\",\"components\":\"Componentes\",\"edit-components\":\"Editar Componentes\"},\"developer-page\":{\"title\":\"Desenvolvedor\",\"clear-cache-button\":\"Limpar Cache\",\"storage\":\"Armazenamento\"},\"component-page\":{\"title\":\"Componentes\"}},\"component\":{\"enabled\":\"O componente {{name}} foi habilitado.\",\"disabled\":\"O component {{name}} foi desabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Permitir modo janela\",\"button-label\":{\"windowed\":\"Janela\",\"fullscreen\":\"Tela Cheia\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Relógio\"},\"force-codec\":{\"name\":\"Forçar Codec\",\"4k-tooltip\":\"A opção de forçar codec não está disponível ao rodar jogos em 4K\"},\"force-resolution\":{\"name\":\"Forçar Resolução\",\"note\":\"Atenção: o valor selecionado é a resolução máxima que o Stadia tentará alcançar. Se o seu computador não for capaz de renderizar a resolução ou a opção não estiver disponível no plano de consumo de dados atual, a resolução não será aplicada.\"},\"library-filter\":{\"name\":\"Biblioteca de Filtros\",\"recent\":\"Recente\",\"alphabetical\":\"Alfábetica\",\"random\":\"Aleatório\",\"show-hidden\":\"Mostrar ocultos\"},\"network-monitor\":{\"name\":\"Monitoramento de Rede\",\"heading-visible\":\"Status Visíveis\",\"button-label\":\"Monitorar\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"ratings\":{\"name\":\"Avaliação\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro da Loja\"},\"ui-tab\":{\"name\":\"Aba Stadia+ UI\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Recarregue a página para aplicar as mudanças.\",\"hide-game\":\"O jogo foi oculto.\",\"show-game\":\"O jogo não se encontra mais oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/ru-RU.json":
/*!*****************************!*\
  !*** ./src/lang/ru-RU.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Разработчик: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Расширение готово к работе. Запускай Stadia и начинай играть! 🎮\",\"launch-button\":\"Запустить Stadia\",\"help-button\":\"Справка и FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Настройки\",\"language\":\"Язык\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Элемент {{name}} включён.\",\"disabled\":\"Элемент {{name}} отключен.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Часы\"},\"force-codec\":{\"name\":\"Принудительный запуск кодека\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Принудительная смена разрешения\",\"note\":\"Примечание: установливаемое значение - это максимальное разрешение, которое Stadia может достичь. Если ваш компьютер не может отобразить разрешение или оно не доступно с текущей скоростью передачи данных, оно не будет отображаться.\"},\"library-filter\":{\"name\":\"Фильтр\",\"recent\":\"Последние\",\"alphabetical\":\"Алфавитный\",\"random\":\"Случайные\",\"show-hidden\":\"Показать скрытые\"},\"network-monitor\":{\"name\":\"Мониторинг сети\",\"heading-visible\":\"Видимая статистика\",\"button-label\":\"Монитор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставить из буфера обмена\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Сохранить фильтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Перезагрузите страницу, чтобы увидеть изменения.\",\"hide-game\":\"Игра скрыта.\",\"show-game\":\"Игра теперь отображается.\"},\"automatic\":\"Автоматически\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/sv-SE.json":
/*!*****************************!*\
  !*** ./src/lang/sv-SE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Utvecklat av {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Tillägget är redo att köra. Bara starta Stadia och börja spela! 🎮\",\"launch-button\":\"Starta Stadia\",\"help-button\":\"Hjälp & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Inställningar\",\"language\":\"Språk\",\"components\":\"Komponenter\",\"edit-components\":\"Redigera Komponenter\"},\"developer-page\":{\"title\":\"Utvecklare\",\"clear-cache-button\":\"Rensa Cache\",\"storage\":\"Lagring\"},\"component-page\":{\"title\":\"Komponenter\"}},\"component\":{\"enabled\":\"Komponenten {{name}} är nu aktiverad.\",\"disabled\":\"Komponenten {{name}} är inte längre aktiverad.\"},\"allow-windowed-mode\":{\"name\":\"Tillåt Fönsterläge\",\"button-label\":{\"windowed\":\"Fönster\",\"fullscreen\":\"Fullskärm\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Klocka\"},\"force-codec\":{\"name\":\"Påtvigad Codec\",\"4k-tooltip\":\"Påtvingad Codec är inte tillgängligt när du spelar i 4K\"},\"force-resolution\":{\"name\":\"Påtvingad Upplösning\",\"note\":\"Observera: det satta värdet är den maximala upplösningen Stadia kommer försöka uppnå. Om din dator inte klarar av att rendera upplösningen eller den inte är tillgänglig med dina nuvarande datainställningar kommer inte den påtvingade upplösningen visas.\"},\"library-filter\":{\"name\":\"Biblioteksfilter\",\"recent\":\"Senaste\",\"alphabetical\":\"Alfabetiskt\",\"random\":\"Slumpmässigt\",\"show-hidden\":\"Visa Gömda\"},\"network-monitor\":{\"name\":\"Nätverksövervakning\",\"heading-visible\":\"Synlig Statistik\",\"button-label\":\"Övervakning\",\"toggle-button\":{\"show\":\"Visa Nätverksövervakning\",\"hide\":\"Göm Nätverksövervakning\"},\"stats\":{\"time\":\"Tid\",\"resolution\":\"Upplösning\",\"fps\":\"FPS\",\"latency\":\"Latens\",\"codec\":\"Codec\",\"traffic\":\"Nätverkstrafik\",\"current-traffic\":\"Nuvarande Trafik\",\"average-traffic\":\"Genomsnittlig Trafik\",\"packets-lost\":\"Paket Tappade\",\"average-packet-loss\":\"Pakettappning\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Klistra in från Urklipp\"},\"ratings\":{\"name\":\"Recensioner\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Butiksfiltrering\"},\"ui-tab\":{\"name\":\"Stadia+ Gränssnittstabb\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Uppdatera sidan för att se dina ändringar.\",\"hide-game\":\"Ett spel har gömts.\",\"show-game\":\"Ett spel är inte längre gömt.\"},\"automatic\":\"Automatisk\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Tillämpa\",\"experimental\":\"Experimentellt\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/uk-UA.json":
/*!*****************************!*\
  !*** ./src/lang/uk-UA.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, record, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, snackbar, automatic, vp9, h264, apply, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Розробник: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Розширення готове до роботи. Просто запустіть Stadia і почніть грати! 🎮\",\"launch-button\":\"Запустити Stadia\",\"help-button\":\"Довідка та поширені запитання\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Налаштування\",\"language\":\"Мова\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Компонент {{name}} увімкнено.\",\"disabled\":\"Компонент {{name}} вимкнено.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"record\":{\"name\":\"Record\",\"button-label\":{\"record\":\"Record\",\"stop-recording\":\"Stop Recording\"}},\"clock\":{\"name\":\"Годинник\"},\"force-codec\":{\"name\":\"Примусити кодек\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Примусити розширення\",\"note\":\"Примітка: встановлене значення - це максимальна роздільна здатність, яку Stadia намагатиметься досягти. Якщо ваш комп'ютер не здатний рендерувати роздільну здатність або він недоступний із поточною опцією використання даних, він не відображатиметься.\"},\"library-filter\":{\"name\":\"Фільтрувати\",\"recent\":\"Останні\",\"alphabetical\":\"Алфавітний\",\"random\":\"Випадкові\",\"show-hidden\":\"Показати приховані\"},\"network-monitor\":{\"name\":\"Моніторинг мережі\",\"heading-visible\":\"Видима статистика\",\"button-label\":\"Монітор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставити з буфера обміну\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Зберегти фільтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"snackbar\":{\"reload-to-update\":\"Перезавантажте сторінку, щоб побачити зміни.\",\"hide-game\":\"Гра прихована.\",\"show-game\":\"Гра більше не є прихованою.\"},\"automatic\":\"Автоматично\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/styles/Global.scss":
/*!********************************!*\
  !*** ./src/styles/Global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/styles/Grid.scss":
/*!******************************!*\
  !*** ./src/styles/Grid.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Grid.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/styles/Typography.scss":
/*!************************************!*\
  !*** ./src/styles/Typography.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Typography.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/Checkbox.ts":
/*!****************************!*\
  !*** ./src/ui/Checkbox.ts ***!
  \****************************/
/*! exports provided: Checkbox, CheckboxShape, CheckboxStyle, CheckboxColor, CheckboxAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxShape", function() { return CheckboxShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxStyle", function() { return CheckboxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxColor", function() { return CheckboxColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxAnimation", function() { return CheckboxAnimation; });
/* harmony import */ var _node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/pretty-checkbox/src/pretty-checkbox.scss */ "./node_modules/pretty-checkbox/src/pretty-checkbox.scss");
/* harmony import */ var _node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);

var Checkbox = /** @class */ (function () {
    function Checkbox(label) {
        this.shape = CheckboxShape.DEFAULT;
        this.style = CheckboxStyle.DEFAULT;
        this.border = true;
        this.label = label;
    }
    Checkbox.prototype.setShape = function (shape) {
        this.shape = shape;
        return this;
    };
    Checkbox.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    Checkbox.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    Checkbox.prototype.setAnimation = function (animation) {
        this.animation = animation;
        return this;
    };
    Checkbox.prototype.setBorder = function (border) {
        this.border = border;
        return this;
    };
    Checkbox.prototype.setIcon = function (icon) {
        this.icon = icon;
        return this;
    };
    Checkbox.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
        return this;
    };
    Checkbox.prototype.setBigger = function (bigger) {
        this.bigger = bigger;
        return this;
    };
    Checkbox.prototype.build = function () {
        // Create element
        var element = document.createElement('div');
        // Add main classes
        element.classList.add('pretty', 'p-default');
        // If style is not default, add style
        if (this.shape) {
            element.classList.add(this.shape);
        }
        // If style is not default, add style
        if (this.style) {
            element.classList.add(this.style);
        }
        // If animated, add animation
        if (this.animation) {
            element.classList.add(this.animation);
        }
        // Set bigger
        if (this.bigger) {
            element.classList.add('p-bigger');
        }
        // Set border
        if (!this.border) {
            element.classList.add('p-plain');
        }
        // Add checkbox input
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = this.disabled;
        element.appendChild(checkbox);
        // Add state div
        var state = document.createElement('div');
        state.classList.add('state');
        // If colored, add color
        if (this.color) {
            state.classList.add(this.color);
        }
        // If has icon, add icon
        if (this.icon) {
            element.classList.add('p-icon');
            var icon = document.createElement('span');
            icon.classList.add('material-icons');
            icon.innerHTML = this.icon;
            state.appendChild(icon);
        }
        // Add label
        var label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);
        element.appendChild(state);
        return { pretty: element, checkbox: checkbox };
    };
    return Checkbox;
}());

var CheckboxShape = /** @class */ (function () {
    function CheckboxShape() {
    }
    CheckboxShape.DEFAULT = null;
    CheckboxShape.CURVED = 'p-curve';
    CheckboxShape.ROUND = 'p-round';
    return CheckboxShape;
}());

var CheckboxStyle = /** @class */ (function () {
    function CheckboxStyle() {
    }
    CheckboxStyle.DEFAULT = null;
    CheckboxStyle.FILL = 'p-fill';
    CheckboxStyle.THICK = 'p-thick';
    return CheckboxStyle;
}());

var CheckboxColor = /** @class */ (function () {
    function CheckboxColor() {
    }
    CheckboxColor.BLUE = 'p-primary';
    CheckboxColor.GREEN = 'p-success';
    CheckboxColor.YELLOW = 'p-warning';
    CheckboxColor.CYAN = 'p-info';
    CheckboxColor.RED = 'p-danger';
    return CheckboxColor;
}());

var CheckboxAnimation = /** @class */ (function () {
    function CheckboxAnimation() {
    }
    CheckboxAnimation.SMOOTH = 'p-smooth';
    CheckboxAnimation.JELLY = 'p-jelly';
    CheckboxAnimation.TADA = 'p-tada';
    CheckboxAnimation.ROTATE = 'p-rotate';
    CheckboxAnimation.PULSE = 'p-pulse';
    return CheckboxAnimation;
}());



/***/ }),

/***/ "./src/ui/Modal.ts":
/*!*************************!*\
  !*** ./src/ui/Modal.ts ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Modal.scss */ "./src/ui/styles/Modal.scss");
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0__);

var Modal = /** @class */ (function () {
    function Modal() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_modal');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('stadiaplus_modal-wrapper');
        this.content = document.createElement('div');
        this.content.classList.add('stadiaplus_modal-content');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_modal-close');
        var self = this;
        this.closeButton.addEventListener('click', function () {
            self.element.classList.remove('active');
        });
    }
    Modal.prototype.create = function () {
        var _this = this;
        document.body.appendChild(this.element);
        this.element.appendChild(this.wrapper);
        this.wrapper.appendChild(this.closeButton);
        this.wrapper.appendChild(this.content);
        this.element.addEventListener('click', function () { return _this.close(); });
        this.wrapper.addEventListener('click', function (event) { return event.stopPropagation(); });
    };
    Modal.prototype.activate = function (content) {
        this.content.innerHTML = content;
        this.element.classList.add('active');
    };
    Modal.prototype.close = function () {
        this.element.classList.remove('active');
    };
    return Modal;
}());



/***/ }),

/***/ "./src/ui/Select.ts":
/*!**************************!*\
  !*** ./src/ui/Select.ts ***!
  \**************************/
/*! exports provided: Select, SelectStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStyle", function() { return SelectStyle; });
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slim-select/dist/slimselect.min.css */ "./node_modules/slim-select/dist/slimselect.min.css");
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/styles/Select.scss */ "./src/ui/styles/Select.scss");
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__);



var Select = /** @class */ (function () {
    function Select(element, options) {
        this.element = element;
        options.style = options.style !== undefined ? options.style : SelectStyle.DARK;
        options.onChange = options.onChange !== undefined ? options.onChange : function () { };
        options.beforeChange = options.beforeChange !== undefined ? options.beforeChange : function () { };
        this.element.classList.add('stadiaplus_dropdown', options.style);
        /**
         * Slimselect throws a TypeError if the elements/containers
         * have been deleted without properly being destroyed. As Stadia
         * runs in a virtual DOM, we have no control of when the DOM changes
         * therefore we can't solve it in a proper way.
         *
         * Let's just hope garbage collection takes care of it.
         */
        try {
            this.slimselect = new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
                select: this.element,
                showSearch: false,
                placeholder: options.placeholder,
                onChange: options.onChange,
                beforeOnChange: options.beforeChange,
            });
        }
        catch (error) { }
    }
    Select.prototype.disable = function () {
        this.element.classList.add('disabled');
    };
    Select.prototype.enable = function () {
        this.element.classList.remove('disabled');
    };
    Select.prototype.get = function () {
        return this.slimselect.selected();
    };
    Select.prototype.set = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length === 1) {
            // Just in case slimselect.set is faster
            this.slimselect.set(items[0]);
        }
        else {
            this.slimselect.setData(items);
        }
    };
    Select.prototype.search = function (query) {
        return this.slimselect.search(query);
    };
    Select.prototype.destroy = function () {
        if (this.slimselect !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    };
    return Select;
}());

var SelectStyle = /** @class */ (function () {
    function SelectStyle() {
    }
    SelectStyle.SLIMSELECT = null;
    SelectStyle.SLIMSELECT_LARGE = 'style-slimselect-large';
    SelectStyle.LIGHT = 'style-light';
    SelectStyle.DARK = 'style-dark';
    return SelectStyle;
}());



/***/ }),

/***/ "./src/ui/Snackbar.ts":
/*!****************************!*\
  !*** ./src/ui/Snackbar.ts ***!
  \****************************/
/*! exports provided: Snackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony import */ var _styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Snackbar.scss */ "./src/ui/styles/Snackbar.scss");
/* harmony import */ var _styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0__);

var Snackbar = /** @class */ (function () {
    function Snackbar() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_snackbar');
        this.label = document.createElement('div');
        this.label.classList.add('stadiaplus_snackbar-label');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_snackbar-close');
        var self = this;
        this.closeButton.addEventListener('click', function () {
            self.element.classList.remove('active');
        });
    }
    Snackbar.prototype.create = function () {
        document.body.appendChild(this.element);
        this.element.appendChild(this.label);
        this.element.appendChild(this.closeButton);
    };
    Snackbar.prototype.activate = function (label) {
        this.label.innerHTML = label;
        this.element.classList.add('active');
        var self = this;
        window.setTimeout(function () {
            self.element.classList.remove('active');
        }, 5000);
    };
    return Snackbar;
}());



/***/ }),

/***/ "./src/ui/UIButton.ts":
/*!****************************!*\
  !*** ./src/ui/UIButton.ts ***!
  \****************************/
/*! exports provided: UIButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIButton", function() { return UIButton; });
/* harmony import */ var _UIButtonContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIButtonContainer */ "./src/ui/UIButtonContainer.ts");

var UIButton = /** @class */ (function () {
    function UIButton(icon, title, id) {
        this.id = id;
        this.html = "\n            <div class=\"Pyflbb\" jsname=\"rZHESd\">\n                <div class=\"KEaHo\">\n                    <span class=\"X5peoe\" jsname=\"pYFhU\">\n                        <img class=\"xduoyf uibutton-icon\" src=\"" + icon + "\">\n                    </span>\n                    <span class=\"caSJV uibutton-title\">" + title + "</span>\n                </div>\n            </div>\n        ";
        this.element = document.createElement('div');
        this.element.id = id;
        this.element.classList.add('Pyf1bb', 'stadiaplus_ui-button');
        this.button = document.createElement('div');
        this.button.setAttribute('role', 'button');
        this.button.setAttribute('tabindex', '0');
        this.button.classList.add('CTvDXd', 'QAAyWd', 'Pjpac', 'zcMYd');
        this.button.innerHTML = this.html;
        this.element.appendChild(this.button);
    }
    UIButton.prototype.create = function (callback) {
        for (var _i = 0, _a = UIButton.buttonContainers; _i < _a.length; _i++) {
            var container = _a[_i];
            if (container.buttons.length < 3) {
                this.container = container;
            }
        }
        if (this.container === undefined) {
            this.container = new _UIButtonContainer__WEBPACK_IMPORTED_MODULE_0__["UIButtonContainer"]();
            UIButton.buttonContainers.push(this.container);
        }
        this.container.addButton(this);
        this.container.create(callback);
    };
    UIButton.prototype.setIcon = function (icon) {
        this.element.querySelector('.uibutton-icon').setAttribute('src', icon);
    };
    UIButton.prototype.setTitle = function (title) {
        this.element.querySelector('.uibutton-title').innerHTML = title;
    };
    UIButton.prototype.update = function () {
        if (!this.exists()) {
            this.create();
        }
    };
    UIButton.prototype.exists = function () {
        return document.getElementById(this.id) !== null;
    };
    UIButton.prototype.destroy = function () {
        this.element.remove();
        this.container.removeButton(this);
    };
    UIButton.prototype.onPressed = function (func) {
        var _this = this;
        this.button.addEventListener('click', func);
        this.button.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                _this.button.click();
            }
        });
    };
    UIButton.buttonContainers = [];
    return UIButton;
}());



/***/ }),

/***/ "./src/ui/UIButtonContainer.ts":
/*!*************************************!*\
  !*** ./src/ui/UIButtonContainer.ts ***!
  \*************************************/
/*! exports provided: UIButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIButtonContainer", function() { return UIButtonContainer; });
var UIButtonContainer = /** @class */ (function () {
    function UIButtonContainer() {
        this.buttons = [];
        this.id = 'button-container-' + Math.floor(Math.random() * 9999);
        this.container = document.querySelector('.TZ0BN');
        this.wrapper = document.createElement('div');
        this.wrapper.id = this.id;
        this.wrapper.classList.add('ZgUMo', 'stadiaplus_ui-btn-wrapper');
        this.element = document.createElement('div');
        this.element.classList.add('E0Zk9b', 'stadiaplus_ui-btn-container');
    }
    UIButtonContainer.prototype.exists = function () {
        return document.getElementById(this.id) !== null;
    };
    UIButtonContainer.prototype.create = function (callback) {
        var _this = this;
        if (!this.exists()) {
            this.container = document.querySelector('.TZ0BN'); // Requery in case the container was deleted
            this.wrapper.appendChild(this.element);
            this.container.appendChild(this.wrapper);
        }
        this.buttons.forEach(function (button) {
            if (!button.exists()) {
                _this.element.appendChild(button.element);
            }
        });
        if (callback)
            callback();
    };
    UIButtonContainer.prototype.addButton = function (button) {
        if (this.buttons.indexOf(button) === -1) {
            this.buttons.push(button);
        }
    };
    UIButtonContainer.prototype.removeButton = function (button) {
        this.buttons = this.buttons.filter(function (b) { return b.id !== button.id; });
    };
    return UIButtonContainer;
}());



/***/ }),

/***/ "./src/ui/UIComponent.ts":
/*!*******************************!*\
  !*** ./src/ui/UIComponent.ts ***!
  \*******************************/
/*! exports provided: UIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponent", function() { return UIComponent; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");

var UIComponent = /** @class */ (function () {
    function UIComponent(title, content, id) {
        this.openListeners = [];
        this.closeListeners = [];
        this.id = id;
        this.html = "\n            <header>\n                <div class=\"rkvT7c\" jsaction=\"click:a4fUwd\" jsname=\"GeGHKb\">\n                    <span class=\"DPvwYc tRqc3c\" aria-hidden=\"true\">arrow_back</span>\n                </div>\n                <span class=\"Q3wyyb\">\n                    <div class=\"CwCxFd\">" + title + "</div>\n                </span>\n            </header>\n\n            <div class=\"content\">\n                " + content + "\n            </div>\n        ";
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }
    UIComponent.prototype.create = function () {
        var container = document.querySelector('.hxhAyf');
        if (!container)
            return;
        this.element.innerHTML = this.html;
        container.appendChild(this.element);
        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);
        var backBtn = document.querySelector("#" + this.id + " > header > .rkvT7c");
        var self = this;
        backBtn.addEventListener('click', function () {
            self.closeTab();
        });
    };
    UIComponent.prototype.openTab = function () {
        this.element.classList.add('open');
        this.open = true;
        this.openListeners.forEach(function (c) { return c(); });
    };
    UIComponent.prototype.closeTab = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Closing', this.id);
        this.element.classList.remove('open');
        this.open = false;
        this.closeListeners.forEach(function (c) { return c(); });
    };
    UIComponent.prototype.onOpen = function (callback) {
        if (callback)
            this.openListeners.push(callback);
    };
    UIComponent.prototype.onClose = function (callback) {
        if (callback)
            this.closeListeners.push(callback);
    };
    return UIComponent;
}());



/***/ }),

/***/ "./src/ui/UIRow.ts":
/*!*************************!*\
  !*** ./src/ui/UIRow.ts ***!
  \*************************/
/*! exports provided: UIRow, UIRowOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRow", function() { return UIRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRowOptions", function() { return UIRowOptions; });
var UIRow = /** @class */ (function () {
    function UIRow(title, content, id, options) {
        this.title = title;
        this.content = content;
        this.options = options;
        this.id = id;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.innerHTML = "\n            <p>" + this.title + "</p>\n            <div>\n                " + this.content + "\n            </div>\n        ";
        this.element.classList.add('stadiaplus_ui-row');
    }
    UIRow.prototype.exists = function () {
        return document.getElementById(this.id);
    };
    UIRow.prototype.destroy = function () {
        this.options.onDestroy(this);
        this.element.remove();
    };
    UIRow.prototype.reload = function () {
        this.options.onReload(this);
    };
    UIRow.prototype.append = function (component, useHr) {
        if (useHr === void 0) { useHr = false; }
        if (useHr) {
            component.element.appendChild(document.createElement('hr'));
        }
        component.element.appendChild(this.element);
        this.options.onCreate(this);
    };
    return UIRow;
}());

var UIRowOptions = /** @class */ (function () {
    function UIRowOptions() {
    }
    return UIRowOptions;
}());



/***/ }),

/***/ "./src/ui/styles/Button.scss":
/*!***********************************!*\
  !*** ./src/ui/styles/Button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/styles/Modal.scss":
/*!**********************************!*\
  !*** ./src/ui/styles/Modal.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/styles/Select.scss":
/*!***********************************!*\
  !*** ./src/ui/styles/Select.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Select.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/styles/Snackbar.scss":
/*!*************************************!*\
  !*** ./src/ui/styles/Snackbar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Snackbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/util/downloader.js":
/*!********************************!*\
  !*** ./src/util/downloader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

let downloader = { download(content, name, mime) {} };

(function (root, factory) {
    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        downloader = { download: factory() };
    }
}(undefined, function () {

    return function download(data, strFileName, strMimeType) {

        var self = window, // this script is only for browsers anyway...
            defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
            mimeType = strMimeType || defaultMime,
            payload = data,
            url = !strFileName && !strMimeType && payload,
            anchor = document.createElement("a"),
            toString = function (a) { return String(a); },
            myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
            fileName = strFileName || "download",
            blob,
            reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob;

        if (String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
            payload = [payload, mimeType];
            mimeType = payload[0];
            payload = payload[1];
        }


        if (url && url.length < 2048) { // if no filename and no mime, assume a url was passed as the only argument
            fileName = url.split("/").pop().split("?")[0];
            anchor.href = url; // assign href prop to temp anchor
            if (anchor.href.indexOf(url) !== -1) { // if the browser determines that it's a potentially valid url path:
                var ajax = new XMLHttpRequest();
                ajax.open("GET", url, true);
                ajax.responseType = 'blob';
                ajax.onload = function (e) {
                    download(e.target.response, fileName, defaultMime);
                };
                setTimeout(function () { ajax.send(); }, 0); // allows setting custom ajax headers using the return:
                return ajax;
            } // end if valid url?
        } // end if url?


        //go ahead and download dataURLs right away
        if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)) {

            if (payload.length > (1024 * 1024 * 1.999) && myBlob !== toString) {
                payload = dataUrlToBlob(payload);
                mimeType = payload.type || defaultMime;
            } else {
                return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
                    navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
                    saver(payload); // everyone else can save dataURLs un-processed
            }

        }//end if dataURL passed?

        blob = payload instanceof myBlob ?
            payload :
            new myBlob([payload], { type: mimeType });


        function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/),
                type = parts[1],
                decoder = parts[2] == "base64" ? atob : decodeURIComponent,
                binData = decoder(parts.pop()),
                mx = binData.length,
                i = 0,
                uiArr = new Uint8Array(mx);

            for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

            return new myBlob([uiArr], { type: type });
        }

        function saver(url, winMode) {

            if ('download' in anchor) { //html5 A[download]
                anchor.href = url;
                anchor.setAttribute("download", fileName);
                anchor.className = "download-js-link";
                anchor.innerHTML = "downloading...";
                anchor.style.display = "none";
                document.body.appendChild(anchor);
                setTimeout(function () {
                    anchor.click();
                    document.body.removeChild(anchor);
                    if (winMode === true) { setTimeout(function () { self.URL.revokeObjectURL(anchor.href); }, 250); }
                }, 66);
                return true;
            }

            // handle non-a[download] safari as best we can:
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
                url = url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
                if (!window.open(url)) { // popup blocked, offer direct download:
                    if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) { location.href = url; }
                }
                return true;
            }

            //do iframe dataURL download (old ch+FF):
            var f = document.createElement("iframe");
            document.body.appendChild(f);

            if (!winMode) { // force a mime that will download:
                url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            }
            f.src = url;
            setTimeout(function () { document.body.removeChild(f); }, 333);

        }//end saver




        if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
            return navigator.msSaveBlob(blob, fileName);
        }

        if (self.URL) { // simple fast and modern way using Blob and URL:
            saver(self.URL.createObjectURL(blob), true);
        } else {
            // handle non-Blob()+non-URL browsers:
            if (typeof blob === "string" || blob.constructor === toString) {
                try {
                    return saver("data:" + mimeType + ";base64," + self.btoa(blob));
                } catch (y) {
                    return saver("data:" + mimeType + "," + encodeURIComponent(blob));
                }
            }

            // Blob but not URL support:
            reader = new FileReader();
            reader.onload = function (e) {
                saver(this.result);
            };
            reader.readAsDataURL(blob);
        }
        return true;
    }; /* end download() */
}));

/* harmony default export */ __webpack_exports__["default"] = (downloader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUG9wdXBGaXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3M/MGY1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvTW9uaXRvclJ1bm5hYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWNvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3M/YmU0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3Nlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Nob3J0Y3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9XZWJEYXRhYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZUNvZGVjLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZvcmNlUmVzb2x1dGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaWJyYXJ5RmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ldHdvcmtNb25pdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bhc3RlRnJvbUNsaXBib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cEZpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYXRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdG9yZUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz84YTIzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/Mzg3MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/NWI0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzPzY5ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3M/NjdjNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUG9wdXBGaXguc2Nzcz8zZGJiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9SYXRpbmdzLnNjc3M/OTJkMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3RvcmVGaWx0ZXIuc2Nzcz82YzI3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzPzhiNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3M/MDliNiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dyaWQuc2Nzcz8yZmQwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvVHlwb2dyYXBoeS5zY3NzPzlhZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0NoZWNrYm94LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Nb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQnV0dG9uQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlSb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2Nzcz85OTBjIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvTW9kYWwuc2Nzcz9kOTM3Iiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU2VsZWN0LnNjc3M/N2U3YSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3M/OWI3MyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kb3dubG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhLEVBQUUsS0FBSztBQUM1RDtBQUNBLGFBQWE7QUFDYixTQUFTOzs7QUFHVDtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjs7O0FBR3BEO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsUUFBUTs7QUFFM0Isd0NBQXdDLGFBQWE7QUFDckQ7O0FBRUE7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUIsdUNBQXVDLEVBQUUsT0FBTztBQUNwSCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsb0lBQW9JLHFCQUFxQjtBQUN6SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCLEVBQUU7O0FBRXBFLFNBQVM7Ozs7O0FBS1QsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sQ0FBQzs7QUFFYyx5RUFBVSxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXR0eSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eSBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWwge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xcbiAgbWluLXdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkgLnN0YXRlLnAtaXMtaG92ZXIsIC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDcpO1xcbiAgfVxcbiAgMzglIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICA3MiUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDgxJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNCk7XFxuICB9XFxuICA4OSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDk1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamVsbHkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44NSwgMS4xNSwgMSk7XFxuICB9XFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2JkYzNjNztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxLjVlbSByZ2JhKDE4OSwgMTk1LCAxOTksIDApO1xcbiAgfVxcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogY2FsYygxZW0gLyA3KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcblxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgc3ZnIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWltYWdlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyZW07XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAyLjVlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzcgIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYyg1MCUgLSAwLjFlbSk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3VzIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2JkYzNjNztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29uIHtcXG4gIGNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb2ZmIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtc21vb3RoIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggLnN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogdGFkYSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAxIGFsdGVybmF0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogamVsbHkgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcHVsc2U6bm90KC5wLXN3aXRjaCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcztcXG59XFxuXFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIH4gKiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5wcmV0dHkucC1sb2NrZWQgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZyB7XFxuICBjb2xvcjogIzQyOGJjYTtcXG4gIHN0cm9rZTogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyNDU2ODI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NjgyICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2ZyB7XFxuICBjb2xvcjogIzViYzBkZTtcXG4gIHN0cm9rZTogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyMzkwYjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5MGIwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZyB7XFxuICBjb2xvcjogIzVjYjg1YztcXG4gIHN0cm9rZTogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMzNTc5MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTM1ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2ZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTtcXG4gIHN0cm9rZTogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNjNzdjMTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc3YzExICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZDk1MzRmO1xcbiAgc3Ryb2tlOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTAyNjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMjYyMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1iaWdnZXIgLmljb24sXFxuLnByZXR0eS5wLWJpZ2dlciAuc3ZnLFxcbi5wcmV0dHkucC1iaWdnZXIgLmltZyB7XFxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDM1JSkgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMS43ZW07XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAucHJldHR5IC5zdGF0ZTpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkgLnN0YXRlIC5pY29uIHtcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Nsb2NrIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKSwgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3Npbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDQ7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNhM2M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yM3MgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMTUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgei1pbmRleDogNDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcjpob3ZlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMyMzY7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItY2hlY2tib3gge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiYXJyb3dfZHJvcF9kb3duXFxcIjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24uYXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmRlc2NlbmRpbmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzAwcHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTUwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IgKiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci5lZGl0YWJsZSB7XFxuICB6LWluZGV4OiAzMDA7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRhYiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMXJlbTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnpMb1FwYi5vZmZzZXQge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yYXRpbmcge1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3RhZGlhcGx1c19yYXRpbmc6aG92ZXIgLnN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQgMC4zcztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zdG9yZWZpbHRlciB7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjMyKSwgMCAwLjA2MjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmJhciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic2VhcmNoXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIgaW5wdXQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgb3V0bGluZTogI2ZmNzczZCAzcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lLnNob3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUgLmRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tdXRlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCB7XFxuICAvKiBcXG4gICAqICAgTXVzdCByZW1vdmUgMiB4IHBhZGRpbmcgb3IgaXQgZG9lc250IHdvcmsgXFxuICAgKi9cXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJlMzA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudC5vcGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciAuQ3dDeEZkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAtMTZweDtcXG59XFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lci5FMFprOWIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1idXR0b24ge1xcbiAgd2lkdGg6IDEzMC42NzdweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdxTGk0ZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KSBjb250cmFzdCgxLjEpO1xcbn1cXG5cXG5odG1sIGJvZHkgLmRTR3Z6ZiB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuaHRtbCBib2R5IC5DVlZYZmMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0ODRkO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUyNTcgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsIC5zdGFkaWFwbHVzX21vZGFsLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMlO1xcbiAgbWluLXdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogIzMwMzIzNjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsIC5zdGFkaWFwbHVzX21vZGFsLWNsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwgLnN0YWRpYXBsdXNfbW9kYWwtY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogaW5pdGlhbDtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwuYWN0aXZlIC5zdGFkaWFwbHVzX21vZGFsLXdyYXBwZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfZHJvcGRvd24uZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogIzkzOTU5RiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5wbGFjZWhvbGRlcixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtcGx1cyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbiB7XFxuICBib3JkZXItY29sb3I6ICM5Mzk1OUY7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4ge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICNjY2NjY2MgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLXNsaW1zZWxlY3QtbGFyZ2Uuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zbmFja2JhciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoMTZweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLCBvcGFjaXR5IDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19zbmFja2Jhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcy1tYWlue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3VzZXItc2VsZWN0Om5vbmU7Y29sb3I6IzY2Njt3aWR0aDoxMDAlfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWR7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYmVsb3d7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXJ7ZmxleDoxIDEgMTAwJTt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6Y2FsYygxMDAlIC0gMzBweCk7bGluZS1oZWlnaHQ6MWVtOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciwuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyICp7d2lkdGg6YXV0b30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAuc3MtZGlzYWJsZWR7Y29sb3I6I2RlZGVkZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1kZXNlbGVjdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtmbGV4OjAgMSBhdXRvO21hcmdpbjowIDZweDtmb250LXdlaWdodDo3MDB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3Quc3MtaGlkZXtkaXNwbGF5Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHh9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbntib3JkZXI6c29saWQgIzY2Njtib3JkZXItd2lkdGg6MCAycHggMnB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzozcHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG1hcmdpbiAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbi5hcnJvdy11cHt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO21hcmdpbjozcHggMCAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctZG93bnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTttYXJnaW46LTNweCAwIDB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Y3Vyc29yOnBvaW50ZXI7bWluLWhlaWdodDozMHB4O3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAzcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2RjZGVlMjtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLWRpc2FibGVke2NvbG9yOiM2NjZ9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWFib3Zle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4OjEgMSAxMDAlO3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtkaXNwbGF5OmZsZXg7cGFkZGluZzo0cHggNXB4O21hcmdpbjoycHggMDtsaW5lLWhlaWdodDoxZW07YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7Y29sb3I6I2RlZGVkZTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9QGtleWZyYW1lcyBzY2FsZUluezAle3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzY2FsZU91dHswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZXtkaXNwbGF5OmZsZXg7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEycHg7cGFkZGluZzozcHggNXB4O21hcmdpbjozcHggNXB4IDNweCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZiO2JvcmRlci1yYWRpdXM6NHB4O2FuaW1hdGlvbi1uYW1lOnNjYWxlSW47YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUuc3Mtb3V0e2FuaW1hdGlvbi1uYW1lOnNjYWxlT3V0O2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUgLnNzLXZhbHVlLWRlbGV0ZXttYXJnaW46MCAwIDAgNXB4O2N1cnNvcjpwb2ludGVyfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRke2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSAzcHg7bWFyZ2luOjlweCAxMnB4IDAgNXB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiM2NjY7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHg7d2lkdGg6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1czphZnRlcntiYWNrZ3JvdW5kOiM2NjY7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjEwcHg7bGVmdDotNHB4O3RvcDo0cHh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXMuc3MtY3Jvc3N7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNzLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTttYXJnaW46LTFweCAwIDA7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjt6LWluZGV4OjEwMTA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsb3BhY2l0eSAuMnM7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZVkoMCl9LnNzLWNvbnRlbnQuc3Mtb3BlbntkaXNwbGF5OmJsb2NrO29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGVZKDEpfS5zcy1jb250ZW50IC5zcy1zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nOjhweCA4cHggNnB4fS5zcy1jb250ZW50IC5zcy1zZWFyY2guc3MtaGlkZSwuc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUgaW5wdXR7aGVpZ2h0OjA7b3BhY2l0eTowO3BhZGRpbmc6MDttYXJnaW46MH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtmbGV4OjEgMSBhdXRvO3dpZHRoOjEwMCU7bWluLXdpZHRoOjA7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHggOHB4O21hcmdpbjowO2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO3RleHQtYWxpZ246bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGE4YThhO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDVweCAjNTg5N2ZifS5zcy1jb250ZW50IC5zcy1zZWFyY2ggLnNzLWFkZGFibGV7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MjJweDtmb250LXdlaWdodDo3MDA7ZmxleDowIDAgMzBweDtoZWlnaHQ6MzBweDttYXJnaW46MCAwIDAgOHB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNzLWNvbnRlbnQgLnNzLWFkZGFibGV7cGFkZGluZy10b3A6MH0uc3MtY29udGVudCAuc3MtbGlzdHttYXgtaGVpZ2h0OjIwMHB4O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt0ZXh0LWFsaWduOmxlZnR9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRncm91cC1sYWJlbHtwYWRkaW5nOjZweCAxMHB4O2ZvbnQtd2VpZ2h0OjcwMH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAgLnNzLW9wdGlvbntwYWRkaW5nOjZweCA2cHggNnB4IDI1cHh9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGV7Y3Vyc29yOnBvaW50ZXJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbntwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmV9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiAqe2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtaGlnaGxpZ2h0ZWQsLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtjb2xvcjojZGVkZWRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uOm5vdCguc3MtZGlzYWJsZWQpLnNzLW9wdGlvbi1zZWxlY3RlZHtjb2xvcjojNjY2O2JhY2tncm91bmQtY29sb3I6cmdiYSg4OCwxNTEsMjUxLC4xKX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gLnNzLXNlYXJjaC1oaWdobGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmZmYjhjfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0eS1jaGVja2JveC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IE1vbml0b3JSdW5uYWJsZSA9IGZ1bmN0aW9uICgpIHtcXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxuICAgIHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XFxuICAgIHRoaXMub3JpZ2luYWxSVEM7XFxuICAgIHRoaXMuc3RhcnRUaW1lO1xcbiAgICB0aGlzLmVsZW1lbnQ7XFxuICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcXG4gICAgdGhpcy54ID0gMDtcXG4gICAgdGhpcy55ID0gMDtcXG5cXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxuICAgIHRoaXMub3JpZ2luYWxSVEMgPSBSVENQZWVyQ29ubmVjdGlvbjtcXG4gICAgKGZ1bmN0aW9uIChPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24pIHtcXG4gICAgICAgIHNlbGYub3JpZ2luYWxSVEMgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb247XFxuXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhcmdzKSB7XFxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24oYXJncyk7XFxuICAgICAgICAgICAgc2VsZi5wZWVyQ29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcXG4gICAgICAgIH07XFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24ucHJvdG90eXBlO1xcbiAgICB9KShSVENQZWVyQ29ubmVjdGlvbik7XFxuXFxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XFxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpO1xcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID1cXG4gICAgICAgICAgICAnbmV0d29ya21vbml0b3ItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XFxuXFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxuXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKHRydWUpO1xcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XFxuICAgICAgICB0aGlzLnggPSB4O1xcbiAgICAgICAgdGhpcy55ID0geTtcXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xcblxcbiAgICAgICAgY29uc3QgY29ybmVycyA9IHtcXG4gICAgICAgICAgICB0bDogMTAsXFxuICAgICAgICAgICAgdHI6IDEwLFxcbiAgICAgICAgICAgIGJsOiAxMCxcXG4gICAgICAgICAgICBicjogMTAsXFxuICAgICAgICB9O1xcblxcbiAgICAgICAgaWYgKHRoaXMueCA8IDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAodGhpcy55IDwgMTApIHtcXG4gICAgICAgICAgICBjb3JuZXJzLnRsID0gMDtcXG4gICAgICAgICAgICBjb3JuZXJzLnRyID0gMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCAtIDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAtIDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbXFxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnXFxuICAgICAgICBdID0gYCR7Y29ybmVycy50bH1weCAke2Nvcm5lcnMudHJ9cHggJHtjb3JuZXJzLmJyfXB4ICR7Y29ybmVycy5ibH1weGA7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubW91c2VFdmVudHMgPSBbXTtcXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcXG4gICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcXG4gICAgdGhpcy5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uIChlZGl0YWJsZSkge1xcbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGVkaXRhYmxlO1xcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRhYmxlJywgZWRpdGFibGUpO1xcblxcbiAgICAgICAgaWYgKGVkaXRhYmxlKSB7XFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5wdXNoKFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlbW92ZScsXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gTWluaW11bSB4IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCwgLy8gTWF4aW11bSB4IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMub2Zmc2V0LngsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geSB2YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCwgLy8gTWF4aW11bSB5IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMub2Zmc2V0LnksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vkb3duJyxcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLng7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnk7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNldXAnLFxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT5cXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuZm4pLFxcbiAgICAgICAgICAgICk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXG4gICAgICAgICAgICApO1xcbiAgICAgICAgfVxcbiAgICB9O1xcblxcbiAgICB0aGlzLnNldFZpc2libGUgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xcbiAgICAgICAgdmlzaWJsZS5mb3JFYWNoKGUgPT4gdGhpcy52aXNpYmxlW2UuaWRdID0gZSk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XFxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XFxuXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHRoaXMub3JpZ2luYWxSVEM7XFxuICAgICAgICBwZWVyQ29ubmVjdGlvbnMgPSBbXTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy52aXNpYmxlID0ge307XFxuXFxuICAgIHRoaXMuc3RhdHMgPSBbXTtcXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICBpZiAodGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoID4gMSkge1xcbiAgICAgICAgICBjb25zdCBvcGVuQ29ubmVjdGlvbnMgPSB0aGlzLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIoeCA9PiB4LmNvbm5lY3Rpb25TdGF0ZSA9PSBcXFwiY29ubmVjdGVkXFxcIik7XFxuXFxuICAgICAgICAgIG9wZW5Db25uZWN0aW9uc1sxXS5nZXRTdGF0cygpLnRoZW4oKF9zdGF0cykgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRzID0gQXJyYXkuZnJvbShfc3RhdHMpO1xcblxcbiAgICAgICAgICAgICAgICBjb25zdCBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0gPSB0aGlzLmdldFN0YXQoKHN0YXQpID0+XFxuICAgICAgICAgICAgICAgICAgICBzdGF0WzBdLnN0YXJ0c1dpdGgoJ1JUQ0luYm91bmRSVFBWaWRlb1N0cmVhbScpLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBSVENJY2VDYW5kaWRhdGVQYWlyID0gdGhpcy5nZXRTdGF0KChzdGF0KSA9PlxcbiAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENJY2VDYW5kaWRhdGVQYWlyJyksXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIgPSB0aGlzLmdldFN0YXQoXFxuICAgICAgICAgICAgICAgICAgICAoc3RhdCkgPT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0WzBdLnN0YXJ0c1dpdGgoJ1JUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXInKSAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRbMV0ua2luZCA9PT0gJ3ZpZGVvJyxcXG4gICAgICAgICAgICAgICAgKTtcXG5cXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbihcXG4gICAgICAgICAgICAgICAgICAgIFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIsXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGZwcyA9IHRoaXMuZ2V0RlBTKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVuY3kgPSB0aGlzLmdldExhdGVuY3koUlRDSWNlQ2FuZGlkYXRlUGFpcikgKyAnIG1zJztcXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZWMgPSB0aGlzLmdldENvZGVjKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsVHJhZmZpYyA9IHRoaXMudHJhbnNsYXRlQnl0ZVVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VHJhZmZpYyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RG93bmxvYWRTcGVlZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXG4gICAgICAgICAgICAgICAgICAgICkgKyAnL3MnO1xcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlVHJhZmZpYyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXZlcmFnZURvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFja2V0c0xvc3QgPSB0aGlzLmdldFBhY2tldHNMb3N0KFxcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlUGFja2V0TG9zcyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkgKyAnJSc7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGppdHRlckJ1ZmZlciA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEppdHRlckJ1ZmZlcihSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSArICcgbXMnO1xcblxcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9ICcnO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWyd0aW1lJ10uZW5hYmxlZCkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVTdHJpbmcgPSB0aW1lLnRvTG9jYWxlU3RyaW5nKCk7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8aDU+JHt0aW1lU3RyaW5nfTwvaDU+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dWw+JztcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsncmVzb2x1dGlvbiddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsncmVzb2x1dGlvbiddLm5hbWV9OiAke3Jlc29sdXRpb24ud2lkdGh9eCR7cmVzb2x1dGlvbi5oZWlnaHR9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2ZwcyddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnZnBzJ10ubmFtZX06ICR7ZnBzfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydsYXRlbmN5J10uZW5hYmxlZCkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydsYXRlbmN5J10ubmFtZX06ICR7bGF0ZW5jeX08L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnY29kZWMnXS5lbmFibGVkKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2NvZGVjJ10ubmFtZX06ICR7Y29kZWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3RyYWZmaWMnXS5lbmFibGVkKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ3RyYWZmaWMnXS5uYW1lfTogJHt0b3RhbFRyYWZmaWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2N1cnJlbnQtdHJhZmZpYyddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnY3VycmVudC10cmFmZmljJ10ubmFtZX06ICR7Y3VycmVudFRyYWZmaWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtdHJhZmZpYyddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnYXZlcmFnZS10cmFmZmljJ10ubmFtZX06ICR7YXZlcmFnZVRyYWZmaWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3BhY2tldHMtbG9zdCddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsncGFja2V0cy1sb3N0J10ubmFtZX06ICR7cGFja2V0c0xvc3R9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnXS5lbmFibGVkKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnXS5uYW1lfTogJHthdmVyYWdlUGFja2V0TG9zc308L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnaml0dGVyLWJ1ZmZlciddLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnaml0dGVyLWJ1ZmZlciddLm5hbWV9OiAke2ppdHRlckJ1ZmZlcn08L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC91bD4nO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXFxuICAgICAgICAgICAgICAgIDxoNT5FcnJvcjwvaDU+XFxuICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgVWggb2gsIHNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLiBcXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgZmVhdHVyZSBpcyBzdGlsbCB2ZXJ5IHVuc3RhYmxlIGFuZCBcXG4gICAgICAgICAgICAgICAgICAgIHRoZSBkZXZlbG9wZXIga25vd3MgdGhlcmUgYXJlIHByb2JsZW1zLCBcXG4gICAgICAgICAgICAgICAgICAgIHBsZWFzZSB1bmRlcnN0YW5kIHRoYXQgdGhpcyBpc3N1ZSBpcyBcXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZWx5IGJlaW5nIHdvcmtlZCBvbi5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCc+RXJyb3IgQ29kZTogMDAxIC0gU3RhdHMgdW5hdmFpbGFibGU8L3A+XFxuICAgICAgICAgICAgYDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcXG4gICAgICAgICAgICB9LCAxMDAwKTtcXG4gICAgICAgIH1cXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRTdGF0ID0gZnVuY3Rpb24gKGZpbHRlcikge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHMuZmluZChmaWx0ZXIpWzFdO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XFxuICAgICAgICBjb25zdCB1bml0cyA9IFsnYml0JywgJ2tiaXQnLCAnTWJpdCcsICdHYml0J107XFxuXFxuICAgICAgICBsZXQgaSA9IDA7XFxuICAgICAgICB3aGlsZSAodmFsdWUgLyAxMDAwID49IDEpIHtcXG4gICAgICAgICAgICBpKys7XFxuICAgICAgICAgICAgdmFsdWUgLz0gMTAwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgdmFsdWUudG9QcmVjaXNpb24oNCkgKyAnICcgKyB1bml0c1tNYXRoLm1pbih1bml0cy5sZW5ndGggLSAxLCBpKV1cXG4gICAgICAgICk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMudHJhbnNsYXRlQnl0ZVVuaXRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XFxuICAgICAgICBjb25zdCB1bml0cyA9IFsnQicsICdrQicsICdNQicsICdHQiddO1xcblxcbiAgICAgICAgbGV0IGkgPSAwO1xcbiAgICAgICAgd2hpbGUgKHZhbHVlIC8gMTAwMCA+PSAxKSB7XFxuICAgICAgICAgICAgaSsrO1xcbiAgICAgICAgICAgIHZhbHVlIC89IDEwMDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIHZhbHVlLnRvUHJlY2lzaW9uKDQpICsgJyAnICsgdW5pdHNbTWF0aC5taW4odW5pdHMubGVuZ3RoIC0gMSwgaSldXFxuICAgICAgICApO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldExhdGVuY3kgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuY3VycmVudFJvdW5kVHJpcFRpbWUgKiAxMDAwO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldEppdHRlckJ1ZmZlciA9IGZ1bmN0aW9uIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSB7XFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmppdHRlckJ1ZmZlckRlbGF5ICogMTAwMCkgL1xcbiAgICAgICAgICAgIFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRW1pdHRlZENvdW50XFxuICAgICAgICApLnRvUHJlY2lzaW9uKDQpO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFBhY2tldHNMb3N0ID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgcmV0dXJuIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdDtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCAvXFxuICAgICAgICAgICAgICAgIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c1JlY2VpdmVkICtcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCkpICpcXG4gICAgICAgICAgICAxMDBcXG4gICAgICAgICkudG9QcmVjaXNpb24oMik7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubGFzdERvd25sb2FkID0gMDtcXG4gICAgdGhpcy5nZXREb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpO1xcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBkb3dubG9hZCAtIHRoaXMubGFzdERvd25sb2FkO1xcbiAgICAgICAgdGhpcy5sYXN0RG93bmxvYWQgPSBkb3dubG9hZDtcXG4gICAgICAgIHJldHVybiBzcGVlZCAqIDg7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0QXZlcmFnZURvd25sb2FkU3BlZWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcbiAgICAgICAgcmV0dXJuIChcXG4gICAgICAgICAgICB0aGlzLmdldFRvdGFsRG93bmxvYWQoUlRDSWNlQ2FuZGlkYXRlUGFpcikgKiA4IC9cXG4gICAgICAgICAgICAodGhpcy50aW1lU2luY2VTdGFydCgpIC8gMTAwMClcXG4gICAgICAgICk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5ieXRlc1JlY2VpdmVkO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFJlc29sdXRpb24gPSBmdW5jdGlvbiAoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICB3aWR0aDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZVdpZHRoLFxcbiAgICAgICAgICAgIGhlaWdodDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZUhlaWdodCxcXG4gICAgICAgIH07XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0Q29kZWMgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxuICAgICAgICBjb25zdCBjb2RlY1N0YXQgPSB0aGlzLmdldFN0YXQoXFxuICAgICAgICAgICAgKHN0YXQpID0+IHN0YXRbMF0gPT09IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5jb2RlY0lkLFxcbiAgICAgICAgKTtcXG4gICAgICAgIHJldHVybiBjb2RlY1N0YXQubWltZVR5cGUuc3Vic3RyaW5nKCd2aWRlby8nLmxlbmd0aCk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubGFzdEZyYW1lcyA9IDA7XFxuICAgIHRoaXMuZ2V0RlBTID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgY29uc3QgZnBzID0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmZyYW1lc0RlY29kZWQgLSB0aGlzLmxhc3RGcmFtZXM7XFxuICAgICAgICB0aGlzLmxhc3RGcmFtZXMgPSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uZnJhbWVzRGVjb2RlZDtcXG4gICAgICAgIHJldHVybiBmcHM7XFxuICAgIH07XFxuXFxuICAgIHRoaXMudGltZVNpbmNlU3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xcbiAgICB9O1xcbn07XFxuXFxuU3RhZGlhUGx1c01vbml0b3IgPSBuZXcgTW9uaXRvclJ1bm5hYmxlKCk7XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJsZXQgYmxvYnM7XFxuXFxuY29uc3QgUmVjb3JkZXIgPSBmdW5jdGlvbiAoKSB7XFxuICAgIHRoaXMubWVkaWFSZWNvcmRlcjtcXG4gICAgdGhpcy5ibG9icztcXG4gICAgdGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcXG5cXG4gICAgdGhpcy5vbk1lZGlhUmVjb3JkZXJEYXRhQXZhaWxhYmxlID0gZnVuY3Rpb24gKGV2ZW50KSB7XFxuICAgICAgICBjb25zb2xlLmxvZygnb25NZWRpYVJlY29yZGVyRGF0YUF2YWlsYWJsZScsIGV2ZW50KTtcXG4gICAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEuc2l6ZSA+IDApIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaDogJywgYmxvYnMubGVuZ3RoKTtcXG4gICAgICAgICAgICBibG9icy5wdXNoKGV2ZW50LmRhdGEpO1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdibG9iczogJywgYmxvYnMubGVuZ3RoKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHB1c2g6ICcsIGV2ZW50KTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICB0aGlzLm9uTWVkaWFSZWNvcmRlclN0b3AgPSBmdW5jdGlvbiAoZXZlbnQpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1lZGlhUmVjb3JkZXJTdG9wJywgZXZlbnQpO1xcbiAgICB9XFxuXFxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcXG4gICAgICAgIGJsb2JzID0gW107XFxuICAgICAgICBtZWRpYVJlY29yZGVyT3B0aW9ucyA9IHttaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOSxvcHVzJ307XFxuICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG1lZGlhUmVjb3JkZXJPcHRpb25zLm1pbWVUeXBlKSkge1xcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXJPcHRpb25zLm1pbWVUeXBlID0gJ3ZpZGVvL3dlYm0nO1xcbiAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQobWVkaWFSZWNvcmRlck9wdGlvbnMubWltZVR5cGUpKSB7XFxuICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXJPcHRpb25zLm1pbWVUeXBlID0gJyc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd2aWRlbycpO1xcbiAgICAgICAgaWYgKHZpZGVvRWxlbWVudHMubGVuZ3RoID09IDApIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gdmlkZW8gZWxlbWVudHMnKTtcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IHZpZGVvRWxlbWVudHNbMF07XFxuICAgICAgICB0cnkge1xcbiAgICAgICAgICAgIHRoaXMubWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHZpZGVvRWxlbWVudC5jYXB0dXJlU3RyZWFtKCksIG1lZGlhUmVjb3JkZXJPcHRpb25zKTtcXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVjb3JkOiAnLCBlKTtcXG4gICAgICAgICAgICByZXR1cm47XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLm1lZGlhUmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gdGhpcy5vbk1lZGlhUmVjb3JkZXJEYXRhQXZhaWxhYmxlO1xcbiAgICAgICAgdGhpcy5tZWRpYVJlY29yZGVyLm9uc3RvcCA9IHRoaXMub25NZWRpYVJlY29yZGVyU3RvcDtcXG4gICAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5zdGFydCgpO1xcbiAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29yZGluZycpO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoZG93bmxvYWQpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9wJyk7XFxuICAgICAgICBpZiAodGhpcy5tZWRpYVJlY29yZGVyLnN0YXRlID09ICdpbmFjdGl2ZScpIHtcXG4gICAgICAgICAgICB0aGlzLm1lZGlhUmVjb3JkZXIgPSBudWxsO1xcbiAgICAgICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFjdGl2ZScpO1xcbiAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vICdzdG9wJyB0cmlnZ2VycyAnb25kYXRhYXZhaWxhYmxlJy5cXG4gICAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5zdG9wKCk7XFxuICAgICAgICAvLyByZXF1aXJlZCBzbyAnb25kYXRhYXZhaWxhYmxlJyBydW5zIHRvIGNvbXBsZXRpb24gYXMgd2VsbCBhcyAnc3RvcCcuXFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWQnLCBibG9icyk7XFxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGJsb2JzLCB7dHlwZTogJ3ZpZGVvL3dlYm0nfSk7XFxuICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XFxuXFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VybDogJywgdXJsKTtcXG5cXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xcbiAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcXG4gICAgICAgICAgICBhLmhyZWYgPSB1cmw7XFxuICAgICAgICAgICAgYS5kb3dubG9hZCA9ICd0ZXN0LndlYm0nO1xcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XFxuICAgICAgICAgICAgYS5jbGljaygpO1xcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xcbiAgICAgICAgICAgIH0sIDEwMCk7XFxuXFxuICAgICAgICAgICAgdGhpcy5tZWRpYVJlY29yZGVyID0gbnVsbDtcXG4gICAgICAgICAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZCBlbmQnKTtcXG4gICAgICAgICAgICBpZiAoIWRvd25sb2FkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFSZWNvcmRlciA9IG51bGw7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSwgMTAwMCk7XFxuICAgIH07XFxuXFxufTtcXG5cXG5TdGFkaWFQbHVzUmVjb3JkZXIgPSBuZXcgUmVjb3JkZXIoKTtcXG5cIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaW1zZWxlY3QubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TbGltU2VsZWN0PXQoKTplLlNsaW1TZWxlY3Q9dCgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4ocz17fSxuLm09aT1bZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHMoZSx0KXt0PXR8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyZXR1cm4gaS5pbml0Q3VzdG9tRXZlbnQoZSx0LmJ1YmJsZXMsdC5jYW5jZWxhYmxlLHQuZGV0YWlsKSxpfXZhciBuO3QuX19lc01vZHVsZT0hMCx0Lmhhc0NsYXNzSW5UcmVlPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcyhlLHQpe3JldHVybiB0JiZlJiZlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuY29udGFpbnModCk/ZTpudWxsfXJldHVybiBzKGUsdCl8fGZ1bmN0aW9uIGUodCxpKXtyZXR1cm4gdCYmdCE9PWRvY3VtZW50P3ModCxpKT90OmUodC5wYXJlbnROb2RlLGkpOm51bGx9KGUsdCl9LHQuZW5zdXJlRWxlbWVudEluVmlldz1mdW5jdGlvbihlLHQpe3ZhciBpPWUuc2Nyb2xsVG9wK2Uub2Zmc2V0VG9wLHM9aStlLmNsaWVudEhlaWdodCxuPXQub2Zmc2V0VG9wLGE9bit0LmNsaWVudEhlaWdodDtuPGk/ZS5zY3JvbGxUb3AtPWktbjpzPGEmJihlLnNjcm9sbFRvcCs9YS1zKX0sdC5wdXRDb250ZW50PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz1lLm9mZnNldEhlaWdodCxuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYT1pP24udG9wOm4udG9wLXMsbz1pP24uYm90dG9tOm4uYm90dG9tK3M7cmV0dXJuIGE8PTA/XCJiZWxvd1wiOm8+PXdpbmRvdy5pbm5lckhlaWdodD9cImFib3ZlXCI6aT90OlwiYmVsb3dcIn0sdC5kZWJvdW5jZT1mdW5jdGlvbihuLGEsbyl7dmFyIGw7cmV0dXJuIHZvaWQgMD09PWEmJihhPTEwMCksdm9pZCAwPT09byYmKG89ITEpLGZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWVbdF09YXJndW1lbnRzW3RdO3ZhciBpPXNlbGYscz1vJiYhbDtjbGVhclRpbWVvdXQobCksbD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bD1udWxsLG98fG4uYXBwbHkoaSxlKX0sYSkscyYmbi5hcHBseShpLGUpfX0sdC5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cz1mdW5jdGlvbihlLHQsaSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGVbdF09PT1pO2Zvcih2YXIgcz0wLG49ZTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihhJiZhW3RdJiZhW3RdPT09aSlyZXR1cm4hMH1yZXR1cm4hMX0sdC5oaWdobGlnaHQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUsbj1uZXcgUmVnRXhwKFwiKFwiK3QudHJpbSgpK1wiKSg/IVtePF0qPltePD5dKjwvKVwiLFwiaVwiKTtpZighZS5tYXRjaChuKSlyZXR1cm4gZTt2YXIgYT1lLm1hdGNoKG4pLmluZGV4LG89YStlLm1hdGNoKG4pWzBdLnRvU3RyaW5nKCkubGVuZ3RoLGw9ZS5zdWJzdHJpbmcoYSxvKTtyZXR1cm4gcz1zLnJlcGxhY2UobiwnPG1hcmsgY2xhc3M9XCInK2krJ1wiPicrbCtcIjwvbWFyaz5cIil9LFwiZnVuY3Rpb25cIiE9dHlwZW9mKG49d2luZG93KS5DdXN0b21FdmVudCYmKHMucHJvdG90eXBlPW4uRXZlbnQucHJvdG90eXBlLG4uQ3VzdG9tRXZlbnQ9cyl9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLm5ld09wdGlvbj1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ZS5pZD9lLmlkOlN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZT9lLnZhbHVlOlwiXCIsdGV4dDplLnRleHQ/ZS50ZXh0OlwiXCIsaW5uZXJIVE1MOmUuaW5uZXJIVE1MP2UuaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ISFlLnNlbGVjdGVkJiZlLnNlbGVjdGVkLGRpc3BsYXk6dm9pZCAwPT09ZS5kaXNwbGF5fHxlLmRpc3BsYXksZGlzYWJsZWQ6ISFlLmRpc2FibGVkJiZlLmRpc2FibGVkLHBsYWNlaG9sZGVyOiEhZS5wbGFjZWhvbGRlciYmZS5wbGFjZWhvbGRlcixjbGFzczplLmNsYXNzP2UuY2xhc3M6dm9pZCAwLGRhdGE6ZS5kYXRhP2UuZGF0YTp7fX19LG4ucHJvdG90eXBlLmFkZD1mdW5jdGlvbihlKXt0aGlzLmRhdGEucHVzaCh7aWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDpcIlwiLHNlbGVjdGVkOiExLGRpc3BsYXk6ITAsZGlzYWJsZWQ6ITEscGxhY2Vob2xkZXI6ITEsY2xhc3M6dm9pZCAwLGRhdGE6e319KX0sbi5wcm90b3R5cGUucGFyc2VTZWxlY3REYXRhPWZ1bmN0aW9uKCl7dGhpcy5kYXRhPVtdO2Zvcih2YXIgZT0wLHQ9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNoaWxkTm9kZXM7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV07aWYoXCJPUFRHUk9VUFwiPT09aS5ub2RlTmFtZSl7Zm9yKHZhciBzPXtsYWJlbDppLmxhYmVsLG9wdGlvbnM6W119LG49MCxhPWkuY2hpbGROb2RlcztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpZihcIk9QVElPTlwiPT09by5ub2RlTmFtZSl7dmFyIGw9dGhpcy5wdWxsT3B0aW9uRGF0YShvKTtzLm9wdGlvbnMucHVzaChsKSxsLnBsYWNlaG9sZGVyJiZcIlwiIT09bC50ZXh0LnRyaW0oKSYmKHRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0PWwudGV4dCl9fXRoaXMuZGF0YS5wdXNoKHMpfWVsc2VcIk9QVElPTlwiPT09aS5ub2RlTmFtZSYmKGw9dGhpcy5wdWxsT3B0aW9uRGF0YShpKSx0aGlzLmRhdGEucHVzaChsKSxsLnBsYWNlaG9sZGVyJiZcIlwiIT09bC50ZXh0LnRyaW0oKSYmKHRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0PWwudGV4dCkpfX0sbi5wcm90b3R5cGUucHVsbE9wdGlvbkRhdGE9ZnVuY3Rpb24oZSl7cmV0dXJue2lkOiEhZS5kYXRhc2V0JiZlLmRhdGFzZXQuaWR8fFN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZSx0ZXh0OmUudGV4dCxpbm5lckhUTUw6ZS5pbm5lckhUTUwsc2VsZWN0ZWQ6ZS5zZWxlY3RlZCxkaXNhYmxlZDplLmRpc2FibGVkLHBsYWNlaG9sZGVyOlwidHJ1ZVwiPT09ZS5kYXRhc2V0LnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3NOYW1lLHN0eWxlOmUuc3R5bGUuY3NzVGV4dCxkYXRhOmUuZGF0YXNldH19LG4ucHJvdG90eXBlLnNldFNlbGVjdGVkRnJvbVNlbGVjdD1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5vcHRpb25zO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2lmKHMuc2VsZWN0ZWQpe3ZhciBuPXRoaXMuZ2V0T2JqZWN0RnJvbURhdGEocy52YWx1ZSxcInZhbHVlXCIpO24mJm4uaWQmJmUucHVzaChuLmlkKX19dGhpcy5zZXRTZWxlY3RlZChlLFwiaWRcIil9ZWxzZXt2YXIgYT10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQ7aWYoLTEhPT1hLnNlbGVjdGVkSW5kZXgpe3ZhciBvPWEub3B0aW9uc1thLnNlbGVjdGVkSW5kZXhdLnZhbHVlO3RoaXMuc2V0U2VsZWN0ZWQobyxcInZhbHVlXCIpfX19LG4ucHJvdG90eXBlLnNldFNlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9XCJpZFwiKTtmb3IodmFyIGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5wbGFjZWhvbGRlcnx8KHIuc2VsZWN0ZWQ9dGhpcy5zaG91bGRCZVNlbGVjdGVkKHIsZSx0KSl9fX1lbHNlIG4uc2VsZWN0ZWQ9dGhpcy5zaG91bGRCZVNlbGVjdGVkKG4sZSx0KX19LG4ucHJvdG90eXBlLnNob3VsZEJlU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkpe2lmKHZvaWQgMD09PWkmJihpPVwiaWRcIiksQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHM9MCxuPXQ7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107aWYoaSBpbiBlJiZTdHJpbmcoZVtpXSk9PT1TdHJpbmcoYSkpcmV0dXJuITB9ZWxzZSBpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyh0KSlyZXR1cm4hMDtyZXR1cm4hMX0sbi5wcm90b3R5cGUuZ2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9e3RleHQ6XCJcIixwbGFjZWhvbGRlcjp0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dH0sdD1bXSxpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO3Iuc2VsZWN0ZWQmJih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dC5wdXNoKHIpOmU9cil9fX1lbHNlIG4uc2VsZWN0ZWQmJih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dC5wdXNoKG4pOmU9bil9cmV0dXJuIHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90OmV9LG4ucHJvdG90eXBlLmFkZFRvU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10JiYodD1cImlkXCIpLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIGk9W10scz10aGlzLmdldFNlbGVjdGVkKCk7aWYoQXJyYXkuaXNBcnJheShzKSlmb3IodmFyIG49MCxhPXM7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07aS5wdXNoKG9bdF0pfWkucHVzaChlKSx0aGlzLnNldFNlbGVjdGVkKGksdCl9fSxuLnByb3RvdHlwZS5yZW1vdmVGcm9tU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10JiYodD1cImlkXCIpLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBpPVtdLHM9MCxuPXRoaXMuZ2V0U2VsZWN0ZWQoKTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtTdHJpbmcoYVt0XSkhPT1TdHJpbmcoZSkmJmkucHVzaChhW3RdKX10aGlzLnNldFNlbGVjdGVkKGksdCl9fSxuLnByb3RvdHlwZS5vbkRhdGFDaGFuZ2U9ZnVuY3Rpb24oKXt0aGlzLm1haW4ub25DaGFuZ2UmJnRoaXMuaXNPbkNoYW5nZUVuYWJsZWQmJnRoaXMubWFpbi5vbkNoYW5nZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0U2VsZWN0ZWQoKSkpKX0sbi5wcm90b3R5cGUuZ2V0T2JqZWN0RnJvbURhdGE9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKHQgaW4gbiYmU3RyaW5nKG5bdF0pPT09U3RyaW5nKGUpKXJldHVybiBuO2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uO2lmKGEub3B0aW9ucylmb3IodmFyIG89MCxsPWEub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtpZihTdHJpbmcoclt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIHJ9fX1yZXR1cm4gbnVsbH0sbi5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKG4pe2lmKFwiXCIhPT0odGhpcy5zZWFyY2hWYWx1ZT1uKS50cmltKCkpe3ZhciBhPXRoaXMubWFpbi5jb25maWcuc2VhcmNoRmlsdGVyLGU9dGhpcy5kYXRhLnNsaWNlKDApO249bi50cmltKCk7dmFyIHQ9ZS5tYXAoZnVuY3Rpb24oZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciB0PWUsaT1bXTtpZih0Lm9wdGlvbnMmJihpPXQub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSxuKX0pKSwwIT09aS5sZW5ndGgpe3ZhciBzPU9iamVjdC5hc3NpZ24oe30sdCk7cmV0dXJuIHMub3B0aW9ucz1pLHN9fXJldHVybiBlLmhhc093blByb3BlcnR5KFwidGV4dFwiKSYmYShlLG4pP2U6bnVsbH0pO3RoaXMuZmlsdGVyZWQ9dC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX1lbHNlIHRoaXMuZmlsdGVyZWQ9bnVsbH0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmNvbnRlbnRPcGVuPSExLHRoaXMuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIix0aGlzLmlzT25DaGFuZ2VFbmFibGVkPSEwLHRoaXMubWFpbj1lLm1haW4sdGhpcy5zZWFyY2hWYWx1ZT1cIlwiLHRoaXMuZGF0YT1bXSx0aGlzLmZpbHRlcmVkPW51bGwsdGhpcy5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIHZvaWQgMCE9PWUudGV4dHx8KGNvbnNvbGUuZXJyb3IoXCJEYXRhIG9iamVjdCBvcHRpb24gbXVzdCBoYXZlIGF0IGxlYXN0IGhhdmUgYSB0ZXh0IHZhbHVlLiBDaGVjayBvYmplY3Q6IFwiK0pTT04uc3RyaW5naWZ5KGUpKSwhMSl9dC5EYXRhPXMsdC52YWxpZGF0ZURhdGE9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJEYXRhIG11c3QgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1wiKSwhMTtmb3IodmFyIHQ9MCxpPTAscz1lO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7cihsW29dKXx8dCsrfX19ZWxzZSByKG4pfHx0Kyt9cmV0dXJuIDA9PT10fSx0LnZhbGlkYXRlT3B0aW9uPXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9aSgzKSxuPWkoNCksYT1pKDUpLG89aSgxKSxsPWkoMCkscj0oYy5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJzdHJpbmdcIj09dHlwZW9mIGUuc2VsZWN0P2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5zZWxlY3QpOmUuc2VsZWN0O2lmKCF0KXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHNlbGVjdCBlbGVtZW50XCIpO2lmKFwiU0VMRUNUXCIhPT10LnRhZ05hbWUpdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBpc250IG9mIHR5cGUgc2VsZWN0XCIpO3JldHVybiB0fSxjLnByb3RvdHlwZS5zZWxlY3RlZD1mdW5jdGlvbigpe2lmKHRoaXMuY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgZT1bXSx0PTAsaT1uPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2UucHVzaChzLnZhbHVlKX1yZXR1cm4gZX12YXIgbjtyZXR1cm4obj10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKSk/bi52YWx1ZTpcIlwifSxjLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJiFBcnJheS5pc0FycmF5KGUpP3RoaXMuZGF0YS5hZGRUb1NlbGVjdGVkKGUsdCk6dGhpcy5kYXRhLnNldFNlbGVjdGVkKGUsdCksdGhpcy5zZWxlY3Quc2V0VmFsdWUoKSx0aGlzLmRhdGEub25EYXRhQ2hhbmdlKCksdGhpcy5yZW5kZXIoKSxpJiZ0aGlzLmNsb3NlKCl9LGMucHJvdG90eXBlLnNldFNlbGVjdGVkPWZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9ITApLHZvaWQgMD09PXMmJihzPSEwKSx0aGlzLnNldChlLHQsaSxzKX0sYy5wcm90b3R5cGUuc2V0RGF0YT1mdW5jdGlvbihlKXtpZihvLnZhbGlkYXRlRGF0YShlKSl7dmFyIHQ9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSksaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZih0aGlzLmNvbmZpZy5pc0FqYXgmJmkpaWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIHM9MCxuPWkucmV2ZXJzZSgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO3QudW5zaGlmdChhKX1lbHNlIHQudW5zaGlmdCh0aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKSksdC51bnNoaWZ0KHt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6ITB9KTt0aGlzLnNlbGVjdC5jcmVhdGUodCksdGhpcy5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKX1lbHNlIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUuYWRkRGF0YT1mdW5jdGlvbihlKXtvLnZhbGlkYXRlRGF0YShbZV0pPyh0aGlzLmRhdGEuYWRkKHRoaXMuZGF0YS5uZXdPcHRpb24oZSkpLHRoaXMuc2VsZWN0LmNyZWF0ZSh0aGlzLmRhdGEuZGF0YSksdGhpcy5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0aGlzLnJlbmRlcigpKTpjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBwcm9ibGVtIG9uOiAjXCIrdGhpcy5zZWxlY3QuZWxlbWVudC5pZCl9LGMucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuY29uZmlnLmlzRW5hYmxlZCYmIXRoaXMuZGF0YS5jb250ZW50T3Blbil7aWYodGhpcy5iZWZvcmVPcGVuJiZ0aGlzLmJlZm9yZU9wZW4oKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5wbHVzLmNsYXNzTGlzdC5hZGQoXCJzcy1jcm9zc1wiKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LXVwXCIpKSx0aGlzLnNsaW1bdGhpcy5jb25maWcuaXNNdWx0aXBsZT9cIm11bHRpU2VsZWN0ZWRcIjpcInNpbmdsZVNlbGVjdGVkXCJdLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdmVcIj09PXRoaXMuZGF0YS5jb250ZW50UG9zaXRpb24/dGhpcy5jb25maWcub3BlbkFib3ZlOnRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5jb25maWcuYWRkVG9Cb2R5KXt2YXIgdD10aGlzLnNsaW0uY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMuc2xpbS5jb250ZW50LnN0eWxlLnRvcD10LnRvcCt0LmhlaWdodCt3aW5kb3cuc2Nyb2xsWStcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUubGVmdD10LmxlZnQrd2luZG93LnNjcm9sbFgrXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLndpZHRoPXQud2lkdGgrXCJweFwifWlmKHRoaXMuc2xpbS5jb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbiksXCJ1cFwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QWJvdmUoKTpcImRvd25cIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50LnRvTG93ZXJDYXNlKCk/dGhpcy5tb3ZlQ29udGVudEJlbG93KCk6XCJhYm92ZVwiPT09bC5wdXRDb250ZW50KHRoaXMuc2xpbS5jb250ZW50LHRoaXMuZGF0YS5jb250ZW50UG9zaXRpb24sdGhpcy5kYXRhLmNvbnRlbnRPcGVuKT90aGlzLm1vdmVDb250ZW50QWJvdmUoKTp0aGlzLm1vdmVDb250ZW50QmVsb3coKSwhdGhpcy5jb25maWcuaXNNdWx0aXBsZSl7dmFyIGk9dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7aWYoaSl7dmFyIHM9aS5pZCxuPXRoaXMuc2xpbS5saXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJytzKydcIl0nKTtuJiZsLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5zbGltLmxpc3Qsbil9fXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmRhdGEuY29udGVudE9wZW49ITAsZS5jb25maWcuc2VhcmNoRm9jdXMmJmUuc2xpbS5zZWFyY2guaW5wdXQuZm9jdXMoKSxlLmFmdGVyT3BlbiYmZS5hZnRlck9wZW4oKX0sdGhpcy5jb25maWcudGltZW91dERlbGF5KX19LGMucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmRhdGEuY29udGVudE9wZW4mJih0aGlzLmJlZm9yZUNsb3NlJiZ0aGlzLmJlZm9yZUNsb3NlKCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5wbHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzcy1jcm9zc1wiKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctZG93blwiKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvdy11cFwiKSksdGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuKSx0aGlzLmRhdGEuY29udGVudE9wZW49ITEsdGhpcy5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe2Uuc2xpbS5jb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLGUuZGF0YS5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLGUuY29uZmlnLmlzTXVsdGlwbGUmJmUuc2xpbS5tdWx0aVNlbGVjdGVkPyhlLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQWJvdmUpLGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpOmUuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKGUuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQWJvdmUpLGUuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQmVsb3cpKSxlLnNsaW0uc2VhcmNoLmlucHV0LmJsdXIoKSxlLmFmdGVyQ2xvc2UmJmUuYWZ0ZXJDbG9zZSgpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpKX0sYy5wcm90b3R5cGUubW92ZUNvbnRlbnRBYm92ZT1mdW5jdGlvbigpe3ZhciBlPTA7dGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/ZT10aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0OnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKGU9dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQpO3ZhciB0PWUrdGhpcy5zbGltLmNvbnRlbnQub2Zmc2V0SGVpZ2h0LTE7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUubWFyZ2luPVwiLVwiK3QrXCJweCAwIDAgMFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLmhlaWdodD10LWUrMStcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPVwiY2VudGVyIGJvdHRvbVwiLHRoaXMuZGF0YS5jb250ZW50UG9zaXRpb249XCJhYm92ZVwiLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpKX0sYy5wcm90b3R5cGUubW92ZUNvbnRlbnRCZWxvdz1mdW5jdGlvbigpe3RoaXMuZGF0YS5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpKX0sYy5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNFbmFibGVkPSEwLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5kaXNhYmxlZCksdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITEsdGhpcy5zZWxlY3QuZWxlbWVudC5kaXNhYmxlZD0hMSx0aGlzLnNsaW0uc2VhcmNoLmlucHV0LmRpc2FibGVkPSExLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwfSxjLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNFbmFibGVkPSExLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5kaXNhYmxlZCksdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITEsdGhpcy5zZWxlY3QuZWxlbWVudC5kaXNhYmxlZD0hMCx0aGlzLnNsaW0uc2VhcmNoLmlucHV0LmRpc2FibGVkPSEwLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwfSxjLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24odCl7aWYodGhpcy5kYXRhLnNlYXJjaFZhbHVlIT09dClpZih0aGlzLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlPXQsdGhpcy5jb25maWcuaXNBamF4KXt2YXIgaT10aGlzO3RoaXMuY29uZmlnLmlzU2VhcmNoaW5nPSEwLHRoaXMucmVuZGVyKCksdGhpcy5hamF4JiZ0aGlzLmFqYXgodCxmdW5jdGlvbihlKXtpLmNvbmZpZy5pc1NlYXJjaGluZz0hMSxBcnJheS5pc0FycmF5KGUpPyhlLnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pLGkuc2V0RGF0YShlKSxpLmRhdGEuc2VhcmNoKHQpLGkucmVuZGVyKCkpOlwic3RyaW5nXCI9PXR5cGVvZiBlP2kuc2xpbS5vcHRpb25zKGUpOmkucmVuZGVyKCl9KX1lbHNlIHRoaXMuZGF0YS5zZWFyY2godCksdGhpcy5yZW5kZXIoKX0sYy5wcm90b3R5cGUuc2V0U2VhcmNoVGV4dD1mdW5jdGlvbihlKXt0aGlzLmNvbmZpZy5zZWFyY2hUZXh0PWV9LGMucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzTXVsdGlwbGU/dGhpcy5zbGltLnZhbHVlcygpOih0aGlzLnNsaW0ucGxhY2Vob2xkZXIoKSx0aGlzLnNsaW0uZGVzZWxlY3QoKSksdGhpcy5zbGltLm9wdGlvbnMoKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT1udWxsKTt2YXIgdD1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZStcIi5zcy1tYWluXCIpOnRoaXMuc2xpbS5jb250YWluZXIsaT1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zc2lkPVwiK2UrXCJdXCIpOnRoaXMuc2VsZWN0LmVsZW1lbnQ7aWYodCYmaSYmKGkuc3R5bGUuZGlzcGxheT1cIlwiLGRlbGV0ZSBpLmRhdGFzZXQuc3NpZCxpLnNsaW09bnVsbCx0LnBhcmVudEVsZW1lbnQmJnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpKXt2YXIgcz1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZStcIi5zcy1jb250ZW50XCIpOnRoaXMuc2xpbS5jb250ZW50O2lmKCFzKXJldHVybjtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHMpfX0sYyk7ZnVuY3Rpb24gYyhlKXt2YXIgdD10aGlzO3RoaXMuYWpheD1udWxsLHRoaXMuYWRkYWJsZT1udWxsLHRoaXMuYmVmb3JlT25DaGFuZ2U9bnVsbCx0aGlzLm9uQ2hhbmdlPW51bGwsdGhpcy5iZWZvcmVPcGVuPW51bGwsdGhpcy5hZnRlck9wZW49bnVsbCx0aGlzLmJlZm9yZUNsb3NlPW51bGwsdGhpcy5hZnRlckNsb3NlPW51bGw7dmFyIGk9dGhpcy52YWxpZGF0ZShlKTtpLmRhdGFzZXQuc3NpZCYmdGhpcy5kZXN0cm95KGkuZGF0YXNldC5zc2lkKSxlLmFqYXgmJih0aGlzLmFqYXg9ZS5hamF4KSxlLmFkZGFibGUmJih0aGlzLmFkZGFibGU9ZS5hZGRhYmxlKSx0aGlzLmNvbmZpZz1uZXcgcy5Db25maWcoe3NlbGVjdDppLGlzQWpheDohIWUuYWpheCxzaG93U2VhcmNoOmUuc2hvd1NlYXJjaCxzZWFyY2hQbGFjZWhvbGRlcjplLnNlYXJjaFBsYWNlaG9sZGVyLHNlYXJjaFRleHQ6ZS5zZWFyY2hUZXh0LHNlYXJjaGluZ1RleHQ6ZS5zZWFyY2hpbmdUZXh0LHNlYXJjaEZvY3VzOmUuc2VhcmNoRm9jdXMsc2VhcmNoSGlnaGxpZ2h0OmUuc2VhcmNoSGlnaGxpZ2h0LHNlYXJjaEZpbHRlcjplLnNlYXJjaEZpbHRlcixjbG9zZU9uU2VsZWN0OmUuY2xvc2VPblNlbGVjdCxzaG93Q29udGVudDplLnNob3dDb250ZW50LHBsYWNlaG9sZGVyVGV4dDplLnBsYWNlaG9sZGVyLGFsbG93RGVzZWxlY3Q6ZS5hbGxvd0Rlc2VsZWN0LGFsbG93RGVzZWxlY3RPcHRpb246ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLGhpZGVTZWxlY3RlZE9wdGlvbjplLmhpZGVTZWxlY3RlZE9wdGlvbixkZXNlbGVjdExhYmVsOmUuZGVzZWxlY3RMYWJlbCxpc0VuYWJsZWQ6ZS5pc0VuYWJsZWQsdmFsdWVzVXNlVGV4dDplLnZhbHVlc1VzZVRleHQsc2hvd09wdGlvblRvb2x0aXBzOmUuc2hvd09wdGlvblRvb2x0aXBzLHNlbGVjdEJ5R3JvdXA6ZS5zZWxlY3RCeUdyb3VwLGxpbWl0OmUubGltaXQsdGltZW91dERlbGF5OmUudGltZW91dERlbGF5LGFkZFRvQm9keTplLmFkZFRvQm9keX0pLHRoaXMuc2VsZWN0PW5ldyBuLlNlbGVjdCh7c2VsZWN0OmksbWFpbjp0aGlzfSksdGhpcy5kYXRhPW5ldyBvLkRhdGEoe21haW46dGhpc30pLHRoaXMuc2xpbT1uZXcgYS5TbGltKHttYWluOnRoaXN9KSx0aGlzLnNlbGVjdC5lbGVtZW50LnBhcmVudE5vZGUmJnRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5zbGltLmNvbnRhaW5lcix0aGlzLnNlbGVjdC5lbGVtZW50Lm5leHRTaWJsaW5nKSxlLmRhdGE/dGhpcy5zZXREYXRhKGUuZGF0YSk6dGhpcy5yZW5kZXIoKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnRhcmdldCYmIWwuaGFzQ2xhc3NJblRyZWUoZS50YXJnZXQsdC5jb25maWcuaWQpJiZ0LmNsb3NlKCl9KSxcImF1dG9cIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50JiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGwuZGVib3VuY2UoZnVuY3Rpb24oZSl7dC5kYXRhLmNvbnRlbnRPcGVuJiYoXCJhYm92ZVwiPT09bC5wdXRDb250ZW50KHQuc2xpbS5jb250ZW50LHQuZGF0YS5jb250ZW50UG9zaXRpb24sdC5kYXRhLmNvbnRlbnRPcGVuKT90Lm1vdmVDb250ZW50QWJvdmUoKTp0Lm1vdmVDb250ZW50QmVsb3coKSl9KSwhMSksZS5iZWZvcmVPbkNoYW5nZSYmKHRoaXMuYmVmb3JlT25DaGFuZ2U9ZS5iZWZvcmVPbkNoYW5nZSksZS5vbkNoYW5nZSYmKHRoaXMub25DaGFuZ2U9ZS5vbkNoYW5nZSksZS5iZWZvcmVPcGVuJiYodGhpcy5iZWZvcmVPcGVuPWUuYmVmb3JlT3BlbiksZS5hZnRlck9wZW4mJih0aGlzLmFmdGVyT3Blbj1lLmFmdGVyT3BlbiksZS5iZWZvcmVDbG9zZSYmKHRoaXMuYmVmb3JlQ2xvc2U9ZS5iZWZvcmVDbG9zZSksZS5hZnRlckNsb3NlJiYodGhpcy5hZnRlckNsb3NlPWUuYWZ0ZXJDbG9zZSksdGhpcy5jb25maWcuaXNFbmFibGVkfHx0aGlzLmRpc2FibGUoKX10LmRlZmF1bHQ9cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUuc2VhcmNoRmlsdGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuLTEhPT1lLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHQudG9Mb3dlckNhc2UoKSl9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5pZD1cIlwiLHRoaXMuaXNNdWx0aXBsZT0hMSx0aGlzLmlzQWpheD0hMSx0aGlzLmlzU2VhcmNoaW5nPSExLHRoaXMuc2hvd1NlYXJjaD0hMCx0aGlzLnNlYXJjaEZvY3VzPSEwLHRoaXMuc2VhcmNoSGlnaGxpZ2h0PSExLHRoaXMuY2xvc2VPblNlbGVjdD0hMCx0aGlzLnNob3dDb250ZW50PVwiYXV0b1wiLHRoaXMuc2VhcmNoUGxhY2Vob2xkZXI9XCJTZWFyY2hcIix0aGlzLnNlYXJjaFRleHQ9XCJObyBSZXN1bHRzXCIsdGhpcy5zZWFyY2hpbmdUZXh0PVwiU2VhcmNoaW5nLi4uXCIsdGhpcy5wbGFjZWhvbGRlclRleHQ9XCJTZWxlY3QgVmFsdWVcIix0aGlzLmFsbG93RGVzZWxlY3Q9ITEsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSExLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSExLHRoaXMuZGVzZWxlY3RMYWJlbD1cInhcIix0aGlzLmlzRW5hYmxlZD0hMCx0aGlzLnZhbHVlc1VzZVRleHQ9ITEsdGhpcy5zaG93T3B0aW9uVG9vbHRpcHM9ITEsdGhpcy5zZWxlY3RCeUdyb3VwPSExLHRoaXMubGltaXQ9MCx0aGlzLnRpbWVvdXREZWxheT0yMDAsdGhpcy5hZGRUb0JvZHk9ITEsdGhpcy5tYWluPVwic3MtbWFpblwiLHRoaXMuc2luZ2xlU2VsZWN0ZWQ9XCJzcy1zaW5nbGUtc2VsZWN0ZWRcIix0aGlzLmFycm93PVwic3MtYXJyb3dcIix0aGlzLm11bHRpU2VsZWN0ZWQ9XCJzcy1tdWx0aS1zZWxlY3RlZFwiLHRoaXMuYWRkPVwic3MtYWRkXCIsdGhpcy5wbHVzPVwic3MtcGx1c1wiLHRoaXMudmFsdWVzPVwic3MtdmFsdWVzXCIsdGhpcy52YWx1ZT1cInNzLXZhbHVlXCIsdGhpcy52YWx1ZVRleHQ9XCJzcy12YWx1ZS10ZXh0XCIsdGhpcy52YWx1ZURlbGV0ZT1cInNzLXZhbHVlLWRlbGV0ZVwiLHRoaXMuY29udGVudD1cInNzLWNvbnRlbnRcIix0aGlzLm9wZW49XCJzcy1vcGVuXCIsdGhpcy5vcGVuQWJvdmU9XCJzcy1vcGVuLWFib3ZlXCIsdGhpcy5vcGVuQmVsb3c9XCJzcy1vcGVuLWJlbG93XCIsdGhpcy5zZWFyY2g9XCJzcy1zZWFyY2hcIix0aGlzLnNlYXJjaEhpZ2hsaWdodGVyPVwic3Mtc2VhcmNoLWhpZ2hsaWdodFwiLHRoaXMuYWRkYWJsZT1cInNzLWFkZGFibGVcIix0aGlzLmxpc3Q9XCJzcy1saXN0XCIsdGhpcy5vcHRncm91cD1cInNzLW9wdGdyb3VwXCIsdGhpcy5vcHRncm91cExhYmVsPVwic3Mtb3B0Z3JvdXAtbGFiZWxcIix0aGlzLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlPVwic3Mtb3B0Z3JvdXAtbGFiZWwtc2VsZWN0YWJsZVwiLHRoaXMub3B0aW9uPVwic3Mtb3B0aW9uXCIsdGhpcy5vcHRpb25TZWxlY3RlZD1cInNzLW9wdGlvbi1zZWxlY3RlZFwiLHRoaXMuaGlnaGxpZ2h0ZWQ9XCJzcy1oaWdobGlnaHRlZFwiLHRoaXMuZGlzYWJsZWQ9XCJzcy1kaXNhYmxlZFwiLHRoaXMuaGlkZT1cInNzLWhpZGVcIix0aGlzLmlkPVwic3MtXCIrTWF0aC5mbG9vcigxZTUqTWF0aC5yYW5kb20oKSksdGhpcy5zdHlsZT1lLnNlbGVjdC5zdHlsZS5jc3NUZXh0LHRoaXMuY2xhc3M9ZS5zZWxlY3QuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSx0aGlzLmlzTXVsdGlwbGU9ZS5zZWxlY3QubXVsdGlwbGUsdGhpcy5pc0FqYXg9ZS5pc0FqYXgsdGhpcy5zaG93U2VhcmNoPSExIT09ZS5zaG93U2VhcmNoLHRoaXMuc2VhcmNoRm9jdXM9ITEhPT1lLnNlYXJjaEZvY3VzLHRoaXMuc2VhcmNoSGlnaGxpZ2h0PSEwPT09ZS5zZWFyY2hIaWdobGlnaHQsdGhpcy5jbG9zZU9uU2VsZWN0PSExIT09ZS5jbG9zZU9uU2VsZWN0LGUuc2hvd0NvbnRlbnQmJih0aGlzLnNob3dDb250ZW50PWUuc2hvd0NvbnRlbnQpLHRoaXMuaXNFbmFibGVkPSExIT09ZS5pc0VuYWJsZWQsZS5zZWFyY2hQbGFjZWhvbGRlciYmKHRoaXMuc2VhcmNoUGxhY2Vob2xkZXI9ZS5zZWFyY2hQbGFjZWhvbGRlciksZS5zZWFyY2hUZXh0JiYodGhpcy5zZWFyY2hUZXh0PWUuc2VhcmNoVGV4dCksZS5zZWFyY2hpbmdUZXh0JiYodGhpcy5zZWFyY2hpbmdUZXh0PWUuc2VhcmNoaW5nVGV4dCksZS5wbGFjZWhvbGRlclRleHQmJih0aGlzLnBsYWNlaG9sZGVyVGV4dD1lLnBsYWNlaG9sZGVyVGV4dCksdGhpcy5hbGxvd0Rlc2VsZWN0PSEwPT09ZS5hbGxvd0Rlc2VsZWN0LHRoaXMuYWxsb3dEZXNlbGVjdE9wdGlvbj0hMD09PWUuYWxsb3dEZXNlbGVjdE9wdGlvbix0aGlzLmhpZGVTZWxlY3RlZE9wdGlvbj0hMD09PWUuaGlkZVNlbGVjdGVkT3B0aW9uLGUuZGVzZWxlY3RMYWJlbCYmKHRoaXMuZGVzZWxlY3RMYWJlbD1lLmRlc2VsZWN0TGFiZWwpLGUudmFsdWVzVXNlVGV4dCYmKHRoaXMudmFsdWVzVXNlVGV4dD1lLnZhbHVlc1VzZVRleHQpLGUuc2hvd09wdGlvblRvb2x0aXBzJiYodGhpcy5zaG93T3B0aW9uVG9vbHRpcHM9ZS5zaG93T3B0aW9uVG9vbHRpcHMpLGUuc2VsZWN0QnlHcm91cCYmKHRoaXMuc2VsZWN0QnlHcm91cD1lLnNlbGVjdEJ5R3JvdXApLGUubGltaXQmJih0aGlzLmxpbWl0PWUubGltaXQpLGUuc2VhcmNoRmlsdGVyJiYodGhpcy5zZWFyY2hGaWx0ZXI9ZS5zZWFyY2hGaWx0ZXIpLG51bGwhPWUudGltZW91dERlbGF5JiYodGhpcy50aW1lb3V0RGVsYXk9ZS50aW1lb3V0RGVsYXkpLHRoaXMuYWRkVG9Cb2R5PSEwPT09ZS5hZGRUb0JvZHl9dC5Db25maWc9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24oKXtpZih0aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpKXtpZih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpZm9yKHZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksdD0wLGk9dGhpcy5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07cy5zZWxlY3RlZD0hMTtmb3IodmFyIG49MCxhPWU7bjxhLmxlbmd0aDtuKyspYVtuXS52YWx1ZT09PXMudmFsdWUmJihzLnNlbGVjdGVkPSEwKX1lbHNlIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0aGlzLmVsZW1lbnQudmFsdWU9ZT9lLnZhbHVlOlwiXCI7dGhpcy5tYWluLmRhdGEuaXNPbkNoYW5nZUVuYWJsZWQ9ITEsdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksdGhpcy5tYWluLmRhdGEuaXNPbkNoYW5nZUVuYWJsZWQ9ITB9fSxuLnByb3RvdHlwZS5hZGRBdHRyaWJ1dGVzPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnRhYkluZGV4PS0xLHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuZWxlbWVudC5kYXRhc2V0LnNzaWQ9dGhpcy5tYWluLmNvbmZpZy5pZH0sbi5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oZSl7dC5tYWluLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdC5tYWluLnJlbmRlcigpfSl9LG4ucHJvdG90eXBlLmFkZE11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMubWFpbi5jb25maWcuaXNBamF4fHwodGhpcy5tdXRhdGlvbk9ic2VydmVyPW5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUpe3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXImJih0Lm1haW4uZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCksZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1wiY2xhc3NcIj09PWUuYXR0cmlidXRlTmFtZSYmdC5tYWluLnNsaW0udXBkYXRlQ29udGFpbmVyRGl2Q2xhc3ModC5tYWluLnNsaW0uY29udGFpbmVyKX0pKX0pLHRoaXMub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXIoKSl9LG4ucHJvdG90eXBlLm9ic2VydmVNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dGhpcy5tdXRhdGlvbk9ic2VydmVyJiZ0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQse2F0dHJpYnV0ZXM6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITB9KX0sbi5wcm90b3R5cGUuZGlzY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCl9LG4ucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuaW5uZXJIVE1MPVwiXCI7Zm9yKHZhciB0PTAsaT1lO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2lmKHMuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgbj1zLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO2lmKGEubGFiZWw9bi5sYWJlbCxuLm9wdGlvbnMpZm9yKHZhciBvPTAsbD1uLm9wdGlvbnM7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107YS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbihyKSl9dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGEpfWVsc2UgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHMpKX19LG4ucHJvdG90eXBlLmNyZWF0ZU9wdGlvbj1mdW5jdGlvbih0KXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO3JldHVybiBpLnZhbHVlPXQudmFsdWV8fHQudGV4dCxpLmlubmVySFRNTD10LmlubmVySFRNTHx8dC50ZXh0LHQuc2VsZWN0ZWQmJihpLnNlbGVjdGVkPXQuc2VsZWN0ZWQpLHQuZGlzYWJsZWQmJihpLmRpc2FibGVkPSEwKSx0LnBsYWNlaG9sZGVyJiZpLnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXJcIixcInRydWVcIiksdC5jbGFzcyYmdC5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXtpLmNsYXNzTGlzdC5hZGQoZSl9KSx0LmRhdGEmJlwib2JqZWN0XCI9PXR5cGVvZiB0LmRhdGEmJk9iamVjdC5rZXlzKHQuZGF0YSkuZm9yRWFjaChmdW5jdGlvbihlKXtpLnNldEF0dHJpYnV0ZShcImRhdGEtXCIrZSx0LmRhdGFbZV0pfSksaX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwLHRoaXMuZWxlbWVudD1lLnNlbGVjdCx0aGlzLm1haW49ZS5tYWluLHRoaXMuZWxlbWVudC5kaXNhYmxlZCYmKHRoaXMubWFpbi5jb25maWcuaXNFbmFibGVkPSExKSx0aGlzLmFkZEF0dHJpYnV0ZXMoKSx0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5tdXRhdGlvbk9ic2VydmVyPW51bGwsdGhpcy5hZGRNdXRhdGlvbk9ic2VydmVyKCksdGhpcy5lbGVtZW50LnNsaW09ZS5tYWlufXQuU2VsZWN0PXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIGE9aSgwKSxvPWkoMSkscz0obi5wcm90b3R5cGUuY29udGFpbmVyRGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5zdHlsZS5jc3NUZXh0PXRoaXMubWFpbi5jb25maWcuc3R5bGUsdGhpcy51cGRhdGVDb250YWluZXJEaXZDbGFzcyhlKSxlfSxuLnByb3RvdHlwZS51cGRhdGVDb250YWluZXJEaXZDbGFzcz1mdW5jdGlvbihlKXt0aGlzLm1haW4uY29uZmlnLmNsYXNzPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLGUuY2xhc3NOYW1lPVwiXCIsZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaWQpLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm1haW4pO2Zvcih2YXIgdD0wLGk9dGhpcy5tYWluLmNvbmZpZy5jbGFzczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtcIlwiIT09cy50cmltKCkmJmUuY2xhc3NMaXN0LmFkZChzKX19LG4ucHJvdG90eXBlLnNpbmdsZVNlbGVjdGVkRGl2PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuc2luZ2xlU2VsZWN0ZWQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2kuY2xhc3NMaXN0LmFkZChcInBsYWNlaG9sZGVyXCIpLGUuYXBwZW5kQ2hpbGQoaSk7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cy5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5kZXNlbGVjdExhYmVsLHMuY2xhc3NMaXN0LmFkZChcInNzLWRlc2VsZWN0XCIpLHMub25jbGljaz1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHQubWFpbi5jb25maWcuaXNFbmFibGVkJiZ0Lm1haW4uc2V0KFwiXCIpfSxlLmFwcGVuZENoaWxkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO24uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFycm93KTt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gYS5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctZG93blwiKSxuLmFwcGVuZENoaWxkKGEpLGUuYXBwZW5kQ2hpbGQobiksZS5vbmNsaWNrPWZ1bmN0aW9uKCl7dC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJih0Lm1haW4uZGF0YS5jb250ZW50T3Blbj90Lm1haW4uY2xvc2UoKTp0Lm1haW4ub3BlbigpKX0se2NvbnRhaW5lcjplLHBsYWNlaG9sZGVyOmksZGVzZWxlY3Q6cyxhcnJvd0ljb246e2NvbnRhaW5lcjpuLGFycm93OmF9fX0sbi5wcm90b3R5cGUucGxhY2Vob2xkZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO2lmKG51bGw9PT1lfHxlJiZlLnBsYWNlaG9sZGVyKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQsdGhpcy5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2luZ2xlU2VsZWN0ZWQucGxhY2Vob2xkZXIuaW5uZXJIVE1MPXQub3V0ZXJIVE1MKX1lbHNle3ZhciBpPVwiXCI7ZSYmKGk9ZS5pbm5lckhUTUwmJiEwIT09dGhpcy5tYWluLmNvbmZpZy52YWx1ZXNVc2VUZXh0P2UuaW5uZXJIVE1MOmUudGV4dCksdGhpcy5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2luZ2xlU2VsZWN0ZWQucGxhY2Vob2xkZXIuaW5uZXJIVE1MPWU/aTpcIlwiKX19LG4ucHJvdG90eXBlLmRlc2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5zaW5nbGVTZWxlY3RlZCl7aWYoIXRoaXMubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdClyZXR1cm4gdm9pZCB0aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzcy1oaWRlXCIpO1wiXCI9PT10aGlzLm1haW4uc2VsZWN0ZWQoKT90aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzcy1oaWRlXCIpOnRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInNzLWhpZGVcIil9fSxuLnByb3RvdHlwZS5tdWx0aVNlbGVjdGVkRGl2PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubXVsdGlTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZXMpLGUuYXBwZW5kQ2hpbGQoaSk7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hZGQpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBuLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5wbHVzKSxuLm9uY2xpY2s9ZnVuY3Rpb24oZSl7dC5tYWluLmRhdGEuY29udGVudE9wZW4mJih0Lm1haW4uY2xvc2UoKSxlLnN0b3BQcm9wYWdhdGlvbigpKX0scy5hcHBlbmRDaGlsZChuKSxlLmFwcGVuZENoaWxkKHMpLGUub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0Lm1haW4uY29uZmlnLnZhbHVlRGVsZXRlKXx8KHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpKX0se2NvbnRhaW5lcjplLHZhbHVlczppLGFkZDpzLHBsdXM6bn19LG4ucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe2lmKHRoaXMubXVsdGlTZWxlY3RlZCl7Zm9yKHZhciBlLHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGk9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxzPVtdLG49MCxhPXQ7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07ZT0hMDtmb3IodmFyIGw9MCxyPWk7bDxyLmxlbmd0aDtsKyspe3ZhciBjPXJbbF07U3RyaW5nKGMuaWQpPT09U3RyaW5nKG8uZGF0YXNldC5pZCkmJihlPSExKX1lJiZzLnB1c2gobyl9Zm9yKHZhciBkPTAsaD1zO2Q8aC5sZW5ndGg7ZCsrKXt2YXIgdT1oW2RdO3UuY2xhc3NMaXN0LmFkZChcInNzLW91dFwiKSx0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLnJlbW92ZUNoaWxkKHUpfWZvcih0PXRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuY2hpbGROb2RlcyxjPTA7YzxpLmxlbmd0aDtjKyspe2U9ITE7Zm9yKHZhciBwPTAsbT10O3A8bS5sZW5ndGg7cCsrKW89bVtwXSxTdHJpbmcoaVtjXS5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITApO2V8fCgwIT09dC5sZW5ndGgmJkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ/MD09PWM/dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5pbnNlcnRCZWZvcmUodGhpcy52YWx1ZURpdihpW2NdKSx0W2NdKTp0W2MtMV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIix0aGlzLnZhbHVlRGl2KGlbY10pKTp0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmFwcGVuZENoaWxkKHRoaXMudmFsdWVEaXYoaVtjXSkpKX1pZigwPT09aS5sZW5ndGgpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2YuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxmLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmlubmVySFRNTD1mLm91dGVySFRNTH19fSxuLnByb3RvdHlwZS52YWx1ZURpdj1mdW5jdGlvbihhKXt2YXIgbz10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZSksZS5kYXRhc2V0LmlkPWEuaWQ7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVUZXh0KSx0LmlubmVySFRNTD1hLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/YS5pbm5lckhUTUw6YS50ZXh0LGUuYXBwZW5kQ2hpbGQodCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlRGVsZXRlKSxpLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwsaS5vbmNsaWNrPWZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PSExO2lmKG8ubWFpbi5jb25maWcuaXNFbmFibGVkKXtpZihvLm1haW4uYmVmb3JlT25DaGFuZ2V8fCh0PSEwKSxvLm1haW4uYmVmb3JlT25DaGFuZ2Upe2Zvcih2YXIgaT1vLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpKSksbj0wO248cy5sZW5ndGg7bisrKXNbbl0uaWQ9PT1hLmlkJiZzLnNwbGljZShuLDEpOyExIT09by5tYWluLmJlZm9yZU9uQ2hhbmdlKHMpJiYodD0hMCl9dCYmKG8ubWFpbi5kYXRhLnJlbW92ZUZyb21TZWxlY3RlZChhLmlkLFwiaWRcIiksby5tYWluLnJlbmRlcigpLG8ubWFpbi5zZWxlY3Quc2V0VmFsdWUoKSxvLm1haW4uZGF0YS5vbkRhdGFDaGFuZ2UoKSl9fSxlLmFwcGVuZENoaWxkKGkpLGV9LG4ucHJvdG90eXBlLmNvbnRlbnREaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5jb250ZW50KSxlfSxuLnByb3RvdHlwZS5zZWFyY2hEaXY9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuc2VhcmNoKTt2YXIgdD17Y29udGFpbmVyOmUsaW5wdXQ6c307cmV0dXJuIHRoaXMubWFpbi5jb25maWcuc2hvd1NlYXJjaHx8KGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLHMucmVhZE9ubHk9ITApLHMudHlwZT1cInNlYXJjaFwiLHMucGxhY2Vob2xkZXI9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlcixzLnRhYkluZGV4PTAscy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlcikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLFwib2ZmXCIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLFwib2ZmXCIpLHMub25jbGljaz1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJcIj09PWUudGFyZ2V0LnZhbHVlJiZuLm1haW4uc2VhcmNoKFwiXCIpfSwxMCl9LHMub25rZXlkb3duPWZ1bmN0aW9uKGUpe1wiQXJyb3dVcFwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHRVcCgpLGUucHJldmVudERlZmF1bHQoKSk6XCJBcnJvd0Rvd25cIj09PWUua2V5PyhuLm1haW4ub3BlbigpLG4uaGlnaGxpZ2h0RG93bigpLGUucHJldmVudERlZmF1bHQoKSk6XCJUYWJcIj09PWUua2V5P24ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5jbG9zZSgpOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uY2xvc2UoKX0sbi5tYWluLmNvbmZpZy50aW1lb3V0RGVsYXkpOlwiRW50ZXJcIj09PWUua2V5JiZlLnByZXZlbnREZWZhdWx0KCl9LHMub25rZXl1cD1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtpZihcIkVudGVyXCI9PT1lLmtleSl7aWYobi5tYWluLmFkZGFibGUmJmUuY3RybEtleSlyZXR1cm4gYS5jbGljaygpLGUucHJldmVudERlZmF1bHQoKSx2b2lkIGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGk9bi5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbi5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCk7aSYmaS5jbGljaygpfWVsc2VcIkFycm93VXBcIj09PWUua2V5fHxcIkFycm93RG93blwiPT09ZS5rZXl8fChcIkVzY2FwZVwiPT09ZS5rZXk/bi5tYWluLmNsb3NlKCk6bi5tYWluLmNvbmZpZy5zaG93U2VhcmNoJiZuLm1haW4uZGF0YS5jb250ZW50T3Blbj9uLm1haW4uc2VhcmNoKHQudmFsdWUpOnMudmFsdWU9XCJcIik7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCl9LHMub25mb2N1cz1mdW5jdGlvbigpe24ubWFpbi5vcGVuKCl9LGUuYXBwZW5kQ2hpbGQocyksdGhpcy5tYWluLmFkZGFibGUmJihhLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hZGRhYmxlKSxhLmlubmVySFRNTD1cIitcIixhLm9uY2xpY2s9ZnVuY3Rpb24oZSl7aWYobi5tYWluLmFkZGFibGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PW4uc2VhcmNoLmlucHV0LnZhbHVlO2lmKFwiXCI9PT10LnRyaW0oKSlyZXR1cm4gdm9pZCBuLnNlYXJjaC5pbnB1dC5mb2N1cygpO3ZhciBpPW4ubWFpbi5hZGRhYmxlKHQpLHM9XCJcIjtpZighaSlyZXR1cm47XCJvYmplY3RcIj09dHlwZW9mIGk/by52YWxpZGF0ZU9wdGlvbihpKSYmKG4ubWFpbi5hZGREYXRhKGkpLHM9aS52YWx1ZT9pLnZhbHVlOmkudGV4dCk6KG4ubWFpbi5hZGREYXRhKG4ubWFpbi5kYXRhLm5ld09wdGlvbih7dGV4dDppLHZhbHVlOml9KSkscz1pKSxuLm1haW4uc2VhcmNoKFwiXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uc2V0KHMsXCJ2YWx1ZVwiLCExLCExKX0sMTAwKSxuLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uY2xvc2UoKX0sMTAwKX19LGUuYXBwZW5kQ2hpbGQoYSksdC5hZGRhYmxlPWEpLHR9LG4ucHJvdG90eXBlLmhpZ2hsaWdodFVwPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdD1udWxsO2lmKGUpZm9yKHQ9ZS5wcmV2aW91c1NpYmxpbmc7bnVsbCE9PXQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpOyl0PXQucHJldmlvdXNTaWJsaW5nO2Vsc2V7dmFyIGk9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTt0PWlbaS5sZW5ndGgtMV19aWYodCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsKSYmKHQ9bnVsbCksbnVsbD09PXQpe3ZhciBzPWUucGFyZW50Tm9kZTtpZihzLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwKSYmcy5wcmV2aW91c1NpYmxpbmcpe3ZhciBuPXMucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTtuLmxlbmd0aCYmKHQ9bltuLmxlbmd0aC0xXSl9fXQmJihlJiZlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLGEuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLmxpc3QsdCkpfSxuLnByb3RvdHlwZS5oaWdobGlnaHREb3duPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdD1udWxsO2lmKGUpZm9yKHQ9ZS5uZXh0U2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5uZXh0U2libGluZztlbHNlIHQ9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTtpZihudWxsPT09dCYmbnVsbCE9PWUpe3ZhciBpPWUucGFyZW50Tm9kZTtpLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwKSYmaS5uZXh0U2libGluZyYmKHQ9aS5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIikpfXQmJihlJiZlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLGEuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLmxpc3QsdCkpfSxuLnByb3RvdHlwZS5saXN0RGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubGlzdCksZX0sbi5wcm90b3R5cGUub3B0aW9ucz1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT1cIlwiKTt2YXIgdCxpPXRoaXMubWFpbi5kYXRhLmZpbHRlcmVkfHx0aGlzLm1haW4uZGF0YS5kYXRhO2lmKCh0aGlzLmxpc3QuaW5uZXJIVE1MPVwiXCIpIT09ZSlyZXR1cm4odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9ZSx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0KTtpZih0aGlzLm1haW4uY29uZmlnLmlzQWpheCYmdGhpcy5tYWluLmNvbmZpZy5pc1NlYXJjaGluZylyZXR1cm4odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hpbmdUZXh0LHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKDA9PT1pLmxlbmd0aCl7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gcy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCkscy5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hUZXh0LHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHMpfWZvcih2YXIgbj1mdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe3ZhciB0PWUsbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO24uY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpLGMubWFpbi5jb25maWcuc2VsZWN0QnlHcm91cCYmYy5tYWluLmNvbmZpZy5pc011bHRpcGxlJiZpLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsU2VsZWN0YWJsZSksaS5pbm5lckhUTUw9dC5sYWJlbCxuLmFwcGVuZENoaWxkKGkpO3ZhciBzPXQub3B0aW9ucztpZihzKXtmb3IodmFyIGE9MCxvPXM7YTxvLmxlbmd0aDthKyspe3ZhciBsPW9bYV07bi5hcHBlbmRDaGlsZChjLm9wdGlvbihsKSl9aWYoYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe3ZhciByPWM7aS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTtmb3IodmFyIHQ9MCxpPW4uY2hpbGRyZW47dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07LTEhPT1zLmNsYXNzTmFtZS5pbmRleE9mKHIubWFpbi5jb25maWcub3B0aW9uKSYmcy5jbGljaygpfX0pfX1jLmxpc3QuYXBwZW5kQ2hpbGQobil9ZWxzZSBjLmxpc3QuYXBwZW5kQ2hpbGQoYy5vcHRpb24oZSkpfSxjPXRoaXMsYT0wLG89aTthPG8ubGVuZ3RoO2ErKyluKG9bYV0pfSxuLnByb3RvdHlwZS5vcHRpb249ZnVuY3Rpb24ocil7aWYoci5wbGFjZWhvbGRlcil7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSxlfXZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxyLmNsYXNzJiZyLmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuY2xhc3NMaXN0LmFkZChlKX0pLHIuc3R5bGUmJih0LnN0eWxlLmNzc1RleHQ9ci5zdHlsZSk7dmFyIGM9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKTt0LmRhdGFzZXQuaWQ9ci5pZCx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodCYmdGhpcy5tYWluLnNsaW0mJnIuaW5uZXJIVE1MJiZcIlwiIT09dGhpcy5tYWluLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlLnRyaW0oKT90LmlubmVySFRNTD1hLmhpZ2hsaWdodChyLmlubmVySFRNTCx0aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hIaWdobGlnaHRlcik6ci5pbm5lckhUTUwmJih0LmlubmVySFRNTD1yLmlubmVySFRNTCksdGhpcy5tYWluLmNvbmZpZy5zaG93T3B0aW9uVG9vbHRpcHMmJnQudGV4dENvbnRlbnQmJnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0LnRleHRDb250ZW50KTt2YXIgZD10aGlzO3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9dGhpcy5kYXRhc2V0LmlkO2lmKCEwPT09ci5zZWxlY3RlZCYmZC5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0T3B0aW9uKXt2YXIgaT0hMTtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2UmJmQubWFpbi5jb25maWcuaXNNdWx0aXBsZXx8KGk9ITApLGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIHM9ZC5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxuPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocykpLGE9MDthPG4ubGVuZ3RoO2ErKyluW2FdLmlkPT09dCYmbi5zcGxpY2UoYSwxKTshMSE9PWQubWFpbi5iZWZvcmVPbkNoYW5nZShuKSYmKGk9ITApfWkmJihkLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KGQubWFpbi5kYXRhLnJlbW92ZUZyb21TZWxlY3RlZCh0LFwiaWRcIiksZC5tYWluLnJlbmRlcigpLGQubWFpbi5zZWxlY3Quc2V0VmFsdWUoKSxkLm1haW4uZGF0YS5vbkRhdGFDaGFuZ2UoKSk6ZC5tYWluLnNldChcIlwiKSl9ZWxzZXtpZihyLmRpc2FibGVkfHxyLnNlbGVjdGVkKXJldHVybjtpZihkLm1haW4uY29uZmlnLmxpbWl0JiZBcnJheS5pc0FycmF5KGMpJiZkLm1haW4uY29uZmlnLmxpbWl0PD1jLmxlbmd0aClyZXR1cm47aWYoZC5tYWluLmJlZm9yZU9uQ2hhbmdlKXt2YXIgbz12b2lkIDAsbD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGQubWFpbi5kYXRhLmdldE9iamVjdEZyb21EYXRhKHQpKSk7bC5zZWxlY3RlZD0hMCxkLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KG89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSkpLnB1c2gobCk6bz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGwpKSwhMSE9PWQubWFpbi5iZWZvcmVPbkNoYW5nZShvKSYmZC5tYWluLnNldCh0LFwiaWRcIixkLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QpfWVsc2UgZC5tYWluLnNldCh0LFwiaWRcIixkLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QpfX0pO3ZhciBpPWMmJmEuaXNWYWx1ZUluQXJyYXlPZk9iamVjdHMoYyxcImlkXCIsci5pZCk7cmV0dXJuKHIuZGlzYWJsZWR8fGkpJiYodC5vbmNsaWNrPW51bGwsZC5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0T3B0aW9ufHx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksZC5tYWluLmNvbmZpZy5oaWRlU2VsZWN0ZWRPcHRpb24mJnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpKSxpP3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKTp0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5vcHRpb25TZWxlY3RlZCksdH0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLm1haW49ZS5tYWluLHRoaXMuY29udGFpbmVyPXRoaXMuY29udGFpbmVyRGl2KCksdGhpcy5jb250ZW50PXRoaXMuY29udGVudERpdigpLHRoaXMuc2VhcmNoPXRoaXMuc2VhcmNoRGl2KCksdGhpcy5saXN0PXRoaXMubGlzdERpdigpLHRoaXMub3B0aW9ucygpLHRoaXMuc2luZ2xlU2VsZWN0ZWQ9bnVsbCx0aGlzLm11bHRpU2VsZWN0ZWQ9bnVsbCx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KHRoaXMubXVsdGlTZWxlY3RlZD10aGlzLm11bHRpU2VsZWN0ZWREaXYoKSx0aGlzLm11bHRpU2VsZWN0ZWQmJnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlTZWxlY3RlZC5jb250YWluZXIpKToodGhpcy5zaW5nbGVTZWxlY3RlZD10aGlzLnNpbmdsZVNlbGVjdGVkRGl2KCksdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIpKSx0aGlzLm1haW4uY29uZmlnLmFkZFRvQm9keT8odGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpKTp0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpLHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaC5jb250YWluZXIpLHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmxpc3QpfXQuU2xpbT1zfV0sbi5jPXMsbi5kPWZ1bmN0aW9uKGUsdCxpKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6aX0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgcyBpbiB0KW4uZChpLHMsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxzKSk7cmV0dXJuIGl9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0yKSkuZGVmYXVsdDtmdW5jdGlvbiBuKGUpe2lmKHNbZV0pcmV0dXJuIHNbZV0uZXhwb3J0czt2YXIgdD1zW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gaVtlXS5jYWxsKHQuZXhwb3J0cyx0LHQuZXhwb3J0cyxuKSx0Lmw9ITAsdC5leHBvcnRzfXZhciBpLHN9KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImV4cG9ydCBjbGFzcyBCcm93c2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyB2ZXJzaW9uOiBudW1iZXI7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAobmF2aWdhdG9yLmFwcFZlcnNpb24uc3BsaXQoJyAnKSBhcyBhbnkpLmZpbmQoKGU6IHN0cmluZykgPT4gZS5pbmRleE9mKCdDaHJvbWUnKSAhPSAtMSkuc3BsaXQoJy8nKVsxXS5zcGxpdCgnLicpO1xuXG4gICAgICAgIGxldCBhY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2ZXJzaW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvciArPSB2ZXJzaW9uW2ldICogTWF0aC5wb3coMTAsICh2ZXJzaW9uLmxlbmd0aCAtIGkgLSAxKSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYWNjdW11bGF0b3I7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gICAgfVxufSIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSBcIi4vTGFuZ3VhZ2VcIjtcblxuLyoqXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcbiAqXG4gKiBAZXhwb3J0IHRoZSBDb21wb25lbnQgdHlwZS5cbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIENvbXBvbmVudCdzIG5hbWUuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XG4gICAgdGFnOiBzdHJpbmcgPSBcImNvbXBvbmVudFwiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIENvbXBvbmVudCdzIHVuaXF1ZSBJRCwgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgb24gbG9hZC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXG4gICAgICovXG4gICAgYWN0aXZlOiBib29sZWFuO1xuXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcblxuICAgIHJlbmRlcmVyOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IHNob3VsZCBzdGFydCBsb2FkaW5nLlxuICAgICAqL1xuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmFtZSA9IExhbmd1YWdlLmdldCh0aGlzLnRhZyArICcubmFtZScpO1xuICAgICAgICB0aGlzLmlkID0gJ3N0YWRpYXBsdXNfJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmVuZGVyZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saHNFNGU+Yy13aXonKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IChBcnJheSBhcyBhbnkpLmZyb20ocmVuZGVyZXJzKS5maW5kKChyZW5kZXJlcjogSFRNTEVsZW1lbnQpID0+IHJlbmRlcmVyLnN0eWxlLm9wYWNpdHkgIT09ICcwJyk7XG4gICAgfVxuXG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgQ29tcG9uZW50IGhhcyBhbiBlbGVtZW50IGluIHRoZSBET01cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5yZW5kZXJlci5zdHlsZS5vcGFjaXR5ID09PSAnMCcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgdW5sb2FkaW5nLlxuICAgICAqL1xuICAgIHVubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdGFydC5cbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0b3AuXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vTGFuZ3VhZ2UnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBjbGFzcyByZXNwb25zaWJsZSBmb3IgbG9hZGluZyBbW0NvbXBvbmVudHxDb21wb25lbnRzXV0gYW5kIGRlbGl2ZXJpbmcgZXZlbnRzLlxuICpcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudExvYWRlciB0eXBlLlxuICogQGNsYXNzIENvbXBvbmVudExvYWRlclxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcbiAgICB0aW1lcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50OkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIGEgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoY29tcG9uZW50OkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgY29tcG9uZW50IGxvYWRlci5cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5nZXQoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSByZXN1bHQuY29tcG9uZW50cztcbiAgICAgICAgICAgIGlmKHN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlW2NvbXBvbmVudC50YWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVtjb21wb25lbnQudGFnXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVuYWJsZWQgPSBzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkICYmICFjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQubG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5zZXQoc3RvcmFnZSk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgY29tcG9uZW50IGxvYWRlci5cbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC51bmxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQub25VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9XG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgbGFuZ19lblVTX2RhdGEgZnJvbSAnLi9sYW5nL2VuLVVTLmpzb24nO1xuaW1wb3J0IGxhbmdfc3ZTRV9kYXRhIGZyb20gJy4vbGFuZy9zdi1TRS5qc29uJztcbmltcG9ydCBsYW5nX2ZyRlJfZGF0YSBmcm9tICcuL2xhbmcvZnItRlIuanNvbic7XG5pbXBvcnQgbGFuZ19pdElUX2RhdGEgZnJvbSAnLi9sYW5nL2l0LUlULmpzb24nO1xuaW1wb3J0IGxhbmdfZXNFU19kYXRhIGZyb20gJy4vbGFuZy9lcy1FUy5qc29uJztcbmltcG9ydCBsYW5nX2RlREVfZGF0YSBmcm9tICcuL2xhbmcvZGUtREUuanNvbic7XG5pbXBvcnQgbGFuZ191a1VBX2RhdGEgZnJvbSAnLi9sYW5nL3VrLVVBLmpzb24nO1xuaW1wb3J0IGxhbmdfZW5TVEVFRl9kYXRhIGZyb20gJy4vbGFuZy9lbi1TVEVFRi5qc29uJztcbmltcG9ydCBsYW5nX2V1RVNfZGF0YSBmcm9tICcuL2xhbmcvZXUtRVMuanNvbic7XG5pbXBvcnQgbGFuZ19nbEVTX2RhdGEgZnJvbSAnLi9sYW5nL2dsLUVTLmpzb24nO1xuaW1wb3J0IGxhbmdfcnVSVV9kYXRhIGZyb20gJy4vbGFuZy9ydS1SVS5qc29uJztcbmltcG9ydCBsYW5nX25sQkVfZGF0YSBmcm9tICcuL2xhbmcvbmwtQkUuanNvbic7XG5pbXBvcnQgbGFuZ19wdEJSX2RhdGEgZnJvbSAnLi9sYW5nL3B0LUJSLmpzb24nO1xuXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcbiAgICB0YWc6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBMYW5ndWFnZS5sYW5ndWFnZXMucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQobmFtZTogc3RyaW5nLCB2YXJzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBrZXlzID0gbmFtZS5zcGxpdCgvXFwuL2cpO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5kYXRhO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWxba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX3ZhciBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCd7eycgKyBfdmFyICsgJ319Jykuam9pbih2YXJzW192YXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWwgYXMgYW55O1xuICAgIH1cblxuICAgIHNldERlZmF1bHQoKSB7XG4gICAgICAgIExhbmd1YWdlLmRlZmF1bHQgPSB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBsYW5ndWFnZXM6IExhbmd1YWdlW10gPSBbXTtcbiAgICBzdGF0aWMgZGVmYXVsdDogTGFuZ3VhZ2U7XG4gICAgc3RhdGljIGN1cnJlbnQ6IExhbmd1YWdlO1xuICAgIHN0YXRpYyBsb2FkKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBmaXJzdCBsYW5ndWFnZSB0aGF0IGlzbid0IGVxdWFsIHRvIHRoZSBkZWZhdWx0XG4gICAgICAgIFN5bmNTdG9yYWdlLkxBTkdVQUdFLmdldCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBsYW5ndWFnZSA9IHJlc3VsdFtTeW5jU3RvcmFnZS5MQU5HVUFHRS50YWddO1xuICAgICAgICAgICAgaWYgKGxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbGFuZ3VhZ2UgPT09ICdhdXRvbWF0aWMnKSB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmF1dG9tYXRpYygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2dnZXIuaW5mbygnVXNpbmcgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbiAnICsgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZy50YWcgPT09IGxhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldChsYW5ndWFnZTogTGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGF1dG9tYXRpYygpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyBhcyBhbnkpLmZpbmQoXG4gICAgICAgICAgICAobDogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgIGwubGVuZ3RoID49IDUgJiZcbiAgICAgICAgICAgICAgICAodGhpcy5kZWZhdWx0ID09PSB1bmRlZmluZWQgfHwgbCAhPT0gdGhpcy5kZWZhdWx0LnRhZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFuZ19kZURFID0gbmV3IExhbmd1YWdlKCdEZXV0c2NoZSAoREUpJywgJ2RlLURFJywgbGFuZ19kZURFX2RhdGEpO1xuICAgICAgICBsYW5nX2RlREUucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX2VzRVMgPSBuZXcgTGFuZ3VhZ2UoJ0VzcGHDsW9sIChFUyknLCAnZXMtRVMnLCBsYW5nX2VzRVNfZGF0YSk7XG4gICAgICAgIGxhbmdfZXNFUy5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfZW5VUyA9IG5ldyBMYW5ndWFnZSgnRW5nbGlzaCAoVVMpJywgJ2VuLVVTJywgbGFuZ19lblVTX2RhdGEpO1xuICAgICAgICBsYW5nX2VuVVMucmVnaXN0ZXIoKTtcbiAgICAgICAgbGFuZ19lblVTLnNldERlZmF1bHQoKTtcblxuICAgICAgICAvLyBjb25zdCBsYW5nX2VuU1RFRUYgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFN0ZWVmKScsICdlbi1TVEVFRicsIGxhbmdfZW5TVEVFRl9kYXRhKTtcbiAgICAgICAgLy8gbGFuZ19lblNURUVGLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19mckZSID0gbmV3IExhbmd1YWdlKCdGcmFuw6dhaXMgKEZSKScsICdmci1GUicsIGxhbmdfZnJGUl9kYXRhKTtcbiAgICAgICAgbGFuZ19mckZSLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19pdElUID0gbmV3IExhbmd1YWdlKCdJdGFsaWFubyAoSVQpJywgJ2l0LUlUJywgbGFuZ19pdElUX2RhdGEpO1xuICAgICAgICBsYW5nX2l0SVQucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX3N2U0UgPSBuZXcgTGFuZ3VhZ2UoJ1N2ZW5za2EgKFNFKScsICdzdi1TRScsIGxhbmdfc3ZTRV9kYXRhKTtcbiAgICAgICAgbGFuZ19zdlNFLnJlZ2lzdGVyKCk7XG4gICAgICBcbiAgICAgICAgY29uc3QgbGFuZ191a1VBID0gbmV3IExhbmd1YWdlKCfQo9C60YDQsNGX0L3RgdGM0LrQsCAoVUEpJywgJ3VrLVVBJywgbGFuZ191a1VBX2RhdGEpO1xuICAgICAgICBsYW5nX3VrVUEucmVnaXN0ZXIoKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBsYW5nX2V1RVMgPSBuZXcgTGFuZ3VhZ2UoJ0V1c2thcmEgKEVVKScsICdldS1FUycsIGxhbmdfZXVFU19kYXRhKTtcbiAgICAgICAgbGFuZ19ldUVTLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19nbEVTID0gbmV3IExhbmd1YWdlKCdHYWxlZ28gKEdMKScsICdnbC1FUycsIGxhbmdfZ2xFU19kYXRhKTtcbiAgICAgICAgbGFuZ19nbEVTLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19ydVJVID0gbmV3IExhbmd1YWdlKCfRgNGD0YHRgdC60LjQuSAoUlUpJywgJ3J1LVJVJywgbGFuZ19ydVJVX2RhdGEpO1xuICAgICAgICBsYW5nX3J1UlUucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX25sQkUgPSBuZXcgTGFuZ3VhZ2UoJ05lZGVybGFuZHMgKEJFKScsICdubC1CRScsIGxhbmdfbmxCRV9kYXRhKTtcbiAgICAgICAgbGFuZ19ubEJFLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19wdEJSID0gbmV3IExhbmd1YWdlKCdQb3J0dWd1w6pzIChCUiknLCAncHQtQlInLCBsYW5nX3B0QlJfZGF0YSk7XG4gICAgICAgIGxhbmdfcHRCUi5yZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nLCB2YXJzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmN1cnJlbnQuZ2V0KG5hbWUsIHZhcnMpO1xuXG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxufVxuIiwiY29uc3QgcHJlZml4OnN0cmluZyA9ICdbU3RhZGlhK10nO1xuXG5jbGFzcyBMb2dnZXIge1xuICAgIGluZm8gPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ODICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGJsYWNrJyk7XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ifICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IG9yYW5nZScpO1xuICAgIH07XG5cbiAgICBlcnJvciA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY+KdjCAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiA3MDAnKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50ID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+nqSAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBkYXJrZ3JlZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEdWJpb3VzbHkgY3JlYXRlZCBieSBBZHJpYW4gQ29vbmV5XG4gICAgICogQGF1dGhvciBodHRwOi8vYWRyaWFuY29vbmV5LmdpdGh1Yi5pb1xuICAgICAqL1xuICAgIGltYWdlID0gZnVuY3Rpb24odXJsOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdldEJveCA9IGZ1bmN0aW9uKHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdHJpbmc6IFwiK1wiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMXB4OyBwYWRkaW5nOiBcIiArIE1hdGguZmxvb3IoaGVpZ2h0LzIpICsgXCJweCBcIiArIE1hdGguZmxvb3Iod2lkdGgvMikgKyBcInB4OyBsaW5lLWhlaWdodDogMDtcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpbSA9IGdldEJveCh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZGltLnN0cmluZywgZGltLnN0eWxlICsgXCJiYWNrZ3JvdW5kOiB1cmwoXCIgKyB1cmwgKyBcIik7IGJhY2tncm91bmQtc2l6ZTogXCIgKyAod2lkdGgpICsgXCJweCBcIiArIChoZWlnaHQpICsgXCJweDsgY29sb3I6IHRyYW5zcGFyZW50O1wiKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7IiwiaW1wb3J0IGRvd25sb2FkZXIgZnJvbSAnLi91dGlsL2Rvd25sb2FkZXInO1xuXG5leHBvcnQgY2xhc3MgU2hvcnRjdXQge1xuICAgIHVybDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGRvd25sb2FkZXIuZG93bmxvYWQoYDxodG1sPjxib2R5PjxzY3JpcHQ+d2luZG93LmxvY2F0aW9uPVwiJHt0aGlzLnVybH1cIjwvc2NyaXB0PjwvYm9keT48L2h0bWw+YCwgdGhpcy5uYW1lICsgXCIuaHRtXCIsIFwidGV4dC9odG1sXCIpO1xuICAgIH1cbn0iLCJjb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gICAgc3RhdGljIENPREVDID0gbmV3IExvY2FsU3RvcmFnZSgnQ29kZWMnLCAnY29kZWMnKTtcbiAgICBzdGF0aWMgUkVTT0xVVElPTiA9IG5ldyBMb2NhbFN0b3JhZ2UoJ1Jlc29sdXRpb24nLCAncmVzb2x1dGlvbicpO1xuICAgIHN0YXRpYyBNT05JVE9SX1NUQVRTID0gbmV3IExvY2FsU3RvcmFnZSgnTW9uaXRvciBTdGF0cycsICdtb25pdG9yLXN0YXRzJyk7XG4gICAgc3RhdGljIENBQ0hFX1ZFUlNJT04gPSBuZXcgTG9jYWxTdG9yYWdlKCdDYWNoZSBWZXJzaW9uJywgJ2NhY2hlLXZlcnNpb24nKTtcblxuICAgIG5hbWU6IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgIH1cblxuICAgIGdldChjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsgdGhpcy50YWcgXSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogYW55LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBMb2NhbFN0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlcy5tYXAoZSA9PiBlLnRhZyksIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0KHN0b3JhZ2VzOiB7W2tleTogc3RyaW5nXTogYW55fSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoc3RvcmFnZXMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3luY1N0b3JhZ2Uge1xuICAgIHN0YXRpYyBMSUJSQVJZX0dBTUVTID0gbmV3IFN5bmNTdG9yYWdlKCdMaWJyYXJ5IEdhbWVzJywgJ2dhbWVzJyk7XG4gICAgc3RhdGljIExJQlJBUllfU09SVF9PUkRFUiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBPcmRlcicsICdzb3J0LW9yZGVyJyk7XG4gICAgc3RhdGljIExJQlJBUllfU09SVF9ESVJFQ1RJT04gPSBuZXcgU3luY1N0b3JhZ2UoJ1NvcnQgRGlyZWN0aW9uJywgJ3NvcnQtZGlyZWN0aW9uJyk7XG4gICAgc3RhdGljIExBTkdVQUdFID0gbmV3IFN5bmNTdG9yYWdlKCdMYW5ndWFnZScsICdsYW5ndWFnZScpO1xuICAgIHN0YXRpYyBDT01QT05FTlRTID0gbmV3IFN5bmNTdG9yYWdlKCdDb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcblxuICAgIG5hbWU6IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgIH1cblxuICAgIGdldChjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWyB0aGlzLnRhZyBdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlOiBhbnksIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy50YWddOiB2YWx1ZSB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChzdG9yYWdlczogU3luY1N0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHN0b3JhZ2VzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBjbGVhcigpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNYW5hZ2VyIHtcbiAgICBhcHBkYXRhOiBhbnk7XG4gICAgY29uc3RydWN0b3IoYXBwZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuYXBwZGF0YSA9IGFwcGRhdGE7XG4gICAgfVxuICAgIFxuICAgIGNoZWNrQ2FjaGVWZXJzaW9uKGNhbGxiYWNrOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLkNBQ0hFX1ZFUlNJT04uZ2V0KHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZVZlcnNpb24gPSByZXN1bHRbTG9jYWxTdG9yYWdlLkNBQ0hFX1ZFUlNJT04udGFnXTtcblxuICAgICAgICAgICAgaWYoY2FjaGVWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgdGhpcy5hcHBkYXRhWydjYWNoZS12ZXJzaW9uJ10gPiBjYWNoZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGRhdGFbJ2NsZWFyLWtleXMnXS5sb2NhbC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KHtba2V5XTogbnVsbH0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFwcGRhdGFbJ2NsZWFyLWtleXMnXS5zeW5jLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLnNldCh7W2tleV06IG51bGx9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2UuQ0FDSEVfVkVSU0lPTi5zZXQodGhpcy5hcHBkYXRhWydjYWNoZS12ZXJzaW9uJ10pO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCJjbGFzcyBVdGlsIHtcbiAgICAvKipcbiAgICAgKiBTdGFkaWEncyBtZW51IGJhciBlbGVtZW50LCB1c2VkIHRvIGtub3cgd2hlbiB0aGUgcGxheWVyIGhhcyBvcGVuZWQgdGhlIG1lbnUuXG4gICAgICovXG4gICAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5tZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5YMWFzdicpO1xuICAgIH1cblxuICAgIGlzTWVudU9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVFbGVtZW50LnN0eWxlLm9wYWNpdHkgIT09ICcwJztcbiAgICB9XG5cbiAgICBpc0luR2FtZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdwbGF5ZXInKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaXNJbkhvbWUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignaG9tZScpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpc0luU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignc3RvcmUnKSAhPT0gLTEgJiYgIXRoaXMuaXNJblN0b3JlRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgaXNJblN0b3JlRGV0YWlsKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlL2RldGFpbHMnKSAhPT0gLTE7XG4gICAgfVxuICAgIFxuICAgIGRlc2FuZGJveChqYXZhc2NyaXB0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBqYXZhc2NyaXB0O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbCgpOyIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWJEYXRhYmFzZSB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3Rpb246IGFueTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICBjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246YW55KSA9PiB7fSkge1xuICAgICAgICBpZih0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogQWxyZWFkeSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGlvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5jb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yIHdoZW4gY29ubmVjdGluZyB0byBkYXRhYmFzZTonLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcbiAgICB9XG5cbiAgICBnZXRDb25uZWN0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogTm90IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNvbm5lY3QoY2FsbGJhY2s/OiAoY29ubmVjdGlvbjpvYmplY3QpID0+IHt9KSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoY2FsbGJhY2spO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcblxuLyoqXG4gKiBBIGJ1dHRvbiBhbGxvd2luZyB1c2VycyB0byBwbGF5IFN0YWRpYSBpbiB3aW5kb3dlZCBtb2RlLlxuICpcbiAqIEBleHBvcnQgdGhlIEFsbG93V2luZG93ZWRNb2RlIHR5cGUuXG4gKiBAY2xhc3MgQWxsb3dXaW5kb3dlZE1vZGVcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbGxvd1dpbmRvd2VkTW9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnYWxsb3ctd2luZG93ZWQtbW9kZSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gdG9nZ2xlIHdpbmRvd2VkIG1vZGUuXG4gICAgICovXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgd2luZG93ZWQgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICAgICAqL1xuICAgIHdpbmRvd2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBNYWluIGV2ZW50LCBzdG9wcyBidWlsdC1pbiBmdWxsc2NyZWVuIGV2ZW50cyBmcm9tIHJlYWNoaW5nIFN0YWRpYSB3aGVuZXZlciB3aW5kb3dlZCBtb2RlIGlzIGVuYWJsZWQuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2luZG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnRlcnMgd2luZG93ZWQgbW9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIGVudGVyV2luZG93ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2luZG93ZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4aXRzIHdpbmRvd2VkIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICBleGl0V2luZG93ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2luZG93ZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJyksXG4gICAgICAgICAgICB0aGlzLmlkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leGl0V2luZG93ZWQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYnV0dG9uIGxhYmVscyBhbmQgaWNvbnMgdG8gZml0IGN1cnJlbnQgbW9kZS5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICB1cGRhdGVCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcbiAgICAgICAgY29uc3QgaWNvbl9leGl0ID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFxuICAgICAgICAgICAgJ2ltYWdlcy9pY29ucy93aW5kb3dlZF9leGl0LnN2ZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy53aW5kb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uX2V4aXQpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC5mdWxsc2NyZWVuJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRJY29uKGljb24pO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC53aW5kb3dlZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciBldmVudHMgaGF2ZSBiZWVuIGFkZGVkIGFscmVhZHkgb3Igbm90LlxuICAgIGV2ZW50c0FkZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgY29tcG9uZW50IGVsZW1lbnRzIGFuZCB2YXJpYWJsZXNcbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gSWYgbWVudSBpcyBvcGVuIGFuZCBhIGdhbWUgaXMgcGxheWluZy5cbiAgICAgICAgaWYgKFV0aWwuaXNNZW51T3BlbigpICYmIFV0aWwuaXNJbkdhbWUoKSkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgY3VycmVudCByZW5kZXJlclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG5ldyByZW5kZXJlcnNcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV2ZW50cyBhcmUgYWxyZWFkeSBhZGRlZCwgZG9uJ3QgYWRkIHRoZW0gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50c0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5vblByZXNzZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLndpbmRvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhpdFdpbmRvd2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnRlcldpbmRvd2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzQWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0ICcuL3N0eWxlcy9DbG9jay5zY3NzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuXG4vKipcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXG4gKlxuICogQGV4cG9ydCB0aGUgQ2xvY2sgdHlwZS5cbiAqIEBjbGFzcyBDbG9ja1xuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdjbG9jayc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2xvY2sgZWxlbWVudC5cbiAgICAgKi9cbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2Nsb2NrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsnbmFtZSc6IHRoaXMubmFtZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7J25hbWUnOiB0aGlzLm5hbWV9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjbG9jayB3aGVuIGl0J3MgdmlzaWJsZVxuICAgICAgICBpZihVdGlsLmlzTWVudU9wZW4oKSkge1xuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmJyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGltZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3MnO1xuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL1VJVGFiJztcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlJztcbmltcG9ydCB7IFJlc29sdXRpb24gfSBmcm9tICcuL0ZvcmNlUmVzb2x1dGlvbic7XG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnLi4vQnJvd3Nlcic7XG5cbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XG5cbi8qKlxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgY29kZWMuXG4gKlxuICogQGV4cG9ydCB0aGUgRm9yY2VDb2RlYyB0eXBlLlxuICogQGNsYXNzIEZvcmNlQ29kZWNcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JjZUNvZGVjIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdmb3JjZS1jb2RlYyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBjb2RlYy5cbiAgICAgKi9cbiAgICBjb2RlYzogbnVtYmVyID0gQ29kZWMuQVVUT01BVElDO1xuXG4gICAgLyoqIFxuICAgICAqIFRoZSBjb2RlYyBTZWxlY3QgYm94LlxuICAgICAqL1xuICAgIHNlbGVjdDogU2VsZWN0O1xuXG4gICAgLyoqIFxuICAgICAqIFRoZSBTdGFkaWErIFVJIFRhYi5cbiAgICAgKi9cbiAgICB0YWI6IFVJVGFiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdsb2JhbCBzbmFja2Jhci5cbiAgICAgKi9cbiAgICBzbmFja2JhcjogU25hY2tiYXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWI6IFVJVGFiLCBzbmFja2JhcjogU25hY2tiYXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5DT0RFQy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvZGVjID0gcmVzdWx0LmNvZGVjO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY2hyb21lIHN0b3JhZ2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLkNPREVDLnNldCh0aGlzLmNvZGVjLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY29kZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuQVVUT01BVElDfVwiPiR7TGFuZ3VhZ2UuZ2V0KCdhdXRvbWF0aWMnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuVlA5fVwiPiR7TGFuZ3VhZ2UuZ2V0KCd2cDknKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuSDI2NH1cIj4ke0xhbmd1YWdlLmdldCgnaDI2NCcpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsXCI+JHtMYW5ndWFnZS5nZXQoJ2FwcGx5Jyl9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQnIGlkPScke3RoaXMuaWR9LTRrLXRvb2x0aXAnIHN0eWxlPSdkaXNwbGF5OiBub25lJz4ke0xhbmd1YWdlLmdldCgnZm9yY2UtY29kZWMuNGstdG9vbHRpcCcpfTwvcD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHRoaXMuaWQgKyAnLXJvdycsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZTogKHJvdzpVSVJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCB7IHBsYWNlaG9sZGVyOiBDb2RlYy5BVVRPTUFUSUMgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSByb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZGlhcGx1c19idXR0b24tc21hbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RvcmFnZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5yZWxvYWQtdG8tdXBkYXRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFN0b3JhZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS5SRVNPTFVUSU9OLmdldChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5yZXNvbHV0aW9uID09PSBSZXNvbHV0aW9uLlVIRF80SyB8fCByZXN1bHQucmVzb2x1dGlvbiA9PT0gUmVzb2x1dGlvbi5XUUhEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gQ29kZWMuVlA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGlzYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctNGstdG9vbHRpcCcpIGFzIEhUTUxFbGVtZW50OyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmNlQ29kZWMuc2V0Q29kZWMoc2VsZi5jb2RlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIG9uUmVsb2FkOiAocm93OlVJUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IENvZGVjLkFVVE9NQVRJQyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoXCJjb21wb25lbnQuZW5hYmxlZFwiLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlZCBDb2RlY1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlY1xuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgc3RhdGljIHNldENvZGVjKGNvZGVjOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IHZwOWRhdGEgPSAne1widnA5XCI6XCJFeHRlcm5hbERlY29kZXJcIn0nOyAvLyBCcm93c2VyLmdldFZlcnNpb24oKSA+PSA4NDQxNDQwMiA/ICd7XCJ2cDlcIjogXCJsaWJ2cHhcIn0nIDogJ3tcInZwOVwiOlwiRXh0ZXJuYWxEZWNvZGVyXCJ9JztcbiAgICAgICAgY29uc3QgaDI2NGRhdGEgPSAne1wiaDI2NFwiOlwiRXh0ZXJuYWxEZWNvZGVyXCIsIFwidnA5XCI6XCJsaWJ2cHhcIn0nOyAvLyBCcm93c2VyLmdldFZlcnNpb24oKSA+PSA4NDQxNDQwMiA/ICd7XCJ2cDlcIjpcImxpYnZweFwiLFwiaDI2NFwiOlwiRkZtcGVnXCJ9JyA6ICd7XCJoMjY0XCI6XCJFeHRlcm5hbERlY29kZXJcIiwgXCJ2cDlcIjpcImxpYnZweFwifSc7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlYykge1xuICAgICAgICBjYXNlIENvZGVjLlZQOTpcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIiwgJyR7dnA5ZGF0YX0nKTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIENvZGVjLkgyNjQ6XG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICcke2gyNjRkYXRhfScpO1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgQ29kZWMuQVVUT01BVElDOlxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgY29kZWNzLCByZXByZXNlbnRlZCBhcyBudW1iZXJzLlxuICpcbiAqIEBleHBvcnQgdGhlIENvZGVjIHR5cGVcbiAqIEBjbGFzcyBDb2RlY1xuICovXG5leHBvcnQgY2xhc3MgQ29kZWMge1xuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpYyBjb2RlYywgbGV0IFN0YWRpYSBkZWNpZGUgb24gaXQncyBvd24uXG4gICAgICovXG4gICAgc3RhdGljIEFVVE9NQVRJQyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBWUDkgY29kZWMsIHVzdWFsbHkgd29ya3MgYmV0dGVyIHRoYW4gSDI2NCBidXQgYXQgdGhlIGNvc3Qgb2YgbG93ZXIgcXVhbGl0eS5cbiAgICAgKi9cbiAgICBzdGF0aWMgVlA5ID0gMTtcblxuICAgIC8qKlxuICAgICAqIEgyNjQgY29kZWMsIGhpZ2ggcXVhbGl0eSBhbmQgTWFjLU9TIGNvbXBhdGlibGUgY29kZWMgYnV0IHdpdGggbGF0ZW5jeSBpc3N1ZXMuIFxuICAgICAqL1xuICAgIHN0YXRpYyBIMjY0ID0gMjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MnO1xuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL1VJVGFiJztcbmltcG9ydCB7IFVJUm93LCBVSVJvd09wdGlvbnMgfSBmcm9tICcuLi91aS9VSVJvdyc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuLi91aS9TbmFja2Jhcic7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xuXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xuXG4vKipcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIHJlc29sdXRpb24uXG4gKlxuICogQGV4cG9ydCB0aGUgRm9yY2VSZXNvbHV0aW9uIHR5cGUuXG4gKiBAY2xhc3MgRm9yY2VSZXNvbHV0aW9uXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgRm9yY2VSZXNvbHV0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdmb3JjZS1yZXNvbHV0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJlc29sdXRpb24uXG4gICAgICovXG4gICAgcmVzb2x1dGlvbjogbnVtYmVyID0gUmVzb2x1dGlvbi5BVVRPTUFUSUM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb2x1dGlvbiBTZWxlY3QgYm94LlxuICAgICAqL1xuICAgIHNlbGVjdDogU2VsZWN0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN0YWRpYSsgVUkgVGFiXG4gICAgICovXG4gICAgdGFiOiBVSVRhYjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBnbG9iYWwgU25hY2tiYXJcbiAgICAgKi9cbiAgICBzbmFja2JhcjogU25hY2tiYXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWI6IFVJVGFiLCBzbmFja2JhcjogU25hY2tiYXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24odGhpcy5yZXNvbHV0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjaHJvbWUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxuICAgICAqL1xuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5nZXQoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSByZXN1bHQucmVzb2x1dGlvbjtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY2hyb21lIHN0b3JhZ2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5zZXQodGhpcy5yZXNvbHV0aW9uLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVzb2x1dGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uVUhEXzRLfVwiPiR7TGFuZ3VhZ2UuZ2V0KCc0aycpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLldRSER9XCI+JHtMYW5ndWFnZS5nZXQoJzE0NDBwJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uRkhEfVwiPiR7TGFuZ3VhZ2UuZ2V0KCcxMDgwcCcpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkhEfVwiPiR7TGFuZ3VhZ2UuZ2V0KCc3MjBwJyl9ICgke0xhbmd1YWdlLmdldCgnZXhwZXJpbWVudGFsJyl9KTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsXCI+JHtMYW5ndWFnZS5nZXQoJ2FwcGx5Jyl9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIj4ke0xhbmd1YWdlLmdldCgnZm9yY2UtcmVzb2x1dGlvbi5ub3RlJyl9PC9wPlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdGhpcy5pZCArICctcm93JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IFJlc29sdXRpb24uQVVUT01BVElDIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSByb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZGlhcGx1c19idXR0b24tc21hbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc29sdXRpb24gPSBwYXJzZUludChzZWxmLnNlbGVjdC5nZXQoKVswXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIucmVsb2FkLXRvLXVwZGF0ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFN0b3JhZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogUmVzb2x1dGlvbi5BVVRPTUFUSUMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHVzZXIgW1tSZXNvbHV0aW9uXV1cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiB0aGUgdXNlciBSZXNvbHV0aW9uXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRSZXNvbHV0aW9uKHJlc29sdXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICBsZXQgaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkdGg7XG4gICAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLlVIRF80SzpcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDM4NDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjE2MDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLldRSEQ6XG4gICAgICAgICAgICAgICAgd2lkdGggPSAyNTYwO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IDE0NDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5GSEQ6XG4gICAgICAgICAgICAgICAgd2lkdGggPSAxOTIwO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IDEwODA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5IRDpcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDEyODA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gNzIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uQVVUT01BVElDOlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbFdpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ2F2YWlsSGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICd3aWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdoZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XG4gICAgICAgIGA7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgcmVzb2x1dGlvbnMsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXG4gKlxuICogQGV4cG9ydCB0aGUgUmVzb2x1dGlvbiB0eXBlXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x1dGlvbiB7XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljLCBsZXQgU3RhZGlhIGhhbmRsZSByZXNvbHV0aW9ucy5cbiAgICAgKi9cbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcblxuICAgIC8qKlxuICAgICAqIDRLLCBvciAzODQweDIxNjBcbiAgICAgKi9cbiAgICBzdGF0aWMgVUhEXzRLID0gMTtcblxuICAgIC8qKlxuICAgICAqIFdRSEQsIG9yIDI1NjB4MTQ0MFxuICAgICAqL1xuICAgIHN0YXRpYyBXUUhEID0gMjtcblxuICAgIC8qKlxuICAgICAqIEZ1bGwgSEQsIG9yIDE5MjB4MTA4MFxuICAgICAqL1xuICAgIHN0YXRpYyBGSEQgPSAzO1xuXG4gICAgLyoqXG4gICAgICogSEQsIG9yIDEyODB4NzIwXG4gICAgICovXG4gICAgc3RhdGljIEhEID0gNDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzJztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94U2hhcGUgfSBmcm9tICcuLi91aS9DaGVja2JveCc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XG5pbXBvcnQgeyBTaG9ydGN1dCB9IGZyb20gJy4uL1Nob3J0Y3V0JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vdWkvTW9kYWwnO1xuaW1wb3J0ICcuLi91aS9zdHlsZXMvQnV0dG9uLnNjc3MnO1xuXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XG5cbi8qKlxuICogQSBmaWx0ZXJpbmcgc3lzdGVtIGFsbG93aW5nIGhpZGluZyBhbmQgc2hvd2luZyBzcGVjaWZpYyBnYW1lcyBpbiB5b3VyIGxpYnJhcnkgYXMgd2VsbCBhcyBvcmRlcmluZyB0aGVtIGJ5IG5hbWUuXG4gKlxuICogQGV4cG9ydCB0aGUgTGlicmFyeUZpbHRlciB0eXBlXG4gKiBAY2xhc3MgTGlicmFyeUZpbHRlclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ2xpYnJhcnktZmlsdGVyJztcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgZ2FtZXMgYW5kIGdhbWUgZGF0YSBpbXBvcnRlZCBmcm9tIHRoZSBET01cbiAgICAgKi9cbiAgICBnYW1lczogYW55ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcbiAgICAgKi9cbiAgICBzbmFja2JhcjogU25hY2tiYXI7XG5cbiAgICAvKipcbiAgICAgKiBGaWx0ZXIgYmFyIGFsbG93aW5nIGZvciBjb250cm9scyBvZiB0aGUgbGlicmFyeSBmaWx0ZXJcbiAgICAgKi9cbiAgICBmaWx0ZXJCYXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGJveCB1c2VkIHRvIG9yZGVyIHRoZSBnYW1lc1xuICAgICAqL1xuICAgIHNlbGVjdDogU2VsZWN0O1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBmaWx0ZXJpbmcgb3JkZXJcbiAgICAgKi9cbiAgICBvcmRlcjogRmlsdGVyT3JkZXI7XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYWxsIGdhbWVzIGJlIHNob3duIHJlZ2FyZGxlc3MgaWYgdGhleXJlIGhpZGRlbiBvciBub3Q/XG4gICAgICovXG4gICAgc2hvd0FsbDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENoZWNrYm94IHNob3dpbmcgaGlkZGVuIGdhbWVzLlxuICAgICAqL1xuICAgIGNoZWNrYm94OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIERpcmVjdGlvbiBvZiB3aGljaCBnYW1lcyB3aWxsIGJlIG9yZGVyZWQuXG4gICAgICovXG4gICAgZGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBhbGwgZ2FtZXMgaW4geW91ciBsaWJyYXJ5LlxuICAgICAqL1xuICAgIGdhbWVUaWxlczogTm9kZUxpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBTdGFkaWFHYW1lREIgRGF0YWJhc2UuXG4gICAgICovXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxuICAgICAqL1xuICAgIHV1aWRNYXA6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogVUkgTW9kYWxcbiAgICAgKi9cbiAgICBtb2RhbDogTW9kYWw7XG5cbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UsIG1vZGFsOiBNb2RhbCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEltcG9ydCBkYXRhYmFzZSAmIHV1aWRNYXAgZnJvbSBpbmRleC5qc1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gICAgICAgIHRoaXMudXVpZE1hcCA9IHV1aWRNYXA7XG5cbiAgICAgICAgLy8gSW1wb3J0IHNuYWNrYmFyIGZyb20gaW5kZXguanNcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuXG4gICAgICAgIHRoaXMubW9kYWwgPSBtb2RhbDtcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGZpbHRlciBiYXIgZWxlbWVudFxuICAgICAgICB0aGlzLmZpbHRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbHRlckJhci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgYXJvdW5kIGV2ZXJ5IGdhbWUgYW5kIGluaXRpYWxpemVzIHRoZSBlbGVtZW50cyBuZWNlc3NhcnkgdG8gc2hvdyBvciBoaWRlIGl0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBjcmVhdGVBbGxXcmFwcGVycygpIHtcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRpbGUgYXMgRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoZWxlbWVudCwgdGhpcy5nZXRVVUlEKGVsZW1lbnQpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmdhbWVUaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZ2FtZSBVVUlEIGZyb20gaXQncyBqc2xvZyBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgZ2V0VVVJRCh0aWxlOiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aWxlXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdqc2xvZycpXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylbMV1cbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMyk7XG4gICAgfVxuXG4gICAgd3JhcHBlckV4aXN0cyh1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy0nICsgdXVpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSB0aWxlIGVsZW1lbnQsIGNyZWF0ZSBhIHdyYXBwZXIgYXJvdW5kIGl0IGFuZCBhbiBpY29uIGFsbG93aW5nIGl0IHRvIGJlIHNob3duIG9yIGhpZGRlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgdGhlIGdhbWUgdXVpZFxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgY3JlYXRlV3JhcHBlcihlbGVtZW50OiBFbGVtZW50LCB1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlckV4aXN0cyh1dWlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgd3JhcHBlclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLXV1aWQnLCB1dWlkKTtcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScsIGVudHJ5WzFdKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcicpO1xuICAgICAgICB3cmFwcGVyLmlkID0gdGhpcy5pZCArICctJyArIHV1aWQ7XG5cbiAgICAgICAgY29uc3QgaWNvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdmlzaWJpbGl0eSBpY29uXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmlzaWJpbGl0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpO1xuICAgICAgICB2aXNpYmlsaXR5LmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHZpc2liaWxpdHkgaWNvblxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaG9ydGN1dC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpO1xuICAgICAgICBzaG9ydGN1dC5pbm5lckhUTUwgPSAnYWRkX3RvX3F1ZXVlJztcblxuICAgICAgICAvLyBXcmFwIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgZWxlbWVudCBhbmQgYWRkIHRoZSBpY29uIGJlZm9yZSBpdFxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICBpY29uV3JhcHBlci5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5KTtcbiAgICAgICAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc2hvcnRjdXQpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGljb25XcmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAvLyBDaGVjayB0aGUgc3RvcmFnZSBmb3IgdmlzaWJpbGl0eSwgaGlkZSB0aGUgZ2FtZSBpZiBib3RoICd2aXNpYmxlJyBhbmQgJ3Nob3dBbGwnIGlzIGZhbHNlXG4gICAgICAgIGlmICghdGhpcy5nYW1lcy5oYXNPd25Qcm9wZXJ0eSh1dWlkKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXSA9IHsgdmlzaWJsZTogdHJ1ZSB9O1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUgJiYgIXRoaXMuc2hvd0FsbCkge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpY29uIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIHJhdGhlciB0aGFuIHRoZSB0b3AgbGVmdCB1c2luZ1xuICAgICAgICAvLyBhIG1hcmdpbiAodXNpbmcgdGhlICdsZWZ0JyBjc3MgYXR0cmlidXRlIGlzIG5vdCBwb3NzaWJsZSlcbiAgICAgICAgaWNvbldyYXBwZXIuc3R5bGUubWFyZ2luTGVmdCA9IGVsZW1lbnQuY2xpZW50V2lkdGggLSB2aXNpYmlsaXR5LmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgaWNvbldyYXBwZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYGNhbGMoMTAwJSAtICR7ZWxlbWVudC5jbGllbnRXaWR0aCAvXG4gICAgICAgICAgICAyfXB4KSAke2VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMn1weGA7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkIG9uXG4gICAgICAgIHZpc2liaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlLCBzZXQgaXQgdG8gaGlkZGVuXG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5oaWRlLWdhbWUnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgaXQgdG8gc2hvd25cbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuc2hvdy1nYW1lJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSdzIHZpc2liaWxpdHlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2FtZSh3cmFwcGVyLCBlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHNob3J0Y3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvcnQgPSBuZXcgU2hvcnRjdXQoJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vcGxheWVyLycgKyB1dWlkLCBlbnRyeVsxXSk7XG5cbiAgICAgICAgICAgIHRoaXMubW9kYWwuYWN0aXZhdGUoYFxuICAgICAgICAgICAgICAgIDxoND5DcmVhdGUgYSBEZXNrdG9wIFNob3J0Y3V0PC9oND5cbiAgICAgICAgICAgICAgICA8cD5QcmVzcyB0aGUgYnV0dG9uIGJlbG93IHRvIGNyZWF0ZSBhIGRlc2t0b3Agc2hvcnRjdXQgZm9yICR7ZW50cnlbMV19LjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ1R2RFhkIFFBQXlXZCBGankwNWQgaXZXVWhjIFFTREh5YyBycGdaemMgUmt5SDFlIHN0YWRpYXBsdXNfYnV0dG9uXCIgaWQ9XCJzaG9ydGN1dC1idXR0b25cIj5TYXZlIFNob3J0Y3V0PC9kaXY+XG4gICAgICAgICAgICBgKTtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG9ydGN1dC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG9ydC5zYXZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgZ2FtZSdzIHZpc2liaWxpdHksIG1ha2luZyBzdXJlIGl0J3Mgb25seSBzaG93biB3aGVuIGl0J3Mgc3VwcG9zZWQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gd3JhcHBlciBUaGUgZ2FtZSdzIHdyYXBwZXIsIGNyZWF0ZWQgYnkgW1tjcmVhdGVXcmFwcGVyXV1cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGUgVGhlIGdhbWUgdGlsZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0ZSBTaG91bGQgdGhlIGdhbWUgaGF2ZSBhbiBhbmltYXRlZCBjbG9zaW5nIGVmZmVjdD9cbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIHVwZGF0ZUdhbWUod3JhcHBlcjogRWxlbWVudCwgdGlsZTogRWxlbWVudCwgYW5pbWF0ZTogYm9vbGVhbikge1xuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgVVVJRFxuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKHRpbGUpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBpY29uXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJ1xuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGljb253cmFwcGVyID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyJ1xuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIC8vIElmIHRoZSBnYW1lIGlzbid0IHZpc2libGUuLi5cbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIC4uLmJ1dCBhbGwgZ2FtZXMgc2hvdWxkIHN0aWxsIGJlIHNob3duXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93QWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpY29uIHRvIGRpc3BsYXkgdGhhdCBpdCdzIG5vdCB2aXNpYmxlIGJ1dCBzaG93biBhbnl3YXlzXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eS5pbm5lckhUTUwgPSAndmlzaWJpbGl0eV9vZmYnO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzbid0IGhpZGRlblxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycsICdjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICBpY29ud3JhcHBlci5zdHlsZS5tYXJnaW5MZWZ0ID0gdGlsZS5jbGllbnRXaWR0aCAtIGljb253cmFwcGVyLmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLi4uXG4gICAgICAgICAgICAgICAgLy8gLi4uaWYgdGhlIGhpZGluZyBzaG91bGQgYmUgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWRlIHRoZSBnYW1lIHRpbGUgb3V0XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIDEgc2Vjb25kLCBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgbm9ybWFsbHlcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc3RheXMgaW4gcGxhY2UgYW5kIGRvZXNuJ3QgZ2V0IHJlc2V0IGJhY2sgdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgICAgICAgaWNvbndyYXBwZXIuc3R5bGUubWFyZ2luTGVmdCA9IHdyYXBwZXIuY2xpZW50V2lkdGggLSBpY29ud3JhcHBlci5jbGllbnRXaWR0aCArICdweCc7XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaWNvbiBzaG93cyB0aGF0IGl0IGlzIHZpc2libGVcbiAgICAgICAgICAgIHZpc2liaWxpdHkuaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGFsbCBnYW1lcywgc2hvcnRoYW5kIGZvciBsb29waW5nIHRocm91Z2ggdGlsZXMgYW5kIHVwZGF0aW5nIHRoZW0gaW5kaXZpZHVhbGx5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIHVwZGF0ZUFsbEdhbWVzKCkge1xuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2FtZSh0aWxlLnBhcmVudEVsZW1lbnQsIHRpbGUgYXMgRWxlbWVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIHRoZSBzdG9yZWQgZGF0YSBmcm9tIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLy8gQ2FsbGJhY2sgdGhhdCBpcyBydW4gYWZ0ZXIgdGhlIGRhdGEgaGFzIGJlZW4gcmVhZFxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjazogKCkgPT4gYW55ID0gKCkgPT4ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lcyA9IHt9O1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFN5bmNTdG9yYWdlLmdldChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLFxuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUixcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddICE9PSB1bmRlZmluZWQgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddIDoge307XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlciA9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLnRhZ11cbiAgICAgICAgICAgICAgICAgICAgICAgIDogRmlsdGVyT3JkZXIuUkVDRU5UO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ11cbiAgICAgICAgICAgICAgICAgICAgICAgIDogT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZSB0byB0aGUgc3luY2hyb25pemVkIGNocm9tZSBzdG9yYWdlIChzdG9yZWQgaW4geW91ciB1c2VyIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHdyaXR0ZW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCkgPT4gYW55ID0gKCkgPT4ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFN5bmNTdG9yYWdlLnNldChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddOiB0aGlzLmdhbWVzLFxuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIudGFnXTogdGhpcy5vcmRlcixcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddOiB0aGlzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHZhcmlldHkgb2YgZXZlbnRzIHRvIHRoZSBmaWx0ZXIgYmFyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIGFkZEZpbHRlckJhckV2ZW50cygpIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgb3JkZXIgaXMgY2hhbmdlZCwgc2V0IGl0IGluIHRoZSBzdG9yYWdlXG4gICAgICAgIHRoaXMuc2VsZWN0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcmRlciA9IHBhcnNlSW50KHRoaXMuc2VsZWN0LmdldCgpWzBdKSBhcyBGaWx0ZXJPcmRlcjtcbiAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgc2hvdyBhbGwgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlIHRoZSBzaG93QWxsIHZhcmlhYmxlIGFuZCB1cGRhdGUgdGhlIGdhbWVzXG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dBbGwgPSAodGhpcy5jaGVja2JveCBhcyBhbnkpLmNoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbEdhbWVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIHRoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nXG4gICAgICAgICk7XG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgc29ydCBkaXJlY3Rpb25cbiAgICAgICAgZGlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXZlc2VTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2ZXNlU29ydERpcmVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIHRoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5ERVNDRU5ESU5HO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU29ydERpcmVjdGlvbigpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlU29ydERpcmVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIHRoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY2VuZGluZycsIHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5ERVNDRU5ESU5HKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYXNjZW5kaW5nJywgdGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBzdG9wcGVkLCBkZXN0cm95cyBuZWNlc3NhcnkgcGFydHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGdhbWUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc29ydCBvcmRlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgc29ydEdhbWVzKCkge1xuICAgICAgICBsZXQgYXJyID0gKEFycmF5LmZyb20odGhpcy5nYW1lVGlsZXMpIGFzIEVsZW1lbnRbXSkubWFwKFxuICAgICAgICAgICAgKGUpID0+IGUucGFyZW50RWxlbWVudFxuICAgICAgICApOyAvLyBHZXQgYWxsIHdyYXBwZXJzIGFzIGFuIGFycmF5XG4gICAgICAgIGFyciA9IGFyci5zb3J0KEZpbHRlck9yZGVyLmdldFNvcnRlcih0aGlzLm9yZGVyKSBhcyBhbnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XG4gICAgICAgICAgICBhcnIgPSBhcnIucmV2ZXJzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnByZXBlbmQoZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGV2ZXJ5IHNlY29uZCwgY3JlYXRlcyBhbmQgdXBkYXRlcyBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlsLmlzSW5Ib21lKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLkNWVlhmYy5ZWXkzWmInKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuaWQgPSB0aGlzLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtGaWx0ZXJPcmRlci5SRUNFTlR9XCI+JHtMYW5ndWFnZS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5yZWNlbnQnXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlck9yZGVyLkFMUEhBQkVUSUNBTFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIuYWxwaGFiZXRpY2FsJ1xuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtGaWx0ZXJPcmRlci5SQU5ET019XCI+JHtMYW5ndWFnZS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5yYW5kb20nXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPScke3RoaXMuZmlsdGVyQmFyLmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICctZGlyZWN0aW9uJ30nIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYXNjZW5kaW5nIHN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcmV0dHksIGNoZWNrYm94IH0gPSBuZXcgQ2hlY2tib3goXG4gICAgICAgICAgICAgICAgICAgIExhbmd1YWdlLmdldCgnbGlicmFyeS1maWx0ZXIuc2hvdy1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnNldEJpZ2dlcih0cnVlKVxuICAgICAgICAgICAgICAgICAgICAuc2V0U2hhcGUoQ2hlY2tib3hTaGFwZS5DVVJWRUQpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xuICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmFwcGVuZENoaWxkKHByZXR0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveCA9IGNoZWNrYm94O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQmFyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWxsV3JhcHBlcnMoKTtcblxuICAgICAgICAgICAgICAgIC8vIFN0eWxlIHRoZSBjdXN0b20gc2VsZWN0IGJveCBpbiB0aGUgZmlsdGVyIGJhclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIHsgcGxhY2Vob2xkZXI6IEZpbHRlck9yZGVyLlJFQ0VOVCB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldCh0aGlzLm9yZGVyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmlsdGVyQmFyRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGlmZmVyZW50IHR5cGVzIG9mIGZpbHRlcmluZywgcmVwcmVzZW50ZWQgYXMgbnVtYmVyc1xuICpcbiAqIEBleHBvcnQgdGhlIEZpbHRlck9yZGVyIHR5cGVcbiAqIEBjbGFzcyBGaWx0ZXJPcmRlclxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyT3JkZXIge1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgU3RhZGlhIHNvcnRpbmcsIHJlY2VudC9uZXcgZ2FtZXMuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgc3RhdGljIFJFQ0VOVCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBBbHBoYWJldGljYWwgb3JkZXIuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgc3RhdGljIEFMUEhBQkVUSUNBTCA9IDE7XG4gICAgXG4gICAgLyoqXG4gICAgICogUmFuZG9tIG9yZGVyLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHN0YXRpYyBSQU5ET00gPSAyO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0aW5nIG1ldGhvZCBvZiB0aGUgaW5wdXRlZCBvcmRlci5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHNvcnRpbmcgZ2FtZXMgYnkgdGhlIGlucHV0ZWQgb3JkZXIuXG4gICAgICogQHBhcmFtIHtGaWx0ZXJPcmRlcn0gb3JkZXJcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U29ydGVyKG9yZGVyOiBGaWx0ZXJPcmRlcik6IEZ1bmN0aW9uIHtcbiAgICAgICAgc3dpdGNoIChvcmRlcikge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJFQ0VOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0UmVjZW50O1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxQSEFCRVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRBbHBoYWJldGljYWw7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJhbmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgYnkgcmVjZW50IGdhbWVzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHsqfSBhXG4gICAgICogQHBhcmFtIHsqfSBiXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB3aGljaCBwYXJhbWV0ZXIgaXMgd2hlcmUuXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgYWxwaGFiZXRpY2FsbHkuXG4gICAgICogXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHsqfSBhXG4gICAgICogQHBhcmFtIHsqfSBiXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB3aGljaCBwYXJhbWV0ZXIgaXMgd2hlcmUuXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydEFscGhhYmV0aWNhbChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xuICAgICAgICBjb25zdCBuYW1lQiA9IGIuZ2V0QXR0cmlidXRlKCdnYW1lLW5hbWUnKTtcblxuICAgICAgICBpZiAobmFtZUEgPT09IHVuZGVmaW5lZCB8fCBuYW1lQiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWVCKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzb3J0UmFuZG9tKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKSAtIDE7XG4gICAgfVxufVxuXG4vKipcbiAqIEVudW0gY29udGFpbmluZyBkaWZmZXJlbnQgb3JkZXIgZGlyZWN0aW9uc1xuICpcbiAqIEBleHBvcnQgdGhlIE9yZGVyRGlyZWN0aW9uIHR5cGUuXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XG4gICAgQVNDRU5ESU5HLFxuICAgIERFU0NFTkRJTkcsXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvVUlDb21wb25lbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy9OZXR3b3JrTW9uaXRvci5zY3NzJztcblxuLy8gSW1wb3J0IHRoZSBNb25pdG9yIHJ1bm5hYmxlIGFzIGEgcmF3IHN0cmluZ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHJ1bm5hYmxlIGZyb20gJyFyYXctbG9hZGVyIS4uL01vbml0b3JSdW5uYWJsZSc7XG5pbXBvcnQgeyBDaGVja2JveCwgQ2hlY2tib3hBbmltYXRpb24gfSBmcm9tICcuLi91aS9DaGVja2JveCc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xuXG5jb25zdCB7IGNocm9tZSwgUlRDUGVlckNvbm5lY3Rpb24gfSA9ICh3aW5kb3cgYXMgYW55KTtcblxuLyoqXG4gKiBBIG5ldHdvcmsgbW9uaXRvciBhbGxvd2luZyB1c2VycyB0byBzZWUgdGhlaXIgbmV0d29yayBzdGF0aXN0aWNzIHdoaWxlIHBsYXlpbmcgYSBnYW1lLlxuICpcbiAqIEBleHBvcnQgdGhlIE5ldHdvcmtNb25pdG9yIHR5cGUuXG4gKiBAY2xhc3MgTmV0d29ya01vbml0b3JcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrTW9uaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnbmV0d29yay1tb25pdG9yJztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0YWJFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtb25pdG9yIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUNvbXBvbmVudF1dIHVzZWQgdG8gZGlzcGxheSB0aGUgdGFiLlxuICAgICAqL1xuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxuICAgICAqL1xuICAgIGJ1dHRvbjogVUlCdXR0b247XG4gICAgXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSBvciBub3QuXG4gICAgICovXG4gICAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBtb25pdG9yIGlzIG9wZW4gb3Igbm90LlxuICAgICAqL1xuICAgIG1vbml0b3JPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29yay1tb25pdG9yJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRSdW5uYWJsZSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZpc2libGUgbmV0d29yayBzdGF0aXN0aWNzLlxuICAgICAqL1xuICAgIHZpc2libGU6IGFueSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV0uXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgY3JlYXRlVUkoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IubmFtZScpLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nQ1R2RFhkIFFBQXlXZCBGankwNWQgaXZXVWhjIFFTREh5YyBycGdaemMgUmt5SDFlIHN0YWRpYXBsdXNfYnV0dG9uIHN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdG9nZ2xlLWJ1dHRvbicgaWQ9JyR7dGhpcy5pZH0tdG9nZ2xlYnV0dG9uJz4ke0xhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnRvZ2dsZS1idXR0b24uc2hvdycpfTwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGg2PiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuaGVhZGluZy12aXNpYmxlJyl9PC9oNj5cbiAgICAgICAgICAgIDx1bCBpZD0nJHt0aGlzLmlkfS12aXNpYmxlbGlzdCc+PC91bD5cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB0aGlzLmlkLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiJyk7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL25ldHdvcmstbW9uaXRvci5zdmcnKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuYnV0dG9uLWxhYmVsJyksIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xuXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgoKSA9PiB7IHRoaXMudXBkYXRlVmlzaWJsZSgpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBuZXR3b3JrIG1vbml0b3IgcnVubmFibGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBzdGFydFJ1bm5hYmxlKCkge1xuICAgICAgICBVdGlsLmRlc2FuZGJveChydW5uYWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbW9uaXRvci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9wZW5Nb25pdG9yKCkge1xuICAgICAgICB0aGlzLm1vbml0b3JPcGVuID0gdHJ1ZTtcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnN0YXJ0KCknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgbW9uaXRvci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIGNsb3NlTW9uaXRvcigpIHtcbiAgICAgICAgdGhpcy5tb25pdG9yT3BlbiA9IGZhbHNlO1xuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc3RvcCgpJyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHRbTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMudGFnXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMuc2V0KHRoaXMudmlzaWJsZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcblxuICAgICAgICB0aGlzLnZpc2libGUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICd0aW1lJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnRpbWUnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdyZXNvbHV0aW9uJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnJlc29sdXRpb24nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdmcHMnLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMuZnBzJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnbGF0ZW5jeScsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5sYXRlbmN5JyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnY29kZWMnLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMuY29kZWMnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICd0cmFmZmljJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnRyYWZmaWMnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdjdXJyZW50LXRyYWZmaWMnLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMuY3VycmVudC10cmFmZmljJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnYXZlcmFnZS10cmFmZmljJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmF2ZXJhZ2UtdHJhZmZpYycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ3BhY2tldHMtbG9zdCcsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5wYWNrZXRzLWxvc3QnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdhdmVyYWdlLXBhY2tldC1sb3NzJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmF2ZXJhZ2UtcGFja2V0LWxvc3MnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdqaXR0ZXItYnVmZmVyJyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmppdHRlci1idWZmZXInKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3NlTW9uaXRvcigpO1xuXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvciA9IG51bGwnKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgd2hpY2ggc3RhdGlzdGljcyBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgICAgIFV0aWwuZGVzYW5kYm94KGBTdGFkaWFQbHVzTW9uaXRvci5zZXRWaXNpYmxlKCR7SlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlKX0pYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUodHJ1ZSknKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUoZmFsc2UpJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXZpc2libGVsaXN0Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudmlzaWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ID0gdGhpcy52aXNpYmxlW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcmV0dHksIGNoZWNrYm94fSA9IG5ldyBDaGVja2JveChzdGF0Lm5hbWUpLnNldEJpZ2dlcih0cnVlKS5zZXRBbmltYXRpb24oQ2hlY2tib3hBbmltYXRpb24uU01PT1RIKS5idWlsZCgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV0dHkuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci1jaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmV0dHkpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXQuZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlW2ldLmVuYWJsZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctdG9nZ2xlYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5tb25pdG9yT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmlubmVySFRNTCA9IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnRvZ2dsZS1idXR0b24uaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci50b2dnbGUtYnV0dG9uLmhpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCB0aGlzLm1vbml0b3JPcGVuKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLm9uUHJlc3NlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuVGFiKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5jb21wb25lbnQub3Blbikge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xvc2VUYWIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFVdGlsLmlzSW5HYW1lKCkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keT4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9uaXRvcigpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcbiAgICBzdGF0aWMgV0lORE9XUzogc3RyaW5nID0gXCJXaW4zMlwiO1xuICAgIHN0YXRpYyBNQUNPUzogc3RyaW5nID0gXCJNYWNJbnRlbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgUGFzdGVGcm9tQ2xpcGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgdGFnOiBzdHJpbmcgID0gJ3Bhc3RlLWZyb20tY2xpcGJvYXJkJztcblxuICAgIHByb3RlY3RlZCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQuXG4gICAgICovXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uVXBkYXRlKCk7XG5cbiAgICAgICAgaWYgKFV0aWwuaXNJbkdhbWUoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25FdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAga2V5ZG93bkV2ZW50TGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IGN0cmxLZXk6IGJvb2xlYW47XG4gICAgICAgIHN3aXRjaChuYXZpZ2F0b3IucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0uV0lORE9XUzpcbiAgICAgICAgICAgICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5NQUNPUzpcbiAgICAgICAgICAgICAgICBjdHJsS2V5ID0gZXZlbnQubWV0YUtleTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdHJsS2V5ICYmICdLZXlWJyA9PSBldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbihmdW5jdGlvbihkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0RXZlbnRJbml0XG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJpbnNlcnRUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcG9zaW5nOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBVSUV2ZW50SW5pdFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBudWxsLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50SW5pdFxuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL1BvcHVwRml4LnNjc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5cbi8qKlxuICogQSBzaW1wbGUgZml4IHRoYXQgc29sdmVzIGFuIGlzc3VlIHdoZXJlIG5vdGlmaWNhdGlvbnMgd291bGQgaGlkZSBzcGVjaWZpYyBidXR0b25zXG4gKlxuICogQGV4cG9ydCB0aGUgUG9wdXBGaXggdHlwZS5cbiAqIEBjbGFzcyBQb3B1cEZpeFxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwRml4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdwb3B1cC1maXgnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBvcHVwIGVsZW1lbnQuXG4gICAgICovXG4gICAgcG9wdXA6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogSXMgaW4gZ2FtZS5cbiAgICAgKi9cbiAgICBpbkdhbWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgUG9wdXBGaXhcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuekxvUXBiJyk7XG4gICAgICAgIFxuICAgICAgICBpZighVXRpbC5pc0luR2FtZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5hZGQoJ29mZnNldCcpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsnbmFtZSc6IHRoaXMubmFtZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFBvcHVwRml4XG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNldCcpO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICBpZihVdGlsLmlzSW5HYW1lKCkgJiYgdGhpcy5wb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ29mZnNldCcpICYmICF0aGlzLmluR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQnKTtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0ICcuL3N0eWxlcy9SYXRpbmdzLnNjc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgYWRkaW5nIE1ldGFjcml0aWMgcmF0aW5ncyB0byBldmVyeSBTdGFkaWEgZ2FtZS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBSYXRpbmdzIHR5cGVcbiAqIEBjbGFzcyBSYXRpbmdzXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgUmF0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAncmF0aW5ncyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXG4gICAgICovXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZnJvbSBlYWNoIGJvdW5kIGluIHdoaWNoIGEgZ2FtZSB3aWxsIGdldCAwIG9yIDUgc3RhcnMuXG4gICAgICovXG4gICAgZ3JhY2VBbW91bnQ6IG51bWJlciA9IDEwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHN0YXJzIHRvIGF3YXJkLlxuICAgICAqL1xuICAgIG1heFN0YXJzID0gNTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gICAgICAgIHRoaXMudXVpZE1hcCA9IHV1aWRNYXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgcmF0aW5nIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUmF0aW5nc1xuICAgICAqL1xuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19yYXRpbmcnLCAnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBnYW1lIFVVSUQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0aGUgZ2FtZSBVVUlEIGFzIGEgc3RyaW5nLlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXG4gICAgICovXG4gICAgZ2V0VVVJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCwgJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCArIDM2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHJhdGluZywgZmV0Y2hpbmcgaXQgZnJvbSB0aGUgZGF0YWJhc2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUmF0aW5nc1xuICAgICAqL1xuICAgIHVwZGF0ZVJhdGluZygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCgpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5kYXRhYmFzZS5nZXRDb25uZWN0aW9uKClbJ2RhdGEnXTtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFt1dWlkXV07XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnLCBlbnRyeVs2XSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIGhvdyBtYW55IHN0YXJzIGEgZ2FtZSBzaG91bGQgaGF2ZSBiYXNlZCBvbiBpdCdzIHJhdGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbmcgdGhlIGdhbWUncyByYXRpbmcuXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBhbiBhcnJheSBvZiBpY29uIHN0cmluZ3MsIGJlaW5nIGVpdGhlciBcInN0YXJcIiwgXCJzdGFyX2hhbGZcIiBvciBcInN0YXJfb3V0bGluZVwiLlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzIFxuICAgICAqL1xuICAgIGdldFN0YXJzKHJhdGluZzogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBvdXRwdXRTdGFycyA9IFtdO1xuXG4gICAgICAgIC8vIENsYW1wcyB0aGUgcmF0aW5nIHRvIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDEsXG4gICAgICAgIC8vIHdoZXJlICgwICsgZ3JhY2VBbW91bnQpIGlzIDAgYW5kICgxMDAgLSBncmFjZUFtb3VudCkgaXMgMVxuICAgICAgICBjb25zdCBjbGFtcGVkUiA9IChyYXRpbmcgLyAxMDApICogKDEgKyAodGhpcy5ncmFjZUFtb3VudCAvIDEwMCkgKiAyKSAtICh0aGlzLmdyYWNlQW1vdW50IC8gMTAwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgciA9IGNsYW1wZWRSOyBpIDwgdGhpcy5tYXhTdGFyczsgaSArPSAxLCByIC09IDEgLyB0aGlzLm1heFN0YXJzKSB7XG4gICAgICAgICAgICBpZiAociA+PSAxIC8gdGhpcy5tYXhTdGFycykge1xuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXInKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAociA+PSAwKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3Rhcl9oYWxmJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXJfb3V0bGluZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dFN0YXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIHJhdGluZyBlbGVtZW50IHRvIG1ha2Ugc3VyZSBpdCBhbHdheXMgZGlzcGxheXMgdGhlIGNvcnJlY3QgdmFsdWUuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIGlmKFV0aWwuaXNJblN0b3JlRGV0YWlsKCkpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmF0aW5nID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnMgPSB0aGlzLmdldFN0YXJzKHJhdGluZyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHJhdGluZyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5aekJKU2IgPiAuQk1VbmZkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFNpYmxpbmcgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnQsIG5leHRTaWJsaW5nKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdGFycy5qb2luKCcgJyl9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3JhdGluZ30gLyAxMDAgKCR7TGFuZ3VhZ2UuZ2V0KCdyYXRpbmdzLnNvdXJjZS1uYW1lJyl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbi8vIEltcG9ydCB0aGUgUmVjb3JkZXIgcnVubmFibGUgYXMgYSByYXcgc3RyaW5nXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcnVubmFibGUgZnJvbSAnIXJhdy1sb2FkZXIhLi4vUmVjb3JkZXInO1xuXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcblxuLyoqXG4gKiBBIGJ1dHRvbiBhbGxvd2luZyB0aGUgdXNlciB0byByZWNvcmQgdGhlIHNlc3Npb24gbG9jYWxseS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBSZWNvcmQgdHlwZS5cbiAqIEBjbGFzcyBSZWNvcmRcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWNvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ3JlY29yZCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gdG9nZ2xlIHdpbmRvd2VkIG1vZGUuXG4gICAgICovXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgcmVjb3JkaW5nIG1vZGUgaXMgb24gb3Igbm90LlxuICAgICAqL1xuICAgIHJlY29yZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBVdGlsLmRlc2FuZGJveChydW5uYWJsZSk7XG5cbiAgICAgICAgLy8gVE9ETyBDaGFuZ2UgaWNvbnNcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ3JlY29yZC5idXR0b24tbGFiZWwucmVjb3JkJyksXG4gICAgICAgICAgICB0aGlzLmlkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzUmVjb3JkZXIuc3RvcChmYWxzZSknKTtcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNSZWNvcmRlciA9IG51bGwnKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBidXR0b24gbGFiZWxzIGFuZCBpY29ucyB0byBmaXQgY3VycmVudCBtb2RlLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRcbiAgICAgKi9cbiAgICB1cGRhdGVCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE8gQ2hhbmdlIGljb25zXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcbiAgICAgICAgY29uc3QgaWNvbl9leGl0ID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFxuICAgICAgICAgICAgJ2ltYWdlcy9pY29ucy93aW5kb3dlZF9leGl0LnN2ZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldEljb24oaWNvbl9leGl0KTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldFRpdGxlKFxuICAgICAgICAgICAgICAgIExhbmd1YWdlLmdldCgncmVjb3JkLmJ1dHRvbi1sYWJlbC5zdG9wLXJlY29yZGluZycpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldFRpdGxlKFxuICAgICAgICAgICAgICAgIExhbmd1YWdlLmdldCgncmVjb3JkLmJ1dHRvbi1sYWJlbC5yZWNvcmQnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgZXZlbnRzIGhhdmUgYmVlbiBhZGRlZCBhbHJlYWR5IG9yIG5vdC5cbiAgICBldmVudHNBZGRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uY2UgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIGNvbXBvbmVudCBlbGVtZW50cyBhbmQgdmFyaWFibGVzXG4gICAgICogRlxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gSWYgbWVudSBpcyBvcGVuIGFuZCBhIGdhbWUgaXMgcGxheWluZy5cbiAgICAgICAgaWYgKFV0aWwuaXNNZW51T3BlbigpICYmIFV0aWwuaXNJbkdhbWUoKSkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgY3VycmVudCByZW5kZXJlclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG5ldyByZW5kZXJlcnNcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV2ZW50cyBhcmUgYWxyZWFkeSBhZGRlZCwgZG9uJ3QgYWRkIHRoZW0gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50c0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5vblByZXNzZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c1JlY29yZGVyLnN0b3AodHJ1ZSknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c1JlY29yZGVyLnN0YXJ0KCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5jcmVhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvU3RvcmVGaWx0ZXIuc2Nzcyc7XG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4uL1dlYkRhdGFiYXNlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuXG4vKipcbiAqIEEgc2VhcmNoIGJhciBkaXNwbGF5ZWQgb24gdGhlIHN0b3JlIHBhZ2Ugb2YgU3RhZGlhLlxuICpcbiAqIEBleHBvcnQgdGhlIFN0b3JlRmlsdGVyIHR5cGUuXG4gKiBAY2xhc3MgU3RvcmVGaWx0ZXJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnc3RvcmUtZmlsdGVyJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggYmFyIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBIHRlbXBsYXRlIGVsZW1lbnQgZm9yIGluZGl2aWR1YWwgZ2FtZXMgaW4gdGhlIHNlYXJjaCBib3guXG4gICAgICovXG4gICAgZ2FtZVRlbXBsYXRlOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgZGF0YWJhc2UuXG4gICAgICovXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cbiAgICAgKi9cbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGFsbCBnYW1lIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGdhbWVzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIGlucHV0LlxuICAgICAqL1xuICAgIHNlYXJjaEZpZWxkOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHNlYXJjaCBiYXIgYW5kIG5lY2Vzc2FyeSBlbGVtZW50cy92YXJpYWJsZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcbiAgICAgKi9cbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5kYXRhYmFzZS5nZXRDb25uZWN0aW9uKClbJ2RhdGEnXTtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zdG9yZWZpbHRlcicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmFyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCIke2Nvbm5lY3Rpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29ubmVjdGlvbi5sZW5ndGgpXVsxXX0uLi5cIiBpZD0nJHt0aGlzLmlkfS1zZWFyY2gnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lcycgaWQ9JyR7dGhpcy5pZH0tZ2FtZXMnPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW2tleV1dO1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lJyk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vNjQwLzM2MCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGV0YWlsJz5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPSduYW1lJz5Mb3JlbSBJcHN1bTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkIHRhZ3MnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIGtleSk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgZW50cnlbMV0pO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFncycsIGVudHJ5WzJdKTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbVwiIGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY0FyciA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGlmKGxvY0Fyci5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgdXJsID0gbG9jQXJyLnNsaWNlKDAsIDUpLmpvaW4oJy8nKSArICcvJztcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggKyAodXJsLmVuZHNXaXRoKCcvJykgPyAtMSA6IDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0b3JlSWQgPSBlbnRyeVswXS5tYXRjaCgvaHR0cHM6XFwvXFwvc3RhZGlhLmdvb2dsZS5jb21cXC9zdG9yZVxcL2RldGFpbHNcXC8oWzAtOWEtei9dKykvKVsxXTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsICsgJy9zdG9yZS9kZXRhaWxzLycgKyBzdG9yZUlkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWltZycsICdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vJyArIGVudHJ5WzBdLm1hdGNoKC8oaW1hZ2VzXFwvcG9zdGVyc1xcL1thLXowLTlfLi1dKy5wbmcpL2cpKTtcblxuICAgICAgICAgICAgdGhpcy5nYW1lcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBpbnB1dCBldmVudHMgdG8gdGhlIHNlYXJjaCBiYXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcbiAgICAgKi9cbiAgICBhZGRFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgodGhpcy5zZWFyY2hGaWVsZCBhcyBhbnkpLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGdhbWUgbGlzdCBmb3IgYSBzcGVjaWZpYyBzdHJpbmcgYW5kIHNob3dzIHdoaWNoZXZlciBnYW1lcyBmaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBtZW1iZXJvZiBTdG9yZUZpbHRlclxuICAgICAqL1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgZ2FtZS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicsIHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgbmFtZS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdGhlIHNlYXJjaCBiYXIgb25seSBleGlzdHMgd2hlbiBpdCdzIHN1cHBvc2VkIHRvIGFuZCB3b3JrcyBwcm9wZXJseSBldmVuIGlmIGFjY2lkZW50YWxseSBkZXN0cm95ZWQuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIGlmKFV0aWwuaXNJblN0b3JlKCkpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLm5XbXRMZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoY29udGFpbmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLWdhbWVzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lcy5mb3JFYWNoKChnYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBnYW1lLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnYW1lLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWw+Lm5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi50YWdzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3MuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFncycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy1zZWFyY2gnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vc3R5bGVzL1VJVGFiLnNjc3MnO1xuaW1wb3J0ICcuLi91aS9zdHlsZXMvQnV0dG9uLnNjc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvR3JpZC5zY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL1R5cG9ncmFwaHkuc2Nzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuY29uc3QgY2hyb21lOiBhbnkgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xuXG4vKipcbiAqIEEgdGFiIGFuZCBidXR0b24gZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBVSVRhYiB0eXBlLlxuICogQGNsYXNzIFVJVGFiXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgVUlUYWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAndWktdGFiJztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXG4gICAgICovXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXG4gICAgICovXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIEFuIGFtb3VudCBvZiByb3dzLCBlYWNoIGNvbnRhaW5pbmcgY29udGVudC5cbiAgICAgKi9cbiAgICByb3dzOiBVSVJvd1tdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgZnVuIE1PVEQgbWVzc2FnZXMgYWRkZWQgdG8gdGhlIHRhYi5cbiAgICAgKi9cbiAgICBtb3RkTGlzdDogc3RyaW5nW10gPSBbXG4gICAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2Vtb2ppcy82MzYyMjc4NjQwNzY3NDY3NzIucG5nP3Y9MVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7IHdpZHRoOiAyNHB4XCI+JyxcbiAgICAgICAgXCJEb24ndCBsb29rIGhlcmUsIGxvb2sgYmVsb3chXCIsXG4gICAgICAgICdSZWFsaXR5IGNhbiBiZSB3aGF0ZXZlciBJIHdhbnQuJyxcbiAgICAgICAgJ0lmIHlvdSBhc2sgbmljZWx5LCBTdGFkaWEgbWlnaHQgZXZlbiBkbyB5b3VyIGxhdW5kcnkgZm9yIHlvdSEnLFxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgYXNraW5nIGN1c3RvbWVyIHN1cHBvcnQ/JyxcbiAgICAgICAgJ0ZvbGxvdyB1L21hZnJhbnMgb24gUmVkZGl0IScsXG4gICAgICAgICdTdGFkaWErLCBsaWtlIEdvb2dsZSsgYnV0IHN0aWxsIGFsaXZlLicsXG4gICAgICAgICdTdGFkaWEgaXMgRE9BLCBiZWxpZXZlIG1lLicsXG4gICAgICAgICdHZXQgYSBsb2FkIG9mIHRoaXMgZ3V5LCB1c2luZyBjaHJvbWUgZXh0ZW5zaW9ucyB0byBpbXByb3ZlIGhpcyBTdGFkaWEgZXhwZXJpZW5jZS4nLFxuICAgICAgICBcIkknbSB0ZWxsaW5nIHlvdSwgZG9uJ3QgdHJ1c3QgdGhhdCBndXkuIFlvdSBrbm93LCB0aGUgZ3V5LlwiLFxuICAgICAgICAnU2hvdXRvdXQgdG8gQ2hyaXMgYW5kIEdyYWNlIScsXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBTcGxpdGxpbmdzIHlldD8nLFxuICAgICAgICAnQWx3YXlzIGNoZWNrIHRoZSByYXRpbmdzIGJlZm9yZSB5b3UgYnV5IGEgbmV3IGdhbWUuJyxcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIEdlRm9yY2UgTm93PycsXG4gICAgICAgICdBIGhvdCBkb2cgaXMgZGVmaW5pdGVseSBub3QgYSBzYW5kd2ljaC4nLFxuICAgICAgICAnSWRrIGFib3V0IHlvdSwgYnV0IEkgcmVhbGx5IHdhbnQgb25lIG9mIHRob3NlIGZhbmN5IHNtYXJ0IHRvaWxldHMuJyxcbiAgICAgICAgJ0NocmlzIGlzIHR5cGluZyBndXlzISEnLFxuICAgICAgICAnRG9lcyBhbnlvbmUgaGF2ZSBhIGJ1ZGR5IHBhc3MgSSBjb3VsZCBib3Jyb3c/JyxcbiAgICAgICAgJ0kgcGFpZCAkMTM5IGZvciB0aGlzPycsXG4gICAgICAgICdJcyBGb3J0bml0ZSBvbiBTdGFkaWEgeWV0PycsXG4gICAgICAgICd1L2JhY29ucnVsZXMgd2FzIHRoZSBmaXJzdCB0byBzZWUgNGshJyxcbiAgICAgICAgJ1NvIGRpZCB0aGUgcGVyc29uIHRoYXQgbWFkZSB0aGUgc3RhZGlhKyBleHRlbnNpb24gZ2l2ZSB1cCBvbiBzdGFkaWE/JyxcbiAgICAgICAgJ0l0XFwncyBsaWtlIEdGTiwgYnV0IHdpdGhvdXQgYW55IHB1bGxlZCBnYW1lcy4nLFxuICAgICAgICAnTG9uZyBsaXZlIEdlZm9yY2UgTm93KycsXG4gICAgICAgICdTcGVuZCB5b3VyIG1vbmV5IGJlZm9yZSBpdCBydW5zIG91dC4nLFxuICAgICAgICAnV2hlbiBkb2VzIFN0YWRpYSAyIGNvbWUgb3V0PycsXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBbW1VJQ29tcG9uZW50XV0gYW5kIGEgW1tVSUJ1dHRvbl1dXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBVSUNvbXBvbmVudChcbiAgICAgICAgICAgICdTdGFkaWErJyxcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA8aSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGFkaWFwbHVzX211dGVkXCIgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogNXJlbTsgZGlzcGxheTogYmxvY2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW90ZExpc3RbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tb3RkTGlzdC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvc3RhZGlhcGx1cy5zdmcnKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgTGFuZ3VhZ2UuZ2V0KCd1aS10YWIuYnV0dG9uLWxhYmVsJyksIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBhbGwgcm93cyB0aGF0IGRvbid0IGFscmVhZHkgZXhpc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWxvYWRdXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgY3JlYXRlUm93cyhyZWxvYWQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmKCFyb3cuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKHRoaXMuY29tcG9uZW50LCBpID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHJvdy5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxvYWQgYWxsIHJvd3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIHJlbG9hZFJvd3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiByb3cucmVsb2FkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHJvdyB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIGFkZFJvdyhyb3c6IFVJUm93KTogdm9pZCB7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYW5kIHVubG9hZCBhbGwgcm93cy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBjbGVhclJvd3MoKTogdm9pZCB7XG4gICAgICAgIGZvcihjb25zdCByb3cgb2YgdGhpcy5yb3dzKSB7XG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgcm93LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5vblByZXNzZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnQub3BlblRhYigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5jcmVhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuY29tcG9uZW50Lm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaWJyYXJ5RmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV0d29ya01vbml0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qb3B1cEZpeC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JhdGluZ3Muc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9yZUZpbHRlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VJVGFiLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvR2xvYmFsLnNjc3MnXG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvVUlUYWInXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXG5pbXBvcnQgeyBGb3JjZVJlc29sdXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uJ1xuaW1wb3J0IHsgTmV0d29ya01vbml0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3InO1xuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IExpYnJhcnlGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlcic7XG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0IHsgU3RvcmVGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXInO1xuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gJy4vY29tcG9uZW50cy9SYXRpbmdzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBBbGxvd1dpbmRvd2VkTW9kZSB9IGZyb20gJy4vY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZSc7XG5pbXBvcnQgeyBSZWNvcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb3JkJztcbmltcG9ydCB7IFBhc3RlRnJvbUNsaXBib2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9QYXN0ZUZyb21DbGlwYm9hcmQnO1xuaW1wb3J0IHsgU3RvcmFnZU1hbmFnZXIgfSBmcm9tICcuL1N0b3JhZ2UnO1xuaW1wb3J0IGFwcGRhdGEgZnJvbSAnLi9hcHBkYXRhLmpzb24nO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL3VpL01vZGFsJztcbmltcG9ydCB7IFNob3J0Y3V0IH0gZnJvbSAnLi9TaG9ydGN1dCc7XG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnLi9Ccm93c2VyJztcbmltcG9ydCB7IFBvcHVwRml4IH0gZnJvbSAnLi9jb21wb25lbnRzL1BvcHVwRml4JztcblxuLy8gQWx3YXlzIGxvYWQgbGFuZ3VhZ2VzIGZpcnN0XG5MYW5ndWFnZS5pbml0KCk7XG5MYW5ndWFnZS5sb2FkKCk7XG5cbkJyb3dzZXIuaW5pdCgpO1xuXG5jb25zdCBzdG9yYWdlTWFuYWdlciA9IG5ldyBTdG9yYWdlTWFuYWdlcihhcHBkYXRhKTtcbnN0b3JhZ2VNYW5hZ2VyLmNoZWNrQ2FjaGVWZXJzaW9uKCk7XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBDb21wb25lbnRMb2FkZXIoKTtcbmNvbnN0IHNuYWNrYmFyID0gbmV3IFNuYWNrYmFyKCk7XG5jb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xuY29uc3QgdGFiID0gbmV3IFVJVGFiKCk7XG5cbmNvbnN0IGRhdGFiYXNlID0gbmV3IFdlYkRhdGFiYXNlKCdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vZGF0YS9nYW1lZGIuanNvbicpO1xuY29uc3QgdXVpZE1hcCA9IG5ldyBXZWJEYXRhYmFzZSgnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tL2RhdGEvdXVpZG1hcC5qc29uJyk7XG5kYXRhYmFzZS5jb25uZWN0KCk7XG51dWlkTWFwLmNvbm5lY3QoKTtcblxubG9hZGVyLnJlZ2lzdGVyKG5ldyBDbG9jaygpKTtcbi8vIGxvYWRlci5yZWdpc3RlcihuZXcgUG9wdXBGaXgoKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IExpYnJhcnlGaWx0ZXIoc25hY2tiYXIsIGRhdGFiYXNlLCB1dWlkTWFwLCBtb2RhbCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBGb3JjZUNvZGVjKHRhYiwgc25hY2tiYXIpKTtcbmxvYWRlci5yZWdpc3RlcihuZXcgRm9yY2VSZXNvbHV0aW9uKHRhYiwgc25hY2tiYXIpKTtcbmxvYWRlci5yZWdpc3Rlcih0YWIpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBOZXR3b3JrTW9uaXRvcigpKTtcbmxvYWRlci5yZWdpc3RlcihuZXcgU3RvcmVGaWx0ZXIoZGF0YWJhc2UsIHV1aWRNYXApKTtcbmxvYWRlci5yZWdpc3RlcihuZXcgUmF0aW5ncyhkYXRhYmFzZSwgdXVpZE1hcCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBBbGxvd1dpbmRvd2VkTW9kZSgpKTtcbmxvYWRlci5yZWdpc3RlcihuZXcgUmVjb3JkKCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBQYXN0ZUZyb21DbGlwYm9hcmQoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIFV0aWwubG9hZCgpO1xuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xuICAgIG1vZGFsLmNyZWF0ZSgpO1xuICAgIGxvYWRlci5zdGFydCgpO1xufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UeXBvZ3JhcGh5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3gge1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHNoYXBlOiBzdHJpbmcgPSBDaGVja2JveFNoYXBlLkRFRkFVTFQ7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nID0gQ2hlY2tib3hTdHlsZS5ERUZBVUxUO1xuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIGljb246IHN0cmluZztcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgYmlnZ2VyOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0U2hhcGUoc2hhcGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBzZXRTdHlsZShzdHlsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0Qm9yZGVyKGJvcmRlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJvcmRlciA9IGJvcmRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QmlnZ2VyKGJpZ2dlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJpZ2dlciA9IGJpZ2dlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBBZGQgbWFpbiBjbGFzc2VzXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJldHR5JywgJ3AtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIElmIHN0eWxlIGlzIG5vdCBkZWZhdWx0LCBhZGQgc3R5bGVcbiAgICAgICAgaWYodGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2hhcGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxuICAgICAgICBpZih0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbmltYXRlZCwgYWRkIGFuaW1hdGlvblxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBiaWdnZXJcbiAgICAgICAgaWYodGhpcy5iaWdnZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1iaWdnZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBib3JkZXJcbiAgICAgICAgaWYoIXRoaXMuYm9yZGVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtcGxhaW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBjaGVja2JveCBpbnB1dFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIC8vIEFkZCBzdGF0ZSBkaXZcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCgnc3RhdGUnKTtcblxuICAgICAgICAvLyBJZiBjb2xvcmVkLCBhZGQgY29sb3JcbiAgICAgICAgaWYodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGhhcyBpY29uLCBhZGQgaWNvblxuICAgICAgICBpZih0aGlzLmljb24pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1pY29uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IHRoaXMuaWNvbjtcblxuICAgICAgICAgICAgc3RhdGUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbGFiZWxcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLmxhYmVsO1xuICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtwcmV0dHk6IGVsZW1lbnQsIGNoZWNrYm94fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFNoYXBlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBDVVJWRUQ6IHN0cmluZyA9ICdwLWN1cnZlJztcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EOiBzdHJpbmcgPSAncC1yb3VuZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBGSUxMOiBzdHJpbmcgPSAncC1maWxsJztcbiAgICBwdWJsaWMgc3RhdGljIFRISUNLOiBzdHJpbmcgPSAncC10aGljayc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIEJMVUU6IHN0cmluZyA9ICdwLXByaW1hcnknO1xuICAgIHB1YmxpYyBzdGF0aWMgR1JFRU46IHN0cmluZyA9ICdwLXN1Y2Nlc3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgWUVMTE9XOiBzdHJpbmcgPSAncC13YXJuaW5nJztcbiAgICBwdWJsaWMgc3RhdGljIENZQU46IHN0cmluZyA9ICdwLWluZm8nO1xuICAgIHB1YmxpYyBzdGF0aWMgUkVEOiBzdHJpbmcgPSAncC1kYW5nZXInO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hBbmltYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgU01PT1RIOiBzdHJpbmcgPSAncC1zbW9vdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgSkVMTFk6IHN0cmluZyA9ICdwLWplbGx5JztcbiAgICBwdWJsaWMgc3RhdGljIFRBREE6IHN0cmluZyA9ICdwLXRhZGEnO1xuICAgIHB1YmxpYyBzdGF0aWMgUk9UQVRFOiBzdHJpbmcgPSAncC1yb3RhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgUFVMU0U6IHN0cmluZyA9ICdwLXB1bHNlJztcbn0iLCJpbXBvcnQgJy4vc3R5bGVzL01vZGFsLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgd3JhcHBlcjogRWxlbWVudDtcbiAgICBjb250ZW50OiBFbGVtZW50O1xuICAgIGNsb3NlQnV0dG9uOiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbW9kYWwnKTtcblxuICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLXdyYXBwZXInKTtcblxuICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLWNvbnRlbnQnKTtcblxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCAnc3RhZGlhcGx1c19tb2RhbC1jbG9zZScpO1xuXG4gICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgc2VsZi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XG4gICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG5cbiAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XG5pbXBvcnQgJ3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzJztcbmltcG9ydCAnLi4vdWkvc3R5bGVzL1NlbGVjdC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdCB7XG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgb3B0aW9uczogU2VsZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIG9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnN0eWxlIDogU2VsZWN0U3R5bGUuREFSSztcbiAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub25DaGFuZ2UgOiAoKSA9PiB7fTtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVDaGFuZ2UgPSBvcHRpb25zLmJlZm9yZUNoYW5nZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5iZWZvcmVDaGFuZ2UgOiAoKSA9PiB7fTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdzdGFkaWFwbHVzX2Ryb3Bkb3duJyxcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGVcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnNcbiAgICAgICAgICogaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aG91dCBwcm9wZXJseSBiZWluZyBkZXN0cm95ZWQuIEFzIFN0YWRpYVxuICAgICAgICAgKiBydW5zIGluIGEgdmlydHVhbCBET00sIHdlIGhhdmUgbm8gY29udHJvbCBvZiB3aGVuIHRoZSBET00gY2hhbmdlc1xuICAgICAgICAgKiB0aGVyZWZvcmUgd2UgY2FuJ3Qgc29sdmUgaXQgaW4gYSBwcm9wZXIgd2F5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXG4gICAgICAgICAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xuICAgICAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvcHRpb25zLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIGJlZm9yZU9uQ2hhbmdlOiBvcHRpb25zLmJlZm9yZUNoYW5nZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEp1c3QgaW4gY2FzZSBzbGltc2VsZWN0LnNldCBpcyBmYXN0ZXJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpbXNlbGVjdC5zZWFyY2gocXVlcnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaW1zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIFNMSU1TRUxFQ1Q6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUX0xBUkdFOiBzdHJpbmcgPSAnc3R5bGUtc2xpbXNlbGVjdC1sYXJnZSc7XG4gICAgcHVibGljIHN0YXRpYyBMSUdIVDogc3RyaW5nID0gJ3N0eWxlLWxpZ2h0JztcbiAgICBwdWJsaWMgc3RhdGljIERBUks6IHN0cmluZyA9ICdzdHlsZS1kYXJrJztcbn1cblxuaW50ZXJmYWNlIFNlbGVjdE9wdGlvbnMge1xuICAgIHBsYWNlaG9sZGVyPzogYW55O1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlPzogKGluZm86IGFueSkgPT4gYW55O1xuICAgIGJlZm9yZUNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvU25hY2tiYXIuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBTbmFja2JhciB7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBsYWJlbDogRWxlbWVudDtcbiAgICBjbG9zZUJ1dHRvbjogRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyJyk7XG5cbiAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsJyk7XG5cbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcblxuICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG59IiwiaW1wb3J0IHsgVUlCdXR0b25Db250YWluZXIgfSBmcm9tIFwiLi9VSUJ1dHRvbkNvbnRhaW5lclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBodG1sOiBzdHJpbmc7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xuICAgIGJ1dHRvbjogSFRNTEVsZW1lbnQ7XG5cbiAgICBzdGF0aWMgYnV0dG9uQ29udGFpbmVyczogVUlCdXR0b25Db250YWluZXJbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5odG1sID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlB5ZmxiYlwiIGpzbmFtZT1cInJaSEVTZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJLRWFIb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlg1cGVvZVwiIGpzbmFtZT1cInBZRmhVXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwieGR1b3lmIHVpYnV0dG9uLWljb25cIiBzcmM9XCIke2ljb259XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYVNKViB1aWJ1dHRvbi10aXRsZVwiPiR7dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUHlmMWJiJywgJ3N0YWRpYXBsdXNfdWktYnV0dG9uJyk7XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnQ1R2RFhkJywgJ1FBQXlXZCcsICdQanBhYycsICd6Y01ZZCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XG4gICAgfVxuXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgZm9yKGNvbnN0IGNvbnRhaW5lciBvZiBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzKSB7XG4gICAgICAgICAgICBpZihjb250YWluZXIuYnV0dG9ucy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBVSUJ1dHRvbkNvbnRhaW5lcigpO1xuICAgICAgICAgICAgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRCdXR0b24odGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2V0SWNvbihpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWJ1dHRvbi1pY29uJykuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uKTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWlidXR0b24tdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XG4gICAgfSBcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQnV0dG9uKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUHJlc3NlZChmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gXCIuL1VJQnV0dG9uXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9Mb2dnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVJQnV0dG9uQ29udGFpbmVyIHtcbiAgICBidXR0b25zOiBVSUJ1dHRvbltdID0gW107XG4gICAgY29udGFpbmVyOiBFbGVtZW50O1xuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgaWQ6IHN0cmluZztcbiAgICB3cmFwcGVyOiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSAnYnV0dG9uLWNvbnRhaW5lci0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ1pnVU1vJywgJ3N0YWRpYXBsdXNfdWktYnRuLXdyYXBwZXInKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0UwWms5YicsICdzdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXInKTtcbiAgICB9XG4gICAgXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7IC8vIFJlcXVlcnkgaW4gY2FzZSB0aGUgY29udGFpbmVyIHdhcyBkZWxldGVkXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYoIWJ1dHRvbi5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24uZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbik6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmJ1dHRvbnMuaW5kZXhPZihidXR0b24pID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbikge1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKGIgPT4gYi5pZCAhPT0gYnV0dG9uLmlkKTtcbiAgICB9XG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVUlDb21wb25lbnQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaHRtbDogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgb3BlbjogYm9vbGVhbjtcbiAgICBvcGVuTGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuICAgIGNsb3NlTGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5odG1sID0gYFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmt2VDdjXCIganNhY3Rpb249XCJjbGljazphNGZVd2RcIiBqc25hbWU9XCJHZUdIS2JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJEUHZ3WWMgdFJxYzNjXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YXJyb3dfYmFjazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlEzd3l5YlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ3dDeEZkXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAke2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfdWktY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmJyk7XG4gICAgICAgIGlmKCFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAvLyBSZVF1ZXJ5IGVsZW1lbnQgc2luY2Ugb3V0ZXJIVE1MIGJyZWFrcyBpdC5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG5cbiAgICAgICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7dGhpcy5pZH0gPiBoZWFkZXIgPiAucmt2VDdjYCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNsb3NlVGFiKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5UYWIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xuICAgIH1cblxuICAgIGNsb3NlVGFiKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuaW5mbygnQ2xvc2luZycsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xuICAgIH1cblxuICAgIG9uT3BlbihjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xuICAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMub3Blbkxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIG9uQ2xvc2UoY2FsbGJhY2s/OigpID0+IHZvaWQpIHtcbiAgICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXG4gICAgfVxufSIsImltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSBcIi4vVUlDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFVJUm93IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IFVJUm93T3B0aW9ucztcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogVUlSb3dPcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHA+JHt0aGlzLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfdWktcm93Jyk7XG4gICAgfVxuXG4gICAgZXhpc3RzKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVsb2FkKHRoaXMpO1xuICAgIH1cblxuICAgIGFwcGVuZChjb21wb25lbnQ6IFVJQ29tcG9uZW50LCB1c2VIcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmKHVzZUhyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVJUm93T3B0aW9ucyB7XG4gICAgb25DcmVhdGU/OiBGdW5jdGlvbjtcbiAgICBvbkRlc3Ryb3k/OiBGdW5jdGlvbjtcbiAgICBvblJlbG9hZD86IEZ1bmN0aW9uO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTW9kYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbmFja2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvL2Rvd25sb2FkLmpzIHY0LjIsIGJ5IGRhbmRhdmlzOyAyMDA4LTIwMTYuIFtDQ0JZMl0gc2VlIGh0dHA6Ly9kYW5tbC5jb20vZG93bmxvYWQuaHRtbCBmb3IgdGVzdHMvdXNhZ2Vcbi8vIHYxIGxhbmRlZCBhIEZGK0Nocm9tZSBjb21wYXQgd2F5IG9mIGRvd25sb2FkaW5nIHN0cmluZ3MgdG8gbG9jYWwgdW4tbmFtZWQgZmlsZXMsIHVwZ3JhZGVkIHRvIHVzZSBhIGhpZGRlbiBmcmFtZSBhbmQgb3B0aW9uYWwgbWltZVxuLy8gdjIgYWRkZWQgbmFtZWQgZmlsZXMgdmlhIGFbZG93bmxvYWRdLCBtc1NhdmVCbG9iLCBJRSAoMTArKSBzdXBwb3J0LCBhbmQgd2luZG93LlVSTCBzdXBwb3J0IGZvciBsYXJnZXIrZmFzdGVyIHNhdmVzIHRoYW4gZGF0YVVSTHNcbi8vIHYzIGFkZGVkIGRhdGFVUkwgYW5kIEJsb2IgSW5wdXQsIGJpbmQtdG9nZ2xlIGFyaXR5LCBhbmQgbGVnYWN5IGRhdGFVUkwgZmFsbGJhY2sgd2FzIGltcHJvdmVkIHdpdGggZm9yY2UtZG93bmxvYWQgbWltZSBhbmQgYmFzZTY0IHN1cHBvcnQuIDMuMSBpbXByb3ZlZCBzYWZhcmkgaGFuZGxpbmcuXG4vLyB2NCBhZGRzIEFNRC9VTUQsIGNvbW1vbkpTLCBhbmQgcGxhaW4gYnJvd3NlciBzdXBwb3J0XG4vLyB2NC4xIGFkZHMgdXJsIGRvd25sb2FkIGNhcGFiaWxpdHkgdmlhIHNvbG8gVVJMIGFyZ3VtZW50IChzYW1lIGRvbWFpbi9DT1JTIG9ubHkpXG4vLyB2NC4yIGFkZHMgc2VtYW50aWMgdmFyaWFibGUgbmFtZXMsIGxvbmcgKG92ZXIgMk1CKSBkYXRhVVJMIHN1cHBvcnQsIGFuZCBoaWRkZW4gYnkgZGVmYXVsdCB0ZW1wIGFuY2hvcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ybmRtZS9kb3dubG9hZFxuXG5sZXQgZG93bmxvYWRlciA9IHsgZG93bmxvYWQoY29udGVudCwgbmFtZSwgbWltZSkge30gfTtcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIGRvd25sb2FkZXIgPSB7IGRvd25sb2FkOiBmYWN0b3J5KCkgfTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBmdW5jdGlvbiBkb3dubG9hZChkYXRhLCBzdHJGaWxlTmFtZSwgc3RyTWltZVR5cGUpIHtcblxuICAgICAgICB2YXIgc2VsZiA9IHdpbmRvdywgLy8gdGhpcyBzY3JpcHQgaXMgb25seSBmb3IgYnJvd3NlcnMgYW55d2F5Li4uXG4gICAgICAgICAgICBkZWZhdWx0TWltZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIC8vIHRoaXMgZGVmYXVsdCBtaW1lIGFsc28gdHJpZ2dlcnMgaWZyYW1lIGRvd25sb2Fkc1xuICAgICAgICAgICAgbWltZVR5cGUgPSBzdHJNaW1lVHlwZSB8fCBkZWZhdWx0TWltZSxcbiAgICAgICAgICAgIHBheWxvYWQgPSBkYXRhLFxuICAgICAgICAgICAgdXJsID0gIXN0ckZpbGVOYW1lICYmICFzdHJNaW1lVHlwZSAmJiBwYXlsb2FkLFxuICAgICAgICAgICAgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXG4gICAgICAgICAgICB0b1N0cmluZyA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBTdHJpbmcoYSk7IH0sXG4gICAgICAgICAgICBteUJsb2IgPSAoc2VsZi5CbG9iIHx8IHNlbGYuTW96QmxvYiB8fCBzZWxmLldlYktpdEJsb2IgfHwgdG9TdHJpbmcpLFxuICAgICAgICAgICAgZmlsZU5hbWUgPSBzdHJGaWxlTmFtZSB8fCBcImRvd25sb2FkXCIsXG4gICAgICAgICAgICBibG9iLFxuICAgICAgICAgICAgcmVhZGVyO1xuICAgICAgICBteUJsb2IgPSBteUJsb2IuY2FsbCA/IG15QmxvYi5iaW5kKHNlbGYpIDogQmxvYjtcblxuICAgICAgICBpZiAoU3RyaW5nKHRoaXMpID09PSBcInRydWVcIikgeyAvL3JldmVyc2UgYXJndW1lbnRzLCBhbGxvd2luZyBkb3dubG9hZC5iaW5kKHRydWUsIFwidGV4dC94bWxcIiwgXCJleHBvcnQueG1sXCIpIHRvIGFjdCBhcyBhIGNhbGxiYWNrXG4gICAgICAgICAgICBwYXlsb2FkID0gW3BheWxvYWQsIG1pbWVUeXBlXTtcbiAgICAgICAgICAgIG1pbWVUeXBlID0gcGF5bG9hZFswXTtcbiAgICAgICAgICAgIHBheWxvYWQgPSBwYXlsb2FkWzFdO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodXJsICYmIHVybC5sZW5ndGggPCAyMDQ4KSB7IC8vIGlmIG5vIGZpbGVuYW1lIGFuZCBubyBtaW1lLCBhc3N1bWUgYSB1cmwgd2FzIHBhc3NlZCBhcyB0aGUgb25seSBhcmd1bWVudFxuICAgICAgICAgICAgZmlsZU5hbWUgPSB1cmwuc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgIGFuY2hvci5ocmVmID0gdXJsOyAvLyBhc3NpZ24gaHJlZiBwcm9wIHRvIHRlbXAgYW5jaG9yXG4gICAgICAgICAgICBpZiAoYW5jaG9yLmhyZWYuaW5kZXhPZih1cmwpICE9PSAtMSkgeyAvLyBpZiB0aGUgYnJvd3NlciBkZXRlcm1pbmVzIHRoYXQgaXQncyBhIHBvdGVudGlhbGx5IHZhbGlkIHVybCBwYXRoOlxuICAgICAgICAgICAgICAgIHZhciBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgYWpheC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYWpheC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgYWpheC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZChlLnRhcmdldC5yZXNwb25zZSwgZmlsZU5hbWUsIGRlZmF1bHRNaW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhamF4LnNlbmQoKTsgfSwgMCk7IC8vIGFsbG93cyBzZXR0aW5nIGN1c3RvbSBhamF4IGhlYWRlcnMgdXNpbmcgdGhlIHJldHVybjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheDtcbiAgICAgICAgICAgIH0gLy8gZW5kIGlmIHZhbGlkIHVybD9cbiAgICAgICAgfSAvLyBlbmQgaWYgdXJsP1xuXG5cbiAgICAgICAgLy9nbyBhaGVhZCBhbmQgZG93bmxvYWQgZGF0YVVSTHMgcmlnaHQgYXdheVxuICAgICAgICBpZiAoL15kYXRhXFw6W1xcdytcXC1dK1xcL1tcXHcrXFwtXStbLDtdLy50ZXN0KHBheWxvYWQpKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmxlbmd0aCA+ICgxMDI0ICogMTAyNCAqIDEuOTk5KSAmJiBteUJsb2IgIT09IHRvU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IGRhdGFVcmxUb0Jsb2IocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgbWltZVR5cGUgPSBwYXlsb2FkLnR5cGUgfHwgZGVmYXVsdE1pbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYiA/ICAvLyBJRTEwIGNhbid0IGRvIGFbZG93bmxvYWRdLCBvbmx5IEJsb2JzOlxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihkYXRhVXJsVG9CbG9iKHBheWxvYWQpLCBmaWxlTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICBzYXZlcihwYXlsb2FkKTsgLy8gZXZlcnlvbmUgZWxzZSBjYW4gc2F2ZSBkYXRhVVJMcyB1bi1wcm9jZXNzZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9Ly9lbmQgaWYgZGF0YVVSTCBwYXNzZWQ/XG5cbiAgICAgICAgYmxvYiA9IHBheWxvYWQgaW5zdGFuY2VvZiBteUJsb2IgP1xuICAgICAgICAgICAgcGF5bG9hZCA6XG4gICAgICAgICAgICBuZXcgbXlCbG9iKFtwYXlsb2FkXSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGRhdGFVcmxUb0Jsb2Ioc3RyVXJsKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBzdHJVcmwuc3BsaXQoL1s6OyxdLyksXG4gICAgICAgICAgICAgICAgdHlwZSA9IHBhcnRzWzFdLFxuICAgICAgICAgICAgICAgIGRlY29kZXIgPSBwYXJ0c1syXSA9PSBcImJhc2U2NFwiID8gYXRvYiA6IGRlY29kZVVSSUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBiaW5EYXRhID0gZGVjb2RlcihwYXJ0cy5wb3AoKSksXG4gICAgICAgICAgICAgICAgbXggPSBiaW5EYXRhLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICB1aUFyciA9IG5ldyBVaW50OEFycmF5KG14KTtcblxuICAgICAgICAgICAgZm9yIChpOyBpIDwgbXg7ICsraSkgdWlBcnJbaV0gPSBiaW5EYXRhLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgbXlCbG9iKFt1aUFycl0sIHsgdHlwZTogdHlwZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVyKHVybCwgd2luTW9kZSkge1xuXG4gICAgICAgICAgICBpZiAoJ2Rvd25sb2FkJyBpbiBhbmNob3IpIHsgLy9odG1sNSBBW2Rvd25sb2FkXVxuICAgICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9IFwiZG93bmxvYWQtanMtbGlua1wiO1xuICAgICAgICAgICAgICAgIGFuY2hvci5pbm5lckhUTUwgPSBcImRvd25sb2FkaW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgYW5jaG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5Nb2RlID09PSB0cnVlKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLlVSTC5yZXZva2VPYmplY3RVUkwoYW5jaG9yLmhyZWYpOyB9LCAyNTApOyB9XG4gICAgICAgICAgICAgICAgfSwgNjYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgbm9uLWFbZG93bmxvYWRdIHNhZmFyaSBhcyBiZXN0IHdlIGNhbjpcbiAgICAgICAgICAgIGlmICgvKFZlcnNpb24pXFwvKFxcZCspXFwuKFxcZCspKD86XFwuKFxcZCspKT8uKlNhZmFyaVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9eZGF0YTooW1xcd1xcL1xcLVxcK10rKS8sIGRlZmF1bHRNaW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5vcGVuKHVybCkpIHsgLy8gcG9wdXAgYmxvY2tlZCwgb2ZmZXIgZGlyZWN0IGRvd25sb2FkOlxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybShcIkRpc3BsYXlpbmcgTmV3IERvY3VtZW50XFxuXFxuVXNlIFNhdmUgQXMuLi4gdG8gZG93bmxvYWQsIHRoZW4gY2xpY2sgYmFjayB0byByZXR1cm4gdG8gdGhpcyBwYWdlLlwiKSkgeyBsb2NhdGlvbi5ocmVmID0gdXJsOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2RvIGlmcmFtZSBkYXRhVVJMIGRvd25sb2FkIChvbGQgY2grRkYpOlxuICAgICAgICAgICAgdmFyIGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5Nb2RlKSB7IC8vIGZvcmNlIGEgbWltZSB0aGF0IHdpbGwgZG93bmxvYWQ6XG4gICAgICAgICAgICAgICAgdXJsID0gXCJkYXRhOlwiICsgdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZi5zcmMgPSB1cmw7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmKTsgfSwgMzMzKTtcblxuICAgICAgICB9Ly9lbmQgc2F2ZXJcblxuXG5cblxuICAgICAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMCsgOiAoaGFzIEJsb2IsIGJ1dCBub3QgYVtkb3dubG9hZF0gb3IgVVJMKVxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLlVSTCkgeyAvLyBzaW1wbGUgZmFzdCBhbmQgbW9kZXJuIHdheSB1c2luZyBCbG9iIGFuZCBVUkw6XG4gICAgICAgICAgICBzYXZlcihzZWxmLlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaGFuZGxlIG5vbi1CbG9iKCkrbm9uLVVSTCBicm93c2VyczpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvYiA9PT0gXCJzdHJpbmdcIiB8fCBibG9iLmNvbnN0cnVjdG9yID09PSB0b1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzYXZlcihcImRhdGE6XCIgKyBtaW1lVHlwZSArIFwiO2Jhc2U2NCxcIiArIHNlbGYuYnRvYShibG9iKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZXIoXCJkYXRhOlwiICsgbWltZVR5cGUgKyBcIixcIiArIGVuY29kZVVSSUNvbXBvbmVudChibG9iKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCbG9iIGJ1dCBub3QgVVJMIHN1cHBvcnQ6XG4gICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2F2ZXIodGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07IC8qIGVuZCBkb3dubG9hZCgpICovXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==