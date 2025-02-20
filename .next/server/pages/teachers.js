"use strict";
(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 7981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);



const DEPARTMENTS = [
    {
        title: "Administration",
        id: "Teacher.Administration"
    },
    {
        title: "Management",
        id: "Teacher.Management"
    },
    {
        title: "Kindergarten",
        id: "Teacher.Kindergarten"
    },
    {
        title: "Primary",
        id: "Teacher.Primary"
    },
    {
        title: "Secondary",
        id: "Teacher.Secondary"
    },
    {
        title: "Specialist",
        id: "Teacher.Specialist"
    },
    {
        title: "Cambridge Program",
        id: "Teacher.CambridgeProgram"
    },
    {
        title: "Support Staff",
        id: "Teacher.SupportStaff"
    }, 
];
const PersonCard = ({ image , name , role  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image,
                    className: "object-cover w-48 h-48 mb-2 rounded-2xl shadow",
                    alt: "Staff #1"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-3 text-xl font-medium",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold tracking-wide text-purple-900",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-purple-600",
                            children: role
                        })
                    ]
                })
            })
        ]
    }));
};
const PersonList = ({ persons  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8",
        children: persons === null || persons === void 0 ? void 0 : persons.map((item, idx)=>{
            var ref;
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PersonCard, {
                name: item === null || item === void 0 ? void 0 : item.name,
                role: item === null || item === void 0 ? void 0 : item.role,
                image: (ref = item.photo) === null || ref === void 0 ? void 0 : ref.url
            }, `person-${item === null || item === void 0 ? void 0 : item.name}-${idx}`));
        })
    }));
};
const formatPersonsByDepartment = (persons)=>{
    const result = {
    };
    for (const item of persons){
        if (!result[item.deparment]) {
            result[item.deparment] = [];
        }
        result[item.deparment].push(item);
    }
    return result;
};
const SchoolTeam = ({ teachers  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
    const { 0: selectedDepartment , 1: setSelectedDepartment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Administration");
    const result = formatPersonsByDepartment(teachers);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-4 pt-16 py-4 bg-purple-600 sm:pt-24 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-2xl mx-auto lg:max-w-screen-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "max-w-4xl text-white sm:text-center text-4xl leading-tight tracking-wide sm:text-5xl xl:text-6xl sm:leading-tighter font-bold lg:text-left",
                            children: f({
                                id: "Teacher.OurTeachers",
                                defaultMessage: "Our Teacher"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-purple-600 pb-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-2xl mx-auto lg:max-w-screen-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "grid sm:grid-cols-3",
                        children: DEPARTMENTS.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: ()=>setSelectedDepartment(item.title)
                                ,
                                className: selectedDepartment === item.title ? "text-yellow-400 py-2 font-bold mx-5 sm:mx-0" : "py-2 text-white mx-5 sm:mx-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `transition-colors duration-300 text-xl  hover:text-yellow-400 cursor-pointer`,
                                    children: f({
                                        id: item.id
                                    })
                                })
                            }, item.title)
                        )
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-32 bg-purple-600"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-3xl mx-auto -translate-y-24 lg:max-w-screen-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PersonList, {
                        persons: result[selectedDepartment] || []
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchoolTeam);


/***/ }),

/***/ 1840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4119);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7871);
/* harmony import */ var _components_school_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7981);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8710);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6122);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_gallery_hero__WEBPACK_IMPORTED_MODULE_1__]);
_components_gallery_hero__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const TEACHER_IMAGES = [
    "/images/teachers/MHU08036.jpg",
    "/images/teachers/MHU07825.jpg",
    "/images/teachers/MHU08028.jpg",
    "/images/teachers/MHU08211.jpg",
    "/images/teachers/MHU08556.jpg",
    "/images/teachers/MHU08088.jpg",
    "/images/teachers/Toan_truong_2.jpg",
    "/images/teachers/Van_phong_1.jpg",
    "/images/teachers/Cambridge.jpg",
    "/images/teachers/Hanh_chinh.jpg",
    "/images/teachers/Mam_non.jpg",
    "/images/teachers/Pho_thong.jpg",
    "/images/teachers/Bep.jpg",
    "/images/teachers/Xe_bus.jpg",
    "/images/teachers/VSCN.jpg",
    "/images/teachers/Bao_ve.jpg", 
];
function About({ teachers , navigations  }) {
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { locale  } = router;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery_hero__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: f({
                    id: "Teacher.OurTeachers",
                    defaultMessage: "Our Teacher"
                }),
                subTitle: f({
                    id: "Teacher.WeAreELSTeam",
                    defaultMessage: "We are ELS's TEAM!"
                }),
                description: f({
                    id: "Teacher.WePrideOurselves",
                    defaultMessage: "We do believe that educating is one of the most challenging jobs in the world. We inspire, motivate, encourage, support and educate Children. We also believe in the power of fun inside and outside of the workplace. Hence, we enjoy daily work by watching student's improvement and happiness. Simultaneously, we bring and share the joy into our team after school. Together, we make team spirit, laughter, motivation, fostering innovation and creativity. We are ELS's TEAM!"
                }),
                descriptionSize: locale == "vi" ? "max-w-screen-xl" : "max-w-screen-lg",
                images: TEACHER_IMAGES
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-24",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_school_team__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    teachers: teachers
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            })
        ]
    }));
};
async function getStaticProps({ locale  }) {
    const teachers = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getTeachers */ .Os)(locale) ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getNavigation */ .Ti)(locale) ?? [];
    return {
        props: {
            teachers,
            navigations
        },
        revalidate: 1
    };
}

});

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,695,122,119], () => (__webpack_exec__(1840)));
module.exports = __webpack_exports__;

})();