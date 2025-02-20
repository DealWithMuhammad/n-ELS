"use strict";
(() => {
var exports = {};
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 1269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const Certificate = ({ id  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: id,
        className: "relative w-full px-4 sm:px-6 xl:px-8 mt-12",
        style: {
            minHeight: "40vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-xl mx-auto lg:max-w-screen-xl",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid gap-16 lg:grid-cols-2 xl:grid-cols-11 lg:gap-12 xl:gap-24",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: "flex flex-col justify-center lg:col-span-1 xl:col-span-6 lg:order-1",
                            initial: {
                                y: "50%",
                                opacity: 0
                            },
                            whileInView: {
                                y: 0,
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-10 md:mt-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1",
                                        children: f({
                                            id: "Program.CambridgeCertificate",
                                            defaultMessage: "Cambridge Certificate"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mt-4 text-purple-900 sm:mt-12 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                                    children: f({
                                        id: "Program.InternationalAccredition",
                                        defaultMessage: "International Accredition"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-6",
                                    children: f({
                                        id: "Program.ProgramSummary",
                                        defaultMessage: "Since February 2017, ELS School is recognized as a Cambridge School by Cambridge International Examinations (CIE) - a leading organization that provides a variety of education programs and qualifications for international students from 5 to 19 years old."
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-1",
                                    children: f({
                                        id: "Program.ProgramSummary2",
                                        defaultMessage: "ELS’s students sit for Cambridge Checkpoints, IGCSE, and A Level within the formal curriculum of the school. The school also has been authorized by this international examinations board to deliver international exams on site. This enables our students to obtain international qualifications without going through intermediary organizations."
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mx-auto sm:gap-8 lg:col-span-1 xl:col-span-4 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-2 sm:max-w-none sm:mx-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "object-cover",
                                src: "/images/certificate.png",
                                alt: "Cambridge"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                initial: {
                    y: "50%",
                    opacity: 0
                },
                whileInView: {
                    y: 0,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 1,
                    ease: "easeOut"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "max-w-xl mx-auto lg:max-w-screen-xl text-lg leading-relaxed text-purple-800",
                    children: f({
                        id: "Program.ProgramSummary3",
                        defaultMessage: "From September 2018, Cambridge International Examinations (CIE) would be known as Cambridge Assessment International Education (CAIE) across the global. The name change has been done keeping in mind the vital role played by assessment and education in all activities of the organization, particularly its commitment to help schools develop the whole education they provide for learners. With its efforts, Cambridge has jumped from # 4 to # 2 on the list of the most prestigious universities in the world. Topping the table is Oxford University (UK). The rankings are published by Times Higher Education (THE) - a news and high-level news magazine - which summarizes, analyzes and ranks universities around the world since 2004."
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certificate);

});

/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Pathway = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-xl mx-auto lg:max-w-screen-xl",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "object-cover",
            src: "/images/cambridgePathway.jpeg",
            alt: "Cambridge"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pathway);


/***/ }),

/***/ 517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgramPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7871);
/* harmony import */ var _components_programs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3615);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6122);
/* harmony import */ var _hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6331);
/* harmony import */ var _components_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1269);
/* harmony import */ var _components_pathway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2955);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_programs__WEBPACK_IMPORTED_MODULE_2__, _components_certificate__WEBPACK_IMPORTED_MODULE_5__]);
([_components_programs__WEBPACK_IMPORTED_MODULE_2__, _components_certificate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function ProgramPage({ navigations  }) {
    (0,_hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_4__/* .useHashFragment */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_certificate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pathway__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_programs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                id: "program"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:-mt-72",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                })
            })
        ]
    }));
};
async function getStaticProps({ locale  }) {
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .getNavigation */ .Ti)(locale) ?? [];
    return {
        props: {
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,695,122,994], () => (__webpack_exec__(517)));
module.exports = __webpack_exports__;

})();