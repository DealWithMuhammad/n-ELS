"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Question = ({ question , answer , response  })=>{
    const { 0: showAnswer , 1: setShowAnswer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "w-full px-5 py-6 sm:px-8 sm:py-4 border border-1 border-primary-100 rounded-2xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex items-center justify-between w-full text-lg sm:text-xl group",
                onClick: ()=>setShowAnswer(!showAnswer)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-left text-primary-100 duration-300 ease-in-out font-bold",
                        children: question
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `flex-shrink-0 w-5 h-6 ml-3 text-primary-100 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6  ${showAnswer ? "transform rotate-180" : ""}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 9l-7 7-7-7"
                        })
                    })
                ]
            }),
            showAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative duration-700",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-3 text-base leading-relaxed text-purple-800 sm:text-lg",
                    children: response && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_post_body__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        content: response,
                        className: "max-w-screen-lg"
                    })
                })
            })
        ]
    }));
};
const Faq = ({ id , faq  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
        className: "pt-20 pb-2 sm:pt-28",
        id: id,
        viewport: {
            once: true
        },
        transition: {
            duration: 1
        },
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-2xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-primary-100 text-5xl font-bold",
                        children: f({
                            id: "Home.FrequentlyAskedQuestions",
                            defaultMessage: "Frequently asked questions"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "relative mt-12 space-y-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "absolute hidden h-auto w-28 -left-40 top-10 sm:block 2xl:-left-60",
                                    src: "svg/question-mark.svg",
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "absolute hidden h-auto w-28 -right-40 bottom-10 sm:block 2xl:-right-60",
                                    src: "svg/bulb.svg",
                                    alt: ""
                                })
                            ]
                        }),
                        faq === null || faq === void 0 ? void 0 : faq.map((item, idx)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Question, {
                                question: item === null || item === void 0 ? void 0 : item.question,
                                response: item === null || item === void 0 ? void 0 : item.response
                            }, `question-${idx}`));
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);

});

/***/ })

};
;