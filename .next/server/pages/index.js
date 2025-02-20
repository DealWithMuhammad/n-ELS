"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8084:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(899);







const BannerImage = ({ coverImage , locale  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5;
    if (!coverImage) return null;
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "max-w-[1440px] mx-auto",
            children: (coverImage === null || coverImage === void 0 ? void 0 : coverImage.facebookLink) ? /*#__PURE__*/ _jsx("a", {
                target: "_blank",
                href: coverImage === null || coverImage === void 0 ? void 0 : coverImage.facebookLink,
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ _jsx(CustomImage, {
                    src: coverImage === null || coverImage === void 0 ? void 0 : (ref = coverImage.image) === null || ref === void 0 ? void 0 : ref.url,
                    alt: "cover",
                    className: "mx-auto cover",
                    width: 1440,
                    height: 550
                })
            }) : (coverImage === null || coverImage === void 0 ? void 0 : (ref1 = coverImage.post) === null || ref1 === void 0 ? void 0 : ref1.slug) ? /*#__PURE__*/ _jsx(Link, {
                href: locale === "en" ? `/en/posts/${coverImage === null || coverImage === void 0 ? void 0 : (ref2 = coverImage.post) === null || ref2 === void 0 ? void 0 : ref2.slug}` : `/posts/${coverImage === null || coverImage === void 0 ? void 0 : (ref3 = coverImage.post) === null || ref3 === void 0 ? void 0 : ref3.slug}`,
                children: /*#__PURE__*/ _jsx("a", {
                    children: /*#__PURE__*/ _jsx(CustomImage, {
                        src: coverImage === null || coverImage === void 0 ? void 0 : (ref4 = coverImage.image) === null || ref4 === void 0 ? void 0 : ref4.url,
                        alt: "cover",
                        className: "mx-auto cover",
                        width: 1440,
                        height: 550
                    })
                })
            }) : /*#__PURE__*/ _jsx(CustomImage, {
                src: coverImage === null || coverImage === void 0 ? void 0 : (ref5 = coverImage.image) === null || ref5 === void 0 ? void 0 : ref5.url,
                alt: "cover",
                className: "mx-auto cover",
                width: 1440,
                height: 550
            })
        })
    }));
};
const Banner = ({ coverImages  })=>{
    const router = useRouter();
    const { locale  } = router;
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 1
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Carousel, {
            responsive: responsive,
            ssr: true,
            transitionDuration: 1000,
            children: coverImages === null || coverImages === void 0 ? void 0 : coverImages.map((item, idx)=>/*#__PURE__*/ _jsx(BannerImage, {
                    coverImage: item,
                    locale: locale
                }, `cover-${idx}`)
            )
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Banner)));


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

