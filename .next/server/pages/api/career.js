"use strict";
(() => {
var exports = {};
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _multipart_form_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const middleware = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
middleware.use(_multipart_form_parser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);

});

/***/ }),

/***/ 7379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ parseMultipartForm)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
;// CONCATENATED MODULE: ./middleware/multipart-form-parser.js

const multipart_form_parser_form = external_formidable_default()({
    multiples: true
}); // multiples means req.files will be an array
async function parseMultipartForm(req, res, next) {
    multipart_form_parser_form.parse(req, (err, fields, files)=>{
        if (!err) {
            req.body = fields; // sets the body field in the request object
            req.files = files; // sets the files field in the request object
        }
        next(); // continues to the next middleware or to the route
    });
};


/***/ }),

/***/ 6301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);
([_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



var fs = __webpack_require__(7147);
const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__["default"])();
handler.use(_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
handler.post(async (req, res)=>{
    try {
        const files = req.files;
        const body = req.body;
        const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets", 
            ]
        });
        const drive = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.drive({
            auth,
            version: "v3"
        });
        const fileName = `${body.fullName}-${body.email}-${body === null || body === void 0 ? void 0 : body.title}`;
        let fileMetaData = {
            name: fileName,
            parents: [
                "1xifVOa2ufa30z1O6nMsAlNCG4vT4GrOY"
            ]
        };
        let media = {
            mimeType: "application/pdf",
            body: fs.createReadStream(files.cv.filepath)
        };
        const response = await drive.files.create({
            resource: fileMetaData,
            media: media,
            fields: "id"
        });
        res.status(200).json({
            message: "It works!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!"
        });
    }
});
const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6301));
module.exports = __webpack_exports__;

})();