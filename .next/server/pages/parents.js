"use strict";
(() => {
var exports = {};
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 2212:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const ParentGallery = ({ id , className , title , description , subTitle ="" , images ,  })=>{
    const { formatMessage: f  } = useIntl();
    return(/*#__PURE__*/ _jsx("div", {
        id: id,
        className: className,
        children: /*#__PURE__*/ _jsx("section", {
            className: "px-4 pt-12 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                    /*#__PURE__*/ _jsxs(motion.div, {
                        className: "relative",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
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
                            /*#__PURE__*/ _jsx("h2", {
                                className: "max-w-3xl mx-auto text-center text-primary-100 text-5xl font-bold",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "relative inline-block",
                                    children: /*#__PURE__*/ _jsxs("span", {
                                        children: [
                                            " ",
                                            title
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: `max-w-screen-lg mx-auto mt-4 text-xl leading-relaxed text-center text-primary-100 sm:mt-5`,
                                children: description
                            }),
                            subTitle && /*#__PURE__*/ _jsx("h4", {
                                className: "max-w-3xl mx-auto text-center text-primary-100 text-xl font-bold mt-1",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "relative inline-block",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        children: subTitle
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "sm:mt-12 lg:mt-12",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full h-64 md:h-auto mb-4 px-2",
                                children: /*#__PURE__*/ _jsx("img", {
                                    className: `object-cover w-full lg:h-[500px] h-30vw`,
                                    alt: "School grid 01",
                                    src: images[0]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex flex-row max-h-[900px] w-full",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "md:w-1/2",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "w-full h-64 md:h-auto mb-4 px-2",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    className: `object-cover w-full lg:h-60 h-30vw`,
                                                    alt: "School grid 01",
                                                    src: images[1]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "w-full mb-4 px-2",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    className: `object-cover w-full  lg:h-120 h-30vw`,
                                                    alt: "School grid 01",
                                                    src: images[3]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "md:w-1/2 h-full",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "w-full px-2",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                className: `object-cover w-full lg:h-full h-30vw`,
                                                alt: "School grid 01",
                                                src: images[2]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ParentGallery)));

});

/***/ }),

/***/ 7225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _register_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5976);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);




const RegisterHero = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative px-4 py-16 overflow-hidden lg:py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25 mt-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/dots-large-grid.svg",
                className: "absolute right-0 h-auto transform opacity-25 lg:opacity-40 top-12 w-54 hidden md:block",
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/dots-large-grid.svg",
                className: "absolute h-auto transform opacity-40 -left-36 bottom-36 w-54 hidden md:block",
                alt: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-center lg:col-span-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1",
                                    children: f({
                                        id: "Parent.NowRegisterWithELS",
                                        defaultMessage: "Now register with ELS"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "max-w-xl mt-10 text-purple-900 sm:mt-10 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter lg:max-w-none",
                                        children: f({
                                            id: "Parent.GetInTouch",
                                            defaultMessage: "Get in touch"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/svg/arrow-right-over.svg",
                                        className: "absolute hidden transform -top-3 xl:block md:-right-8 w-14 md:w-32 rotate-12",
                                        alt: ""
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative mt-12 sm:mt-16 lg:mt-0 xl:pl-12 lg:col-span-7",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative w-full mx-auto sm:grid sm:gap-6 md:max-w-3xl lg:gap-5 lg:max-w-lg sm:grid-cols-4 lg:grid-cols-2 auto-rows-fr",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: `?tab=${_register_form__WEBPACK_IMPORTED_MODULE_2__/* .SERVICE.school */ .F.school}#register`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "",
                                        className: "flex flex-col justify-center w-full p-8 duration-300 ease-in-out transform shadow-lg sm:col-span-2 lg:col-span-1 bg-purple-50 rounded-2xl hover:scale-105 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-purple-700",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
                                                        stroke: "#2c3e50",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M22 9l-10 -4l-10 4l10 4l10 -4v6"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-4 text-xl font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Parent.SchoolVisitRegistration",
                                                            defaultMessage: "School Visit Registration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2 text-sm text-purple-800",
                                                        children: f({
                                                            id: "Parent.RegisterELSSchoolVisitTour",
                                                            defaultMessage: "Register ELS school visit tour from Mon to Fri"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-end w-full mt-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600",
                                                    width: "44",
                                                    height: "44",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "#2c3e50",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            stroke: "none",
                                                            d: "M0 0h24v24H0z",
                                                            fill: "none"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 7 12 12 17 7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 13 12 18 17 13"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: `?tab=${_register_form__WEBPACK_IMPORTED_MODULE_2__/* .SERVICE.bus */ .F.bus}#register`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "",
                                        className: "flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out bg-yellow-200 shadow-lg rounded-2xl sm:mt-0 sm:col-span-2 lg:col-span-1 lg:translate-y-28 hover:scale-105 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-purple-700",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
                                                        stroke: "#2c3e50",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "6",
                                                                cy: "17",
                                                                r: "2"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "18",
                                                                cy: "17",
                                                                r: "2"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "16 5 17.5 12 22 12"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "2",
                                                                y1: "10",
                                                                x2: "17",
                                                                y2: "10"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "7",
                                                                y1: "5",
                                                                x2: "7",
                                                                y2: "10"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "12",
                                                                y1: "5",
                                                                x2: "12",
                                                                y2: "10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-4 text-xl font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Parent.BusServiceRegistration",
                                                            defaultMessage: "Bus Service Registration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2 text-sm text-purple-800",
                                                        children: f({
                                                            id: "Parent.ChooseTheBusServiceForYourChild",
                                                            defaultMessage: "Choose the bus service for your child conveniently"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-end w-full mt-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600",
                                                    width: "44",
                                                    height: "44",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "#2c3e50",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            stroke: "none",
                                                            d: "M0 0h24v24H0z",
                                                            fill: "none"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 7 12 12 17 7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 13 12 18 17 13"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: `?tab=${_register_form__WEBPACK_IMPORTED_MODULE_2__/* .SERVICE.exam */ .F.exam}#register`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "",
                                        className: "flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-rose-50 sm:col-span-2 sm:mt-0 lg:col-span-1 rounded-2xl hover:scale-105 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-purple-700",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
                                                        stroke: "#2c3e50",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3.5 5.5l1.5 1.5l2.5 -2.5"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3.5 11.5l1.5 1.5l2.5 -2.5"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3.5 17.5l1.5 1.5l2.5 -2.5"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "11",
                                                                y1: "6",
                                                                x2: "20",
                                                                y2: "6"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "11",
                                                                y1: "12",
                                                                x2: "20",
                                                                y2: "12"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                x1: "11",
                                                                y1: "18",
                                                                x2: "20",
                                                                y2: "18"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-4 text-xl font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Parent.EntranceExamRegistration",
                                                            defaultMessage: "Entrance Exam Registration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2 text-sm text-purple-800",
                                                        children: f({
                                                            id: "Parent.ConfidentlyChooseTheBestProgramForYourChild",
                                                            defaultMessage: "Confidently choose the best program for your child"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-end w-full mt-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600",
                                                    width: "44",
                                                    height: "44",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "#2c3e50",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            stroke: "none",
                                                            d: "M0 0h24v24H0z",
                                                            fill: "none"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 7 12 12 17 7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 13 12 18 17 13"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/schedules",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "",
                                        className: "flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg sm:mt-0 lg:col-start-auto sm:col-span-2 lg:col-span-1 lg:translate-y-28 bg-teal-50 rounded-2xl hover:scale-105 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-purple-700",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
                                                        stroke: "#2c3e50",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "18",
                                                                cy: "18",
                                                                r: "4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M15 3v4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M7 3v4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3 11h16"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M18 16.496v1.504l1 1"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-4 text-xl font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Schedule.WeeklySchedule",
                                                            defaultMessage: "Weekly Schedule"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2 text-sm text-purple-800",
                                                        children: f({
                                                            id: "Parent.EasilyUpdateWeeklyTimetable",
                                                            defaultMessage: "Easily update weekly timetable and meal menu"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-end w-full mt-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600",
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 7 12 12 7 17"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "13 7 18 12 13 17"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/gallery",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "",
                                        className: "flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-blue-50 sm:mt-0 sm:col-span-2 lg:col-span-1 rounded-2xl sm:col-start-2 hover:scale-105 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-purple-700",
                                                        width: "44",
                                                        height: "44",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
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
                                                                x1: "15",
                                                                y1: "8",
                                                                x2: "15.01",
                                                                y2: "8"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "4",
                                                                y: "4",
                                                                width: "16",
                                                                height: "16",
                                                                rx: "3"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M4 15l4 -4a3 5 0 0 1 3 0l5 5"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M14 14l1 -1a3 5 0 0 1 3 0l2 2"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-4 text-xl font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Parent.SchoolGallery",
                                                            defaultMessage: "School Gallery"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2 text-sm text-purple-800",
                                                        children: f({
                                                            id: "Parent.ViewOurSchoolGalleryAndVideo",
                                                            defaultMessage: "View our school gallery and video"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-end w-full mt-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600",
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "7 7 12 12 7 17"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "13 7 18 12 13 17"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterHero);


/***/ }),

/***/ 7183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parents),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6122);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7871);
/* harmony import */ var _components_register_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5976);
/* harmony import */ var _components_register_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7225);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6331);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8710);
/* harmony import */ var _components_parent_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_parent_gallery__WEBPACK_IMPORTED_MODULE_9__]);
_components_parent_gallery__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const PARENTS_IMAGES = (/* unused pure expression or super */ null && ([
    "/images/Parent1.jpg",
    "/images/Parent4.jpg",
    "/images/Parent2.jpg",
    "/images/Parent3.jpg", 
]));
function Parents({ classes , navigations  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
    const { tab  } = router.query;
    (0,_hooks_useHashFragment__WEBPACK_IMPORTED_MODULE_7__/* .useHashFragment */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_register_hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_register_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                id: "register",
                tab: tab,
                classes: classes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                hasButton: false
            })
        ]
    }));
};
async function getStaticProps({ locale  }) {
    // const testimonials = (await getTestimonials(locale)) ?? [];
    const classes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .getClasses */ .k)() ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .getNavigation */ .Ti)(locale) ?? [];
    return {
        props: {
            classes,
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

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,695,122,900,157], () => (__webpack_exec__(7183)));
module.exports = __webpack_exports__;

})();