webpackHotUpdate("static\\development\\pages\\poems.js",{

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
          className: "descText",
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
        className: "jsx-2724200432" + " " + (wrapperStyle || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "picContainer",
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, galleryElements.length > 1 && __jsx("div", {
        id: "picCounter",
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }
      }, "".concat(actualItem + 1, " of ").concat(galleryElements.length), " "), galleryElements[actualItem][0] === "image" && __jsx("img", {
        src: this.getPicPath(galleryName, projectInfo.url, "big", galleryElements[actualItem][1]),
        className: "jsx-2724200432",
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
        className: "jsx-2724200432",
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
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }
      }, projectInfo.explanation.title), projectInfo.explanation.materials !== "" && __jsx("span", {
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, projectInfo.explanation.materials), this.splitText(projectInfo.explanation.explanation), " "), hasMultiplePictures && __jsx("div", {
        id: "navBar",
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "modalPrev",
        className: "jsx-2724200432" + " " + "modalButton",
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
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }
      }, "Previous")), __jsx("div", {
        id: "navThumbs",
        className: "jsx-2724200432",
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
          className: "jsx-2724200432" + " " + (aStyle || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 37
          }
        }, __jsx("img", {
          src: _this2.getPicPath(galleryName, projectInfo.url, "th", picURL),
          className: "jsx-2724200432",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 41
          }
        }));
      }), " "), __jsx("div", {
        id: "modalNext",
        className: "jsx-2724200432" + " " + "modalButton",
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
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      }, "Next"))), __jsx("div", {
        id: "modalClose",
        className: "jsx-2724200432" + " " + "modalButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("a", {
        onClick: closeProject,
        className: "jsx-2724200432",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }
      }, "Close")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2724200432",
        __self: this
      }, "#modalGallery.jsx-2724200432{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.88);z-index:100;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close] 12vw [end];grid-template-rows:[image] 80% [navbar] 20vh [end];}#picContainer.jsx-2724200432{grid-column:prev / next;grid-row:image / navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#explanationBox.jsx-2724200432{background-color:rgba(0,0,0,0.57);padding:40px 35px 20px;overflow:auto;grid-column:next / end;grid-row:image / navbar;}#navBar.jsx-2724200432{grid-column:prev / close;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close];}#navThumbs.jsx-2724200432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#modalClose.jsx-2724200432{grid-column:close / end;}#modalGallery.singlePicture.jsx-2724200432 #picContainer.jsx-2724200432{grid-row:image / end;}#picContainer.jsx-2724200432 img.jsx-2724200432{width:auto;height:auto;max-height:100%;max-width:100%;}iframe.jsx-2724200432{width:80vw;height:71vh;}#modalGallery.singlePicture.jsx-2724200432 #explanationBox.jsx-2724200432{grid-row:image / navbar;}.modalButton.jsx-2724200432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.modalButton.jsx-2724200432 a.jsx-2724200432{width:71px;height:71px;background-image:url(/static/css/modal-nav.png);text-indent:-10000px;}.modalButton.jsx-2724200432 a.jsx-2724200432:hover{background-position-x:right;cursor:pointer;}#modalPrev.jsx-2724200432 a.jsx-2724200432{background-position-y:bottom;}#modalNext.jsx-2724200432 a.jsx-2724200432{background-position-y:center;}#picCounter.jsx-2724200432{position:absolute;left:30%;top:10px;background-color:rgba(0,0,0,0.79);width:120px;height:24px;text-align:center;color:#8e8e8e;font-size:0.8em;padding-top:6px;border-radius:20px;}#navThumbs.jsx-2724200432 a.jsx-2724200432{width:110px;min-width:110px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 7px;}#navThumbs.jsx-2724200432 img.jsx-2724200432{width:auto;height:auto;max-height:90%;max-width:90%;}h1.jsx-2724200432{margin-top:0;font:1.3em raleway-black;color:white;}span.jsx-2724200432{font-family:raleway-semibold;color:#d2d2d2;}p.descText.jsx-2724200432{font-size:0.9em;color:white;}a.actual.jsx-2724200432 img.jsx-2724200432{border-right:5px solid #e7e7e7;border-left:5px solid #e7e7e7;margin-left:-5px;}@media only screen and (max-width:600px){#modalGallery.jsx-2724200432{grid-template-columns:auto 80px;grid-template-rows:100px auto 40vh;grid-template-areas: \"nav close\" \"picture picture\" \"explanation explanation\";}#modalGallery.singlePicture.hasDescription.jsx-2724200432{grid-template-rows:[start]auto[picture] 80px [close] 40vh[description];grid-template-columns:[start]auto[close] 80px [end];}#navBar.jsx-2724200432{grid-area:nav;grid-template-columns:80px auto 80px;grid-template-rows:100px;grid-template-areas:\"prev thumbs next\";}#picContainer.jsx-2724200432{grid-area:picture;}#modalGallery.singlePicture.hasDescription.jsx-2724200432 #picContainer.jsx-2724200432{grid-column:start / description;grid-row:start / close;}#modalGallery.singlePicture.hasDescription.jsx-2724200432 #modalClose.jsx-2724200432{grid-column:close / end;grid-row:picture / close;}#modalGallery.singlePicture.hasDescription.jsx-2724200432 #explanationBox.jsx-2724200432{grid-column:start / close;grid-row:picture / description;margin-right:80px;}#explanationBox.jsx-2724200432{grid-area:explanation;padding-bottom:50px;}#modalPrev.jsx-2724200432{grid-area:prev;}#modalNext.jsx-2724200432{grid-area:next;}#modalClose.jsx-2724200432{grid-area:close;}#navThumbs.jsx-2724200432{grid-area:thumbs;}#picContainer.jsx-2724200432 img.jsx-2724200432{max-height:50vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxERVZcXHdlbndlbi13ZWJzaXRlXFxsYXlvdXRcXE11bHRpT2JqZWN0c0dhbGxlcnlNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S3FCLEFBRzhCLEFBWVMsQUFPYSxBQU9aLEFBS1osQUFPVyxBQUdILEFBR1YsQUFNQSxBQUlhLEFBR1gsQUFLRixBQU1pQixBQUlDLEFBR0EsQUFHWCxBQWFOLEFBUUQsQUFNRSxBQUtnQixBQUliLEFBSWUsQUFNRyxBQVF1QyxBQUl6RCxBQU1JLEFBR2MsQUFJUixBQUlFLEFBS0osQUFJUCxBQUdBLEFBR0MsQUFHQyxBQUdELFdBaklOLEFBTUEsQUFZQSxBQXFDQSxDQVJJLENBY1MsQ0ErQmMsQ0F4SWpDLEFBa0tOLEFBR0EsQ0FuRFksQUFzRFosQUFNQSxDQUhBLENBN0ZTLEFBZ0VULEdBN0lPLEFBd0NULENBcUh3QixDQWpITixBQU1sQixBQVlrRCxBQXFDakMsQ0F4RlMsQUEwQjFCLEFBZ0JBLEFBK0Y2QixDQTNIZCxDQStIb0IsQ0ExRXhCLENBN0VHLEFBa0VHLEFBd0JGLEFBdUJmLENBM0NBLEFBR0EsQUFtQ2dCLEVBUWdCLENBTU8sQUFxQlosRUE5SEYsRUE2RGMsRUFyRDRCLEFBMEVuRCxBQUtGLENBNURHLENBM0NGLEVBNEpiLENBMUZGLEFBMENBLEtBbEdlLENBeUliLENBM0NGLENBOEI2QixDQW5DN0IsQ0FsR3VDLENBMkN2QyxDQW1HRSxFQTlIYyxBQXNJTSxJQW5DSCxNQVNZLEdBL0NqQixDQTVEVyxBQTJDRixBQW9FaUMsR0FyR3JDLEFBMEJNLENBa0d2QixDQWpCeUMsRUFsQjNDLElBdENjLEtBN0VBLEtBNERkLEVBM0MwQixBQTZETixLQTdFTCxHQXVGYyxDQWpFN0IsU0FyQjhFLEFBNkU5RCxHQXVEZCxHQXBIRixJQVRxQixDQXVIbkIsR0FoRGdCLFdBckRBLEtBc0RBLEVBMkNoQixTQWhHMkIsS0FzRFIsZUE3QkEsSUE4QnJCLFdBaEZxRCxtQkFzRmhDLFFBL0VJLHdCQU56QixtQkF5QnFCLFFBeUJyQixrQ0FvQ2UsYUFDZixDQWhGQSxxQ0FtQkEiLCJmaWxlIjoiRDpcXERFVlxcd2Vud2VuLXdlYnNpdGVcXGxheW91dFxcTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpc3RpYUVtYmVkIGZyb20gJy4uL2NvbXBvbmVudHMvd2lzdGlhX2VtYmVkJ1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlPYmplY3RHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3R1YWxJdGVtOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU5leHQgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlSXRlbSA9IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gdG90YWxFbGVtZW50cyAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtICsgMVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHVwZGF0ZUl0ZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByZXYgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlSXRlbSA9IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gMCA/IHRvdGFsRWxlbWVudHMgLSAxIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtIC0gMVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHVwZGF0ZUl0ZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVsZW1lbnQgPSAoZXZlbnQsIHBpY0luZGV4KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHBpY0luZGV4fSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWNQYXRoID0gKGdhbFVybCwgUHJvamVjdFVybCwgZm9sZGVyLCBwaWN0dXJlTmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgc3RhdGljL3BpY3MvJHtnYWxVcmx9LyR7UHJvamVjdFVybH0vJHtmb2xkZXJ9LyR7cGljdHVyZU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIHNwbGl0VGV4dCA9IGNoYWluID0+IHtcclxuICAgICAgICBjb25zdCB0b1JldHVybiA9IGNoYWluID8gY2hhaW4uc3BsaXQoXCJcXG5cIikubWFwKChpdGVtLCBpKSA9PiA8cCBrZXk9e2l9IGNsYXNzTmFtZT1cImRlc2NUZXh0XCI+XHJcbiAgICAgICAgICAgIHtpdGVtfTwvcD4pIDogXCJcIlxyXG4gICAgICAgIHJldHVybiB0b1JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2xvc2VQcm9qZWN0LCBwcm9qZWN0SW5mbywgZ2FsbGVyeU5hbWV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHthY3R1YWxJdGVtfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IGdhbGxlcnlFbGVtZW50cyA9IFtdXHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvUXFDb2RlKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJRUXZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvUXFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvV2lzdGlhQ29kZSkge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMgPSBbW1wiV2lzdGlhVmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9XaXN0aWFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnBpY3R1cmVzKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RJbmZvLnBpY3R1cmVzLm1hcChwaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLnB1c2goW1wiaW1hZ2VcIiwgcGljXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlUGljdHVyZXMgPSBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGhhc0Rlc2NyaXB0aW9uID0gcHJvamVjdEluZm8uZXhwbGFuYXRpb24gIT09IFwiXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBsZXQgd3JhcHBlclN0eWxlID0gaGFzTXVsdGlwbGVQaWN0dXJlcyA/IFwibXVsdGlwbGVQaWN0dXJlc1wiIDogXCJzaW5nbGVQaWN0dXJlXCJcclxuICAgICAgICB3cmFwcGVyU3R5bGUgKz0gaGFzRGVzY3JpcHRpb24gPyBcIiBoYXNEZXNjcmlwdGlvblwiIDogXCIgd2l0aG91dERlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsR2FsbGVyeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJTdHlsZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWNDb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxJdGVtICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvZiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiaW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcImJpZ1wiLCBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzBdID09PSBcIlFRdmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vdi5xcS5jb20vdHhwL2lmcmFtZS9wbGF5ZXIuaHRtbD92aWQ9JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX0+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiV2lzdGlhVmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb1NTUj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXN0aWFFbWJlZCBoYXNoZWRJZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb2xvcj1cIiM1NmJlOGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9TU1I+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNEZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhbmF0aW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5tYXRlcmlhbHMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0VGV4dChwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5leHBsYW5hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFzTXVsdGlwbGVQaWN0dXJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdkJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxQcmV2XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VQcmV2KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2VGh1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFTdHlsZSA9IGluZGV4ID09PSBhY3R1YWxJdGVtID8gXCJhY3R1YWxcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNVUkwgPSBlbGVtZW50WzBdID09PSBcImltYWdlXCIgPyBlbGVtZW50WzFdIDogXCJ2aWRlby1kZWZhdWx0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZUVsZW1lbnQoZSwgaW5kZXgsIGVsZW1lbnRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcInRoXCIsIHBpY1VSTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsTmV4dFwiIGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHRoaXMuY2hhbmdlTmV4dChlLCBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5OZXh0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbENsb3NlXCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZVByb2plY3R9PkNsb3NlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXSAxMnZ3IFtlbmRdO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW2ltYWdlXSA4MCUgW25hdmJhcl0gMjB2aCBbZW5kXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogcHJldiAvIG5leHQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nyk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAzNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IG5leHQgLyBlbmQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2VGh1bWJzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsQ2xvc2Uge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzFweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvY3NzL21vZGFsLW5hdi5wbmcpO1xyXG4gICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtMTAwMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxCdXR0b24gYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsUHJldiBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxOZXh0IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb3VudGVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGU4ZThlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgYSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQ6IDEuM2VtIHJhbGV3YXktYmxhY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LXNlbWlib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZDJkMmQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAuZGVzY1RleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYWN0dWFsIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gNDB2aDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgIFwibmF2IGNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgXCJwaWN0dXJlIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBcImV4cGxhbmF0aW9uIGV4cGxhbmF0aW9uXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtzdGFydF1hdXRvW3BpY3R1cmVdIDgwcHggW2Nsb3NlXSA0MHZoW2Rlc2NyaXB0aW9uXTtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XWF1dG9bY2xvc2VdIDgwcHggW2VuZF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJldiB0aHVtYnMgbmV4dFwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGljdHVyZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogc3RhcnQgLyBjbG9zZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBwaWN0dXJlIC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBleHBsYW5hdGlvbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxQcmV2IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcHJldjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsTmV4dCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG5leHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZUaHVtYnMge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aHVtYnM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\DEV\\\\wenwen-website\\\\layout\\\\MultiObjectsGalleryModal.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIl0sIm5hbWVzIjpbIk11bHRpT2JqZWN0R2FsbGVyeU1vZGFsIiwicHJvcHMiLCJldmVudCIsInRvdGFsRWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUl0ZW0iLCJzdGF0ZSIsImFjdHVhbEl0ZW0iLCJzZXRTdGF0ZSIsInBpY0luZGV4IiwiZ2FsVXJsIiwiUHJvamVjdFVybCIsImZvbGRlciIsInBpY3R1cmVOYW1lIiwiY2hhaW4iLCJ0b1JldHVybiIsInNwbGl0IiwibWFwIiwiaXRlbSIsImkiLCJjbG9zZVByb2plY3QiLCJwcm9qZWN0SW5mbyIsImdhbGxlcnlOYW1lIiwiZ2FsbGVyeUVsZW1lbnRzIiwidmlkZW9RcUNvZGUiLCJ2aWRlb1dpc3RpYUNvZGUiLCJwaWN0dXJlcyIsInBpYyIsInB1c2giLCJoYXNNdWx0aXBsZVBpY3R1cmVzIiwibGVuZ3RoIiwiaGFzRGVzY3JpcHRpb24iLCJleHBsYW5hdGlvbiIsIndyYXBwZXJTdHlsZSIsImdldFBpY1BhdGgiLCJ1cmwiLCJ0aXRsZSIsIm1hdGVyaWFscyIsInNwbGl0VGV4dCIsImUiLCJjaGFuZ2VQcmV2IiwiZWxlbWVudCIsImluZGV4IiwiYVN0eWxlIiwicGljVVJMIiwiY2hhbmdlRWxlbWVudCIsImNoYW5nZU5leHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLHVCOzs7OztBQUNqQixtQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHFOQU9OLFVBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUEwQjtBQUNuQ0QsV0FBSyxDQUFDRSxjQUFOO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQkosYUFB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RVYsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosQ0FyR0o7QUFBQTtBQUFBO0FBQUEsc2x2QkFESjtBQWlTSDs7OztFQTFWZ0QyQiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb2Vtcy5qcy41NzIwZGMyZjZmZjVkMGRmNzMwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpc3RpYUVtYmVkIGZyb20gJy4uL2NvbXBvbmVudHMvd2lzdGlhX2VtYmVkJ1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlPYmplY3RHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3R1YWxJdGVtOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU5leHQgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlSXRlbSA9IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gdG90YWxFbGVtZW50cyAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtICsgMVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHVwZGF0ZUl0ZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByZXYgPSAoZXZlbnQsIHRvdGFsRWxlbWVudHMpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlSXRlbSA9IHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gMCA/IHRvdGFsRWxlbWVudHMgLSAxIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtIC0gMVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHVwZGF0ZUl0ZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVsZW1lbnQgPSAoZXZlbnQsIHBpY0luZGV4KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdHVhbEl0ZW06IHBpY0luZGV4fSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWNQYXRoID0gKGdhbFVybCwgUHJvamVjdFVybCwgZm9sZGVyLCBwaWN0dXJlTmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgc3RhdGljL3BpY3MvJHtnYWxVcmx9LyR7UHJvamVjdFVybH0vJHtmb2xkZXJ9LyR7cGljdHVyZU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIHNwbGl0VGV4dCA9IGNoYWluID0+IHtcclxuICAgICAgICBjb25zdCB0b1JldHVybiA9IGNoYWluID8gY2hhaW4uc3BsaXQoXCJcXG5cIikubWFwKChpdGVtLCBpKSA9PiA8cCBrZXk9e2l9IGNsYXNzTmFtZT1cImRlc2NUZXh0XCI+XHJcbiAgICAgICAgICAgIHtpdGVtfTwvcD4pIDogXCJcIlxyXG4gICAgICAgIHJldHVybiB0b1JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2xvc2VQcm9qZWN0LCBwcm9qZWN0SW5mbywgZ2FsbGVyeU5hbWV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHthY3R1YWxJdGVtfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IGdhbGxlcnlFbGVtZW50cyA9IFtdXHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvUXFDb2RlKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cyA9IFtbXCJRUXZpZGVvXCIsIHByb2plY3RJbmZvLnZpZGVvUXFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnZpZGVvV2lzdGlhQ29kZSkge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMgPSBbW1wiV2lzdGlhVmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9XaXN0aWFDb2RlXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RJbmZvLnBpY3R1cmVzKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RJbmZvLnBpY3R1cmVzLm1hcChwaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzLnB1c2goW1wiaW1hZ2VcIiwgcGljXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlUGljdHVyZXMgPSBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGhhc0Rlc2NyaXB0aW9uID0gcHJvamVjdEluZm8uZXhwbGFuYXRpb24gIT09IFwiXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBsZXQgd3JhcHBlclN0eWxlID0gaGFzTXVsdGlwbGVQaWN0dXJlcyA/IFwibXVsdGlwbGVQaWN0dXJlc1wiIDogXCJzaW5nbGVQaWN0dXJlXCJcclxuICAgICAgICB3cmFwcGVyU3R5bGUgKz0gaGFzRGVzY3JpcHRpb24gPyBcIiBoYXNEZXNjcmlwdGlvblwiIDogXCIgd2l0aG91dERlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsR2FsbGVyeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dyYXBwZXJTdHlsZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWNDb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxJdGVtICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvZiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiaW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcImJpZ1wiLCBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzBdID09PSBcIlFRdmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vdi5xcS5jb20vdHhwL2lmcmFtZS9wbGF5ZXIuaHRtbD92aWQ9JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2FjdHVhbEl0ZW1dWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX0+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiV2lzdGlhVmlkZW9cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb1NTUj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXN0aWFFbWJlZCBoYXNoZWRJZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb2xvcj1cIiM1NmJlOGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9TU1I+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNEZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhbmF0aW9uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5tYXRlcmlhbHMgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0VGV4dChwcm9qZWN0SW5mby5leHBsYW5hdGlvbi5leHBsYW5hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFzTXVsdGlwbGVQaWN0dXJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdkJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxQcmV2XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5jaGFuZ2VQcmV2KGUsIGdhbGxlcnlFbGVtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2VGh1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFTdHlsZSA9IGluZGV4ID09PSBhY3R1YWxJdGVtID8gXCJhY3R1YWxcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNVUkwgPSBlbGVtZW50WzBdID09PSBcImltYWdlXCIgPyBlbGVtZW50WzFdIDogXCJ2aWRlby1kZWZhdWx0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB0aGlzLmNoYW5nZUVsZW1lbnQoZSwgaW5kZXgsIGVsZW1lbnRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGljUGF0aChnYWxsZXJ5TmFtZSwgcHJvamVjdEluZm8udXJsLCBcInRoXCIsIHBpY1VSTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsTmV4dFwiIGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHRoaXMuY2hhbmdlTmV4dChlLCBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5OZXh0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbENsb3NlXCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZVByb2plY3R9PkNsb3NlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXSAxMnZ3IFtlbmRdO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW2ltYWdlXSA4MCUgW25hdmJhcl0gMjB2aCBbZW5kXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogcHJldiAvIG5leHQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nyk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAzNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IG5leHQgLyBlbmQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2VGh1bWJzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsQ2xvc2Uge1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUgI3BpY0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlICNleHBsYW5hdGlvbkJveCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gbmF2YmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzFweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvY3NzL21vZGFsLW5hdi5wbmcpO1xyXG4gICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtMTAwMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW9kYWxCdXR0b24gYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21vZGFsUHJldiBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbW9kYWxOZXh0IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwaWNDb3VudGVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGU4ZThlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgYSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXZUaHVtYnMgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQ6IDEuM2VtIHJhbGV3YXktYmxhY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LXNlbWlib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZDJkMmQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAuZGVzY1RleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYWN0dWFsIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gNDB2aDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgIFwibmF2IGNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgXCJwaWN0dXJlIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBcImV4cGxhbmF0aW9uIGV4cGxhbmF0aW9uXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtzdGFydF1hdXRvW3BpY3R1cmVdIDgwcHggW2Nsb3NlXSA0MHZoW2Rlc2NyaXB0aW9uXTtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XWF1dG9bY2xvc2VdIDgwcHggW2VuZF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZCYXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJldiB0aHVtYnMgbmV4dFwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjcGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGljdHVyZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNwaWNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogc3RhcnQgLyBjbG9zZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBwaWN0dXJlIC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZS5oYXNEZXNjcmlwdGlvbiAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gY2xvc2U7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBleHBsYW5hdGlvbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbW9kYWxQcmV2IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcHJldjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21vZGFsTmV4dCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG5leHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtb2RhbENsb3NlIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNuYXZUaHVtYnMge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aHVtYnM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNwaWNDb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==