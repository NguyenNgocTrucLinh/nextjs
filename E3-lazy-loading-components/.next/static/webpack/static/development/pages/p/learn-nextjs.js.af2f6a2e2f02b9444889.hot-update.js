webpackHotUpdate("static\\development\\pages\\p\\learn-nextjs.js",{

/***/ "./lib/with-post.js":
/*!**************************!*\
  !*** ./lib/with-post.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithPost; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "D:\\gitTest\\next-learn-demo\\E3-lazy-loading-components\\lib\\with-post.js";


 // import Highlight from 'react-highlight'


var Highlight = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-highlight */ "./node_modules/react-highlight/index.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-highlight */ "./node_modules/react-highlight/index.js")];
    },
    modules: ['react-highlight']
  }
});
marked__WEBPACK_IMPORTED_MODULE_7___default.a.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});
function WithPost(options) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostPage, _React$Component);

      function PostPage() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPage);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPage).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPage, [{
        key: "renderMarkdown",
        value: function renderMarkdown() {
          // If a code snippet contains in the markdown content
          // then use Highlight component
          if (/~~~/.test(options.content)) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Highlight, {
              innerHTML: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            }, marked__WEBPACK_IMPORTED_MODULE_7___default()(options.content)));
          } // If not, simply render the generated HTML from markdown


          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: marked__WEBPACK_IMPORTED_MODULE_7___default()(options.content)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          });
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, options.title), this.renderMarkdown());
        }
      }]);

      return PostPage;
    }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)
  );
} //

/***/ })

})
//# sourceMappingURL=learn-nextjs.js.af2f6a2e2f02b9444889.hot-update.js.map