webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./layout/Layout.js":
/*!**************************!*\
  !*** ./layout/Layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./layout/Header.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Main */ "./layout/Main.js");
/* harmony import */ var _content_contentTree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../content/contentTree */ "./content/contentTree.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "D:\\DEV\\wenwen-website\\layout\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






next_router__WEBPACK_IMPORTED_MODULE_13___default.a.events.on("routeChangeStart", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_13___default.a.events.on("routeChangeComplete", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_13___default.a.events.on("routeChangeError", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
});

var Layout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getInfo", function (pageName) {
      var toReturn;
      _content_contentTree__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (object) {
        if (object.url === pageName) {
          toReturn = object;
        }
      });
      return toReturn;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          galleryName = _this$props.galleryName;
      var galleryData = this.getInfo(galleryName);
      return __jsx("div", {
        id: "generalContainer",
        className: "jsx-2737799087",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, galleryData && __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Wenwen - ".concat(galleryData.name),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      }), galleryData && __jsx(_Main__WEBPACK_IMPORTED_MODULE_10__["default"], {
        galleryData: galleryData,
        galleryName: galleryName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }), !galleryData && __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Wenwen - About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 26
        }
      }), !galleryData && children, __jsx("div", {
        id: "footer",
        className: "jsx-2737799087",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, "All Rights Reserved . Powered by W. 2020"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2737799087",
        __self: this
      }, "#generalContainer.jsx-2737799087{display:grid;grid-template-columns:minmax(250px,1fr) repeat(3,1fr);grid-template-areas:\"header body body body\" \"footer footer footer footer\";min-height:100vh;}#footer.jsx-2737799087{grid-area:footer;}@media only screen and (max-width:600px){div.jsx-2737799087{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1csQUFHNEIsQUFRSSxBQUtELGFBWndDLENBYXhELEdBTEYsa0RBTnFELDBFQUNsQyxpQkFDbkIiLCJmaWxlIjoiRDpcXERFVlxcd2Vud2VuLXdlYnNpdGVcXGxheW91dFxcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIlxyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCJcclxuaW1wb3J0IGNvbnRlbnRUcmVlIGZyb20gXCIuLi9jb250ZW50L2NvbnRlbnRUcmVlXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGdldEluZm8gPSBwYWdlTmFtZSA9PiB7XHJcbiAgICBsZXQgdG9SZXR1cm5cclxuICAgIGNvbnRlbnRUcmVlLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICBpZiAob2JqZWN0LnVybCA9PT0gcGFnZU5hbWUpIHtcclxuICAgICAgICB0b1JldHVybiA9IG9iamVjdFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRvUmV0dXJuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBnYWxsZXJ5TmFtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgZ2FsbGVyeURhdGEgPSB0aGlzLmdldEluZm8oZ2FsbGVyeU5hbWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImdlbmVyYWxDb250YWluZXJcIj5cclxuICAgICAgICB7Z2FsbGVyeURhdGEgJiYgPEhlYWRlciB0aXRsZT17YFdlbndlbiAtICR7Z2FsbGVyeURhdGEubmFtZX1gfSAvPn1cclxuICAgICAgICB7Z2FsbGVyeURhdGEgJiYgKFxyXG4gICAgICAgICAgPE1haW4gZ2FsbGVyeURhdGE9e2dhbGxlcnlEYXRhfSBnYWxsZXJ5TmFtZT17Z2FsbGVyeU5hbWV9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWdhbGxlcnlEYXRhICYmIDxIZWFkZXIgdGl0bGU9XCJXZW53ZW4gLSBBYm91dFwiIC8+fVxyXG4gICAgICAgIHshZ2FsbGVyeURhdGEgJiYgY2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPkFsbCBSaWdodHMgUmVzZXJ2ZWQgLiBQb3dlcmVkIGJ5IFcuIDIwMjA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgI2dlbmVyYWxDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDFmcikgcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgYm9keSBib2R5IGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9vdGVye1xyXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTGF5b3V0IiwicGFnZU5hbWUiLCJ0b1JldHVybiIsImNvbnRlbnRUcmVlIiwibWFwIiwib2JqZWN0IiwidXJsIiwicHJvcHMiLCJjaGlsZHJlbiIsImdhbGxlcnlOYW1lIiwiZ2FsbGVyeURhdGEiLCJnZXRJbmZvIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxtREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUMsaURBQVMsQ0FBQ0MsS0FBVixFQUFOO0FBQUEsQ0FBckM7QUFDQUosbURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLFNBQU1DLGlEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXhDO0FBQ0FMLG1EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxpREFBUyxDQUFDRSxJQUFWLEVBQU47QUFBQSxDQUFyQzs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7Ozs7a05BQ1QsVUFBQUMsUUFBUSxFQUFJO0FBQ3BCLFVBQUlDLFFBQUo7QUFDQUMsbUVBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDeEIsWUFBSUEsTUFBTSxDQUFDQyxHQUFQLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCQyxrQkFBUSxHQUFHRyxNQUFYO0FBQ0Q7QUFDRixPQUpEO0FBS0EsYUFBT0gsUUFBUDtBQUNELEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDMkIsS0FBS0ssS0FEaEM7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxXQURYLGVBQ1dBLFdBRFg7QUFFUCxVQUFNQyxXQUFXLEdBQUcsS0FBS0MsT0FBTCxDQUFhRixXQUFiLENBQXBCO0FBRUEsYUFDRTtBQUFLLFVBQUUsRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsV0FBVyxJQUFJLE1BQUMsK0NBQUQ7QUFBUSxhQUFLLHFCQUFjQSxXQUFXLENBQUNFLElBQTFCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURsQixFQUVHRixXQUFXLElBQ1YsTUFBQyw4Q0FBRDtBQUFNLG1CQUFXLEVBQUVBLFdBQW5CO0FBQWdDLG1CQUFXLEVBQUVELFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixFQUtHLENBQUNDLFdBQUQsSUFBZ0IsTUFBQywrQ0FBRDtBQUFRLGFBQUssRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTG5CLEVBTUcsQ0FBQ0EsV0FBRCxJQUFnQkYsUUFObkIsRUFPRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFQRjtBQUFBO0FBQUE7QUFBQSxndkdBREY7QUFnQ0Q7Ozs7RUEvQ2lDSyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMzNiZTlhOWEzMTMzOGJmOGIzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIlxyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCJcclxuaW1wb3J0IGNvbnRlbnRUcmVlIGZyb20gXCIuLi9jb250ZW50L2NvbnRlbnRUcmVlXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGdldEluZm8gPSBwYWdlTmFtZSA9PiB7XHJcbiAgICBsZXQgdG9SZXR1cm5cclxuICAgIGNvbnRlbnRUcmVlLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICBpZiAob2JqZWN0LnVybCA9PT0gcGFnZU5hbWUpIHtcclxuICAgICAgICB0b1JldHVybiA9IG9iamVjdFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRvUmV0dXJuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBnYWxsZXJ5TmFtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgZ2FsbGVyeURhdGEgPSB0aGlzLmdldEluZm8oZ2FsbGVyeU5hbWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImdlbmVyYWxDb250YWluZXJcIj5cclxuICAgICAgICB7Z2FsbGVyeURhdGEgJiYgPEhlYWRlciB0aXRsZT17YFdlbndlbiAtICR7Z2FsbGVyeURhdGEubmFtZX1gfSAvPn1cclxuICAgICAgICB7Z2FsbGVyeURhdGEgJiYgKFxyXG4gICAgICAgICAgPE1haW4gZ2FsbGVyeURhdGE9e2dhbGxlcnlEYXRhfSBnYWxsZXJ5TmFtZT17Z2FsbGVyeU5hbWV9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWdhbGxlcnlEYXRhICYmIDxIZWFkZXIgdGl0bGU9XCJXZW53ZW4gLSBBYm91dFwiIC8+fVxyXG4gICAgICAgIHshZ2FsbGVyeURhdGEgJiYgY2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPkFsbCBSaWdodHMgUmVzZXJ2ZWQgLiBQb3dlcmVkIGJ5IFcuIDIwMjA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgI2dlbmVyYWxDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDFmcikgcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgYm9keSBib2R5IGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9vdGVye1xyXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==