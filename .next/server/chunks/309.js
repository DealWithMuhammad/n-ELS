"use strict";
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 9309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _hooks_useInView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function AnimatedSlideInComponent({ direction ="left" , offset =30 , children ,  }) {
    const [ref, inView] = (0,_hooks_useInView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(30);
    const x = {
        target: "0%"
    };
    if (direction === "left") x.initial = "-150%";
    else x.initial = "150%";
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            x: x.initial
        },
        animate: {
            x: inView && x.target,
            transitionEnd: {
                x: inView && 0
            }
        },
        transition: {
            type: "spring",
            damping: 19
        },
        ref: ref,
        children: children
    }));
}
const AnimationRevealPage = ({ disabled , children  })=>{
    if (disabled) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        }));
    }
    if (!Array.isArray(children)) children = [
        children
    ];
    const directions = [
        "left",
        "right"
    ];
    const childrenWithAnimation = children.map((child, i)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedSlideInComponent, {
            direction: directions[i % directions.length],
            children: child
        }, i));
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "font-display min-h-screen text-secondary-500 overflow-hidden mt-3",
        children: childrenWithAnimation
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationRevealPage);

});

/***/ }),

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


const useInView = (offset = 0)=>{
    const { 0: ref , 1: setRef  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: inView , 1: setInView  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const elementYPos = ()=>{
            return ref.getBoundingClientRect().top + window.pageYOffset - window.innerHeight + offset;
        };
        if (!ref) {
            return;
        }
        const handleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(()=>{
            if (!ref) {
                return;
            }
            if (window.pageYOffset >= elementYPos()) {
                window.removeEventListener("scroll", handleScroll);
                setInView(true);
            }
        }, 200);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll)
        ;
    }, [
        ref,
        offset
    ]);
    return [
        setRef,
        inView
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInView);


/***/ })

};
;