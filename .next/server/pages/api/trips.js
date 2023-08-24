"use strict";
(() => {
var exports = {};
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Ftrips_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Ftrips_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/trips.js
var trips_namespaceObject = {};
__webpack_require__.r(trips_namespaceObject);
__webpack_require__.d(trips_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(305);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/trips.js

async function handler(req, res) {
    const mongoUrl = process.env.NEXT_PUBLIC_MONGO_ATLAS_URL;
    let keywords = req.query.keywords;
    const mongodb = new external_mongodb_namespaceObject.MongoClient(mongoUrl, {
        serverApi: {
            version: external_mongodb_namespaceObject.ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });
    if (keywords === undefined) {
        return res.status(400).json({
            message: "Please send keywords parameter in the URL endpoint"
        });
    }
    try {
        await mongodb.connect();
        const trips = await mongodb.db("Travel_MockUP").collection("MockUp_Data").find().toArray();
        const regexKeywords = keywords.split(" ").join("|");
        const regex = new RegExp(regexKeywords, "ig");
        const results = trips.filter((trip)=>{
            return trip.title.match(regex) || trip.description.match(regex) || trip.tags.filter((tag)=>tag.match(regex)).length;
        });
        return res.json({
            data: results
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({
            error: "Failed to fetch data"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftrips&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Ftrips.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Ftrips_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Ftrips_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(trips_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(trips_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/trips",
        pathname: "/api/trips",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: trips_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(414)));
module.exports = __webpack_exports__;

})();