/***/ 109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2289);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const EventCard = ({ title , coverImage , date , slug , excerpt , idx  })=>{
    const BACKGROUND_COLORS = {
        0: "bg-yellow-200",
        1: "bg-purple-25",
        2: "bg-rose-50",
        3: "bg-teal-50"
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: `grid w-full ${BACKGROUND_COLORS[idx]} mt-8 lg:mt-0 rounded-2xl sm:grid-cols-12`,
        viewport: {
            once: true
        },
        transition: {
            duration: 1
        },
        initial: {
            y: "50%",
            opacity: 0
        },
        whileInView: {
            y: "0",
            opacity: 1
        },
        children: [
            idx % 2 === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-48 rounded-t-2xl sm:h-full sm:rounded-tr-none sm:rounded-l-2xl sm:col-span-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: coverImage,
                    className: "object-cover object-center w-full h-full rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl",
                    alt: "Event 01"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center h-full px-6 py-8 sm:col-span-8 sm:py-10 sm:px-8 lg:px-6 xl:px-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inline-flex items-center justify-center px-3.5 py-0.5 text-sm -rotate-1 bg-purple-200 text-purple-700 font-medium leading-6 align-top rounded-xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                dateString: date
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `/posts/${slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            "aria-label": "Category",
                            className: "inline-block my-2 text-2xl font-semibold leading-6 transition-colors duration-200 hover:text-purple-600",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "mt-4 text-2xl font-bold text-purple-900 xl:text-3xl lg:text-2xl sm:text-3xl lg:leading-tight xl:leading-tight",
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mt-1 text-purple-800 lg:mt-2",
                        children: [
                            excerpt.slice(0, 100),
                            "..."
                        ]
                    })
                ]
            }),
            idx % 2 !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "order-1 h-48 sm:order-2 rounded-t-2xl sm:h-full sm:rounded-tl-none sm:rounded-r-2xl sm:col-span-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: coverImage,
                    className: "object-cover object-center w-full h-full rounded-b-2xl sm:rounded-tl-none sm:rounded-r-2xl",
                    alt: "Event 01"
                })
            })
        ]
    }));
};
const Events = ({ id , posts  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: id,
        className: "relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-2xl mx-auto lg:max-w-screen-xl animate-fade-in-up",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1
                    },
                    initial: {
                        y: "50%",
                        opacity: 0
                    },
                    whileInView: {
                        y: "0",
                        opacity: 1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-primary-100 lg:text-center text-5xl font-bold",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "relative inline-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/svg/star.svg",
                                        alt: "Sunny",
                                        className: "absolute z-0 -translate-x-full -top-20 hidden sm:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: f({
                                            id: "Home.NewsAndEvents",
                                            defaultMessage: "News and Events"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "max-w-3xl mx-auto mt-3 text-xl leading-relaxed text-primary-100 lg:mt-4 lg:text-center",
                            children: f({
                                id: "Home.NewsSummary",
                                defaultMessage: "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16",
                    children: posts === null || posts === void 0 ? void 0 : posts.map((post, idx)=>{
                        var ref;
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EventCard, {
                            idx: idx,
                            slug: post.slug,
                            coverImage: post === null || post === void 0 ? void 0 : (ref = post.coverImage) === null || ref === void 0 ? void 0 : ref.url,
                            title: post.title,
                            excerpt: post.excerpt,
                            date: post === null || post === void 0 ? void 0 : post.date
                        }, post.slug));
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

});

/***/ }),

/***/ 5688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const TestimonialCard = ({ content , img , title , description , type  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
    const TYPE = {
        teacher: f({
            id: "Home.TeacherSharing",
            defaultMessage: "Teacher's Sharing"
        }),
        parent: f({
            id: "Home.ParentSharing",
            defaultMessage: "Parent's Sharing"
        }),
        student: f({
            id: "Home.StudentSharing",
            defaultMessage: "Student's Sharing"
        })
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: "px-8 py-8 mx-4 transition duration-300 ease-in-out bg-yellow-200 sm:px-6 md:px-8 lg:px-5 2xl:px-8 rounded-3xl h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-5 text-xl font-bold text-purple-900 text-center",
                children: type ? TYPE[type] : ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: img,
                className: "object-cover w-20 h-20 border-2 border-yellow-300 rounded-full filter drop-shadow-2xl mx-auto",
                alt: "Testimonial 01"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-3 text-lg font-bold text-purple-900 text-center",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-1 text-lg text-gray-800 italic text-center",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-5 text-lg text-purple-800",
                children: content
            })
        ]
    }));
};
const Feedback = ({ id , testimonials  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 3
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: id,
        className: "md:mt-12 bg-primary-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                backgroundImage: "url(/images/mask.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            className: "relative",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-4 mx-auto lg:max-w-screen-2xl sm:px-6 py-20 sm:py-20 lg:py-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center justify-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "max-w-4xl text-center text-white text-5xl sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                                children: f({
                                    id: "Home.OurStories",
                                    defaultMessage: "Our Stories"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50",
                                children: f({
                                    id: "Home.OurStoriesSummary",
                                    defaultMessage: "All of teachers and support staffs at ELS know and call each of us by name, they understand our families, our hobbies and listen to us all the time. Therefore, we are very pleased to say that we were a happy family. We love everything of Blue Sky!"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 lg:max-w-screen-xl mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
                            responsive: responsive,
                            children: testimonials.map((item, idx)=>{
                                var ref;
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialCard, {
                                    content: item === null || item === void 0 ? void 0 : item.content,
                                    img: item === null || item === void 0 ? void 0 : (ref = item.photo) === null || ref === void 0 ? void 0 : ref.url,
                                    title: item === null || item === void 0 ? void 0 : item.parent,
                                    description: item === null || item === void 0 ? void 0 : item.description,
                                    type: item === null || item === void 0 ? void 0 : item.type
                                }, `testimonial-${idx}`));
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

});

/***/ }),

/***/ 1651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


function Hero() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-[77vh] flex items-center justify-center text-center bg-cover bg-center w-full text-white relative overflow-hidden",
        style: {
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/LearnHome.jpg')"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "mb-6 font-extrabold text-4xl md:text-6xl lg:text-7xl",
                        children: [
                            "Empower Your",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "bg-gradient-to-r from-cyan-500 to-cyan-800 bg-clip-text text-transparent",
                                children: "Future With ELS"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-extrabold text-gray-200 leading-relaxed",
                        children: "Learn, Grow, Succeed—Together."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: "/about",
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "text-lg font-medium text-white bg-primary-100 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button outline-none hover:bg-primary-100 group h-[55px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Start Your Journey"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: "mt-6 text-lg font-medium bg-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100",
                        children: [
                            "Register Now",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                className: "ml-2",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        opacity: "0.4",
                                        d: "M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z",
                                        fill: "#003056"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z",
                                        fill: "#003056"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full animate-pulse-slow opacity-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20"
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 1350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5806);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _custom_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const VideoPopup = ({ showPopup , onClose  })=>{
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__/* .useOutsideClick */ .O)(wrapperRef, ()=>{
        if (showPopup) {
            onClose();
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showPopup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed inset-0 z-50 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center w-auto min-h-screen mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl",
                            ref: wrapperRef,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative aspect-w-16 aspect-h-9",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    className: "absolute w-full h-full",
                                    src: "https://www.youtube.com/embed/N4YtNOGbtsQ",
                                    title: "Video",
                                    allowFullScreen: true
                                })
                            })
                        })
                    })
                ]
            })
        }) : null
    }));
};
const HomeHero = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
    const { 0: showPopup , 1: setShowPopup  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleWatchVideo = ()=>{
        setShowPopup(true);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "px-4 py-16 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "flex flex-col items-center justify-center lg:items-start lg:col-span-6",
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "uppercase text-primary-100 font-bold text-5xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter",
                                    children: f({
                                        id: "Home.BlueSkyAcademy",
                                        defaultMessage: "els"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "max-w-2xl mt-3 text-xl leading-relaxed text-center text-purple-800 lg:text-left",
                                    children: f({
                                        id: "Home.SloganHero",
                                        defaultMessage: `Empower Learning System is a compassionate educational initiative dedicated to meeting the critical needs of refugees in Malaysia. We provide inclusive opportunities for children, youth, and adults with limited financial capacity, offering programs such as K-12 Education, Cambridge Primary and Secondary Education, GED Preparation, Higher Education, and Skills Development. Our dedicated team creates a supportive learning environment, empowering individuals to rebuild their lives and contribute positively to their communities. Collaborate with us to support our mission of making education accessible for all and restoring hope and dignity to those we serve.`
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center mt-4 overflow-hidden sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-lg font-medium text-white bg-primary-100 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button outline-none hover:bg-primary-100 group h-[55px]",
                                                children: [
                                                    f({
                                                        id: "Home.AboutUs",
                                                        defaultMessage: "About us"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-6 h-6 ml-3 group-hover:animate-horizontal-bounce",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "2",
                                                        stroke: "currentColor",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "5",
                                                                y1: "12",
                                                                x2: "19",
                                                                y2: "12"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "15",
                                                                y1: "16",
                                                                x2: "19",
                                                                y2: "12"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "15",
                                                                y1: "8",
                                                                x2: "19",
                                                                y2: "12"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: "mt-6 text-lg font-medium bg-white sm:mt-0 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100",
                                            onClick: handleWatchVideo,
                                            children: [
                                                f({
                                                    id: "Home.WatchVideo",
                                                    defaultMessage: "Watch Video"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "ml-2",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            opacity: "0.4",
                                                            d: "M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z",
                                                            fill: "#003056"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z",
                                                            fill: "#003056"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        className: "w-full h-auto",
                                        src: "/images/kindergarten.png",
                                        alt: "Bright Photo Collage",
                                        width: 624,
                                        height: 416
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "absolute inline-flex w-20 h-20 bg-primary-100 rounded-full opacity-60 animate-ping"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "relative z-10 flex items-center justify-center w-20 h-20 rounded-full outline-none opacity-90 cursor-pointer",
                                                onClick: handleWatchVideo,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "100",
                                                    height: "100",
                                                    viewBox: "0 0 100 100",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            opacity: "0.4",
                                                            d: "M100 50.0241C100 77.5687 77.5579 100 50 100C22.4421 100 0 77.5687 0 50.0241C0 22.4313 22.4421 0 50 0C77.5579 0 100 22.4313 100 50.0241",
                                                            fill: "#003056"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M70 50.0243C70 51.288 69.6023 52.5565 68.8068 53.5723C68.6577 53.7716 67.9616 54.593 67.4148 55.1276L67.1165 55.4192C62.9403 59.8469 52.5497 66.5055 47.2798 68.6391C47.2798 68.6877 44.1477 69.9563 42.6562 70H42.4574C40.1705 70 38.0327 68.7412 36.9389 66.6999C36.3423 65.5772 35.7955 62.3208 35.7457 62.277C35.2983 59.356 35 54.8846 35 49.9757C35 44.8287 35.2983 40.158 35.8452 37.2904C35.8452 37.2418 36.392 34.6173 36.7401 33.7424C37.2869 32.4836 38.2812 31.4095 39.5241 30.729C40.5185 30.2479 41.5625 30 42.6562 30C43.7997 30.0535 45.9375 30.7776 46.7827 31.1179C52.3509 33.2564 62.9901 40.2552 67.0668 44.5322C67.7628 45.2126 68.5085 46.0437 68.7074 46.2333C69.5526 47.3026 70 48.6148 70 50.0243Z",
                                                            fill: "#003056"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoPopup, {
                showPopup: showPopup,
                onClose: ()=>setShowPopup(false)
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeHero);

});

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7871);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8710);
/* harmony import */ var _hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6331);
/* harmony import */ var _components_programs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3615);
/* harmony import */ var _components_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(109);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9756);
/* harmony import */ var _components_gallery_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4119);
/* harmony import */ var _components_home_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1350);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6122);
/* harmony import */ var _components_feedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5688);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8084);
/* harmony import */ var _components_hero_home_Hero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_faq__WEBPACK_IMPORTED_MODULE_6__, _components_feedback__WEBPACK_IMPORTED_MODULE_10__, _components_events__WEBPACK_IMPORTED_MODULE_5__, _components_gallery_hero__WEBPACK_IMPORTED_MODULE_7__, _components_programs__WEBPACK_IMPORTED_MODULE_4__, _components_home_hero__WEBPACK_IMPORTED_MODULE_8__]);
([_components_faq__WEBPACK_IMPORTED_MODULE_6__, _components_feedback__WEBPACK_IMPORTED_MODULE_10__, _components_events__WEBPACK_IMPORTED_MODULE_5__, _components_gallery_hero__WEBPACK_IMPORTED_MODULE_7__, _components_programs__WEBPACK_IMPORTED_MODULE_4__, _components_home_hero__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














function Home({ allPosts , testimonials , faq , navigations , coverImages ,  }) {
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
    (0,_hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_3__/* .useHashFragment */ .i)();
    const GALLERY_IMAGES = [
        "/images/gallery2.jpg",
        "/images/gallery1.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg",
        "/images/gallery5.jpg", 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mb-10 bg-grid-black/[0.1] relative ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_home_Hero__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_hero__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_programs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                id: "program"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery_hero__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                id: "gallery",
                className: "md:-mt-36",
                hasButton: true,
                url: "/gallery",
                title: f({
                    id: "Home.OurGallery",
                    defaultMessage: "Our Gallery"
                }),
                description: f({
                    id: "Home.GallerySummary",
                    defaultMessage: "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive."
                }),
                images: GALLERY_IMAGES
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_events__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                posts: allPosts,
                id: "news"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                id: "parents",
                testimonials: testimonials
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_faq__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                faq: faq,
                id: "faq"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            })
        ]
    }));
};
async function getStaticProps({ locale  }) {
    const allPosts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getPostsForHome */ .NL)(locale) ?? [];
    const testimonials = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getTestimonials */ .BZ)(locale) ?? [];
    const faq = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getFaq */ .QR)(locale) ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getNavigation */ .Ti)(locale) ?? [];
    const coverImages = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getCoverImage */ .tY)(locale) ?? [];
    return {
        props: {
            allPosts,
            testimonials,
            faq,
            navigations,
            coverImages
        },
        revalidate: 1
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

/***/ 5804:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,152,695,122,272,994,119,756], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();