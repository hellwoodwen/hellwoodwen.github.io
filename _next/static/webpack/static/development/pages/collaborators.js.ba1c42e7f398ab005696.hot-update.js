webpackHotUpdate("static\\development\\pages\\collaborators.js",{

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
        className: "jsx-562670196",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, galleryData && __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Wenwen - ".concat(galleryData.name),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 32
        }
      }), galleryData && __jsx(_Main__WEBPACK_IMPORTED_MODULE_10__["default"], {
        galleryData: galleryData,
        galleryName: galleryName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }), !galleryData && __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Wenwen - About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 34
        }
      }), "}", !galleryData && children, __jsx("div", {
        id: "footer",
        className: "jsx-562670196",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "All rights reserved \xA9. Powered by W. 2020"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "562670196",
        __self: this
      }, "#generalContainer.jsx-562670196{display:grid;grid-template-columns:minmax(250px,1fr) repeat(3,1fr);grid-template-areas:\"header body body body\" \"footer footer footer footer\";min-height:100vh;}#footer.jsx-562670196{grid-area:footer;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:small;color:gray;}@media only screen and (max-width:600px){div.jsx-562670196{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHFCLEFBRzRCLEFBUUksQUFXRCxhQWxCd0MsQ0FtQnhELEdBWFksWUFDQyxzQ0FQc0Msb0NBUWhDLHNDQVBGLGlCQUNuQixzQ0FPeUIsbUdBQ1AsZ0JBQ0wsV0FDYiIsImZpbGUiOiJEOlxcREVWXFx3ZW53ZW4td2Vic2l0ZVxcbGF5b3V0XFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXHJcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIlxyXG5pbXBvcnQgY29udGVudFRyZWUgZnJvbSBcIi4uL2NvbnRlbnQvY29udGVudFRyZWVcIlxyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBnZXRJbmZvID0gcGFnZU5hbWUgPT4ge1xyXG4gICAgICAgIGxldCB0b1JldHVyblxyXG4gICAgICAgIGNvbnRlbnRUcmVlLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnVybCA9PT0gcGFnZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gb2JqZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0b1JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGdhbGxlcnlOYW1lfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBnYWxsZXJ5RGF0YSA9IHRoaXMuZ2V0SW5mbyhnYWxsZXJ5TmFtZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImdlbmVyYWxDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlEYXRhICYmIDxIZWFkZXIgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGBXZW53ZW4gLSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5RGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW4gZ2FsbGVyeURhdGE9e2dhbGxlcnlEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5TmFtZT17Z2FsbGVyeU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgISBnYWxsZXJ5RGF0YSAmJiA8SGVhZGVyIHRpdGxlPVwiV2Vud2VuIC0gQWJvdXRcIi8+fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhIGdhbGxlcnlEYXRhICYmIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5BbGwgcmlnaHRzIHJlc2VydmVkIMKpLiBQb3dlcmVkIGJ5IFcuIDIwMjA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgI2dlbmVyYWxDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDFmcikgcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgYm9keSBib2R5IGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9vdGVye1xyXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\Layout.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTGF5b3V0IiwicGFnZU5hbWUiLCJ0b1JldHVybiIsImNvbnRlbnRUcmVlIiwibWFwIiwib2JqZWN0IiwidXJsIiwicHJvcHMiLCJjaGlsZHJlbiIsImdhbGxlcnlOYW1lIiwiZ2FsbGVyeURhdGEiLCJnZXRJbmZvIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxtREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUMsaURBQVMsQ0FBQ0MsS0FBVixFQUFOO0FBQUEsQ0FBckM7QUFDQUosbURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLFNBQU1DLGlEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXhDO0FBQ0FMLG1EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxpREFBUyxDQUFDRSxJQUFWLEVBQU47QUFBQSxDQUFyQzs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7Ozs7a05BQ1AsVUFBQUMsUUFBUSxFQUFJO0FBQ2xCLFVBQUlDLFFBQUo7QUFDQUMsbUVBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDdEIsWUFBSUEsTUFBTSxDQUFDQyxHQUFQLEtBQWVMLFFBQW5CLEVBQTZCO0FBQ3pCQyxrQkFBUSxHQUFHRyxNQUFYO0FBQ0g7QUFDSixPQUpEO0FBS0EsYUFBT0gsUUFBUDtBQUNILEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDMkIsS0FBS0ssS0FEaEM7QUFBQSxVQUNFQyxRQURGLGVBQ0VBLFFBREY7QUFBQSxVQUNZQyxXQURaLGVBQ1lBLFdBRFo7QUFFTCxVQUFNQyxXQUFXLEdBQUcsS0FBS0MsT0FBTCxDQUFhRixXQUFiLENBQXBCO0FBRUEsYUFDSTtBQUFLLFVBQUUsRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSUMsV0FBVyxJQUFJLE1BQUMsK0NBQUQ7QUFBUSxhQUFLLHFCQUVwQkEsV0FBVyxDQUFDRSxJQUZRLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZuQixFQVNJRixXQUFXLElBQ1AsTUFBQyw4Q0FBRDtBQUFNLG1CQUFXLEVBQUVBLFdBQW5CO0FBQ0ksbUJBQVcsRUFBRUQsV0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZSLEVBZUksQ0FBRUMsV0FBRixJQUFpQixNQUFDLCtDQUFEO0FBQVEsYUFBSyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFmckIsT0FrQkksQ0FBRUEsV0FBRixJQUFpQkYsUUFsQnJCLEVBb0JJO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQXBCSjtBQUFBO0FBQUE7QUFBQSxrNElBREo7QUFrREg7Ozs7RUFqRStCSyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb2xsYWJvcmF0b3JzLmpzLmJhMWM0MmU3ZjM5OGFiMDA1Njk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXHJcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIlxyXG5pbXBvcnQgY29udGVudFRyZWUgZnJvbSBcIi4uL2NvbnRlbnQvY29udGVudFRyZWVcIlxyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBnZXRJbmZvID0gcGFnZU5hbWUgPT4ge1xyXG4gICAgICAgIGxldCB0b1JldHVyblxyXG4gICAgICAgIGNvbnRlbnRUcmVlLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnVybCA9PT0gcGFnZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gb2JqZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0b1JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGdhbGxlcnlOYW1lfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBnYWxsZXJ5RGF0YSA9IHRoaXMuZ2V0SW5mbyhnYWxsZXJ5TmFtZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImdlbmVyYWxDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlEYXRhICYmIDxIZWFkZXIgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGBXZW53ZW4gLSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5RGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW4gZ2FsbGVyeURhdGE9e2dhbGxlcnlEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5TmFtZT17Z2FsbGVyeU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgISBnYWxsZXJ5RGF0YSAmJiA8SGVhZGVyIHRpdGxlPVwiV2Vud2VuIC0gQWJvdXRcIi8+fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhIGdhbGxlcnlEYXRhICYmIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5BbGwgcmlnaHRzIHJlc2VydmVkIMKpLiBQb3dlcmVkIGJ5IFcuIDIwMjA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgI2dlbmVyYWxDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDFmcikgcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgYm9keSBib2R5IGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZm9vdGVye1xyXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9