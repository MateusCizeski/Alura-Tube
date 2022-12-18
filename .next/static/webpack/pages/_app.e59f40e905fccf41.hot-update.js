"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/components/ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n/* harmony import */ var _src_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/RegisterVideo */ \"./src/components/RegisterVideo/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\n// _app.js -> Definições globais do NextJS\n// ThemeProvider -> Prover o tema para a app toda\n// ColorModeProvider -> Prove o state de light ou dark mode para todo mundo \nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c = ProviderWrapper;\nfunction Root(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    // console.log(contexto.mode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: theme[contexto.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(Root, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = Root;\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Root, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, props), void 0, false, {\n            fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\Documentos\\\\alura-tube\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"ProviderWrapper\");\n$RefreshReg$(_c1, \"Root\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ3dCO0FBQ0k7QUFDNEM7QUFDdEM7QUFFNUQsSUFBTU0sS0FBSyxHQUFHO0lBQ1ZDLEtBQUssRUFBRTtRQUNIQyxjQUFjLEVBQUUsU0FBUztRQUN6QkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLGFBQWEsRUFBRSxTQUFTO0tBQzNCO0lBQ0RDLElBQUksRUFBRTtRQUNGTCxjQUFjLEVBQUUsU0FBUztRQUN6QkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLGFBQWEsRUFBRSxTQUFTO0tBQzNCO0NBQ0o7QUFFRCwwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELDRFQUE0RTtBQUU1RSxTQUFTRSxlQUFlLENBQUNDLEtBQUssRUFBRTtJQUM1QixxQkFDSSw4REFBQ1osaUZBQWlCO1FBQUNhLFdBQVcsRUFBRSxNQUFNO2tCQUNqQ0QsS0FBSyxDQUFDRSxRQUFROzs7OztZQUNDLENBQ3ZCO0FBQ0wsQ0FBQztBQU5RSCxLQUFBQSxlQUFlO0FBUXhCLFNBQVNJLElBQUksQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNoQyxJQUFNQyxRQUFRLEdBQUdyQix1REFBZ0IsQ0FBQ0ksdUZBQWdCLENBQUM7SUFDbkQsOEJBQThCO0lBQzlCLHFCQUNJLDhEQUFDSCw0REFBYTtRQUFDSyxLQUFLLEVBQUVBLEtBQUssQ0FBQ2UsUUFBUSxDQUFDRSxJQUFJLENBQUM7OzBCQUN0Qyw4REFBQ3JCLDhEQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDaUIsU0FBUyxxRkFBS0MsU0FBUzs7OztvQkFBSTswQkFDNUIsOERBQUNmLHFFQUFhOzs7O29CQUFHOzs7Ozs7WUFDTCxDQUNuQjtBQUNMLENBQUM7R0FWUWEsSUFBSTtBQUFKQSxNQUFBQSxJQUFJO0FBWUUsU0FBU00sSUFBSSxDQUFDVCxLQUFLLEVBQUU7SUFDaEMscUJBQ0ksOERBQUNELGVBQWU7a0JBQ1osNEVBQUNJLElBQUkscUZBQUtILEtBQUs7Ozs7Z0JBQUk7Ozs7O1lBQ0wsQ0FDckI7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ1NTUmVzZXQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ1NTUmVzZXRcIjtcclxuaW1wb3J0IENvbG9yTW9kZVByb3ZpZGVyLCB7IENvbG9yTW9kZUNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL0NvbG9yTW9kZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJWaWRlbyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlb1wiO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICBsaWdodDoge1xyXG4gICAgICAgIGJhY2tncm91bmRCYXNlOiBcIiNmOWY5ZjlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwxOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwyOiBcIiNmMGYwZjBcIixcclxuICAgICAgICBib3JkZXJCYXNlOiBcIiNlNWU1ZTVcIixcclxuICAgICAgICB0ZXh0Q29sb3JCYXNlOiBcIiMyMjIyMjJcIixcclxuICAgIH0sXHJcbiAgICBkYXJrOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6IFwiIzE4MTgxOFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDE6IFwiIzIwMjAyMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDI6IFwiIzMxMzEzMVwiLFxyXG4gICAgICAgIGJvcmRlckJhc2U6IFwiIzM4MzgzOFwiLFxyXG4gICAgICAgIHRleHRDb2xvckJhc2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gX2FwcC5qcyAtPiBEZWZpbmnDp8O1ZXMgZ2xvYmFpcyBkbyBOZXh0SlNcclxuLy8gVGhlbWVQcm92aWRlciAtPiBQcm92ZXIgbyB0ZW1hIHBhcmEgYSBhcHAgdG9kYVxyXG4vLyBDb2xvck1vZGVQcm92aWRlciAtPiBQcm92ZSBvIHN0YXRlIGRlIGxpZ2h0IG91IGRhcmsgbW9kZSBwYXJhIHRvZG8gbXVuZG8gXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlcldyYXBwZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIGluaXRpYWxNb2RlPXtcImRhcmtcIn0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBSb290KHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3QgY29udGV4dG8gPSBSZWFjdC51c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY29udGV4dG8ubW9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZVtjb250ZXh0by5tb2RlXX0+XHJcbiAgICAgICAgICAgIDxDU1NSZXNldCAvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDxSZWdpc3RlclZpZGVvIC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXBwKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxSb290IHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8L1Byb3ZpZGVyV3JhcHBlcj5cclxuICAgIClcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZVByb3ZpZGVyIiwiQ1NTUmVzZXQiLCJDb2xvck1vZGVQcm92aWRlciIsIkNvbG9yTW9kZUNvbnRleHQiLCJSZWdpc3RlclZpZGVvIiwidGhlbWUiLCJsaWdodCIsImJhY2tncm91bmRCYXNlIiwiYmFja2dyb3VuZExldmVsMSIsImJhY2tncm91bmRMZXZlbDIiLCJib3JkZXJCYXNlIiwidGV4dENvbG9yQmFzZSIsImRhcmsiLCJQcm92aWRlcldyYXBwZXIiLCJwcm9wcyIsImluaXRpYWxNb2RlIiwiY2hpbGRyZW4iLCJSb290IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29udGV4dG8iLCJ1c2VDb250ZXh0IiwibW9kZSIsIl9BcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});