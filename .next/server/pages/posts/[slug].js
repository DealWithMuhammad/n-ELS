"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
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

/***/ 9817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/blocks/columns/post-preview.js
var post_preview = __webpack_require__(6181);
// EXTERNAL MODULE: ./components/layout/index.js + 11 modules
var layout = __webpack_require__(7871);
// EXTERNAL MODULE: ./components/post/post-body.js
var post_body = __webpack_require__(9272);
// EXTERNAL MODULE: ./components/date/index.js
var components_date = __webpack_require__(2289);
;// CONCATENATED MODULE: ./components/post/post-header.js


function PostHeader({ title , coverImage , date  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "mx-auto pt-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl md:text-3xl lg:text-4xl font-semibold leading-relaxed md:leading-none mb-6 text-center md:text-center",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-6 text-lg text-center text-gray-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                        dateString: date
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: coverImage,
                    className: "w-full max-w-4xl mx-auto rounded",
                    width: 960,
                    height: 500,
                    alt: ""
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./lib/api.js + 2 modules
var api = __webpack_require__(8710);
// EXTERNAL MODULE: ./components/cta/index.js
var cta = __webpack_require__(6122);
;// CONCATENATED MODULE: ./pages/posts/[slug].js








function Post({ post: post1 , morePosts , navigations  }) {
    const router = (0,router_.useRouter)();
    if (!router.isFallback && !post1) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "404 - Page Not Found"
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        navigations: navigations,
        children: router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading…"
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(PostHeader, {
                            title: post1.title,
                            coverImage: post1.coverImage.url,
                            date: post1.date
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(post_body/* default */.Z, {
                            content: post1.content,
                            className: "max-w-2xl mx-2 sm:mx-auto"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "mb-8 text-4xl md:text-4xl font-bold text-center mt-24",
                    children: "More stories"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid gap-12 lg:grid-cols-3 sm:max-w-sm mx-2 sm:mx-auto lg:max-w-full",
                        children: morePosts.map((post)=>{
                            var ref;
                            return(/*#__PURE__*/ jsx_runtime_.jsx(post_preview/* default */.Z, {
                                title: post.title,
                                coverImage: (ref = post.coverImage) === null || ref === void 0 ? void 0 : ref.url,
                                date: post.date,
                                author: post.author,
                                slug: post.slug,
                                excerpt: post.excerpt
                            }, post.slug));
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(cta/* default */.Z, {
                })
            ]
        })
    }));
};
async function getStaticProps({ params , locale  }) {
    const data = await (0,api/* getPostAndMorePosts */.ds)(params.slug, locale);
    const navigations = await (0,api/* getNavigation */.Ti)(locale) ?? [];
    return {
        props: {
            post: (data === null || data === void 0 ? void 0 : data.post) ?? null,
            message: data.message || null,
            morePosts: (data === null || data === void 0 ? void 0 : data.morePosts) ?? [],
            navigations,
            revalidate: 1
        }
    };
}
async function getStaticPaths({ locale  }) {
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)(locale);
    return {
        paths: (allPosts === null || allPosts === void 0 ? void 0 : allPosts.map(({ slug  })=>`/posts/${slug}`
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,152,695,122,272,181], () => (__webpack_exec__(9817)));
module.exports = __webpack_exports__;

})();