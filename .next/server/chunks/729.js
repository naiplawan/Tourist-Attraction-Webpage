exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 533:
/***/ ((module) => {

// Exports
module.exports = {
	"location-list": "BoxResult_location-list__FNKqD",
	"boxResult": "BoxResult_boxResult__crPwi",
	"trip-info-containner": "BoxResult_trip-info-containner__xAK2M",
	"thumbnail-box": "BoxResult_thumbnail-box__dysJw",
	"right-box": "BoxResult_right-box__o5f__",
	"big-thumbnail": "BoxResult_big-thumbnail___OCbe",
	"tagsbox": "BoxResult_tagsbox__pBUWF",
	"link-info": "BoxResult_link-info__lW82m",
	"image-Box": "BoxResult_image-Box__f7Ckq",
	"tag": "BoxResult_tag__1gtzP",
	"trip-title": "BoxResult_trip-title__M20r1"
};


/***/ }),

/***/ 729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var _styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(533);
/* harmony import */ var _styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function BoxResults({ value }) {
    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleSearch(value);
    }, [
        value
    ]);
    const getLocationData = async ()=>{
        try {
            console.log("Searching for:", value);
            const result = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/api/trips?keywords=${value}`);
            setLocations(result.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleSearch = (searchValue)=>{
        console.log("handleSearch:", searchValue);
        getLocationData(searchValue);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().boxResult),
        children: locations.map((item)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().locationList),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().rightBox),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigThumbnail),
                            src: item.photos[0],
                            alt: "Thumbnail",
                            width: 400,
                            height: 385
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().tripInfoContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().tripTitle),
                                children: item.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().tripDescr),
                                children: item.description.slice(0, 100)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkInfo),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: item.url,
                                    children: "อ่านต่อ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().tagsBox),
                                children: item.tags.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag),
                                        children: tag
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnailBox),
                                children: item.photos.map((thumbnail, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default())[`thumbnail-${index + 1}`],
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_BoxResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageBox),
                                            src: thumbnail,
                                            alt: `Thumbnail ${index + 1}`,
                                            width: 200,
                                            height: 150
                                        })
                                    }, index))
                            })
                        ]
                    })
                ]
            }, item.eid);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxResults);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;