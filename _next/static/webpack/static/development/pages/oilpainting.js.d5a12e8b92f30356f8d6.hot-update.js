webpackHotUpdate("static/development/pages/oilpainting.js",{

/***/ "./layout/MultiObjectsGalleryModal.js":
/*!********************************************!*\
  !*** ./layout/MultiObjectsGalleryModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiObjectGalleryModal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/XiaoBaiCai/2020/labs/wenwen-next/layout/MultiObjectsGalleryModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var MultiObjectGalleryModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MultiObjectGalleryModal, _React$Component);

  function MultiObjectGalleryModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MultiObjectGalleryModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiObjectGalleryModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeNext", function (event, totalElements) {
      event.preventDefault();
      var updateItem = _this.state.actualItem === totalElements - 1 ? 0 : _this.state.actualItem + 1;

      _this.setState({
        actualItem: updateItem
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changePrev", function (event, totalElements) {
      event.preventDefault();
      var updateItem = _this.state.actualItem === 0 ? totalElements - 1 : _this.state.actualItem - 1;

      _this.setState({
        actualItem: updateItem
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeElement", function (event, picIndex) {
      event.preventDefault();

      _this.setState({
        actualItem: picIndex
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getPicPath", function (galUrl, ProjectUrl, folder, pictureName) {
      return "static/pics/".concat(galUrl, "/").concat(ProjectUrl, "/").concat(folder, "/").concat(pictureName);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "splitText", function (chain) {
      var toReturn = chain ? chain.split("\n").map(function (item, i) {
        return __jsx("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, item);
      }) : "";
      return toReturn;
    });

    _this.state = {
      actualItem: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MultiObjectGalleryModal, [{
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
        galleryElements = [["video", projectInfo.videoQqCode]];
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
        className: "jsx-2363280725" + " " + (wrapperStyle || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        id: "picContainer",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, galleryElements.length > 1 && __jsx("div", {
        id: "picCounter",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "".concat(actualItem + 1, " of ").concat(galleryElements.length)), galleryElements[actualItem][0] === "image" && __jsx("img", {
        src: this.getPicPath(galleryName, projectInfo.url, "big", galleryElements[actualItem][1]),
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), galleryElements[actualItem][0] === "video" && __jsx("iframe", {
        frameborder: "0",
        src: "https://v.qq.com/txp/iframe/player.html?vid=".concat(galleryElements[actualItem][1]),
        allowFullScreen: "true",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), hasDescription && __jsx("div", {
        id: "explanationBox",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, projectInfo.explanation.title), projectInfo.explanation.materials !== "" && __jsx("span", {
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, projectInfo.explanation.materials), this.splitText(projectInfo.explanation.explanation)), hasMultiplePictures && __jsx("div", {
        id: "navBar",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        id: "modalPrev",
        className: "jsx-2363280725" + " " + "modalButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changePrev(e, galleryElements.length);
        },
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Previous")), __jsx("div", {
        id: "navThumbs",
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, galleryElements.map(function (element, index) {
        var aStyle = index === actualItem ? "actual" : "";
        return __jsx("a", {
          onClick: function onClick(e) {
            return _this2.changeElement(e, index, element[0]);
          },
          key: index,
          className: "jsx-2363280725" + " " + (aStyle || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, element[0] === "video" && __jsx("img", {
          src: _this2.getPicPath(galleryName, projectInfo.url, "th", "video-default.jpg"),
          className: "jsx-2363280725",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), element[0] === "image" && __jsx("img", {
          src: _this2.getPicPath(galleryName, projectInfo.url, "th", element[1]),
          className: "jsx-2363280725",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }));
      })), __jsx("div", {
        id: "modalNext",
        className: "jsx-2363280725" + " " + "modalButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("a", {
        onClick: function onClick(e) {
          return _this2.changeNext(e, galleryElements.length);
        },
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Next"))), __jsx("div", {
        id: "modalClose",
        className: "jsx-2363280725" + " " + "modalButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("a", {
        onClick: closeProject,
        className: "jsx-2363280725",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Close")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2363280725",
        __self: this
      }, "#modalGallery.jsx-2363280725{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.88);z-index:100;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close] 12vw [end];grid-template-rows:[image] 80% [navbar] 20vh [end];}#picContainer.jsx-2363280725{grid-column:prev / next;grid-row:image / navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#explanationBox.jsx-2363280725{background-color:rgba(0,0,0,0.57);padding:40px 35px 20px;overflow:auto;grid-column:next / end;grid-row:image / navbar;}#navBar.jsx-2363280725{grid-column:prev / close;display:grid;grid-template-columns:[prev] 10vw [nav] auto [next] 12vw [close];}#navThumbs.jsx-2363280725{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#modalClose.jsx-2363280725{grid-column:close / end;}#modalGallery.singlePicture.jsx-2363280725 #picContainer.jsx-2363280725{grid-row:image / end;}#picContainer.jsx-2363280725 img.jsx-2363280725{width:auto;height:auto;max-height:100%;max-width:100%;}iframe.jsx-2363280725{width:80vw;height:71vh;}#modalGallery.singlePicture.jsx-2363280725 #explanationBox.jsx-2363280725{grid-row:image / navbar;}.modalButton.jsx-2363280725{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.modalButton.jsx-2363280725 a.jsx-2363280725{width:71px;height:71px;background-image:url(/static/css/modal-nav.png);text-indent:-10000px;}.modalButton.jsx-2363280725 a.jsx-2363280725:hover{background-position-x:right;cursor:pointer;}#modalPrev.jsx-2363280725 a.jsx-2363280725{background-position-y:bottom;}#modalNext.jsx-2363280725 a.jsx-2363280725{background-position-y:center;}#picCounter.jsx-2363280725{position:absolute;left:30%;top:10px;background-color:rgba(0,0,0,0.79);width:120px;height:24px;text-align:center;color:#8e8e8e;font-size:0.8em;padding-top:6px;border-radius:20px;}#navThumbs.jsx-2363280725 a.jsx-2363280725{width:110px;min-width:110px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 7px;}#navThumbs.jsx-2363280725 img.jsx-2363280725{width:auto;height:auto;max-height:90%;max-width:90%;}h1.jsx-2363280725{margin-top:0;font:1.3em raleway-black;color:white;}span.jsx-2363280725{font-family:raleway-semibold;color:#d2d2d2;}p.jsx-2363280725{color:#878787;font-size:0.9em;}a.actual.jsx-2363280725 img.jsx-2363280725{border-right:5px solid #e7e7e7;border-left:5px solid #e7e7e7;margin-left:-5px;}@media only screen and (max-width:600px){#modalGallery.jsx-2363280725{grid-template-columns:auto 80px;grid-template-rows:100px auto 40vh;grid-template-areas: \"nav close\" \"picture picture\" \"explanation explanation\";}#modalGallery.singlePicture.hasDescription.jsx-2363280725{grid-template-rows:[start]auto[picture] 80px [close] 40vh[description];grid-template-columns:[start]auto[close] 80px [end];}#navBar.jsx-2363280725{grid-area:nav;grid-template-columns:80px auto 80px;grid-template-rows:100px;grid-template-areas:\"prev thumbs next\";}#picContainer.jsx-2363280725{grid-area:picture;}#modalGallery.singlePicture.hasDescription.jsx-2363280725 #picContainer.jsx-2363280725{grid-column:start / description;grid-row:start / close;}#modalGallery.singlePicture.hasDescription.jsx-2363280725 #modalClose.jsx-2363280725{grid-column:close / end;grid-row:picture / close;}#modalGallery.singlePicture.hasDescription.jsx-2363280725 #explanationBox.jsx-2363280725{grid-column:start / close;grid-row:picture / description;margin-right:80px;}#explanationBox.jsx-2363280725{grid-area:explanation;padding-bottom:50px;}#modalPrev.jsx-2363280725{grid-area:prev;}#modalNext.jsx-2363280725{grid-area:next;}#modalClose.jsx-2363280725{grid-area:close;}#navThumbs.jsx-2363280725{grid-area:thumbs;}#picContainer.jsx-2363280725 img.jsx-2363280725{max-height:50vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YaWFvQmFpQ2FpLzIwMjAvbGFicy93ZW53ZW4tbmV4dC9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNKVyxBQUc4QixBQWFTLEFBUWEsQUFRWixBQU1aLEFBUVcsQUFJSCxBQUlWLEFBT0EsQUFLYSxBQUlYLEFBTUYsQUFPaUIsQUFLQyxBQUlBLEFBSVgsQUFjTixBQVNELEFBTUUsQUFNZ0IsQUFLZixBQUtpQixBQU1HLEFBU3VDLEFBSXpELEFBT0ksQUFHYyxBQUtSLEFBS0UsQUFNSixBQUlQLEFBR0EsQUFHQyxBQUlDLEFBSUQsV0FySk4sQUFPQSxBQWVBLEFBMkNBLENBVEksQ0FlUyxDQVdULEFBd0J1QixDQTdKakMsQUEyTE4sQUFHQSxDQUdBLEFBUUEsQ0FKQSxDQXhHUyxBQXVFVCxHQW5LTyxBQThDVCxDQXdJd0IsQ0FuSU4sQUFPbEIsQUFla0QsQUEyQ2pDLENBeEdTLEFBOEIxQixBQW9CQSxBQTZHNkIsQ0EvSWQsQ0FvSm9CLENBbkZ4QixDQTVGRyxBQThFRyxBQTRCRixDQXZCZixBQUlBLEFBdUNnQixDQU1oQixDQUlnQyxDQU1PLEFBdUJaLEVBbEpGLEVBMEVjLEVBakU0QixBQXdGbkQsQUFLRixDQXRFRyxDQWxERixFQXFMYixDQXZHRixBQWdEQSxLQW5IZSxDQStKYixDQWpERixDQWtDNkIsQ0F2QzdCLENBbkh1QyxDQWtEdkMsQ0FrSEUsRUFsSmMsQUE0Sk0sSUF2Q0gsTUFTWSxHQXBEakIsQ0F6RVcsQUFvREYsQUE4RWlDLEdBdEhyQyxBQWdDTSxDQWdIdkIsQ0FwQnlDLEVBbkIzQyxJQTNDYyxLQTVGQSxLQXVFZCxFQXBEMEIsQUEwRU4sS0E1RkwsR0F1R2MsQ0E5RTdCLFNBeEI4RSxBQTRGOUQsR0E2RGQsR0F2SUYsSUFWcUIsQ0EySW5CLEdBdERnQixXQWhFQSxLQWlFQSxFQWdEaEIsU0FoSDJCLEtBaUVSLGVBbENBLElBbUNyQixXQS9GcUQsbUJBc0doQyxRQTlGSSx3QkFQekIsbUJBNkJxQixRQStCckIsa0NBMENlLGFBQ2YsQ0EvRkEscUNBc0JBIiwiZmlsZSI6Ii9Vc2Vycy9YaWFvQmFpQ2FpLzIwMjAvbGFicy93ZW53ZW4tbmV4dC9sYXlvdXQvTXVsdGlPYmplY3RzR2FsbGVyeU1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlPYmplY3RHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3R1YWxJdGVtOiAwXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTmV4dCA9IChldmVudCwgdG90YWxFbGVtZW50cykgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB1cGRhdGVJdGVtID1cbiAgICAgIHRoaXMuc3RhdGUuYWN0dWFsSXRlbSA9PT0gdG90YWxFbGVtZW50cyAtIDFcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5zdGF0ZS5hY3R1YWxJdGVtICsgMVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3R1YWxJdGVtOiB1cGRhdGVJdGVtIH0pXG4gIH1cblxuICBjaGFuZ2VQcmV2ID0gKGV2ZW50LCB0b3RhbEVsZW1lbnRzKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPVxuICAgICAgdGhpcy5zdGF0ZS5hY3R1YWxJdGVtID09PSAwXG4gICAgICAgID8gdG90YWxFbGVtZW50cyAtIDFcbiAgICAgICAgOiB0aGlzLnN0YXRlLmFjdHVhbEl0ZW0gLSAxXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdHVhbEl0ZW06IHVwZGF0ZUl0ZW0gfSlcbiAgfVxuXG4gIGNoYW5nZUVsZW1lbnQgPSAoZXZlbnQsIHBpY0luZGV4KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3R1YWxJdGVtOiBwaWNJbmRleCB9KVxuICB9XG5cbiAgZ2V0UGljUGF0aCA9IChnYWxVcmwsIFByb2plY3RVcmwsIGZvbGRlciwgcGljdHVyZU5hbWUpID0+IHtcbiAgICByZXR1cm4gYHN0YXRpYy9waWNzLyR7Z2FsVXJsfS8ke1Byb2plY3RVcmx9LyR7Zm9sZGVyfS8ke3BpY3R1cmVOYW1lfWBcbiAgfVxuXG4gIHNwbGl0VGV4dCA9IGNoYWluID0+IHtcbiAgICBjb25zdCB0b1JldHVybiA9IGNoYWluXG4gICAgICA/IGNoYWluLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSwgaSkgPT4gPHAga2V5PXtpfT57aXRlbX08L3A+KVxuICAgICAgOiBcIlwiXG4gICAgcmV0dXJuIHRvUmV0dXJuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbG9zZVByb2plY3QsIHByb2plY3RJbmZvLCBnYWxsZXJ5TmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWN0dWFsSXRlbSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGdhbGxlcnlFbGVtZW50cyA9IFtdXG4gICAgaWYgKHByb2plY3RJbmZvLnZpZGVvUXFDb2RlKSB7XG4gICAgICBnYWxsZXJ5RWxlbWVudHMgPSBbW1widmlkZW9cIiwgcHJvamVjdEluZm8udmlkZW9RcUNvZGVdXVxuICAgIH1cbiAgICBpZiAocHJvamVjdEluZm8ucGljdHVyZXMpIHtcbiAgICAgIHByb2plY3RJbmZvLnBpY3R1cmVzLm1hcChwaWMgPT4ge1xuICAgICAgICBnYWxsZXJ5RWxlbWVudHMucHVzaChbXCJpbWFnZVwiLCBwaWNdKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYXNNdWx0aXBsZVBpY3R1cmVzID0gZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aCA+IDEgPyB0cnVlIDogZmFsc2VcbiAgICBjb25zdCBoYXNEZXNjcmlwdGlvbiA9IHByb2plY3RJbmZvLmV4cGxhbmF0aW9uICE9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlXG4gICAgbGV0IHdyYXBwZXJTdHlsZSA9IGhhc011bHRpcGxlUGljdHVyZXNcbiAgICAgID8gXCJtdWx0aXBsZVBpY3R1cmVzXCJcbiAgICAgIDogXCJzaW5nbGVQaWN0dXJlXCJcbiAgICB3cmFwcGVyU3R5bGUgKz0gaGFzRGVzY3JpcHRpb24gPyBcIiBoYXNEZXNjcmlwdGlvblwiIDogXCIgd2l0aG91dERlc2NyaXB0aW9uXCJcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibW9kYWxHYWxsZXJ5XCIgY2xhc3NOYW1lPXt3cmFwcGVyU3R5bGV9PlxuICAgICAgICA8ZGl2IGlkPVwicGljQ29udGFpbmVyXCI+XG4gICAgICAgICAge2dhbGxlcnlFbGVtZW50cy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWNDb3VudGVyXCI+e2Ake2FjdHVhbEl0ZW0gKyAxfSBvZiAke1xuICAgICAgICAgICAgICBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoXG4gICAgICAgICAgICB9YH08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwiaW1hZ2VcIiAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dGhpcy5nZXRQaWNQYXRoKFxuICAgICAgICAgICAgICAgIGdhbGxlcnlOYW1lLFxuICAgICAgICAgICAgICAgIHByb2plY3RJbmZvLnVybCxcbiAgICAgICAgICAgICAgICBcImJpZ1wiLFxuICAgICAgICAgICAgICAgIGdhbGxlcnlFbGVtZW50c1thY3R1YWxJdGVtXVsxXVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMF0gPT09IFwidmlkZW9cIiAmJiAoXG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vdi5xcS5jb20vdHhwL2lmcmFtZS9wbGF5ZXIuaHRtbD92aWQ9JHtnYWxsZXJ5RWxlbWVudHNbYWN0dWFsSXRlbV1bMV19YH1cbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiXG4gICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtoYXNEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBpZD1cImV4cGxhbmF0aW9uQm94XCI+XG4gICAgICAgICAgICA8aDE+e3Byb2plY3RJbmZvLmV4cGxhbmF0aW9uLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cHJvamVjdEluZm8uZXhwbGFuYXRpb24ubWF0ZXJpYWxzICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3RJbmZvLmV4cGxhbmF0aW9uLm1hdGVyaWFsc308L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3BsaXRUZXh0KHByb2plY3RJbmZvLmV4cGxhbmF0aW9uLmV4cGxhbmF0aW9uKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2hhc011bHRpcGxlUGljdHVyZXMgJiYgKFxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXZCYXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbFByZXZcIiBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IHRoaXMuY2hhbmdlUHJldihlLCBnYWxsZXJ5RWxlbWVudHMubGVuZ3RoKX0+XG4gICAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2VGh1bWJzXCI+XG4gICAgICAgICAgICAgIHtnYWxsZXJ5RWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFTdHlsZSA9IGluZGV4ID09PSBhY3R1YWxJdGVtID8gXCJhY3R1YWxcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmNoYW5nZUVsZW1lbnQoZSwgaW5kZXgsIGVsZW1lbnRbMF0pfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbMF0gPT09IFwidmlkZW9cIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLmdldFBpY1BhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5mby51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWRlby1kZWZhdWx0LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtlbGVtZW50WzBdID09PSBcImltYWdlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5nZXRQaWNQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluZm8udXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxOZXh0XCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17ZSA9PiB0aGlzLmNoYW5nZU5leHQoZSwgZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aCl9PlxuICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RhbENsb3NlXCIgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZVByb2plY3R9PkNsb3NlPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwcmV2XSAxMHZ3IFtuYXZdIGF1dG8gW25leHRdIDEydncgW2Nsb3NlXSAxMnZ3IFtlbmRdO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtpbWFnZV0gODAlIFtuYXZiYXJdIDIwdmggW2VuZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNwaWNDb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogcHJldiAvIG5leHQ7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNleHBsYW5hdGlvbkJveCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nyk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMzVweCAyMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IG5leHQgLyBlbmQ7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI25hdkJhciB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBwcmV2IC8gY2xvc2U7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3ByZXZdIDEwdncgW25hdl0gYXV0byBbbmV4dF0gMTJ2dyBbY2xvc2VdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbmF2VGh1bWJzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21vZGFsQ2xvc2Uge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogY2xvc2UgLyBlbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNtb2RhbEdhbGxlcnkuc2luZ2xlUGljdHVyZSAjcGljQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IGltYWdlIC8gZW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjcGljQ29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogNzF2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlICNleHBsYW5hdGlvbkJveCB7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiBpbWFnZSAvIG5hdmJhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsQnV0dG9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcxcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzFweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvY3NzL21vZGFsLW5hdi5wbmcpO1xuICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTEwMDAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbW9kYWxQcmV2IGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21vZGFsTmV4dCBhIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNwaWNDb3VudGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNuYXZUaHVtYnMgYSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbmF2VGh1bWJzIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIGZvbnQ6IDEuM2VtIHJhbGV3YXktYmxhY2s7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LXNlbWlib2xkO1xuICAgICAgICAgICAgICBjb2xvcjogI2QyZDJkMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhLmFjdHVhbCBpbWcge1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZTdlN2U3O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlN2U3ZTc7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gNDB2aDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICAgXCJuYXYgY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgXCJwaWN0dXJlIHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgXCJleHBsYW5hdGlvbiBleHBsYW5hdGlvblwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtzdGFydF1hdXRvW3BpY3R1cmVdIDgwcHggW2Nsb3NlXSA0MHZoW2Rlc2NyaXB0aW9uXTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtzdGFydF1hdXRvW2Nsb3NlXSA4MHB4IFtlbmRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNuYXZCYXIge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmF2O1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIDgwcHg7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInByZXYgdGh1bWJzIG5leHRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNwaWNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGljdHVyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI3BpY0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHN0YXJ0IC8gY2xvc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAjbW9kYWxHYWxsZXJ5LnNpbmdsZVBpY3R1cmUuaGFzRGVzY3JpcHRpb24gI21vZGFsQ2xvc2Uge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBjbG9zZSAvIGVuZDtcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogcGljdHVyZSAvIGNsb3NlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI21vZGFsR2FsbGVyeS5zaW5nbGVQaWN0dXJlLmhhc0Rlc2NyaXB0aW9uICNleHBsYW5hdGlvbkJveCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHN0YXJ0IC8gY2xvc2U7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHBpY3R1cmUgLyBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAjZXhwbGFuYXRpb25Cb3gge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZXhwbGFuYXRpb247XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI21vZGFsUHJldiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmV2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNtb2RhbE5leHQge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAjbW9kYWxDbG9zZSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNuYXZUaHVtYnMge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGh1bWJzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI3BpY0NvbnRhaW5lciBpbWcge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/XiaoBaiCai/2020/labs/wenwen-next/layout/MultiObjectsGalleryModal.js */"));
    }
  }]);

  return MultiObjectGalleryModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=oilpainting.js.d5a12e8b92f30356f8d6.hot-update.js.map