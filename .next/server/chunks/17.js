exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 683:
/***/ ((module) => {

// Exports
module.exports = {
	"homePage-Box": "Homepage_homePage-Box__axmpo",
	"seperator": "Homepage_seperator__VpyND",
	"titleBox": "Homepage_titleBox__26uj0",
	"inputBox": "Homepage_inputBox__Cb4vU"
};


/***/ }),

/***/ 17:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BoxResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(729);
/* harmony import */ var _styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(683);
/* harmony import */ var _styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BoxResult__WEBPACK_IMPORTED_MODULE_2__]);
_components_BoxResult__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function HomePage() {
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
    };
    const handleInputChange = (event)=>{
        setLocation(event.target.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().homePageBox),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleBox),
                children: "เที่ยวไหนดี"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().seperator)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().locationForm),
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputBox),
                            name: "location",
                            type: "text",
                            placeholder: "หาที่เที่ยวไปแล้วกัน....\uD83C\uDF3B",
                            value: location,
                            onChange: handleInputChange
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().seperator)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BoxResult__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: location
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;