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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import createClass from 'create-react-class';
// import PropTypes from 'prop-types';
// import Select from 'react-select-plus';

// window.react = React
// var createClass = React.createClass
// var PropTypes = React.PropTypes
// var Select = null;

// http://isto.ie/json/tariff_skills.json

var ShapeBtn = function ShapeBtn(_ref) {
  var shape = _ref.shape;
  return shape == null ? React.createElement(
    "button",
    { className: "btn btn-secondary", disabled: true },
    "T"
  ) : React.createElement(
    "button",
    { className: "btn btn-secondary" },
    shape
  );
};

var TariffValue = function TariffValue(_ref2) {
  var tariff = _ref2.tariff;
  return React.createElement("input", { type: "text", className: "form-control tariff-value", value: tariff.toFixed(1), disabled: true });
};

var Row = function Row(_ref3) {
  var options = _ref3.options,
      onChange = _ref3.onChange,
      skill = _ref3.skill,
      tariff = _ref3.tariff,
      shape = _ref3.shape;
  return React.createElement(
    "li",
    null,
    React.createElement(
      "select",
      { className: "custom-select", onChange: onChange, value: skill },
      React.createElement(
        "option",
        { value: "Tuck Jump" },
        "Tuck Jump"
      ),
      React.createElement(
        "option",
        { value: "Straddle Jump" },
        "Straddle Jump"
      ),
      options
    ),
    React.createElement(ShapeBtn, { shape: shape }),
    React.createElement(TariffValue, { tariff: tariff })
  );
};

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this));

    _this.state = {
      skills: Array(10).fill("Tuck Jump"),
      shapes: Array(10).fill(null), // Null, T,P,S
      tariffs: Array(10).fill(0.0)
    };

    return _this;
  }

  _createClass(Calculator, [{
    key: "handleChange",
    value: function handleChange(i, event) {
      var skills = this.state.skills.slice();
      skills[i] = event.target.value;
      // Look up selection in list
      this.setState({ skills: skills });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.rows = [];

      var _loop = function _loop(i) {
        _this2.rows.push(React.createElement(Row, { key: i,
          onChange: function onChange(event) {
            return _this2.handleChange(i, event);
          },
          skill: _this2.state.skills[i],
          shape: _this2.state.shapes[i],
          tariff: _this2.state.tariffs[i]
        }));
      };

      for (var i = 0; i < 10; i++) {
        _loop(i);
      }

      return React.createElement(
        "form",
        { className: "form-inline" },
        React.createElement(
          "ol",
          null,
          this.rows
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('react-container'));

/***/ })
/******/ ]);