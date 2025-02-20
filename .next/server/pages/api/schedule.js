"use strict";
(() => {
var exports = {};
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 2371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "googleapis"
var external_googleapis_ = __webpack_require__(9993);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./lib/constant.js
const SCHEDULE_TYPE = {
    program: "program",
    meal: "meal"
};
const FORMAT_DATE_FOLDER = "ddMMMyyyy";
const FORMAT_DATE_DISPLAY = "dd-MM-yyyy";
const FORMAT_DATETIME_DISPLAY = "HH:mm:ss dd-MM-yyyy";
const BUS_SERVICE = {
    twoWay: "Two-way journey - Hai Chiều",
    pickup: "Pick-up only - Chỉ đ\xf3n",
    drop: "Drop-off only - Chỉ trả"
};
const GENDER = {
    male: "Male",
    female: "Female",
    other: "Other"
};
const RETEST_OPTIONS = {
    yes: "Yes",
    no: "No"
};
const POSTS_PER_PAGE = 15;
const LOCALES = {
    en: "en-US",
    vi: "vi-VN"
};

;// CONCATENATED MODULE: ./pages/api/schedule.js



async function handler(req, res) {
    if (req.method === "POST") {
        var ref, ref1;
        const { className , scheduleType  } = req.body;
        const auth = new external_googleapis_.google.auth.GoogleAuth({
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
        const drive = external_googleapis_.google.drive({
            auth,
            version: "v3"
        });
        let pageToken = null;
        const rootFolderId = scheduleType === SCHEDULE_TYPE.program ? process.env.PROGRAM_FOLDERID : process.env.MEALMENU_FOLDERID;
        // List all folders in root folder
        const foldersResponse = await drive.files.list({
            q: `'${rootFolderId}' in parents`,
            fields: "nextPageToken, files(id, name)",
            spaces: "drive",
            pageToken: pageToken
        });
        const folders = foldersResponse === null || foldersResponse === void 0 ? void 0 : (ref = foldersResponse.data) === null || ref === void 0 ? void 0 : ref.files;
        if (!folders || folders.length === 0) {
            res.status(200).json({
                id: null
            });
            return;
        }
        // Get firstday of week (Monday of the week)
        const firstDay = (0,external_date_fns_namespaceObject.startOfWeek)(new Date(), {
            weekStartsOn: 1
        });
        // Get lastday of week (Sunday of the week)
        const lastDay = (0,external_date_fns_namespaceObject.endOfWeek)(new Date(), {
            weekStartsOn: 1
        });
        // Get folder name
        const folderName = `${(0,external_date_fns_namespaceObject.format)(firstDay, FORMAT_DATE_FOLDER)}_${(0,external_date_fns_namespaceObject.format)(lastDay, FORMAT_DATE_FOLDER)}`;
        //Find folder based on current date
        const currentFolder = folders.find((item)=>item.name == folderName
        );
        const folderID = currentFolder === null || currentFolder === void 0 ? void 0 : currentFolder.id;
        if (!folderID) {
            res.status(200).json({
                id: null
            });
            return;
        }
        // Find list of files in current folder
        const response = await drive.files.list({
            q: `'${folderID}' in parents`,
            fields: "nextPageToken, files(id, name)",
            spaces: "drive",
            pageToken: pageToken
        });
        const files = response === null || response === void 0 ? void 0 : (ref1 = response.data) === null || ref1 === void 0 ? void 0 : ref1.files;
        if (!files || files.length === 0) {
            res.status(200).json({
                id: null
            });
            return;
        }
        const file = files === null || files === void 0 ? void 0 : files.find((item)=>item.name.includes(className)
        );
        const id = file === null || file === void 0 ? void 0 : file.id;
        res.status(200).json({
            id: id
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
var __webpack_exports__ = (__webpack_exec__(2371));
module.exports = __webpack_exports__;

})();