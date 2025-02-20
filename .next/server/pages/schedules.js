"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ schedule_hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(8383);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: ./hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(5806);
;// CONCATENATED MODULE: ./components/dropdown-search/index.js



const DropdownSearch = ({ options: options1 , value , search , handleChange , handleChangeSearch , title , placeholder ="" , error =false ,  })=>{
    const { 0: showDropdown , 1: setShowDropdown  } = (0,external_react_.useState)(false);
    const { 0: filterOptions , 1: setFilterOptions  } = (0,external_react_.useState)(options1);
    const wrapper = (0,external_react_.useRef)(null);
    (0,useOutsideClick/* useOutsideClick */.O)(wrapper, ()=>{
        if (showDropdown) {
            setShowDropdown(false);
        }
    });
    const filterSearchOptions = (options, filter)=>{
        const filterText = `${filter}`.toLowerCase();
        return options.filter((option)=>`${option}`.toLowerCase().includes(filterText)
        );
    };
    (0,external_react_.useEffect)(()=>{
        const newFilterOptions = search ? filterSearchOptions(options1, search) : options1;
        setFilterOptions(newFilterOptions);
    }, [
        search,
        options1
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-md mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "select",
                className: "font-semibold block py-2 text-purple-900 text-sm",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                ref: wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `h-14 bg-white flex border border-purple-50 rounded items-center rounded-xl border-2 ${error && "border-red-200"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: value ? value : search,
                                placeholder: placeholder,
                                name: "select",
                                id: "select",
                                className: "px-4 appearance-none outline-none text-purple-700 w-full text-sm font-medium placeholder-purple-700 placeholder-opacity-70",
                                onChange: (e)=>{
                                    handleChangeSearch(e.target.value);
                                },
                                onFocus: ()=>setShowDropdown(true)
                                ,
                                autoComplete: "off"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "show_more",
                                className: "cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    onClick: ()=>setShowDropdown(!showDropdown)
                                    ,
                                    className: `w-4 h-4 mx-2 fill-current ${showDropdown ? "transform rotate-180" : ""}`,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                        points: "18 15 12 9 6 15"
                                    })
                                })
                            })
                        ]
                    }),
                    showDropdown && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute rounded shadow bg-white overflow-y-auto flex flex-col w-full mt-1 border border-gray-200 z-50 text-sm max-h-60",
                            children: filterOptions.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "cursor-pointer group",
                                    onClick: ()=>{
                                        setShowDropdown(false);
                                        handleChange(item);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "block p-2 border-transparent border-l-4 group-hover:border-purple-600 group-hover:bg-gray-100",
                                        children: item
                                    })
                                }, item)
                            )
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const dropdown_search = (DropdownSearch);

;// CONCATENATED MODULE: ./components/embed-docs/index.js

const EmbedDocs = ({ fileId  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-screen-xl mx-auto",
        children: fileId && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
            src: `https://drive.google.com/file/d/${fileId}/preview`,
            width: "100%",
            height: "700px",
            align: "middle",
            scrolling: "auto"
        })
    }));
};
/* harmony default export */ const embed_docs = (EmbedDocs);

;// CONCATENATED MODULE: ./components/loading-spiner/index.js

const LoadingSpinner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "loader bg-white p-5 rounded-full flex space-x-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-4 h-4 bg-purple-600 rounded-full animate-bounce"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-4 h-4 bg-purple-600 rounded-full animate-bounce"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-4 h-4 bg-purple-600 rounded-full animate-bounce"
            })
        ]
    }));
};
/* harmony default export */ const loading_spiner = (LoadingSpinner);

;// CONCATENATED MODULE: ./components/schedule-hero/index.js







const PdfView = ({ fileId  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(embed_docs, {
            fileId: fileId
        })
    }));
};
const Loading = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8 mx-auto w-[140px] md:w-[180px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx(loading_spiner, {
        })
    }));
};
const ScheduleHero = ({ classes  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: scheduleType , 1: setScheduleType  } = (0,external_react_.useState)(constant/* SCHEDULE_TYPE.program */.By.program);
    const { 0: selectedClass , 1: setSelectedClass  } = (0,external_react_.useState)();
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)();
    const { 0: fileId , 1: setFileId  } = (0,external_react_.useState)();
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const fetchSchedule = async (data)=>{
        setIsLoading(true);
        const response = await fetch("/api/schedule", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        setFileId(result.id);
        setIsLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        if (!selectedClass) return;
        const data = {
            className: selectedClass,
            scheduleType: scheduleType
        };
        fetchSchedule(data);
    }, [
        scheduleType,
        selectedClass
    ]);
    const handleChangeSearch = (value)=>{
        setSelectedClass();
        setSearch(value);
    };
    const handleChange = (item)=>{
        setSelectedClass(item);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4 pt-10 sm:pt-10 lg:pt-10 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-10 md:mb-10 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                            children: f({
                                id: "Schedule.WeeklySchedule",
                                defaultMessage: "Weekly Schedule"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${scheduleType === constant/* SCHEDULE_TYPE.program */.By.program ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setScheduleType(constant/* SCHEDULE_TYPE.program */.By.program)
                                        ,
                                        children: f({
                                            id: "Schedule.ClassSchedule",
                                            defaultMessage: "Class Schedule"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${scheduleType === constant/* SCHEDULE_TYPE.meal */.By.meal ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setScheduleType(constant/* SCHEDULE_TYPE.meal */.By.meal)
                                        ,
                                        children: f({
                                            id: "Schedule.MealMenu",
                                            defaultMessage: "Meal Menu"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown_search, {
                            title: f({
                                id: "Schedule.SelectClass",
                                defaultMessage: "Select Class"
                            }),
                            placeholder: f({
                                id: "Schedule.PleaseSelectAClass",
                                defaultMessage: "Please select a class"
                            }),
                            options: classes,
                            value: selectedClass,
                            handleChange: handleChange,
                            search: search,
                            handleChangeSearch: handleChangeSearch
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-56 bg-purple-25"
            }),
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loading, {
            }) : /*#__PURE__*/ jsx_runtime_.jsx(PdfView, {
                fileId: fileId
            })
        ]
    }));
};
/* harmony default export */ const schedule_hero = (ScheduleHero);


/***/ }),

/***/ 4451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7871);
/* harmony import */ var _components_schedule_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5601);
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6122);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8710);
/* harmony import */ var _helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9309);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_5__]);
_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Schedules = ({ classes , navigations  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        router.push("/");
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        navigations: navigations,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/images/schedules.jpg",
                alt: "hero",
                className: "w-full mt-1 max-h-[620px] object-cover",
                style: {
                    objectPosition: "0 90%"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_helpers_AnimationRevealPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_schedule_hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        classes: classes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Schedules);
async function getStaticProps({ locale  }) {
    const classes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getClasses */ .k)() ?? [];
    const navigations = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getNavigation */ .Ti)(locale) ?? [];
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,695,122,309], () => (__webpack_exec__(4451)));
module.exports = __webpack_exports__;

})();