"use strict";
(() => {
var exports = {};
exports.id = 244;
exports.ids = [244];
exports.modules = {

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);



const BreadCrumb = ({ title , slug  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "flex py-3 mt-4 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200",
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            className: "inline-flex items-center space-x-1 md:space-x-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "inline-flex items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "mr-2 w-4 h-4",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                    })
                                }),
                                f({
                                    id: "Home.Home",
                                    defaultMessage: "Home"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    "aria-current": "page",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-6 h-6 text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-700",
                                children: title
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);


/***/ }),

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

/***/ 4227:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2289);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);




const RecentPosts = ({ recentPosts  })=>{
    const { formatMessage: f  } = useIntl();
    return(/*#__PURE__*/ _jsx("section", {
        children: /*#__PURE__*/ _jsx("div", {
            className: "px-3 py-12 mx-auto md:pl-12",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "mx-auto",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute inset-0 flex items-center",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "w-full border-t border-black"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "relative flex justify-start",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "pr-3 text-lg font-medium text-neutral-600 bg-white",
                                    children: f({
                                        id: "Home.NewsAndEvents",
                                        defaultMessage: "News and Events"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "space-y-8 lg:divide-y lg:divide-gray-100",
                        children: recentPosts.map((post, idx)=>{
                            var ref;
                            return(/*#__PURE__*/ _jsxs("div", {
                                className: "pt-8 sm:flex lg:items-end group",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "flex-shrink-0 mb-4 sm:mb-0 sm:mr-4",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: `/posts/${post.slug}`,
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    className: "w-full rounded-md lg:h-24 lg:w-24 object-cover rounded cursor-pointer",
                                                    src: post === null || post === void 0 ? void 0 : (ref = post.coverImage) === null || ref === void 0 ? void 0 : ref.url,
                                                    alt: "text"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ _jsx(DateComponent, {
                                                        dateString: post === null || post === void 0 ? void 0 : post.date
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "mt-3 text-lg font-medium",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: `/posts/${post.slug}`,
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        className: " text-xl text-neutral-600 group-hover:text-purple-600 lg:text-xl cursor-pointer ",
                                                        children: post === null || post === void 0 ? void 0 : post.title
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, `post-${idx}`));
                        })
                    })
                ]
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RecentPosts)));


/***/ }),

/***/ 9625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7871);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8710);
/* harmony import */ var _helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9309);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6122);
/* harmony import */ var _components_post_post_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2786);
/* harmony import */ var _components_recent_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_4__]);
_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






// import NotFoundPage from "../404";



const Page = ({ page , posts , navigations  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // Ensure content is available for rendering
    const pageContent = (page === null || page === void 0 ? void 0 : page.content) || ""; // Fallback to an empty string if content is missing
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-screen-xl mx-auto mt-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: page === null || page === void 0 ? void 0 : page.title,
                    slug: page === null || page === void 0 ? void 0 : page.slug
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-screen-xl flex flex-col lg:flex-row mx-auto"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
async function getStaticProps({ params , locale  }) {
    const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getPage */ .fx)(params.slug, locale);
    // Ensure data has the structure you expect
    const posts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getPostsForHome */ .NL)(locale) ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getNavigation */ .Ti)(locale) ?? [];
    // Make sure the `page` object is valid (fallback to an empty object if not)
    return {
        props: {
            page: data ?? {
            },
            posts,
            navigations
        },
        revalidate: 1
    };
}
async function getStaticPaths() {
    const pages = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getAllPages */ .K0)();
    return {
        paths: (pages === null || pages === void 0 ? void 0 : pages.map(({ slug  })=>`/pages/${slug}`
        )) ?? [],
        fallback: true
    };
}

});

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

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,152,695,122,309,272], () => (__webpack_exec__(9625)));
module.exports = __webpack_exports__;

})();