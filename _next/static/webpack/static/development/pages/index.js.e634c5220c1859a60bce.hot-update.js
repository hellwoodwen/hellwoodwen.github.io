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







var _jsxFileName = "D:\\DEV\\wenwen-website\\layout\\MultiObjectsGalleryModal.js";


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
        return __jsx("p", {
          key: i,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 69
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
        className: "jsx-789878342" + " " + (wrapperStyle || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "picContainer",
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, galleryElements.length > 1 && __jsx("div", {
        id: "picCounter",
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }
      }, "".concat(actualItem + 1, " of ").concat(galleryElements.length), " "), galleryElements[actualItem][0] === "image" && __jsx("img", {
        src: this.getPicPath(galleryName, projectInfo.url, "big", galleryElements[actualItem][1]),
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }), galleryElements[actualItem][0] === "QQvideo" && __jsx("iframe", {
        frameBorder: "0",
        src: "https://v.qq.com/txp/iframe/player.html?vid=".concat(galleryElements[actualItem][1]),
        allowFullScreen: true,
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }), galleryElements[actualItem][0] === "WistiaVideo" && __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, __jsx(_components_wistia_embed__WEBPACK_IMPORTED_MODULE_9__["default"], {
        hashedId: galleryElements[actualItem][1],
        playerColor: "#56be8e",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }
      })), " "), hasDescription && __jsx("div", {
        id: "explanationBox",
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }
      }, projectInfo.explanation.title), projectInfo.explanation.materials !== "" && __jsx("span", {
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, projectInfo.explanation.materials), this.splitText(projectInfo.explanation.explanation), " "), hasMultiplePictures && __jsx("div", {
        id: "navBar",
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "modalPrev",
        className: "jsx-789878342" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changePrev(e, galleryElements.length);
        },
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }
      }, "Previous")), __jsx("div", {
        id: "navThumbs",
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 25
        }
      }, galleryElements.map(function (element, index) {
        var aStyle = index === actualItem ? "actual" : "";
        var picURL = element[0] === "image" ? element[1] : "video-default.jpg";
        return __jsx("a", {
          onClick: function onClick(e) {
            return _this2.changeElement(e, index, element[0]);
          },
          key: index,
          className: "jsx-789878342" + " " + (aStyle || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 37
          }
        }, __jsx("img", {
          src: _this2.getPicPath(galleryName, projectInfo.url, "th", picURL),
          className: "jsx-789878342",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 41
          }
        }));
      }), " "), __jsx("div", {
        id: "modalNext",
        className: "jsx-789878342" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changeNext(e, galleryElements.length);
        },
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      }, "Next"))), __jsx("div", {
        id: "modalClose",
        className: "jsx-789878342" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("a", {
        onClick: closeProject,
        className: "jsx-789878342",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }
      }, "Close")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "789878342",
        __self: this
      }, "#modalGallery.jsx-789878342{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.88);z-index:100;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close] 12vw [end];grid-template-rows:[image] 80% [navbar] 20vh [end];}#picContainer.jsx-789878342{grid-column:prev / next;grid-row:image / navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#explanationBox.jsx-789878342{background-color:rgba(0,0,0,0.57);padding:40px 35px 20px;overflow:auto;grid-column:next / end;grid-row:image / navbar;}#navBar.jsx-789878342{grid-column:prev / close;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close];}#navThumbs.jsx-789878342{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#modalClose.jsx-789878342{grid-column:close / end;}#modalGallery.singlePicture.jsx-789878342 #picContainer.jsx-789878342{grid-row:image / end;}#picContainer.jsx-789878342 img.jsx-789878342{width:auto;height:auto;max-height:100%;max-width:100%;}iframe.jsx-789878342{width:80vw;height:71vh;}#modalGallery.singlePicture.jsx-789878342 #explanationBox.jsx-789878342{grid-row:image / navbar;}.modalButton.jsx-789878342{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.modalButton.jsx-789878342 a.jsx-789878342{width:71px;height:71px;background-image:url(/static/css/modal-nav.png);text-indent:-10000px;}.modalButton.jsx-789878342 a.jsx-789878342:hover{background-position-x:right;cursor:pointer;}#modalPrev.jsx-789878342 a.jsx-789878342{background-position-y:bottom;}#modalNext.jsx-789878342 a.jsx-789878342{background-position-y:center;}#picCounter.jsx-789878342{position:absolute;left:30%;top:10px;background-color:rgba(0,0,0,0.79);width:120px;height:24px;text-align:center;color:#8e8e8e;font-size:0.8em;padding-top:6px;border-radius:20px;}#navThumbs.jsx-789878342 a.jsx-789878342{width:110px;min-width:110px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 7px;}#navThumbs.jsx-789878342 img.jsx-789878342{width:auto;height:auto;max-height:90%;max-width:90%;}h1.jsx-789878342{margin-top:0;font:1.3em raleway-black;color:white;}span.jsx-789878342{font-family:raleway-semibold;color:#d2d2d2;}p.jsx-789878342{color:#878787;font-size:0.9em;display:none;}a.actual.jsx-789878342 img.jsx-789878342{border-right:5px solid #e7e7e7;border-left:5px solid #e7e7e7;margin-left:-5px;}@media only screen and (max-width:600px){#modalGallery.jsx-789878342{grid-template-columns:auto 80px;grid-template-rows:100px auto 40vh;grid-template-areas: \"nav close\" \"picture picture\" \"explanation explanation\";}#modalGallery.singlePicture.hasDescription.jsx-789878342{grid-template-rows:[start]auto[picture] 80px [close] 40vh[description];grid-template-columns:[start]auto[close] 80px [end];}#navBar.jsx-789878342{grid-area:nav;grid-template-columns:80px auto 80px;grid-template-rows:100px;grid-template-areas:\"prev thumbs next\";}#picContainer.jsx-789878342{grid-area:picture;}#modalGallery.singlePicture.hasDescription.jsx-789878342 #picContainer.jsx-789878342{grid-column:start / description;grid-row:start / close;}#modalGallery.singlePicture.hasDescription.jsx-789878342 #modalClose.jsx-789878342{grid-column:close / end;grid-row:picture / close;}#modalGallery.singlePicture.hasDescription.jsx-789878342 #explanationBox.jsx-789878342{grid-column:start / close;grid-row:picture / description;margin-right:80px;}#explanationBox.jsx-789878342{grid-area:explanation;padding-bottom:50px;}#modalPrev.jsx-789878342{grid-area:prev;}#modalNext.jsx-789878342{grid-area:next;}#modalClose.jsx-789878342{grid-area:close;}#navThumbs.jsx-789878342{grid-area:thumbs;}#picContainer.jsx-789878342 img.jsx-789878342{max-height:50vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXE11bHRpT2JqZWN0c0dhbGxlcnlNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S3FCLEFBRzhCLEFBWVMsQUFPYSxBQU9aLEFBS1osQUFPVyxBQUdILEFBR1YsQUFNQSxBQUlhLEFBR1gsQUFLRixBQU1pQixBQUlDLEFBR0EsQUFHWCxBQWFOLEFBUUQsQUFNRSxBQUtnQixBQUlmLEFBS2lCLEFBTUcsQUFRdUMsQUFJekQsQUFNSSxBQUdjLEFBSVIsQUFJRSxBQUtKLEFBSVAsQUFHQSxBQUdDLEFBR0MsQUFHRCxXQWxJTixBQU1BLEFBWUEsQUFxQ0EsQ0FSSSxDQWNTLENBU1QsQUF1QnVCLENBeklqQyxBQW1LTixBQUdBLENBR0EsQUFNQSxDQUhBLENBOUZTLEFBaUVULEdBOUlPLEFBd0NULENBc0h3QixDQWxITixBQU1sQixBQVlrRCxBQXFDakMsQ0F4RlMsQUEwQjFCLEFBZ0JBLEFBZ0c2QixDQTVIZCxDQWdJb0IsQ0EzRXhCLENBN0VHLEFBa0VHLEFBd0JGLENBcEJmLEFBR0EsQUFtQ2dCLENBS0QsQ0FJaUIsQ0FNTyxBQXFCWixFQS9IRixFQTZEYyxFQXJENEIsQUEwRW5ELEFBS0YsQ0E1REcsQ0EzQ0YsRUE2SmIsQ0EzRkYsQUEwQ0EsQUFLQSxLQXZHZSxDQTBJYixDQTVDRixDQStCNkIsQ0FwQzdCLENBbEd1QyxDQTJDdkMsQ0FvR0UsRUEvSGMsQUF1SU0sSUFuQ0gsTUFTWSxHQWhEakIsQ0E1RFcsQUEyQ0YsQUFxRWlDLEdBdEdyQyxBQTBCTSxDQW1HdkIsQ0FqQnlDLEVBbEIzQyxJQXZDYyxLQTdFQSxLQTREZCxFQTNDMEIsQUE2RE4sS0E3RUwsR0F1RmMsQ0FqRTdCLFNBckI4RSxBQTZFOUQsR0F3RGQsR0FySEYsSUFUcUIsQ0F3SG5CLEdBakRnQixXQXJEQSxLQXNEQSxFQTRDaEIsU0FqRzJCLEtBc0RSLGVBN0JBLElBOEJyQixXQWhGcUQsbUJBc0ZoQyxRQS9FSSx3QkFOekIsbUJBeUJxQixRQXlCckIsa0NBb0NlLGFBQ2YsQ0FoRkEscUNBbUJBIiwiZmlsZSI6IkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXE11bHRpT2JqZWN0c0dhbGxlcnlNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaXN0aWFFbWJlZCBmcm9tICcuLi9jb21wb25lbnRzL3dpc3RpYV9lbWJlZCdcclxuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpT2JqZWN0R2FsbGVyeU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0dWFsSXRlbTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VOZXh0ID0gKGV2ZW50LCB0b3RhbEVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gPT09IHRvdGFsRWxlbWVudHMgLSAxID8gMCA6IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSArIDFcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3R1YWxJdGVtOiB1cGRhdGVJdGVtfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmV2ID0gKGV2ZW50LCB0b3RhbEVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gPT09IDAgPyB0b3RhbEVsZW1lbnRzIC0gMSA6IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSAtIDFcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3R1YWxJdGVtOiB1cGRhdGVJdGVtfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFbGVtZW50ID0gKGV2ZW50LCBwaWNJbmRleCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3R1YWxJdGVtOiBwaWNJbmRleH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGljUGF0aCA9IChnYWxVcmwsIFByb2plY3RVcmwsIGZvbGRlciwgcGljdHVyZU5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gYHN0YXRpYy9waWNzLyR7Z2FsVXJsfS8ke1Byb2plY3RVcmx9LyR7Zm9sZGVyfS8ke3BpY3R1cmVOYW1lfWBcclxuICAgIH1cclxuXHJcbiAgICBzcGxpdFRleHQgPSBjaGFpbiA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9SZXR1cm4gPSBjaGFpbiA/IGNoYWluLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSwgaSkgPT4gPHAga2V5PXtpfT5cclxuICAgICAgICAgICAge2l0ZW19PC9wPikgOiBcIlwiXHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjbG9zZVByb2plY3QsIHByb2plY3RJbmZvLCBnYWxsZXJ5TmFtZX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qge2FjdHVhbEl0ZW19ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBsZXQgZ2FsbGVyeUVsZW1lbnRzID0gW11cclxuICAgICAgICBpZiAocHJvamVjdEluZm8udmlkZW9RcUNvZGUpIHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzID0gW1tcIlFRdmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9RcUNvZGVdXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvamVjdEluZm8udmlkZW9XaXN0aWFDb2RlKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJXaXN0aWFWaWRlb1wiLCBwcm9qZWN0SW5mby52aWRlb1dpc3RpYUNvZGVdXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvamVjdEluZm8ucGljdHVyZXMpIHtcclxuICAgICAgICAgICAgcHJvamVjdEluZm8ucGljdHVyZXMubWFwKHBpYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMucHVzaChbXCJpbWFnZVwiLCBwaWNdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzTXVsdGlwbGVQaWN0dXJlcyA9IGdhbGxlcnlFbGVtZW50cy5sZW5ndGggPiAxID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgY29uc3QgaGFzRGVzY3JpcHRpb24gPSBwcm9qZWN0SW5mby5leHBsYW5hdGlvbiAhPT0gXCJcIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGxldCB3cmFwcGVyU3R5bGUgPSBoYXNNdWx0aXBsZVBpY3R1cmVzID8gXCJtdWx0aXBsZVBpY3R1cmVzXCIgOiBcInNpbmdsZVBpY3R1cmVcIlxyXG4gICAgICAgIHdyYXBwZXJTdHlsZSArPSBoYXNEZXNjcmlwdGlvbiA/IFwiIGhhc0Rlc2NyaXB0aW9uXCIgOiBcIiB3aXRob3V0RGVzY3JpcHRpb25cIlxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxHYWxsZXJ5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d3JhcHBlclN0eWxlfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGljQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY0NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbEl0ZW0gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9mICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVswXSA9PT0gXCJpbWFnZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQaWNQYXRoKGdhbGxlcnlOYW1lLCBwcm9qZWN0SW5mby51cmwsIFwiYmlnXCIsIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiUVF2aWRlb1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly92LnFxLmNvbS90eHAvaWZyYW1lL3BsYXllci5odG1sP3ZpZD0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPXt0cnVlfT48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVswXSA9PT0gXCJXaXN0aWFWaWRlb1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vU1NSPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpc3RpYUVtYmVkIGhhc2hlZElkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckNvbG9yPVwiIzU2YmU4ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob1NTUj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhc0Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFuYXRpb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFscyAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluZm8uZXhwbGFuYXRpb24ubWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRUZXh0KHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLmV4cGxhbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNNdWx0aXBsZVBpY3R1cmVzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2QmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbFByZXZcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZVByZXYoZSwgZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZUaHVtYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYVN0eWxlID0gaW5kZXggPT09IGFjdHVhbEl0ZW0gPyBcImFjdHVhbFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpY1VSTCA9IGVsZW1lbnRbMF0gPT09IFwiaW1hZ2VcIiA/IGVsZW1lbnRbMV0gOiBcInZpZGVvLWRlZmF1bHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHRoaXMuY2hhbmdlRWxlbWVudChlLCBpbmRleCwgZWxlbWVudFswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQaWNQYXRoKGdhbGxlcnlOYW1lLCBwcm9qZWN0SW5mby51cmwsIFwidGhcIiwgcGljVVJMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxOZXh0XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VOZXh0KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pk5leHQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsQ2xvc2VcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlUHJvamVjdH0+Q2xvc2U8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODgpO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3ByZXZdIDEwdncgW25hdl0gYXV0byBbbmV4dF0gMTJ2dyBbY2xvc2VdIDEydncgW2VuZF07XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbaW1hZ2VdIDgwJSBbbmF2YmFyXSAyMHZoIFtlbmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gbmV4dDtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU3KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDM1cHggMjBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogbmV4dCAvIGVuZDtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdkJhciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHByZXYgLyBjbG9zZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3ByZXZdIDEwdncgW25hdl0gYXV0byBbbmV4dF0gMTJ2dyBbY2xvc2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGNsb3NlIC8gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZSAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3BpY0NvbnRhaW5lciBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzF2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUgI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICBncmlkLXJvdzogaW1hZ2UgLyBuYXZiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIGEge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzFweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9jc3MvbW9kYWwtbmF2LnBuZyk7XHJcbiAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC0xMDAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxQcmV2IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtb2RhbE5leHQgYSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3BpY0NvdW50ZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OSk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4ZThlOGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdlRodW1icyBhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdlRodW1icyBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgZm9udDogMS4zZW0gcmFsZXdheS1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJhbGV3YXktc2VtaWJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNkMmQyZDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYWN0dWFsIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gNDB2aDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgIFwibmF2IGNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgXCJwaWN0dXJlIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBcImV4cGxhbmF0aW9uIGV4cGxhbmF0aW9uXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtzdGFydF1hdXRvW3BpY3R1cmVdIDgwcHggW2Nsb3NlXSA0MHZoW2Rlc2NyaXB0aW9uXTtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XWF1dG9bY2xvc2VdIDgwcHggW2VuZF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJldiB0aHVtYnMgbmV4dFwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGljdHVyZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogc3RhcnQgLyBjbG9zZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBwaWN0dXJlIC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBleHBsYW5hdGlvbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxQcmV2IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcHJldjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsTmV4dCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG5leHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZUaHVtYnMge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aHVtYnM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\MultiObjectsGalleryModal.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIl0sIm5hbWVzIjpbIk11bHRpT2JqZWN0R2FsbGVyeU1vZGFsIiwicHJvcHMiLCJldmVudCIsInRvdGFsRWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUl0ZW0iLCJzdGF0ZSIsImFjdHVhbEl0ZW0iLCJzZXRTdGF0ZSIsInBpY0luZGV4IiwiZ2FsVXJsIiwiUHJvamVjdFVybCIsImZvbGRlciIsInBpY3R1cmVOYW1lIiwiY2hhaW4iLCJ0b1JldHVybiIsInNwbGl0IiwibWFwIiwiaXRlbSIsImkiLCJjbG9zZVByb2plY3QiLCJwcm9qZWN0SW5mbyIsImdhbGxlcnlOYW1lIiwiZ2FsbGVyeUVsZW1lbnRzIiwidmlkZW9RcUNvZGUiLCJ2aWRlb1dpc3RpYUNvZGUiLCJwaWN0dXJlcyIsInBpYyIsInB1c2giLCJoYXNNdWx0aXBsZVBpY3R1cmVzIiwibGVuZ3RoIiwiaGFzRGVzY3JpcHRpb24iLCJleHBsYW5hdGlvbiIsIndyYXBwZXJTdHlsZSIsImdldFBpY1BhdGgiLCJ1cmwiLCJ0aXRsZSIsIm1hdGVyaWFscyIsInNwbGl0VGV4dCIsImUiLCJjaGFuZ2VQcmV2IiwiZWxlbWVudCIsImluZGV4IiwiYVN0eWxlIiwicGljVVJMIiwiY2hhbmdlRWxlbWVudCIsImNoYW5nZU5leHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLHVCOzs7OztBQUNqQixtQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHFOQU9OLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUEwQjtBQUNuQ0QsV0FBSyxDQUFDRSxjQUFOO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQkosYUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixDQXJHSjtBQUFBO0FBQUE7QUFBQSxtanZCQURKO0FBa1NIOzs7O0VBM1ZnRDJCLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU2MzRjNTIyMGMxODU5YTYwYmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2lzdGlhRW1iZWQgZnJvbSAnLi4vY29tcG9uZW50cy93aXN0aWFfZW1iZWQnXHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aU9iamVjdEdhbGxlcnlNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdHVhbEl0ZW06IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTmV4dCA9IChldmVudCwgdG90YWxFbGVtZW50cykgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB1cGRhdGVJdGVtID0gdGhpcy5zdGF0ZS5hY3R1YWxJdGVtID09PSB0b3RhbEVsZW1lbnRzIC0gMSA/IDAgOiB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gKyAxXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0dWFsSXRlbTogdXBkYXRlSXRlbX0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUHJldiA9IChldmVudCwgdG90YWxFbGVtZW50cykgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB1cGRhdGVJdGVtID0gdGhpcy5zdGF0ZS5hY3R1YWxJdGVtID09PSAwID8gdG90YWxFbGVtZW50cyAtIDEgOiB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gLSAxXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0dWFsSXRlbTogdXBkYXRlSXRlbX0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRWxlbWVudCA9IChldmVudCwgcGljSW5kZXgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0dWFsSXRlbTogcGljSW5kZXh9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBpY1BhdGggPSAoZ2FsVXJsLCBQcm9qZWN0VXJsLCBmb2xkZXIsIHBpY3R1cmVOYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBzdGF0aWMvcGljcy8ke2dhbFVybH0vJHtQcm9qZWN0VXJsfS8ke2ZvbGRlcn0vJHtwaWN0dXJlTmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgc3BsaXRUZXh0ID0gY2hhaW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvUmV0dXJuID0gY2hhaW4gPyBjaGFpbi5zcGxpdChcIlxcblwiKS5tYXAoKGl0ZW0sIGkpID0+IDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgIHtpdGVtfTwvcD4pIDogXCJcIlxyXG4gICAgICAgIHJldHVybiB0b1JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2xvc2VQcm9qZWN0LCBwcm9qZWN0SW5mbywgZ2FsbGVyeU5hbWV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHthY3R1YWxJdGVtfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IGdhbGxlcnlFbGVtZW50cyA9IFtdXHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvUXFDb2RlKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJRUXZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvUXFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvV2lzdGlhQ29kZSkge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMgPSBbW1wiV2lzdGlhVmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9XaXN0aWFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnBpY3R1cmVzKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RJbmZvLnBpY3R1cmVzLm1hcChwaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLnB1c2goW1wiaW1hZ2VcIiwgcGljXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlUGljdHVyZXMgPSBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGhhc0Rlc2NyaXB0aW9uID0gcHJvamVjdEluZm8uZXhwbGFuYXRpb24gIT09IFwiXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBsZXQgd3JhcHBlclN0eWxlID0gaGFzTXVsdGlwbGVQaWN0dXJlcyA/IFwibXVsdGlwbGVQaWN0dXJlc1wiIDogXCJzaW5nbGVQaWN0dXJlXCJcclxuICAgICAgICB3cmFwcGVyU3R5bGUgKz0gaGFzRGVzY3JpcHRpb24gPyBcIiBoYXNEZXNjcmlwdGlvblwiIDogXCIgd2l0aG91dERlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsR2FsbGVyeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJTdHlsZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWNDb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxJdGVtICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvZiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiaW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcImJpZ1wiLCBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzBdID09PSBcIlFRdmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vdi5xcS5jb20vdHhwL2lmcmFtZS9wbGF5ZXIuaHRtbD92aWQ9JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX0+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiV2lzdGlhVmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb1NTUj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXN0aWFFbWJlZCBoYXNoZWRJZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb2xvcj1cIiM1NmJlOGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9TU1I+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNEZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhbmF0aW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5tYXRlcmlhbHMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0VGV4dChwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5leHBsYW5hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFzTXVsdGlwbGVQaWN0dXJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdkJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxQcmV2XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VQcmV2KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2VGh1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFTdHlsZSA9IGluZGV4ID09PSBhY3R1YWxJdGVtID8gXCJhY3R1YWxcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNVUkwgPSBlbGVtZW50WzBdID09PSBcImltYWdlXCIgPyBlbGVtZW50WzFdIDogXCJ2aWRlby1kZWZhdWx0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZUVsZW1lbnQoZSwgaW5kZXgsIGVsZW1lbnRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcInRoXCIsIHBpY1VSTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsTmV4dFwiIGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHRoaXMuY2hhbmdlTmV4dChlLCBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5OZXh0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbENsb3NlXCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZVByb2plY3R9PkNsb3NlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXSAxMnZ3IFtlbmRdO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW2ltYWdlXSA4MCUgW25hdmJhcl0gMjB2aCBbZW5kXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogcHJldiAvIG5leHQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nyk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAzNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IG5leHQgLyBlbmQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2VGh1bWJzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsQ2xvc2Uge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzFweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvY3NzL21vZGFsLW5hdi5wbmcpO1xyXG4gICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtMTAwMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxCdXR0b24gYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsUHJldiBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxOZXh0IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb3VudGVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGU4ZThlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgYSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQ6IDEuM2VtIHJhbGV3YXktYmxhY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LXNlbWlib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZDJkMmQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmFjdHVhbCBpbWcge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIDQwdmg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICBcIm5hdiBjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIFwicGljdHVyZSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgXCJleHBsYW5hdGlvbiBleHBsYW5hdGlvblwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbc3RhcnRdYXV0b1twaWN0dXJlXSA4MHB4IFtjbG9zZV0gNDB2aFtkZXNjcmlwdGlvbl07XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtzdGFydF1hdXRvW2Nsb3NlXSA4MHB4IFtlbmRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbmF2QmFyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmF2O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gODBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInByZXYgdGh1bWJzIG5leHRcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzdGFydCAvIGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHN0YXJ0IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogY2xvc2UgLyBlbmQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzdGFydCAvIGNsb3NlO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHBpY3R1cmUgLyBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2V4cGxhbmF0aW9uQm94IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZXhwbGFuYXRpb247XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsUHJldiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHByZXY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbE5leHQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuZXh0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxDbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbmF2VGh1bWJzIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGh1bWJzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjcGljQ29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=