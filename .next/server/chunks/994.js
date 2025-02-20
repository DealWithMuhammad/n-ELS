"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 3615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useScreenSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Programs = ({ id  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    const { isMobile  } = (0,_hooks_useScreenSize__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .e)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: id,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-4 overflow-hidden md:pb-0 sm:pt-12 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-xl mx-auto md:max-w-screen-xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "md:grid md:grid-cols-2 md:gap-12 lg:gap-12 ",
                        initial: {
                            y: `${isMobile ? "0%" : "50%"}`,
                            opacity: 0
                        },
                        whileInView: {
                            y: `${isMobile ? "0%" : "-20%"}`,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "max-w-4xl text-primary-100 h2 text-5xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                                    children: f({
                                        id: "Home.EducationProgram",
                                        defaultMessage: "Education Program"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left",
                                    children: [
                                        "At Empower Learning System, we offer transformative education for refugees in Malaysia, including",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-extrabold italic",
                                            children: ": Cambridge Primary and Secondary Education (IGCSE), GED Preparation, Higher Education, and Skills Development."
                                        }),
                                        " ",
                                        "Our programs are tailored to diverse needs, empowering individuals to rebuild their lives and create a brighter future. Join us in making education accessible and impactful\xa0for\xa0all."
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-16 grid md:grid md:grid-cols-2 md:gap-8 lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "relative",
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
                                        className: "relative z-10 w-full px-8 py-6 md:px-8 md:py-6 bg-primary-division rounded-3xl",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-primary-60 text-2xl leading-tight tracking-tight sm:text-2xl sm:leading-tighter font-bold",
                                                            children: f({
                                                                id: "Home.PrimarySchool",
                                                                defaultMessage: "Primary School"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "max-w-2xl mt-3 text-lg leading-loose text-purple-800",
                                                            children: f({
                                                                id: "Home.PrimaryDescription",
                                                                defaultMessage: `Our Primary Education program builds strong academic foundations, fostering curiosity and critical thinking for lifelong learning.`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "relative mt-8 aspect-w-3 aspect-h-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "object-cover rounded-2xl",
                                                                src: "/images/primary.jpg",
                                                                alt: "Program 01"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-8",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        href: "/programs/primary",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: "font-medium text-white bg-blue-900 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-blue-500 group",
                                                            children: [
                                                                f({
                                                                    id: "Home.LearnMore",
                                                                    defaultMessage: "Learn more"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "w-5 h-5 ml-3 group-hover:animate-horizontal-bounce",
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
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/svg/arrow.svg",
                                        className: "absolute top-0 hidden translate-y-3/4 md:block -translate-x-16",
                                        alt: ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "relative w-full px-8 py-6 mt-12 bg-kindergarten md:mt-0 md:px-8 md:py-6 rounded-3xl",
                                initial: {
                                    y: "0%",
                                    opacity: 0
                                },
                                whileInView: {
                                    y: `${isMobile ? "0%" : "-50%"}`,
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/svg/red.svg",
                                        className: "hidden md:block absolute right-0 translate-x-1/2 translate-y-full z-10",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-red-800 text-2xl leading-tight tracking-tight sm:text-2xl sm:leading-tighter font-bold",
                                                        children: f({
                                                            id: "Home.Kindergarten",
                                                            defaultMessage: "Kindergarten"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-w-2xl mt-3 text-lg leading-loose text-purple-800",
                                                        children: f({
                                                            id: "Home.KindergartenDescription",
                                                            defaultMessage: `In this education environment, each child is well equipped
                    to acquire knowledge and life skills in the following years`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "relative mt-8 aspect-w-3 aspect-h-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "object-cover rounded-2xl",
                                                            src: "/images/kindergarten.jpg",
                                                            alt: "Program 02"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-8",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/programs/kindergarten",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "font-medium text-white bg-red-900 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-red-500 group",
                                                        children: [
                                                            f({
                                                                id: "Home.LearnMore",
                                                                defaultMessage: "Learn more"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "w-5 h-5 ml-3 group-hover:animate-horizontal-bounce",
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
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "relative w-full px-8 py-6 mt-12 md:mt-0 md:col-start-2 md:px-8 md:py-6 bg-secondary rounded-3xl",
                                initial: {
                                    y: "0%",
                                    opacity: 0
                                },
                                whileInView: {
                                    y: `${isMobile ? "0%" : "-40%"}`,
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-green-900 text-2xl leading-tight tracking-tight sm:text-2xl sm:leading-tighter font-bold",
                                                        children: f({
                                                            id: "Home.Secondary",
                                                            defaultMessage: "Secondary"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-w-2xl mt-3 text-lg leading-loose text-purple-800",
                                                        children: f({
                                                            id: "Home.SecondaryDescription",
                                                            defaultMessage: "Student are trained to be well-immersed in society, live independently and to quickly and efficient solve problems, we have created a community for indepedent individuals to learn to live together"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "relative mt-8 aspect-w-3 aspect-h-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "object-cover rounded-2xl",
                                                            src: "/images/secondary.jpeg",
                                                            alt: "Program 03"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-8",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/programs/secondary",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "font-medium text-white bg-green-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-green-500 group",
                                                        children: [
                                                            f({
                                                                id: "Home.LearnMore",
                                                                defaultMessage: "Learn more"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "w-5 h-5 ml-3 group-hover:animate-horizontal-bounce",
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
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/svg/earth.svg",
                                        className: "absolute translate-y-6 hidden md:block -right-16",
                                        alt: ""
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Programs);

});

/***/ }),

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useHashFragment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useHashFragment() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const onHashChangeStart = (url)=>{
            const hash = window.location.hash;
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start"
                });
            }
        };
        router.events.on("hashChangeStart", onHashChangeStart);
        return ()=>{
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [
        router.events
    ]);
}


/***/ })

};
;