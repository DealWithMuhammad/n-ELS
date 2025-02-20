"use strict";
(() => {
var exports = {};
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function DateComponent({ dateString  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(dateString), "dd MMM, yyyy")
    }));
};


/***/ }),

/***/ 7274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ JobPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/date/index.js
var date = __webpack_require__(2289);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: ./components/post/post-body.js
var post_body = __webpack_require__(9272);
;// CONCATENATED MODULE: ./components/job/index.js





const Job = ({ title , start , expire , requirement , benefit , introduction  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-12 mx-3 md:ml-10 pl-0 lg:pr-5 lg:mb-0 w-full mt-6 max-w-screen-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-base text-gray-700 md:text-lg",
                        children: [
                            f({
                                id: "Recruitment.PostOn",
                                defaultMessage: "Post on"
                            }),
                            " ",
                            start && /*#__PURE__*/ jsx_runtime_.jsx(date/* default */.Z, {
                                dateString: start
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-base text-gray-700 md:text-lg",
                        children: [
                            f({
                                id: "Recruitment.ExpireOn",
                                defaultMessage: "Expire on"
                            }),
                            " ",
                            expire && /*#__PURE__*/ jsx_runtime_.jsx(date/* default */.Z, {
                                dateString: expire
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(post_body/* default */.Z, {
                content: introduction,
                className: "max-w-screen-lg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "my-6 border-gray-300"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none",
                        children: f({
                            id: "Recruitment.WhatWeAreLookingFor",
                            defaultMessage: "What we are looking for"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leading-loose",
                        style: {
                            whiteSpace: "pre-line"
                        },
                        children: requirement
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "my-6 border-gray-300"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none",
                        children: f({
                            id: "Recruitment.Benefits",
                            defaultMessage: "Benefits"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leading-loose",
                        style: {
                            whiteSpace: "pre-line"
                        },
                        children: benefit
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "my-6 border-gray-300"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none",
                        children: f({
                            id: "Recruitment.Apply",
                            defaultMessage: "Apply"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leading-loose",
                        children: f({
                            id: "Recruitment.ApplySummary",
                            defaultMessage: "Interested candidates: kindly send your resume and a cover letter to jobs@ELS.edu.vn. Feel free to send along any questions about the job opportunity, us, or about Vietnam in general."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 mb-2 sm:mb-4 text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/apply",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group",
                        children: f({
                            id: "Recruitment.ApplyNow",
                            defaultMessage: "Apply now"
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_job = (Job);

// EXTERNAL MODULE: ./components/layout/index.js + 11 modules
var layout = __webpack_require__(7871);
// EXTERNAL MODULE: ./lib/api.js + 2 modules
var api = __webpack_require__(8710);
;// CONCATENATED MODULE: ./pages/recruitment/[slug].js





function JobPage({ job , navigations  }) {
    const router = (0,router_.useRouter)();
    if (!router.isFallback && !job) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "404 - Page Not Found"
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        navigations: navigations,
        children: router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading ..."
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-0 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ",
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_job, {
                title: job.title,
                start: job.start,
                expire: job.expire,
                introduction: job === null || job === void 0 ? void 0 : job.introduction,
                requirement: job.requirement,
                benefit: job.benefit
            })
        })
    }));
};
async function getStaticProps({ params , locale  }) {
    const data = await (0,api/* getJob */.Zn)(params.slug, locale);
    const navigations = await (0,api/* getNavigation */.Ti)(locale) ?? [];
    return {
        props: {
            job: data ?? null,
            navigations
        },
        revalidate: 1
    };
}
async function getStaticPaths({ locale  }) {
    const allJobs = await (0,api/* getAllJobs */.sQ)(locale);
    return {
        paths: (allJobs === null || allJobs === void 0 ? void 0 : allJobs.map(({ slug  })=>`/recruitment/${slug}`
        )) ?? [],
        fallback: true
    };
}


/***/ }),

/***/ 8706:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-react-renderer");

/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-types");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,152,695,272], () => (__webpack_exec__(7274)));
module.exports = __webpack_exports__;

})();