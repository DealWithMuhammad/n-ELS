"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 17:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req.method === "POST") {
        const { submittedAt , fullNameStudent , dateOfBirth , currentGrade , fullNameParent , relationship , phoneNumber , email , busOption , pickupAddress ="" , dropoffAdress ="" , startDate ,  } = req.body;
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
        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({
            auth,
            version: "v4"
        });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: `Bus!A3:C`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        submittedAt,
                        fullNameStudent,
                        dateOfBirth,
                        currentGrade,
                        fullNameParent,
                        relationship,
                        phoneNumber,
                        email,
                        busOption,
                        pickupAddress,
                        dropoffAdress,
                        startDate, 
                    ], 
                ]
            }
        });
        res.status(200).json({
            message: "It works!",
            response
        });
    } else {
        // Handle any other HTTP method
        res.status(200).json({
            message: "Hey!"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(17));
module.exports = __webpack_exports__;

})();