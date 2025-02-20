"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 5503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ gallery_grid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_namespaceObject);
;// CONCATENATED MODULE: ./components/video-hero/video-carousel.js




function VideoCarousel({ videos  }) {
    const customRenderItem = (item, props)=>/*#__PURE__*/ jsx_runtime_.jsx(item.type, {
            ...item.props,
            ...props
        })
    ;
    const getVideoThumb = (videoId)=>`https://img.youtube.com/vi/${videoId}/default.jpg`
    ;
    const getVideoId = (url)=>url.substr("https://www.youtube.com/embed/".length, url.length)
    ;
    const customRenderThumb = (children)=>children.map((item)=>{
            const videoId = getVideoId(item.props.url);
            return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: getVideoThumb(videoId),
                alt: ""
            }, item.props.url));
        })
    ;
    const YoutubeSlide = ({ url  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
            width: "100%",
            url: url,
            playing: false
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
        renderItem: customRenderItem,
        renderThumbs: customRenderThumb,
        children: videos.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(YoutubeSlide, {
                url: item
            }, `youtube-${idx}`)
        )
    }));
};

;// CONCATENATED MODULE: ./components/video-hero/index.js


const VideoHero = ({ videos , id  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto lg:max-w-2xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx(VideoCarousel, {
                videos: videos
            })
        })
    }));
};
/* harmony default export */ const video_hero = (VideoHero);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ./components/gallery-grid/index.js




const Gallery = ({ src , title , link  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            className: "cursor-pointer",
            "data-src": "images/gallery-01.jpg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: src,
                            className: "object-cover rounded-2xl h-72 w-full",
                            alt: "Gallery image 1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute inset-0 transition duration-300 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: link,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full opacity-80",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-12 h-12 text-white",
                                        width: "44",
                                        height: "44",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-xl leading-tight tracking-tight sm:text-xl sm:leading-tighter text-center mt-2 text-purple-900",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: title
                    })
                })
            ]
        })
    }));
};
const ImagesGrid = ({ galleries  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-3xl mx-auto lg:max-w-screen-xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                id: "gallery-grid",
                className: "grid gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-12 2xl:gap-12",
                children: galleries === null || galleries === void 0 ? void 0 : galleries.map((gallery, idx)=>{
                    var ref;
                    return(/*#__PURE__*/ jsx_runtime_.jsx(Gallery, {
                        gallery: gallery,
                        title: gallery === null || gallery === void 0 ? void 0 : gallery.title,
                        src: gallery === null || gallery === void 0 ? void 0 : (ref = gallery.image) === null || ref === void 0 ? void 0 : ref.url,
                        link: gallery === null || gallery === void 0 ? void 0 : gallery.link
                    }, `gallery-${gallery === null || gallery === void 0 ? void 0 : gallery.title}-${idx}`));
                })
            })
        })
    }));
};
const GalleryGrid = ({ videos , galleries  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: showImages , 1: setShowImages  } = (0,external_react_.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4 pt-20 bg-purple-25 sm:pt-28 lg:pt-36 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                            children: f({
                                id: "Gallery.SeeWhatItIsLikeToBePartOfOurSchool",
                                defaultMessage: "See what it's like to be part of our school"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${showImages ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setShowImages(true)
                                        ,
                                        children: f({
                                            id: "Gallery.Images",
                                            defaultMessage: "Images"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${!showImages ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setShowImages(false)
                                        ,
                                        children: "Videos"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-56 bg-purple-25"
            }),
            showImages ? /*#__PURE__*/ jsx_runtime_.jsx(ImagesGrid, {
                galleries: galleries
            }) : /*#__PURE__*/ jsx_runtime_.jsx(video_hero, {
                videos: videos
            })
        ]
    }));
};
/* harmony default export */ const gallery_grid = (GalleryGrid);


/***/ }),

/***/ 1584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Gallery */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);


const Gallery = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "relative px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-xl mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1",
                                children: f({
                                    id: "About.WhereGreatKidsGrow",
                                    defaultMessage: "Where great kids grow"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "max-w-3xl mx-auto mt-4 text-center text-purple-900 font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter",
                            children: f({
                                id: "Gallery.SeeWhatOurStudentsExperienceLooksLike",
                                defaultMessage: "See what our students' experience looks like"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "max-w-screen-xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5",
                            children: f({
                                id: "Gallery.GallerySummary",
                                defaultMessage: "When you see these pictures, please bear in mind our aspirational mission to educate happy, independent, creative, intellectual, passionate and lifelong learners. We have worked hard to capture the joy, the beauty and, most importantly, the reality of what will undoubtedly go down in history of ELS School. I hope you agree that the captured images reflect that joy of learning, working and living in a nurturing environment that gives children the security and opportunity to discover themselves and their world.."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "hero-gallery",
                    className: "relative z-10 grid grid-cols-12 gap-4 js-lightgallery lg:px-4 2xl:px-16 mt-14 sm:mt-16 md:mt-20 lg:mt-24 sm:gap-6 lg:gap-10 xl:gap-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col col-span-4 md:col-span-2 md:justify-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/gallery5.jpg",
                                    className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:-rotate-8 md:-translate-y-12 md:translate-x-3 group-hover:rotate-0 group-hover:scale-110",
                                    alt: "Gallery hero 01"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex col-span-8 md:col-span-3 md:flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/gallery2.jpg",
                                            className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110",
                                            alt: "Gallery hero 02"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative w-1/2 ml-2 sm:ml-3 md:ml-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/gallery3.jpg",
                                            className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-8 group-hover:rotate-0 group-hover:scale-110",
                                            alt: "Gallery hero 03"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-4 md:col-span-4 md:pr-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/gallery4.jpg",
                                    className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:rotate-4 group-hover:rotate-0 group-hover:scale-110",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex col-span-8 md:col-span-3 md:flex-col md:pr-3 md:translate-y-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/gallery1.jpg",
                                            className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-12 group-hover:rotate-0 group-hover:scale-110",
                                            alt: "images/gallery-hero-05.jpg"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative w-1/2 ml-2 md:w-2/3 sm:ml-3 md:-ml-3 lg:-ml-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50 md:-translate-y-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/gallery6.jpg",
                                            className: "object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110",
                                            alt: "Gallery hero 06"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1584);
/* harmony import */ var _components_gallery_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5503);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7871);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8710);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6122);
/* harmony import */ var _helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_6__]);
_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function GalleryPage({ videos , galleries , navigations  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        navigations: navigations,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery_grid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            videos: videos,
                            galleries: galleries
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                })
            ]
        })
    }));
};
async function getStaticProps({ locale  }) {
    const videos = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getVideoForHome */ .R6)() ?? [];
    const galleries = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getGalleries */ .Fo)(locale) ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getNavigation */ .Ti)(locale) ?? [];
    return {
        props: {
            videos,
            galleries,
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,695,122,309], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();