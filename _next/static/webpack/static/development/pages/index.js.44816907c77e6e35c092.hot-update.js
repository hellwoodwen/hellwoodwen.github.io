webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./layout/MultiObjectsGalleryModal.js":
/*!********************************************!*\
  !*** ./layout/MultiObjectsGalleryModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiObjectGalleryModal; });
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
/* harmony import */ var _components_wistia_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/wistia_embed */ "./components/wistia_embed.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\henry\\Documents\\DEV\\wenwen\\wenwen-website\\layout\\MultiObjectsGalleryModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MultiObjectGalleryModal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiObjectGalleryModal, _React$Component);

  var _super = _createSuper(MultiObjectGalleryModal);

  function MultiObjectGalleryModal(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MultiObjectGalleryModal);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeNext", function (event, totalElements) {
      event.preventDefault();
      var updateItem = _this.state.actualItem === totalElements - 1 ? 0 : _this.state.actualItem + 1;

      _this.setState({
        actualItem: updateItem
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changePrev", function (event, totalElements) {
      event.preventDefault();
      var updateItem = _this.state.actualItem === 0 ? totalElements - 1 : _this.state.actualItem - 1;

      _this.setState({
        actualItem: updateItem
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeElement", function (event, picIndex) {
      event.preventDefault();

      _this.setState({
        actualItem: picIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getPicPath", function (galUrl, ProjectUrl, folder, pictureName) {
      return "static/pics/".concat(galUrl, "/").concat(ProjectUrl, "/").concat(folder, "/").concat(pictureName);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "splitText", function (chain) {
      var toReturn = chain ? chain.split("\n").map(function (item, i) {
        return __jsx("span", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 65
          }
        }, item);
      }) : "";
      return toReturn;
    });

    _this.state = {
      actualItem: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MultiObjectGalleryModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          closeProject = _this$props.closeProject,
          projectInfo = _this$props.projectInfo,
          galleryName = _this$props.galleryName;
      var actualItem = this.state.actualItem;
      var galleryElements = [];

      if (projectInfo.videoQqCode) {
        galleryElements = [["QQvideo", projectInfo.videoQqCode]];
      }

      if (projectInfo.videoWistiaCode) {
        galleryElements = [["WistiaVideo", projectInfo.videoWistiaCode]];
      }

      if (projectInfo.videoVimeoCode) {
        galleryElements = [["VimeoVideo", projectInfo.videoVimeoCode]];
      }

      if (projectInfo.pictures) {
        projectInfo.pictures.map(function (pic) {
          galleryElements.push(["image", pic]);
        });
      }

      var hasMultiplePictures = galleryElements.length > 1 ? true : false;
      var hasDescription = projectInfo.explanation !== "" ? true : false;
      var wrapperStyle = hasMultiplePictures ? "multiplePictures" : "singlePicture";
      wrapperStyle += hasDescription ? " hasDescription" : " withoutDescription";
      return __jsx("div", {
        id: "modalGallery",
        className: "jsx-1364885577" + " " + (wrapperStyle || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "picContainer",
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, galleryElements.length > 1 && __jsx("div", {
        id: "picCounter",
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, "".concat(actualItem + 1, " of ").concat(galleryElements.length), " "), galleryElements[actualItem][0] === "image" && __jsx("img", {
        src: this.getPicPath(galleryName, projectInfo.url, "big", galleryElements[actualItem][1]),
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }), galleryElements[actualItem][0] === "QQvideo" && __jsx("iframe", {
        frameBorder: "0",
        src: "https://v.qq.com/txp/iframe/player.html?vid=".concat(galleryElements[actualItem][1]),
        allowFullScreen: true,
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }), galleryElements[actualItem][0] === "WistiaVideo" && __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }
      }, __jsx(_components_wistia_embed__WEBPACK_IMPORTED_MODULE_9__["default"], {
        hashedId: galleryElements[actualItem][1],
        playerColor: "#56be8e",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      })), console.log('galleryElements[actualItem]', galleryElements[actualItem]), galleryElements[actualItem][0] === "VimeoVideo" && galleryElements[actualItem][1].map(function (code) {
        __jsx("iframe", {
          src: "https://player.vimeo.com/video/".concat(code),
          frameborder: "0",
          allow: "autoplay; fullscreen",
          allowfullscreen: true,
          className: "jsx-1364885577",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }
        });
      })), hasDescription && __jsx("div", {
        id: "explanationBox",
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, projectInfo.explanation.title), projectInfo.explanation.materials !== "" && __jsx("span", {
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 19
        }
      }, projectInfo.explanation.materials), __jsx("p", {
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, this.splitText(projectInfo.explanation.explanation)), " "), hasMultiplePictures && __jsx("div", {
        id: "navBar",
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "modalPrev",
        className: "jsx-1364885577" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changePrev(e, galleryElements.length);
        },
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, "Previous")), __jsx("div", {
        id: "navThumbs",
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, galleryElements.map(function (element, index) {
        var aStyle = index === actualItem ? "actual" : "";
        var picURL = element[0] === "image" ? element[1] : "video-default.jpg";
        return __jsx("a", {
          onClick: function onClick(e) {
            return _this2.changeElement(e, index, element[0]);
          },
          key: index,
          className: "jsx-1364885577" + " " + (aStyle || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 23
          }
        }, __jsx("img", {
          src: _this2.getPicPath(galleryName, projectInfo.url, "th", picURL),
          className: "jsx-1364885577",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }
        }));
      }), " "), __jsx("div", {
        id: "modalNext",
        className: "jsx-1364885577" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changeNext(e, galleryElements.length);
        },
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, "Next"))), __jsx("div", {
        id: "modalClose",
        className: "jsx-1364885577" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: closeProject,
        className: "jsx-1364885577",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }
      }, "Close")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1364885577",
        __self: this
      }, "#modalGallery.jsx-1364885577{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.88);z-index:100;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close] 12vw [end];grid-template-rows:[image] 80% [navbar] 20vh [end];}#picContainer.jsx-1364885577{grid-column:prev / next;grid-row:image / navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#explanationBox.jsx-1364885577{background-color:rgba(0,0,0,0.57);padding:40px 35px 20px;overflow:auto;grid-column:next / end;grid-row:image / navbar;}#navBar.jsx-1364885577{grid-column:prev / close;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close];}#navThumbs.jsx-1364885577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#modalClose.jsx-1364885577{grid-column:close / end;}#modalGallery.singlePicture.jsx-1364885577 #picContainer.jsx-1364885577{grid-row:image / end;}#picContainer.jsx-1364885577 img.jsx-1364885577{width:auto;height:auto;max-height:100%;max-width:100%;}iframe.jsx-1364885577{width:80vw;height:71vh;}#modalGallery.singlePicture.jsx-1364885577 #explanationBox.jsx-1364885577{grid-row:image / navbar;}.modalButton.jsx-1364885577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.modalButton.jsx-1364885577 a.jsx-1364885577{width:71px;height:71px;background-image:url(/static/css/modal-nav.png);text-indent:-10000px;}.modalButton.jsx-1364885577 a.jsx-1364885577:hover{background-position-x:right;cursor:pointer;}#modalPrev.jsx-1364885577 a.jsx-1364885577{background-position-y:bottom;}#modalNext.jsx-1364885577 a.jsx-1364885577{background-position-y:center;}#picCounter.jsx-1364885577{position:absolute;left:30%;top:10px;background-color:rgba(0,0,0,0.79);width:120px;height:24px;text-align:center;color:#8e8e8e;font-size:0.8em;padding-top:6px;border-radius:20px;}#navThumbs.jsx-1364885577 a.jsx-1364885577{width:110px;min-width:110px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 7px;}#navThumbs.jsx-1364885577 img.jsx-1364885577{width:auto;height:auto;max-height:90%;max-width:90%;}h1.jsx-1364885577{margin-top:0;font:1.3em raleway-black;color:white;}span.jsx-1364885577{font-family:raleway-semibold;color:#d2d2d2;}p.jsx-1364885577{font-size:0.9em;color:white;}a.actual.jsx-1364885577 img.jsx-1364885577{border-right:5px solid #e7e7e7;border-left:5px solid #e7e7e7;margin-left:-5px;}@media only screen and (max-width:600px){#modalGallery.jsx-1364885577{grid-template-columns:auto 80px;grid-template-rows:100px auto 40vh;grid-template-areas: \"nav close\" \"picture picture\" \"explanation explanation\";}#modalGallery.singlePicture.hasDescription.jsx-1364885577{grid-template-rows:[start]auto[picture] 80px [close] 40vh[description];grid-template-columns:[start]auto[close] 80px [end];}#navBar.jsx-1364885577{grid-area:nav;grid-template-columns:80px auto 80px;grid-template-rows:100px;grid-template-areas:\"prev thumbs next\";}#picContainer.jsx-1364885577{grid-area:picture;}#modalGallery.singlePicture.hasDescription.jsx-1364885577 #picContainer.jsx-1364885577{grid-column:start / description;grid-row:start / close;}#modalGallery.singlePicture.hasDescription.jsx-1364885577 #modalClose.jsx-1364885577{grid-column:close / end;grid-row:picture / close;}#modalGallery.singlePicture.hasDescription.jsx-1364885577 #explanationBox.jsx-1364885577{grid-column:start / close;grid-row:picture / description;margin-right:80px;}#explanationBox.jsx-1364885577{grid-area:explanation;padding-bottom:50px;}#modalPrev.jsx-1364885577{grid-area:prev;}#modalNext.jsx-1364885577{grid-area:next;}#modalClose.jsx-1364885577{grid-area:close;}#navThumbs.jsx-1364885577{grid-area:thumbs;}#picContainer.jsx-1364885577 img.jsx-1364885577{max-height:50vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGVucnlcXERvY3VtZW50c1xcREVWXFx3ZW53ZW5cXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXE11bHRpT2JqZWN0c0dhbGxlcnlNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErS1csQUFHOEIsQUFZUyxBQU9hLEFBT1osQUFLWixBQU9XLEFBR0gsQUFHVixBQU1BLEFBSWEsQUFHWCxBQUtGLEFBTWlCLEFBSUMsQUFHQSxBQUdYLEFBYU4sQUFRRCxBQU1FLEFBS2dCLEFBSWIsQUFJZSxBQU1HLEFBUXVDLEFBSXpELEFBTUksQUFHYyxBQUlSLEFBSUUsQUFLSixBQUlQLEFBR0EsQUFHQyxBQUdDLEFBR0QsV0FqSU4sQUFNQSxBQVlBLEFBcUNBLENBUkksQ0FjUyxDQStCYyxDQXhJakMsQUFrS04sQUFHQSxDQW5EWSxBQXNEWixBQU1BLENBSEEsQ0E3RlMsQUFnRVQsR0E3SU8sQUF3Q1QsQ0FxSHdCLENBakhOLEFBTWxCLEFBWWtELEFBcUNqQyxDQXhGUyxBQTBCMUIsQUFnQkEsQUErRjZCLENBM0hkLENBK0hvQixDQTFFeEIsQ0E3RUcsQUFrRUcsQUF3QkYsQUF1QmYsQ0EzQ0EsQUFHQSxBQW1DZ0IsRUFRZ0IsQ0FNTyxBQXFCWixFQTlIRixFQTZEYyxFQXJENEIsQUEwRW5ELEFBS0YsQ0E1REcsQ0EzQ0YsRUE0SmIsQ0ExRkYsQUEwQ0EsS0FsR2UsQ0F5SWIsQ0EzQ0YsQ0E4QjZCLENBbkM3QixDQWxHdUMsQ0EyQ3ZDLENBbUdFLEVBOUhjLEFBc0lNLElBbkNILE1BU1ksR0EvQ2pCLENBNURXLEFBMkNGLEFBb0VpQyxHQXJHckMsQUEwQk0sQ0FrR3ZCLENBakJ5QyxFQWxCM0MsSUF0Q2MsS0E3RUEsS0E0RGQsRUEzQzBCLEFBNkROLEtBN0VMLEdBdUZjLENBakU3QixTQXJCOEUsQUE2RTlELEdBdURkLEdBcEhGLElBVHFCLENBdUhuQixHQWhEZ0IsV0FyREEsS0FzREEsRUEyQ2hCLFNBaEcyQixLQXNEUixlQTdCQSxJQThCckIsV0FoRnFELG1CQXNGaEMsUUEvRUksd0JBTnpCLG1CQXlCcUIsUUF5QnJCLGtDQW9DZSxhQUNmLENBaEZBLHFDQW1CQSIsImZpbGUiOiJDOlxcVXNlcnNcXGhlbnJ5XFxEb2N1bWVudHNcXERFVlxcd2Vud2VuXFx3ZW53ZW4td2Vic2l0ZVxcbGF5b3V0XFxNdWx0aU9iamVjdHNHYWxsZXJ5TW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2lzdGlhRW1iZWQgZnJvbSAnLi4vY29tcG9uZW50cy93aXN0aWFfZW1iZWQnXHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aU9iamVjdEdhbGxlcnlNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0dWFsSXRlbTogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmV4dCA9IChldmVudCwgdG90YWxFbGVtZW50cykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gdG90YWxFbGVtZW50cyAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtICsgMVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdHVhbEl0ZW06IHVwZGF0ZUl0ZW0gfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVByZXYgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gPT09IDAgPyB0b3RhbEVsZW1lbnRzIC0gMSA6IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSAtIDFcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3R1YWxJdGVtOiB1cGRhdGVJdGVtIH0pXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VFbGVtZW50ID0gKGV2ZW50LCBwaWNJbmRleCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdHVhbEl0ZW06IHBpY0luZGV4IH0pXHJcbiAgfVxyXG5cclxuICBnZXRQaWNQYXRoID0gKGdhbFVybCwgUHJvamVjdFVybCwgZm9sZGVyLCBwaWN0dXJlTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGBzdGF0aWMvcGljcy8ke2dhbFVybH0vJHtQcm9qZWN0VXJsfS8ke2ZvbGRlcn0vJHtwaWN0dXJlTmFtZX1gXHJcbiAgfVxyXG5cclxuICBzcGxpdFRleHQgPSBjaGFpbiA9PiB7XHJcbiAgICBjb25zdCB0b1JldHVybiA9IGNoYWluID8gY2hhaW4uc3BsaXQoXCJcXG5cIikubWFwKChpdGVtLCBpKSA9PiA8c3Bhbj5cclxuICAgICAge2l0ZW19PC9zcGFuPikgOiBcIlwiXHJcbiAgICByZXR1cm4gdG9SZXR1cm5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xvc2VQcm9qZWN0LCBwcm9qZWN0SW5mbywgZ2FsbGVyeU5hbWUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgYWN0dWFsSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGxldCBnYWxsZXJ5RWxlbWVudHMgPSBbXVxyXG4gICAgaWYgKHByb2plY3RJbmZvLnZpZGVvUXFDb2RlKSB7XHJcbiAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJRUXZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvUXFDb2RlXV1cclxuICAgIH1cclxuICAgIGlmIChwcm9qZWN0SW5mby52aWRlb1dpc3RpYUNvZGUpIHtcclxuICAgICAgZ2FsbGVyeUVsZW1lbnRzID0gW1tcIldpc3RpYVZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvV2lzdGlhQ29kZV1dXHJcbiAgICB9XHJcbiAgICBpZiAocHJvamVjdEluZm8udmlkZW9WaW1lb0NvZGUpIHtcclxuICAgICAgZ2FsbGVyeUVsZW1lbnRzID0gW1tcIlZpbWVvVmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9WaW1lb0NvZGVdXVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2plY3RJbmZvLnBpY3R1cmVzKSB7XHJcbiAgICAgIHByb2plY3RJbmZvLnBpY3R1cmVzLm1hcChwaWMgPT4ge1xyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50cy5wdXNoKFtcImltYWdlXCIsIHBpY10pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzTXVsdGlwbGVQaWN0dXJlcyA9IGdhbGxlcnlFbGVtZW50cy5sZW5ndGggPiAxID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBjb25zdCBoYXNEZXNjcmlwdGlvbiA9IHByb2plY3RJbmZvLmV4cGxhbmF0aW9uICE9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBsZXQgd3JhcHBlclN0eWxlID0gaGFzTXVsdGlwbGVQaWN0dXJlcyA/IFwibXVsdGlwbGVQaWN0dXJlc1wiIDogXCJzaW5nbGVQaWN0dXJlXCJcclxuICAgIHdyYXBwZXJTdHlsZSArPSBoYXNEZXNjcmlwdGlvbiA/IFwiIGhhc0Rlc2NyaXB0aW9uXCIgOiBcIiB3aXRob3V0RGVzY3JpcHRpb25cIlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJtb2RhbEdhbGxlcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17d3JhcHBlclN0eWxlfT5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInBpY0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY0NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYCR7YWN0dWFsSXRlbSArIDFcclxuICAgICAgICAgICAgICAgICAgfSBvZiAke2dhbGxlcnlFbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzBdID09PSBcImltYWdlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcImJpZ1wiLCBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV0pXHJcbiAgICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVswXSA9PT0gXCJRUXZpZGVvXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGBodHRwczovL3YucXEuY29tL3R4cC9pZnJhbWUvcGxheWVyLmh0bWw/dmlkPSR7Z2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9PjwvaWZyYW1lPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVswXSA9PT0gXCJXaXN0aWFWaWRlb1wiICYmIChcclxuICAgICAgICAgICAgICA8Tm9TU1I+XHJcbiAgICAgICAgICAgICAgICA8V2lzdGlhRW1iZWQgaGFzaGVkSWQ9e1xyXG4gICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcGxheWVyQ29sb3I9XCIjNTZiZThlXCIgLz5cclxuICAgICAgICAgICAgICA8L05vU1NSPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV0nLCBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV0pfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiVmltZW9WaWRlb1wiICYmIChcclxuICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV0ubWFwKGNvZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtjb2RlfWB9IGZyYW1lYm9yZGVyPXtcIjBcIn0gYWxsb3c9e1wiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIn0gYWxsb3dmdWxsc2NyZWVuPXt0cnVlfT48L2lmcmFtZT5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGFzRGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFuYXRpb25Cb3hcIj5cclxuICAgICAgICAgICAgICA8aDE+e1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm8uZXhwbGFuYXRpb24udGl0bGVcclxuICAgICAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5tYXRlcmlhbHMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluZm8uZXhwbGFuYXRpb24ubWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnNwbGl0VGV4dChwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5leHBsYW5hdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBoYXNNdWx0aXBsZVBpY3R1cmVzICYmIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdkJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbFByZXZcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VQcmV2KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZUaHVtYnNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhU3R5bGUgPSBpbmRleCA9PT0gYWN0dWFsSXRlbSA/IFwiYWN0dWFsXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGljVVJMID0gZWxlbWVudFswXSA9PT0gXCJpbWFnZVwiID8gZWxlbWVudFsxXSA6IFwidmlkZW8tZGVmYXVsdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZUVsZW1lbnQoZSwgaW5kZXgsIGVsZW1lbnRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcInRoXCIsIHBpY1VSTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsTmV4dFwiIGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZU5leHQoZSwgZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIH0+TmV4dDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwibW9kYWxDbG9zZVwiIGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZVByb2plY3R9PkNsb3NlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44OCk7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbcHJldl0gMTB2dyBbbmF2XSBhdXRvIFtuZXh0XSAxMnZ3IFtjbG9zZV0gMTJ2dyBbZW5kXTtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtpbWFnZV0gODAlIFtuYXZiYXJdIDIwdmggW2VuZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHByZXYgLyBuZXh0O1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTcpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMzVweCAyMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBuZXh0IC8gZW5kO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2QmFyIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogcHJldiAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbcHJldl0gMTB2dyBbbmF2XSBhdXRvIFtuZXh0XSAxMnZ3IFtjbG9zZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdlRodW1icyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogY2xvc2UgLyBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcGljQ29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MXZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZSAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxCdXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxCdXR0b24gYSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcxcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2Nzcy9tb2RhbC1uYXYucG5nKTtcclxuICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTEwMDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbFByZXYgYSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsTmV4dCBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcGljQ291bnRlciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5KTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzhlOGU4ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2VGh1bWJzIGEge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2VGh1bWJzIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBmb250OiAxLjNlbSByYWxld2F5LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogcmFsZXdheS1zZW1pYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2QyZDJkMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmFjdHVhbCBpbWcge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDQwdmg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICBcIm5hdiBjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIFwicGljdHVyZSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgXCJleHBsYW5hdGlvbiBleHBsYW5hdGlvblwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbc3RhcnRdYXV0b1twaWN0dXJlXSA4MHB4IFtjbG9zZV0gNDB2aFtkZXNjcmlwdGlvbl07XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtzdGFydF1hdXRvW2Nsb3NlXSA4MHB4IFtlbmRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbmF2QmFyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmF2O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gODBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInByZXYgdGh1bWJzIG5leHRcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzdGFydCAvIGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHN0YXJ0IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogY2xvc2UgLyBlbmQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzdGFydCAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHBpY3R1cmUgLyBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZXhwbGFuYXRpb247XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsUHJldiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHByZXY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbE5leHQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuZXh0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbmF2VGh1bWJzIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGh1bWJzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjcGljQ29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\henry\\\\Documents\\\\DEV\\\\wenwen\\\\wenwen-website\\\\layout\\\\MultiObjectsGalleryModal.js */"));
    }
  }]);

  return MultiObjectGalleryModal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIl0sIm5hbWVzIjpbIk11bHRpT2JqZWN0R2FsbGVyeU1vZGFsIiwicHJvcHMiLCJldmVudCIsInRvdGFsRWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUl0ZW0iLCJzdGF0ZSIsImFjdHVhbEl0ZW0iLCJzZXRTdGF0ZSIsInBpY0luZGV4IiwiZ2FsVXJsIiwiUHJvamVjdFVybCIsImZvbGRlciIsInBpY3R1cmVOYW1lIiwiY2hhaW4iLCJ0b1JldHVybiIsInNwbGl0IiwibWFwIiwiaXRlbSIsImkiLCJjbG9zZVByb2plY3QiLCJwcm9qZWN0SW5mbyIsImdhbGxlcnlOYW1lIiwiZ2FsbGVyeUVsZW1lbnRzIiwidmlkZW9RcUNvZGUiLCJ2aWRlb1dpc3RpYUNvZGUiLCJ2aWRlb1ZpbWVvQ29kZSIsInBpY3R1cmVzIiwicGljIiwicHVzaCIsImhhc011bHRpcGxlUGljdHVyZXMiLCJsZW5ndGgiLCJoYXNEZXNjcmlwdGlvbiIsImV4cGxhbmF0aW9uIiwid3JhcHBlclN0eWxlIiwiZ2V0UGljUGF0aCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwidGl0bGUiLCJtYXRlcmlhbHMiLCJzcGxpdFRleHQiLCJlIiwiY2hhbmdlUHJldiIsImVsZW1lbnQiLCJpbmRleCIsImFTdHlsZSIsInBpY1VSTCIsImNoYW5nZUVsZW1lbnQiLCJjaGFuZ2VOZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSx1Qjs7Ozs7QUFDbkIsbUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHFOQU9OLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUEwQjtBQUNyQ0QsV0FBSyxDQUFDRSxjQUFOO0FBQ0EsVUFBTUMs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V0FLRTtBQUFLLGFBQUcsRUFDTixNQUFJLENBQUNaLFVBQUwsQ0FBZ0JiLFdBQWhCLEVBQTZCRCxXQUFXLENBQUNlLEdBQXpDLEVBQThDLElBQTlDLEVBQW9EWSxNQUFwRCxDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxGLENBREY7QUFXRCxPQWRELENBRkosTUFSRixFQTBCRTtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQUEsNENBQThCLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGVBQU8sRUFDUixpQkFBQUwsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ08sVUFBTCxDQUFnQlAsQ0FBaEIsRUFBbUJwQixlQUFlLENBQUNRLE1BQW5DLENBQUo7QUFBQSxTQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQTFCRixDQXZFTixFQTBHRTtBQUFLLFVBQUUsRUFBQyxZQUFSO0FBQUEsNENBQStCLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGVBQU8sRUFBRVgsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0ExR0Y7QUFBQTtBQUFBO0FBQUEsOHV0QkFERjtBQXNTRDs7OztFQWxXa0QrQiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40NDgxNjkwN2M3N2U2ZTM1YzA5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpc3RpYUVtYmVkIGZyb20gJy4uL2NvbXBvbmVudHMvd2lzdGlhX2VtYmVkJ1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlPYmplY3RHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjdHVhbEl0ZW06IDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZU5leHQgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gPT09IHRvdGFsRWxlbWVudHMgLSAxID8gMCA6IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSArIDFcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3R1YWxJdGVtOiB1cGRhdGVJdGVtIH0pXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQcmV2ID0gKGV2ZW50LCB0b3RhbEVsZW1lbnRzKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gdGhpcy5zdGF0ZS5hY3R1YWxJdGVtID09PSAwID8gdG90YWxFbGVtZW50cyAtIDEgOiB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gLSAxXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0dWFsSXRlbTogdXBkYXRlSXRlbSB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlRWxlbWVudCA9IChldmVudCwgcGljSW5kZXgpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3R1YWxJdGVtOiBwaWNJbmRleCB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0UGljUGF0aCA9IChnYWxVcmwsIFByb2plY3RVcmwsIGZvbGRlciwgcGljdHVyZU5hbWUpID0+IHtcclxuICAgIHJldHVybiBgc3RhdGljL3BpY3MvJHtnYWxVcmx9LyR7UHJvamVjdFVybH0vJHtmb2xkZXJ9LyR7cGljdHVyZU5hbWV9YFxyXG4gIH1cclxuXHJcbiAgc3BsaXRUZXh0ID0gY2hhaW4gPT4ge1xyXG4gICAgY29uc3QgdG9SZXR1cm4gPSBjaGFpbiA/IGNoYWluLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSwgaSkgPT4gPHNwYW4+XHJcbiAgICAgIHtpdGVtfTwvc3Bhbj4pIDogXCJcIlxyXG4gICAgcmV0dXJuIHRvUmV0dXJuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsb3NlUHJvamVjdCwgcHJvamVjdEluZm8sIGdhbGxlcnlOYW1lIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IGFjdHVhbEl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBsZXQgZ2FsbGVyeUVsZW1lbnRzID0gW11cclxuICAgIGlmIChwcm9qZWN0SW5mby52aWRlb1FxQ29kZSkge1xyXG4gICAgICBnYWxsZXJ5RWxlbWVudHMgPSBbW1wiUVF2aWRlb1wiLCBwcm9qZWN0SW5mby52aWRlb1FxQ29kZV1dXHJcbiAgICB9XHJcbiAgICBpZiAocHJvamVjdEluZm8udmlkZW9XaXN0aWFDb2RlKSB7XHJcbiAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJXaXN0aWFWaWRlb1wiLCBwcm9qZWN0SW5mby52aWRlb1dpc3RpYUNvZGVdXVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2plY3RJbmZvLnZpZGVvVmltZW9Db2RlKSB7XHJcbiAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJWaW1lb1ZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvVmltZW9Db2RlXV1cclxuICAgIH1cclxuICAgIGlmIChwcm9qZWN0SW5mby5waWN0dXJlcykge1xyXG4gICAgICBwcm9qZWN0SW5mby5waWN0dXJlcy5tYXAocGljID0+IHtcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudHMucHVzaChbXCJpbWFnZVwiLCBwaWNdKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc011bHRpcGxlUGljdHVyZXMgPSBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgY29uc3QgaGFzRGVzY3JpcHRpb24gPSBwcm9qZWN0SW5mby5leHBsYW5hdGlvbiAhPT0gXCJcIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgbGV0IHdyYXBwZXJTdHlsZSA9IGhhc011bHRpcGxlUGljdHVyZXMgPyBcIm11bHRpcGxlUGljdHVyZXNcIiA6IFwic2luZ2xlUGljdHVyZVwiXHJcbiAgICB3cmFwcGVyU3R5bGUgKz0gaGFzRGVzY3JpcHRpb24gPyBcIiBoYXNEZXNjcmlwdGlvblwiIDogXCIgd2l0aG91dERlc2NyaXB0aW9uXCJcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibW9kYWxHYWxsZXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJTdHlsZX0+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJwaWNDb250YWluZXJcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWNDb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGAke2FjdHVhbEl0ZW0gKyAxXHJcbiAgICAgICAgICAgICAgICAgIH0gb2YgJHtnYWxsZXJ5RWxlbWVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVswXSA9PT0gXCJpbWFnZVwiICYmIChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz17XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBpY1BhdGgoZ2FsbGVyeU5hbWUsIHByb2plY3RJbmZvLnVybCwgXCJiaWdcIiwgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdKVxyXG4gICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiUVF2aWRlb1wiICYmIChcclxuICAgICAgICAgICAgICA8aWZyYW1lIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBgaHR0cHM6Ly92LnFxLmNvbS90eHAvaWZyYW1lL3BsYXllci5odG1sP3ZpZD0ke2dhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXVxyXG4gICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPXt0cnVlfT48L2lmcmFtZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiV2lzdGlhVmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPE5vU1NSPlxyXG4gICAgICAgICAgICAgICAgPFdpc3RpYUVtYmVkIGhhc2hlZElkPXtcclxuICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHBsYXllckNvbG9yPVwiIzU2YmU4ZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Ob1NTUj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dJywgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dKX1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzBdID09PSBcIlZpbWVvVmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdLm1hcChjb2RlID0+IHtcclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7Y29kZX1gfSBmcmFtZWJvcmRlcj17XCIwXCJ9IGFsbG93PXtcImF1dG9wbGF5OyBmdWxsc2NyZWVuXCJ9IGFsbG93ZnVsbHNjcmVlbj17dHJ1ZX0+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhhc0Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhbmF0aW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgPGgxPntcclxuICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLnRpdGxlXHJcbiAgICAgICAgICAgICAgfTwvaDE+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm8uZXhwbGFuYXRpb24ubWF0ZXJpYWxzICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFsc1xyXG4gICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zcGxpdFRleHQocHJvamVjdEluZm8uZXhwbGFuYXRpb24uZXhwbGFuYXRpb24pfTwvcD5cclxuICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGFzTXVsdGlwbGVQaWN0dXJlcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZCYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxQcmV2XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICBlID0+IHRoaXMuY2hhbmdlUHJldihlLCBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2VGh1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYVN0eWxlID0gaW5kZXggPT09IGFjdHVhbEl0ZW0gPyBcImFjdHVhbFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpY1VSTCA9IGVsZW1lbnRbMF0gPT09IFwiaW1hZ2VcIiA/IGVsZW1lbnRbMV0gOiBcInZpZGVvLWRlZmF1bHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VFbGVtZW50KGUsIGluZGV4LCBlbGVtZW50WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBpY1BhdGgoZ2FsbGVyeU5hbWUsIHByb2plY3RJbmZvLnVybCwgXCJ0aFwiLCBwaWNVUkwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbE5leHRcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VOZXh0KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB9Pk5leHQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cIm1vZGFsQ2xvc2VcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VQcm9qZWN0fT5DbG9zZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODgpO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3ByZXZdIDEwdncgW25hdl0gYXV0byBbbmV4dF0gMTJ2dyBbY2xvc2VdIDEydncgW2VuZF07XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbaW1hZ2VdIDgwJSBbbmF2YmFyXSAyMHZoIFtlbmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gbmV4dDtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU3KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDM1cHggMjBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogbmV4dCAvIGVuZDtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdkJhciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHByZXYgLyBjbG9zZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3ByZXZdIDEwdncgW25hdl0gYXV0byBbbmV4dF0gMTJ2dyBbY2xvc2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGNsb3NlIC8gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZSAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3BpY0NvbnRhaW5lciBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzF2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUgI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIGEge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzFweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9jc3MvbW9kYWwtbmF2LnBuZyk7XHJcbiAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC0xMDAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxQcmV2IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbE5leHQgYSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3BpY0NvdW50ZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OSk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4ZThlOGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdlRodW1icyBhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdlRodW1icyBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgZm9udDogMS4zZW0gcmFsZXdheS1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJhbGV3YXktc2VtaWJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNkMmQyZDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS5hY3R1YWwgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byA0MHZoO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICAgXCJuYXYgY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBcInBpY3R1cmUgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhwbGFuYXRpb24gZXhwbGFuYXRpb25cIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW3N0YXJ0XWF1dG9bcGljdHVyZV0gODBweCBbY2xvc2VdIDQwdmhbZGVzY3JpcHRpb25dO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdYXV0b1tjbG9zZV0gODBweCBbZW5kXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI25hdkJhciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIDgwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwcmV2IHRodW1icyBuZXh0XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogc3RhcnQgLyBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBzdGFydCAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI21vZGFsQ2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGNsb3NlIC8gZW5kO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHBpY3R1cmUgLyBjbG9zZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogc3RhcnQgLyBjbG9zZTtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBwaWN0dXJlIC8gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGV4cGxhbmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbFByZXYge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmV2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxOZXh0IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmV4dDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsQ2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI25hdlRodW1icyB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRodW1icztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3BpY0NvbnRhaW5lciBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9