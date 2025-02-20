"use strict";
(() => {
var exports = {};
exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ apply),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/apply-form/airtable-form.js


const AirTable = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "form",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://static.airtable.com/js/embed/embed_snippet_v1.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                className: "airtable-embed airtable-dynamic-height",
                src: "https://airtable.com/embed/shrimyBDQPZdgU14C?backgroundColor=blue",
                frameBorder: "0",
                width: "100%",
                height: "2432",
                loading: "lazy"
            })
        ]
    }));
};
/* harmony default export */ const airtable_form = (AirTable);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/apply-form/video-record.js



const DynamicComponentWithNoSSR = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 672).then(__webpack_require__.bind(__webpack_require__, 3672))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3672)
            ]
        ,
        modules: [
            "..\\components\\apply-form\\video-record.js -> " + "./video-apply"
        ]
    },
    ssr: false
});
const VideoRecord = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-xl leading-tight sm:text-xl sm:leading-tighter font-semibold text-gray-800 text-center mt-5",
                children: "In two minutes or under, please mention your name and talk about why you want to teach abroad?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "text-xl leading-tight tracking-tight sm:text-xl sm:leading-tighter font-semibold text-gray-800 mt-5",
                children: [
                    "You have 2 options:",
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border p-5 shadow-xl my-5 rounded-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold",
                        children: "Option 1: Email us your video"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "mt-2",
                        children: [
                            "If you already have a video, please email us at",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "bluesky@ELS.edu.vn"
                            }),
                            " with your video as an attachment."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "mt-2",
                        children: [
                            "Do not forget to fill out the application form at",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/apply",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-red-500",
                                    children: "Apply "
                                })
                            }),
                            "as it is a requirement for the process to be completed."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border p-5 shadow-xl my-5 rounded-2xl bg-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold",
                        children: "Option 2: Record your video"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-md text-gray-800 italic mt-2",
                        children: "Note that you cannot capture video if your browser is Safari"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold mt-2",
                        children: "Instructions:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "mt-2",
                                children: [
                                    "1. Press the button",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/start_camera.png",
                                        className: "inline-block",
                                        alt: ""
                                    }),
                                    " ",
                                    "to start the camera (not capture yet)"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "mt-2",
                                children: [
                                    "2. When you are ready, press the circle in the bottom bar",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/start_capture.png",
                                        className: "inline-block",
                                        alt: ""
                                    }),
                                    " ",
                                    "to start capturing"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mt-2",
                                children: "3. When you have finished, press the rectangle at the same position with the circle to stop the record"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "mt-2",
                                children: [
                                    "4. You can replay the captured video by clicking the play button",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/replay.png",
                                        className: "inline-block",
                                        alt: ""
                                    }),
                                    " ",
                                    ". If you want to capture a new video, click",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/recapture.png",
                                        className: "inline-block",
                                        alt: ""
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    "Please make sure you have filled out the application form and your email below so that we can get in touch with you. Then click submit to finish"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DynamicComponentWithNoSSR, {
            })
        ]
    }));
};
/* harmony default export */ const video_record = (VideoRecord);

;// CONCATENATED MODULE: ./components/apply-form/index.js




const ApplyForm = ({ video  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-wrap items-center justify-center space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6 mt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${!video ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                            onClick: ()=>router.push("/apply")
                            ,
                            children: "Application Form"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${video ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                            onClick: ()=>router.push("/apply?video=1")
                            ,
                            children: "A Short Video Response"
                        })
                    })
                ]
            }),
            !video && /*#__PURE__*/ jsx_runtime_.jsx(airtable_form, {
            }),
            video ? /*#__PURE__*/ jsx_runtime_.jsx(video_record, {
            }) : null
        ]
    }));
};
/* harmony default export */ const apply_form = (ApplyForm);

// EXTERNAL MODULE: ./components/layout/index.js + 11 modules
var layout = __webpack_require__(7871);
// EXTERNAL MODULE: ./lib/api.js + 2 modules
var api = __webpack_require__(8710);
;// CONCATENATED MODULE: ./pages/apply.js





const Apply = ({ navigations  })=>{
    const router = (0,router_.useRouter)();
    const { video =0  } = router.query;
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        navigations: navigations,
        children: /*#__PURE__*/ jsx_runtime_.jsx(apply_form, {
            video: video
        })
    }));
};
/* harmony default export */ const apply = (Apply);
async function getStaticProps({ locale  }) {
    const navigations = await (0,api/* getNavigation */.Ti)(locale) ?? [];
    return {
        props: {
            navigations
        },
        revalidate: 1
    };
}


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

/***/ }),

/***/ 6778:
/***/ ((module) => {

module.exports = require("recordrtc");

/***/ }),

/***/ 5335:
/***/ ((module) => {

module.exports = require("video.js");

/***/ }),

/***/ 989:
/***/ ((module) => {

module.exports = require("videojs-record/dist/videojs.record.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,152,695], () => (__webpack_exec__(327)));
module.exports = __webpack_exports__;

})();