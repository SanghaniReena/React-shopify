webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Configuration.js":
/*!********************************!*\
  !*** ./pages/Configuration.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _pages_Actions_ConfigurationAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Actions/ConfigurationAction */ "./pages/Actions/ConfigurationAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var Configuration =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Configuration, _Component);

  function Configuration(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Configuration);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Configuration).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnChange", function (e, key) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key, e.target.value), function () {
        return console.log("selected----", _this.state.buttonType);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      var buttonType = _this.state.buttonType;
      console.log("selected", buttonType);
    });

    _this.state = {
      buttonType: 'option1'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Configuration, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", null, __jsx("div", {
        className: "enable-disable"
      }, __jsx("p", null, "Your Share Button is currently disable"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], null, "Enable")), __jsx("div", {
        className: "all-main-container"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        tag: "fieldset"
      }, __jsx("p", null, "Select WhatsApp Share button "), __jsx("div", {
        style: {
          display: "flex"
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        check: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        check: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "radio",
        name: "radio1",
        value: "option1",
        onChange: function onChange(e) {
          return _this2.handleOnChange(e, "buttonType");
        }
      }), ' ', __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsapp"], {
        color: "green",
        size: "2.5em"
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        check: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        check: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "radio",
        name: "radio1",
        value: "option2",
        onChange: function onChange(e) {
          return _this2.handleOnChange(e, "buttonType");
        }
      }), ' ', __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsappSquare"], {
        color: "green",
        size: "2.5em"
      }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          return _this2.handleSubmit();
        }
      }, "Submit"))));
    }
  }]);

  return Configuration;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    ConfigData: state.ConfigurationReducer.WA_config
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
    SubmitConfiguration: _pages_Actions_ConfigurationAction__WEBPACK_IMPORTED_MODULE_12__["SubmitConfiguration"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(Configuration));

/***/ })

})
//# sourceMappingURL=index.js.78aacd0ccbdc32364b78.hot-update.js.map