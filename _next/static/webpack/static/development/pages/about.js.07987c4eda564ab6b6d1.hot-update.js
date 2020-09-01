webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./layout/MultiObjectsGallery.js":
/*!***************************************!*\
  !*** ./layout/MultiObjectsGallery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return multiObjectsGallery; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\DEV\\wenwen-website\\layout\\MultiObjectsGallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var multiObjectsGallery = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(multiObjectsGallery, _React$Component);

  var _super = _createSuper(multiObjectsGallery);

  function multiObjectsGallery() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, multiObjectsGallery);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(multiObjectsGallery, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          galleryData = _this$props.galleryData,
          openProject = _this$props.openProject;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 7
        }
      }, galleryData.content.map(function (element) {
        var picUrl = element.pictures !== undefined ? "static/pics/".concat(galleryData.url, "/").concat(element.url, "/th/").concat(element.pictures[0]) : "static/pics/".concat(galleryData.url, "/").concat(element.url, "/th/default.jpg");
        return __jsx("section", {
          key: element.url,
          className: "jsx-2572049295",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "jsx-2572049295" + " " + "project",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }
        }, __jsx("a", {
          onClick: function onClick(event) {
            return openProject(event, element, "multipleObjectsGallery", 0);
          },
          className: "jsx-2572049295",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: picUrl,
          className: "jsx-2572049295",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 19
          }
        })), __jsx("h1", {
          className: "jsx-2572049295",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }
        }, element.name)));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2572049295",
        __self: this
      }, "img.jsx-2572049295{width:100%;height:auto;cursor:pointer;}h1.jsx-2572049295{margin:0 0 0 -2px;padding-right:30px;line-height:1em;font-size:1.1em;padding-top:7px;}p.jsx-2572049295{color:white;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXE11bHRpT2JqZWN0c0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JXLEFBRzBCLEFBTU8sQUFPTixXQVpBLENBYUMsTUFQTSxLQUxKLEVBYWpCLFlBUGtCLENBTGxCLGVBTWtCLGdCQUNBLGdCQUNsQiIsImZpbGUiOiJEOlxcREVWXFx3ZW53ZW4td2Vic2l0ZVxcbGF5b3V0XFxNdWx0aU9iamVjdHNHYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXVsdGlPYmplY3RzR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBnYWxsZXJ5RGF0YSwgb3BlblByb2plY3QgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7Z2FsbGVyeURhdGEuY29udGVudC5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwaWNVcmwgPVxyXG4gICAgICAgICAgICBlbGVtZW50LnBpY3R1cmVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICA/IGBzdGF0aWMvcGljcy8ke2dhbGxlcnlEYXRhLnVybH0vJHtlbGVtZW50LnVybH0vdGgvJHtlbGVtZW50LnBpY3R1cmVzWzBdfWBcclxuICAgICAgICAgICAgICA6IGBzdGF0aWMvcGljcy8ke2dhbGxlcnlEYXRhLnVybH0vJHtlbGVtZW50LnVybH0vdGgvZGVmYXVsdC5qcGdgXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2VsZW1lbnQudXJsfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2V2ZW50ID0+IG9wZW5Qcm9qZWN0KGV2ZW50LCBlbGVtZW50LCBcIm11bHRpcGxlT2JqZWN0c0dhbGxlcnlcIiAsMCl9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgxPntlbGVtZW50Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0ycHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\MultiObjectsGallery.js */"));
    }
  }]);

  return multiObjectsGallery;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJtdWx0aU9iamVjdHNHYWxsZXJ5IiwicHJvcHMiLCJnYWxsZXJ5RGF0YSIsIm9wZW5Qcm9qZWN0IiwiY29udGVudCIsIm1hcCIsImVsZW1lbnQiLCJwaWNVcmwiLCJwaWN0dXJlcyIsInVuZGVmaW5lZCIsInVybCIsImV2ZW50IiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsbUI7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQTs7QUFBQSx3QkFDOEIsS0FBS0MsS0FEbkM7QUFBQSxVQUNDQyxXQURELGVBQ0NBLFdBREQ7QUFBQSxVQUNjQyxXQURkLGVBQ2NBLFdBRGQ7QUFFUCxhQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0QsV0FBVyxDQUFDRSxPQUFaLENBQW9CQyxHQUFwQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDbEMsWUFBTUMsTUFBTSxHQUNWRCxPQUFPLENBQUNFLFFBQVIsS0FBcUJDLFNBQXJCLHlCQUNtQlAsV0FBVyxDQUFDUSxHQUQvQixjQUNzQ0osT0FBTyxDQUFDSSxHQUQ5QyxpQkFDd0RKLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQixDQUFqQixDQUR4RCwwQkFFbUJOLFdBQVcsQ0FBQ1EsR0FGL0IsY0FFc0NKLE9BQU8sQ0FBQ0ksR0FGOUMsb0JBREY7QUFJQSxlQUNFO0FBQVMsYUFBRyxFQUFFSixPQUFPLENBQUNJLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUEsOENBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBRyxpQkFBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsbUJBQUlSLFdBQVcsQ0FBQ1EsS0FBRCxFQUFRTCxPQUFSLEVBQWlCLHdCQUFqQixFQUEyQyxDQUEzQyxDQUFmO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUVDLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLRCxPQUFPLENBQUNNLElBQWIsQ0FKRixDQURGLENBREY7QUFVRCxPQWZBLENBREg7QUFBQTtBQUFBO0FBQUEscW5GQURGO0FBeUNEOzs7O0VBNUM4Q0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMuMDc5ODdjNGVkYTU2NGFiNmI2ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIG11bHRpT2JqZWN0c0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZ2FsbGVyeURhdGEsIG9wZW5Qcm9qZWN0IH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge2dhbGxlcnlEYXRhLmNvbnRlbnQubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcGljVXJsID1cclxuICAgICAgICAgICAgZWxlbWVudC5waWN0dXJlcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBgc3RhdGljL3BpY3MvJHtnYWxsZXJ5RGF0YS51cmx9LyR7ZWxlbWVudC51cmx9L3RoLyR7ZWxlbWVudC5waWN0dXJlc1swXX1gXHJcbiAgICAgICAgICAgICAgOiBgc3RhdGljL3BpY3MvJHtnYWxsZXJ5RGF0YS51cmx9LyR7ZWxlbWVudC51cmx9L3RoL2RlZmF1bHQuanBnYFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtlbGVtZW50LnVybH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtldmVudCA9PiBvcGVuUHJvamVjdChldmVudCwgZWxlbWVudCwgXCJtdWx0aXBsZU9iamVjdHNHYWxsZXJ5XCIgLDApfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY1VybH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxoMT57ZWxlbWVudC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9