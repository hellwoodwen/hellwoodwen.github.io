webpackHotUpdate("static\\development\\pages\\collaborators.js",{

/***/ "./layout/Header.js":
/*!**************************!*\
  !*** ./layout/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _content_contentTree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/contentTree */ "./content/contentTree.js");
/* harmony import */ var _LinksActiver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LinksActiver */ "./layout/LinksActiver.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "D:\\DEV\\wenwen-website\\layout\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "openNav", function (event) {
      event.preventDefault();
      var navClass = _this.state.navState === "hidden" ? "visible" : "hidden";

      _this.setState({
        navState: navClass
      });
    });

    _this.state = {
      navState: "hidden"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var title = this.props.title;
      var navState = this.state.navState;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, " ", title, " "), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "static/favicon3.ico",
        type: "image/x-icon",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "icon",
        href: "static/favicon3.ico",
        type: "image/x-icon",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/styles.css",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "/static/css/nprogress.css",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      })), __jsx("header", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "hero",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "WenWen"))), __jsx("a", {
        id: "openNav",
        onClick: function onClick(e) {
          return _this2.openNav(e);
        },
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "Open Nav")), __jsx("nav", {
        className: "jsx-366857870" + " " + (navState || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }, "Works"), __jsx("ul", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }
      }, _content_contentTree__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (element, index) {
        var className = "";
        var url = index === 0 ? "/" : "/".concat(element.url);
        return __jsx("li", {
          key: url,
          className: "jsx-366857870",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }
        }, __jsx(_LinksActiver__WEBPACK_IMPORTED_MODULE_11__["default"], {
          href: url,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 23
          }
        }, " ", element.name, " "));
      })), __jsx("li", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "about",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, "About")), __jsx("li", {
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "collaborators",
        className: "jsx-366857870",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, "Collaborators"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "366857870",
        __self: this
      }, "header.jsx-366857870{grid-area:header;}h1.jsx-366857870{text-align:center;margin:50px 40px 1px;border-bottom:1px solid #c4c4c4;line-height:28px;}h1.jsx-366857870 a.jsx-366857870{-webkit-text-decoration:none;text-decoration:none;font-family:raleway-black;color:#000000;}ul.jsx-366857870{margin-right:0;margin-bottom:0;margin-left:0;padding:30px 0 0;}li.jsx-366857870{margin-left:50px;list-style:none;font:1.1em raleway-semibold;margin-bottom:17px;}ul.jsx-366857870 ul.jsx-366857870{padding:0 0 20px;}ul.jsx-366857870 ul.jsx-366857870 li.jsx-366857870{font:0.9em raleway-light;padding-left:15px;}@media only screen and (max-width:600px){header.jsx-366857870{width:100vw;position:absolute;z-index:1;background-color:#ffffff;}h1.jsx-366857870{margin:0;padding:12px 0 5px 15px;float:left;border-bottom:none;}#openNav.jsx-366857870{background:url(static/css/menu.gif) 90% 18px no-repeat;float:right;height:36px;width:202px;text-indent:-1000px;}header.jsx-366857870 div.jsx-366857870{height:50px;}nav.jsx-366857870{display:none;}nav.visible.jsx-366857870{display:block;}#hero.jsx-366857870{border-bottom:1px solid #c4c4c4;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRVcsQUFHZ0MsQUFHQyxBQU1HLEFBS04sQUFPRSxBQU9BLEFBSVEsQUFNWCxBQU9ILEFBTzhDLEFBUTNDLEFBSUMsQUFJQyxBQUlrQixTQTFCUixHQVBOLEFBc0JwQixDQUlBLENBSUEsQ0F0RGdCLEVBZGxCLEFBcUJrQixBQU9sQixDQXpCdUIsT0E2QkgsS0FPTixDQXhCRSxDQXlEZCxDQWxENEIsQUF3QmYsTUExQ21CLENBb0NMLEdBUDdCLENBY3VCLENBL0JKLEtBUFMsS0EyQ1osTUE3QkssQ0FOckIsQ0ErQkUsRUFQQSxFQVljLElBaERHLEtBS0gsR0E0Q0EsQ0E5QmhCLFFBbEJBLEVBS0EsQ0E0Q3dCLG9CQUN0QiIsImZpbGUiOiJEOlxcREVWXFx3ZW53ZW4td2Vic2l0ZVxcbGF5b3V0XFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IGNvbnRlbnRUcmVlIGZyb20gXCIuLi9jb250ZW50L2NvbnRlbnRUcmVlXCJcclxuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSBcIi4vTGlua3NBY3RpdmVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IG5hdlN0YXRlOiBcImhpZGRlblwiIH1cclxuICB9XHJcblxyXG4gIG9wZW5OYXYgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuYXZDbGFzcyA9IHRoaXMuc3RhdGUubmF2U3RhdGUgPT09IFwiaGlkZGVuXCIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYXZTdGF0ZTogbmF2Q2xhc3NcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IG5hdlN0YXRlIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+IHt0aXRsZX0gPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcclxuICAgICAgICAgICAgaHJlZj1cInN0YXRpYy9mYXZpY29uMy5pY29cIlxyXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cInN0YXRpYy9mYXZpY29uMy5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3NcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImhlcm9cIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5XZW5XZW48L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8YSBpZD1cIm9wZW5OYXZcIiBvbkNsaWNrPXtlID0+IHRoaXMub3Blbk5hdihlKX0+XHJcbiAgICAgICAgICAgICAgT3BlbiBOYXZcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17bmF2U3RhdGV9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPldvcmtzPC9saT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudFRyZWUubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGluZGV4ID09PSAwID8gXCIvXCIgOiBgLyR7ZWxlbWVudC51cmx9YFxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXt1cmx9PiB7ZWxlbWVudC5uYW1lfSA8L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjb2xsYWJvcmF0b3JzXCI+Q29sbGFib3JhdG9yczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDQwcHggMXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIGEge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogcmFsZXdheS1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQ6IDEuMWVtIHJhbGV3YXktc2VtaWJvbGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwgdWwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB1bCBsaSB7XHJcbiAgICAgICAgICAgICAgZm9udDogMC45ZW0gcmFsZXdheS1saWdodDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgNXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjb3Blbk5hdiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoc3RhdGljL2Nzcy9tZW51LmdpZikgOTAlIDE4cHggbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC0xMDAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBoZWFkZXIgZGl2IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbmF2LnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjaGVybyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\Header.js */"));
    }
  }]);

  return Header;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdkNsYXNzIiwic3RhdGUiLCJuYXZTdGF0ZSIsInNldFN0YXRlIiwidGl0bGUiLCJlIiwib3Blbk5hdiIsImNvbnRlbnRUcmVlIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiY2xhc3NOYW1lIiwidXJsIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE07Ozs7O0FBQ25CLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixrTkFLVCxVQUFBQyxLQUFLLEVBQUk7QUFDakJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFLQyxLQUFMLENBQVdDLFFBQVgsS0FBd0IsUUFBeEIsR0FBbUMsU0FBbkMsR0FBK0MsUUFBaEU7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFRLEVBQUVGO0FBREUsT0FBZDtBQUdELEtBWGtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBYjtBQUZpQjtBQUdsQjs7Ozs2QkFVUTtBQUFBOztBQUFBLFVBQ0NFLEtBREQsR0FDVyxLQUFLUCxLQURoQixDQUNDTyxLQUREO0FBQUEsVUFFQ0YsUUFGRCxHQUVjLEtBQUtELEtBRm5CLENBRUNDLFFBRkQ7QUFHUCxhQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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eUJBREYsQ0FoQkYsQ0FERixDQVhGLENBcEJGO0FBQUE7QUFBQTtBQUFBLDQ5UEFERjtBQTBJRDs7OztFQTNKaUNDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbGxhYm9yYXRvcnMuanMuNDJlODQ5MTdhZGNlYzMyY2U2MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgY29udGVudFRyZWUgZnJvbSBcIi4uL2NvbnRlbnQvY29udGVudFRyZWVcIlxyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi9MaW5rc0FjdGl2ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgbmF2U3RhdGU6IFwiaGlkZGVuXCIgfVxyXG4gIH1cclxuXHJcbiAgb3Blbk5hdiA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5hdkNsYXNzID0gdGhpcy5zdGF0ZS5uYXZTdGF0ZSA9PT0gXCJoaWRkZW5cIiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hdlN0YXRlOiBuYXZDbGFzc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgbmF2U3RhdGUgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT4ge3RpdGxlfSA8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2Zhdmljb24zLmljb1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwic3RhdGljL2Zhdmljb24zLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIj48L2xpbms+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvbnByb2dyZXNzLmNzc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGVyb1wiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPldlbldlbjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxhIGlkPVwib3Blbk5hdlwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5vcGVuTmF2KGUpfT5cclxuICAgICAgICAgICAgICBPcGVuIE5hdlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtuYXZTdGF0ZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+V29ya3M8L2xpPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50VHJlZS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gaW5kZXggPT09IDAgPyBcIi9cIiA6IGAvJHtlbGVtZW50LnVybH1gXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e3VybH0+IHtlbGVtZW50Lm5hbWV9IDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImNvbGxhYm9yYXRvcnNcIj5Db2xsYWJvcmF0b3JzPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDUwcHggNDBweCAxcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgZm9udDogMS4xZW0gcmFsZXdheS1zZW1pYm9sZDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB1bCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHVsIGxpIHtcclxuICAgICAgICAgICAgICBmb250OiAwLjllbSByYWxld2F5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMCA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNvcGVuTmF2IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChzdGF0aWMvY3NzL21lbnUuZ2lmKSA5MCUgMThweCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTEwMDBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGhlYWRlciBkaXYge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBuYXYudmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNoZXJvIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9